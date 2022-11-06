
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

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
                    <li className="nav-item">
                      <a className="nav-link" href="/usereducer">
                        UseReducer
                      </a>
                    </li>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        CustomHook
                      </a>
                    </li>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <li className="nav-item">
                      <a className="nav-link" href='/error'>
                        Error Boundary
                      </a>
                    </li>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {" "}
                    <li className="nav-item">
                      <a className="nav-link" href="/found">
                        404
                      </a>
                    </li>
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
