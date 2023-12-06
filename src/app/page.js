"use client";
import Attributes from "../components/attributes";
import AriDetails from "../components/ariDetails";
import BarItem from "../components/barItem";
import Navbar from "../components/navbar";
import Description from "../components/description";
import Adress from "../components/adress";
import { useState } from "react";

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  return (
    <>
      <Navbar />
    <div className='flex flex-row'
    >
      
      <div
      style={{
        width:'80%'

      }}
      >
      <div
        className="flex flex-row pt-10 pl-10 justify-start"
        style={{
          borderBottom: "2px solid #4f7e7d",
          color: "#82a4a4",
          alignItems: "flex-end",
        }}
      >
        <BarItem
          name="Attributes"
          activeTabIndex={activeTabIndex}
          itemIndex={1}
          setItemActiveTabIndex={setActiveTabIndex}
        />
        <BarItem
          name="ARI Details"
          activeTabIndex={activeTabIndex}
          itemIndex={2}
          setItemActiveTabIndex={setActiveTabIndex}
        />
        <BarItem
          name="Address Details"
          activeTabIndex={activeTabIndex}
          itemIndex={3}
          setItemActiveTabIndex={setActiveTabIndex}
        />

        <BarItem
          name="Description"
          activeTabIndex={activeTabIndex}
          itemIndex={4}
          setItemActiveTabIndex={setActiveTabIndex}
        />
      </div>

      {activeTabIndex==1?<Attributes />
      :activeTabIndex==2?<AriDetails />
      :activeTabIndex==3?<Adress />
      :activeTabIndex==4?<Description />
      :null}
      </div>
    </div>






      
    </>
  );
}
