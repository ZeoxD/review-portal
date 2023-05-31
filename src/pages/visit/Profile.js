import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId'

function Profile({id}) {

    // form field hooks
    const { udiDocuments } = useCollectionUsersDataId('profile', id)

    return (
      <>
        {udiDocuments &&
          <div key={udiDocuments[0].id}>
            <div className="row-value border-style">
              <p>{udiDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <p><i>Education:</i> {udiDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <p><i>Location:</i> {udiDocuments[0].location}</p>
            </div>
          </div>
        }
      </>
    )
}

export default Profile