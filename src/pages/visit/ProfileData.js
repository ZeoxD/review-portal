import React from 'react'
import { useCollectionUsersDataId } from '../../hooks/useCollectionUsersDataId'

//styles & images
import WorkIcon from '../../assets/work.png';
import SchoolIcon from '../../assets/school.png';
import LocationIcon from '../../assets/location.png';

function ProfileData({id}) {

    const { udiDocuments } = useCollectionUsersDataId('profile', id)

    return (
      <React.Fragment>
        {udiDocuments && udiDocuments.length !== 0 &&
          <div key={udiDocuments[0].id}>
            <div className="row-value border-style">
              <img className="round-square icon-sm" src={WorkIcon} alt="work" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <img className="round-square" src={SchoolIcon} alt="education" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <img className="round-square" src={LocationIcon} alt="location" />
              <p className="display-center-2 padding-lr-10">{udiDocuments[0].location}</p>
            </div>
          </div>
        }
      </React.Fragment>
    )
}

export default ProfileData