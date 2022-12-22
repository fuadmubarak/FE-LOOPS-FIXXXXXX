import axios from "axios";
import Logo from "./imgs/loops-logo.png";
import Background from "./imgs/e-wallet.jpg"
import { useNavigate } from "react-router-dom";

import React, { Component } from 'react'
import swal from "sweetalert";
import { useState } from "react";
import { useEffect } from "react";

// export default class login extends Component {

 

//   constructor(props) {
//     super(props);

//     this.state = { firstName: '', userPassword: '',pel: '', userEmail: '' }
    
//   }


//   handleChange = (ex) => {
//     this.setState({[ex.target.name] : ex.target.value})

// }

// addRegis = e => {
//     e.preventDefault()
//     console.log(this.state);
//     axios.post("http://localhost:8080/loops/api/user/login", this.state)
//       .then(response => {
//         console.log(response);
//         localStorage.setItem("useremail", this.state.userEmail)
//         localStorage.setItem("password", this.state.userPassword)
        
        
//         window.location.href = '/home';
//       })
//       .catch(error => {
//         console.log(error);
//       })
// }

//   render() {

//     const { firstName, userPassword, pel, userEmail } = this.state
    
    

//     return (

      

//       <div>
//       <section className="h-screen">
//         <div className="px-6 h-full text-gray-800 ">
//           <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
//             <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
//               <img
//                 src={Background}
//                 className="w-full"
//                 alt="e-wallet illustration"
//               />
//             </div>
//             <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
//               <form>
//                 <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
//                 <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
//                   <p className="text-center font-semibold mx-4 mb-0 text-xl">
//                     Welcome
//                   </p>
//                 </div>


//                 <div className="mb-6">
//                   <input
//                     type="text"
//                     name="userEmail"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     // id="exampleFormControlInput2"
//                     placeholder="pel"
//                     value={userEmail} 
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="text"
//                     name="userPassword"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     // id="exampleFormControlInput2"
//                     placeholder="First Name"
//                     value={userPassword} 
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 {/* <div className="mb-6">
//                   <input
//                     type="text"
//                     name="lastName"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     // id="exampleFormControlInput2"
//                     placeholder="Last Name"
//                     value={lastName} 
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="text"
//                     name="emailId"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     // id="exampleFormControlInput2"
//                     placeholder="email"
//                     value={emailId} 
//                     onChange={this.handleChange}
//                   />
//                 </div> */}

                

//                 <div className="flex justify-between items-center mb-6"></div>

//                 <div className="text-center lg:text-center">
//                   <button
//                     type="button"
//                     className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                     onClick={this.addRegis}
//                   >
//                     Login
//                   </button>
//                   <p className="text-sm font-semibold mt-2 pt-1 mb-0">
//                     Don't have an account?
//                     <a
//                       href="./register"
//                       className=" hover:text-green-500 focus:text-green-500 transition duration-200 ease-in-out"
//                     >
//                      <span></span> Register
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     )
//   }
// }



const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/home")
    }
  }, [])


  const handleLogin = async () =>{

    let result = await fetch("http://localhost:8080/api/user/login",{
      method: 'post',
      body: JSON.stringify({email, password}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
    


    
      result = await result.json();
      console.log(result)

    if(result.valid === "User Login Success"){
      localStorage.setItem('user', JSON.stringify(result))
      localStorage.setItem('userEmail', email)
      swal("Login Success!")
      window.location.href = "/home";
      // navigate("/home");
    }else{
      swal("Input A valid Login Credentials")
    }
    
    

    


  }


  // // const navigate = useNavigate();

  // async function loginUser() {
  //   return fetch('http://localhost:8080/loops/api/user/login', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "text/plain"
  //     },
  //     body: JSON.stringify()
  //   }).then(function(response) {
  //     return response.json();
  // })
  //  }

  
  //  export default function Login() {
    
  //   const [username, setUserName] = useState();
  //   const [password, setPassword] = useState();
  
  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     const response = await loginUser({
  //       username,
  //       password
  //     });
  //     if ('accessToken' in response) {
  //       swal("Success", response.message, "success", {
  //         buttons: false,
  //         timer: 2000,
  //       })
  //       .then((value) => {
  //         localStorage.setItem('accessToken', response['accessToken']);
  //         localStorage.setItem('user', JSON.stringify(response['user']));
  //         window.location.href = "/profile";
  //       });
  //     } else {
  //       swal("Failed", response.message, "error")
  //     }
  //   }



  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800 ">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={Background}
                className="w-full"
                alt="e-wallet illustration"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0" >
              {/* <form noValidate onSubmit={handleSubmit}> */}
              <form>
                <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0 text-xl">
                    Welcome
                  </p>
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6"></div>

                <div className="text-center lg:text-center">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="./register"
                      className=" hover:text-green-500 focus:text-green-500 transition duration-200 ease-in-out"
                    >
                     <span></span> Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
