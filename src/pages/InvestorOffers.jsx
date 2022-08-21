import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text } from '@geist-ui/core'

class InvestorOffers extends React.Component {
  render() {
    return (
      <Page>
        <Text h1>Here are some offers from people that want insurance</Text>
        <Button>
          <Link to="investor-offer-details">marto iphone $150 USDC</Link>
        </Button>
        <Button>
          <Link to="investor-offer-details">marto mac $500 USDC</Link>
        </Button>
      </Page >
    );
  }
}

export default InvestorOffers;