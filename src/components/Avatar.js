// styles & images
import './Avatar.css'

function Avatar({src}) {
    return (
        <div className="avatar">
            <img src={src} alt="user" />
        </div>
    )
}

export default Avatar