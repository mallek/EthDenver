import React, { Component } from 'react';
import { Card, Grid, Button, Image, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Cooperative from '../../ethereum/cooperative';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CoOpShow extends Component {
    static async getInitialProps(props) {
        const coop = Cooperative(props.query.address);

        const summary = await coop.methods.getSummary().call();


        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description:
                    'The manager created this coop and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description:
                    'You must contribute at least this much wei to become an approver'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                    'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description:
                    'Number of people who have already donated to this coop'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'CoOp Balance (ether)',
                description:
                    'The balance is how much money this coop has left to spend.'
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>The Creative CoOp</h3>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

                        <Grid.Column width={6}>
                            <h1><Icon name='heartbeat' size='small' /> &nbsp;Join This CoOp Now</h1>
                            <ContributeForm address={this.props.address} />
                            <h1><Icon name='signal' size='small' /> &nbsp;Bounty Goal</h1>
                            <Image src='/static/images/status.png' size='large' style={{padding: 20, alignSelf: 'flex-start'}}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/coops/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Layout>
        );
    }
}

export default CoOpShow;
