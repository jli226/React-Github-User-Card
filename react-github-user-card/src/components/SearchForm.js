import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin-bottom: 40px;
`;

// semantic-ui component to return form for input username to search form
class SearchForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: ""
    };
  }

  // input handler to update state
  changeInputHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  // onclick handler to invoke and pass through input state into
  // updateSearchUser method - this method sets state of username to be searched on App.js
  // then makes fetch api calls to update user/follower state data
  onClickHandler = event => {
    this.props.updateSearchUser(this.state.input);
  };

  render() {
    return (
      <SearchContainer onSubmit={this.onClickHandler}>
        <Form>
          <Input
            onChange={this.changeInputHandler}
            icon="search"
            placeholder="Input GitHub Username..."
            size="massive"
          />
          <Button onClick={this.onClickHandler} size="massive">
            Search
          </Button>
        </Form>
      </SearchContainer>
    );
  }
}

export default SearchForm;
