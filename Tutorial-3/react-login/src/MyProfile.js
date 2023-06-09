import React from "react";
import { useLocation } from "react-router-dom";

const MyProfile = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const email = params.get("email");

  return (
    <section>
      <h1>My Profile</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </section>
  );
};

export default MyProfile;
