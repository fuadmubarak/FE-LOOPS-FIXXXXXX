import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Navigation from "../../components/header/Navigation";
import { Card } from "react-bootstrap";
import Promo from "../../assets/icon1.png";
import Pay from "../../assets/icon2.png";
import History from "../../assets/icon3.png";
import Banner1 from "../../assets/1.png";
import Banner2 from "../../assets/2.png";
import Banner3 from "../../assets/3.png";
import Banner4 from "../../assets/4.png";
import Setting from "../../assets/logo/settings.png";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const contentStyle: React.CSSProperties = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};

const Home = () => {

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      Navigate("/")
    }
  }, [])

  const param = useParams();
  const Navigate = useNavigate();

  const [user, setUser] = useState({});
  // const param = useParams();

  const email = localStorage.getItem("userEmail");
console.log("email "+email);
  const fetchProduct = async () => {
    try {
      const url = `/find/${email}`;
      const response = await api.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setUser(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // const dataBalance = user.map((item => (item.balance) ))
  // const dataId = user.map((item => (item.userId) ))
  // const userName = user.map((item => (item.name) ))

  console.log(JSON.stringify(user.name));

  localStorage.setItem("Id", user.userId);
  localStorage.setItem("Name", user.name);
  localStorage.setItem("Balance", user.balance);
  localStorage.setItem("Gender", user.gender);
  localStorage.setItem("PhoneNum", user.phoneNumber);
  

  return (
    <>
      <div className="container-lg">
        <Navigation></Navigation>

        <div className="container mt-24">
          <h1 className="text-1xl font-bold font-[poppins]">
            Welcome Back {user.name}
          </h1>

          <div className="row">
            <div className="col-md-4">
              {/* {user.map((item => (
              <div className="bg-slate-100 mt-3 rounded" style={{ width: "30rem" }}>
              

                  <div className="text-2xl font-[poppins]">
                  Loops Balance
                  </div>

                  <div className="mb-2 mt-3 text-2xl">
                  Rp. {item.userBalance}
                  </div>

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => Navigate(`/topup`)}
                  >
                    Topup
                  </button>
                
              </div>
              )))} */}

              <Card className="bg-slate-100 mt-3" style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title className="text-2xl font-[poppins]">
                    Loops Balance
                  </Card.Title>

                  <Card.Subtitle className="mb-2 mt-3 text-2xl">
                    {/* $100 */}
                    Rp. {user.balance}
                  </Card.Subtitle>

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => Navigate(`/topup`)}
                  >
                    Topup
                  </button>
                </Card.Body>
              </Card>

              <div className="conpromo mt-3">
                <Carousel autoplay style={{ width: "30rem" }}>
                  <div>
                    <h3 style={contentStyle}>
                      <img src={Banner1} alt="" className="rounded-lg" />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img src={Banner2} alt="" className="rounded-lg" />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img src={Banner3} alt="" className="rounded-lg" />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img src={Banner4} alt="" className="rounded-lg" />
                    </h3>
                  </div>
                </Carousel>
              </div>
            </div>
            <br></br>
            <div className="col-md-4">
              <Card
                className="bg-slate-100 mt-5 ml-80 h-2/4"
                style={{ width: "20rem" }}
              >
                <Card className="md:w-80">
                  <Card.Header>
                    Shortcut
                    <div className="row">
                      <div className="col-md-4 flex mt-3 w-full justify-center">
                        <a href="/promo">
                          <img className="w-12 mx-2" src={Promo} alt="" />
                          <p className="text-xs mt-2 text-center">Promo</p>
                        </a>
                        <a href="/payment">
                          <img className="w-12 mx-2" src={History} alt="" />
                          <p className="text-xs mt-2 text-center">Bills</p>
                        </a>
                        <a href="/history">
                          <img className="w-12 mx-2" src={Pay} alt="" />
                          <p className="text-xs mt-2 text-center">History</p>
                        </a>
                        <a href="/setting">
                          <img className="w-12 mx-2" src={Setting} alt="" />
                          <p className="text-xs mt-2 text-center">Setting</p>
                        </a>
                      </div>
                    </div>
                    <Card.Header className="mt-3">
                      <p className="font-[poppins]">Recent Activity</p>
                      <p className="font-light text-sm font-[poppins] ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Odio eveniet mollitia provident deserunt iure
                        earum maxime. Quia quam iure culpa?
                      </p>
                      <a className="text-xs font-[poppins] " href="/history">
                        Show All
                      </a>
                    </Card.Header>
                  </Card.Header>
                </Card>
              </Card>
            </div>
          </div>
        </div>

        <footer>
          <div className="row">
            <div className="col-12 text-center pt-1 pb-1 my-3">
              <p className="text-green-500 fw-bold">
                {" "}
                2022 Copyright LoopsApps. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
