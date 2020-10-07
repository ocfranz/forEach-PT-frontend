import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { fetchTrips } from "../../services/trip.services";
import { TOGGLE_MODAL_ADD_TRIP } from "../../actions/types";
import { HomeWrapper, HomeHeading, HomeData } from "./styles";
import SimpleGrid from "../../components/SimpleGrid";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Header from "../../modules/Header";
import ModalAddTrip from "../../modules/ModalAddTrip";
import ModalAddEmployee from "../../modules/ModalAddEmployee";
import UserList from "../../modules/UserList";
import TripCard from "../../modules/TripCard";

const Home = (props) => {
  const dispatch = useDispatch();
  const { visibleModalAddTrip, visibleModalAddEmployee } = useSelector(
    (state) => state.uiReducer
  );
  const { data, isLoading, error } = useQuery("trips", fetchTrips);

  const drawTrips = (data) => {
    const temp = [];
    data.map((item) => {
      temp.push(<TripCard key={item._id} trip={item} />);
    });
    return temp;
  };

  return (
    <>
      <Header />
      <HomeWrapper>
        <SimpleGrid>
          <div>
            <HomeHeading>
              <Heading children="Bienvenido de nuevo" />
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
                  <div>{!isLoading && !error && drawTrips(data)}</div>
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
