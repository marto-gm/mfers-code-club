import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text } from '@geist-ui/core'

class AcceptTerms extends React.Component {
  render() {
    return (
      <Page>
        <Text h1>Accept Terms of the Insurance</Text>
        <Text p>You'll be paying approximately $5 USDC monthly for 2 years (24 months)</Text>
        <Button>
          <Link to="start-paying">Let's go!</Link>
        </Button>
      </Page>
    );
  }
}

export default AcceptTerms;