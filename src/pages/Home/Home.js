import React from "react";

import { HomeWrapper, HomeHeading, HomeData } from "./styles";
import SimpleGrid from "../../components/SimpleGrid";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Header from "../../modules/Header";

const Home = (props) => {
  return (
    <div>
      <Header />
      <HomeWrapper>
        <SimpleGrid>
          <div>
            <HomeHeading>
              <Heading children="Bienvenido de nuevo, Admin" />
              <div>
                <Button
                  children="Agregar nuevo viaje"
                  handleOnClick={() => {}}
                />
              </div>
            </HomeHeading>
            <HomeData>
              <div className="list-trips">
                <div>
                  <span>Viajes</span>
                </div>
              </div>
              <div className="summarize-data">
                <div>
                  <span>Resumen</span>
                </div>
              </div>
            </HomeData>
          </div>
        </SimpleGrid>
      </HomeWrapper>
    </div>
  );
};

export default Home;
