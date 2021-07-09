import React from 'react'
import BMClist from './BMClist'
import './styles/MisBMC.css'
import plus from '../images/icons-sidebar/plus.svg'
import axios from 'axios'
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';
const urlCopiar = 'http://wortevcanvasjet.wortevqa.com/api/copiarbmc';
const urlTrash = 'http://wortevcanvasjet.wortevqa.com/api/papelerabmc';


class MisBMC extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            bmcdata: {
                listabmc: this.props.bmcdata.listabmc,
            },
            pActive:this.props.pActive,
        }
    }
    handleClickCopyBMC = (id, meta) => {
        const data = {
            id_bmc: id,
            id_bmc_meta: meta,
        }
        axios ({
            url:  `${urlCopiar}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response => {
            if(response.data.success == true){
                window.location="/";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }
    handleClickMoveTrash = (id) => {
        const data = {
            id_bmc: id,
        }
        axios ({
            url:  `${urlTrash}`,
            method: 'POST',
            data: data,
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        })
        .then(response => {
            if(response.data.success == true){
                window.location="/";
            }
            else{
                console.log(response);
            }
        }).catch(error => {
            this.setState({loading: false, error: error})
        })
    }
    render(){     
        return <div className="container-fluid main-bmc">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="titulo">Mis BMC</h1>
                </div>
                <div className="col-md-3">
                    <p type="button" className="crear" onClick={this.props.onClickNew}>+ Crear nuevo BMC</p>     
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card-body flex justify-content-around card-bmc" onClick={this.props.onClick}>
                        <div><img src={plus} alt=""/></div>
                        <h5 className="card-title">Crear nuevo BMC</h5>
                    </div>
                </div>
                 {this.state.bmcdata.listabmc.map(function(d){
                    return (
                        <BMClist 
                        key={d.id_bmc}
                        id_bmc={d.id_bmc}
                        estatus={d.estatus}
                        id_bmc_meta={d.id_bmc_meta}
                        titulo={d.titulo}
                        handleClickCopyBMC={this.handleClickCopyBMC}
                        handleClickMoveTrash={this.handleClickMoveTrash}
                        pActive={this.state.pActive}
                        irBmc={this.props.irBmc}
                        />
                    )
                },this)} 
            </div>
        </div>
    }
}

export default MisBMC