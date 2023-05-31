import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollectionUsersDataId = (collection, id, _query, _orderBy) => {
  const [udiDocuments, setUdiDocuments] = useState(null)
  const [udiError, setUdiError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection('usersData').doc(id).collection(collection)
    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setUdiDocuments(results)
      setUdiError(null)
    }, error => {
      setUdiError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { udiDocuments, udiError }
}