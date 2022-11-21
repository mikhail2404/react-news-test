import React from "react";

import { useAppSelector } from "../redux/hooks";

const Profile = () => {
  const { logInDetails } = useAppSelector((state) => state.auth);

  return <div>Welcome {logInDetails.username}</div>;
};

export default Profile;
