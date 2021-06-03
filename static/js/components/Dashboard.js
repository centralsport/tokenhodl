import React, {
    useEffect,
    useState
} from 'react';
import $ from 'jquery';
import logo from '../images/logo.png'
import HeroImage from '../images/hero-img.png'
import Icon3 from '../images/icons/3.png'
import Icon8 from '../images/icons/8.png'
import Icon1 from '../images/icons/1.png'
import Icon2 from '../images/icons/2.png'
import Icon11 from '../images/icons/11.png'
import Icon4 from '../images/icons/4.png'
import CoinGecko from 'coingecko-api'
import Web3 from 'web3'
import LMabi from '../shared/LMabi.json'
import contractService from '../shared/LMcontractservice'
import {
    Confirm
} from 'react-st-modal';
import swal from 'sweetalert';
import IconWarning from '../images/icons/warning.png'
import Functions from '../functions';
import AnimatedNumber from "animated-number-react";
import swalreact from '@sweetalert/with-react'

function Dashboard() {

    const [maxTransactionAmount, setmaxTransactionAmount] = useState(0);
    const [TotalbnbinrewardPool, setTotalbnbinrewardPool] = useState(0);
    const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);
    const [oneBNBprice, setoneBNBprice] = useState(0);
    const [LPbnb, setLPbnb] = useState(0);
    const [circulatingSupply, setcirculatingSupply] = useState(0);
    const [LMBalanceuser, setLMBalanceuser] = useState(0);
    const [bnbreward, setbnbreward] = useState(0);
    const [nextAvailableclaim, setnextAvailableclaim] = useState(0);
    const [user, setUser] = useState(false);
    const [address, setaddress] = useState("");
    const [value, setValue] = useState(0);
    const [previousbnbreward, setpreviousbnbreward] = useState(0);
    const [onebnb, setonebnb] = useState(0);
    const [inputvalue, setinputValue] = useState(0);
    const [hodl, sethodl] = useState(0);
    const [dailyreward, setdailyreward] = useState(0);
    const [yearly, setyearly] = useState(0);
    const [recover, setrecover] = useState(0);
    const [charityBnb, setcharityBnb] = useState(0);



    function web3apis() {


        let address = window.sessionStorage.getItem("walletAddress");

        // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
        const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

        var contractABI = LMabi;
        var contractAddress = "0x0e3eaf83ea93abe756690c62c72284943b96a6bc";
        var contract = new web3.eth.Contract(contractABI, contractAddress);

        contract.methods._maxTxAmount().call().then(amount => {
            ////console.log(amount);
            var gwei = web3.utils.toBN(amount).toString();
            var tokens = web3.utils.toWei(gwei, "Gwei");
            setmaxTransactionAmount(web3.utils.fromWei(tokens, 'ether'))
        })


        // get BNB balance of reward POOl  
        web3.eth.getBalance("0x0e3eaf83ea93abe756690c62c72284943b96a6bc")
            .then(balance => {
                ////console.log(balance);
                var tokens = web3.utils.toBN(balance).toString();
                setTotalbnbinrewardPool(web3.utils.fromWei(tokens, 'ether'))

            });


        // get BNB balance of charity Pool
        web3.eth.getBalance("0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8")
            .then(balance => {
                ////console.log(balance);
                var tokens = web3.utils.toBN(balance).toString();
                setcharityBnb(web3.utils.fromWei(tokens, 'ether'))

            });




        // get TotalBNB in liquidity Pool 
        var wrappednBNBABI = [{
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }];
        var wrappedBNBcontractAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

        var wrappedBNBcontract = new web3.eth.Contract(wrappednBNBABI, wrappedBNBcontractAddress);

        wrappedBNBcontract.methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then(balance => {

            var tokens = web3.utils.toBN(balance).toString();
            setLPbnb(web3.utils.fromWei(tokens, 'ether'))
            //console.log("lpbnb",LPbnb);
        })


        // get LM token in LP 

        contract.methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then(balance => {
            ////console.log(balance);
            var gwei = web3.utils.toBN(balance).toString();
            var tokens = web3.utils.toWei(gwei, "Gwei");
            setLMbalanceLPpool(web3.utils.fromWei(tokens, 'ether'))

        })



        //  circulating Supply LM token   
        contract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call().then(balance => {
            ////console.log(balance);
            var gwei = web3.utils.toBN(balance).toString();
            var tokens = web3.utils.toWei(gwei, "Gwei");
            var csupply = Number(1000000000000000) - Number((web3.utils.fromWei(tokens, 'ether')));
            setcirculatingSupply(csupply)
        })


        // fetch latest 1 BNB price
        const CoinGeckoClient = new CoinGecko();
        // fetch price of 1 BNB
        CoinGeckoClient.simple.price({
            ids: ['binancecoin'],
            vs_currencies: ['usd'],
        }).then(data => {
            setoneBNBprice(data.data.binancecoin.usd)
        })


        // LM BALANCE user
        contract.methods.balanceOf(address).call().then(balance => {
            ////console.log(balance);
            var gwei = web3.utils.toBN(balance).toString();
            var tokens = web3.utils.toWei(gwei, "Gwei");
            setLMBalanceuser(web3.utils.fromWei(tokens, 'ether'))
        })


        contract.methods.calculateBNBReward(address).call().then(balance => {
            ////console.log(balance);
            var tokens = web3.utils.toBN(balance).toString();
            setbnbreward(web3.utils.fromWei(tokens, 'ether'))
        })



        // next Available Claim Date API

        contract.methods.nextAvailableClaimDate(address).call().then(time => {
            ////console.log(time);
            setnextAvailableclaim(time)
            if (time == 0) {
                setUser(true)
            }

        })


        var pricep = (((Number(1000000) * Number(LPbnb)) / Number(LMbalanceLPpool))) / Number(1000000);
        setonebnb(Number(1 / pricep));

    }


    async function submitform() {

        ////console.log(address);
        ////console.log(value);

        const web3 = await contractService.getWeb3Client()


        if (value == '' || value == 0) {
            const isConfirm = Confirm(
                'Please enter Value',

            );

        } else if (address == '') {

            const isConfirm = Confirm(
                'Please Enter recepient address',

            );

        } else {

            if (web3) {

                try {

                    const txResult = await contractService.disruptiveTransfertokens(
                        web3,
                        address,
                        value,
                    );

                    const txHash = txResult;
                    ////console.log("Tx Placed => ", txHash);

                    //Save transaction 2
                    const txDetails = {
                        value: value,
                        txHash: txHash,
                        transactionType: "Disruptive Transfer",

                    };

                    //alert("transaction done");
                    swal("Transaction done!", "You clicked the button!", "success");
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                } catch {
                    swal("Transaction Failed!");
                }

            } else {

                swal({
                    title: 'Change Network to Binance Mainet',
                    timer: 3000
                })

            }

        }
    }

    async function claim() {

        var bnb = Number(bnbreward);
        // var bnb = a.toFixed(4);
        const web3 = await contractService.getWeb3Client()

        if (web3)

        {
            try {

                setpreviousbnbreward(bnbreward);
                const txResult = await contractService.claimBNB(
                    web3
                );


                const txHash = txResult;
                ////console.log("Tx Placed => ", txHash);

                //Save transaction 2
                const txDetails = {
                    value: value,
                    txHash: txHash,
                    transactionType: "Claim Rewards",

                };

                await swalreact( <
                    div >
                    <
                    h3 > Awesomeness!! < /h3> <
                    br > < /br> <
                    h5 > You have Successfully Claimed < /h5> 

                    <
                    h5 > BNB {
                        bnb.toFixed(4)
                    } < /h5>  

                    {
                        (bnb >= 1) &&
                        <
                        >
                        <
                        h6 > Wallet: {
                                (bnb * 0.80).toFixed(2)
                            } | Charities: {
                                (bnb - (bnb * 0.80)).toFixed(2)
                            } < /h6> <
                            h6 > Congratulations on Contributing Towards Charity! < /h6> <
                            />
                    }

                    <
                    br > < /br> <
                    p > Next Collection Date: {
                        new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                            weekday: "long"
                        })
                    }, {
                        new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                            month: "long"
                        })
                    } {
                        new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                            day: "numeric"
                        })
                    }, {
                        new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                            year: "numeric"
                        })
                    } {
                        new Date(nextAvailableclaim * 1000).toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        })
                    } < /p> <
                    p > Support Us By Sharing Now!! < /p> <
                    br > < /br> <
                    br > < /br> <
                    img src = {
                        logo
                    }
                    alt = ""
                    className = "img-fluid photo" / >

                    <
                    /div>
                )


                setTimeout(() => {
                    window.location.reload()
                }, 10);

            } catch {
                swal("Transaction Failed!");
            }

        } else {

            swal({
                title: 'Change Network to Binance Mainet',
                timer: 3000
            })

        }
    }



    // formatValue = value => `$ ${new Intl.NumberFormat().format(value)}`;
    //   formatNormalValue = value => `$ ${value.toFixed(8)}`;
    //   formatBNB = value => `BNB ${new Intl.NumberFormat().format(value)}`;


    //   function formatValue(value) {

    //     `$ ${new Intl.NumberFormat().format(value)}`;

    //   }

    async function buylink() {

        var link = "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc";

        // swal ({ title:"Buy tokens to earn rewards",
        // content: link ,  

        //        })


        swalreact( <
            div >
            <
            p > Your Current HODL balance is 0 < /p>   <
            h4 > You need HODL Tokens to Earn BNB < /h4> <
            br > < /br> { /* <br></br> */ } <
            p >
            <
            a href = {
                link
            }
            className = "COLLECTION_MONEY bubbly-button" > Buy Now! < /a>  <
            /p> <
            /div>
        )
    }




    useEffect(() => {

        web3apis();
        const interval = setInterval(web3apis, 5000000);

        // //console.log("User",user);
        //console.log("")


        Functions();
        $('#auto_modal').modal('show');
    })


    async function setValues(a) {

        //setValue(a);
        await setinputValue(a);
        var input = Number(a);
        var hodl = Number(Number(a) * onebnb * 0.9).toFixed(0);
        await sethodl(hodl);
        await setdailyreward(((Number(a) * onebnb * 0.9 / Number(709271212874876)) * TotalbnbinrewardPool).toFixed(5));
        await setyearly((((Number(a) * onebnb * 0.9 / Number(709271212874876)) * TotalbnbinrewardPool) * 364).toFixed(2));
        var y = ((Number(a) * onebnb * 0.9 / Number(709271212874876)) * TotalbnbinrewardPool) * 364;
        await setrecover(Number(Number((input * 364) / y).toFixed(0)).toFixed(0));
    }






    return ( <
            >

            <
            a href = ""
            class = "fixedbutton"
            data - toggle = "modal"
            data - target = "#InvestMent" > Reward Calculator < /a> <
            section class = "smallsection" >
            <
            div class = "modal fade  "
            id = "InvestMent"
            tabindex = "-1"
            aria - labelledby = "InvestMentLabel"
            aria - hidden = "true" >
            <
            div class = "modal-dialog modal-lg " >
            <
            div class = "modal-content modal_hodlInsvetmentcal" >
            <
            div class = "modal-header" >
            <
            h5 class = "modal-title"
            id = "InvestMentLabel" > HODL Investment & Rewards Calculator < /h5> <
            button type = "button"
            class = "close"
            data - dismiss = "modal"
            aria - label = "Close" >
            <
            span aria - hidden = "true" > & times; < /span> <
            /button> <
            /div>  <
            div class = "modal-body " >
            <
            div class = "row" >
            <
            div class = "col-md-12" >
            <
            form >
            <
            div class = "form-group row" >
            <
            label
            for = "inputPassword"
            class = "col-sm-6 col-form-label" > Enter BNB Amount to Invest < /label> { /* <input type="text" class="form-control" id="text" placeholder="Enter BNB Amount" onChange={e => setValues(e.target.value)}  /> */ } <
            div class = "col-sm-6" >
            <
            input type = "text"
            class = "form-control"
            id = "inputtext"
            onChange = {
                e => setValues(e.target.value)
            }
            /> <
            /div> <
            /div> <
            /form>                      <
            /div> <
            div class = "col-md-12 rewardcalc" >
            <
            table class = "table table-bordered table-striped text-center" >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > < /th> <
            th scope = "col" > Existing < /th> <
            th scope = "col" > New < /th> <
            th scope = "col" > Total < /th> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            th scope = "row" > $HODL Balance < /th> <
            td > {
                new Intl.NumberFormat().format(Number(LMBalanceuser).toFixed(0))
            } < /td> <
            td > {
                new Intl.NumberFormat().format(hodl)
            } < /td> <
            td > {
                new Intl.NumberFormat().format(Number(Number(hodl).toFixed(0)) + Number(Number(LMBalanceuser).toFixed(0)))
            } < /td> <
            /tr> <
            tr >
            <
            th scope = "row" > Reward Share % < /th> <
            td > {
                ((Number(bnbreward) / Number(TotalbnbinrewardPool)) * 100).toFixed(3)
            } % < /td> <
            td > {
                Number(((dailyreward / TotalbnbinrewardPool) * 100)).toFixed(3)
            } % < /td>



            <
            td > {
                (((Number(bnbreward) / Number(TotalbnbinrewardPool)) * 100) + Number((dailyreward / TotalbnbinrewardPool * 100))).toFixed(3)
            } % < /td>




            <
            /tr> <
            tr >
            <
            th scope = "row" > Daily Rewards in BNB * < /th> <
            td > {
                Number(bnbreward).toFixed(3)
            } < /td> <
            td > {
                Number(dailyreward).toFixed(3)
            } < /td> <
            td > {
                (Number(bnbreward) + Number(dailyreward)).toFixed(3)
            } < /td> <
            /tr> <
            tr >
            <
            th scope = "row" > Yearly Rewards in BNB * < /th> <
            td > {
                (Number(bnbreward) * 364).toFixed(2)
            } < /td> <
            td > {
                Number(yearly).toFixed(2)
            } < /td> <
            td > {
                Number(Number(Number(bnbreward) * 364) + Number(yearly)).toFixed(2)
            } < /td> <
            /tr> <
            /tbody> <
            /table> <
            /div> <
            div class = "button_cacla" >
            <
            a href = "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc"
            target = "_blank"
            class = "btn-get-started scrollto" > Buy HODL < /a> <
            /div>

            <
            div className = "text-center fsize" > < br > < /br> <p className="text-center" >*These are only Estimates and not a Financial Advice.</p > < /div>  <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>


            <
            /section>







            <
            main id = "main" >


            <
            section id = "services"
            className = "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2" >
            <
            div className = "container"
            data - aos = "fade-up" >
            <
            div className = "row mt-3" >
            <
            div className = "col-xl-12 col-md-12 d-flex align-items-stretch mt-xl-0"
            data - aos = "zoom-in"
            data - aos - delay = "300" >
            <
            div className = "icon-box" >

            <
            h5 > My collectable BNB: {
                Number(bnbreward).toFixed(5)
            }
            BNB < /h5>   

            <
            h6 style = {
                {
                    color: 'DarkCyan'
                }
            } > * Forecasted Annual BNB Rewards: {
                (Number(bnbreward) * 364).toFixed(3)
            }
            BNB < /h6>           

            <
            p > * Pool and Rewards are always changing based on buys, sells, collects by others and your percentage holdings. < /p>



            <
            br > < /br>

            {
                ((!user) && (nextAvailableclaim == 0)) && < h5 style = {
                        {
                            color: 'red'
                        }
                    } >
                    Network Error: Please Try Again Later Or Use a Different Browser <
                    /h5> }


                {
                    ((!user) && (nextAvailableclaim != 0)) && < h5 >
                        Next Collect Date: {
                            new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                weekday: "long"
                            })
                        }, {
                            new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                month: "long"
                            })
                        } {
                            new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                day: "numeric"
                            })
                        }, {
                            new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                year: "numeric"
                            })
                        } {
                            new Date(nextAvailableclaim * 1000).toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            })
                        } <
                        /h5> }

                    {
                        user && < h5 >
                            Next Collect Date: You need to Buy and Hold Tokens to Earn BNB <
                            /h5>  }

                            <
                            div className = "Collect_MONEY mt-5" >



                            {


                                ((!user) && (nextAvailableclaim < Math.round(Date.now() / 1000)) && bnbreward > 0)

                                ?
                                < a onClick = {
                                    claim
                                }
                                className = "COLLECTION_MONEY bubbly-button" >

                                Collect my BNB < /a> 

                                :

                                    ((!user) && ((nextAvailableclaim - Math.round(Date.now() / 1000)) > 946684782)) ?
                                    <
                                    div >
                                    <
                                    p style = {
                                        {
                                            color: 'red'
                                        }
                                    } > Your Wallet is Under Zero Balance Punishment! < /p> <
                                    a onClick = {
                                        () => {
                                            swalreact( <
                                                div >
                                                <
                                                h5 > Your wallet is under Zero Balance Punishment.This occurs due to selling of all HODL tokens. < /h5> <
                                                h5 >
                                                <
                                                br > < /br>
                                                To
                                                continue earning BNB rewards please buy HODL tokens or transfer to a New Wallet. <
                                                    /h5>       

                                                    <
                                                    /div>
                                            )
                                        }

                                    }
                                className = "COLLECTION_MONEY bubbly-button" > More Information! < /a>

                                <
                                /div>:
                                    ((!user) && (nextAvailableclaim > Math.round(Date.now() / 1000)) && bnbreward > 0) ?


                                    <
                                    a onClick = {
                                        () => {
                                            swalreact( <
                                                div >
                                                <
                                                h5 > "Please wait till your collectible date is reached" < /h5> <
                                                p > Your Collectible Date is {
                                                    new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                                        weekday: "long"
                                                    })
                                                }, {
                                                    new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                                        month: "long"
                                                    })
                                                } {
                                                    new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                                        day: "numeric"
                                                    })
                                                }, {
                                                    new Date(nextAvailableclaim * 1000).toLocaleString("en-US", {
                                                        year: "numeric"
                                                    })
                                                } {
                                                    new Date(nextAvailableclaim * 1000).toLocaleString('en-US', {
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: true
                                                    })
                                                } < /p>


                                                <
                                                /div>
                                            )
                                        }
                                    }


                                className = "COLLECTION_MONEY bubbly-button" > Collect my BNB < /a> :

                                ((!user) && ((nextAvailableclaim < Math.round(Date.now() / 1000)) || (nextAvailableclaim > Math.round(Date.now() / 1000))) && bnbreward <= 0 && nextAvailableclaim != 0) ?
                                <
                                div >
                                <
                                p style = {
                                    {
                                        color: 'red'
                                    }
                                } > Your Wallet is Under Zero Balance Punishment! < /p>     <
                                a onClick = {
                                    () => {
                                        swalreact( < div > < h5 > You are on Zero HODL balance Punishment, Please buy HODL from new wallet to participate in HODL BNB rewards. < /h5></div > )
                                    }
                                }
                                className = "COLLECTION_MONEY bubbly-button" > More Information! < /a> 

                                <
                                /div>

                                :


                                    ((!user) && ((nextAvailableclaim == 0))) ?
                                    <
                                    div > { /* <p style={{ color: 'red' }}>Your Wallet is Under Zero Balance Punishment!</p>     */ } { /* <a onClick = {()=> {swalreact(<div><h5>You are on Zero HODL balance Punishment, Please buy HODL from new wallet to participate in HODL BNB rewards.</h5></div>)}} className="COLLECTION_MONEY bubbly-button">More Information !</a>  */ }

                                    <
                                    /div>

                                    :

                                    <
                                    a onClick = {
                                        buylink
                                    }
                                className = "COLLECTION_MONEY bubbly-button" > Collect my BNB < /a>

                            }



                            <
                            /div> <
                            br > < /br> {
                                ((bnbreward) >= 1) &&

                                <
                                p > 20 % of reward will be donated towards charity. < a href = "https://hodltoken.gitbook.io/hodl/features/charities-collection"
                                target = "_blank" > More Info < /a> </p >
                            }


                            <
                            /div> <
                            /div>                   <
                            /div>                  <
                            /div> <
                            /section>





                            <
                            section id = "services"
                        className = "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2" >
                            <
                            div className = "container"
                        data - aos = "fade-up" >
                            <
                            div className = "row" >
                            <
                            div className = "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "300" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon3
                            }
                        /> <
                        /div> <
                        h5 > Max Transaction Amount < /h5> <
                            p > $HODL {
                                new Intl.NumberFormat().format(maxTransactionAmount)
                            } < /p> { /* <p>$HODL 10,000,000,000,000 </p> */ } <
                            /div> <
                            /div> <
                            div className = "col-xl-4 col-md-6 d-flex align-items-stretch mt-md-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "200" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon8
                            }
                        /> <
                        /div> <
                        h5 > Total liquidity pool < /h5> <
                            p > { /* $ { new Intl.NumberFormat().format(oneBNBprice * LPbnb * 2 )}   */ } { /* formatValue = value => `$ ${new Intl.NumberFormat().format(value)}`;                     */ } <
                            AnimatedNumber
                        value = {
                            (oneBNBprice * LPbnb * 2).toFixed(2)
                        }
                        formatValue = {
                            (value) => `$ ${new Intl.NumberFormat().format(value)}`
                        }
                        duration = {
                            300
                        }
                        />

                        <
                        /p>

                        <
                        /div> <
                        /div> <
                        div className = "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "300" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon1
                            }
                        /> <
                        /div> <
                        h5 > Current 1 mil $HODL Price < /h5> <
                            p >

                            { /* $ { (( Number(1000000) * Number(LPbnb) ) / Number(LMbalanceLPpool)) * oneBNBprice}   */ } <
                            AnimatedNumber
                        value = {
                            ((Number(1000000) * Number(LPbnb)) / Number(LMbalanceLPpool)) * oneBNBprice
                        }
                        formatValue = {
                            (value) => `$ ${value.toFixed(8)}`
                        }
                        duration = {
                            300
                        }
                        />    



                        <
                        /p> <
                        /div> <
                        /div> <
                        div className = "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "400" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon2
                            }
                        /> <
                        /div> <
                        h5 > Total BNB in liquidity pool < /h5> <
                            p > { /* BNB {  new Intl.NumberFormat().format(LPbnb)} */ } { /* { //console.log("renderlp",LPbnb) }  */ } { /* {LPbnb} */ } <
                            AnimatedNumber
                        value = {
                            LPbnb
                        }
                        formatValue = {
                            (value) => `BNB ${new Intl.NumberFormat().format(value)}`
                        }
                        duration = {
                            300
                        }
                        /> { /* <p>BNB NaN */ } <
                        /p> <
                        /div> <
                        /div>



                        <
                        div className = "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "400" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon11
                            }
                        /> <
                        /div> <
                        h5 > Total BNB in reward pool < /h5> <
                            p > { /* BNB {   new Intl.NumberFormat().format(TotalbnbinrewardPool)} */ } {
                                /* <AnimatedNumber
                                                                value={  new Intl.NumberFormat().format(TotalbnbinrewardPool)}
                                                                formatValue={(value)=> `BNB ${new Intl.NumberFormat().format(value)}` }
                                                                duration={300}
                                                                /> */
                            }

                            <
                            AnimatedNumber
                        value = {
                            TotalbnbinrewardPool
                        }
                        formatValue = {
                            (value) => `BNB ${new Intl.NumberFormat().format(value)}`
                        }
                        duration = {
                            300
                        }
                        />


                        { /* <p>BNB NaN </p> */ } <
                        /p> <
                        /div> <
                        /div>





                        <
                        div className = "col-xl-4 col-md-6 d-flex align-items-stretch"
                        data - aos = "zoom-in"
                        data - aos - delay = "100" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "icon" >
                            <
                            img src = {
                                Icon4
                            }
                        /> <
                        /div> <
                        h5 > Your $HODL balance < /h5> <
                            p > $HODL {
                                new Intl.NumberFormat().format(LMBalanceuser)
                            } <
                            /p> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /section> <
                            section id = "cta" >

                            <
                            /section>





                            <
                            section id = "services"
                        className = "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2" >
                            <
                            div className = "container"
                        data - aos = "fade-up" >
                            <
                            div className = "row mt-3" >
                            <
                            div className = "col-xl-12 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0"
                        data - aos = "zoom-in"
                        data - aos - delay = "300" >
                            <
                            div className = "icon-box" >
                            <
                            div className = "mb-3 row" >
                            <
                            label
                        for = "staticEmail"
                        className = "col-sm-2 col-form-label pt-0" > Disruptive Transfer
                        between 2 wallets < /label> <
                            div className = "col-sm-10" >
                            Balance: {
                                LMBalanceuser
                            }
                        HODL
                            <
                            /div> <
                            /div> <
                            div className = "mb-3 row" >
                            <
                            label
                        for = "inputPassword"
                        className = "col-sm-2 col-form-label" > Recipient(address) <
                            /label> <
                            div className = "col-sm-10" >
                            <
                            input onKeyUp = {
                                (e) => setaddress(e.target.value)
                            }
                        type = "text"
                        className = "form-control"
                        id = "inputPassword" / >
                            <
                            /div>

                            <
                            /div> <
                            div className = "mb-3 row" >
                            <
                            label
                        for = "inputPassword"
                        className = "col-sm-2 col-form-label" > Amount(HODL) <
                            /label> <
                            div className = "col-sm-10" >
                            <
                            input onKeyUp = {
                                (e) => setValue(e.target.value)
                            }
                        type = "number"
                        className = "form-control"
                        id = "inputPassword" / >
                            <
                            /div> <
                            /div> <
                            div className = "Collect_MONEY mt-5 text-center" >
                            <
                            a onClick = {
                                submitform
                            }
                        className = "COLLECTION_MONEY pl-5 pr-5" > Send < /a> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /section> <
                            /main> <
                            a href = "#"
                        className = "back-to-top" > < i className = "ri-arrow-up-line" > < /i></a >
                            <
                            div id = "preloader" > < /div>


                            <
                            />
                    )

                }
                export default Dashboard;