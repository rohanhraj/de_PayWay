require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  goerli:{
    //    url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
    //    accounts:[process.env.MAIN_ACCOUNT],
    //    chainId: 5,
    //  },
  },
};
 