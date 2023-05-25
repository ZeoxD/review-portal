import { useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Create.css'

function Profile() {

    // form field hooks
    const { documents } = useCollection('profile')
    {/*let { id, title, education, location } = ["id", "title", "education", "location"]
    if(documents) {
      id = documents[documents.length-1].id,
      title = documents[documents.length-1].title,
      education = documents[documents.length-1].education,
      location = documents[documents.length-1].location
    }*/}

   { /*useEffect(() => {
      if (documents) {

      }
    }, [documents])*/}

    return (
      <>
        {documents && <p>Hello</p>
          /*<div key={id}>
            <div className="row-value">
              <p>Title: {title}</p>
            </div>
            <div className="row-value">
              <p>Education: {education}</p>
            </div>
            <div className="row-value">
              <p>Location: {location}</p>
            </div>
          </div>*/
        }
      </>
    )
}

export default Profile