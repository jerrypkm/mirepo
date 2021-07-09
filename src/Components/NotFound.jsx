import React from 'react'
import Logo from './Logo'
import './styles/NotFound.css'

class NotFound extends React.Component {
    render(){
        return <React.Fragment>
            <div className="container-fluid">
                <div className="row seccion-1">
                    <div className="col-lg-6">
                        <Logo />
                        <div className="col-fluid copys-container">
                            <p className="texto-inicio">¡Error 404! </p>
                            <h1>Parece que estas perdido</h1>
                            <h2 className="texto-h2">No podemos encontrar la página que buscas, intenta con otra página <br/></h2>
                        </div>
                    </div>
                    <div className="col-md-6 seccion-form ">
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default NotFound