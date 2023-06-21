//pages & components
import Avatar from '../../components/Avatar'

function ViewReviews({doc, err}) {
    return (
        <div className="review-section">
            {doc && doc.length === 0 && <p>No reviews yet!</p>}
            {doc && doc.map(doc => (
                <div key={doc.id} className="border-shadow padding-12 margin-12">
                    <div className="flex-row">
                        <Avatar src={doc.photoURL} classAvatar={doc.photoURL ? "avatar-component" : ""}/>
                        <h4>{doc.name}</h4>
                    </div>
                    <p className="review-style">{doc.reviews}</p>
                </div>
            ))}
        </div>
    )
}

export default ViewReviews
