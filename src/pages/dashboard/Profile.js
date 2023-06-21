import { useState, useEffect } from 'react'
import { useCollectionUsersData } from '../../hooks/useCollectionUsersData'

//styles
import './Create.css'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      <>
        {udDocuments && udDocuments.length !== 0 &&
          <div key={udDocuments[0].id}>
            <div className="row-value border-style">
              <WorkIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <SchoolIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <LocationOnIcon className="round-square" />
              <p className="display-center-2 padding-lr-10">{udDocuments[0].location}</p>
            </div>
          </div>
        }
        {udDocuments && !udDocuments.length !== 0 && !cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(true)}>Edit</button>}
        {udDocuments && !udDocuments.length !== 0 && cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(false)}>Cancel</button>}
      </>
    )
}

export default Profile