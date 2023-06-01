import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId';

//styles & images
import './CommentsList.css'

//pages & components
import ViewReviews from './ViewReviews'

function CommentsList({handleComments, children, id}) {

    const { udiDocuments, udiError } = useCollectionUsersDataId('reviews', id)
    
    return (
        <div className="content-backdrop">
            <div className="content-modal">
                <div className="display-space-between">
                    <h3>Reviews: </h3>
                    <button className="btn" onClick={() => handleComments(false)}>Close</button> 
                </div>
                <ViewReviews doc={udiDocuments} err={udiError}/>
                {children}
            </div>
        </div>
    )
}

export default CommentsList;