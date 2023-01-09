// import React, { useState } from 'react';

// const SignUp = () => {
// 	const [bg,setDarkMode] =useState('white');
// 	const DarkMode=() =>{
// 		let newbg='grey';
// 		setDarkMode(newbg);
		
// 	}
// 	const GotoSignIn = () =>{
// 		alert('Sign In');
// 	}
	
// 	const GotoSignUp = () =>{
// 		alert('Sign Up');
// 	}
// 	const state=useState();
// 	let date = new Date().toLocaleTimeString();
// 	const [count, setCounter] =useState(date);
// 	const IncVal=()=>
// 	{
// 		setCounter(date);
		
// 	}
// 	const PrevMode = ()=>{
// 		setDarkMode('white');
// 	}
	
// 	return (
// 	<div
// 	style={{
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		width: '100%',
// 		height: '50vh',
// 		backgroundColor:bg
// 	}}
// 	>
	
// 	{/* <h1 >{count}</h1> */}
// 	{/* <center>
// 		<input placeholder='Enter Your Name' type= 'text'/>
// 		</center> */}
// 	<form action="" class='box'>
// 		<div>
// 			<label htmlFor='email'>Email</label>
// 			<input placeholder='Email' type='text' name='email' id='email'/>
// 		</div>
// 		<div>
// 			<label htmlFor='password'>Password</label>
// 			<input placeholder='Password' type='password' name='password' id='password'/>
// 		</div>
// 		<button onClick={GotoSignIn}>Sign In</button>
// 		<button onClick={GotoSignUp}>Sign Up</button>
// 	</form>

// 	<button  onClick={DarkMode} onDoubleClick={PrevMode}>Dark Mode </button>
	
// 	</div>
// );
// };

// export default SignUp;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { Link, NavLink,useNavigate} from "react-router-dom";
//import { auth } from "../firebase";

const SignUpForm =()=> {
 
//   {
//     // this.state = {
//   //   email: "",
//   //   password: "",
//   //   name: "",
//   //   hasAgreed: false
//   // };

//   // this.handleChange = this.handleChange.bind(this);
//   // this.handleSubmit = this.handleSubmit.bind(this);

// //   const handleChange =(event) => {
// //   let target = event.target;
// //   let value = target.type === "checkbox" ? target.checked : target.value;
// //   let name = target.name;
// //   let email = target.email;
// //   let password = target.password;
// //   this.setState({
// //     [name]: value,
// //     [email]: value,
// //     [password]: value
// //   });
// // }

// // const handleSubmit=async(e)=> {
// //    e.preventDefault();

// //   console.log("The form was submitted with the following data:");
// //  // console.log(this.state);
// //   // try{
// //   //   const user=await createUserWithEmailAndPassword(
// //   //     auth,
// //   //     this.setState({email:this.state.email}),
// //   //     this.setState({password:this.state.password})
// //   //   );
// //   //   console.log("This is register method");
// //   //   console.log(user);
// //   // }catch(error){
// //   //   console.log(error.message);
// //   // }
// // }
// }
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [hasAgreed,setAgreed]=useState("");
const [user, loading] = useAuthState(auth);
const navigate = useNavigate();

const register = () => {
  if (!name) alert("Please enter name");
  if (!password) alert("Please enter password");
  if (!email) alert("Please enter email");
  console.log("The form was submitted with the following data:");
  console.log(name,' ',password,' ',email);
  registerWithEmailAndPassword(name, email, password);
};

useEffect(() => {
  if (loading) return;
  if (user) navigate("/signin");
}, [user, loading]);

    return (
      <div className="App">
      <div className="appAside" />
      <div className="appForm">

      <div className="pageSwitcher"> 
             <NavLink
                to="/signin"
                activeclassname="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
               <NavLink to="/signup"
                activeclassname="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
             <div className="formTitle">
               <NavLink
                 to="/signin"
                 activeclassname="formTitleLink-active"
                 className="formTitleLink"
               >
                 Sign In
               </NavLink>{" "}
               or{" "}
               <NavLink
                 
                 to="/signup"
                
                 activeclassname="formTitleLink-active"
                 className="formTitleLink"
               >
                 Sign Up
               </NavLink>
            </div>


      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={hasAgreed}
                onChange={(e)=>setAgreed(e.target.value)}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button onClick={register} className="formFieldButton">Sign Up</button>{" "}
            <Link to="/signin" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
}
export default SignUpForm;