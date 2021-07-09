import React from 'react'

class Register extends React.Component {

    render() {
        return <React.Fragment>
            <form onSubmit={this.props.onSubmit}>
			    <h4 className="card-title title_1">Lorem ipsum dolor sit amet </h4>
                <p style={{color: "#e20515", textAlign:"center", marginTop:"0.5em"}} >{this.props.formValues.men.contrasenia}</p>
                <p style={{color: "#e20515", textAlign:"center", marginTop:"0.5em"}} >{this.props.formValues.men.correo}</p>
			    <p>Nombre de Usuario:</p>
			    <div className="field-container">
			        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="field"
                            name="nameR"
                            value={this.props.formValues.nameR} required/> <br/> <br />
			    </div>
               
               {/* <p>Apellidos:</p>
                <div className="field-container">
                
			        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="field"
                            name="lastnameR"
                            value={this.props.formValues.lastnameR}/> <br/>
			    </div> */}
		        <p>Correo:</p>
		        <div className="field-container">
			        <input 
                            onChange={this.props.onChange} 
                            type="email" 
                            className="field" 
                            name="emailR"
                            value={this.props.formValues.emailR}/> <br/> <br />
		        </div>
                <p>Contraseña:</p>
			    <div className="field-container">
			        <input 
                            onChange={this.props.onChange} 
                            type="password"
                            autoComplete = "on" 
                            className="field" 
                            name="passwordR"
                            value={this.props.formValues.passwordR}/> <br/>
			    </div>
			    <div className="center-content"  style={{ visibility: 'hidden', height: '20px' }}>                       
			        <i className="fab fa-facebook-square social-icon fb"></i>
			        <i className="fab fa-twitter social-icon tw"></i>
			        <i className="fab fa-google social-icon gm"></i>
			    </div>
			    <p className="center-content">
                    <input type="submit" className="btn btn-color" value="Iniciar"/>
                    <br/><br/>
                </p>
            </form>	
        </React.Fragment>
    }
}

export default Register;
