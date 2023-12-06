import React from 'react'
import CheckBox from "./checkBox";
import InputField2 from './inputField2';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from "react";

const Adress = () => {
      const [data, setData] = useState();
      const [id, setId] = useState();
      useEffect(() => {
        const fetchData = async () => {
          const value = collection(db, "Adress");
          const res = await getDocs(value);

          if (!res.empty) {
            const firstDocData = res.docs[0].data();
            setId(res.docs[0].id);
            setData(firstDocData);
          }
        };

        fetchData();
      }, []); 



  return (
    <div className="mt-5">
      <p
        className="ml-7 text-black pt-5 pb-5 font-semibold"
        style={{ color: "#275b59" }}
      >
        Deluxe Room
      </p>

      <InputField2
        title="Adress"
        inputValue={data?.adress ?? null}
        name="adress"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Landmark"
        inputValue={data?.landmark ?? null}
        name="landmark"
        docId={id}
        collectionName="Adress"
      />

      <InputField2
        title="City"
        inputValue={data?.city ?? null}
        name="city"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="State"
        inputValue={data?.state ?? null}
        name="state"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Pincode"
        inputValue={data?.pincode ?? null}
        name="pincode"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Country"
        inputValue={data?.country ?? null}
        name="country"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Country_code"
        inputValue={data?.country_code ?? null}
        name="country_code"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Lititude"
        inputValue={data?.lititude ?? null}
        name="lititude"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Longitude"
        inputValue={data?.longitude ?? null}
        name="longitude"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Email"
        inputValue={data?.email ?? null}
        name="email"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Contact number"
        inputValue={data?.contact_number ?? null}
        name="contact_number"
        docId={id}
        collectionName="Adress"
      />
      <InputField2
        title="Map URL"
        inputValue={data?.map_url ?? null}
        name="map_url"
        docId={id}
        collectionName="Adress"
      />
      
      <InputField2
        title="Hotel authorization"
        inputValue={data?.hotel_authorization ?? null}
        name="hotel_authorization"
        docId={id}
        collectionName="Adress"
      />
    </div>
  );
}

export default Adress