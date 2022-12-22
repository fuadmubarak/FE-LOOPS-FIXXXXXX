import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import api4 from "../../services/api4";
import api from "../../services/api";
import Navigation from "../header/Navigation";
import swal from "sweetalert";


function PaymentBill() {

  const navigate = useNavigate();
  const localId = localStorage.getItem("Id")

  const [product, setProducts] = useState([]);
  // const param = useParams();

  const fetchProduct = async () => {

    const local = localStorage.getItem("nopel")

    try {
      const url = `/merch/find/${local}`;
      const response = await api4.get(url);
      const payload = [ ...response.data ]; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);


  const [user, setUser] = useState([]);
  
  // ambil data api user
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

  useEffect(() => {
    fetchUser();
  }, []);


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


  const historyName = localStorage.getItem("userName")          //ambil data nama user
  const merchName = product.map((item => (item.merchName)))     //ambil data nama bank
  
  localStorage.setItem("merchName", merchName);
  const historyCompany = localStorage.getItem("merchName");
  const historyRef = localStorage.getItem("userEmail")          //ambil data referensi (email dari user)
  const historyDescription = localStorage.getItem("method")     //ambil data metode history (kalo topup ya topup kalo payment ya payment)
  const bankbalance = product.bankBalance                       //ambil data api dari bank (data balance nanti di cocokin masih cukup ga isinya)
  

  const userbalance = localStorage.getItem("userBalance")

  const bill = product.map((item => (item.merchBill)))
  localStorage.setItem("merchBill", bill);
  const historyBills = localStorage.getItem("merchBill");

  console.log(userbalance);
  console.log(bill);

  const balanceafter = userbalance - bill

  console.log(balanceafter);


  const addRegis = e => {

    if (userbalance < bill) {
      alert("not enough credit") 
    }else{


      e.preventDefault();
      // ngebuat history topup
      axios.post('http://localhost:8080/loops/api/history/history', {
        historyName: historyName,
        historyCompany: historyCompany,
        historyReference: historyRef,
        historyDescription: historyDescription,
        historyBills: historyBills
      })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });
      


      
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
            userBalance: balanceafter,

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
      <div className="Payment mt-5">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <div></div>
              <br />
              <div className="grid grid-cols-1 justify-items-center w-full pb-4">
                <div className=" col-span-1">
                  <img
                    src={require("../bill/logobpjs.png")}
                    className=" h-36"
                  />
                </div>
              </div>

              <div className="mb-3">

                {product.map((item => (
                  <div className="w-full ring-2 ring-kedua rounded-lg bg-white text-center text-lg font-serif font-medium">
                  {/* Fuad Mubarok */}
                  
                  {item.merchCostumerName}

                  </div>

                

                )))}
                
              </div>

              <div className="mb-3">

                {product.map((item => (
                <div className="w-full ring-2 ring-kedua rounded-lg bg-white text-center text-kedua text-lg">
                  {/* RP. 50.000 */}

                  {item.merchBill}

                </div>

              )))}
              </div>









              <div className="d-grid">
                <button
                  // type="submit"
                  className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
                  onClick={addRegis}
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentBill;
