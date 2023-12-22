import axios from "axios";
import React from "react";

const User = () => {
  const [user, setUser] = React.useState([]);

  const fetchUser = async () => {
    const dataResponse = await axios.get("http://localhost:8080/api/v1/user");
    console.log(dataResponse);
    setUser(dataResponse.data.data);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user.length > 0 &&
        user.map((u, idx) => {
          return <div key={idx}>{u.user_name}</div>;
        })}
    </div>
  );
};

export default User;
