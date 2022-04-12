import React from "react";
import Wrapper from "../assets/wrapper/CreateMemories";

function CreateMemories() {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-header">
          <h3>Creating a Memory</h3>
        </div>
        <div className="card-body">
          <form>
            <input type="text" placeholder="Title" />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="text" placeholder="Tags" />

            <div className="btns">
              <button>Submit</button>
              <button>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default CreateMemories;
