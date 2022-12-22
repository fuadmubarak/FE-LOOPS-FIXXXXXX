import { Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import swal from "sweetalert";
import Navigation from "../header/Navigation";
import api from "../../services/api";
import api3 from "../../services/api3";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Transaction = () => {
  
  const param = useParams();
  const params = useParams();
  const [user, setUser] = useState([]);
  const [product, setProducts] = useState({});
  
  // ambil data api user
  
  const localVa = localStorage.getItem("localVa")
  const localId = localStorage.getItem("Id")
  const userEmail = localStorage.getItem("userEmail")
   

  const fetchUser = async () => {
  
    
    try {
      const url1 = `/user/details/${userEmail}`;
      const response =  await api.get(url1);
      const payload = [ ...response.data ]; //masuk kedalam data dan ke citties
      console.log(payload);
      setUser(payload);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  // useEffect(() => {
  //   if (params) {
  //     fetchUser(params);
  //   }
  // }, [params]);
  
  useEffect(() => {
    fetchUser();
  }, []);

  // ambil data api topup
  const fetchProduct = async () => {
    try {
      const url = `/bank/find/${localVa}`;
      const response = await api3.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param) {
      fetchProduct(param);
      
    }
  }, [param]);

//============================================================================================================


  // const lala = JSON.stringify(user.map((item => (item.userAddress))))

  // console.log(lala);


    // const username = user.userName
    // const useremail = JSON.stringify(user.map((item => (item.userEmail) )))
    // const userpassword = JSON.stringify(user.map((item => (item.userPassword) )))
    // const userphone = JSON.stringify(user.map((item => (item.userPhoneNum) )))
    // const usergender = JSON.stringify(user.map((item => (item.userGender) )))
    // const useraddress = JSON.stringify(user.map((item => (item.userAddress) ))) 
    // const userpovince = JSON.stringify(user.map((item => (item.userPovince) )))
    // const usercity = JSON.stringify(user.map((item => (item.userCity) )))
    // const userpostcode = JSON.stringify(user.map((item => (item.userPostCode) ))) 
    // const usercountry = JSON.stringify(user.map((item => (item.userCountry) ))) 

    //  console.log(username);
    //  console.log(username);
   
    // const username = JSON.stringify(user.map((item => (item.userName) )))
    // const useremail = JSON.stringify(user.map((item => (item.userEmail) )))
    // const userpassword = JSON.stringify(user.map((item => (item.userPassword) )))
    // const userphone = JSON.stringify(user.map((item => (item.userPhoneNum) )))
    // const usergender = JSON.stringify(user.map((item => (item.userGender) )))
    // const useraddress = JSON.stringify(user.map((item => (item.userAddress) )))
    // const userpovince = JSON.stringify(user.map((item => (item.userPovince) )))
    // const usercity = JSON.stringify(user.map((item => (item.userCity) )))
    // const userpostcode = JSON.stringify(user.map((item => (item.userPostCode) )))
    // const usercountry = JSON.stringify(user.map((item => (item.userCountry) )))
    const useraddress = user.map((item => (item.userAddress) ))
    const userpovince = user.map((item => (item.userPovince) ))
    const usercity = user.map((item => (item.userCity) ))
    const userpostcode = user.map((item => (item.userPostCode) ))
    const usercountry = user.map((item => (item.userCountry) ))

    localStorage.setItem("address", useraddress)
    localStorage.setItem("province", userpovince)
    localStorage.setItem("city", usercity)
    localStorage.setItem("postcode", userpostcode)
    localStorage.setItem("country", usercountry)

    // const test = JSON.parse(useraddress)
    // localStorage.setItem('test', useraddress);


  const historyName = localStorage.getItem("userName")          //ambil data nama user
  const bankName = product.bankName                             //ambil data nama bank
  console.log(bankName);
  const historyRef = localStorage.getItem("userEmail")          //ambil data referensi (email dari user)
  const historyDescription = localStorage.getItem("method")     //ambil data metode history (kalo topup ya topup kalo payment ya payment)
  const bankbalance = product.bankBalance                       //ambil data api dari bank (data balance nanti di cocokin masih cukup ga isinya)
  

  const [topup, setTopup] = useState();

    const navigate = useNavigate();
  
    const addRegis = e => {

          if (bankbalance < topup) {
            alert("not enough credit") 
          }else{




            
            e.preventDefault();
            // ngebuat history topup
            axios.post('http://localhost:8080/loops/api/history/history', {
              historyName: historyName,
              historyCompany: bankName,
              historyReference: historyRef,
              historyDescription: historyDescription,
              historyBills: topup
            })
            .then(function (response) {
              console.log(response);
              
              
              navigate("/transaction")
              
            })
            .catch(function (error) {
              console.log(error);
            });
            


            const currentbalance = localStorage.getItem("userBalance")
            const addBalance = JSON.parse(currentbalance) + JSON.parse(topup)
            e.preventDefault();
            // update userbalance yang sudah di topup
            axios.put(`http://localhost:8080/loops/api/user/user/${localId}`, {

                  userName: JSON.stringify(user.map((item => (item.userName) ))),
                  userEmail: JSON.stringify(user.map((item => (item.userEmail) ))),
                  userPassword: JSON.stringify(user.map((item => (item.userPassword) ))),
                  userPhoneNum: JSON.stringify(user.map((item => (item.userPhoneNum) ))),
                  userGender: JSON.stringify(user.map((item => (item.userGender) ))),
                  userAddress: localStorage.getItem("address"),
                  userPovince: localStorage.getItem("province"),
                  userCity: localStorage.getItem("city"),
                  userCountry: localStorage.getItem("country"),
                  userPostCode: localStorage.getItem("postcode"),
                  userBalance: addBalance,

                })
                .then(function (response) {
                  console.log(response);
                  // localStorage.setItem("user", userName)
                  // localStorage.setItem("userEmail", userEmail)
                  swal("user data updated")
                  window.location.href = "/home"

                })
                .catch(function (error) {
                  console.log(error);
                });


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
            
            {user.map((item => (
            <form>
              <h3 className="font-[poppins]">Metode Topup {item.userAddress} </h3>
              <br />

              <div className="mb-3">
    
                <Input placeholder="Input Topup Nominal" 
                        onChange={e => setTopup(e.target.value)}
                />

              </div>

              <div className="d-grid">
                <button
                  // type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={addRegis}
                >
                  Top Up
                </button>
              </div>
              
            </form>
            ) ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;