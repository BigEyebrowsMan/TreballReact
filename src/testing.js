
import "./testing.scss";

const photoSyle = {
  transform:
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;",
  transformStyle: "preserve-3d",
};

const headerStyle = {
  transform:
    "width: 100%; transform: translate3d(-102%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);",
};

const animationViewAll = {
  transform:
    "width: 100%, translate3d(-102%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
};

const worksViewer = {
  transform:
    "transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);",
  transformStyle: "preserve-3d",
};

const cardPreview = {
  transform:
    "display: none; transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;",
};

const instagramPhoto = {
  transform:
  "width: 100%; transform: translate3d(-102%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
};

const mesInstagram = {
  transform:
  "display: none; transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
};

const encaraMesInsta = {
  transform:
  "transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
};

const encaraMesInsta2 = {
  transform:
  "transform: translate3d(0px, 24px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
};

const animacioInsta = {
  transform:
  "display: none; transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
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
        <div class="section">
          <div class="section-top">
            <h2 class="section-top-heading">Works</h2>
            <a
              data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad844"
              href="/works"
              class="section-top-link w-inline-block"
            >
              <div>View All</div>
              <div
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad847"
                class="hover-line"
                style={animationViewAll}
              ></div>
            </a>
          </div>
          <div class="collection-list-wrapper-2 w-dyn-items">
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/casa/princess-peach-stained-glass-window"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg"
                    srcset="https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 500w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 800w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 1080w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 1600w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 2000w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/6a7d2b1f-213a-4995-85c3-4f1d26265c13/_MG_3788.jpg 2048w"
                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/juegos/majora-s-mask-annagualhz"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg"
                    srcset="https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 500w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 800w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 1080w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 1600w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 2000w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/ee87fbf6-d528-4008-9ad6-f72ca422abe2/_MG_3749.jpg 2048w"
                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/casa/abstract-paintings"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/d8ef5174-4afc-4cab-80fa-0a9f75c8ae75/_MG_3834.jpeg"

                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/casa/abstract-paintings"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/ff0f3c21-cd96-45a6-a822-3119b18d65f4/1CEAA01A-7411-4E68-BA80-4876FB14A93E.jpeg"

                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/arte/wood-gauntlet"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/8195348e-cacb-40a3-9006-269b9ff5a83c/IMG_3519.jpg"

                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/arte/bone-axe-annagualhz"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/1c909f96-c42f-42cc-9d6a-68cd8378e9d6/IMG_3526.jpg"

                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/arte/gomu-gomu"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/ec8c814e-6f3f-449f-ae46-1b950b609fb6/_MG_4044.jpg"
                    class="bg-image"
                  />
                </div>
              </a>
            </div>
            <div role="listitem" class="collection-item-2 w-dyn-item">
              <a
                data-w-id="793fbe8c-fc98-cc2d-7ee8-8ad1f43ad84b"
                href="https://cults3d.com/es/modelo-3d/arte/chopper-annagualhz"
                class="work-card w-inline-block"
              >
                <div class="work-card-preview">
                  <div style={cardPreview} class="overlay"></div>
                  <img
                    loading="lazy"
                    style={worksViewer}
                    sizes="sizes=(max-width: 479px) 40vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, 26vw"
                    alt=""
                    src="https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg"
                    srcset="https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 500w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 800w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 1080w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 1600w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 2000w, https://fbi.cults3d.com/uploaders/20059559/illustration-file/e0ef193f-3019-425d-a781-ed81c2d3bbd8/_MG_4115.jpg 2048w"
                    class="bg-image"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="section">
        <div class="section-top">
        <h2 class="section-top-heading">Instagram</h2>
        <a data-w-id="c5206756-23c9-41f6-e850-1093727110cb" 
        href="https://www.instagram.com/sarawav/" 
        target="_blank" 
        class="section-top-link w-inline-block">
        <div>@ANNAGUAL.3D</div>
        <div data-w-id="c5206756-23c9-41f6-e850-1093727110ce" 
        class="hover-line" 
        style={instagramPhoto}></div>
        </a>
        </div>
        <div class="instagram-photos">
        <a href="https://www.instagram.com/p/CKwn3gwjQtQ/" 
        target="_blank" 
        class="instagram-preview w-inline-block">
        <div class="overlay" 
        style={mesInstagram}>
        </div>
        <img src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba525d7f2e033ebefab9cb_3D_diva.png" 
        sizes="(max-width: 300px) 42vw, (max-width: 400px) 21vw, (max-width: 500px) 19vw, 13vw" 
        alt="" 
        class="bg-image-insta instagram-image" 
        style={encaraMesInsta}/>
        <div class="instagram-hover" 
        style={encaraMesInsta2}>
        <div class="instagram-text-label">view on</div>
        <div class="instagram-text">Instagram</div>
        </div>
        </a>
        <a href="https://www.instagram.com/p/CKwn3gwjQtQ/" 
        target="_blank" 
        class="instagram-preview w-inline-block">
        <div class="overlay" 
        style={mesInstagram}>
        </div>
        <img src="https://uploads-ssl.webflow.com/60a92d1852279b1c6ea8b00f/60ba525d7f2e033ebefab9cb_3D_diva.png" 
        sizes="(max-width: 300px) 42vw, (max-width: 400px) 21vw, (max-width: 500px) 19vw, 13vw" 
        alt="" 
        class="bg-image-insta instagram-image" 
        style={encaraMesInsta}/>
        <div class="instagram-hover" 
        style={encaraMesInsta2}>
        <div class="instagram-text-label">view on</div>
        <div class="instagram-text">Instagram</div>
        </div>
        </a>
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
