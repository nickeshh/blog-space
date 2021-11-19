import React from 'react'
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import "../styling/Home.css"
import Blogs from './Blogs';

const HomePage = () => {
    const dispatch = useDispatch()

    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="home__page" style={{display: isSignedIn ? "none" : ""}}>
        {!isSignedIn ? (
            <div className="login__message">
            <h1>A place to get more knowledge !</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever </p>
            <GoogleLogin
                clientId="845947015473-da8je4ik3g1qe38rf7mfkhheetbu7ja9.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                    >
                        Login With Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
            >
            </GoogleLogin>
        
        </div>
        ) : (
            <Blogs />
        )}            
        </div>
    )
}

export default HomePage
