import web3 from './web3';
import Campaign from './build/CoOp.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(CoOp.interface), address);
};
