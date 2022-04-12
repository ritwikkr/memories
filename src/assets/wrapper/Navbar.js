import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  margin: 20px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 0 10px;
  .row {
    .heading {
      > h2 {
        text-transform: uppercase;
      }
    }
    .body {
      width: 25%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .initials {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(100, 55, 180);
        color: white;
      }
      > button {
        border-radius: 5px;
        border: none;
        background-color: rgb(239, 26, 86);
        width: 100px;
        color: white;
        height: 30px;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
