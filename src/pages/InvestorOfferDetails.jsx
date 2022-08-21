import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text, Grid } from '@geist-ui/core'

class InvestorOfferDetails extends React.Component {
  render() {
    return (
      <Page>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24}>
            <Text h1>Accept marto iphone for $150 USDC</Text>
          </Grid>
          <Grid xs={12}>
            <Text p id="lens-follow-large" data-handle="martogm.lens"></Text>
          </Grid>
          <Grid xs={12}>
            <Button>
              <Link to="/investor-earning">I trust them, let them have insurance</Link>
            </Button>
          </Grid>
        </Grid.Container>


      </Page >
    );
  }
}

export default InvestorOfferDetails;