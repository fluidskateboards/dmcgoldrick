import React from "react";
import { Link, useNavigate } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  let navigate = useNavigate();
  async function handleHome() {
    navigate("/home");
  }
  async function handleProj() {
    navigate("/projects");
  }
  async function handleExp() {
    navigate("/experience");
  }
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand">Dylan McGoldrick</NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHome();
                  }}
                >
                  <i className="now-ui-icons location_world"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProj();
                  }}
                >
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Projects</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/experience"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExp();
                  }}
                >
                  <i className="now-ui-icons business_briefcase-24"></i>
                  <p>Experience</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/dylanmcgoldrick"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Connect with me on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/fluidskateboards"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  View My GitHub
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
