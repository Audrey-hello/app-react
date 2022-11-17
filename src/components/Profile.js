import React, {useEffect} from 'react';
import './Profile.css';
import picture from './picture1.JPG';
import transition from './transition7.png';
import Aos from "aos";
import "aos/dist/aos.css";


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

          <p> <bold>✔︎ Outils No-Code</bold></p>
              <li> Bubble </li>
              <li> Webflow </li>
              <li> Airtable </li>
              <li> Make </li>
              <li> Et tous les outils autour type Figma, Hubspot... </li>

            <p> ✔︎ Languages : HTML, CSS, React JS, javascript, SQL </p>
            
          



        </div>
        <div>
          <img className='image-profile-home' src={picture} alt='profile' />
        </div>
      </div>
      <div className="transition-profile">
        <img className='image-transition' data-aos="flip-right" src={transition} alt='profile' />
      </div>
    </div>

  )
}

export default Profile;
