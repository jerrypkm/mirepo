import React from 'react'
//import PageLoading from '../Components/PageLoading'
import { Link, withRouter } from 'react-router-dom'
import '../Components/styles/MisDatosEmprendedor.css'
import { connect } from 'react-redux'
import Plus from '../images/icons-sidebar/plus.svg'
import axios from 'axios'
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';
const urlVerPerf = 'http://wortevcanvasjet.wortevqa.com/api/datosperfil/'
const imageUrl = 'http://wortevcanvasjet.wortevqa.com/cargarfoto';
const countryUrl = 'http://wortevcanvasjet.wortevqa.com/api/leerpaises';
const locationUrl = 'http://wortevcanvasjet.wortevqa.com/api/leerdivpolniv2/';
const urlVerCoun = 'http://wortevcanvasjet.wortevqa.com/api/leerdivpolniv2/';
const urlActPerf = 'http://wortevcanvasjet.wortevqa.com/api/actualizaperfil';

class MisDatosEmprendedor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            photo: Plus,
            nickname: props.userName,
            correo: props.userEmail,
            nombre: '',
            apellidop: '',
            apellidom: '',
            pais: '',
            ciudad: '',
            proy_descripcion: '',
            id_usuario: props.user,
            ID: localStorage.getItem('userID'),
            firstReg: localStorage.getItem('firstReg'),
            country: {countries: []},
            cityId:'',
            loading: false,
            citi:{data: []},
        }       
    }

    async componentDidMount() {
        await axios({
            url: `${countryUrl}`,
            method: 'GET',
        })
        .then(response =>{
            var objson = JSON.parse(response.data);
            this.setState({
                country: objson,
            })
        })
        .catch(error => {
            console.log(error)
            return error;
        });

        if(this.state.firstReg == "false"){
             await axios({
                url: `${urlVerPerf}`+this.state.ID,
                method: 'GET',
                headers:{
                'Authorization': 'Bearer ' + strToken
                }
            })
            .then(response =>{
                if(response.data.success){
                    var jsonres = JSON.parse(response.data.data);
                    this.setState({
                        nickname: jsonres.nickname,
                        correo: jsonres.correo,
                        nombre: jsonres.nombre,
                        apellidop: jsonres.apellidop,
                        apellidom: jsonres.apellidom,
                        proy_descripcion: jsonres.proy_descripcion,
                        pais: jsonres.pais,
                        ciudad: jsonres.ciudad,
                    })
                    this.handleChangeCity(this.sate.pais);
                }
                else{
                    console.log(response);
                }
            })
            .catch(error => {
                console.log(error)
                return error;
            })
            await axios({
                url: `${urlVerCoun}`+this.state.pais,
                method: 'GET',
            })
            .then(response =>{
                this.setState({
                    citi: response,
                })
            })
            .catch(error => {
                console.log(error)
                return error;
            })
        }
       
    }
    handleChangeCity = (event) => {
        this.setState({cityId: event, pais:event}, () => {
             axios({
                url: `${urlVerCoun}`+this.state.cityId,
                method: 'GET',
            })
            .then(response =>{
                this.setState({
                    citi: response,
                })
            })
            .catch(error => {
                console.log(error)
                return error;
            })
        });
    }
    handleRegPerf = async e => {
        this.setState({loading: true});
        e.preventDefault(); 
        const data = {
            id_usuario: this.state.ID,
            estado: '',
            nombre: this.state.nombre,
            apellidop: this.state.apellidop,
            apellidom: this.state.apellidom,
            nickname: this.state.nickname,
            fecha_nacimiento: '',
            sexo: '',
            direccion: '',
            codigo_postal: '',
            facebook:'',
            twitter:'',
            instagram:'',
            youtube:'',
            linkedin:'',
            biografia:'',
            fecha_ultimo_ingreso:'',
            pais: this.state.pais,
            ciudad: this.state.ciudad,
            proy_descripcion: this.state.proy_descripcion,
            giro:'',
            empleados:'',
            no_Empleados:'',
            tipo_interes:'',
        }
        await axios ({
            url:  `${urlActPerf}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response => {
            if(response.data.success == true){
                if(this.state.firstReg == "true"){
                    localStorage.setItem('firstReg', false);
                }
                window.location="/";
                localStorage.setItem('photo', this.state.photo);
            }
            else{
                if(response.data.success == false && response.data.status == "200" && response.data.message == "No se pudo actualizar el perfil"){
                    window.location="/";
                }
                else{
                    console.log(response);
                }
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleChangeImg = async e => {
        // var data = {
        //     file: e.target.files[0],
        //     idUsuario: this.state.ID
        // }
        // await axios({
        //     url: `${imageUrl}`,
        //     method: 'POST',
        //     data: data,
        //     headers:{
        //         'Authorization': 'Bearer ' + strToken
        //     }
        // })
        // .then(response =>{
        //     console.log(response);
        //     this.setState({
        //         photo: URL.createObjectURL(e.target.files[0]),
        //     })
        //     return response;
        // })
        // .catch(error => {
        //     console.log(error)
        //     return error;
        // })
        this.setState({
            photo: URL.createObjectURL(e.target.files[0]),
        })
    }

    render(){
        return <React.Fragment>
        {/* Backgroun image */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 fluid imagen"> 
                </div>
            </div>
        </div>
        {/* Card */}
        <div className="container-xlg card">
            <div className="row">
                <div className="col-12 pp">
                    <div className="avatar">
                        <form encType="multipart/form-data">
                            <label htmlFor="photo"><img className="input_image" src={this.state.photo} alt="imagen"/></label>
                            <input className="input_link" id="photo" type="file" name="photo" onChange={this.handleChangeImg}/>
                        </form>
                    </div>
                    <h2 className="name">{this.state.nickname}</h2>
                </div>
                <div className="col-12">
                    <h4 className="instruccion">Ingresa tu información</h4> 
                </div> 
                <div className="col-md-6 text_center " >
                    <p>Nickname:</p>
                    <div className="">
                        <input 
                        onChange={this.handleChange} 
                        type="text" 
                        className="field-container-form"
                        name="nickname"
                        value={this.state.nickname}/>
                    </div>
                </div>
                <div className="col-md-6 text_center ">
                    <p>Correo:</p>
                    <div className="">
                        <input
                        onChange={this.handleChange} 
                        type="email" 
                        className="field-container-form"
                        name="correo"
                        value={this.state.correo}/> 
                    </div>
                </div>
                <div className="col-md-6 text_center ">
                    <p>Nombre:</p>
                    <div className="">
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="field-container-form"
                        name="nombre"
                        value={this.state.nombre}/> 
                    </div>
                </div>
                <div className="col-md-6 text_center ">
                <p>Apellido Paterno:</p>
                    <div className="">
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="field-container-form"
                        name="apellidop"
                        value={this.state.apellidop}/> 
                    </div>  
                </div>
                <div className="col-md-6 text_center ">
                <p>Apellido Materno:</p>
                    <div className="">
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="field-container-form"
                        name="apellidom"
                        value={this.state.apellidom}/> 
                    </div>  
                </div>
                <div className="col-md-6 text_center ">
                    <p>Ciudad o País de Residencia:</p>
                    <select name="pais" className="field-container-form text_center" onChange={(val) =>  this.handleChangeCity(val.target.value)} value={this.state.pais}>
                        <option></option>
                        {this.state.country.countries.map(function(d){
                            return(
                                <option value={d.id}>{d.name}</option>
                            )
                        })}
                    </select> 
                    <br />
                    <select name="ciudad" className="field-container-form text_center" onChange={this.handleChange} value={this.state.ciudad}>
                        {this.state.citi.data.map(function(d){
                            if(d.id){
                                return(
                                    <option value={d.id}>{d.name}</option>
                                )
                            }
                        })}
                    </select>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h4 className="instruccion2">Cuéntanos de tu proyecto o empresa </h4>
                    <input 
                    type="text" 
                    className="field-container2" 
                    onChange={this.handleChange}
                    name="proy_descripcion"
                    value={this.state.proy_descripcion}/> 
                </div>
                {/* save btn */}
            </div>
                <div className="row colum"> 
                    <div className="col-sm-8"></div>
                    <div className="col-sm-2">
                        <button onClick={this.handleRegPerf} className="btn-danger btn-lg btnsave"> 
                        Guardar
                        </button>
                    </div>
                </div>
        </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return{
        loginState: state.loginState,
        userName: state.userName,
        userID: state.userID,
        userEmail: state.userEmail,
    }
}

export default withRouter(connect(mapStateToProps, null)(MisDatosEmprendedor));
 
 
 