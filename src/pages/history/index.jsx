import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardHistory from "../../components/card-history";
import Navigation from "../../components/header/Navigation";
import api2 from "../../services/api2";

const History = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    
    const local = localStorage.getItem("userEmail")

    try {
      const url = `/history/find/${local}`;
      const response = await api2.get(url);
      const payload = [...response.data]; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container-lg">
        <Navigation></Navigation>
        <div className="md:pt-20"></div>

        {products.map(
          (
            item //tanpa return gunakan kurung biasa
          ) => (

        <CardHistory 
        
        firstName={item.historyCompany} 
        bills={item.historyBills} 
        merch={item.historyCreated} 
        onClick={item.historyId}

        />
          )
        )}


      </div>
    </>
  );
};

export default History;
