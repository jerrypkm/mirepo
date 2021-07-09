import axios from 'axios'
const baseUrlReg =  'http://wortevqa.com/wortevcanvas/public/api/registrousuario';
const baseUrlLog = 'http://wortevqa.com/wortevcanvas/public/api/login';



export async function logInExistingUser (data){
    const form = {
        email: data.email,
        password: data.password,
    }
    const response = await axios({
        url: `${baseUrlLog}`,
        method: 'POST',
        data: form,
    })
    const res = response.data;
    console.log(res);
    return res;
}


export async function createNewUser (data){
    const form = {
        correo: data.emailR,
        contrasenia: data.passwordR,
        nombre: data.nameR,
    }
    console.log(form);
    const response = await axios({
        url: `${baseUrlReg}`,
        method: 'POST',
        data: form,
    })
    const res = response.data;
    console.log(res);
    return res;
}
