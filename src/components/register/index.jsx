import Logo from "./imgs/loops-logo.png";
import Background from "./imgs/image.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import React, { Component, useState } from 'react'
import { useEffect } from "react";

// export default class Register extends Component {

  

//   constructor(props) {
//     super(props);

//     this.state = { userName: '', userEmail: '',userPassword: '', userPhoneNum: '', userGender: '' }
    
//   }

//   handleChange = (ex) => {
//     this.setState({[ex.target.name] : ex.target.value})

 
//   }

  
//   addRegis = e => {
//     e.preventDefault()
//     console.log(this.state);
//     axios.post("http://localhost:8080/loops/api/user/register", this.state)
//     .then(response => {
//       console.log(response);
//       localStorage.setItem("user", this.state.userName)
//       localStorage.setItem("email", this.state.userEmail)
//       localStorage.setItem("phone number", this.state.userPhoneNum)
//       localStorage.setItem("gender", this.state.userGender)
      
//       window.location.href = '/home';
      
//       auth = localStorage.getItem('user');

//       if (auth) {
//         window.location.href = '/home';
//       }

//     })
//     .catch(error => {
//       console.log(error);
//     })
//  }

//   render() {

//     const { userName, userEmail, userPassword, userPhoneNum, userGender } = this.state
    

//     return (
//       <div>
//        <section className="h-screen">
//          <div className="px-6 h-full text-gray-800 ">
//            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
//              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
//                <img
//                 src={Background}
//                 className="w-full"
//                 alt="e-wallet illustration"
//               />
//             </div>
//             <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
//               <form>
//                 <a href="/">
//                   <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
//                 </a>
//                 <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
//                   <p className="text-center font-semibold mx-4 mb-0 text-xl">
//                     Input Your Data
//                   </p>
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="name"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Full Name"
//                     name="userName"
//                     value={userName} 
//                     onChange={this.handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="email"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="E-Mail"
//                     name="userEmail"
//                     value={userEmail} 
//                     onChange={this.handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="password"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Password"
//                     name="userPassword"
//                     value={userPassword} 
//                     onChange={this.handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="number"
//                     pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Phone Number"
//                     name="userPhoneNum"
//                     value={userPhoneNum} 
//                     onChange={this.handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="text"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Gender"
//                     name="userGender"
//                     value={userGender} 
//                     onChange={this.handleChange}
//                     required
//                   />
//                 </div>

//                 {/* <div className="mb-6">
//                   <select
//                     type="radio"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Gender"
//                   >
//                     <option>Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </select>
//                 </div> */}

//                 <div className="flex justify-between items-center mb-6"></div>

//                 <div className="text-center lg:text-center">
//                   <button
//                     type="button"
//                     className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                     onClick={this.addRegis}
//                   >
//                     Register
//                   </button>
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



// 'http://localhost:8080/loops/api/user/register'





const Register = () => {

  const navigate = useNavigate();
  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [userPhonenum, setuserPhoneNum] = useState('');
  const [userGender, setuserGender] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/home")
    }
  }, [])

  const addRegis = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/register', {
          name: userName,
          email: userEmail,
          password: userPassword,
          phoneNumber: userPhonenum,
          gender: userGender
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("user", userName)
          localStorage.setItem("userEmail", userEmail)

          navigate("/home")

        })
        .catch(function (error) {
          console.log(error);
        });

        // console.log(this.state);
        // axios.post("http://localhost:8080/loops/api/user/register", this.state)
        // .then(response => {
        //   console.log(response);
        //   localStorage.setItem("user", this.state.userName)
        //   localStorage.setItem("email", this.state.userEmail)
        //   localStorage.setItem("phone number", this.state.userPhoneNum)
        //   localStorage.setItem("gender", this.state.userGender)
          
          // window.location.href = '/home';
      
    
        // })
        // .catch(error => {
        //   console.log(error);
        // })
     }
  
  return (
    <>
    
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
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <a href="/">
                  <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
                </a>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0 text-xl">
                    Input Your Data
                  </p>
                </div>

                <div className="mb-6">
                  <input
                    type="name"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full Name"
                    name="userName"
                    // value={userName} 
                    // onChange={this.handleChange}
                    onChange={e => setuserName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="E-Mail"
                    name="userEmail"
                    // value={userEmail} 
                    // onChange={this.handleChange}
                    onChange={e => setuserEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="userPassword"
                    // value={userPassword} 
                    // onChange={this.handleChange}
                    onChange={e => setuserPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="number"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Phone Number"
                    name="userPhoneNum"
                    // value={userPhoneNum} 
                    // onChange={this.handleChange}
                    onChange={e => setuserPhoneNum(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Gender"
                    name="userGender"
                    // value={userGender} 
                    // onChange={this.handleChange}
                    onChange={e => setuserGender(e.target.value)}
                    required
                  />
                </div>

                {/* <div className="mb-6">
                  <select
                    type="radio"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Gender"
                  >
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div> */}

                <div className="flex justify-between items-center mb-6"></div>

                <div className="text-center lg:text-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={addRegis}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>






</>
  );
};

export default Register;


// <div>
// <section className="h-screen">
//         <div className="px-6 h-full text-gray-800 ">
//           <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
//             <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
//               <img
//                 src={Background}
//                 className="w-full"
//                 alt="e-wallet illustration"
//                 />
//             </div>
//             <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
//               <form>
//                 <a href="/">
//                   <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
//                 </a>
//                 <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
//                   <p className="text-center font-semibold mx-4 mb-0 text-xl">
//                     Input Your Data
//                   </p>
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="name"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Full Name"
//                     required
//                     />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="email"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="E-Mail"
//                     required
//                     />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="password"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Password"
//                     required
//                     />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="tel"
//                     pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Phone Number"
//                     required
//                     />
//                 </div>

//                 <div className="mb-6">
//                   <select
//                     type="radio"
//                     className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Gender"
//                     >
//                     <option>Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </select>
//                 </div>

//                 <div className="flex justify-between items-center mb-6"></div>

//                 <div className="text-center lg:text-center">
//                   <button
//                     type="button"
//                     className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                     onClick={() => navigate('/home')}
//                     >
//                     Register
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
