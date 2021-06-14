import { handlDriveUploadForPicker } from "../gDrive";
import { Gapi } from '../gDrive';

const Button = () => {
    console.log(Gapi);

    const handlePickerClick = () => {
        const imgSettings = {};
        handlDriveUploadForPicker(imgSettings);
    }

    const handleShareDriveClick = () => {
        Gapi.shareDrive()
    }
    
    const handleAuthClick = () => {
        Gapi.authUser();
    }
    
    const handleUploadClick = () => {
        Gapi.uploadDrive()
    }

    const handleSignInClick = () => {
        Gapi.signInWithGoogle()
    }

    const handleSignOutClick = () => {
        Gapi.signOutGoogle()
    }

    return (
        <>
            <div>
                <button onClick={handleShareDriveClick}>Share Drive</button>
                <button onClick={handleAuthClick}>Authorize</button>
                <button onClick={handleUploadClick}>upload</button>
                <button onClick={handleSignInClick}>signIn</button>
                <button onClick={handleSignOutClick}>signOut</button>
                <button onClick={handlePickerClick}>open picker</button>
            </div>
            <div>
                <canvas id="myCanvas"></canvas>
            </div>
            {/* <img id="driveImg" src="" alt="img"/> */}
        </>
    )
}

export default Button
