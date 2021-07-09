import React from 'react'

class Login extends React.Component {
    
    render() {
        return <React.Fragment>
			<form onSubmit={this.props.onSubmit}>
				<h4 className="card-title title_1">Lorem ipsum dolor sit amet </h4>
                <p style={{color: "#e20515", textAlign:"center", marginTop:"0.5em"}} >{this.props.formValues.men}</p>
				<p>Correo:</p>
				<div className="field-container">
                    <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="field"
                            name="email"
                            value={this.props.formValues.email}/> <br/> <br />
				</div>
				<p>Contraseña:</p>
				<div className="field-container">
                    <input 
                            onChange={this.props.onChange} 
                            type="password" 
                            className="field"
                            name="password"
                            autoComplete = "on"
                            value={this.props.formValues.password}/> <br/>
				</div>
                <p type="button" style={{color: "#e20515", textAlign:"center", marginTop:"0.5em"}} onClick={this.props.onClick}>¿Contraseña olvidada?</p>
				<div className="center-content" style={{ visibility: 'hidden', height: '20px' }}>
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

export default Login;
