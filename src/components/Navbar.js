import React from "react";
import Wrapper from "../assets/wrapper/Navbar";

function Navbar() {
  return (
    <Wrapper>
      <div className="row">
        <div className="heading">
          <h2>Memories</h2>
        </div>
        <div className="body">
          <span className="initials">J</span>
          <span>Ritwik Kumar</span>
          <button>Logout</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
