import React, {Component} from 'react';

class Profile extends Component {
    state={
        profile:null,
        error:""
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile(){
        this.props.auth.getProfile((error,profile)=>{
            console.log("profile: ",profile)
            this.setState({profile,error})
        });

    }



    render() {
        const {profile}=this.state;
        if(!profile)return <h1>profile</h1>;
        return (
            <>
                <h1>Profile</h1>
                <p>{profile.nickname}</p>
                <img style={{maxWidth:50,maxHeight:50}}
                     src={profile.picture}
                     alt={'profile pic'}
                     />
                 <pre >{JSON.stringify(profile,null,2)}</pre>

            </>
        );
    }
}

export default Profile;
