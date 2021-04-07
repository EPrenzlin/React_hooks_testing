import { GoogleLogin } from 'react-google-login';


function Login(){
const clientId = "clientId to be fetched out "
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