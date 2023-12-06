import React from "react";
import CheckBox2 from "./checkBox2";
import InputField from './inputField'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState,useEffect } from "react";

const Attributes = () => {
  
    const [data, setData] = useState()

    const [id, setId] = useState()
    
  useEffect(() => {
    const fetchData = async () => {
      const value = collection(db, "Attributes");
      const res = await getDocs(value);

      if (!res.empty) {
        const firstDocData = res.docs[0].data();
        setId(res.docs[0].id)
    
        console.log(firstDocData);
        setData(firstDocData);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="mt-5">
        <p
          className="ml-7 text-black pt-5 pb-5 font-semibold"
          style={{ color: "#275b59" }}
        >
          Deluxe Room
        </p>

        <div className="flex flex-row">
          <div className="ml-9 pt-7 pb-9 pl-12 pr-12 border-2 border-dashed flex flex-col items-center justify-center">
            <img src="/images/image-icon.png" alt="logo" className="w-15" />
            <p className="text-black">Add Image</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="border-2 rounded-xl h-11 flex pl-2 ml-3">
              <input
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  color: "black",
                }}
                className="w-96"
                placeholder="Image Logo URL"
                value={data?.logo_url ?? null}
              />
            </div>
            <div className="mt-3 border-2 rounded-xl h-11 flex pl-2 ml-3">
              <input
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  color: "black",
                }}
                className=""
                placeholder="Image URL"
                value={data?.image_url ?? null}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8 pl-10 mt-20">
        
        <CheckBox2 name="Air conditionerd" value={data?.air_conditionerd ?? false} />
        <CheckBox2 name="Child - Friendly" value={data?.child_friendly ?? false} />
        <CheckBox2 name="Airport shuttle" value={data?.airport_shuttle ?? false} />
        <CheckBox2 name="Affiliated golf course" value={data?.affiliated_golf_course ?? false} />
        <CheckBox2 name="Bar & Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox2 name="Loundary services" value={data?.loundry_service ?? false} />
        <CheckBox2 name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox2 name="Restaurant" value={data?.restaurant ?? false} />
        <CheckBox2 name="Room service" value={data?.room_service ?? false} />
        <CheckBox2 name="spa" value={data?.spa ?? false} />
        <CheckBox2 name="All inclusive available" value={data?.all_inclusive_available ?? false} />
        <CheckBox2 name="Beach access" value={data?.beach_access ?? false} />
        <CheckBox2 name="Business center" value={data?.business_center ?? false} />
        <CheckBox2 name="Fitness center" value={data?.fitness_center ?? false} />
        <CheckBox2 name="Free breakfast" value={data?.free_breakfast ?? false} />
        <CheckBox2 name="Swimming pool" value={data?.swimming_pool ?? false} />
        <CheckBox2 name="Pet - Allowed" value={data?.pet_allowed ?? false} />
        <CheckBox2 name="Smoke free property" value={data?.smoke_free_property?? false} />
        <CheckBox2 name="Wheel chair accessable" value={data?.wheelchair_accessable?? false} />
        <CheckBox2 name="kitchen available" value={data?.kitchen_available?? false} />
        
      </div>

     <InputField name='Parking type' placeholderValue='No payment require' inputValue={data?.parking_type ?? false}/>
     <InputField name='WI-FI type' placeholderValue='No payment require' inputValue={data?.parking_type ?? false}/>
     <InputField name='Brand Id' placeholderValue='' inputValue=''/>

    </div>
  );
};

export default Attributes;
