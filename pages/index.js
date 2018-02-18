import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';


class CoOpIndex extends Component {
  static async getInitialProps() {
    const coops = await factory.methods.getDeployedCoOps().call();
    return { coops };
  }



  renderCoOps() {
    const companyNames = ["CryptoKitties Adoption Agency", "Ada's Apple Orchard", "Denver Bootch Brews", "Old Car Show Lot", "The Best Coop", "Americas Winery CoOp", "hello world"]
    const descriptions = ["So many cryptokitties go unsold on the market. This socially conscious agency pairs neglected CryptoKitties with new loving owners and coop members. No matter their generation!", "A lovely London based apple orchard that distributes worldwide.", "A Kombutcha brewery located in the heart of Denver. Their lively brew is has come a long way since the mother scoby.", "Built in the 1920s as a car show display room, this building has been re-purposed to host events. It has become especially popular among the cypberpunks", "hlkjhdfkjhkjhfljshdlsd"]
    const items = this.props.coops.map((address, index) => {

      const html = (
        <div>
          <Link route={`/coops/${address}`}>
            <a>View Co-op</a>
            </Link>
          <p>{descriptions[index]}</p>
        </div>);
      return {
        header:  companyNames[index],
        meta: address,
        description: html,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>CoOps</h3>

          <Link route="/coops/new">
            <a>
              <Button
                floated="right"
                content="Create CoOp"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCoOps()}
        </div>
      </Layout>
    );
  }
}

export default CoOpIndex;