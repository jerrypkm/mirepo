import React from 'react'
import AddModal from './AddModal'
import './styles/Grid.css'
import ModalList from './ModalList'
import PageLoading from './PageLoading'
import axios from 'axios'

const baseUrlGuardarBMC = 'http://wortevcanvasjet.wortevqa.com/api/crearbmc';
const baseUrlActualizarBMC = 'http://wortevcanvasjet.wortevqa.com/api/actualizarbmc';
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';

class Grid extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentlyModified: '',
            currentName: '',
            currentInfo: '',
            loading: false,
            error: null,
            editing: false,
            editingID: '',
            text: '',
            title: this.props.title,
            editingBMC: this.props.editingBMC,
            data: this.props.gridData,
            date: new Date().toLocaleString().split(' '),
        }
    }

    componentDidMount(){
        console.log(this.state.data);
    }

    selectModal = (index) =>{
        switch (index){
            case 0:
                this.setState({currentlyModified: 0, currentName: "Socios clave", currentInfo: "Define a tus proveedores y aliados para producir y entregar tu producto o servicio."})
            break
            case 1:
                this.setState({currentlyModified: 1, currentName: "Actividades calve", currentInfo: "Traza las tareas esenciales de tu proceso, desde los insumos hasta la comercialización."})
            break
            case 2:
                this.setState({currentlyModified: 2, currentName: "Canales", currentInfo: "Cómo darás a conocer y entregarás tu producto o servicio."})
            break
            case 3:
                this.setState({currentlyModified: 3, currentName: "Recursos clave   ", currentInfo: "Describe los elementos indispensables para que funcione tu negocio."})
            break
            case 4:
                this.setState({currentlyModified: 4, currentName: "Segmento de clientes", currentInfo: "Describe los hábitos y características del cliente al que le vas a vender."})
            break
            case 5:
                this.setState({currentlyModified: 5, currentName: "Relaciones con el cliente", currentInfo: "Define cómo será tu comunicación e interacción con ellos."})
            break
            case 6:
                this.setState({currentlyModified: 6, currentName: "Propuestas de valor", currentInfo: "Escribe por qué los clientes te preferirían a ti."})
            break
            case 7:
                this.setState({currentlyModified: 7, currentName: "Estructura de costos", currentInfo: "Enlista todos los gastos que harás para que tu negocio funcione."})
            break
            case 8:
                this.setState({currentlyModified: 8, currentName: "Fuente de ingresos", currentInfo: "Explica las formas en que obtendrás ingresos."})
            break
            default:
                this.setState({currentlyModified: null, currentName: ''})
            break
        }
    }

    handleSave = async e => {
        var datos_guardar=this.state;
        console.log(datos_guardar);
        this.setState({loading: true}); 
        const datos = {
            "contenido": JSON.stringify(datos_guardar),
            "id_usuario": localStorage.getItem('userID')
        };
        await axios({
            url: `${baseUrlGuardarBMC}`,
            method: 'POST',
            data: datos,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response =>{
            this.setState({loading: false});
            if(response.data.success === true){
                console.log(response);
                this.setState({loading: false, title: 'Título'});
                this.props.onSubmit();
            } else {    

            }
        })
        .catch(error => {
                this.setState({loading: false, error:error});
                console.log(error);
                return error;
        });
        // Aqui se debe llamar la API para guardar el bmc usando los datos que se encuentran en el this.state.data
        // this.setState({
        //     dataToApi={
        //         "contenido": "{\"app\": {\"title\": \"BMC-Creator\", \"version\": \"1.0.0\"}, \"date\": \"\", \"title\": \"Nuevo canvas\", \"version\": \"\", \"channels\": {\"notes\": [{\"key\": 1618525028525, \"color\": \"#000000\", \"title\": \"Ex aut minima consectetur.\", \"background\": \"#f5f8fa\", \"description\": \"Iusto voluptas harum et delectus deleniti assumenda.\"}]}, \"activeKey\": \"\", \"noteTitle\": \"\", \"keyPartners\": {\"notes\": [{\"key\": 1618524996677, \"color\": \"#000000\", \"title\": \"Porro a fuga.\", \"background\": \"#f5f8fa\", \"description\": \"Aliquam ut excepturi.\"}, {\"key\": 1618525042648, \"color\": \"#000000\", \"title\": \"Iure deleniti recusandae aut non.\", \"background\": \"#f5f8fa\", \"description\": \"Et alias consequatur quasi distinctio consequatur at. Optio ipsum magnam officia et hic quia.\"}]}, \"isDialogOpen\": false, \"keyResources\": {\"notes\": [{\"key\": 1618525005122, \"color\": \"#000000\", \"title\": \"Deleniti qui autem et ab.\", \"background\": \"#f5f8fa\", \"description\": \"Voluptatem quidem temporibus molestiae cumque dolorem et et nihil. Nesciunt et consequatur rerum.\"}, {\"key\": 1618525046651, \"color\": \"#000000\", \"title\": \"Eos occaecati quod vel.\", \"background\": \"#f5f8fa\", \"description\": \"Qui nostrum illum ipsum est quod in.\"}]}, \"costStructure\": {\"notes\": [{\"key\": 1618525009915, \"color\": \"#000000\", \"title\": \"Qui nostrum facere sint.\", \"background\": \"#f5f8fa\", \"description\": \"Minima tempora esse nemo non a dolorum. Iure est sunt recusandae doloribus iusto qui in.\"}]}, \"keyActivities\": {\"notes\": [{\"key\": 1618525001180, \"color\": \"#000000\", \"title\": \"Rem cum similique numquam.\", \"background\": \"#f5f8fa\", \"description\": \"Omnis minima ullam quidem nihil. Aliquam dolorum porro corporis incidunt aut voluptas.\"}]}, \"noteTextColor\": \"#000000\", \"updateNoteKey\": \"\", \"revenueStreams\": {\"notes\": [{\"key\": 1618525038167, \"color\": \"#000000\", \"title\": \"Autem eveniet error.\", \"background\": \"#f5f8fa\", \"description\": \"Ducimus sequi ex non aliquid.\"}]}, \"noteDescription\": \"\", \"customerSegments\": {\"notes\": [{\"key\": 1618525033384, \"color\": \"#000000\", \"title\": \"Iste numquam aliquid ipsam.\", \"background\": \"#f5f8fa\", \"description\": \"Molestias deserunt ut ullam officiis suscipit soluta.\"}]}, \"valuePropositions\": {\"notes\": [{\"key\": 1618525014879, \"color\": \"#000000\", \"title\": \"Architecto aut distinctio.\", \"background\": \"#f5f8fa\", \"description\": \"Deleniti in culpa doloremque porro qui blanditiis.\"}, {\"key\": 1618525024107, \"color\": \"#000000\", \"title\": \"At enim consectetur.\", \"background\": \"#f5f8fa\", \"description\": \"Ut blanditiis repellat omnis dolores.\"}]}, \"noteBackgroundColor\": \"#f5f8fa\", \"customerRelationships\": {\"notes\": [{\"key\": 1618525020164, \"color\": \"#000000\", \"title\": \"Quidem vitae qui assumenda.\", \"background\": \"#f5f8fa\", \"description\": \"Qui non velit dicta ea nemo qui. Ea et ipsum nam fugit magnam corrupti.\"}]}}",
        //     }
        // })

        
    }

    handleUpdate = async e => {
    
        var datos_guardar=JSON.stringify(this.state);
        console.log(datos_guardar);
        this.setState({loading: true}); 
        
        const datos = {
            "contenido": datos_guardar,
            "id_usuario": localStorage.getItem('userID'),
            "id_bmc": localStorage.getItem('idBMC'),
            "id_bmc_meta": localStorage.getItem('idBMCmeta')
        };
        console.log(datos);
        await axios({
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
                this.setState({loading: false, title: 'Título'});
                this.props.onSubmit();
                console.log(response.data)
            } else {
                console.log(response);
            }
        })
        .catch(error => {
                this.setState({loading: false, error:error});
                console.log(error);
                return error;
        });
    } 

    handleClick = e => {
        e.preventDefault();
        this.setState({loading: true});
        if(this.state.editing === true){
            console.log("estas editando"+this.state.currentlyModified);
            let items = [];
            let item = {};
            switch(this.state.currentlyModified){
                case 0:
                    items = [...this.state.data.keyPartners]
                    console.log(this.state.text);
                    for (var i = 0; i < items.length; i++){
                        item = items[i];
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
                    for (i = 0; i < items.length; i++){
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
        // console.log(id);
        // console.log(value);
        this.setState({editing: true, editingID: id, currentlyModified: index});
        switch(index){  
            case 0:
                items = [...this.state.data.keyPartners]
                for (var i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});   
                    }
                }
            break
            case 1:
                items = [...this.state.data.keyActivities]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 2:
                items = [...this.state.data.channels]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 3:
                items = [...this.state.data.keyResources]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 4:
                items = [...this.state.data.customerSegments]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 5:
                items = [...this.state.data.customerRelationships]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 6:
                items = [...this.state.data.valuePrepositions]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 7:
                items = [...this.state.data.costStructure]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
                        this.setState({text: value});
                    }
                }
            break
            case 8:
                items = [...this.state.data.revenueStreams]
                for (i = 0; i < items.length; i++){
                    if (i === parseInt(id)){
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

    componentWillUnmount(){
        this.setState({data: {keyPartners: [],keyActivities: [],channels: [],keyResources: [],customerSegments: [],customerRelationships: [],valuePrepositions: [],costStructure: [],revenueStreams: [],}})
    }
    
    render(){
        if(this.props.loading === true){
            return <PageLoading/>
        }
        return  <React.Fragment>
            <div className="main-grid">
                <div className="name-bcm">
                    <input style={{borderBottom:'2px solid #e20515'}} name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="header-grid">
                            <span>Socios clave</span>
                            <div className="header-grid-img">
                                <img src="icons/people.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(0, e.target)}} gridModal={this.state.data.keyPartners}/>
                        <div className="add-text">
                            <button 
                                name="10"
                                type="button" 
                                data-bs-toggle="modal" 
                                onClick={(e)=>{this.selectModal(0)}}
                                data-bs-target="#addModal">Add
                            </button>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="header-grid">
                            <span>Actividades clave</span>
                            <div className="header-grid-img">
                                <img src="icons/agenda.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(1, e.target)}} gridModal={this.state.data.keyActivities}/>
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
                        <ModalList onClick={(e)=>{this.handleEdit(2, e.target)}} gridModal={this.state.data.channels}/>
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
                            <span>Recursos clave</span>
                            <div className="header-grid-img">
                                <img src="icons/puzz.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(3, e.target)}} gridModal={this.state.data.keyResources}/>
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
                            <span>Segmento de clientes</span>
                            <div className="header-grid-img">
                                <img src="icons/user.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(4, e.target)}} gridModal={this.state.data.customerSegments}/>
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
                            <span>Relaciones con el cliente</span>
                            <div className="header-grid-img">
                                <img src="icons/user_tick.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(5, e.target)}} gridModal={this.state.data.customerRelationships}/>
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
                            <span>Propuestas de valor</span>
                            <div className="header-grid-img">
                                <img src="icons/search.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(6, e.target)}} gridModal={this.state.data.valuePrepositions}/>
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
                            <span>Estructura de costos</span>
                            <div className="header-grid-img">
                                <img src="icons/home.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(7, e.target)}} gridModal={this.state.data.costStructure}/>
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
                            <span>Fuentes de ingresos</span>
                            <div className="header-grid-img">
                                <img src="icons/money.svg" alt=""/>
                            </div>
                        </div>
                        <ModalList onClick={(e)=>{this.handleEdit(8,e.target)}} gridModal={this.state.data.revenueStreams}/>
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
                    <button onClick={this.state.editingBMC ? this.handleUpdate : this.handleSave} className="btn-guardar-bcm">{this.state.editingBMC ? "ACTUALIZAR" : "PUBLICAR"}</button>
                </div>
            </div>
            <AddModal
            date={this.state.date[0]}
            currentInfo={this.state.currentInfo} 
            currentName={this.state.currentName}
            text={this.state.text}
            onClick={this.handleClick}
            onChange={this.handleChange}/>
        </React.Fragment> 
    }
}

export default Grid;
