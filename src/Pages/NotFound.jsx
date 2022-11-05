import { Link } from "react-router-dom";
import { CustomHooksPath, UseReducerPath } from "../paths";


export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to={CustomHooksPath}>CustomHooks</Link>
            <Link to={UseReducerPath}>UseReducer</Link>
        </div>
    )
}