const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CoOpFactory.json');

const provider = new HDWalletProvider(
  'angle wasp pig near reflect address bomb clinic myth base opinion expire',
  'https://rinkeby.infura.io/STpsUmHWIHOnS4irmxW7'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '100000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
