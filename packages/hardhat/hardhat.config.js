<<<<<<< HEAD
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.MUMBAI_ALCHEMY_API_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY
    }
  }
};
=======
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    "optimism-goerli":{
      url:"https://goerli.optimism.io",
      accounts: [process.env.PRIVKEY]
    }
  }
};
>>>>>>> 9c3a2695097116b34177b08dd06a866c79ea635f
