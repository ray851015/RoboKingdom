import React from "react";

const Card = (props) => {
  //   const { name, email, id } = props; //也可以寫const Card = ({name,email,id})=>{return ()}
  return (
    <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.id}?200*200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
