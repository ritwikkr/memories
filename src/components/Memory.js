import React from "react";
import Wrapper from "../assets/wrapper/Memory";

function Memory() {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-header">
          <div className="darkOverlay">
            <h4>JavaScript Mastery</h4>
            <p>2 hours ago</p>
          </div>
        </div>
        <div className="card-body">
          <div className="tags row">
            <p>#dubokv</p>
            <p>#study</p>
            <p>#work</p>
          </div>
          <h3>Agra</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            sequi accusamus perferendis qui totam expedita, quia nobis maiores
            dolorem amet?
          </p>
          <div className="likes">
            {/* icon */}
            <p>1 LIKE</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Memory;
