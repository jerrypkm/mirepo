import React from 'react'

class ModalList extends React.Component{

    render() {
        return <ol className="body-item-grid">
            {this.props.gridModal.map((gridModal) => {
                return(
                    <div key={gridModal.id}>
                        <li 
                            type="button" 
                            data-bs-toggle="modal" 
                            data-bs-target="#addModal"  
                            name={gridModal.id}
                            onClick={this.props.onClick}
                            value={gridModal.text} 
                            className="item-section"> {gridModal.text}
                        </li>
                    </div>
                )
            })}
        </ol>
    }
}

export default ModalList