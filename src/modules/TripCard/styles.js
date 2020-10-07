import styled from "styled-components";
const CardWrapper = styled.div`
  display: flex;
  margin: 0px 10px 15px 0px;
  border-radius: 5px;
  padding: 15px 0px;
  background-color: #f5f6f9;
`;
const CardIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  div {
    display: flex;
    width: 45px;
    height: 45px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
  }
`;
const CardDetails = styled.div`
  width: 40%;
`;
const DetailItem = styled.div`
  span {
    display: block;
    font-size: 13px;
    opacity: 0.6;
  }
  strong {
    font-size: 17px;
  }
  .date {
    font-size: 14px;
  }
  .big {
    font-size: 20px;
  }
`;
const CardNumeric = styled.div`
  width: 20%;
`;

const CardStats = styled.div`
  width: 30%;
`;
export {
  CardWrapper,
  CardIcon,
  CardDetails,
  DetailItem,
  CardNumeric,
  CardStats,
};
