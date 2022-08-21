import React from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text, Card, Image, Grid } from '@geist-ui/core'

class CreateOffer extends React.Component {
  render() {
    return (
      <Page>
        <h1>What do you want to get insurance for?</h1>
        <Grid.Container gap={1.5}>
          <Grid xs={10}>

            <Card xs={10} width="100%">
              <Image src="https://cdn.pocket-lint.com/r/s/1201x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
               height="200px" width="400px" draggable={false} />
              <Text h4 mb={0}>Macbook pro 2018</Text>
              <Text type="secondary" small>$1,000 USDC (aprox)</Text>
              <Card.Footer>
                <Link to="accept-terms">Get insurance!</Link>
              </Card.Footer>
            </Card>
            <Card xs={8} width="100%">
              <Image src="https://i.blogs.es/f3f65d/iphone-12-pro-max-analisis-applesfera-4/1366_2000.jpg"
               height="200px" width="400px" draggable={false} />
              <Text h4 mb={0}>iPhone 12</Text>
              <Text type="secondary" small>$300 USDC (aprox)</Text>
              <Card.Footer>
                <Link to="accept-terms">Get insurance!</Link>
              </Card.Footer>
            </Card>
          </Grid>  
        </Grid.Container>
      </Page >
    );
  }
}

export default CreateOffer;