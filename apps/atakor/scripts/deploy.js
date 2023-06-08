const hre = require('hardhat')

async function main() {
  const PresentationRegistry = await hre.ethers.getContractFactory(
    'PresentationRegistry'
  )
  const presRegistry = await PresentationRegistry.deploy()
  await presRegistry.deployed()

  console.log(
    'Presentation registry contract deployed to:',
    presRegistry.address
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
