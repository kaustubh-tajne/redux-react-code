import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>New Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log('state',state);
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      return dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
