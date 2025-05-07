const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyDeFiContract", function () {
    let MyDeFiContract;
    let myDeFiContract;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        MyDeFiContract = await ethers.getContractFactory("MyDeFiContract");
        [owner, addr1, addr2] = await ethers.getSigners();
        myDeFiContract = await MyDeFiContract.deploy();
        await myDeFiContract.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await myDeFiContract.owner()).to.equal(owner.address);
        });

        it("Should initialize with zero balance", async function () {
            expect(await myDeFiContract.balanceOf(owner.address)).to.equal(0);
        });
    });

    describe("Transactions", function () {
        it("Should allow users to deposit tokens", async function () {
            await myDeFiContract.deposit({ value: ethers.utils.parseEther("1") });
            expect(await myDeFiContract.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("1"));
        });

        it("Should allow users to withdraw tokens", async function () {
            await myDeFiContract.deposit({ value: ethers.utils.parseEther("1") });
            await myDeFiContract.withdraw(ethers.utils.parseEther("1"));
            expect(await myDeFiContract.balanceOf(owner.address)).to.equal(0);
        });
    });
});