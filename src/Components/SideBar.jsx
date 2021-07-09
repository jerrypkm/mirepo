import React from 'react'
import './styles/SideBar.css'
import ajustes from '../images/icons-sidebar/ajustes.svg'
import foco from '../images/icons-sidebar/foco.svg'
import grow from '../images/icons-sidebar/grow.svg'
import logo from '../images/icons-sidebar/logo.svg'
import minimize from '../images/icons-sidebar/minimize.svg'
import papelera from '../images/icons-sidebar/papelera.svg'
import pie_chart from '../images/icons-sidebar/pie_chart.svg'


class SideBar extends React.Component {
  
  constructor (props){
    super(props);
    this.x = React.createRef();
    this.y1 = React.createRef();
    this.y2 = React.createRef();
    this.y3 = React.createRef();
    this.sidebar = React.createRef();
    this.title = React.createRef();
    this.image = React.createRef();
  }
  
  handleClick = e => {
    if (this.x.current.style.display === "none") {
      this.title.current.style.display = "initial";
      this.x.current.style.display = "initial";
      this.y1.current.style.display = "initial";
      this.y2.current.style.display = "initial";
      this.y3.current.style.display = "initial";
      this.sidebar.current.style.width = "300px";
      this.image.current.src = minimize;
    }
    else{
      this.title.current.style.display = "none";
      this.x.current.style.display = "none";
      this.y1.current.style.display = "none";
      this.y2.current.style.display = "none";
      this.y3.current.style.display = "none";
      this.sidebar.current.style.width = "55px";
      this.image.current.src = grow;
     }
  } 

  render(){
      return <React.Fragment>

        <div className="sidebar" ref={this.sidebar}>
          <div className="sidebar-title">
            <img src={logo} alt=""/>
            <span className="sideTitle" ref={this.title}>Panel de bienvenida</span>
          </div>
            <nav className="nav flex-column nav-side">
              <a 
              className="nav-link " 
              aria-current="page" 
              href="#"
              onClick={this.props.onClickBmc}>
                <img src={pie_chart} alt=""/>
                <span className="nav-txt" ref={this.x}> Business Model Canvas</span>
              </a>
              <a 
              className="nav-link"
               
              href="#"
              onClick={this.props.onClickInfo}>
                <img src={foco} alt=""/>
                <span className="nav-txt" ref={this.y1}>¿Cómo llenar el BMC?</span>
              </a>
              <a 
              className="nav-link" 
              href="#"
              onClick={this.props.onClickPaper}>
                <img src={papelera} alt=""/>
                <span className="nav-txt" ref={this.y2}>Papelera</span>
              </a>
              <a 
              className="nav-link" 
              href="#">
                <img src={null} alt=""/>
                <span className="nav-txt" ref={this.y3}></span>
              </a>
            </nav>
            <button onClick={this.handleClick} className="btn-p "><img ref={this.image} src={minimize} alt=""/></button>
        </div>
      
      </React.Fragment>
  }
}

export default SideBar;
