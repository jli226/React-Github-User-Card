import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// semantic-ui component to return each follower data
const FollowerCard = props => {
  return (
    <Card>
      <Image src={`${props.follower.avatar_url}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.follower.login}</Card.Header>
        <Card.Description>
          <p>{props.follower.html_url}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default FollowerCard;
