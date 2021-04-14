import React , {useEffect} from 'react';

 const Login =()=>{

    useEffect (()=>{
        window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FhandleLogin&client_id=853766637543-i8p9ldgjbgskl0ho5k9h63b02svadmlv.apps.googleusercontent.com&response_type=code&scope=openid%20profile%20email&flowName=GeneralOAuthFlow`)
        
    },[]);


     return(
    <div>
        you will be transferred;
    </div>)
}


export default Login; 

