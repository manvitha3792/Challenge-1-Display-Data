// import { render } from "react-dom";
import React from "react";
import "./styles.css";

function UserData(props) {
  const user = props.user;
  return (
    <div className="user-deets">
      <img src={user.avatar} alt="User profile" />
      <div>
        <h3>
          <a href="https://twitter.com/${user.twitterUsername}">{user.name}</a>
        </h3>
      </div>
      <p>
        <strong>Location</strong>
        {user.location}
      </p>
      <p>
        <strong>Eats</strong>
        {user.foodType}
      </p>
      <p>
        <strong>Age</strong>
        {user.age}
      </p>
      <p>
        <strong>Likes</strong>
        {user.likes}
      </p>
      <p>
        <strong>Twitter</strong>
        <a href="https://twitter.com/${user.twitterUsername}">
          @{user.twitterUsername}
        </a>
      </p>
    </div>
  );
}

export default UserData;
