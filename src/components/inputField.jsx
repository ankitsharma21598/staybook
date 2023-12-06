import React from 'react'

const InputField = ({placeholderValue, setInputValue,inputValue , name}) => {
  return (

 <div className="flex items-center ml-10 mt-5">
        <p style={{ color: "#275b59", fontWeight: 400 , width:'150px'}}>{name} : </p>

        <div className="border-2 rounded-xl h-11 flex pl-2 ml-3">
          <input
            style={{
              boxSizing: "border-box",
              outline: "none",
              color: "black",
            }}
            className="w-96"
            placeholder={placeholderValue}
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            defaultChecked={false}
          />
        </div>
      </div>
  )
}

export default InputField