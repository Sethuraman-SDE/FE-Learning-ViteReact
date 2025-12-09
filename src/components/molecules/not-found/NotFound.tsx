import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <Link to="/" className="text-blue-500 underline">Go to home</Link>
    </div>
  )
}

export default NotFound