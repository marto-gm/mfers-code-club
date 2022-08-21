import React from "react";

import { Link } from "react-router-dom";
// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Button, Page, Text, Card, Image, Grid } from '@geist-ui/core'
import { Alchemy } from 'alchemy-sdk';

const alchemy = new Alchemy();

async function main() {
  const ownerAddress = 'martogm.eth';
  const nfts = []
  for await (const nft of alchemy.nft.getNftsForOwnerIterator(ownerAddress)) {
    nfts.push(nft)
  }
  return nfts
}

class SetupCollateral extends React.Component {
  state = {
    nfts: []
  }
  componentDidMount() {
      main().then(nfts => {
        console.log(nfts[0])
        this.setState({ nfts: nfts });
    });
  }

  render() {
    return (
      <Page>
        <Text h1>Please provide a collateral</Text>
        <Grid.Container gap={1.5}>
        {this.state.nfts.map((nft) => (
          <Grid xs={8} key={nft.tokenId}>

            <Card xs={8} width="100%">
              <Image src={nft.media[0].thumbnail}
               height="200px" width="400px" draggable={false} />
              <Text h4 mb={0}>{nft.title}</Text>
              <Text type="secondary" small>{nft.tokenType}</Text>
              <Card.Footer>
                <Link to="create-offer">Use as collateral</Link>
              </Card.Footer>
            </Card>
          </Grid>  
        ))}
        </Grid.Container>          
      </Page>
    );
  }
}

export default SetupCollateral;