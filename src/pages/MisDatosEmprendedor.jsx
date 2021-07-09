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
const countryUrl = 'http://wortevcanvasjet.wortevqa.com/api/leerpaises/';
const locationUrl = 'http://wortevcanvasjet.wortevqa.com/api/leerdivpolniv2/';
const urlregPerf='http://wortevqa.com/wortevcanvas/public/api/registroperfil';

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
            verperfil:'',
            loading: false,
        }       
    }

    async componentDidMount() {
        await axios({
            url: `${countryUrl}`,
            method: 'GET',
            headers:{
                "Authorization": "Baerer " + strToken
            }
        })
        .then(response =>{
            console.log(response);
            this.setState({
                country:JSON.parse(response.contries),
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
                        pais: '',
                        ciudad: '',
                        verperfil: '',
                    })
                }
                else{
                    console.log(response);
                }
            })
            .catch(error => {
                console.log(error)
                return error;
            })
        }
       
    }
    handleRegPerf(id, nombre, nickname, apellidos, pais, ciudad, proy_descripcion) {
        this.setState({loading: true}); 
        const data = {
            id_usuario: id,
            estado: '0',
            nombre: nombre,
            apellidop: apellidos,
            apellidom: '',
            nickname: nickname,
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
            pais: pais,
            ciudad: ciudad,
            proy_descripcion: proy_descripcion,
        }
        axios ({
            url:  `${urlregPerf}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response => {
            if(response.data.success == true){
                window.location="/";
                localStorage.setItem('photo', this.state.photo);
            }
            else{
                console.log(response);
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

    // handleSubmit = () =>{
    //     var data = this.state;
    //     console.log(data);
    //     await axios({
    //         url: `${baseUrl}`,
    //         method: 'POST',
    //         data: data,
    //     })
    //     .then(response =>{
    //         console.log(response);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         return error;
    //     })
    //     this.props.history.push('/canvasreact');
    // }

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
                        <form enctype="multipart/form-data">
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
                    <select name="country" className="field-container-form text_center">
                        <option value="País">País</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select> 
                    <br />
                    <select className="field-container-form text_center">
                        <option value="Ciudad">Ciudad</option>
                    </select>
                </div>
                <div className="col-md-6 text_center ">
                    <p>Edad:</p>
                    <div className="">
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="field-container-form"
                        name="edad"
                        value={this.state.edad}/> 
                    </div>
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
                        <Link to="/my-bmc" className="btn-danger btn-lg btnsave"> 
                        Guardar
                        </Link>
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
 
 
 