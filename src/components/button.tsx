import { useState } from "react";
import { Gapi, uploadDriveForPicker } from "../gDrive";

declare const gapi: any;

const Button = () => {
    const [scopes, setScopes] = useState([]);
    console.log(Gapi);
    
    const handleAuthClick = () => {
        Gapi.authUser();
    }
    
    const handleUploadClick = () => {
        const params = {}
        uploadDriveForPicker(params);
    }

    const handleSignInClick = () => {
        Gapi.signInWithGoogle()
    }

    const handleSignOutClick = () => {
        Gapi.signOutGoogle()
    }

    const handleRevokeAccessClick = () => {
        Gapi.revokeAccess()
    }

    const handleGrantedScopesClick = async () => {
        const scopes = await Gapi.getGrantedScopes();
        const rScopes = scopes.split(' ').filter((val: any) => val.includes('auth'));
        console.log(rScopes);
        rScopes.unshift(`${gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()}`);
        setScopes(rScopes)
    };


    return (
        <>
            <div>
                <button onClick={handleAuthClick}>Authorize</button>
                <button onClick={handleUploadClick}>upload</button>
                <button onClick={handleSignInClick}>signIn</button>
                <button onClick={handleSignOutClick}>signOut</button>
                <button onClick={handleRevokeAccessClick}>revoke access</button>
                <button onClick={handleGrantedScopesClick}>see granted scopes</button>
            </div>
            {scopes.map(scope => <p key={scope}>{scope}</p>)}
            <div>
                <canvas id="myCanvas"></canvas>
            </div>
            {/* <img id="driveImg" src="" alt="img"/> */}
        </>
    )
}

export default Button
