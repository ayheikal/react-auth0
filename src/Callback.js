import React, {Component} from 'react';

class Callback extends Component {

componentDidMount(){
        //handle authentication  if expected values are in the url
        console.log('error: ',(this.props.location.hash))
        if(/access_token|id_token|error/.test(this.props.location.hash))
        {
            this.props.auth.handleAuthentication();
        }
        else
        {
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
