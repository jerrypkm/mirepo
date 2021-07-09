import React from 'react'
import BMClist from './BMClist'
import './styles/MisBMC.css'
import del from '../images/delete.svg'

class PaperBin extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gActive: false,
            bmcdata: {
                listabmc: this.props.bmcdata.listabmc,
            },
            pActive: this.props.pActive,
        }
    }

    render(){    
        console.log(this.state.bmcdata);   
        return <div className="container-fluid main-bmc">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="titulo">Papelera</h1>
                </div>
                <div className="col-md-3">
                    <p type="button" className="crear" onClick={null}><img src={del} alt=""/> Vaciar Papelera</p>     
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                 {this.state.bmcdata.listabmc.map(function(d){
                    return (
                        <BMClist 
                        key={d.id_bmc}
                        id_bmc={d.id_bmc}
                        estatus={d.estatus}
                        id_bmc_meta={d.id_bmc_meta}
                        titulo={d.titulo}
                        pActive={this.state.pActive}
                        />
                    )
                },this)} 
            </div>
        </div>
    }
}

export default PaperBin