require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: __dirname + '/.env' })

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// eslint-disable-next-line no-undef
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    atakor: {
      chainId: 12345,
      url: 'http://127.0.0.1:8301',
      accounts: [
        '7c3623b0eaefe257d8087a809d20c3b8efb515c47991880b3a1b4a1997739560',
      ],
    },
  },
}
