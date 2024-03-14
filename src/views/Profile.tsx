import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getMoreFromServer } from "../api";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const [theMore, setTheMore] = useState("");

  useEffect(() => {
    getAccessTokenSilently()
      .then((rez) => {
        setAccessToken(rez);
      })
      .catch((err) => {
        console.log("err", err);
        setAccessToken("");
      });
  }, [getAccessTokenSilently]);

  const getMore = () => {
    getMoreFromServer(accessToken)
      .then((rez) => {
        setTheMore(rez);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    isAuthenticated && (
      <div>
        {user && (
          <>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={getMore}>Get more from server</button>
            {theMore && <p>The more: {theMore}</p>}
          </>
        )}
      </div>
    )
  );
};

export default Profile;
