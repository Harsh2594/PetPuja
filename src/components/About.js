import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about PetPuja</h2>
        <UserClass name={"Harsh (class)"} />
      </div>
    );
  }
}

export default About;
