import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"
//import { useAuthContext } from './useAuthContext'

export const useCollectionUsersDataVisitId = (collection, id, _query, _orderBy) => {
  const [udvDocuments, setUdvDocuments] = useState(null)
  const [udvError, setUdvError] = useState(null)
  //const { user } = useAuthContext()

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
      setUdvDocuments(results)
      setUdvError(null)
    }, error => {
      setUdvError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { udvDocuments, udvError }
}