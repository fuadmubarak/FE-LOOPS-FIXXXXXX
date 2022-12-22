import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Carousel,
  Card,
  Figure,
} from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import user from "./../../assets/userpic.svg";
import hero1 from "./../../assets/11.png";
import hero2 from "./../../assets/10.png";
import hero3 from "./../../assets/9.png";
import Promo from "../../assets/icon1.png";
import Pay from "../../assets/icon2.png";
import History from "../../assets/icon3.png";
import Working from "../../assets/workingspace.png";
import Keamanan from "./../../assets/kemanan.png";
import Sistem from "./../../assets/layanan.png";
import Layanan from "./../../assets/sistem.png";
import User1 from "./../../assets/userpic.svg";
import Hero from "../../components/hero/Hero";
import listrik from "./../../assets/logo/listrik.png";
import bpjs from "./../../assets/logo/bpjs1.png";
import pdam from "./../../assets/logo/pdam1.png";
import bni from "./../../assets/logo/bni1.png";
import bca from "./../../assets/logo/bca1.png";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home")
    }
  }, [auth])

  return (
    <div className="container-lg">
      <Navbar
        bg="light"
        variant="light"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar fixed-top container-lg"
      >
        <div className="container">
          <img className="w-20" src={logo} alt="logo" />
          <Nav className="mr-5 font-[poppins]">
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link href="/login">Payment</Nav.Link>
            <Nav.Link href="/login">Promo</Nav.Link>
            <Nav.Link href="/login">History</Nav.Link>
            <a
              href="/login"
              className="inline-flex items-center mr-1 px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sign In
            </a>

            <a
              href="/register"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sign up
            </a>
          </Nav>
        </div>
      </Navbar>
      <Hero></Hero>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="w-auto" src={Working} alt="" />
          </div>
          <div className="col-md-5">
            <p className="text-3xl text-gray-600 font-bold font-[poppins] mt-2">
              Tentang Kami
            </p>
            <p className="ml-5 text-gray-500 text-2x1 text font-[poppins] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              accusamus esse aliquid impedit perspiciatis. Reiciendis quas
              dolores iste qui praesentium similique nulla quam, eaque sint
              culpa eius tempore facilis at officia perferendis harum minus id
              mollitia doloribus aliquid vitae odio ad quasi? Soluta, nostrum.
              Impedit nobis adipisci dolore porro quaerat. Modi aliquid alias
              vero nobis odio accusantium ipsum harum. Porro similique provident
              dicta at aperiam beatae ducimus praesentium vel culpa, quo
              delectus nulla ipsum pariatur iure laborum vitae quod voluptas.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 justify-content-center">
        <div className="row">
          <h1 className="text-4xl text-center uppercase font-[poppins]">
            Transaksi <span className="font-bold">Aman</span> dan{" "}
            <span className="font-bold">Nyaman</span> <br /> dengan LoopsApp
          </h1>
        </div>
      </div>

      <section>
        <div className="row mt-5 ">
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Sistem} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Layanan Terlengkap
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Layanan Terlengkap kemudahan untuk transaksi, kirim uang, dan
              pembayaran tagihan pada merchant
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Keamanan} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Keamanan Terjamin
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Keamanan terjamin Loops menjamin 100% kemanan transaksi digital
              dengan garansi uang kembali
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Layanan} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Sistem Tercanggih
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Sistem Tercanggih Loops dibangun dengan teknologi keamanan kelas
              dunia dengan sistem jaringan yang diawasi 24 jam
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center text-3xl mt-5 font-[poppins]">
          Merchant Kami
        </h1>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4 justify-justify-content-center">
            <img className="#" src={listrik} alt="" />
          </div>
          <div className="col-md-4 mt-3">
            <img className="#" src={bpjs} alt="" />
          </div>
          <div className="col-md-4">
            <img className="w-60 mt-3" src={pdam} alt="" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="#" src={bni} alt="" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="#" src={bca} alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h5 className="text-center text-4xl font-[poppins]">
              Testimonial Teman Loops
            </h5>
            <h5 className="text-center mt-5 text-2x1 text-slate-400 font-[poppins]">
              "Fitur yang sangat baik dan canggil , proses pengiriman PULSA{" "}
              <br /> dan membayar TAGIHAN apapun menjadi lebih simple"
            </h5>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-6 d-flex justify-content-center">
            <Figure>
              <Figure.Image
                className="mr-2 mt-4 opacity-50"
                width={50}
                height={50}
                alt="171x180"
                src={User1}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={User1}
              />
              <Figure.Caption>
                <h5 className="text-center font-bold text-sm font-[poppins]">
                  Rizqinurdin
                </h5>
                <p className="text-center text-xs font-[poppins]">Dokter</p>
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                className="ml-2 mt-4 opacity-50"
                width={50}
                height={50}
                alt="171x180"
                src={User1}
              />
            </Figure>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pt-1 pb-1 my-3">
              <p className="text-green-500 fw-bold">
                {" "}
                2022 Copyright LoopsApps. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
