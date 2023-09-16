import './PageHeader.scss';
import React from 'react';
import Button from '../Button/Button';

export default function PageHeader(props) {
    return (
        <div className="page-header">
            <h2 className="page-title">LIST OF USERS</h2>
            <Button text='ADD USERS' onClick={()=> props.setFormType('ADD USER')} style={{fontSize:'20px', fontWeight:'700'}} btnType='blue' />
        </div>
    );
}