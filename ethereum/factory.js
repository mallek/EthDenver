import web3 from './web3';
import CampaignFactory from './build/CoOpFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0x680E843e0ECBb8247bD7F1BfaA81F1765217F5D2'
  //'0x1b0125a2feff504ed07892ef2323335bc9f7f87d'
  //'0x28ff27a5953d756b8146f4bb5f7769a9b8878a8f'
  //'0x7990f75347c00e80055b3c54489bb555372efe8d'
  '0x6fb6d392eefc136a30df060e2061aecf3756213f'
  //'0x7e9e6d63fb95bce3b45b8f8934d831eea1a07d11'
);

export default instance;
