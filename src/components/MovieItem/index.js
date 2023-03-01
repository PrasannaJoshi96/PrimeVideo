// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="video-container">
              <button
                type="button"
                className="close-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
