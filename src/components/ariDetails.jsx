import React from 'react'
import CheckBox from "./checkBox";
import InputField2 from './inputField2';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from "react";

const AriDetails = () => {


  const [data, setData] = useState()
  const [id, setId] = useState()
  

  useEffect(() => {
    const fetchData = async () => {
      const value = collection(db, "ARIdetails");
      const res = await getDocs(value);
      
      if (!res.empty) {
        const firstDocData = res.docs[0].data();
        setId(res.docs[0].id)
        setData(firstDocData);
        console.log(firstDocData)
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
          ARI Deluxe Room
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8 pl-10 mt-20">

        <CheckBox data_name='availability' collection_name='ARIdetails' docId={id} name="Availability" value={data?.availability ?? false} />
        <CheckBox data_name='rates' collection_name='ARIdetails' docId={id} name="Rates" value={data?.rates ?? false} />
        <CheckBox data_name='inventory' collection_name='ARIdetails' docId={id} name="Inventory" value={data?.inventory ?? false} />
        <CheckBox data_name='promotion' collection_name='ARIdetails' docId={id} name="Promotion" value={data?.promotion ?? false} />
        <CheckBox data_name='transaction' collection_name='ARIdetails' docId={id} name="Transaction" value={data?.transaction ?? false} />
        <CheckBox data_name='hotel_ari_listing' collection_name='ARIdetails' docId={id} name="Hotel ARI listing" value={data?.hotel_ari_listing ?? false} />
        <CheckBox data_name='hotel_website_listing' collection_name='ARIdetails' docId={id} name="Hotel website listing" value={data?.hotel_website_listing ?? false} />
        <CheckBox data_name='hotel_authorization' collection_name='ARIdetails' docId={id} name="Hotel authorization" value={data?.hotel_authorization ?? false} />
        <CheckBox data_name='hotel_availability' collection_name='ARIdetails' docId={id} name="Hotel availability" value={data?.hotel_availability ?? false} />
        <CheckBox data_name='postpaid_payment' collection_name='ARIdetails' docId={id} name="Postpaid payment" value={data?.postpaid_payment ?? false} />
        <CheckBox data_name='prepaid_payment' collection_name='ARIdetails' docId={id} name="Prepaid payment" value={data?.prepaid_payment ?? false} />
        {console.log(data?.transaction)}
        <CheckBox data_name='transaction' collection_name='ARIdetails' docId={id} name="Transaction" value={data?.transaction} />



      </div>

        <InputField2
          title="Hotel star rating"
          inputValue={data?.hotel_star_rating ?? null}
          name="hotel_star_rating"
          docId={id}
          collectionName="ARIdetails"
        />
        <InputField2
          title="Hotel starting price"
          inputValue={data?.hotel_starting_price ?? null}
          name="hotel_starting_price"
          docId={id}
          collectionName="ARIdetails"
        />
        <InputField2  
          title="Hotel status"
          inputValue={data?.hotel_status ?? null}
          name="hotel_status"
          docId={id}
          collectionName="ARIdetails"
        />
        <InputField2
          title="Property type"
          inputValue={data?.property_type ?? null}
          name="property_type"
          docId={id}
          collectionName="ARIdetails"
        />
        <InputField2
          title="Hotel authorization"
          inputValue={data?.hotel_authorization ?? null}
          name="hotel_authorization"
          docId={id}
          collectionName="ARIdetails"
        />
    </div>
  );
}

export default AriDetails