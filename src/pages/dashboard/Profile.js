import { useCollection } from '../../hooks/useCollection'

//styles
import './Create.css'

function Profile() {

    // form field hooks
    const { documents } = useCollection('profile')

    console.log(documents)
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
        {documents && 
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
      </>
    )
}

export default Profile