import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import userpic from "./../../assets/userpic.svg";
import api from "../../services/api";

const Navigation = () => {
  const param = useParams();
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [user, setUser] = useState({});
  // const param = useParams();
  const email = localStorage.getItem("userEmail");

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

  return (
    <>
      <div>
        <Navbar
          bg="light"
          variant="light"
          className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar container-lg"
        >
          <img className="w-20" src={logo} alt="logo" />

          <Nav className="ms-auto font-[poppins]">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
            <Nav.Link href="/promo">Promo</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="#"></Nav.Link>
            <NavDropdown title={user.name} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
              <NavDropdown.Item href="/home" onClick={logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            <img className="w-8" src={userpic} alt="user" />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
