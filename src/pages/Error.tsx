import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error!</h1>
      <h2>You're lost!</h2>
      <h2>Go back beach</h2>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default ErrorPage
