import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import Navigation from "../header/Navigation";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

import React, { Component } from 'react'
import { useState } from "react";
import swal from "sweetalert";

// export default class index extends Component {

//   constructor(props) {
//     super(props);

//     this.state = { nopel: '' }
    
//   }

//   handleChange = (ex) => {
//     this.setState({[ex.target.name] : ex.target.value})

// }

//   addnopel = () => {
          
//     localStorage.setItem("nomorPelanggan", this.state.nopel)
//       .then(response =>{
//         console.log(response);
//         window.location.href = '/pay';
//       }
//         )
    
   
          
        
// }


//   render() {

//     const { nopel } = this.state
    

//     return (
//       <>
//       <Navigation></Navigation>
//       <div className="Payment mt-5 font-[poppins]">
//         <div
//           style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
//         >
//           <div
//             className="card col-12 col-lg-6 login-card mt-2 hv-center"
//             style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
//           >
//             <form>
//               <div></div>
//               <br />
//               <div className="grid grid-cols-1 justify-items-center w-full">
//                 <div className=" col-span-1">
//                   <img
//                     src={require("../bill/logobpjs.png")}
//                     className=" h-36"
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label class="block">
//                   <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
//                     Id Pelanggan
//                   </span>
//                   <input
//                     type="text"
//                     name="nopel"
//                     id="nopel"
//                     value={nopel}
//                     onChange={this.handleChange}
//                     class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  block w-full rounded-md sm:text-sm focus:border-utama focus:ring-utama"
//                     placeholder="Tolong Masukkan ID PELANGGAN"
//                   />
//                 </label>
//               </div>
//               <div className="d-grid">
//                 <button
//                   type="submit"
//                   className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
//                   onClick={this.addnopel}
                  
//                 >
//                   Check
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//     )
//   }
// }



// ===================================================================================

function Bill() {

  const [merchNoPel, setNopel] = useState("");

  const handlePay = async () =>{

    let result = await fetch("http://localhost:8080/loops/api/merchant/merch/check",{
      method: 'post',
      body: JSON.stringify({merchNoPel}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });


    
      result = await result.json();
      console.log(result)

    if(result.data === "Check Success"){
      console.log(JSON.stringify(result));
      // localStorage.setItem('user', JSON.stringify(result))
      localStorage.setItem('nopel', merchNoPel)
      swal("Merch Found!")
      window.location.href = "/pay";
      // navigate("/home");
    }else{
      console.log(JSON.stringify(result));
      swal("Nomor Pelanggan Tidak Diketahui")
    }
    
    

    


  }

  // const get = () => {
    
      
  //     localStorage.setItem("pelid", noPel);
  //     window.location.href = '/pay'
      
  //   }



  return (
    <>
      <Navigation></Navigation>
      <div className="Payment mt-5 font-[poppins]">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div></div>
              <br />
              <div className="grid grid-cols-1 justify-items-center w-full">
                <div className=" col-span-1">
                  <img
                    src={require("../bill/logobpjs.png")}
                    className=" h-36"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Id Pelanggan
                  </span>
                  <input
                    type="text"
                    name="merchNoPel"
                    value={merchNoPel}
                    onChange={(e) => setNopel(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  block w-full rounded-md sm:text-sm focus:border-utama focus:ring-utama"
                    placeholder="Tolong Masukkan ID PELANGGAN"
                  />
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
                  onClick={handlePay}
                >
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
