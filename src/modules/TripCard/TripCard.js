import React from "react";
import PropTypes from "prop-types";
import OnewayIcon from "./OnewayIcon";
import TwoWayIcon from "./TwoWayIcon";
import {
  CardWrapper,
  CardIcon,
  CardDetails,
  DetailItem,
  CardNumeric,
  CardStats,
} from "./styles";
const TripCard = ({ trip }) => {
  return (
    <CardWrapper>
      <CardIcon>
        <div>{trip.oneWay ? <OnewayIcon /> : <TwoWayIcon />}</div>
      </CardIcon>
      <CardDetails>
        <DetailItem>
          <span>Punto Inicial</span>
          <strong>{trip.startAddress}</strong>
        </DetailItem>
        <DetailItem>
          <span>Punto Final</span>
          <strong>{trip.endAddress}</strong>
        </DetailItem>
      </CardDetails>
      <CardNumeric>
        <DetailItem>
          <span>Km</span>
          <strong>{trip.totalKm}</strong>
        </DetailItem>
        <DetailItem>
          <span>Trabajadores</span>
          <strong>{trip.employees.length}</strong>
        </DetailItem>
      </CardNumeric>
      <CardStats>
        <DetailItem>
          <span>Huella de carbono total</span>
          <strong className="big">
            {trip.carbonFootPrintEmission.toFixed(2)} Kg CO2
          </strong>
        </DetailItem>
      </CardStats>
    </CardWrapper>
  );
};

TripCard.propTypes = {
  trip: PropTypes.shape({
    employees: PropTypes.array,
    startAddress: PropTypes.string,
    endAddress: PropTypes.string,
    totalKm: PropTypes.number,
    oneWay: PropTypes.bool,
    carbonFootPrintEmission: PropTypes.number,
    carbonFootPrintPerEmployee: PropTypes.number,
  }).isRequired,
};

export default TripCard;
