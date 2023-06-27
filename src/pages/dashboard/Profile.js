import React from 'react'
import { useState, useEffect } from 'react'
import { useCollectionUsersData } from '../../hooks/useCollectionUsersData'

//styles
import './Create.css';
import WorkIcon from '../../assets/work.png';
import SchoolIcon from '../../assets/school.png';
import LocationIcon from '../../assets/location.png';

function Profile({changeCancel, back}) {

    // form field hooks
    const [cancel, setCancel] = useState(false)
    const { udDocuments } = useCollectionUsersData('profile')

    useEffect(() => {
      setCancel(back)
    }, [back])

    const handleEdit = (val) => {
      setCancel(val)
      changeCancel(val)
    }

    return (
      <React.Fragment>
        {udDocuments && udDocuments.length !== 0 &&
          <div key={udDocuments[0].id}>
            <div className="row-value border-style">
              <img className="round-square icon-sm" src={WorkIcon} alt="work" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <img className="round-square" src={SchoolIcon} alt="education" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <img className="round-square" src={LocationIcon} alt="location" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].location}</p>
            </div>
          </div>
        }
        {udDocuments && !udDocuments.length !== 0 && !cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(true)}>Edit</button>}
        {udDocuments && !udDocuments.length !== 0 && cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(false)}>Cancel</button>}
      </React.Fragment>
    )
}

export default Profile