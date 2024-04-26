import imatge from '/img/face.png'

function About () {
    return(
        <div>
            <header>
               <h1>Hello there! We're working on this page</h1> 
               <img src={imatge} alt="sillyFace" width="200" height="100"/>
            </header>
        </div>
    )

}


export default About;
