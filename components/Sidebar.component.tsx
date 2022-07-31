import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaBars,
  FaHome,
  FaBlackTie,
  FaClipboardCheck,
  FaScroll,
} from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  function checkShow() {
    if (!show) {
      return;
    } else {
      setShow(!show);
    }
  }

  return (
    <div className="nav__fixed">
      <nav className={`menu ${show ? "open" : ""}`} id="menu">
        <div className="actionbar">
          <div>
            <button
              className="menuBtn"
              onClick={() => {
                setShow(!show);
              }}
              id="menuBtn">
              <FaBars />
            </button>
            <h3 className={`menuText ${show ? "open2" : ""}`}>Dashboard</h3>
          </div>
        </div>
        <ul className="optionsBar">
          <li className="menuItem">
            <Link href="/">
              <a
                className="menuOption"
                onClick={() => {
                  router.push("/");
                  checkShow();
                }}>
                <i>
                  <FaHome />
                </i>
                <h5 className={`menuText ${show ? "open2" : ""}`}>Home</h5>
              </a>
            </Link>
          </li>
          <li className="menuBreak">
            <hr />
          </li>
          <li className="menuItem">
            <button
              onClick={() => {
                router.push("/#about");
                checkShow();
              }}
              className="menuOption"
              id="aboutBtn">
              <i>
                <FaBlackTie />
              </i>
              <h5 className={`menuText ${show ? "open2" : ""}`}>About</h5>
            </button>
          </li>
          <li className="menuItem">
            <button
              className="menuOption"
              id="blogBtn"
              onClick={() => {
                setShow(!show);
                checkShow();
              }}>
              <i>
                <FaScroll />
              </i>
              <h5 className={`menuText ${show ? "open2" : ""}`}>Blog</h5>
            </button>
          </li>
          <li className="menuItem">
            <button
              className="menuOption"
              id="projectsBtn"
              onClick={() => {
                router.push("/#templates");
                checkShow();
              }}>
              <i>
                <FaClipboardCheck />
              </i>
              <h5 className={`menuText ${show ? "open2" : ""}`}>Projects</h5>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
