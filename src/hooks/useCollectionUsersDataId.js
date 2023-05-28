import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useCollectionUsersDataId = (collection, id) => {
  const [uidDocuments, setUidDocuments] = useState(null)
  const [uidError, setUidError] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {
    let ref = projectFirestore.collection('usersData').doc(user.uid).collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(snapshot => {
        setUidDocuments({...snapshot.data(), id: snapshot.id})
        setUidError(null)
    }, (uidError) => {
      console.log(uidError)
      setUidError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, id])

  return { uidDocuments, uidError }
}