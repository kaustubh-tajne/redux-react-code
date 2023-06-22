import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamCotainer = (props) => {
  return (
    <div>
      <h2>Number of IceCream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>New IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      return dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamCotainer);
