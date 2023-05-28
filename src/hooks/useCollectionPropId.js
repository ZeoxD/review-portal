import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollectionPropId = (collection, id) => {
  const [pidDocuments, setPidDocuments] = useState(null)
  const [pidError, setPidError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(snapshot => {
        setPidDocuments({...snapshot.data(), id: snapshot.id})
        setPidError(null)
    }, (pidError) => {
      console.log(pidError)
      setPidError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, id])

  return { pidDocuments, pidError }
}