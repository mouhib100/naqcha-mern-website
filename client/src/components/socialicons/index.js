import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram/>
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
      </ul>
      <p>Follow us on</p>
    </div>
  );
};

export default Socialicons