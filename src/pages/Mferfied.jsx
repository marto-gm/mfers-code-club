import React from "react";
import { Tweet } from 'react-twitter-widgets'

import { Page, Text, Grid, Card } from '@geist-ui/core'


class Mferfied extends React.Component {
  render() {
    return (
      <Page>
        <Grid.Container justify="center" gap={3} mt="100px">
          <Grid xs={24} sm={24} justify="center">
            <Text h1>mferfy best of the best</Text>
          </Grid>
          <Grid xs={24} justify="center">
            <Card shadow width="80%">
              <Tweet tweetId='1564644587808985089' />
            </Card>
          </Grid>
          <Grid xs={24} sm={24} justify="center">
            <p> 1 mfer = 1 mfer </p>
          </Grid>
        </Grid.Container>
      </Page>
    );
  }
}

export default Mferfied;
