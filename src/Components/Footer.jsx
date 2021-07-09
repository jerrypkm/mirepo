import React from 'react'
import './styles/Footer.css'
import Logo from '../images/LOGO.png'
import SocialIcon from '../images/social-icons.jpg'

class Footer extends React.Component {
    render(){
        return <React.Fragment>
          <footer className="container-fluid footer-main">
            <div className="row father">
              <div className="col-12  espacio">
                <img className="logo_1" src={Logo} alt=""/>
              </div>
              <div className="row">
                <div className=" col-md-4 border_left">
                  <h5>Contáctanos </h5>
                  <p>Teléfono: 55 6724 0778</p>
                  <p>E-mail: info@wortev.com</p>
                  <p>Puebla #237 piso 4 oficina 4004 - A.</p>
                  <p>Cuauhtémoc C.P. 06700, CDMX</p>
                </div>
                <div className=" col-md-4 border_left">
                  <h5>Consulta</h5>
                  <ul className="consulta">
                    <li><a href="https://wortev.com/Aceleradora/">Aceleradora</a></li>
                    <li><a href="https://wortev.com/media/">Media</a></li>
                    <li><a href="https://wortev.com/eventos/">Eventos</a></li>
                    <li><a href="https://wortev.com/aceleradora/#presenta-proyecto">Presenta tu proyecto</a></li>
                    <li><a href="https://wortev.com/mentores/">Mentores</a></li>
                    <li><a href="https://wortev.com/exploradores/">Exploradores</a></li>
                    <li><a href="https://wortev.com/aviso-de-privacidad/">Aviso de privacidad</a></li>
                    <li><a href="https://wortev.com/bolsa-de-trabajo/">Bolsa de trabajo</a></li>
                    <li><a href="https://wortev.capital/">Inversionistas</a></li>
                    <li><a href="https://wortev.com/contacto/">Contacto</a></li>                  
                  </ul> 
                </div>
                <div className=" col-md-4 border_left">
                  <h5>Siguenos</h5>
                  <a title="" href="https://www.facebook.com/wortev/"><img className="img" src={SocialIcon} alt="" /></a>
                  <p className="subsp">Suscríbete a nuestro a Newsletter:</p>
                  
                    <div className="Row">
                      <div className="col-12">
                      <input type="email" className="footerform" placeholder="E-mail"></input>
                      <p className="pfooterform">Escribe tu e-mail</p>
                      <button type="button" className="btn btn-danger btn-form">Quiero más noticias</button>
                      
                      
                        

                      </div>
                      
                    </div>
                  
                </div>
              </div >
            </div>
            <div className="row">
              <div className="col-md-12 leyenda">
                <p className="white">“Nuestra misión es evolucionar la economía apoyando a los emprendedores que están construyendo las empresas del futuro”.</p>
                <p className="white min">© 2020 WORTEV®. Todos los derechos reservados. Aviso de Privacidad</p>                    
              </div>
            </div>
          </footer>
        </React.Fragment>
    }
}

export default Footer