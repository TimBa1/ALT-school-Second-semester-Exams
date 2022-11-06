
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CustomHooksPath, ErrorBoundaryPath, NotFoundPath, UseReducerPath } from "../paths";

function OffcanvasExample() {
  return (
    <div className="nav-item">
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 shadow sticky tgi">
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <h1 className="name-title">TimBa</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    {" "}
                  <Link to={UseReducerPath}>
                    <li className="nav-item">
                      <a className="nav-link" href="/usereducer">
                        UseReducer
                      </a>
                    </li></Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <Link to={CustomHooksPath}>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        CustomHook
                      </a>
                    </li></Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <Link to={ErrorBoundaryPath}>
                    <li className="nav-item">
                      <a className="nav-link" href='/error'>
                        Error Boundary
                      </a>
                    </li></Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <Link to={NotFoundPath}>
                    <li className="nav-item">
                      <a className="nav-link" href="/found">
                        404
                      </a>
                    </li></Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;
