import React from 'react'
import '../Components/styles/Landing.css'
import 'bootstrap/dist/css/bootstrap.css'
import LandingSeccion1 from '../Components/LandingSeccion1'
import LandingSeccion2 from '../Components/LandingSeccion2'
import LandingSeccion3 from '../Components/LandingSeccion3'
import Video from '../Components/Video'
import Footer from '../Components/Footer'

class Landing extends React.Component {
    render() {
        return <React.Fragment>
            <LandingSeccion1 />
            <LandingSeccion2 />
            <LandingSeccion3 />
            <Video />
            <Footer />
        </React.Fragment>
    }
}

export default Landing;