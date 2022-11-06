const hre = require("hardhat");
const fs = require("fs");

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
<<<<<<< HEAD
  const wallet = (process.env.MNEMONIC && process.env.MNEMONIC.length > 0) ? 
  ethers.Wallet.fromMnemonic(process.env.MNEMONIC) : 
  new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);

  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.MUMBAI_ALCHEMY_KEY
=======

  const TLP = await hre.ethers.getContractFactory("TheLovelaceProject");
  const tlp = await TLP.deploy();

  await tlp.deployed();

  console.log(
    "We've deploy your contract to: ", tlp.address
>>>>>>> 9c3a2695097116b34177b08dd06a866c79ea635f
  );

  const signer = wallet.connect(provider);

  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(`Wallet balance ${balance}`);

  if (balance < 0.01) {
    throw new Error("Not enough Matic");
  }

  const contractFactory = await hre.ethers.getContractFactory("LovelaceNFT");
  
  const contract = await contractFactory.deploy();

  console.log("Deploying contract...");
  console.log("Awaiting confirmations");

  await contract.deployed();

  fs.writeFileSync(
    "../next-app/utils/contractAddress.js",
    `export const contractAddress = "${contract.address}"`
  );
  console.log("Contract address saved in ../next-app/utils/contractAddress.js");
}

<<<<<<< HEAD
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
=======
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
>>>>>>> 9c3a2695097116b34177b08dd06a866c79ea635f
