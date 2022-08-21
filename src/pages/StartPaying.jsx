import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text } from '@geist-ui/core'

class StartPaying extends React.Component {
  render() {
    return (
      <Page>
        <Text h1>You have insurance now!</Text>
        <Text p>Your NFT contract is: 0x7098c9a76d1a4932f7bbb68cdd5e620d070d9fd2</Text>
        <Text p>Ty for your first payment</Text>
        <Button>
          <a target="_blank" href="https://goerli.etherscan.io/token/0x7098c9a76d1a4932f7bbb68cdd5e620d070d9fd2">Check contract</a>
        </Button>
        <Button>
          <a target="_blank" href="https://console.superfluid.finance/goerli/accounts/0x636e2ce8ededd4a0cadd638d3d14664332fa56a0">Here's your money leaving your wallet 💸</a>
        </Button>
      </Page>
    );
  }
}

export default StartPaying;