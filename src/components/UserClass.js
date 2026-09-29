//Class based component: Normal js class
//functional component: Normal js function
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor called");
    //state variable
    this.state = {
      userInfo: {
        UserName: "Rahul",
        followers: 1,
        following: 0,
        public_repos: 3,
      },
    };
  }

  async componentDidMount() {
    // console.log("child did mount");
    const data = await fetch("https://api.github.com/users/Harsh2594");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    // console.log("child render");
    // const { count } = this.props;
    const { login, followers, following, public_repos } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>UserName: {login}</h2>
        <h3>followers:{followers} </h3>
        <h4>following: {following}</h4>
        <h5>repo: {public_repos}</h5>
      </div>
    );
  }
}
export default UserClass;
