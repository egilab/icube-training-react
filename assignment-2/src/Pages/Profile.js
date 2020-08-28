import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const data = useSelector((state) => state.user);

  return (
    <>
      <div className="wrapper">
        {data.user === null ? (
          <h1>No Customer Data</h1>
        ) : (
          <UserData mydata={data.user} />
        )}
      </div>
    </>
  );
}

function UserData(props) {
  return (
    <>
      <h1>My Profile</h1>
      <p>Name : {props.mydata.name}</p>
      <p>Email : {props.mydata.email}</p>
      <p>Telephone : {props.mydata.telepon}</p>
    </>
  );
}

export default Profile;
