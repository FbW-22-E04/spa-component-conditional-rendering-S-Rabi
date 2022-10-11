import React from "react";
import ReactDOM from "react-dom/client";

const Alert = () => {
  const colorClasses = {
    color: "yellow",
    text4Red: "OMG! Something really bad has happened!",
    text4Orange: "Well, it is not that bad after all!",
  };
  //your component here
  if (colorClasses.color === "red")
    return (
      <div className="alert alert-danger" role="alert">
        <p>{colorClasses.text4Red}</p>
      </div>
    );
  else if (colorClasses.color === "yellow")
    return (
      <div className="alert alert-warning" role="alert">
        <p>{colorClasses.text4Orange}</p>
      </div>
    );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
// ReactDOM.render(<Alert />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Alert />);
