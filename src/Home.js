import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
      const{isAuthenticated,login}=this.props.auth;
      console.log(isAuthenticated())
        return (
            <div>
                <h1>Home</h1>
                {
                  isAuthenticated()?(
                    <Link to='/profile' className='btn btn-primary'>view Profile</Link>
                  ):(
                    <button onClick={login} className='btn btn-primary'>log In</button>
                  )
                }

            </div>
        );
    }
}

export default Home;
