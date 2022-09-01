import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Congratulation = () => {
    const[user]=useAuthState(auth)
    return (
        <div>
            <h2> Congratulations !!</h2>
            
        </div>
    );
};

export default Congratulation;