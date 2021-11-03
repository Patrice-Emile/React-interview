import React from "react";


// PROGRESS BAR COMPONENT
const ProgressBar = (props) => {

  const { pourcentage } = props;
  
// PROGRESS BAR STYLE
  const preContainerStyles = {
    width: '100%',
    margin: 0,
    padding: 0,
    textAlign: 'center'
   
  }

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    displayFlex: "flex",
    justifyContent: "start",
    margin: 0,
    padding: 0,

    
  }

  const fillerStyles = {
    height: '100%',
    margin: 0,
    padding: 0,
    width: `${pourcentage}%`,
    backgroundColor: "#8f9654",
    borderRadius: 'inherit',
    textAlign: 'center',
  }

  const labelStyles = {
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={preContainerStyles}>
      <span style={labelStyles}>{`${pourcentage}%`}</span>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
    </div>    
  </div>
  );
};

export default ProgressBar;
