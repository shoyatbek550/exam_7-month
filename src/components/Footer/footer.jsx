import React from "react";
import "./footer.scss";
import { Inst, Logo } from "../icons";
function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="footerLogo">
          <Logo />
        </div>
        <div className="allRights">
          <span>© 2023 EATLY All Rights Reserved.</span>
          <Inst />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
