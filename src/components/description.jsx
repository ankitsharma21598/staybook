import React, { useState,useEffect } from "react";
import InputField2 from '../components/InputField2';
import TextArea from '../components/textArea';
import {deleteDoc, collection, getDocs, doc , updateDoc, addDoc} from "firebase/firestore";
import { db } from "../../firebase";

const Description = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

   const [data, setData] = useState()
    const [id, setId] = useState();

    
  useEffect(() => {
    const fetchData = async () => {
      const value = collection(db, "description_fields");
      const res = await getDocs(value);

      if (!res.empty) {
        const firstDocData = res.docs[0].data();
        setId(res.docs[0].id)
        setData(firstDocData);
      }
    };

    fetchData();
  }, []); 



  


  async function getAllDescription() {
    try {
      const ref = collection(db, "descriptions");
      const res = await getDocs(ref);

      const newItems = res.docs.map((doc) => {
        const docValue = doc.data();

        return (
          <div
            key={doc.id}
            className="border-2 rounded-xl p-2 flex justify-between items-center"

            style={{
              backgroundColor:'#275b59'
            }}

          >
            {docValue.content}



            <img src="/images/cross.svg" alt="delete" className="w-5"
              onClick={() => handleDelete(doc.id)}
              style={{
                
                position:'relative',
                right:'255px',
                bottom:'15px'

              }}
            />


          </div>
        );
      });
      setItems(newItems);
    } catch (err) {
      console.log(err);
    }
  }

 useEffect(() => {
    getAllDescription();
  }, []);








  



  async function handleCreate(content){

 try {

    let ref = collection(db,'descriptions')

    await addDoc(ref, { content});
    
    getAllDescription();


 } catch (err) {

   console.log(err);

 }

  }

  async function handleDelete(id){
console.log(id)
 try {


    const docRef = doc(db, 'descriptions', id);
    await deleteDoc(docRef)
    getAllDescription()


 } catch (err) {

   console.log(err);

 }

  }





  return (
    <div className="mt-5">
      <p
        className="ml-7 text-black pt-5 pb-5 font-semibold"
        style={{ color: "#275b59" }}
      >
        Deluxe Room
      </p>

      

      <TextArea 
        
        title="Hotel description"
        inputValue={data?.hotel_description ?? null}
        name="hotel_description"
        docId={id}
        collectionName="description_fields"

      />

      <div className="flex items-center ml-10 mt-5">
        <p style={{ color: "#275b59", fontWeight: 400 }}>Description List : </p>

        <div className="flex items-center">
          <div
            style={{ width: "600px", height: "220px" }}
            className="border-2 rounded-xl h-32  pl-2 ml-3 flex flex-col"
          >
            <div className="border-2 rounded-xl h-11 flex pl-2 ml-6 mr-6 mt-3 flex justify-between">
              <input
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  color: "black",
                }}
                className="w-96"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div
                className="border-2 rounded-xl p-2 flex justify-center items-center"
                style={{
                  color: "#fff",
                  backgroundColor: "#e0af31",
                  fontSize: "25px",
                }}
                onClick={() => handleCreate(inputValue)}
              >
                +
              </div>
            </div>

            <div className="itemscontainer grid grid-cols-2 gap-x-4 gap-y-4 mt-2">
              {items}
            </div>
          </div>
        </div>
      </div>

      <hr style={{ borderWidth: "2px", marginTop: "40px" }} />

      <div>
        <p
          className="ml-7 text-black pt-5 pb-5 font-semibold"
          style={{ color: "#275b59" }}
        >
          Hotel near the airport
        </p>

        <InputField2
          title="Hotel name"
          inputValue={data?.airport_hotel_name ?? null}
          name="airport_hotel_name"
          docId={id}
          collectionName="description_fields"
        />

        <p
          className="ml-7 text-black pt-5 pb-5 font-semibold"
          style={{ color: "#275b59" }}
        >
          Hotel near the bus stand
        </p>

        <InputField2
          title="Hotel name"
          inputValue={data?.bus_airport_name ?? null}
          name="bus_airport_name"
          docId={id}
          collectionName="description_fields"
        />
        <p
          className="ml-7 text-black pt-5 pb-5 font-semibold"
          style={{ color: "#275b59" }}
        >
          Hotel near the Railway station
        </p>

        <InputField2
          title="Hotel name"
          inputValue={data?.railway_airport_name ?? null}
          name="railway_airport_name"
          docId={id}
          collectionName="description_fields"
        />
      </div>
    </div>
  );
};

export default Description;
