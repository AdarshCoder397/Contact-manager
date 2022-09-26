import React from "react";
import{ Link }from 'react-router-dom';
import user from "../img/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contact || "";
  const removeContact = (_) => props.deleteContact(props.contact);
  const idfunc = (_) => props.showDetail(props.contact);
  const tempId = idfunc()
  return (
    <div className="ui item header">
      <img
        className="ui avatar image"
        src={user}  
        style={{ marginTop: "10px" }}
        alt="user"
      />
      <Link to={`/contacts/${tempId}`}>
      <div className="content" style={{ margin: "8px" }}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      </Link>
      <i
        className="trash alternate outline icon right floated 10px"
        style={{ color: "red", cursor: "pointer", marginTop: "17px" }}
        onClick={removeContact}
      ></i>
    </div>
  );
};

export default ContactCard;
