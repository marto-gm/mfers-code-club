import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text } from '@geist-ui/core'

class InvestorEarning extends React.Component {
  render() {
    return (
      <Page>
        <Text h1>Thank you!</Text>
        <Button>
          <a target="_blank" href="https://console.superfluid.finance/goerli/accounts/0x0f71169c85a809d17c8eed81d8229cd603e62a0b?tab=streams">Here are your earnings already</a>
        </Button>
      </Page >
    );
  }
}

export default InvestorEarning;