
import React, { useEffect } from 'react';
import './Marketplace.css';
import mkt_gif from './marketplace.gif';
import Aos from "aos";
import "aos/dist/aos.css";




function Marketplace() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);



  return (

    <div className="container-resonance" id="mkt">
      <div className="mkt-title">
        <h1> Marketplace</h1>
      </div>
      <div className="content-resonance">
        <div className="image-resonance" data-aos="fade-left">
          <img src={mkt_gif} className="reso-gif" data-aos="fade-left" alt="gif book society" />
        </div>

        <div >
          <div className='resonance-text' data-aos="fade-right">
            <h2>  Co-création d'une marketplace </h2> <br />
            <p> Cette marketplace permet à des artisans de répondre à des appels d'offres sur des projets de maintenance.
              L'artisan peut ainsi faire une proposition chiffrée qui sera ainsi validée par le client.</p><br />

            <div className="widgets-outils-mkt">
              <p>Bubble</p>
              <p>Make</p>
  
            </div>

            <h2> Autres </h2> <br />

            <p>
              <li>Hubspot, Mixpanel, Mailjet</li>
              <li>Design sur Figma</li>
              <li>Documentation, gestion de projet, création d'un dashboard de gestion backoffice</li>

            </p>
            
            <a href='https://www.youtube.com/watch?v=ti1DMsrzRNs&feature=youtu.be' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
              <button className="btn btn--inline-mkt">
                Voir la démo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Marketplace;
