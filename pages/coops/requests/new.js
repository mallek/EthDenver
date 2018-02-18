import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Cooperative from '../../../ethereum/cooperative';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };



  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }



  onSubmit = async event => {
    event.preventDefault();

    const coop = Cooperative(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await coop.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });

      Router.pushRoute(`/coops/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

    render() {

        const options = [
            { key: '1', text: 'Bounty', value: 'blunty' },
            { key: '2', text: 'Administration', value: 'admin' },
            { key: '3', text: 'Labor', value: 'labor' },
            { key: '4', text: 'Financial', value: 'financial' },
            { key: '5', text: 'Production', value: 'production' },


        ]

    return (
      <Layout>
        <Link route={`/coops/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Request</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

            <Form.Field>

            <Form.Select fluid label='Request Type' options={options} placeholder='Request Type' />
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
