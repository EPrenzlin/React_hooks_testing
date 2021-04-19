import { GoogleLogin } from 'react-google-login';

function Login(){

const clientId =`${process.env.REACT_APP_CLIENT_ID}.apps.googleusercontent.com`

const responseGoogle = (response) => {
console.log(response);
}

return(
<div> 
  <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}/>
    </div>
    )

}

export default Login