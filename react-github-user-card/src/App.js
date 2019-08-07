import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import MainUserCard from "./components/MainUserCard";
import FollowerCard from "./components/FollowerCard";
import SearchForm from "./components/SearchForm";

const MainUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 60px 0;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: space-evenly;
  margin-bottom: 60px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUserData: [],
      followersData: [],
      searchUserName: "bigknell"
    };
  }

  // method to use fetch API to grab account data dependant on username in state
  fetchMainUserData = () => {
    fetch(`https://api.github.com/users/${this.state.searchUserName}`)
      .then(response => response.json())
      .then(response => this.setState({ mainUserData: response }));
  };

  // method to use fetch API to grab follower data dependant on username in state
  fetchFollowersData = () => {
    fetch(`https://api.github.com/users/${this.state.searchUserName}/followers`)
      .then(response => response.json())
      .then(response => this.setState({ followersData: response }));
  };

  // method to update the username in state, then execute functions to get new data, then re-render page
  updateSearchUser = username => {
    this.setState({ searchUserName: username });
    this.fetchMainUserData();
    this.fetchFollowersData();
  };

  // lifecycle method to set fetch API data and update state
  componentDidMount() {
    this.fetchMainUserData();
    this.fetchFollowersData();
  }

  // ToDo: refactor code to incorporate componentDidUpdate
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevProps', prevProps)
  // }

  // lifecycle method to render components in JSX
  render() {
    return (
      <div className="App">
        <MainUserContainer>
          <SearchForm updateSearchUser={this.updateSearchUser} />
          <MainUserCard mainUserData={this.state.mainUserData} />
          <h2>Followers:</h2>
        </MainUserContainer>
        <FlexRowContainer>
          {this.state.followersData.map(follower => {
            return <FollowerCard follower={follower} key={follower.login} />;
          })}
        </FlexRowContainer>
      </div>
    );
  }
}
// trwhatcott
export default App;
