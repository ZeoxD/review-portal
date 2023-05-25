import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Create.css'

function Profile({changeCancel}) {

    // form field hooks
    const { documents } = useCollection('profile')
    const [cancel, setCancel] = useState(false)

    const handleEdit = (val) => {
      setCancel(val)
      changeCancel(val)
    }

    return (
      <>
        {documents && documents.length !== 0 &&
          <div key={documents[0].id}>
            <div className="row-value border-style">
              <p>{documents[0].title}</p>
            </div>
            <div className="row-value border-style">
              <p>Education: {documents[0].education}</p>
            </div>
            <div className="row-value border-style">
              <p>Location: {documents[0].location}</p>
            </div>
          </div>
        }
        {documents && !documents.length != 0 && !cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(true)}>Edit</button>}
        {documents && !documents.length != 0 && cancel && <button className="btn btn-margin" 
        onClick={() => handleEdit(false)}>Cancel</button>}
      </>
    )
}

export default Profile