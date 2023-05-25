import { useEffect, useState } from 'react'
import {  projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useCollectionId } from './useCollectionId'

export const useUpdateScore = () => {
  const [scoreCancelled, setScoreCancelled] = useState(false)
  const [scoreError, setScoreError] = useState(null)
  const [isScorePending, setIsScorePending] = useState(false)
  const {  user } = useAuthContext()
  const { idDocuments } = useCollectionId('users')

  const value = idDocuments ? (isNaN(idDocuments.score) ? 500 : idDocuments.score) : 500
  
  const score = async () => {
    setScoreError(null)
    setIsScorePending(true)

    try {

      // edit the documents before logging out
      const { uid } = user
      await projectFirestore.collection('users').doc(uid).update({ score: value + 43 })

      // update state
      if (!scoreCancelled) {
        setIsScorePending(false)
        setScoreError(null)
      } 
    } 
    catch(err) {
      if (!scoreCancelled) {
        setScoreError(err.message)
        setIsScorePending(false)
      }
    }
  }

  useEffect(() => {
    return () => setScoreCancelled(true)
  }, [])

  return { score, scoreError, isScorePending }
}