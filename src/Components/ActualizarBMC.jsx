import React from 'react'

import AddModal from './AddModal'
import './styles/Grid.css'
import ModalList from './ModalList'

import NavBar from '../Components/NavBar'
import PageLoading from './PageLoading'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'

import axios from 'axios'
import { render } from 'react-dom'

const baseUrlVerBMC = 'http://wortevcanvasjet.wortevqa.com/api/verbmc/';
const baseUrlActualizarBMC = 'http://wortevcanvasjet.wortevqa.com/api/actualizarbmc';
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';
class ActualizarBMC extends React.Component {
constructor(props){
    super(props);
    
    
    this.state = {
        currentlyModified: '',
        currentName: '',
        loading: false,
        error: null,
        editing: true,
        editingID: '',
        text: '',
        title: 'Title',
        gActive: false,
        pActive: false,
        iActive:false,
        data: {
            keyPartners: [

            ],
            keyActivities: [

            ],
            channels: [

            ],
            keyResources: [

            ],
            customerSegments: [

            ],
            customerRelationships: [

            ],
            valuePrepositions: [

            ],
            costStructure: [

            ],
            revenueStreams: [

            ],
        },
        
        // dataToApi = {

        // }
    } 
    
       
    var cortara=this.props.location.pathname;
    var cortando=cortara.split("/");
    console.log(cortando);
    const idBMC=cortando[2]; 
    const idBMCmeta=cortando[3];
    localStorage.setItem('idBMC', idBMC);
    localStorage.setItem('idBMCmeta', idBMCmeta);
    this.state.loading = true;
    var verTalBMC=baseUrlVerBMC + idBMCmeta;
    console.log(verTalBMC);
    const datos=[];
    axios({
        url: `${verTalBMC}`,
        method: 'GET',
        data: datos,
        headers:{
            'Authorization': 'Bearer ' + strToken
        }
    })
    .then(response =>{
        this.state.loading = false;
        var resultado=JSON.parse(response.data.contenido);
        console.log("Resultado");
        console.log(resultado);
        this.state = {
            currentlyModified: '',
            currentName: '',
            loading: false,
            error: null,
            editing: true,
            editingID: '',
            text: '',
            title: resultado.title,
            gActive: false,
            pActive: false,
            iActive:false,
            data: {
                keyPartners:  
                    resultado.data.keyPartners
                ,
                keyActivities:  
                    resultado.data.keyActivities
                ,
                channels: 
                    resultado.data.channels
                ,
                keyResources: 
                    resultado.data.keyResources
                ,
                customerSegments: 
                    resultado.data.customerSegments
                ,
                customerRelationships: 
                    resultado.data.customerRelationships
                ,
                valuePrepositions: 
                    resultado.data.valuePrepositions
                ,
                costStructure: 
                    resultado.data.costStructure
                ,
                revenueStreams: 
                    resultado.data.revenueStreams
                ,
            },
            
            // dataToApi = {
    
            // }
        } 
        
        // this.state = resultado;  
        this.state.form = {

            nombre: localStorage.getItem('userName'),
            userID: localStorage.getItem('userID')
        };
        console.log("This state");
        console.log(this.state);
        console.log("----------");
        var stateTotal=JSON.stringify(this.state);
         localStorage.setItem('elState', stateTotal);
        // return this.state;
    })
    .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error);
            return error;
    }); 
     
} 
selectModal = (index) => {
        switch (index){
            case 0:
                this.state.currentlyModified = 0;
                this.state.currentName = "Key Partners";
            break
            case 1:
                this.state.currentlyModified= 1; 
                this.state.currentName = "Key activities";
            break
            case 2:
                this.state.currentlyModified= 2; 
                this.state.currentName = "Channels";
            break
            case 3:
                this.state.currentlyModified= 3; 
                this.state.currentName = "Key resources";
            break
            case 4:
                this.state.currentlyModified= 4; 
                this.state.currentName = "Customer segments";
            break
            case 5:
                this.state.currentlyModified= 5; 
                this.state.currentName = "Customer relationships";
            break
            case 6:
                this.state.currentlyModified= 6; 
                this.state.currentName = "Value prepositions";
            break
            case 7:
                this.state.currentlyModified= 7; 
                this.state.currentName = "Cost structure";
            break
            case 8:
                this.state.currentlyModified= 8; 
                this.state.currentName = "Revenue streams";
            break
            default:
                this.state.currentlyModified = null;
                this.state.currentName = "";
            break;
        }
    }
