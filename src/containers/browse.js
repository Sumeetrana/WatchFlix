import React, { useContext, useState } from "react";
import { SelectionProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <SelectionProfileContainer user={user} setProfile={setProfile} />;
}
