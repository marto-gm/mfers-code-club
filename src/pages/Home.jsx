import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Page, Text, Image } from '@geist-ui/core'

class Login extends React.Component {
  render() {
    return (
      <Page>
        <Grid.Container justify="center" gap={3} mt="100px">
          <Grid xs={24} sm={20} justify="center">
            <Text h1>mfers code club</Text>
          </Grid>
          <Grid xs={24} sm={24} justify="center">
            <Button>
              <Link to="post-mortems">post-mortems meebe</Link>
            </Button>
          </Grid>
          <Grid xs={24} sm={24} justify="center">
            <Button>
              <Link to="mferfied">mferfy hall of fame</Link>
            </Button>
          </Grid>
          <Grid xs={24} sm={24} mt="100px" justify="center">
            <Text small>coded by the mfers code club themselves, mfer</Text>

          </Grid>
          <Image width="280px" height="160px" src="https://img.seadn.io/files/0e2e76ca4cc4c81847252e3ff1d21e5b.png" align="left" />
        </Grid.Container>


      </Page>

    );
  }
}

export default Login;