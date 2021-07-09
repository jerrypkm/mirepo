import React from 'react'
import './styles/Grid.css'

class AddModal extends React.Component{

    render(){
        return <React.Fragment>
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-head">
                                <span>{this.props.currentName}</span>
                                <div className="header-modal-img">
                                    <img src="icons/people.svg" alt=""/>
                                </div>
                                <div className="modal-date">{this.props.date}</div>  
                            </div>
                            <div className="modal-desc">{this.props.currentInfo}</div>
                            <textarea 
                                className="modal-t_area t-border" 
                                name="text"
                                rows="7" 
                                maxLength="250" 
                                onChange={this.props.onChange}
                                value={this.props.text}>
                            </textarea>
                            <div className="modal-btns">
                                <button type="button" onClick={this.props.onClick} className="btn-modal" data-bs-dismiss="modal">Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default AddModal;