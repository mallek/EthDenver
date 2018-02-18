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
    const companyNames = ["CryptoKitties Adoption Agency", "Another Coop", "The Best Coop", "Americas Winery CoOp", "hello world"]
    const descriptions = ["So many cryptokitties go unsold on the market. This socially conscious agency pairs neglected CryptoKitties with new loving owners and coop members. No matter their generation!", "ljhjkdsakjhjhsad", "lorem ipsum", "jkhkhdsgakagruyerej1", "hlkjhdfkjhkjhfljshdlsd"]
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