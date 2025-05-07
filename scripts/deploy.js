const hre = require("hardhat");

async function main() {
    const MyDeFiContract = await hre.ethers.getContractFactory("MyDeFiContract");
    const myDeFiContract = await MyDeFiContract.deploy();

    await myDeFiContract.deployed();

    console.log("MyDeFiContract deployed to:", myDeFiContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });