import './Card.scss';
import React from 'react';
import Button from '../Button/Button';

export default function Card(props) {
    const {id, name, age, dob, gender, food, hobbies, onDelete, setFormType, setId} = props;

    const getAgeColor = (age) => {
        if(age < 25){
            return '#1A7318';
        } 
        else if(age >= 25 && age < 50){
            console.log(age);

            return '#F41B9E';
        } 
        else{
            return '#F4A41B';
        }
    }

    const color = getAgeColor(age);

    const cardFields = (title, value)=>(
        <p>
            <span className='fields-name'>{title}</span>
            <span className='fields-value'>{value}</span>
        </p>
    )

    const onViewEditClick = (formType, id) => {
        setFormType(formType);
        setId(id);
    }

    const btnStyle = {width:'100px', height:'30px', padding:'2px 4px', borderRadius:'5px' };

    return (
        <div className="card">
            <div className='card-header'>
                <p className=''>{name}</p>
                <div style={{backgroundColor:color}} className='circle'></div>
            </div>
            <div className='card-body'>
                {cardFields('AGE:', age)}
                {cardFields('DOB:', dob)}
                {cardFields('GENDER:', gender)}
                {cardFields('FOOD:', food)}
                {cardFields('HOBBIES:', hobbies)}
            </div>
            <div className='btns-container'>
                <Button text='DELETE' btnType='red' style={btnStyle} onClick={()=>onDelete(id)}/>
                <Button text='VIEW' btnType='blue' style={btnStyle} onClick={()=>onViewEditClick('VIEW USER',id)}/>
                <Button text='EDIT' btnType='blue' style={btnStyle} onClick={()=>onViewEditClick('EDIT USER',id)}/>
            </div>
        </div>
    );
}