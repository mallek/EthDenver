# Install instruction

### Global Dependancies
- Node js (8.1.3) developed version
- npm 5.5.1
- metamask chrome/brave extension (for now)

Clone this repository into a local folder

```
cd EthDenver
npm install
```

Wait for all packages to install, there may be some warnings and notifications during this install they can be ignored for now.


### Build the solidity contract

```
npm run build
```


### Deploy the solidity contract

 This will deploy a copy of the contract to metamask via the deploy script in the /ethereum directory


```
npm run deploy
```

