import styled from "styled-components";

const HomeWrapper = styled.div`
  padding-top: 10px;
`;

const HomeHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeData = styled.div`
  display: flex;
  .list-trips {
    width: 70%;
    &:first-child {
      margin: 0px 15px 0px 0px;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 10px 10px;
    }
  }
  .summarize-data {
    width: 30%;
    .summarize-data-wrapper {
      border-radius: 10px;
      padding: 10px;
      background-color: #ffffff;
    }
  }
`;
export { HomeWrapper, HomeHeading, HomeData };
