import {Redirect, Route} from 'react-router-dom';
import Profile from "./Profile";
import Home from "./Home";
import Navbar from "./Navbar";
import React, {Component} from 'react';
import Auth from "./Auth/Auth";
import Callback from "./Callback";

class App extends Component {
    constructor(props) {
        super(props);
        this.auth = new Auth(this.props.history);

    }
    render() {
        return (
            <>

                    <Navbar auth={this.auth}></Navbar>
                  <div className={'body'} style={{padding:'20px',textAlign:'center'}}>
                    <Route  path={'/'} exact  render={props => <Home auth={this.auth} {...props}/>}/>
                    <Route path={'/callback'} render={props => <Callback auth={this.auth} {...props}/>}/>
                    <Route  path={'/profile'}
                        render={props => this.auth.isAuthenticated()?(< Profile auth={this.auth} {...props}/>)
                        :(<Redirect to={"/"}/>)
                        }/>
                </div>
            </>
        );
    }
}

export default App;
