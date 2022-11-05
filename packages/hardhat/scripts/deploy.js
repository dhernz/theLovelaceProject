const hre = require("hardhat");

async function main() {

  const TLP = await hre.ethers.getContractFactory("TheLovelaceProject");
  const tlp = await TLP.deploy();

  await tlp.deployed();

  console.log(
    "We've deploy your contract to: ", tlp.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
