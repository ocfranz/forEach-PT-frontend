import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TOGGLE_MODAL_ADD_TRIP } from "../../actions/types";
import { HomeWrapper, HomeHeading, HomeData } from "./styles";
import SimpleGrid from "../../components/SimpleGrid";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Header from "../../modules/Header";
import ModalAddTrip from "../../modules/ModalAddTrip";
import ModalAddEmployee from "../../modules/ModalAddEmployee";
import UserList from "../../modules/UserList";

const Home = (props) => {
  const dispatch = useDispatch();
  const { visibleModalAddTrip, visibleModalAddEmployee } = useSelector(
    (state) => state.uiReducer
  );

  return (
    <>
      <Header />
      <HomeWrapper>
        <SimpleGrid>
          <div>
            <HomeHeading>
              <Heading children="Bienvenido de nuevo, Admin" />
              <div>
                <Button
                  children="Agregar nuevo viaje"
                  handleOnClick={() => {
                    dispatch({ type: TOGGLE_MODAL_ADD_TRIP, payload: true });
                  }}
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
                <div className="summarize-data-wrapper">
                  <UserList />
                </div>
              </div>
            </HomeData>
          </div>
        </SimpleGrid>
      </HomeWrapper>
      <ModalAddTrip visible={visibleModalAddTrip} />
      <ModalAddEmployee visible={visibleModalAddEmployee} />
    </>
  );
};

export default Home;
