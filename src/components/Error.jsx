import { Link } from "react-router"
import errorImg from "../assets/error.gif"

function Error() {
    return (
        <div className="text-center">
            <img className="mx-auto" src={errorImg} alt="error image" />
            <Link to="/" className="btn btn-lg bg-green-600 text-white hover:bg-green-700">Go to homepage</Link>
        </div>
    )
}

export default Error