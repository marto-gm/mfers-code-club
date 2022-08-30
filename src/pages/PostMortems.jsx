import React from "react";

import { Page, Text } from '@geist-ui/core'


class PostMortems extends React.Component {
  render() {
    return (
      <Page>
        <Grid.Container justify="center" gap={3} mt="100px">
          <Grid xs={24} sm={20} justify="center">
            <Text h1>lessons learned by mfers</Text>
          </Grid>
          <Grid xs={20} sm={20} justify="center">
            <Button>
              <Link to="/">take me home mfer</Link>
            </Button>
          </Grid>
          <p> 1 mfer = 1 mfer </p>
          <ul></ul>
        </Grid.Container>
      </Page>
    );
  }
}

export default PostMortems;
