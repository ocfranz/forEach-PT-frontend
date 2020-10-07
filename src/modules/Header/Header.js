import React from "react";
import { HeaderStyled, Brand, HeaderWrapper, HeaderNav } from "./style";

import SimpleGrid from "../../components/SimpleGrid";

const Header = (props) => {
  return (
    <HeaderStyled>
      <SimpleGrid>
        <HeaderWrapper>
          <Brand>Huella de Carbono - Tracker</Brand>
          <HeaderNav>
            <ul>
              <li>
                <a href="/employee">Ver Trabajadores</a>
              </li>
            </ul>
          </HeaderNav>
        </HeaderWrapper>
      </SimpleGrid>
    </HeaderStyled>
  );
};

export default Header;
