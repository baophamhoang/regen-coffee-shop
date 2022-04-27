import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {  postFeedbacksFB } from '../../redux/actions';
import { v4 as uuidv4} from 'uuid';
import ErrorMsg from './FeedbackErrorMsg';
const initalForm = {
    firstname: '',
    lastname: '',
    email: '',
    phone: null,
    feedback: '',
}

const required = (x) => x && x.length;
const maxLength= (len) => (x) => !(x) || (x.length <= len);
const minLength= (len) => (x) => x && (x.length >= len);
const numberOnly= (x) => !isNaN(Number(x));
const validEmail= (x) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(x);

const validations = {
    firstname:{
        required:required, 
        minLength: minLength(2),
        maxLength: maxLength(10)
    },
    lastname: {
        required: required, 
        minLength: minLength(2),
        maxLength: maxLength(10)
    },
    email: {
        required:required, 
        validEmail:validEmail
    },
    phone: {
        required:required, 
        numberOnly: numberOnly
    },
    feedback: {
        required:required, 
        minLength:minLength(10)
    }
}

function FeedBackForm(){
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState(initalForm);
    const [errors, setErrors] = useState({
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValue({
            ...formValue, 
             [name]: value
        })
    }
    const handleBlur = (e) =>{
        const {name, value} = e.target;
        const valids = Object.keys(validations[name]).filter( x => !validations[name][x](value))
        setErrors({
            ...errors,
            [name]: valids
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (Object.values(errors).some(v=>v.length>0)){
            alert('Please review your feedback')
        }
        else {
            alert(JSON.stringify(formValue));
            const payload = {...formValue};
            payload.id = uuidv4();
            payload.date = new Date().toISOString();
            dispatch(postFeedbacksFB(payload));}
    }
    useEffect(()=>{
        const inputs = Object.keys(errors);
        inputs.forEach( x => {
            const element = document.querySelector(`.form-floating .form-control[name=${x}]`);
            if (errors[x].length>0 && !element.classList.contains('is-invalid')){
                element.classList.add('is-invalid')
            }
            if (errors[x].length===0){
                if (element.classList.contains('is-invalid')){element.classList.remove('is-invalid')};
                element.classList.add('is-valid')
            }
        })
    },[errors])

   
    return (
        <form key='feedback-form' onSubmit={handleSubmit} >
            <div className="row">     
                <div className="col-12 col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className={`form-control`} onInput={handleInputChange} 
                            onBlur={handleBlur} name="firstname" id="feedback-firstname" placeholder='Your firstname' required/>
                        <label htmlFor="feedback-name">Firstname</label>
                        <i className='feedback-error-msg'>{<ErrorMsg validations={errors.firstname}/>||''}</i>
                    </div>
                </div>
                <div className="col-12 col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onInput={handleInputChange} onBlur={handleBlur} name="lastname" id="feedback-lastname" placeholder='Your lastname' required/>
                        <label htmlFor="feedback-lastname">Surname</label>
                        <i className='feedback-error-msg'>{<ErrorMsg validations={errors.lastname}/>||''}</i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" onInput={handleInputChange} onBlur={handleBlur} name="email" id="feedback-email" placeholder='Your email' required/>
                        <label htmlFor="feedback-email">Email</label>
                        <i className='feedback-error-msg'>{<ErrorMsg validations={errors.email}/>||''}</i>
                    </div>
                </div>
                <div className="col-12 col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onInput={handleInputChange} onBlur={handleBlur} name="phone" id="feedback-number" placeholder='Your number'/>
                        <label htmlFor="feedback-number">Tel number (Optional)</label>
                        <i className='feedback-error-msg'>{<ErrorMsg validations={errors.phone}/>||''}</i>
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" onInput={handleInputChange} onBlur={handleBlur} name="feedback" id="feedback-textarea" placeholder='Your feedback' required style={{
                    minHeight: '200px'
                }}></textarea>
                <label htmlFor="feedback-textarea">Your feedback</label> 
                <i className='feedback-error-msg'>{<ErrorMsg validations={errors.feedback}/>||''}</i>
            </div>
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <button type="submit" className="feedback-btn btn-secondary" style={{
                        width: '100%'
                    }}>Submit</button>
                </div>
            </div>
            
        </form>
    )
}
export default FeedBackForm;