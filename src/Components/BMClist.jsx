import React from 'react'
import del from '../images/delete.svg'
import edit from '../images/edit.svg'
import copy from '../images/copy.svg'
import undo from '../images/undo.svg'
import './styles/BMClist.css'
import axios from 'axios'
import { Redirect } from "react-router-dom";
const urlRestore = 'http://wortevcanvasjet.wortevqa.com/api/restaurarbmc';
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';

class BMClist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pActive:this.props.pActive,
            redirect: null,
        }
    }
    handleclickrestorebmc(id){
        const data = {
            id_bmc: id,
        }
        axios ({
            url:  `${urlRestore}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response => {
            if(response.data.success === true){
                window.location="/";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }
    //Se debe manejar en el componente padre
    // irBMC = e => { 
    //     localStorage.setItem('elState', '');
    //     history.push('/actualizarBMC/' + this.props.id_bmc);
    //     this.setState({ redirect: '/actualizarBMC/' + this.props.id_bmc + '/' + this.props.id_bmc_meta });
    //     window.location="/actualizarBMC/" +  this.props.id_bmc + "/" + this.props.id_bmc_meta;
    // }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const isPaper=this.state.pActive;
        return <div className="col" >
                    <div className="card-body card-bmc" id_bmc={this.props.id_bmc} id_bmc_meta={this.props.id_bmc_meta}>
                         <h5 className="card-title break-word title-bmc">{this.props.titulo}</h5>                                
                            {isPaper ?
                                <div className="card-text icons flex justify-content-end">
                                    <button className="svg-icons card-text" onClick={()=>this.handleclickrestorebmc(this.props.id_bmc)}><img className="undo" src={undo} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={null}><img src={del} alt=""/></button>
                                </div>
                                
                            : 
                                <div className="card-text icons flex justify-content-end">
                                    <button className="svg-icons card-text" onClick={()=>this.props.irBmc(this.props.id_bmc, this.props.id_bmc_meta)}><img src={edit} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={()=>this.props.handleClickCopyBMC(this.props.id_bmc, this.props.id_bmc_meta)}><img src={copy} alt=""/></button>
                                    <button className="svg-icons card-text" onClick={()=>this.props.handleClickMoveTrash(this.props.id_bmc)}><img src={del} alt=""/></button>
                                </div>
                            }
                                
                                
                    </div>
                 </div>
        
    }
        
}
export default BMClist