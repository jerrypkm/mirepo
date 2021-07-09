import React from 'react'
import './styles/Form.css'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import { registerRequest } from '../actions'
import { loginRequest } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageLoading from './PageLoadingLanding'

import axios from 'axios'
const baseUrlReg =  'http://wortevcanvasjet.wortevqa.com/api/registrousuario';
const baseUrlLog = 'http://wortevcanvasjet.wortevqa.com/api/login';
const baseUrlRec = 'http://wortevcanvasjet.wortevqa.com/api/recuperarcontrasenia';
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';

class Form extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            show1: "menu-form active",
            show2: "menu-form",
            lActive: true,
            fActive: false,
            loading: false,
            error: null,
            form: {
                nameR: '',
                lastnameR: '',
                password: '',
                passwordR: '',
                emailR: '',
                email: '',
                emialO:'',
                men:'',
            },
        }
        if (localStorage.getItem('userID')!=null) {
            this.state.form={ 
                email: localStorage.getItem('email'),
            }
            var dataToState = {
                userName: localStorage.getItem('userName'),
                userID: localStorage.getItem('userID'),
            }
            
            this.props.loginRequest(dataToState);
            this.props.history.push('/my-bmc');
        } else {
            
        }
    };

    onClick1 = () =>{
        this.setState({
            show1:"menu-form active",
            show2: "menu-form",
            lActive: true,
            fActive: false,
        });
    };

    onClick2 = () =>{
        this.setState({
            show2: "menu-form active",
            show1: "menu-form",
            lActive: false,
            fActive: false,
        });
    };
    
    handleClick = e => {
        this.setState({
            lActive: false,
            fActive: true,
        });
    }

    handleSubmitLog = async e =>{
        this.setState({loading: true});
        e.preventDefault();
        const data = {
            email: this.state.form.email,
            password: this.state.form.password,
        }
        var dataToState = {
            userName: '',
            userID: '',
            firstReg:'',
        }
        await axios({
            url: `${baseUrlLog}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        }) 
        .then(response =>{
            this.setState({loading: false});
            if(response.data[0].id_persona){
                dataToState = {
                    userName: this.state.form.name,
                    userID: response.data[0].id,
                    firstReg: false,
                }
                // console.log(response.data[0]);
                localStorage.setItem('userID', response.data[0].id);
                localStorage.setItem('user', response.data[0]);
                localStorage.setItem('userName',  this.state.form.name);
                localStorage.setItem('email', this.state.form.email);
                localStorage.setItem('firstReg', false);
                
                this.props.loginRequest(dataToState);
                this.props.history.push('/my-bmc')
            }
            else{ 
                console.log(response);
                alert("No se encontro el usuario ó la contraseña no es correcta");
            }
        })
        .catch(error => {
            this.setState({loading: false, error:error, form:{men:'Correo o contraseña incorrectos'}});
            return error;
        })
    };

    handleSubmitReg = async e => {
        this.setState({loading: true});
        e.preventDefault();
        const data = {
            correo: this.state.form.emailR,
            contrasenia: this.state.form.passwordR,
            nickname: this.state.form.nameR,
            //apellido: 'apellido',
        }
        var dataToState = {
            userName: '',
            userID: '',
            firstReg:'',
        }
        console.log(data);
        await axios({
            url: `${baseUrlReg}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response =>{
            this.setState({loading: false});
            if(response.data.success === true){
                console.log(response.data);
                dataToState = {
                    userName: response.data.nickname,
                    userID: response.data.id_usuario,
                    userEmail: this.state.form.emailR,
                    firstReg: true,
                }
                this.props.registerRequest(dataToState);
                
                localStorage.setItem('userID', response.data.id_usuario);
                localStorage.setItem('user', response.data);
                localStorage.setItem('userName', this.state.form.nameR);
                localStorage.setItem('email', this.state.form.emailR);
                localStorage.setItem('firstReg', true);
                
                this.props.history.push('/confirm');
            }
            else{
                this.setState({form:{
                    men: response.data,
                }});
            }
        })
        .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error)
            return error;
        })
    };

    handleForget = async e => {
        this.setState({loading: true});
        e.preventDefault();
        const data = {
            correo: this.state.form.emailO,
        }
        await axios({
            url: `${baseUrlRec}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response =>{
            this.setState({loading: false});
            if(response.data.success === true){
                this.setState({form:{
                    men: response.data.message,
                }});
            }
            else{
                this.setState({form:{
                    men: response.data.message,
                }});
            }
        })
        .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error)
            return error;
        })

    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };

    render() {
        if(this.state.loading === true){
            return <PageLoading />
        }

        return <div className="formul">
            <div id="menu">
                <ul>
                    <li style={{marginLeft: "1.8em"}}><a type="button" onClick={this.onClick1} className={this.state.show1}>INGRESAR</a></li>
                    <li><a type="button" onClick={this.onClick2} className={this.state.show2}>REGÍSTRATE</a></li>
                </ul>
	        </div>
	        <div>
                {this.state.lActive&!this.state.fActive ? <Login
                    onClick={this.handleClick} 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmitLog}
                    formValues={this.state.form}
                /> : this.state.fActive&!this.state.lActive ? <ForgetPassword
                onForget={this.handleForget} 
                onChange={this.handleChange}
                formValues={this.state.form}
                /> : <Register
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmitReg}
                    formValues={this.state.form}
                />}
	        </div>
        </div>
    }
}

const mapDispatchToProps = {
    loginRequest,
    registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Form));
