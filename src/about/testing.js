import imatge from "/home/dani/Documents/ento-web/src/img/face.png";
import "./testing.scss";

const photoSyle = {
  transform:
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;",
  transformStyle: "preserve-3d",
};

function Test() {
  return (
    <div class="wrapper">
      <div class="left-side">
        <div class="vertical-text">Anna Gual</div>
      </div>
      <div class="content">
        <div class="top-section">
          <div class="intro">
            <h1 class="heading">
              "Hi there! My name is Anna Gual, I am working in the 3D printing
              world but I also do 3D design"
            </h1>
            <div class="w-layout-grid _2-buttons">
              <a class="portfolio">View Portafolio</a>
              <a class="About">about</a>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div
          //style="display: none; transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
          class="overlay"
        ></div>
        <img
          src="https://cdnb.artstation.com/p/users/avatars/001/327/773/large/fc9f0eb143dfec911cd3104c4d41fbe4.jpg?1712056185"
          style={photoSyle}
          sizes="(max-width: 767px) 87vw, (max-width: 991px) 80vw, 26vw"
          //srcset="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/6446f5875a1a45587435a33a_little_indonesian_girl_compo2-p-500.png 500w, https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/6446f5875a1a45587435a33a_little_indonesian_girl_compo2-p-800.png 800w, https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/6446f5875a1a45587435a33a_little_indonesian_girl_compo2.png 1000w"
          alt=""
          class="bg-image"
        ></img>
        <div class="contact-block">
          <div>Email me:&nbsp;</div>
          <div>
            <span class="text-span">anngu@gmail.com</span>
          </div>
        </div>
        <div class="social-buttons">
          <a
            href="https://www.artstation.com/"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba011468cc743a8149900a_artstation_icon_136926.png"
              loading="lazy"
              alt=""
            />
          </a>
          <a
            href="https://vimeo.com/467678571"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba0279021caa2b7428e710_pngwing.com.png"
              loading="lazy"
              sizes="20px"
              srcset="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba0279021caa2b7428e710_pngwing.com-p-500.png 500w, https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba0279021caa2b7428e710_pngwing.com-p-800.png 800w, https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba0279021caa2b7428e710_pngwing.com.png 1080w"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60a92d1952279b0b0ba8b060_linkedin.svg"
              loading="lazy"
              alt=""
            />
          </a>
          <a
            href="https://sketchfab.com/"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba034244effd10fc5df633_sketchfab-icon.png"
              loading="lazy"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60a92d1952279b837ca8b054_instagram.svg"
              loading="lazy"
              alt=""
            />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            class="social-button w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60a92d1952279bacc2a8b061_pinterest.svg"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Test;
