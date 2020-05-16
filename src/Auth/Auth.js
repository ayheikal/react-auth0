import auth0 from 'auth0-js'


export default class Auth {
    constructor(history) {
        this.history=history;
        this.auth0=new auth0.WebAuth({
            domain:process.env.REACT_APP_AUTH0_DOMAIN,
            clientID:process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri:process.env.REACT_APP_AUTH0_CALLBACK_URL,
            responseType:"token id_token",
            scope: "openid profile email",
        })

    }
    login=()=>{
        //this will  redirect the browser to Auth0 login page
        this.auth0.authorize();
    }

    handleAuthentication=()=>{
      this.auth0.browserHistory((err, authResult)=>{
        console.log('authResult',authResult)
        if(authResult && authResult.access_token && authResult.id_token){
          this.setSession(authResult);
          this.history.push('/');
        }
        else if(err){
          this.history.push('/');
          alert(`Error: ${err.error}. Check the console for more details`)
          console.log(err)
        }
      })
    }

    setSession=(authResult)=>{
      console.log(authResult);
      //set the time that the access_token will take to expire
      const expireAt=JSON.stringify(authResult.expiresIn*1000+new Date().getTime());
      localStorage.setItem('access_token',authResult.access_token)
      localStorage.setItem('id_token',authResult.id_token)
      localStorage.setItem('expires_at',expireAt)
    }
    isAuthenticated(){
      const expiresAt=JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime()<expiresAt;
    }

}
