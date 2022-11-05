import { CustomHooksPath, UseReducerPath } from "../paths";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow tg">
      <div className="container">
        <div className="container-fluid d-flex muti">
          <h1 className="name-title">TimBa</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ni mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href={CustomHooksPath}>
                  CustomHook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={UseReducerPath}>
                  UseReducer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
