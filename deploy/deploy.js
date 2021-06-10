const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  //console.log("Account balance:", (await deployer.getBalance()).toString());

  const market = await ethers.getContractFactory("Market");
  const deploy_market = await market.deploy();

  await deploy_market.deployed();

  console.log("Deploy_market Contract Address:", deploy_market.address);
}

main()
  .then(() =>  process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

