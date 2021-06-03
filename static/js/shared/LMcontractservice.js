import Web3 from 'web3'
import swal from 'sweetalert';
import Web3Modal from "web3modal";

import LMabi from './LMabi.json'
import POOLabi from './POOLabi.json'

import WalletConnectProvider from "@walletconnect/web3-provider";
import {
    BscConnector
} from '@binance-chain/bsc-connector'
import detectEthereumProvider from '@metamask/detect-provider';



const getWeb3Client = async () => {


    const loginType = localStorage.getItem("loginType");

    if (window.ethereum || window.BinanceChain || Web3.givenProvider) {

        if (loginType === "metamask") {

            const web3Client = new Web3(window.ethereum || Web3.givenProvider);

            window.web3 = web3Client;
            //await window.ethereum.enable();
            await web3Client.eth.requestAccounts();
            var id = await web3Client.eth.net.getId();

            // return web3Client; 
            if (id == 56) {
                return web3Client;
            } else {
                swal("Change Network to Binance Mainet");
            }

        } else if (loginType === "binance")

        {
            if (window.BinanceChain) {

                const web3Client = new Web3(window.BinanceChain);
                // window.web3 = web3Client;

                await web3Client.eth.requestAccounts();

                //  console.log(acc[0]);

                var id = await web3Client.eth.net.getId();
                console.log("ID", id);

                // return web3Client; 
                if (id == 56) {
                    return web3Client;
                } else {
                    swal("Change Network to Binance Mainet");
                }

            } else {

                await swal("Please Install Binance Wallet!!");
                window.location.reload();
            }


        }

    } else {

        window.addEventListener('ethereum#initialized', handleEthereum, {
            once: true,
        });

        setTimeout(handleEthereum, 3000); // 3 seconds

    }

};


async function handleEthereum() {
    const provider = await detectEthereumProvider();
    if (provider) {
        getWeb3Client();
    } else {
        await swal("Please Install Wallet!");
        window.location.reload()
    }
}







// Claim BNB API

const claimBNB = async (web3) => {

    console.log("Claim BNB called => ", web3);
    var contractABI = LMabi;
    var contractAddress = "0x0e3eaf83ea93abe756690c62c72284943b96a6bc";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const data = contract.methods.claimBNBReward();
    const account = await web3.eth.getAccounts();
    const gas = await data.estimateGas({
        from: account[0]
    });
    const gasPrice = await web3.eth.getGasPrice();
    var tx = {
        from: account[0],
        to: contractAddress,
        data: data.encodeABI(),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gas + 10000),
    };
    return new Promise((resolve, reject) => {
        web3.eth.sendTransaction(tx).on("transactionHash", (hash, err) => {
                if (!err) {
                    console.log("HASH", hash);
                    //resolve(hash);
                } else {
                    console.log("1", err);
                    reject(err);
                }
            }).on('confirmation', function(confirmationNumber, receipt) {
                resolve(receipt);
            })
            .on('error', function(err) {
                console.log("2", err)
                reject(err)
            });
    });
};





// Disruptive Transfer API

const disruptiveTransfertokens = async (web3, recipient, value) => {

    console.log("Disruptive Transfer called => ", web3, recipient, value);

    var contractABI = LMabi;
    var contractAddress = "0x0e3eaf83ea93abe756690c62c72284943b96a6bc";

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    console.log("value", value);


    var amount = web3.utils.toWei(value, "ether")

    var transferamount = amount.slice(0, -9);

    const data = contract.methods.disruptiveTransfer(recipient, transferamount);
    const account = await web3.eth.getAccounts()


    // const gas = await data.estimateGas({from: account[0]});

    // console.log("gas",gas);

    const gasPrice = await web3.eth.getGasPrice();

    var tx = {
        from: account[0],
        to: contractAddress,
        data: data.encodeABI(),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(800000),
        value: web3.utils.toHex(web3.utils.toWei("1", "ether"))
    };

    return new Promise((resolve, reject) => {
        web3.eth.sendTransaction(tx).on("transactionHash", (hash, err) => {
                if (!err) {

                    console.log("HASH", hash);
                    //resolve(hash);
                } else {
                    console.log("1", err);
                    reject(err);
                }
            }).on('confirmation', function(confirmationNumber, receipt) {
                resolve(receipt);
            })
            .on('error', function(err) {
                console.log("2", err);
                reject(err)
            });
    });
};











// extra claim

const claimextraBNB = async (web3) => {

    console.log("Claim BNB called => ", web3);
    var contractABI = POOLabi;
    var contractAddress = "";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const data = contract.methods.claimextraBNB();
    const account = await web3.eth.getAccounts();
    const gas = await data.estimateGas({
        from: account[0]
    });
    const gasPrice = await web3.eth.getGasPrice();
    var tx = {
        from: account[0],
        to: contractAddress,
        data: data.encodeABI(),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gas + 10000),
    };
    return new Promise((resolve, reject) => {
        web3.eth.sendTransaction(tx).on("transactionHash", (hash, err) => {
                if (!err) {
                    console.log("HASH", hash);
                    //resolve(hash);
                } else {
                    console.log("1", err);
                    reject(err);
                }
            }).on('confirmation', function(confirmationNumber, receipt) {
                resolve(receipt);
            })
            .on('error', function(err) {
                console.log("2", err)
                reject(err)
            });
    });
};








const contractService = {
    getWeb3Client,
    claimBNB,
    disruptiveTransfertokens,
    claimextraBNB
};

export default contractService;