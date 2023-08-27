import { useRef, useEffect } from "react";
import Container from "../../layout/container/Container"
import "./_error404.scss"
import { NavLink } from "react-router-dom";

const Error404 = () => {
    const faceRef = useRef(null);

    useEffect(() => {
        function handleMouseMove(event) {
            const face = faceRef.current;
            const eyes = face.querySelectorAll('.error__face__eye');
            
            eyes.forEach(eye => {
              const centerX = eye.offsetLeft + eye.offsetWidth / 2;
              const centerY = eye.offsetTop + eye.offsetHeight / 2;

              const radius = Math.atan2(event.pageX - centerX, event.pageY - centerY);
              const degree = (radius * (180 / Math.PI) * -1) - 90;
              eye.style.transform = `rotate(${degree}deg)`;
            });
          }
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return(
        <Container layoutType="big">
            <div className="error">
                <span className="error__message">
                    Cette page n'existe pas. <NavLink className="error__message__link" to="/">Cliquez ici</NavLink>
                </span>
                <div className='error__face' ref={faceRef}>
                    <div className='error__face__eye'></div>
                    <div className='error__face__eye'></div>
                </div>
            </div>
        </Container>
    )
}

export default Error404