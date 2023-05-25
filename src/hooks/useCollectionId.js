import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useCollectionId = () => {
  const [idDocuments, setIdDocuments] = useState(null)
  const [idError, setIdError] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {
    let ref = projectFirestore.collection('users').doc(user.uid)

    const unsubscribe = ref.onSnapshot(snapshot => {
        setIdDocuments({...snapshot.data(), id: snapshot.id})
        setIdError(null)
    }, (idError) => {
      console.log(idError)
      setIdError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [])

  return { idDocuments, idError }
}