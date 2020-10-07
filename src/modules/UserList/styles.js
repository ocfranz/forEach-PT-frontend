import styled from "styled-components";

const ListWrapper = styled.div`
  width: 100%;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #f0f0f0;
    border-width: 0px 0px 1px 0px;
    padding-bottom: 10px;
  }
`;
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  padding: 10px;
  color: #767687;
  font-size: 16px;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
  &:before {
    content: "@";
  }
`;

export { ListWrapper, List, ListItem };
