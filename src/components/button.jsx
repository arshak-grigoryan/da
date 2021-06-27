import { useState } from "react";
import { Gapi, uploadDriveForPicker, DriveApiV3 } from "../gDrive";

const Button = () => {
    const [scopes, setScopes] = useState([]);

    console.log(Gapi);

    const handleShareDriveClick = async () => {
        Gapi.shareDrive();
        console.log(DriveApiV3)
    }
    
    const handleAuthClick = () => {
        Gapi.authUser();
    }
    
    const handleUploadClick = () => {
        uploadDriveForPicker();
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
        setScopes(scopes.split(' ').filter(val => val.includes('auth')))
    };


    return (
        <>
            <div>
                <button onClick={handleShareDriveClick}>Share Drive</button>
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
