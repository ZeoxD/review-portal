import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useCollectionId = (collection) => {
  const [idDocuments, setIdDocuments] = useState(null)
  const [idError, setIdError] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(user.uid)

    const unsubscribe = ref.onSnapshot(snapshot => {
        setIdDocuments({...snapshot.data(), id: snapshot.id})
        setIdError(null)
    }, (idError) => {
      console.log(idError)
      setIdError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, user.uid])

  return { idDocuments, idError }
}