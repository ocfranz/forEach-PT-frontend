import styled from "styled-components";

const HeaderStyled = styled.div`
  height: 70px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Brand = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const HeaderNav = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
  }
  a {
    cursor: pointer;
    &:visited {
      color: #000000;
      text-decoration: none;
    }
  }
`;

export { HeaderStyled, HeaderWrapper, Brand, HeaderNav };
