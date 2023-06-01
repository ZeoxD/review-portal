// styles & images
import './Avatar.css'

function Avatar({src, classAvatar}) {
    return (
        <div className={`avatar ${classAvatar}`}>
            <img src={src} alt="user" />
        </div>
    )
}

export default Avatar