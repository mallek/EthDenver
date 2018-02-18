import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Cooperative from '../ethereum/cooperative';

class RequestRow extends Component {
  onApprove = async () => {
    const coop = Cooperative(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await coop.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onDisApprove = async () => {
    const coop = Cooperative(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await coop.methods.disApproveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const coop = Cooperative(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await coop.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
      const readyToFinalize = request.approvalCount > approversCount / 2;
      const html = (
        <div>
          <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
            <Button color="red" basic onClick={this.onDisApprove}>
            Reject
          </Button>
          </div>
    )

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : html}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
