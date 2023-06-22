import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchUsers }) => {
  // this is from below side (props)
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading..</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData && userData.users && userData.users.map((user) => {
          return <h3>{user.id}</h3>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);