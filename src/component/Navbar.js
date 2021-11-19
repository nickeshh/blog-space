import React, { useState } from 'react';
import {Avatar} from "@material-ui/core";
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, selectUserDate, setInput, setSignedIn, setUserData } from '../features/userSlice';
import "../styling/Navbar.css";

const Navbar = () => {

    const [inputValue, setInputValue] = useState("holiday");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserDate);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };

    const logout = (response) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null));    
    }

    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog Space</h1>
            { isSignedIn && (
                <div className="blog__search">
                    <input className="search"
                    placeholder="Search for a blog"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                     />
                     <button className="submit" onClick={handleClick}>Search</button>
                </div>
            )}
            
            {isSignedIn ? (
                <div className="navbar__user__data">
                    <Avatar className="user" src={userData?.imageUrl} alt={userData?.name}></Avatar>
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout 
                        clientId="845947015473-da8je4ik3g1qe38rf7mfkhheetbu7ja9.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                                Logout
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                <div className="navbar__user__data"><h4>User not available</h4></div>
            ) }
        </div>
    )
}

export default Navbar
