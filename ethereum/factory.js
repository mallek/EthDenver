import web3 from './web3';
import CampaignFactory from './build/CoOpFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0x680E843e0ECBb8247bD7F1BfaA81F1765217F5D2'
  '0x1b0125a2feff504ed07892ef2323335bc9f7f87d'
);

export default instance;
