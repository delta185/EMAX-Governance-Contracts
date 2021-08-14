const hre = require("hardhat");

async function main() {
  const nftmax = ''
  const timelock = ''
  const guardian = ''

  // We get the contract to deploy
  const Governor = await hre.ethers.getContractFactory("Governor");
  const governor = await Governor.deploy(
    nftmax,
    timelock,
    guardian
  );

  await governor.deployed();

  console.log("Governor deployed to:", governor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
