import React from 'react'
import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId';

//pages & components
import ViewReviews from '../dashboard/ViewReviews'

function CommentsList({handleComments, children, id}) {

    const { udiDocuments, udiError } = useCollectionUsersDataId('reviews', id)
    
    return (
        <div className="content-backdrop">
            <div className="content-modal">
                <div className="container-modal">
                    <div className="display-space-between">
                        <h3>Reviews: </h3>
                        <button className="btn btn-responsive" onClick={() => handleComments(false)}>Close</button> 
                    </div>
                    <ViewReviews doc={udiDocuments} err={udiError}/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CommentsList;