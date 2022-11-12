import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <>
      <div id="headerBox" style={{ zIndex: 100 }}>
        <img src="img/logo.png" className="headerLogo" alt="React" />

        <input
          class="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />
        <label for="menu-icon"></label>
        <nav class="nav">
          <ul class="pt-5">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">activity</a>
            </li>
            <li>
              <a href="#">join us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
