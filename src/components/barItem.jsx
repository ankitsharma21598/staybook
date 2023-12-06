import React from 'react'

const BarItem = ({ name, activeTabIndex,itemIndex,setItemActiveTabIndex }) => {
  return (
    <div
      style={{
        borderInline: "none",
        borderTop: "none",
        borderWidth: 7,
        borderBottomColor: activeTabIndex === itemIndex ? "#e0af31" : "transparent",
      }}
      onClick={() => setItemActiveTabIndex(itemIndex)}
      className="p-1 ml-10"
    >
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default BarItem