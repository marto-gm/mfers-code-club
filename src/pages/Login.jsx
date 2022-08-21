import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text } from '@geist-ui/core'

class Login extends React.Component {
  render() {
    return (
      <Page>
        <Text h1><span className="striked">Degen</span> Decent Insurance</Text>
        <Button>
          <Link to="collateral">Customer Login</Link>
        </Button>
        <Button>
          <Link to="investor-offers">Investor Login</Link>
        </Button>
          
      </Page>

    );
  }
}

export default Login;