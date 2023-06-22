import React from "react";
import { buyCar, buyIceCream } from "../redux";
import { connect } from "react-redux";

const CarContainer = (props) => {
  return (
    <div>
      <h2>Number of Cars - {props.numOfCars}</h2>
      <button onClick={props.buyCar}>New IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCars: state.car.numOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: () => {
      return dispatch(buyCar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
