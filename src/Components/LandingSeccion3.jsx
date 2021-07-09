import React from 'react'
import './styles/LandingSeccion3.css'
import team from '../images/team.png'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class LandingSeccion3 extends React.Component {
    render() {
        return <React.Fragment>
            <section className="info-section bg-light text-muted py-5 " id="info-section ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-6 ">
                            <Fade botton>
                            <h3 className="h3s3">con los beneficios de una aceleradora</h3>
                            <p className="ps3">
                        En Wortev somos expertos en optimizar modelos de negocio para impulsar empresas de alto impacto. 

                        </p>
                            </Fade>
                            
                        
                        </div>
                        <div className="col-md-6 ">
                               <Slide right>
                               <img src={team} alt=" " className="img-fluid align-self-center rouded-circle "/>

                               </Slide>
                            
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    }
}

export default LandingSeccion3;
