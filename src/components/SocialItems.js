import React from "react";

const SocialItems = (props) => {
  return (
    <div>
      <li className="list-group-item">
        <img src={props.img} />
        <input type="checkbox" id="vehicle1" />
        <label>{props.media}</label>
      </li>
    </div>
  );
};

export default SocialItems;
