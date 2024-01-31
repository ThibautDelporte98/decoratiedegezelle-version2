import React from "react";
import "../../scss/title/title.scss";


function Title({children, color, bg}) {
  return (
      <div className="title" style={{color: color , background: bg}} >
        <h2><span className="underline-up" >{children}</span></h2>
      </div>
  );
}



export default Title;
