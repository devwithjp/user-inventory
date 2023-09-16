import { users } from '../../common/data';
import Button from '../Button/Button';
import './Form.scss';
import { useState } from 'react';

export default function Form(props) {
    const btnStyle = {padding:'10px 30px', borderRadius:'5px', marginLeft:'20px'}
    const {onClose, setUsersData, usersData, id, title} = props;
    const [tempUserData, setTempUserData] = useState(usersData.find(x => x.id === id));

    

    
    const isEdit = title === 'EDIT USER';
    const isView = title === 'VIEW USER';

    const onClickHandler = (e) => {
        e.preventDefault();
        const dataObj = {id: isEdit? id : usersData.length+1 ,name : tempUserData?.name, age: tempUserData.age, dob: tempUserData.dob, gender: tempUserData.gender, food: tempUserData.food, hobbies: tempUserData.hobbies};
        if(isEdit){
            const tempUsersData = [...usersData];
            tempUsersData[usersData.findIndex((user) => user.id === id)] = dataObj;
            setUsersData(tempUsersData)
        }
        else{
            setUsersData([...usersData,dataObj]);
        }
        onClose();

    }



    const onChangeHandler = (e) => {
        if(isView){
            return
        }
        setTempUserData({...tempUserData, [e.target.name]: e.target.value});
    }


    console.log(usersData);
    return (
        <div className='form-container'>
            <h2 className='form-title'>{title}</h2>
            
                <form onSubmit={props.onSubmit}>
                    <div className='form-body'>
                        <div className='form-section-name'>
                            <label htmlFor="name">NAME</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={tempUserData?.name}
                            onChange={onChangeHandler}
                            required
                            />
                            
                        </div>
                        <div className='form-section-age'>
                            <label htmlFor="age">AGE</label>
                                <input
                                type="number"
                                id="age"
                                name="age"
                                value={tempUserData?.age}
                                onChange={onChangeHandler}
                                required
                                />
                        </div>
                        <div className='form-section-dob'>
                            <label htmlFor="dob">DOB</label>
                                <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={tempUserData?.dob}
                                onChange={onChangeHandler}
                                required
                                />
                            
                        </div>
                        <div className='form-section-gender'>
                            <label htmlFor="gender">GENDER
                                <section>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="Male"
                                        checked={tempUserData?.gender=='male'}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                    <label htmlFor="male">MALE</label>

                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="Female"
                                        checked={tempUserData?.gender=='female'}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                    <label htmlFor="female">FEMALE</label>

                                </section>
                            </label>
                        </div>
                        <div className='form-section-food'>
                            <label htmlFor='food'>
                                FAVORITE FOOD</label>
                                <select name="food" id='food' value={tempUserData?.food} onChange={onChangeHandler}>
                                    <option value="pizza">PIZZA</option>
                                    <option value="burger">BURGER</option>
                                    <option value="pasta">PASTA</option>
                                </select>
                                
                        </div>
                        <div className='form-section-hobbies'>
                        <label htmlFor="hobbies">
                            HOBBIES</label>
                            <textarea value={tempUserData?.hobbies} onChange={onChangeHandler} id='hobbies' />
                        
                        </div>
                    
                    </div>
                    <div className='form-btns'>
                        <Button btnType='red' text='CANCEL' onClick={props.onClose} style={btnStyle}/>
                        {!isView && <Button btnType='blue' text='SUBMIT' onClick={onClickHandler} style={btnStyle}/>}
                    </div>
                </form>
            
        </div>
    );
}