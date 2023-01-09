import React, {useEffect, useState } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { signInWithGoogle,auth,logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const SignInForm =()=>
{
//  {
//     this.state = {
//       email: "",
//       password: ""
//     };
    
   
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleClick  = this.handleClick.bind(this);
  
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }
//   // GoogleButton =()=>{
//   //   signInWithProvider(new firebase.auth.GoogleAuthProvider());
//   // }
//   handleClick(){
//     alert('Clicked');
//   //  }
//   }

 
//   render() {
//  } 
 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, loading, error] = useAuthState(auth);
const navigate = useNavigate();
useEffect(() => {
  if (loading) {
    // maybe trigger a loading screen
    return;
  }
  if (user) navigate("/");
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
                 to="/signup"
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
             <button onClick={()=>logInWithEmailAndPassword(email,password)} className="formFieldButton">Sign In</button>{" "}
             <Link to="/signup" className="formFieldLink">
               Create an account
             </Link>
           </div>
           <div className="socialMediaButtons">
             <div className="facebookButton">
               <FacebookLoginButton onClick={() => alert("Hello")} />
             </div>
             
             <div className="googleloginbutton">
               <GoogleLoginButton onClick={signInWithGoogle} />
             </div>
           </div>
        </form>
   </div>
   </div>
   </div>
  //  </div>
    );
  }


export default SignInForm;
