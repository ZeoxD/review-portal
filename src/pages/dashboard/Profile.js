import { useState } from 'react'
import { useCollectionUsersData } from '../../hooks/useCollectionUsersData'

//styles
import './Create.css'

function Profile({changeCancel, back}) {

    // form field hooks
    const { udDocuments } = useCollectionUsersData('profile')
    const [cancel, setCancel] = useState(false)

    console.log(back)

    const handleEdit = (val) => {
      setCancel(val)
      changeCancel(val)
    }

    return (
      <>
        {udDocuments && udDocuments.length !== 0 &&
          <div key={udDocuments[0].id}>
            <div className="row-value border-style">
              <p>{udDocuments[0].title}</p>
            </div>
            <div className="row-value border-style">
              <p>Education: {udDocuments[0].education}</p>
            </div>
            <div className="row-value border-style">
              <p>Location: {udDocuments[0].location}</p>
            </div>
          </div>
        }
        {udDocuments && !udDocuments.length != 0 && !cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(true)}>Edit</button>}
        {udDocuments && !udDocuments.length != 0 && cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(false)}>Cancel</button>}
      </>
    )
}

export default Profile