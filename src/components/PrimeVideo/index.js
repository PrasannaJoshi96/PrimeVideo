// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'
import MovieItem from '../MovieItem'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movies => movies.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    movies => movies.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="video-section-container">
        <h1 className="heading">Action Movies</h1>
        <div>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <h1 className="heading">Comedy Movies</h1>
        <div>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
