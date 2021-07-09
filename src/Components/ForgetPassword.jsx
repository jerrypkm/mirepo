import React from 'react'

class ForgetPassword extends React.Component{
    render(){
        return <React.Fragment>
            <form className="form_forg" action="" id="form_session" onSubmit={this.props.onForget}>
            <center>
                <h6 className="card-title recover_title">
                    Te enviaremos la contraseña a tu correo
                </h6>
                <p style={{textAlignLast:"left", paddingLeft:"10px", paddingTop:"15px"}}>Correo electrónico:</p>
                <div className="field-container">
                    <input type="text" className="field" placeholder="user@example.com" 
                            onChange={this.props.onChange} 
                            name="emailO"
                            value={this.props.formValues.emailO}
                    /> <br/>
                </div>
            </center>
            <p style={{color: "#e20515", textAlign:"center", marginTop:"0.5em"}} >{this.props.formValues.men}</p>
                <p className="center-content">
                    <input style={{width: "250px"}} type="submit" className="btn btn-color" value="Enviar contraseña"/> <br/><br/>
                </p>
            </form>	
        </React.Fragment>
    }
}

export default ForgetPassword