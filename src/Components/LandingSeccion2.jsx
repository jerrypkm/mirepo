import React from 'react'
import './styles/LandingSeccion2.css'
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

class LandingSeccion2 extends React.Component {

    scrollTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }

    render() {
        return <React.Fragment>
            <div className="container-fluid">
            </div>
            <div className="row">
                <Fade button>
                <div className="col-6 col1">
                    {/*aqui va la foto como background*/}
                </div>
                </Fade>
                
                <div className="col-6 col2 fix_padding">
                
                <div className=" d1">
                    <Fade button>
                    <h3 className="bmc">BUSINESS MODEL CANVAS</h3>
                    </Fade>
                    
                    </div>

                
                    
                    <div className="d2">
                        <p className="pd2">La metodología que te permite crear y entregar valor con tu empresa.</p>
                        <Bounce>
                        <button onClick={this.scrollTop} className="btn2">
                            Iniciar <span className="margin"> {`>`} </span>
                        </button>
                        </Bounce>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default LandingSeccion2;
