import Button from '../Button/Button';
import './Form.scss';

export default function Form(props) {
    const btnStyle = {padding:'10px 30px', borderRadius:'5px', marginLeft:'20px'}
    return (
        <div className='form-container'>
            <h2 className='form-title'>{props.title}</h2>
            
                <form onSubmit={props.onSubmit}>
                    <div className='form-body'>
                        <div className='form-section-name'>
                            <label htmlFor="name">NAME</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={null}
                            onChange={null}
                            required
                            />
                            
                        </div>
                        <div className='form-section-age'>
                            <label htmlFor="age">AGE</label>
                                <input
                                type="number"
                                id="age"
                                name="age"
                                value={null}
                                onChange={null}
                                required
                                />
                        </div>
                        <div className='form-section-dob'>
                            <label htmlFor="dob">DOB</label>
                                <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={null}
                                onChange={null}
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
                                        value="male"
                                        checked={null}
                                        onChange={null}
                                        required
                                    />
                                    <label htmlFor="male">MALE</label>

                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        checked={null}
                                        onChange={null}
                                        required
                                    />
                                    <label htmlFor="female">FEMALE</label>

                                </section>
                            </label>
                        </div>
                        <div className='form-section-food'>
                            <label htmlFor='food'>
                                FAVORITE FOOD</label>
                                <select name="food" id='food'>
                                    <option value="pizza">PIZZA</option>
                                    <option value="burger">BURGER</option>
                                    <option value="pasta">PASTA</option>
                                </select>
                                
                        </div>
                        <div className='form-section-hobbies'>
                        <label htmlFor="hobbies">
                            HOBBIES</label>
                            <textarea value={null} onChange={null} id='hobbies' />
                        
                        </div>
                    
                    </div>
                    <div className='form-btns'>
                        <Button btnType='red' text='CANCEL' onClick={props.onClose} style={btnStyle}/>
                        <Button btnType='blue' text='SUBMIT' onClick={null} style={btnStyle}/>
                    </div>
                </form>
            
        </div>
    );
}