import React, {useEffect, useState, Ref, useRef} from "react";
import { Link  } from "react-router-dom";
import "../../scss/home/values.scss";
import Title from "../title/title";

const Values = ({ items }) => {
  const [showMore, setShowMore] = useState(items.map((_,index) => index === 0));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const textRefs = useRef(items.map(() => React.createRef()));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  
    return () => {
      window.addEventListener('resize', handleResize);
    };

  }, [])

  const handleShowMoreClick = (index) => {
    setShowMore(prevStates => {
      const newShowMoreStates = [...prevStates];
      newShowMoreStates[index] = !newShowMoreStates[index];
      return newShowMoreStates;
    });

    if(textRefs.current[index].current){
      textRefs.current[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };



  return (
    <div className="values" id="principals">
      <div className="container">
        <Title color={windowWidth <= 992 ? "white" : "black"} >Principes</Title>
          {windowWidth <= 992 && (
                  items.map((item, index) => (
                    <div className="value-box" key={index} >
                      <div className="value-list">
                        <div className="value-item" >
                        <h3 onClick={() => handleShowMoreClick(index)}>
                          {showMore[index] ? null : <span className="closed-indicator">"</span>}
                          <span>{item.title}</span>
                        </h3>
                          <p className={`text ${showMore[index] ? 'text-slide-in' : 'text'}`} ref={textRefs.current[index]}>
                            {showMore[index] ? item.text : `${item.text.substring(0, 0)}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
          )}
          {windowWidth >= 992 && (
                  items.map((item, index) => (
                    <div className="value-box" key={index}>
                      <div className="value-list">
                        <div className="value-item d-flex" >
                          <h3>
                            {item.title}
                          </h3>
                            <p>
                                {item.text}
                            </p>                            
                        </div>
                      </div>
                    </div>
                  ))
          )}
      </div>
    </div>
  );
};

export default Values;
