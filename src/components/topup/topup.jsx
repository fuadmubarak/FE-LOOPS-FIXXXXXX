import { Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import swal from "sweetalert";
import Navigation from "../header/Navigation";
import api3 from "../../services/api3";
import { useParams } from "react-router-dom";

// const bank = [
//   { value: "BCA", label: "BCA" },
//   { value: "BRI", label: "BRI" },
//   { value: "BNI", label: "BNI" },
//   { value: "MANDIRI", label: "MANDIRI" },
// ];

// const nominal = [
//   { value: "20000", label: "20000" },
//   { value: "30000", label: "30000" },
//   { value: "50000", label: "50000" },
//   { value: "100000", label: "100000" },
//   { value: "150000", label: "150000" },
//   { value: "200000", label: "200000" },
//   { value: "400000", label: "400000" },
// ];




function Topup() {
  const [bankVA, setNomorVa] = useState('');
  
  const localVa = localStorage.setItem("localVa", bankVA)
  
  const [topup, setTopup] = useState();

  
  

  
  const handleTopup = async () =>{
  
    let result = await fetch("http://localhost:8080/loops/api/bank/bank/request",{
      method: 'post',
      body: JSON.stringify({bankVA}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
      result = await result.json();
      console.log(result)
  
    if(result.data === "Bank Virtual Account Checked"){
      localStorage.setItem('checkk', JSON.stringify(result))
      localStorage.setItem('method' , 'TopUp')
      // if (condition) {
        
      // }
      
      // localStorage.setItem('userEmail', userEmail)
      console.log(localVa);
      // swal("Bank Virtual Account Checked!")
      window.location.href = "/transaction";
      // navigate("/home");
    }else{
      swal("Input A valid Login Credentials")
    }
  }


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
            <form>
              <h3 className="font-[poppins]">Metode Topup</h3>
              <br />

              <div className="mb-3">
                <Input placeholder="Input Your Bank Virtual Account" 
                       onChange={e => setNomorVa(e.target.value)}
                       
                />
              </div>

              <div className="mb-3">
                <Input placeholder="Input Topup Nominal" 
                        onChange={e => setTopup(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button
                  // type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={handleTopup}
                >
                  Top Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topup;
