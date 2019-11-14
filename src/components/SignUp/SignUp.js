import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';
import { signUp, totalPilatesUsers, register } from '../../actions';
import { Animated } from "react-animated-css";
// import { socket } from '../../socket';
// import Chat from '../Dashboard/Chat/Chat';
import { Button } from 'reactstrap';

const SignUpForClass = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [values, handleChange] = useStatefulFields();

    const signUpForClasses = useSelector(
        state => state.pilates_users
    );

    // console.log("signUpForClasses", signUpForClasses);
    

    useEffect(() => { 
            dispatch(totalPilatesUsers());
    }, [signUpForClasses]);

    // console.log("signUpForClasses", signUpForClasses);

    function useStatefulFields() {
        const [values, setValues] = useState({});

        const handleChange = e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        };
        return [values, handleChange];
    }

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            {/* <div style={{ position: 'absolute', top: '15%', width: 200, height: 500, left: '20%', transform: 'translate(-50%, -20%)' }}>
                <Chat />
            </div> */}
            <h3 style={{ textAlign: "center" }}>Signup for a class, now.</h3>
            <br />
            <div className="form">
                {/* {this.state.error && (<div className="error">Something went wrong. Please try again!</div>)} */}
                <input type="email" className="inputs" required name="email" onChange={handleChange} />
                {/* <label>{this.state.email.indexOf('@') != -1 ? 'Your email' : "*email"}</label> */}

                <select required className="inputs" type="select" name="select" onChange={handleChange}  >
                    <option value="">--Please choose your class--</option>
                    <option value="pilates">Hot Pilates</option>
                    <option value="yoga">Yin Yoga</option>
                </select>
                {/* <label>{this.state.select != null ? "Selected" : '*select'}</label> */}

                <Button color="secondary" size="sm" onClick={() => dispatch(signUp(values))}>SignUp</Button>
                <HashRouter>
                    <span className="form__lnk">Already a member? <Link className="lnks" to="/login">Login</Link></span>
                </HashRouter>
            </div>
        </Animated>
    );
}


export default SignUpForClass;



// import React, { Component } from 'react';
// import { HashRouter, Link } from 'react-router-dom';
// import axios from '../../axios'; // './axios' instance
// import { Animated } from "react-animated-css";
// import { Button } from 'reactstrap';

// class SignUpForClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             email: '',
//             select: ''
//         };
//     }

//     handleChange({ target }) {
//         console.log(target.value);
//         this.setState({
//             [target.name]: target.value
//         });
//     }

//     register() {
//         // console.log(this.state.select);

//         // if (this.state.select == "pilates") {
//         if (this.state.email != '' && this.state.email.indexOf('@') != -1) {
//             axios.post('/register', {
//                 email: this.state.email,
//                 select: this.state.select
//             }).then(({ rows }) => {
//                 console.log("clientside result pilates", rows);
//                 location.replace('/default');
//             }).catch(error => {
//                 console.log("submit error", error);
//                 this.setState({
//                     error: true
//                 });
//             });
//         } else {
//             this.setState({
//                 error: true
//             });
//         }
//     }

//     render() {
//         return (
//             <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
//                 <div className="form">
//                     {this.state.error && (<div className="error">Something went wrong. Please try again!</div>)}
//                     <input type="email" className="inputs" required name="email" onChange={e => this.handleChange(e)} />
//                     <label>{this.state.email.indexOf('@') != -1 ? 'Your email' : "*email"}</label>

//                     <select required className="inputs" type="select" name="select" onChange={e => this.handleChange(e)} >
//                         <option value="">--Please choose your class--</option>
//                         <option value="pilates">Hot Pilates</option>
//                         <option value="yoga">Yin Yoga</option>
//                     </select>
//                     <label>{this.state.select != null ? "Selected" : '*select'}</label>

//                     <Button color="secondary" size="sm" onClick={() => this.register()}>SignUp</Button>
//                     <HashRouter>
//                         <span className="form__lnk">Already a member? <Link className="lnks" to="/login">Login</Link></span>
//                     </HashRouter>
//                 </div>
//             </Animated>
//         );
//     }
// }

// export default SignUpForClass;