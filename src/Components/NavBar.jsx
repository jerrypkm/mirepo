import React from 'react'
import createHistory from 'history/createBrowserHistory' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageLoading from './PageLoading'
import axios from 'axios'
import './styles/NavBar.css'
import pp from '../images/icons-sidebar/pp.jpg'

import { createHashHistory } from 'history'

class NavBar extends React.Component{
  constructor(props){
    super(props); 
  }
  Salir = () => {
    
    const history = createHistory(); 
    /*
    this.setState({
        show1:"menu-form active",
        show2: "menu-form",
        lActive: false,
    });
    */
    localStorage.clear();
    history.push('/');
  };
    render() {
        return <React.Fragment> 
        
        
          <nav className="navbar navbar-expand-lg navbar-light navbar-p">
            <div className="container-fluid">
              <a className="navbar-brand" href="/my-bmc">
                <svg width="136" height="21" viewBox="0 0 136 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128.443 0.181743L123.408 10.2295L118.373 0.181743H112.012H110.845H94.2782H94.2734H74.4388V4.98928C73.2673 1.93427 70.164 0.181743 65.6326 0.181743H55.2966V9.04389C54.4639 3.9421 49.3758 0 43.2322 0C38.7541 0 34.8327 2.0987 32.7171 5.20997L34.9295 0.177416H27.474L23.7366 9.16938L19.2245 0.181743H15.7389L11.1978 9.17803L7.4555 0.181743H0L9.09668 20.7966H12.6501L17.472 10.7705L22.3181 20.7966H25.8667L31.2841 8.47703C31.134 9.13044 31.0565 9.80981 31.0565 10.5022C31.0565 16.292 36.5223 21.0043 43.2371 21.0043C49.3806 21.0043 54.4736 17.0622 55.2966 11.9604V20.8009H62.1808V16.1362H64.5676C64.6014 16.1362 64.6402 16.1362 64.6741 16.1362L68.5228 20.8572H76.8062L71.5486 14.5308C73.335 13.4187 74.9665 11.4455 74.9665 7.95343C74.9665 7.20049 74.8746 6.49948 74.71 5.84607H80.8922V20.7966H87.8055V5.84607H94.2782V20.7966H112.622V15.1323H101.037V13.5399H110.22V7.97939H101.037V5.84607H112.007V2.41892L121.573 20.7923H125.238L136 0.177416H128.443V0.181743ZM47.0568 11.4282C46.0305 13.6221 43.8422 17.3305 41.9977 17.3305C40.3565 17.3305 40.9859 11.2767 40.037 10.2209C39.3302 9.43767 36.6675 12.5057 36.6675 11.4282C36.6675 8.90109 43.9826 4.55224 46.839 4.55224C49.7098 4.55224 48.1461 9.10014 47.0568 11.4282ZM64.4175 10.6277H62.1711V5.84607H64.9597C66.9446 5.84607 67.8644 6.60767 67.8644 8.23903C67.8741 9.82279 66.7122 10.6277 64.4175 10.6277Z" fill="#E20515"/></svg>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="grow-sp"></div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  <li className="nav-item"><a href="" className="nav-link">Compartir</a></li>
                  <li className="nav-item"><a href="" className="nav-link">Imprimir</a></li>
                  <li className="nav-item"><a href="" className="nav-link">Descargar</a></li>
                </ul>
                <div className="d-flex user-drop">
                  <div className="nav-item dropdown">
                    <a className="nav-link flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="profile-name">{this.props.formValues.nombre}</span>
                      <div className="profile-pic">
                        <img src={localStorage.getItem('photo')} alt=""/>
                      </div>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/confirm">Perfil</Link></li>
                      <li><a className="dropdown-item" href="#" onClick={this.Salir}>Salir</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

      </React.Fragment>
    }
}

export default NavBar;