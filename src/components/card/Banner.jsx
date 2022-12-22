import React from "react";
import Promo from "../../assets/3.png";
import card from "../../assets/logo/card.png";
import card1 from "../../assets/logo/card2.png";
import card2 from "../../assets/logo/card3.png";

const Banner = () => {
  return (
    <>
      <div classNameName="container">
        <div className="row">
          <h5 className="mt-5 text-center fw-bold">Promo Sedang Berlangsung</h5>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 ml-20 w-4/5">
              <a href="#">
                <img className="rounded-t-lg" src={card} alt="" />
              </a>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="/details"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 ml-10 w-4/5">
              <a href="#">
                <img className="rounded-t-lg" src={card1} alt="" />
              </a>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 w-4/5">
              <a href="#">
                <img className="rounded-t-lg" src={card2} alt="" />
              </a>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
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
    </>
  );
};

export default Banner;
