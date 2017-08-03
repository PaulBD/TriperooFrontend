import React from "react";

const SocialButtons = () => {
  return (
    <ul className="list list-horizontal list-space socialButtons">
      <li>
        <a className="fa fa-facebook box-icon-normal round animate-icon-bottom-to-top"
           href="https://www.facebook.com/triperooUK" target="_blank"></a>
      </li>
      <li>
        <a className="fa fa-twitter box-icon-normal round animate-icon-bottom-to-top"
           href="https://twitter.com/triperoouk" target="_blank"></a>
      </li>
      <li>
        <a className="fa fa-instagram box-icon-normal round animate-icon-bottom-to-top"
           href="https://www.instagram.com/triperoouk/" target="_blank"></a>
      </li>
    </ul>
  );
};

export default SocialButtons;
