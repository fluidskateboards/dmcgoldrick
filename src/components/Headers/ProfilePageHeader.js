import React, { useRef, useEffect, useState } from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

import Resume from "../../assets/img/mcgresume1.pdf";

// core components

function ProfilePageHeader() {
  let pageHeader = useRef(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    "https://cdn.astrobin.com/thumbs/pt8LsxKDlcr8_1824x0_esdlMP5Y.jpg"
  );
  const [imageCredit, setImageCredit] = useState(
    "Image Title: IC 2118: The Witch Head Nebula Copyright: Abdullah Alharbi"
  );
  // const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

  useEffect(() => {
    // if (window.innerWidth > 991) {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      pageHeader.current.style.transform =
        "translate3d(0," + windowScrollTop + "px,0)";
    };
    window.addEventListener("scroll", updateScroll);
    getapi("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    return function cleanup() {
      window.removeEventListener("scroll", updateScroll);
    };
    // }
    // console.log("Hello");
  }, []);

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log("api called");
    var imgCred = "";
    if (data.copyright) {
      imgCred = `Image Title: ${data.title} Copyright: ${data.copyright}`;
    } else if (data.url === undefined) {
      imgCred = `Demo API Limit Reached`;
    } else {
      imgCred = `Image Title: ${data.title}`;
    }
    setBackgroundImageUrl(data.url);
    setImageCredit(imgCred);
    // setBackgroundImageLoaded(true);
  }
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundColor: "#2c2c2c",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          {/* <div className="photo-container"> */}
          {/* <img alt="..." src={require("assets/img/ryan.jpg")}></img> */}
          <i className="n-logo now-ui-icons tech_laptop"></i>
          {/* </div> */}
          <h3 className="title">Dylan McGoldrick</h3>
          <p className="category">
            Computer Science Grad from Loyola Marymount University
          </p>

          <div className="content">
            <div className="social-description">
              <a target="_blank" href={Resume}>
                {/* <i className="fab fa-linkedin home-icon"></i> */}
                <Button className="btn-cstm">Resume</Button>
              </a>
            </div>
            <div className="social-description">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/dylanmcgoldrick"
              >
                <i className="fab fa-linkedin home-icon"></i>
              </a>
            </div>

            <div className="social-description">
              <a target="_blank" href="https://github.com/fluidskateboards">
                <i className="fab fa-github home-icon"></i>
              </a>
            </div>
          </div>
          <div className="email">
            <a className="email" href="mailto:dylanmcgoldrick@gmail.com">
              dylanmcgoldrick@gmail.com
            </a>
          </div>

          <p>{imageCredit}</p>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
