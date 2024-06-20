import React, { FC, useState } from 'react';
import Button from "../control/button/Button";
import './header.css';
import { HeaderType } from "./header-type";
import { useNavigate, Link } from "react-router-dom";

const Header:FC<HeaderType> = ({ showButton, btnText, onEditClick, openDeleteModal}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const handleBackClick = () => navigate(-1);

    const updateCustomerOnClick = () => {
        setShowDropdown(false);
        onEditClick();
    }

    const shouldOpenDeleteModal = () => {
        openDeleteModal();
        updateCustomerOnClick();
    }

    return(
        <div className={'header-container'}>
            <button className={'back-button'} onClick={() => handleBackClick()}> {`<< Back`} </button>
            <div className={'header-button-side-container'}>
                {showButton && <Button onClick={() => setShowDropdown(!showDropdown)} title={btnText} additionalClassName={'header-container-btn'} />}
                {(showButton && showDropdown) && <div className={'buttons-drop-down-container'}>
                    <Link to={'/customers/edit'}>
                        <button className={'edit-button'} onClick={() => updateCustomerOnClick()}> Edit</button>
                    </Link>
                    <button className={'delete-button'} onClick={() => shouldOpenDeleteModal()}> Delete</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;