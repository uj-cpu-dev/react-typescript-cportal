import React, { FC } from 'react';
import './deleteaccount.css'
import Button from "../../../control/button/Button";
import Security from '../../../../images/security.png';

const DeleteAccount:FC = () => {
    return(
        <div className={'delete-account-container'}>
            <div className={'delete-account-top-container'}>
                <img src={Security} alt={'security-logo'} />
                <h3>Security</h3>
            </div>
            <Button title={'Delete account'} additionalClassName={'delete-account-btn'} onClick={() => console.log('test')} />
            <p className={'delete-text'}>A deleted customer cannot be restored. All data will be permanently removed.</p>
        </div>
    )
}

export default DeleteAccount;