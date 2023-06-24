import { useCollectionUsersData } from '../../hooks/useCollectionUsersData';

//styles & images
import './CommentsList.css'

//pages & components
import ViewReviews from './ViewReviews'

function CommentsList({handleComments}) {

    const { udDocuments, udError } = useCollectionUsersData('reviews')
    
    return (
        <div className="content-backdrop">
            <div className="content-modal">
                <div className="display-space-between">
                    <h3>Reviews: </h3>
                    <button className="btn btn-responsive" onClick={() => handleComments(false)}>Close</button> 
                </div>
                <ViewReviews doc={udDocuments} err={udError}/>
            </div>
        </div>
    )
}

export default CommentsList;