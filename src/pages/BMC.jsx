import React from 'react'
import axios from 'axios'
import PageLoading from '../Components/PageLoading'
import Dashboard from '../Components/Dashboard'
const strToken='xK8ti0TzA4NR6doTqiG4gP8RTq865FLjPJ15NOD2';
const urlRead = 'http://wortevcanvasjet.wortevqa.com/api/leerusuario/';


class BMC extends React.Component{

    constructor(props) {
        super(props);
        if (localStorage.getItem('userID')!=null) {
            this.state = { 
                loading: true,
                error: null,
                form: {
                    nombre: '',
                    apellido: '',
                    userID: localStorage.getItem('userID'),
                }
            }
        }
        else{

        }
    }

    async componentDidMount() {
        await axios({
            url: `${urlRead}`+this.state.form.userID,
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + strToken
            }
        }) 
        .then(response =>{
            if(response.data.data.id){
                this.setState({form: {
                    nombre: response.data.data.nickname,
                    userID: response.data.data.id,
                    },
                    loading: false,
                });
                //console.log(this.state);
                localStorage.setItem('userID', response.data.data.id);
                localStorage.setItem('userName',  response.data.data.name);
                localStorage.setItem('email', response.data.data.email);
            }  
        })
        .catch(error => {
            this.setState({loading: false, error:error});
            console.log(error);
            alert(error);
            return error;
        })
    }

    render(){
        if(this.state.loading === true){
            return <PageLoading/>
        }
        return <React.Fragment>
            <Dashboard
            formValues={this.state.form}
            />
        </React.Fragment>
    }
}

export default BMC