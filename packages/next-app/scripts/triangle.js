import Triangle from "../../../node_modules/triangle";
const triangle = new Triangle("secret_ICaL1Dlc4fUOwKN3jWjxy518Blldt2R8iS1p6QMnEu0");


const address = await triangle.addresses.monitor({
    address: "0xD2B58F6075865236532e0399f5703d7bEbb9b167",
    name: "My Test Address",
    network: "ethereum_goerli",
  });

  const nfts = await triangle.addresses.nfts(
    "0x7A9e7a1fE90E483B4B60C569068912cbD9879D12"
  );





