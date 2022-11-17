import React, {useEffect} from 'react';
import './Profile.css';
import picture from './picture1.JPG';
import transition from './transition7.png';
import Aos from "aos";
import "aos/dist/aos.css";
import lkdn from './linkedin.svg';
import malt from './malt.svg';
import Button from 'react-bootstrap/Button';


function Profile() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-profile">
      <div className="profile-title">
        <h1> Qui suis-je ?</h1>
      </div>
      <div className='profile-grid' id="profile">
        <div className='profile-content'>
          <h2> Mon parcours </h2>

          <p> Après avoir travaillé en finance pendant quelques années puis dans l'entrepreneuriat qui m' a ouvert au monde de la tech, je me suis lancée
            dans le développement web en tant que freelance. Très curieuse, j'ai vite pris goût au développement no-code pour sa rapidité et la polyvalence 
            que nécessite ces outils. Je me suis depuis passionnée pour ce métier à la croisée entre le product management, 
            la construction de solutions et le product design.
             </p><br />


          <h2> Mes compétences web </h2>

          <p> ✔︎ <b>Outils No-Code</b></p>
              <li> Bubble </li>
              <li> Webflow </li>
              <li> Airtable </li>
              <li> Make </li>
              <li> Et tous les outils autour type Figma, Hubspot... </li>

            <p> ✔︎ <b>Languages </b>: HTML, CSS, React JS, javascript, SQL </p>
            
            
        </div>
        <div>
          <img className='image-profile-home' src={picture} alt='profile' />
        </div>
      </div>
      <div className='contact'>
              <Button variant="primary" href="https://forms.gle/1NFiDC1refLNJUx66"><b >Me proposer une mission</b></Button>
              <h5>ou</h5>
              
                <h5>Me contacter</h5>
                <div className="social-media-footer">
                  <a href="https://www.malt.fr/profile/audreylemoine"><i><img src={malt} className="social-logo" alt="image du logo malt" /></i></a>
                  <a href="https://www.linkedin.com/in/audreylm/" ><i><img src={lkdn} className="social-logo" alt="image du logo linkedin" /></i></a>
                </div>
              
      </div>
      <div className="transition-profile">
        <img className='image-transition' data-aos="flip-right" src={transition} alt='profile' />
      </div>
    </div>

  )
}

export default Profile;
