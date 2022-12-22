import React from "react";
import Navigation from "../../components/header/Navigation";
import hero3 from "./../../assets/logo/holiday.png";

const Details = () => {
  return (
    <>
      <div className="container-lg mt-24">
        <Navigation />
        <h1 className="text-center text-3xl font-bold font-[poppins]">
          Bayar Pakai Kartu di LoopsApp Kartu BRI <br /> Mastercard Untung s/d
          Rp110Rb
        </h1>
        <img src={hero3} class="img-fluid mx-auto mt-4 w-auto" alt="..." />

        <h1 className="mt-5 font-bold">Syarat dan Ketentuan</h1>
        <div className="container mt-2">
          <p className="col-md-8">
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente,
          </p>
          <p className="col-md-8">
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, in
            quae dolor alias asperiores a architecto recusandae libero ullam
            minima.
          </p>
          <p className="col-md-8">
            3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            sapiente inventore amet. In mollitia aperiam sit nostrum facere
            ullam illo!
          </p>
          <p className="col-md-8">
            4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            sapiente inventore amet. In mollitia aperiam sit nostrum facere
            ullam illo!
          </p>
          <p className="col-md-8">
            5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem adipisci temporibus fuga corporis, aut aliquid.
          </p>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Reedem Code
          </button>
        </div>
      </div>

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
    </>
  );
};

export default Details;
