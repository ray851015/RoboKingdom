import React from "react";

const Card = ({id,name,email}) => {
  //   const { name, email, id } = props; //也可以寫const Card = ({name,email,id})=>{return ()}
  return (
    <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
