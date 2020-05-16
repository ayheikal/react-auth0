import React, {Component} from 'react';

class Callback extends Component {

componentDidMount(){
console.log('hash: ',(this.props.location.hash))
console.log('----------->: ',/error/.test(this.props.location.hash))
        //handle authentication  if expected values are in the url
        if(/access_token | id_token | error/.test(this.props.location.hash)){
            this.props.auth.handleAuthentication();
        }else{
            throw new Error("invalid callback url");
        }

    }

render() {
        return (
            <h1>loading...</h1>
        );
    }
}

export default Callback;
