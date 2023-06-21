import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId'

//styles & images
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ProfileData({id}) {

    // form field hooks
    const { udiDocuments } = useCollectionUsersDataId('profile', id)

    return (
      <>
        {udiDocuments && udiDocuments.length !== 0 &&
          <div key={udiDocuments[0].id}>
            <div className="row-value border-style">
              <WorkIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <SchoolIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <LocationOnIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].location}</p>
            </div>
          </div>
        }
      </>
    )
}

export default ProfileData