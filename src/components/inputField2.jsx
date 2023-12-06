import React, { useState,useEffect } from "react";
import { collection, getDocs, doc , updateDoc} from "firebase/firestore";
import { db } from "../../firebase";

const InputField2 = ({ placeholderValue, setInputValue, inputValue, name,collectionName,docId,title }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [valuestate, setValuestate] = useState(inputValue);
  


  let previousValueBackup = inputValue

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setValuestate(previousValueBackup)
    setIsEditing(false);
  };

  const handleUpdateClick =async () => {

      try{
        const ref = doc(db,collectionName,docId)
        const updateObject = { [name]: valuestate };
        await updateDoc(ref, updateObject);
        previousValueBackup = valuestate
        setIsEditing(false)
      }catch(err){
        console.log(err)
      }

  };

 const handleDeleteClick = async () => {
  try {    
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef)
    alert('Document deleted');
  } catch (error) {
    console.error(error);
  }
};



  const handleCreateClick = async () => {
  try {
    

    const docRef = await addDoc(collection(db, collectionName), {
      rating: valuestate, 
    });

    alert('Document created with ID: ' + docRef.id);
  } catch (error) {
    console.error(error);
  }
  
};

  
   useEffect(() => {
  setValuestate(inputValue)
  }, [inputValue]); 






  return (
    <div className="flex items-center justify-start ml-10 mt-5">
      <p style={{ color: "#275b59", fontWeight: 400, width: "180px" }}>
        {title}{" "}
      </p>

      {isEditing ? (
        <div className="flex items-center">
          <div
            className="border-2 rounded-xl flex ml-3"
            style={{
              width: "500px",
              height: "70px",
            }}
          >
            <input
              style={{
                boxSizing: "border-box",
                outline: "none",
                color: "black",
              }}
              className="w-96"
              placeholder={placeholderValue}
              value={valuestate}
              name
              onChange={(e) => setValuestate(e.target.value)}
            />
          </div>
          <button
            className="ml-2 color-black pl-1 pr-1"
            style={{ backgroundColor: "rgb(255 142 149)" }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="ml-2 color-black pl-1 pr-1"
            style={{ backgroundColor: "rgb(0 139 134)" }}
            onClick={handleUpdateClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="border-2 rounded-xl flex ml-3">
          <input
            className="w-96"
            placeholder={placeholderValue}
            value={valuestate}
            name
            disabled
            style={{
              width: "500px",
              height: "70px",
               color: "black",
            }}
          />
        </div>
      )}

      {!isEditing && (
        <p
          className="ml-5"
          style={{ color: "#275b59", fontWeight: 400, cursor: "pointer" }}
          onClick={handleEditClick}
        >
          Edit
        </p>
      )}
    </div>
  );
};

export default InputField2;
