import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Card } from "../../components/Card";
import { BorrrowData, Data, ProfileData, SuppliesData } from "../../Data";

function Dashboard() {
  const [category, setCategory] = useState("Supplies");
  return (
    <div>
      <Navbar />
      <div className="p-8 px-28 ">
        <p className="text-2xl font-bold">Hey Kaushik</p>
        <div className="mt-10">
          <p className="font-semibold text-lg">Your Supplies</p>
          <div className="flex mt-4 w-[200px] justify-between">
            <div className="space-y-2">
              <p>Balance</p>
              <p>APY</p>
              <p>Collateral</p>
            </div>
            <div className="space-y-2">
              <p>$10,000.00</p>
              <p>0.40%</p>
              <p>$10,000.00</p>
            </div>
          </div>
        </div>
        {category === "Supplies" ? (
          <div className="flex mt-10">
            {Data.map((item) => {
              return (
                <Card
                  image={item.image}
                  chainName={item.chainName}
                  value={item.value}
                  percentage={item.percentage}
                  action={item.action}
                  amountValue="2,000"
                  amountDollar="$ 2.00K"
                />
              );
            })}
          </div>
        ) : (
          <div className="flex mt-10">
            {ProfileData.map((item) => {
              return (
                <Card
                  image={item.image}
                  chainName={item.chainName}
                  value={item.value}
                  percentage={item.percentage}
                  action={item.action}
                  amountValue="2,000"
                  amountDollar="$ 2.00K"
                />
              );
            })}
          </div>
        )}
        <div className="bg-[#F2EBE6] flex rounded-xl w-[200px] h-[40px] mt-[40px] cursor-pointer mb-[40px] ">
          <p
            onClick={() => setCategory("Supplies")}
            className={`flex items-center font-semibold justify-center w-[100px] rounded-xl ${
              category === "Supplies" && "bg-black text-white"
            }`}
          >
            Supplies
          </p>
          <p
            onClick={() => setCategory("Borrows")}
            className={`flex items-center font-semibold justify-center w-[100px] rounded-xl ${
              category === "Borrows" && "bg-black text-white"
            }`}
          >
            Borrows
          </p>
        </div>
        {category === "Supplies" ? (
          <div className="grid grid-cols-3 w-full ">
            {SuppliesData.map((item) => {
              return (
                <Card
                  image={item.image}
                  chainName={item.chainName}
                  value={item.value}
                  percentage={item.percentage}
                  action={item.action}
                  amountValue="2,000"
                  amountDollar="$ 2.00K"
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3 w-full ">
            {BorrrowData.map((item) => {
              return (
                <Card
                  image={item.image}
                  chainName={item.chainName}
                  value={item.value}
                  percentage={item.percentage}
                  action={item.action}
                  amountValue="2,000"
                  amountDollar="$ 2.00K"
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
