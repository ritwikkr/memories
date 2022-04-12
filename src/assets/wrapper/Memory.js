import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    border-radius: 5px;
    width: 20%;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
    .card-header {
      color: white;
      border: 2px solid blue;
      height: 100px;
      background-image: url(https://images.all-free-download.com/images/graphiclarge/beautiful_natural_scenery_553758.jpg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      .darkOverlay {
        border: 2px solid green;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
        padding: 10px;
      }
    }
    .card-body {
      border: 2px solid red;
      .row {
        justify-content: unset;
        > p {
          font-size: 12px;
        }
      }
      .tags {
        margin: 10px 0;
      }
    }
  }
`;

export default Wrapper;
