import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, imageChanged} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onStateChange = () => {
    imageChanged(id)
  }
  return (
    <li className="list-container">
      <button type="button" onClick={onStateChange} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
