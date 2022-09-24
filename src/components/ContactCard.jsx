import React from "react";
import user from "../img/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
        <img
        className="ui avatar image"
        style={{ marginTop: "14px" }}
        src={user}
        alt="user"
      />
      <div className="content" style={{marginTop:"10px"}}>
        <div className="header">{name}</div>
        <div >{email}</div>
      </div>
      <div className="ui right aligned header" >
        <i className="trash alternate outline icon" style={{color:"red",cursor:"pointer"}}>  
        </i>
      </div>
    </div>
  );
};

export default ContactCard;
