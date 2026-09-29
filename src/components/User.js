import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  const { name } = props;
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Kanpur</h3>
      <h4>Contact Us: 2345678</h4>
    </div>
  );
};

export default User;