handleClick = e => {
    e.preventDefault();
    this.setState({loading: true});
    this.state.editing = true;
    if(this.state.editing == true){
        console.log("estas editando el BMC :");
        let items = [];
        let item = {};
        console.log(this.state.currentlyModified);
        switch(this.state.currentlyModified){
            case 0:
                items = [...this.state.data.keyPartners]
                console.log(items);
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    console.log(item);
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        console.log(items);
                        this.setState({data: {...this.state.data, keyPartners: items,},loading: false})
                    }
                }
            break
            case 1:
                items = [...this.state.data.keyActivities]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, keyActivities: items,},loading: false})
                    }
                }
            break
            case 2:
                items = [...this.state.data.channels]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, channels: items,},loading: false})
                    }
                }
            break
            case 3:
                items = [...this.state.data.keyResources]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, keyResources: items,},loading: false})
                    }
                }
            break
            case 4:
                items = [...this.state.data.customerSegments]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, customerSegments: items,},loading: false})
                    }
                }
            break
            case 5:
                items = [...this.state.data.customerRelationships]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, customerRelationships: items,},loading: false})
                    }
                }
            break
            case 6:
                items = [...this.state.data.valuePrepositions]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, valuePrepositions: items,},loading: false})
                    }
                }
            break
            case 7:
                items = [...this.state.data.costStructure]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, costStructure: items,},loading: false})
                    }
                }
            break
            case 8:
                items = [...this.state.data.revenueStreams]
                for (var i = 0; i < items.length; i++){
                    item = items[i];
                    if (item.id == this.state.editingID){
                        item.text=this.state.text;
                        items[i] = item;
                        this.setState({data: {...this.state.data, revenueStreams: items,},loading: false})
                    }
                }
            break
            default:
                this.setState({
                    data:{
                        ...this.state.data,
                    },
                    loading: false,
                })
            break
        }
        this.setState({text: '', editing: false});
    }
    else{
        switch (this.state.currentlyModified){
            case 0:
                this.setState({
                    data:{
                        ...this.state.data,
                        keyPartners: [
                            ...this.state.data.keyPartners, {
                                id: this.state.data.keyPartners.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 1:
                this.setState({
                    data:{
                        ...this.state.data,
                        keyActivities: [
                            ...this.state.data.keyActivities, {
                                id: this.state.data.keyActivities.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 2:
                this.setState({
                    data:{
                        ...this.state.data,
                        channels: [
                            ...this.state.data.channels, {
                                id: this.state.data.channels.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 3:
                this.setState({
                    data:{
                        ...this.state.data,
                        keyResources: [
                            ...this.state.data.keyResources, {
                                id: this.state.data.keyResources.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 4:
                this.setState({
                    data:{
                        ...this.state.data,
                        customerSegments: [
                            ...this.state.data.customerSegments, {
                                id: this.state.data.customerSegments.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 5:
                this.setState({
                    data:{
                        ...this.state.data,
                        customerRelationships: [
                            ...this.state.data.customerRelationships, {
                                id: this.state.data.customerRelationships.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 6:
                this.setState({
                    data:{
                        ...this.state.data,
                        valuePrepositions: [
                            ...this.state.data.valuePrepositions, {
                                id: this.state.data.valuePrepositions.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 7:
                this.setState({
                    data:{
                        ...this.state.data,
                        costStructure: [
                            ...this.state.data.costStructure, {
                                id: this.state.data.costStructure.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            case 8:
                this.setState({
                    data:{
                        ...this.state.data,
                        revenueStreams: [
                            ...this.state.data.revenueStreams, {
                                id: this.state.data.revenueStreams.length,
                                text: this.state.text,
                            }
                        ]
                    },
                    loading: false,
                })
            break
            default:
                this.setState({
                    data:{
                        ...this.state.data,
                    },
                    loading: false,
                })
            break
        }
        this.setState({text: ''});
    }
} 

handleChange = e =>{
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
    })
}

handleEdit = (index, element) => {
    let items = [];

    let id=element.getAttribute("name");
    let value=element.getAttribute("value");
    console.log("Editando lo siguiente: ");
    console.log(element);
    console.log(index);
    console.log(id);
    console.log(value);
    this.setState({editing: true, editingID: id, currentlyModified: index});
    switch(index){
        case 0:
            items = [...this.state.data.keyPartners]
            console.log(items);
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});   
                }
            }
        break
        case 1:
            items = [...this.state.data.keyActivities]
            console.log(items);
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 2:
            items = [...this.state.data.channels] 
            console.log(items);
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 3:
            items = [...this.state.data.keyResources]
            console.log(items);
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 4:
            items = [...this.state.data.customerSegments]
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 5:
            items = [...this.state.data.customerRelationships]
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 6:
            items = [...this.state.data.valuePrepositions]
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 7:
            items = [...this.state.data.costStructure]
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        case 8:
            items = [...this.state.data.revenueStreams]
            for (var i = 0; i < items.length; i++){
                if (id == parseInt(id)){
                    this.setState({text: value});
                }
            }
        break
        default:
            this.setState({
                data:{
                    ...this.state.data,
                },
            })
        break
    }
}
handleSave = e => {
    
    var datos_guardar=JSON.stringify(this.state);
    // console.log(datos_guardar);
    this.setState({loading: true}); 
    
    const datos = {
        "contenido": datos_guardar,
        "id_usuario": localStorage.getItem('userID'),
        "id_bmc": localStorage.getItem('idBMC'),
        "id_bmc_meta": localStorage.getItem('idBMC')
    };
    console.log(datos);
    axios({
        url: `${baseUrlActualizarBMC}`,
        method: 'POST',
        data: datos,
        headers:{
            'Authorization': 'Bearer ' + strToken
        }
    })
    .then(response =>{
        this.setState({loading: false});
        if(response.data.success === true){
            /*
            this.setState({loading: false, title: 'Título'});
            this.props.onSubmit();
            */
            this.props.history.push('/my-bmc');
        } else {

        }
    })
    .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error);
            return error;
    });
} 
handleClickPaper = e =>{
        this.setState({pActive: true, gActive: false, iActive:false})
    }
handleClickBmc = e => {
        this.setState({pActive: false, gActive: false, iActive:false})
    }
handleClickInfo = e =>{
        this.setState({pActive: false, gActive: false, iActive:true})
    }
render() { 
    console.log("Como se ve en el render");
    var elStateBien=JSON.parse(localStorage.getItem('elState'));
    this.state=elStateBien;
    console.log(this.state);
   
    // this.setState({ editing : true }); 
    return <React.Fragment><NavBar 
    formValues={() => this.state.form}
    />
        <div className="main flex">
        <SideBar onClickPaper={this.handleClickPaper}
                onClickBmc={this.handleClickBmc}
                onClickinfo={this.handleClickInfo}/>
        <div className="main-grid">
        <div className="name-bcm">
            <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className="grid">
            <div className="grid-item">
                <div className="header-grid">
                    <span>Segmento de clientes</span>
                    <div className="header-grid-img">
                        <img src="icons/people.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(0, e.target)}} loading={this.state.loading} gridModal={this.state.data.keyPartners}/>
                <div className="add-text">
                    <button 
                        name="0"
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(0)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>
            <div className="grid-item">
                <div className="header-grid">
                    <span>Propuesta de valor</span>
                    <div className="header-grid-img">
                        <img src="icons/agenda.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(1, e.target)}} loading={this.state.loading} gridModal={this.state.data.keyActivities}/>
                <div className="add-text">
                    <button 
                        name="1"
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(1)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>
            <div className="grid-item">
                <div className="header-grid">
                    <span> Canales</span>
                    <div className="header-grid-img">
                        <img src="icons/chanels.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(2, e.target)}} loading={this.state.loading} gridModal={this.state.data.channels}/>
                <div className="add-text">
                    <button
                        name="2"
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(2)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Relaciones con los cliente</span>
                    <div className="header-grid-img">
                        <img src="icons/puzz.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(3, e.target)}} loading={this.state.loading} gridModal={this.state.data.keyResources}/>
                <div className="add-text">
                    <button
                        name="3" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(3)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Customer segments</span>
                    <div className="header-grid-img">
                        <img src="icons/user.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(4, e.target)}} loading={this.state.loading} gridModal={this.state.data.customerSegments}/>
                <div className="add-text">
                    <button
                        name="4" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(4)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Customer relationships</span>
                    <div className="header-grid-img">
                        <img src="icons/user_tick.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(5, e.target)}} loading={this.state.loading} gridModal={this.state.data.customerRelationships}/>
                <div className="add-text">
                    <button
                        name="5" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(5)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Value prepositions</span>
                    <div className="header-grid-img">
                        <img src="icons/search.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(6, e.target)}} loading={this.state.loading} gridModal={this.state.data.valuePrepositions}/>
                <div className="add-text">
                    <button
                        name="6" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(6)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Cost structure</span>
                    <div className="header-grid-img">
                        <img src="icons/home.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(7, e.target)}} loading={this.state.loading} gridModal={this.state.data.costStructure}/>
                <div className="add-text">
                    <button
                        name="7" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(7)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>

            <div className="grid-item">
                <div className="header-grid">
                    <span>Revenue streams</span>
                    <div className="header-grid-img">
                        <img src="icons/money.svg" alt=""/>
                    </div>
                </div>
                <ModalList onClick={(e)=>{this.handleEdit(8,e.target)}} loading={this.state.loading} gridModal={this.state.data.revenueStreams}/>
                <div className="add-text">
                    <button
                        name="8" 
                        type="button" 
                        data-bs-toggle="modal" 
                        onClick={(e)=>{this.selectModal(8)}}
                        data-bs-target="#addModal">Add
                    </button>
                </div>
            </div>
        </div>
        <div className="guardar-bcm">
            <button onClick={this.handleSave} className="btn-guardar-bcm" >ACTUALIZAR</button>
        </div>
    </div>
    </div>
    <AddModal 
    currentName={this.state.currentName}
    text={this.state.text}
    onClick={this.handleClick}
    onChange={this.handleChange}/>
    
    </React.Fragment>
} 
}
export default ActualizarBMC;