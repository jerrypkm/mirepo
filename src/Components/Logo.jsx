import React from 'react'
import './styles/Logo.css'
import { Link } from 'react-router-dom'
import logo from '../images/WORTEV-LOGO.svg'

class Logo extends React.Component {
    render() {
        return <div className="logo col-fluid">
            <Link to="/">
                <img className="image" src={logo} alt="Logo" />
            </Link>
        </div>
    }
}

export default Logo;
