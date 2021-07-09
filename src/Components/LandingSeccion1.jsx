import React from 'react'
import './styles/LandingSeccion1.css'
import Logo from './Logo'
import Form from './Form'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class LoginSeccion1 extends React.Component {
    render() {
        return <React.Fragment>
            
            <div className="container-fluid">
                <div className="row seccion-1">
                    <div className="col-lg-6">
                    <Slide bottom>
                    <Logo />
                    </Slide>
                        
                        <Fade bottom>  
                        <div className="col-fluid copys-container">
                            <p className="texto-inicio">Bienvenido al  </p>
                            <h1>Business Model Canvas</h1>
                            <h2>Estructura y reinventa tu empresa en nueve pasos. </h2>
                        </div> 

                    </Fade>
                       
                    </div>
                    
                    <div className="col-md-6 seccion-form ">
                        <Form />
                    </div>
                </div>
            </div>


          



       
        </React.Fragment>
    }
}

export default LoginSeccion1;