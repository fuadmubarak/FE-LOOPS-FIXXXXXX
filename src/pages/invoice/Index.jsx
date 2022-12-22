import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api2 from "../../services/api2"

const Invoice = () => {

  const [product, setProducts] = useState({});
  const param = useParams();

  const navigate = useNavigate();

  const fetchProduct = async  (id) => {

    const local = localStorage.getItem("firstname")

    try {
      const url = `/history/${id}`;
      const response = await api2.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);

  return (
    <>
      <div className="container-lg py-10 h-screen bg-utama px-2 font-[poppins]">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="border rounded-lg border-dashed border-kedua shadow-lg shadow-black py-5 border-3 bg-white ring-2 ring-white shadow-lg">
                <div className="p-3">
                  <h2 className="text-kedua">{product.historyDescription}</h2>
                  <div className="flex flex-row items-end">
                    {" "}
                    <span className="text-black text-3xl font-bold">
                    {product.historyBills}
                    </span>{" "}
                    <span className="mt-2 text-gray font-bolder">.00 IDR</span>{" "}
                  </div>
                </div>
                <div className="flex w-full mt-3 mb-3">
                  {" "}
                  <span className="border border-dashed w-full border-kedua"></span>{" "}
                </div>
                <div className="p-3 space-y-5">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Company</span>{" "}
                    <span className="text-black text-lg font-bold">{product.historyCompany}</span>{" "}
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Order #</span>{" "}
                    <span className="text-black text-lg font-bold">
                      {product.historyId}
                    </span>{" "}
                  </div>
                  {/* <div className='flex flex-col'> <span className='text-gray'>Service</span> <span className='text-black text-lg font-bold'>New Document</span> </div> */}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Date #</span>{" "}
                    <span className="text-black text-lg font-bold">
                    {product.historyCreated}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
