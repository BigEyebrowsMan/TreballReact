import imatge from "/home/dani/Documents/ento-web/src/img/face.png";
import "./index.scss";
function About() {
  return (
    <div class="wrapper">
      <div class="left-side">
        <div class="vertical-text">Anna Gual</div>
      </div>
      <div class="top-section">
        <div class="intro">
          <h1 class="heading">
            "Hi there! My name is Anna Gual, I am working in the 3D printing
            world but I also do 3D design"
          </h1>
          <div class="buttons">
            <a class="portfolio">View Portafolio</a>
            <a class="About">about</a>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="services">
          <div class="service">
            <div class="icon-box">
              <img src="" loading="lazy" alt class="service-icon" />
              <div class="icon-decor">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
              </div>
            </div>
            <h4 class="service-heading">3D modeling</h4>
          </div>
          <div class="service">
            <div class="icon-box">
              <img src="" loading="lazy" alt class="service-icon" />
              <div class="icon-decor">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
              </div>
            </div>
            <h4 class="service-heading">3D printing</h4>
          </div>
          <div class="service">
            <div class="icon-box">
              <img src="" loading="lazy" alt class="service-icon" />
              <div class="icon-decor">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
              </div>
            </div>
            <h4 class="service-heading">3D repairing</h4>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-top">
          <h2 class="section-top-heading">Demo reel</h2>
        </div>
        <div>
          <div style="padding-top:56%" class="w-video w-embed">
            ::before
            <iframe
              class="emberdly-embed"
              src=""
              scrolling="no"
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowfullscreen="true"
            ></iframe>
            ::after
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-top">
          <h2 class="section-top-heading">Works</h2>
          <a href="" clas="section-top-link">
            <div>View All</div>
            <div class="hover-line" style></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
