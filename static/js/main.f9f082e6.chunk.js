(this.webpackJsonphodltoken = this.webpackJsonphodltoken || []).push([
    [0], {
        394: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract HODL","name":"_address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bnbofMainSpool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newfees","type":"uint256"}],"name":"changeFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_newvalue","type":"uint8"}],"name":"changeMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newtime","type":"uint256"}],"name":"changecycleBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkCampaignStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimextraBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endlimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"extendCampaigntime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getBNBrewardshare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getbnbuser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hodltoken","outputs":[{"internalType":"contract HODL","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newadd","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"migrateBnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_starttime","type":"uint256"},{"internalType":"uint256","name":"_stoptime","type":"uint256"},{"internalType":"uint256","name":"_startlimit","type":"uint256"},{"internalType":"uint256","name":"_endlimit","type":"uint256"}],"name":"newcampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"nextAvailableClaimDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startcampaign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startlimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopcampaign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userearning","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        422: function(e, t) {},
        430: function(e, t) {},
        446: function(e, t) {},
        448: function(e, t) {},
        466: function(e, t) {},
        467: function(e, t) {},
        47: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"routerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nextAvailableClaimDate","type":"uint256"}],"name":"ClaimBNBSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ofAddress","type":"address"}],"name":"calculateBNBReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newaddress","type":"address"}],"name":"changeCharityAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newcycle","type":"uint256"}],"name":"changerewardCycleBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newrate","type":"uint256"}],"name":"changethreshHoldTopUpRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"charityAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimBNBReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableEasyRewardFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disruptiveCoverageFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"disruptiveTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"disruptiveTransferEnabledFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"easyRewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newadd","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"migrateBnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newadress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrateToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextAvailableClaimDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeRouter","outputs":[{"internalType":"contract IPancakeRouter02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectionFeesdiabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_value","type":"bool"}],"name":"reflectionfeestartstop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setExcludeFromMaxTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"threshHoldTopUpRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        528: function(e, t) {},
        530: function(e, t) {},
        539: function(e, t) {},
        541: function(e, t) {},
        566: function(e, t) {},
        568: function(e, t) {},
        569: function(e, t) {},
        574: function(e, t) {},
        576: function(e, t) {},
        595: function(e, t) {},
        607: function(e, t) {},
        610: function(e, t) {},
        614: function(e, t) {},
        616: function(e, t) {},
        617: function(e, t) {},
        631: function(e, t) {},
        633: function(e, t) {},
        662: function(e, t) {},
        664: function(e, t) {},
        669: function(e, t) {},
        671: function(e, t) {},
        683: function(e, t) {},
        686: function(e, t) {},
        701: function(e, t) {},
        759: function(e, t, a) {},
        771: function(e, t) {},
        844: function(e, t) {},
        917: function(e, t) {},
        937: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(1),
                s = a.n(n),
                i = a(82),
                c = a.n(i),
                o = (a(405), a.p + "static/media/logo.89f0314d.png"),
                r = a(0);
            var l = function() {
                return Object(r.jsx)("header", {
                    id: "header",
                    className: "fixed-top ",
                    children: Object(r.jsxs)("div", {
                        className: "container d-flex align-items-center",
                        children: [Object(r.jsx)("button", {
                            type: "button",
                            class: "mobile-nav-toggle d-lg-none ",
                            children: Object(r.jsx)("box-icon", {
                                type: "regular",
                                color: "#47b2e4",
                                name: "list-ul"
                            })
                        }), Object(r.jsx)("a", {
                            href: "index.html",
                            className: "logo mr-auto",
                            children: Object(r.jsx)("img", {
                                src: o,
                                alt: "",
                                className: "img-fluid"
                            })
                        }), Object(r.jsx)("nav", {
                            className: "nav-menu d-none d-lg-block",
                            children: Object(r.jsxs)("ul", {
                                children: [Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "#about",
                                        children: "Introduction"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "#tokenomics",
                                        children: "Tokenomics"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "#calc",
                                        children: "Rewards Calculator"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "#why-us",
                                        children: "Roadmap"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "https://hodltoken.gitbook.io/hodl/",
                                        target: "_blank",
                                        children: "Documentation"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        href: "#faq",
                                        children: "FAQs"
                                    })
                                })]
                            })
                        }), Object(r.jsx)("a", {
                            href: "/dashboard",
                            className: "get-started-btn scrollto",
                            children: "Launch App"
                        })]
                    })
                })
            };
            var d = function() {
                return Object(r.jsxs)("footer", {
                    id: "footer",
                    children: [Object(r.jsx)("div", {
                        className: "footer-top",
                        children: Object(r.jsx)("div", {
                            className: "container",
                            children: Object(r.jsxs)("div", {
                                className: "row",
                                children: [Object(r.jsxs)("div", {
                                    className: "col-lg-4 col-md-6 footer-contact",
                                    children: [Object(r.jsx)("img", {
                                        src: o,
                                        alt: "",
                                        className: "img-fluid"
                                    }), Object(r.jsx)("br", {}), Object(r.jsxs)("div", {
                                        className: "social-links mt-3",
                                        children: [Object(r.jsx)("a", {
                                            target: "_blank",
                                            href: "https://twitter.com/TokenHodl",
                                            className: "twitter",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                name: "twitter",
                                                color: "white"
                                            })
                                        }), Object(r.jsx)("a", {
                                            target: "_blank",
                                            href: "https://t.me/hodlinvestorgroup",
                                            className: "twitter",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                name: "telegram",
                                                color: "white"
                                            })
                                        }), Object(r.jsx)("a", {
                                            target: "_blank",
                                            href: "https://www.reddit.com/r/HodlToken/",
                                            className: "twitter",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                name: "reddit",
                                                color: "white"
                                            })
                                        }), Object(r.jsx)("a", {
                                            target: "_blank",
                                            href: "https://github.com/hodltoken",
                                            className: "twitter",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                name: "github",
                                                color: "white"
                                            })
                                        })]
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "col-lg-4 col-md-6 footer-links",
                                    children: [Object(r.jsx)("h4", {
                                        children: "Important Links"
                                    }), Object(r.jsxs)("ul", {
                                        children: [Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                                target: "_blank",
                                                children: "PancakeSwap"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "#calc",
                                                children: "Rewards Calculator"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://hodltoken.net/dashboard",
                                                target: "_blank",
                                                children: "dApp"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://app.unicrypt.network/amm/pancake-v2/pair/0x2941273449aB4eB6FCdf8f84763F017FaE264091",
                                                target: "_blank",
                                                children: "Liquidity Locks"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://bscscan.com/address/0x0e3eaf83ea93abe756690c62c72284943b96a6bc#code",
                                                target: "_blank",
                                                children: "Contract"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://hodltoken.gitbook.io/hodl/",
                                                target: "_blank",
                                                children: "Documentation"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://github.com/hodltoken",
                                                target: "_blank",
                                                children: "Github"
                                            })]
                                        })]
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "col-lg-4 col-md-6 footer-links",
                                    children: [Object(r.jsx)("h4", {
                                        children: "Information"
                                    }), Object(r.jsxs)("ul", {
                                        children: [Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://t.me/hodlinvestorgroup",
                                                target: "_blank",
                                                children: "Join Telegram"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://twitter.com/TokenHodl",
                                                target: "_blank",
                                                children: "Follow Twitter"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://www.coingecko.com/en/coins/hodl-token",
                                                target: "_blank",
                                                children: "CoinGecko"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://coinmarketcap.com/currencies/hodl/",
                                                target: "_blank",
                                                children: "CoinMarketCap"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://www.livecoinwatch.com/price/HodlToken-___HODL",
                                                target: "_blank",
                                                children: "LiveCoinWatch"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://poocoin.app/tokens/0x0e3eaf83ea93abe756690c62c72284943b96a6bc",
                                                target: "_blank",
                                                children: "PooCoin Chart"
                                            })]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("box-icon", {
                                                type: "regular",
                                                pull: "right",
                                                name: "chevron-right",
                                                color: "#47b2e4"
                                            }), " ", Object(r.jsx)("a", {
                                                href: "https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html",
                                                target: "_blank",
                                                children: "Yahoo Finance"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), Object(r.jsxs)("div", {
                        className: "container footer-bottom clearfix",
                        children: [Object(r.jsxs)("div", {
                            className: "copyright",
                            children: ["\xa9 Copyright ", Object(r.jsx)("strong", {
                                children: Object(r.jsx)("span", {
                                    children: "HODLtoken"
                                })
                            }), ". All Rights Reserved"]
                        }), Object(r.jsxs)("div", {
                            className: "credits",
                            children: ["Designed by ", Object(r.jsx)("a", {
                                href: "/",
                                children: "HODL Inc."
                            })]
                        })]
                    })]
                })
            };
            var b = function() {
                    return Object(r.jsx)("section", {
                        id: "cta",
                        children: Object(r.jsx)("div", {
                            className: "container",
                            "data-aos": "zoom-in",
                            children: Object(r.jsxs)("div", {
                                className: "row",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-9 text-center text-lg-left",
                                    children: Object(r.jsx)("h3", {
                                        children: "Stay Connected With Us"
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-3 cta-btn-container text-center",
                                    children: Object(r.jsxs)("div", {
                                        className: "social-links  social_links ",
                                        children: [Object(r.jsx)("a", {
                                            href: "https://twitter.com/TokenHodl",
                                            target: "_blank",
                                            className: "twitter",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                color: "#47b2e4",
                                                name: "twitter"
                                            })
                                        }), Object(r.jsx)("a", {
                                            href: "https://t.me/hodlinvestorgroup",
                                            target: "_blank",
                                            className: "facebook",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                color: "#47b2e4",
                                                name: "telegram"
                                            })
                                        }), Object(r.jsx)("a", {
                                            href: "https://github.com/hodltoken",
                                            target: "_blank",
                                            className: "instagram",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                color: "#47b2e4",
                                                name: "github"
                                            })
                                        }), Object(r.jsx)("a", {
                                            href: "https://www.reddit.com/r/HodlToken/",
                                            target: "_blank",
                                            className: "google-plus",
                                            children: Object(r.jsx)("box-icon", {
                                                type: "logo",
                                                color: "#47b2e4",
                                                name: "reddit"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                u = a(12),
                h = a.p + "static/media/intro.62007da7.mp4",
                j = a.p + "static/media/video.8fd14fa9.jpg",
                m = a.p + "static/media/WhatsApp Image 2021-05-07 at 5.28.09 PM.eb93a437.jpeg",
                p = "";
            var x = function() {
                    var e = Object(n.useState)(!1),
                        t = Object(u.a)(e, 2),
                        a = t[0],
                        s = t[1];
                    return Object(n.useEffect)((function() {
                        p = document.getElementById("my-video")
                    })), Object(r.jsx)("section", {
                        id: "about",
                        className: "about video_section",
                        style: {
                            backgroundImage: "url(".concat(j, ")")
                        },
                        children: Object(r.jsxs)("div", {
                            className: "container aos-init aos-animate",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                className: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "INTRODUCTION"
                                })
                            }), Object(r.jsx)("div", {
                                className: "row",
                                children: Object(r.jsxs)("div", {
                                    className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "100",
                                    children: [a ? "" : Object(r.jsx)("img", {
                                        src: m,
                                        class: "img-fluid",
                                        alt: "",
                                        onClick: function() {
                                            return s(!0), void p.play()
                                        }
                                    }), Object(r.jsx)("video", {
                                        className: "vid",
                                        controls: !0,
                                        poster: m,
                                        id: "my-video",
                                        style: {
                                            display: a ? "" : "none"
                                        },
                                        children: Object(r.jsx)("source", {
                                            src: h,
                                            type: "video/mp4"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                O = "data:image/png;base64,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",
                A = "data:image/png;base64,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",
                y = a.p + "static/media/world.4f7bc8c2.jpg";
            var g = function() {
                    return Object(r.jsx)("section", {
                        id: "services",
                        className: "services section-bg section_feature",
                        style: {
                            backgroundImage: "url(".concat(y, ")")
                        },
                        children: Object(r.jsxs)("div", {
                            className: "container",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                className: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "FEATURES"
                                })
                            }), Object(r.jsxs)("div", {
                                className: "row",
                                children: [Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "300",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: "data:image/png;base64,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"
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "Earn $BNB by hodling $HODL"
                                            })
                                        }), Object(r.jsxs)("p", {
                                            children: ["4% of every transaction is taken and redistributed to all $HODL holders in ", Object(r.jsx)("strong", {
                                                children: "$BNB"
                                            }), ". Accumulate $BNB by hodling the $HODL Token !"]
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch   mt-md-0",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "200",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: O
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "Automatic Liquidity Pool"
                                            })
                                        }), Object(r.jsx)("p", {
                                            children: "4% of every transaction contributes toward automatically generating further liquidity on Pancake Swap. Benefiting long term for $HODL holders the most!"
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "300",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: A
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "RFI Static Rewards"
                                            })
                                        }), Object(r.jsx)("p", {
                                            children: "2% of every transaction is taken and re distributed to all $HODL holders. The burn address is also a holder thus each transaction helps deflate the supply."
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "400",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: "data:image/png;base64,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"
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "Inbuilt Anti-Whale Mechanism"
                                            })
                                        }), Object(r.jsxs)("p", {
                                            children: ["Transaction (Sell/Buy) that trade more than 1% of the total supply will be rejected. ", Object(r.jsx)("br", {}), "Whales who make transfer (between 2 wallets) that is larger than 1% of the total supply will be charged 1BNB which will further be donated to Charities"]
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "400",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: "data:image/png;base64,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"
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "Highly Secured"
                                            })
                                        }), Object(r.jsx)("p", {
                                            children: "All Initial Liquidity Provided will be locked with Unicrypt. The contract is Trustless for $HODL community. We will release the audit reports shortly as they are under progress."
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-xl-4 col-md-6 d-flex align-items-stretch",
                                    "data-aos": "zoom-in",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsxs)("div", {
                                        className: "icon-box",
                                        children: [Object(r.jsx)("div", {
                                            className: "icon",
                                            children: Object(r.jsx)("img", {
                                                src: "data:image/png;base64,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"
                                            })
                                        }), Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: "",
                                                children: "Built for the Community"
                                            })
                                        }), Object(r.jsxs)("p", {
                                            children: ["$HODL is a community driven token built on Binance Chain. It will be available on Unicrypt for Presale with No Transaction Fee for early investors.", Object(r.jsx)("br", {}), "PCS Launch price will see atleast 10%  uplift and introduction of transaction fee\u2019s ."]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                f = a(4),
                w = a.n(f),
                v = a(28),
                N = a(37),
                B = a.n(N),
                k = a(47);
            var M = function() {
                var e = Object(n.useState)(0),
                    t = Object(u.a)(e, 2),
                    a = t[0],
                    s = t[1],
                    i = Object(n.useState)(0),
                    c = Object(u.a)(i, 2),
                    o = c[0],
                    l = c[1],
                    d = Object(n.useState)(0),
                    b = Object(u.a)(d, 2),
                    h = b[0],
                    j = b[1],
                    m = Object(n.useState)(0),
                    p = Object(u.a)(m, 2),
                    x = (p[0], p[1]),
                    O = Object(n.useState)(0),
                    A = Object(u.a)(O, 2),
                    y = A[0],
                    g = A[1],
                    f = Object(n.useState)(0),
                    N = Object(u.a)(f, 2),
                    M = N[0],
                    C = N[1],
                    T = Object(n.useState)(0),
                    D = Object(u.a)(T, 2),
                    E = D[0],
                    S = D[1],
                    Q = Object(n.useState)(0),
                    L = Object(u.a)(Q, 2),
                    I = L[0],
                    U = L[1],
                    F = Object(n.useState)(0),
                    V = Object(u.a)(F, 2),
                    W = V[0],
                    P = V[1];

                function H() {
                    return (H = Object(v.a)(w.a.mark((function e(t) {
                        var a, n, s;
                        return w.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x(t);
                                case 2:
                                    return a = Number(t), n = Number(Number(t) * h * .9).toFixed(0), e.next = 6, g(n);
                                case 6:
                                    return e.next = 8, C((Number(t) * h * .9 / Number(709271212874876) * E).toFixed(5));
                                case 8:
                                    return e.next = 10, U((Number(t) * h * .9 / Number(709271212874876) * E * 364).toFixed(2));
                                case 10:
                                    return s = Number(t) * h * .9 / Number(709271212874876) * E * 364, e.next = 13, P(Number(Number(364 * a / s).toFixed(0)).toFixed(0));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Y() {
                    var e = new B.a("https://bsc-dataseed1.binance.org:443"),
                        t = k,
                        n = new e.eth.Contract(t, "0x0e3eaf83ea93abe756690c62c72284943b96a6bc");
                    e.eth.getBalance("0x0e3eaf83ea93abe756690c62c72284943b96a6bc").then((function(t) {
                        var a = e.utils.toBN(t).toString();
                        S(e.utils.fromWei(a, "ether"))
                    }));
                    new e.eth.Contract([{
                        constant: !0,
                        inputs: [{
                            name: "",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }], "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c").methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(t) {
                        var a = e.utils.toBN(t).toString();
                        l(e.utils.fromWei(a, "ether"))
                    })), n.methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(t) {
                        var a = e.utils.toBN(t).toString(),
                            n = e.utils.toWei(a, "Gwei");
                        s(e.utils.fromWei(n, "ether"))
                    }));
                    var i = Number(1e6) * Number(o) / Number(a) / Number(1e6);
                    j(Number(1 / i))
                }
                return Object(n.useEffect)((function() {
                    Y();
                    setInterval(Y, 5e5)
                })), Object(r.jsxs)("div", {
                    children: [Object(r.jsx)("section", {
                        id: "calc",
                        className: "faq section-bg modal_hodlInsvetmentcal",
                        children: Object(r.jsxs)("div", {
                            class: "container aos-init aos-animate",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                class: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "HODL Investment & Rewards Calculator"
                                })
                            }), Object(r.jsxs)("div", {
                                className: "row",
                                children: [Object(r.jsx)("div", {
                                    class: "col-md-12",
                                    children: Object(r.jsx)("div", {
                                        class: "ist_cal"
                                    })
                                }), Object(r.jsx)("div", {
                                    class: "col-md-12",
                                    children: Object(r.jsx)("div", {
                                        class: "ist_tab text-center"
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "rewardcalc",
                                    children: Object(r.jsxs)("table", {
                                        class: "table table-striped table-bordered text-center",
                                        children: [Object(r.jsx)("thead", {
                                            children: Object(r.jsxs)("tr", {
                                                children: [Object(r.jsx)("th", {
                                                    scope: "col",
                                                    children: "Enter BNB Amount to Invest "
                                                }), Object(r.jsxs)("th", {
                                                    scope: "col",
                                                    children: ["$HODL Token", Object(r.jsx)("br", {}), "Balance"]
                                                }), Object(r.jsxs)("th", {
                                                    scope: "col",
                                                    children: ["Daily Rewards ", Object(r.jsx)("br", {}), "  (BNB)* "]
                                                }), Object(r.jsxs)("th", {
                                                    scope: "col",
                                                    children: ["Yearly Rewards ", Object(r.jsx)("br", {}), "  (BNB)* "]
                                                }), Object(r.jsx)("th", {
                                                    scope: "col",
                                                    children: "Days to Recover Initial Investment By Rewards"
                                                })]
                                            })
                                        }), Object(r.jsx)("tbody", {
                                            children: Object(r.jsxs)("tr", {
                                                children: [Object(r.jsxs)("th", {
                                                    scope: "row",
                                                    children: [" ", Object(r.jsx)("input", {
                                                        type: "text",
                                                        class: "form-control",
                                                        id: "text",
                                                        placeholder: "Enter BNB Amount",
                                                        onChange: function(e) {
                                                            return function(e) {
                                                                return H.apply(this, arguments)
                                                            }(e.target.value)
                                                        }
                                                    })]
                                                }), Object(r.jsx)("td", {
                                                    children: (new Intl.NumberFormat).format(y)
                                                }), Object(r.jsx)("td", {
                                                    children: M
                                                }), Object(r.jsx)("td", {
                                                    children: I
                                                }), Object(r.jsx)("td", {
                                                    children: W
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    class: "button_cacla",
                                    children: Object(r.jsx)("a", {
                                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                        class: "btn-get-started scrollto",
                                        target: "_blank",
                                        children: "Buy $HODL"
                                    })
                                })]
                            }), Object(r.jsx)("br", {}), Object(r.jsx)("p", {
                                className: "text-center",
                                children: "*These are estimates and not a financial advice. Pool and Rewards are always changing based on buys, sells, collects by others and your percentage holdings."
                            })]
                        })
                    }), Object(r.jsx)("section", {
                        id: "tokenomics",
                        className: "about",
                        children: Object(r.jsxs)("div", {
                            className: "container",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                className: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "TOKENOMICS"
                                })
                            }), Object(r.jsxs)("div", {
                                className: "row content",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-6",
                                    children: Object(r.jsx)("section", {
                                        id: "skills",
                                        className: "skills",
                                        children: Object(r.jsx)("div", {
                                            className: "container",
                                            "data-aos": "fade-up",
                                            children: Object(r.jsx)("div", {
                                                className: "row",
                                                children: Object(r.jsx)("div", {
                                                    className: "col-lg-12 pt-4 pt-lg-0 content",
                                                    "data-aos": "fade-left",
                                                    "data-aos-delay": "100",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "skills-content",
                                                        children: [Object(r.jsxs)("div", {
                                                            className: "progress",
                                                            children: [Object(r.jsxs)("span", {
                                                                className: "skill",
                                                                children: ["Presale & Launch ", Object(r.jsx)("i", {
                                                                    className: "val",
                                                                    children: "66.4%"
                                                                })]
                                                            }), Object(r.jsx)("div", {
                                                                className: "progress-bar-wrap",
                                                                children: Object(r.jsx)("div", {
                                                                    className: "progress-bar",
                                                                    role: "progressbar",
                                                                    "aria-valuenow": "66",
                                                                    "aria-valuemin": "0",
                                                                    "aria-valuemax": "100"
                                                                })
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "progress",
                                                            children: [Object(r.jsxs)("span", {
                                                                className: "skill",
                                                                children: ["Burn ", Object(r.jsx)("i", {
                                                                    className: "val",
                                                                    children: "23.6%"
                                                                })]
                                                            }), Object(r.jsx)("div", {
                                                                className: "progress-bar-wrap",
                                                                children: Object(r.jsx)("div", {
                                                                    className: "progress-bar",
                                                                    role: "progressbar",
                                                                    "aria-valuenow": "23",
                                                                    "aria-valuemin": "0",
                                                                    "aria-valuemax": "100"
                                                                })
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "progress",
                                                            children: [Object(r.jsxs)("span", {
                                                                className: "skill",
                                                                children: ["Airdrops ", Object(r.jsx)("i", {
                                                                    className: "val",
                                                                    children: "5%"
                                                                })]
                                                            }), Object(r.jsx)("div", {
                                                                className: "progress-bar-wrap",
                                                                children: Object(r.jsx)("div", {
                                                                    className: "progress-bar",
                                                                    role: "progressbar",
                                                                    "aria-valuenow": "5",
                                                                    "aria-valuemin": "0",
                                                                    "aria-valuemax": "100"
                                                                })
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "progress",
                                                            children: [Object(r.jsxs)("span", {
                                                                className: "skill",
                                                                children: ["Team & Marketing", Object(r.jsx)("i", {
                                                                    className: "val",
                                                                    children: "5%"
                                                                })]
                                                            }), Object(r.jsx)("div", {
                                                                className: "progress-bar-wrap",
                                                                children: Object(r.jsx)("div", {
                                                                    className: "progress-bar",
                                                                    role: "progressbar",
                                                                    "aria-valuenow": "5",
                                                                    "aria-valuemin": "0",
                                                                    "aria-valuemax": "100"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "col-lg-6 pt-4 pt-lg-0 token_stuff",
                                    children: [Object(r.jsxs)("p", {
                                        children: [Object(r.jsx)("strong", {
                                            children: "Total Supply: "
                                        }), "  1 Quadrillion $HODL"]
                                    }), Object(r.jsxs)("ul", {
                                        children: [Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("i", {
                                                className: "ri-check-double-line"
                                            }), " 66.4% for Presale & launch. 100% liquidity locked for 6 months"]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("i", {
                                                className: "ri-check-double-line"
                                            }), " 5% for airdrop (Locked till distribution)"]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("i", {
                                                className: "ri-check-double-line"
                                            }), " Team only gets 1% which is locked, and 4% for marketing."]
                                        }), Object(r.jsxs)("li", {
                                            children: [Object(r.jsx)("i", {
                                                className: "ri-check-double-line"
                                            }), " We burnt 23.6%."]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            };
            var C = function() {
                return Object(r.jsx)("section", {
                    id: "cta",
                    children: Object(r.jsx)("div", {
                        className: "container",
                        "data-aos": "zoom-in",
                        children: Object(r.jsxs)("div", {
                            className: "row official_information",
                            children: [Object(r.jsxs)("div", {
                                className: "col-lg-4 text-center text-lg-left",
                                children: [Object(r.jsx)("h3", {
                                    children: "Official Smart Contract"
                                }), Object(r.jsx)("br", {}), Object(r.jsx)("a", {
                                    className: "cta-btn align-middle",
                                    href: "https://bscscan.com/address/0x0e3eaf83ea93abe756690c62c72284943b96a6bc#code",
                                    target: "_blank",
                                    children: "Click Here!"
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "col-lg-4 text-center text-lg-left burn",
                                children: [Object(r.jsx)("h3", {
                                    children: "Audit Report"
                                }), Object(r.jsx)("br", {}), Object(r.jsx)("a", {
                                    className: "cta-btn align-middle",
                                    href: "https://github.com/TechRate/Smart-Contract-Audits/blob/main/HODL.pdf",
                                    target: "_blank",
                                    children: "Click Here!"
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "col-lg-4 text-center text-lg-left",
                                children: [Object(r.jsx)("h3", {
                                    children: "Liquidity Locks"
                                }), Object(r.jsx)("br", {}), Object(r.jsx)("a", {
                                    className: "cta-btn align-middle",
                                    href: "https://app.unicrypt.network/amm/pancake-v2/pair/0x2941273449aB4eB6FCdf8f84763F017FaE264091",
                                    target: "_blank",
                                    children: "Click Here!"
                                })]
                            })]
                        })
                    })
                })
            };
            var T = function() {
                return Object(r.jsx)("section", {
                    id: "why-us",
                    className: "why-us section-bg",
                    children: Object(r.jsxs)("div", {
                        className: "container-fluid",
                        "data-aos": "fade-up",
                        children: [Object(r.jsx)("div", {
                            className: "section-title",
                            children: Object(r.jsx)("h2", {
                                children: "ROADMAP"
                            })
                        }), Object(r.jsx)("div", {
                            className: "row card_main",
                            children: Object(r.jsx)("div", {
                                className: "col-lg-12",
                                children: Object(r.jsx)("div", {
                                    className: "row",
                                    children: Object(r.jsx)("div", {
                                        className: "col-md-12",
                                        children: Object(r.jsx)("div", {
                                            className: "card",
                                            children: Object(r.jsx)("div", {
                                                className: "card-body",
                                                children: Object(r.jsx)("div", {
                                                    id: "content",
                                                    children: Object(r.jsxs)("ul", {
                                                        className: "timeline",
                                                        children: [Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "3 months ago",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: Object(r.jsx)("head", {
                                                                    children: " H-PROTOCOL INITIALIZED"
                                                                })
                                                            }), Object(r.jsx)("p", {
                                                                children: "We prepared the main features and completed the R&D."
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "Sold Out",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "PRE-SALE"
                                                            }), Object(r.jsx)("p", {
                                                                children: "The token will be available for Pre-Sale with benefits of No transaction Fee and 10% Lower price than PCS Launch."
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "12 May, 2021",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "LAUNCH ON PANCAKESWAP"
                                                            }), Object(r.jsx)("p", {
                                                                children: " 100% of the Liquidity will be locked for 6 months."
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "Ongoing",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "MARKETING"
                                                            }), Object(r.jsx)("p", {
                                                                children: "Continuous marketing to promote the project."
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "16 May, 2021",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "CoinGecko, CoinLiveWatch, CoinMarketCap Tracked"
                                                            }), Object(r.jsxs)("p", {
                                                                children: ["Partnership completed with ", Object(r.jsx)("a", {
                                                                    href: "https://www.coingecko.com/en/coins/hodl-token",
                                                                    target: "_blank",
                                                                    children: "CoinGecko"
                                                                }), ", ", Object(r.jsx)("a", {
                                                                    href: "https://www.livecoinwatch.com/price/HodlToken-___HODL",
                                                                    target: "_blank",
                                                                    children: "CoinLiveWatch"
                                                                }), ", ", Object(r.jsx)("a", {
                                                                    href: "https://coinmarketcap.com/currencies/hodl/",
                                                                    target: "_blank",
                                                                    children: "CoinMarketCap"
                                                                }), "."]
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "Ongoing",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "PARTNERSHIP"
                                                            }), Object(r.jsx)("p", {
                                                                children: "Partnership with listing sites: Nomics, Blockfolio, and exchanges like BitMart"
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "in 4 month",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "NFT LAUNCHING"
                                                            }), Object(r.jsx)("p", {
                                                                children: "NFT launching. We will deliver NFT with Arts-come-later model."
                                                            })]
                                                        }), Object(r.jsxs)("li", {
                                                            className: "event",
                                                            "data-date": "in 6 month",
                                                            children: [Object(r.jsx)("h3", {
                                                                children: "GAMIFICATION"
                                                            }), Object(r.jsx)("p", {
                                                                children: "We will be launching multiple games to utilize and earn more Tokens/BNB. You earn by competing with others, betting or predicting crypto prices."
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            };
            var D = function() {
                    return Object(r.jsx)("section", {
                        id: "faq",
                        className: "faq section-bg",
                        children: Object(r.jsxs)("div", {
                            className: "container",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                className: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "FAQ"
                                })
                            }), Object(r.jsx)("div", {
                                className: "faq-list",
                                children: Object(r.jsxs)("ul", {
                                    children: [Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "100",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            className: "collapse",
                                            href: "#faq-list-1",
                                            children: ["How many BNB can I claim?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-1",
                                            className: "collapse show",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "You can claim the amount of the BNB based on the ratio of $HODL you hold/the total BNB pool. For example, you hold 1% of $HODL, you can withdraw 1% of the BNB reward pool."
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "200",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-2",
                                            className: "collapsed",
                                            children: ["What is the BNB pool?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-2",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "4% of every transaction is taken and re-distributed to all Hodl holders in $BNB. This amount of BNB called the BNB pool."
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "300",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-3",
                                            className: "collapsed",
                                            children: ["What if I don\u2019t claim BNB reward in my cycle?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-3",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "If you don\u2019t claim at your cycle and other holders claim, the BNB pool will reduce. So then the ratio of your $HODL/BNB pool reduces as well. That\u2019s why you should claim as soon as your cycle is ready"
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "400",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-4",
                                            className: "collapsed",
                                            children: ["What do I need to do to passively earn BNB?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-4",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "Simply holding $HODL will earn you a share of the BNB rewards pool, proportional to the amount of $HODL you hold. You will also earn $HODL passively too, which gets put straight in your wallet"
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-5",
                                            className: "collapsed",
                                            children: ["When can I claim my BNB?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-5",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "The specific time you can claim depends on a few factors. The collection time is every 24 hours. Be aware however, that if you purchase a significant amount more $HODL than your initial purchase, your collection time will be moved back, and if you sell all your $HODL and buy back in, your collection date will be pushed years out into the future. This is not a bug, it's a feature that helps prevent scalping."
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-6",
                                            className: "collapsed",
                                            children: ["What time zone is the Hodl app on? (relating to reward claim timer)", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-6",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: "It syncs to your device time so the answer is whatever time zone you are in."
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-7",
                                            className: "collapsed",
                                            children: ["How can I claim my BNB?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-7",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: 'Simply have your wallet connected through the Hodl Dapp on the website, click "Collect my bnb". Please note that you must have BNB in your wallet that will be used to cover transfer fees.'
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-8",
                                            className: "collapsed",
                                            children: ["Does my BNB stack if I don't claim it?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-8",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsx)("p", {
                                                children: 'No. This is because it\'s not "your" BNB, meaning it is not an amount of BNB that is set aside for you, but rather a set share of the pool of BNB. As people claim their BNB, the total pool will decrease, which in turn means the BNB value of your set share will decrease. In short, it is best to claim your BNB as soon as possible.'
                                            })
                                        })]
                                    }), Object(r.jsxs)("li", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500",
                                        children: [Object(r.jsx)("span", {
                                            className: "icon-help",
                                            children: Object(r.jsx)("box-icon", {
                                                name: "help-circle",
                                                pull: "left",
                                                color: "#47b2e4"
                                            })
                                        }), " ", Object(r.jsxs)("a", {
                                            "data-toggle": "collapse",
                                            href: "#faq-list-9",
                                            className: "collapsed",
                                            children: ["Why is my collectible BNB less than yesterday?", Object(r.jsx)("span", {
                                                className: "icon-show",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-down",
                                                    color: "#37517e"
                                                })
                                            }), Object(r.jsx)("span", {
                                                className: "icon-close",
                                                children: Object(r.jsx)("box-icon", {
                                                    name: "chevron-up",
                                                    color: "#47b2e4"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            id: "faq-list-9",
                                            className: "collapse",
                                            "data-parent": ".faq-list",
                                            children: Object(r.jsxs)("p", {
                                                children: ["Several factors impact BNB claim amount.", Object(r.jsx)("br", {}), "1. The amount of BNB in the pool is distributed based on percentage. The more BNB there, the more you get, however, it is ALWAYS based on percentage. The less there, the less you get. IT IS NOT CUMULATIVE", Object(r.jsx)("br", {}), "2. The more people claim, the less BNB will be available for everyone else", Object(r.jsx)("br", {}), "3. There is a cycle before you can collect BNB and the more transactions you make with this coin, the more the cycle changes. Be aware of that when you are thinking of selling high to buy low"]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                E = a.p + "static/media/hero-img.0be0f924.png";
            var S = function() {
                    return Object(r.jsx)("section", {
                        id: "about",
                        className: "about",
                        children: Object(r.jsxs)("div", {
                            className: "container",
                            "data-aos": "fade-up",
                            children: [Object(r.jsx)("div", {
                                className: "section-title",
                                children: Object(r.jsx)("h2", {
                                    children: "TEAM"
                                })
                            }), Object(r.jsxs)("div", {
                                className: "row content team_hodl",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-4"
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-4",
                                    children: Object(r.jsxs)("div", {
                                        className: "shape",
                                        children: [Object(r.jsx)("img", {
                                            src: E,
                                            className: "img-fluid animated",
                                            alt: ""
                                        }), Object(r.jsx)("h4", {
                                            children: "Andrew - Head of Strategy"
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-4"
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "row content team_hodl",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-4",
                                    children: Object(r.jsxs)("div", {
                                        className: "shape",
                                        children: [Object(r.jsx)("img", {
                                            src: E,
                                            className: "img-fluid animated",
                                            alt: ""
                                        }), Object(r.jsx)("h4", {
                                            children: "Allen - Marketing Lead"
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-4",
                                    children: Object(r.jsxs)("div", {
                                        className: "shape",
                                        children: [Object(r.jsx)("img", {
                                            src: E,
                                            className: "img-fluid animated",
                                            alt: ""
                                        }), Object(r.jsx)("h4", {
                                            children: "Justin - Collaborations & Partnerships"
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-4",
                                    children: Object(r.jsxs)("div", {
                                        className: "shape",
                                        children: [Object(r.jsx)("img", {
                                            src: E,
                                            className: "img-fluid animated",
                                            alt: ""
                                        }), Object(r.jsx)("h4", {
                                            children: "JC Wright - Lead Developer"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                Q = a(3),
                L = a.n(Q);
            a(752), a(753), a(754);
            var I = function() {
                    L()("#preloader").length && L()("#preloader").delay(1750).fadeOut("slow", (function() {
                        L()(this).remove()
                    }));
                    var e = L()("#header").outerHeight() - 2;
                    if (L()(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", (function(t) {
                            if (window.location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && window.location.hostname == this.hostname) {
                                var a = L()(this.hash);
                                if (a.length) {
                                    t.preventDefault();
                                    var n = a.offset().top - e;
                                    return "#header" == L()(this).attr("href") && (n = 0), L()("html, body").animate({
                                        scrollTop: n
                                    }, 1500), L()(this).parents(".nav-menu, .mobile-nav").length && (L()(".nav-menu .active, .mobile-nav .active").removeClass("active"), L()(this).closest("li").addClass("active")), L()("body").hasClass("mobile-nav-active") && (L()("body").removeClass("mobile-nav-active"), L()(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), L()(".mobile-nav-overly").fadeOut()), !1
                                }
                            }
                        })), window.location.hash) {
                        var t = window.location.hash;
                        if (L()(t).length) {
                            var a = L()(t).offset().top - e;
                            L()("html, body").animate({
                                scrollTop: a
                            }, 1500)
                        }
                    }
                    if (L()(".nav-menu").length) {
                        var n = L()(".nav-menu").clone().prop({
                            class: "mobile-nav d-lg-none"
                        });
                        L()("body").append(n), L()("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'), L()("body").append('<div class="mobile-nav-overly"></div>'), L()(document).on("click", ".mobile-nav-toggle", (function(e) {
                            L()("body").toggleClass("mobile-nav-active"), L()(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), L()(".mobile-nav-overly").toggle()
                        })), L()(document).on("click", ".mobile-nav .drop-down > a", (function(e) {
                            e.preventDefault(), L()(this).next().slideToggle(300), L()(this).parent().toggleClass("active")
                        })), L()(document).on("click", (function(e) {
                            var t = L()(".mobile-nav, .mobile-nav-toggle");
                            t.is(e.target) || 0 !== t.has(e.target).length || L()("body").hasClass("mobile-nav-active") && (L()("body").removeClass("mobile-nav-active"), L()(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), L()(".mobile-nav-overly").fadeOut())
                        }))
                    } else L()(".mobile-nav, .mobile-nav-toggle").length && L()(".mobile-nav, .mobile-nav-toggle").hide();
                    var s = L()("section"),
                        i = L()(".nav-menu, #mobile-nav");
                    L()(window).on("scroll", (function() {
                        var e = L()(this).scrollTop() + 200;
                        s.each((function() {
                            var t = L()(this).offset().top,
                                a = t + L()(this).outerHeight();
                            e >= t && e <= a && (e <= a && i.find("li").removeClass("active"), i.find('a[href="#' + L()(this).attr("id") + '"]').parent("li").addClass("active")), e < 300 && L()(".nav-menu ul:first li:first").addClass("active")
                        })), L()(this).scrollTop() > 100 ? (L()("#header").addClass("header-scrolled"), L()(".back-to-top").fadeIn("slow")) : (L()("#header").removeClass("header-scrolled"), L()(".back-to-top").fadeOut("slow"))
                    })), L()(window).scrollTop() > 100 && L()("#header").addClass("header-scrolled"), L()(".back-to-top").on("click", (function() {
                        return L()("html, body").animate({
                            scrollTop: 0
                        }, 1500), !1
                    })), L()(".progress .progress-bar").each((function() {
                        L()(this).css("width", L()(this).attr("aria-valuenow") + "%")
                    })), L()(".collapse").collapse();
                    for (var c = function(e) {
                            e.preventDefault(), e.target.classList.remove("button_box"), e.target.classList.add("button_box"), setTimeout((function() {
                                e.target.classList.remove("button_box")
                            }), 700)
                        }, o = document.getElementsByClassName("bubbly-button"), r = 0; r < o.length; r++) o[r].addEventListener("click", c, !1)
                },
                U = a(6),
                F = a(9),
                V = a(18),
                W = a(17),
                P = a.p + "static/media/background.2ea02b14.jpg",
                H = a(138),
                Y = a.n(H),
                R = a(35),
                z = a.n(R),
                G = a(50),
                q = a.n(G),
                J = function(e) {
                    Object(V.a)(a, e);
                    var t = Object(W.a)(a);

                    function a(e) {
                        var n;
                        return Object(U.a)(this, a), (n = t.call(this, e)).getCenter = function() {
                            var e = new B.a("https://bsc-dataseed1.binance.org:443"),
                                t = k,
                                a = new e.eth.Contract(t, "0x0e3eaf83ea93abe756690c62c72284943b96a6bc");
                            a.methods._maxTxAmount().call().then((function(t) {
                                var a = e.utils.toBN(t).toString(),
                                    s = e.utils.toWei(a, "Gwei");
                                n.setState({
                                    maxTransactionAmount: e.utils.fromWei(s, "ether")
                                })
                            })), e.eth.getBalance("0x0e3eaf83ea93abe756690c62c72284943b96a6bc").then((function(t) {
                                var a = e.utils.toBN(t).toString();
                                n.setState({
                                    TotalbnbinrewardPool: e.utils.fromWei(a, "ether")
                                })
                            })), e.eth.getBalance("0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8").then((function(t) {
                                var a = e.utils.toBN(t).toString();
                                n.setState({
                                    charitybnb: e.utils.fromWei(a, "ether")
                                })
                            }));
                            new e.eth.Contract([{
                                constant: !0,
                                inputs: [{
                                    name: "",
                                    type: "address"
                                }],
                                name: "balanceOf",
                                outputs: [{
                                    name: "",
                                    type: "uint256"
                                }],
                                payable: !1,
                                stateMutability: "view",
                                type: "function"
                            }], "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c").methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(t) {
                                var a = e.utils.toBN(t).toString();
                                n.setState({
                                    LPbnb: e.utils.fromWei(a, "ether")
                                })
                            })), a.methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(t) {
                                var a = e.utils.toBN(t).toString(),
                                    s = e.utils.toWei(a, "Gwei");
                                n.setState({
                                    LMbalanceLPpool: e.utils.fromWei(s, "ether")
                                })
                            })), a.methods.balanceOf("0x728a0b0b113e915a64ddb2182F62F2661CC617B0").call().then((function(t) {
                                var a = e.utils.toBN(t).toString(),
                                    s = e.utils.toWei(a, "Gwei");
                                n.setState({
                                    adminbalance: e.utils.fromWei(s, "ether")
                                })
                            })), a.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call().then((function(t) {
                                var a = e.utils.toBN(t).toString(),
                                    s = e.utils.toWei(a, "Gwei"),
                                    i = Number(1e15) - Number(e.utils.fromWei(s, "ether")) - Number(n.state.adminbalance);
                                n.setState({
                                    circulatingSupply: i
                                })
                            })), (new Y.a).simple.price({
                                ids: ["binancecoin"],
                                vs_currencies: ["usd"]
                            }).then((function(e) {
                                n.setState({
                                    oneBNBprice: e.data.binancecoin.usd
                                })
                            }))
                        }, n.formatValue = function(e) {
                            return "$ ".concat((new Intl.NumberFormat).format(e))
                        }, n.formatNormalValue = function(e) {
                            return "$ ".concat(e.toFixed(8))
                        }, n.formatBNB = function(e) {
                            return "BNB ".concat((new Intl.NumberFormat).format(e))
                        }, n.state = {
                            maxTransactionAmount: 0,
                            TotalbnbinrewardPool: 0,
                            LMbalanceLPpool: 0,
                            oneBNBprice: 0,
                            LPbnb: 0,
                            circulatingSupply: 0,
                            adminbalance: 0,
                            charitybnb: 0
                        }, n
                    }
                    return Object(F.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            new B.a("https://bsc-dataseed1.binance.org:443");
                            this.getCenter(), this.interval = setInterval(this.getCenter, 5e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = Number(1e6) * Number(this.state.LPbnb) / Number(this.state.LMbalanceLPpool) * this.state.oneBNBprice / Number(1e6);
                            return Object(r.jsx)("section", {
                                id: "hero",
                                className: "d-flex align-items-center banner_hero",
                                style: {
                                    backgroundImage: "url(".concat(P, ")")
                                },
                                children: Object(r.jsxs)("div", {
                                    className: "container",
                                    children: [Object(r.jsxs)("div", {
                                        className: "row",
                                        children: [Object(r.jsxs)("div", {
                                            className: "col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "200",
                                            children: [Object(r.jsx)("h1", {
                                                children: "EARN MORE BY HOLDING "
                                            }), " ", Object(r.jsx)("br", {}), Object(r.jsx)("h2", {
                                                className: "mb-3 welcome_content",
                                                children: "HODL works on an autonomous frictionless yield farming and liquidity generation protocol. "
                                            }), Object(r.jsxs)("h2", {
                                                className: "mb-3 welcome_content",
                                                children: ["Simply hold $HODL tokens in your wallet and you will get more. In addition to this, you will also earn daily rewards in $BNB.", Object(r.jsx)("p", {}), Object(r.jsx)("p", {
                                                    children: "Accumulating Wealth Was Never This Simple!"
                                                })]
                                            }), Object(r.jsxs)("div", {
                                                className: "d-lg-flex",
                                                children: [Object(r.jsx)("a", {
                                                    href: "/dashboard",
                                                    className: "btn-get-started scrollto",
                                                    target: "_blank",
                                                    children: "Launch App"
                                                }), Object(r.jsx)("a", {
                                                    href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                                    className: "btn-get-started scrollto ",
                                                    target: "_blank",
                                                    children: "Buy Now"
                                                })]
                                            })]
                                        }), Object(r.jsx)("div", {
                                            className: "col-lg-6 order-1 order-lg-2 hero-img  ",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "200",
                                            children: Object(r.jsx)("img", {
                                                src: E,
                                                className: "img-fluid animated",
                                                alt: ""
                                            })
                                        })]
                                    }), Object(r.jsx)("div", {
                                        className: "row pt-5 pb-3 price_coin",
                                        children: Object(r.jsx)("div", {
                                            className: "col-lg-12",
                                            children: Object(r.jsxs)("div", {
                                                className: "d-lg-flex abc",
                                                children: [Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto",
                                                    children: ["Max Transaction Amount", Object(r.jsx)("br", {}), "$HODL ", (new Intl.NumberFormat).format(this.state.maxTransactionAmount)]
                                                }), Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto ",
                                                    children: ["1 Mil HODL Price", Object(r.jsx)("br", {}), Object(r.jsx)(q.a, {
                                                        value: (Number(1e6) * Number(this.state.LPbnb) / Number(this.state.LMbalanceLPpool) * this.state.oneBNBprice).toFixed(10),
                                                        formatValue: this.formatNormalValue,
                                                        duration: 300
                                                    })]
                                                }), Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto ",
                                                    children: ["Total Liquidity Pool", Object(r.jsx)("br", {}), Object(r.jsx)(q.a, {
                                                        value: (this.state.oneBNBprice * this.state.LPbnb * 2).toFixed(2),
                                                        formatValue: this.formatValue,
                                                        duration: 300
                                                    })]
                                                }), Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto ",
                                                    children: ["Reward Pool", Object(r.jsx)("br", {}), Object(r.jsx)(q.a, {
                                                        value: this.state.TotalbnbinrewardPool,
                                                        formatValue: this.formatBNB,
                                                        duration: 300
                                                    })]
                                                }), Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto ",
                                                    children: ["Charity Pool", Object(r.jsx)("br", {}), Object(r.jsx)(q.a, {
                                                        value: this.state.charitybnb,
                                                        formatValue: this.formatBNB,
                                                        duration: 300
                                                    })]
                                                }), Object(r.jsxs)("a", {
                                                    className: "btn-get-started scrollto ",
                                                    children: ["HODL Marketcap", Object(r.jsx)("br", {}), Object(r.jsx)(q.a, {
                                                        value: (this.state.circulatingSupply * e).toFixed(2),
                                                        formatValue: this.formatValue,
                                                        duration: 300
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }
                    }]), a
                }(n.Component);
            a.p, a(392);
            var X = function() {
                    return Object(n.useEffect)((function() {
                        I()
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(l, {}), Object(r.jsx)(J, {}), Object(r.jsxs)("main", {
                            id: "main",
                            children: [Object(r.jsx)(b, {}), Object(r.jsx)(x, {}), Object(r.jsx)(g, {}), Object(r.jsx)(M, {}), Object(r.jsx)(C, {}), Object(r.jsx)(T, {}), Object(r.jsx)(b, {}), Object(r.jsx)(D, {}), Object(r.jsx)("br", {}), Object(r.jsx)(S, {})]
                        }), Object(r.jsx)(d, {}), Object(r.jsx)("a", {
                            href: "#",
                            className: "back-to-top",
                            children: Object(r.jsx)("i", {
                                className: "ri-arrow-up-line"
                            })
                        }), Object(r.jsx)("div", {
                            id: "preloader",
                            children: Object(r.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MjJFREY1QjJFRTExRUJBQjg3Qjk0NDJENzM3NTk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3MjJFREY2QjJFRTExRUJBQjg3Qjk0NDJENzM3NTk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDcyMkVERjNCMkVFMTFFQkFCODdCOTQ0MkQ3Mzc1OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDcyMkVERjRCMkVFMTFFQkFCODdCOTQ0MkQ3Mzc1OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fPO1cAAADAFBMVEWZ292L19n6/P3P6O53us4+mbiWzdo+fbNlu8m00+PN3OrW6fB1zdF309JNhLg4mbc9vL+VudZltMjU4+9nmsNIwcPt+Plky8zP4u01pbg1kbRVm78+lLddqsTZ8fI2obiy3OQ2rbozc67R6u+Qw9Y1mban2uFFqr49pLozoLc+lrh1wc/x+vpkw8uy4eVhrMY2ub1ao8JJtME9rrw9qLs+hLRJu8K/2OfZ7vI9sr3u9fjO5u49tr4+hrU2qbk2nbc9prs9qrw9uL5Pw8U9sL0+grT2+vwsjbE9ur8+ibW52eU4fbGLs9KKv9Q4jbU9rLy/1eY2tbw9tb41erA1vL01hrJdvcg+obrd7vM5irQ6sbw1lLWV19s+j7aiydxdnME6tr06qrs5erE4gLI+krc9oro5pro+jbZ0ocg+jraOutQ6ub41sLoymbU4krU+nLnD6+s9vsBUtMTx9vlezMvq8/c4nrg+nrk+gLM5rLtBnLq41+T0+fs4ork1gbHl9vY1ibPE4+r5+/xho8NmsMdduseixNvh8fQ5vr++3Of1/Pw1jbQ4hLM4wL/g9fU7gLKaz9sykbS0zeFcxco9kbb8/f49wMAyibI7h7Q5hrM8k7a+0+U+irary98zjbNRlby+4ehdtccxvbwwnrZ6xdEyhbGEztU4lra/3ugzrLrK5ey86uktpLY9nrk0qLk1t7w9e7I6nLiHrM9FiLanyd0xgrA5d7A9obp5ytIzsbszlLQ8irWizN09hbQ7rrxOlLyMztdToL9Wo8E3sLs3srwvkbJWvsahytvf7vMzo7g9iLQ9gLQyj7Q9grQ1dq/////+///9/v7+/v/+/v4+irX8/v49tL0+orr9//4+n7na5vD9/v89n7m74OeevtlvztBhksDP3+zH2Om/2ufB3+hXqcK50eRptsrn8Pbb7PIuvrtEv8J1x9D9//9Cj7g+i7aCwNJBfrRupcjW5u9opsU8o7k7mLfn7vU0tLs0i7M8jbU9jLY9j7aVx9hPmr3///90IaTQAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAACKFJREFUeNp02A1cVFUWAPABI6QkWFMUARERhRGJFWhFhJkRJPEDNoMdgUi+FREIFcFUILQkhdRkCNnS/GjNFIRKSQjTdC0wfR/DQKbrVmy1ra3srksrmTudc+57M4+Jjv78/Qbe+8+595173r2qzMODN4q8WRR53mwbvCDw8I/tL1TDPwpGni4cOfB23sZW2VzAC6LiB/aBbhVuO+wVV/CYxa8BohH/SrFjcpDdmL3Rt26Nj17vrDr+sr0iC2WKCgC/XvrNDl+7S+np6fn5+a4Q1dXVtfXrVZMlg/9MOQwrIJhFKbfA6ZcuXuydN2/e/PkLF6JQDFFdWzvh+A7rV9kCHNzP2M3TZ19ICe/tXUaClaivr61df9wkJyEMBzhRGhjvu/bY2ZhwCJlggisK9bX/sOOkyTTzwwBB+rz5XNTGkJAYEsJ7ly2zTeKQM8dxkvCZAhDMJvpxxcEoXUIICjEWYdhMJDrzHG8vjZm3ALwo0P2+M3J1Ol1UVNRGH4gLEJYk8oODg10RgAycK5hAz0IlFynE27m5oRBrX8D4A8YleSbyo/fu3Vvs6proLHLc+vEVbBT4tQiYzDSl2wcHtXC/+yiDwWAymDDmhKewcdwNMpncxue7Jo6BDCYciqbn+U+8DwAjuz9wxgZ/rVYb6u7LWWIyAJTEmSCOC3w83zWYACgJkzwIlSgINAGGsZrBQRTcR1mBOTEp7Iki4PZ4/sKTBCTWH6LHiYNQAWJAbXeBvq9v0N9fuwUA35lHjhzZznNzQlhNhDMgfb4EFBcfelZ6+ipBFHEKl/vd0Ov1fZAEAPxfDne5n4ChIEDCGgm4C4A4IRgquziQBiGooH3AH8PXraXXrhHhDRm80RUamotAglRWxxgw7y5lEAxFkWiHhXTdrBIIeKm9qKi0FAU9A7QM0GWwslICIgKu1Ykv0yyoRLzf/rxLEQQm0bYBgQCtVgISqDIZkLLszBiog1nBWJmJf8XiEVQib+TNi9odHEgovXaDAf7+BIRm6Ki2CZid0nvmfRjCrCeptoMpBRUyBq9GBweJaGolACaTgFCobUiiOUhEIHzN9zwAJ2l5BNtZ1sJ3hWo1AEddMAoiANDkDDIglxHNUzgJoAzY8rgVKAMfT1JDPOdF8fXDHPeWRp9DgHeXO0Rz84kpPABnw48RcJEtsJPPSoBpa6GnWl3oVWVPAdP0hp9evwGA7aPHjqZ44XnMYGMMAy6wNXrSTgJK6rI9PT0LHxMtJfyWH0ymYk1QuM3OCGHAGtYo0qOrGNAfj0Lh+U2LKOYiAJM5EhAFgDhrDfYaFCoY8Ex8GgqNkyBSU/8cgUBRU+t3NoD97IyE5u+xDnyklvnkKABgVS0BIB6ikGIPA4pa//WgMnY/eG6GTtc8EzPwkVrm3SAzlrLhv8k/3v6tJT7Cp5AKJeFXgHG44DBEwOGuE7A+COBG+0gt8+LTlEGsR0eyxzp7S4gIUFUVsdVBq1yL3SqUAVFS3075E83B5g8BGD5cAFhlNjXduNHW1pbDeg30OwlgfTvlfQKqDnR0fOi0yRLwFF6aBJX5A1Vmq6Z1A4S3t/cWELoYwFp/uI+cQXdPR1JSUiXE0M6hVyfyCKhTl0ZERIxSxkFvLQOaaYGFxJyVMljRENfTM3DvXnJycnz8zqGJHNcPwJ4PbB4j9623NoAAd1pgISE+5wgQ/7OvOy6up+O2B8X/7wCw01P96S+Asd7+ATNFBKQ1uvFpVkhLaiIju+P2rdgcSyEQ4ImAcfvyTyiWz0VAk6PBOgAA12hCQlQQA17PigShZqt1LfTvzPbcD0DsRw7PUbjc5xHo01AG3qEk6DJ8oaEAMDErrDOyu/OAk9M3ThDwZf1DddkEnE9V/wDR2j6NMtBrHqChsKLQ6dwgA+hI6969AkJkQ3l5eVLSm6fgKfRXptUNfYwZsFbjwAAXvZ8MoJB70MSA66uywsI6O3EccXEd++Ap/K4yLe1VBM4XYquRgG1+pRIgVdVuM60Fs/mbpxaEhYWRAJNJQJ4MeJKwhwFFDNCw2u6agwBuC0t2XV5gIQhIWpn35jMIxEOrAYEBR2VAnwPElrX2BMAYxFWLFzABiBoCBu5JADYrTwUg0lzgSzBgOuvKmMLnT5WVyQQDXhsgwAOaFRKfAiBuS3VIhQzEsS6wSPty2uYSIBqhpRjGZcpCWM2XCHT3SEBaHRL7MQOvJ9qf+BYy2OaCy1xzn/aG9G6EFK46ljHiShZmUN4dd4qA5LQ06HfZCIjPOy1yehuH4gKNokkfiHtTfDfic+DfkQUJiOw+9SIBeXlI7J9mLVMEikoLpphx0yyozCyFdf9ucSTichYM4fflkZGn3uO46x7JK1eiMDRNsahgMotcHjPQax0mkWdbnK+mOjoicXkxAWGR5avv3Jl4oGHgHhKVD3z+sCW8jjo4uJSYMQNRtGyyuN8wgQGLqSYaoFG8RkJe3k91dXWNEOpGrO32v8l7TRXbZ8NH4yoSHDMJuMKKAhsFtBpZyM5uZHX1Ab7UYX8NWxzrRrVq3NUWGbDUNhBSEjiX9A5UqyctFWmDjpsrejvDHgmF2C+utrTIgLW2MQkLgWW1fymNGSZAsdk20F591dSWltMElCmEbmqZOBOYRF38fQObAMG6W5c/Vd28epoBjmVlIycR/9Mmyt/A7rAcOIzSgeOhR6YC8EcqqzLLArMQP1Zu/YQdvaQDgvLIww58c99hgKNc29ZxDAwk3349VrqfHRAUhy4QjOzMVwXA1BZHmbAk0bBvYHUJXWEUrSc/lfLUyY5tUKwPPXL6dKYyibDOmpoV7/3deiE/0sETjs2CkQAh9qslXzhmZmYupti1691xNx+tkq+SU/3l0VdEG5YInauq/vflKzeXQKx+8ZVHSwyW063N6dj28A0bVygK8VdO33C74nQ8EgBJiLxoNo8kiPi/Akbbo/3PAgwAnLiYQXQQIhgAAAAASUVORK5CYII=",
                                class: "loader_image"
                            })
                        })]
                    })
                },
                K = (a(759), function(e) {
                    e && e instanceof Function && a.e(3).then(a.bind(null, 944)).then((function(t) {
                        var a = t.getCLS,
                            n = t.getFID,
                            s = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        a(e), n(e), s(e), i(e), c(e)
                    }))
                }),
                Z = (a(760), a(761), a(762), a(393)),
                _ = a.n(Z),
                $ = a(396),
                ee = a(26),
                te = a.p + "static/media/1.fb0df6ad.png",
                ae = a.p + "static/media/2.971e85f3.png",
                ne = a.p + "static/media/3.a1eb3a53.png",
                se = a.p + "static/media/4.9ad508cd.jpg",
                ie = a.p + "static/media/5.aa9dff1e.png",
                ce = a.p + "static/media/img6.775efa74.jpeg",
                oe = a.p + "static/media/img7.79fa1de9.jpeg",
                re = a.p + "static/media/img8.1fdc6832.jpeg",
                le = a.p + "static/media/img9.97684a01.jpeg",
                de = a.p + "static/media/img10.735d245c.jpeg",
                be = a.p + "static/media/img11.c2f605b8.jpeg",
                ue = a.p + "static/media/img12.65153cd6.jpeg";
            var he = function() {
                return Object(n.useEffect)((function() {
                    I()
                })), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(l, {}), Object(r.jsx)("section", {
                        id: "hero",
                        className: "d-flex align-items-center",
                        children: Object(r.jsxs)("div", {
                            className: "container",
                            children: [Object(r.jsx)("div", {
                                className: "row",
                                children: Object(r.jsxs)("div", {
                                    className: "col-lg-12 d-flex flex-column justify-content-center text-center pt-4 pt-lg-0 order-2 order-lg-1",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "200",
                                    children: [Object(r.jsx)("h1", {
                                        children: "How to Buy $HOLD "
                                    }), Object(r.jsx)("h2", {
                                        className: "mb-3 welcome_content",
                                        children: "via MetaMask on the browser (Laptop/PC)"
                                    })]
                                })
                            }), Object(r.jsxs)("div", {
                                className: "row pt-5 pb-3 price_coin",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-12",
                                    children: Object(r.jsxs)("div", {
                                        className: "d-lg-flex price_guide justify-content-center",
                                        children: [Object(r.jsxs)("a", {
                                            href: "#about",
                                            className: "btn-get-started scrollto",
                                            children: ["Create MetaMask", Object(r.jsx)("br", {}), "Wallet"]
                                        }), Object(r.jsxs)("a", {
                                            href: "#about",
                                            className: "btn-get-started scrollto ",
                                            children: ["Buy $HOLD on", Object(r.jsx)("br", {}), "PancakeSwap"]
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "d-lg-flex price_guide justify-content-center cbnb mt-2",
                                    children: Object(r.jsxs)("a", {
                                        href: "#about",
                                        className: "btn-get-started scrollto ",
                                        children: ["Collect", Object(r.jsx)("br", {}), "$BNB"]
                                    })
                                })]
                            }), Object(r.jsx)("br", {})]
                        })
                    }), Object(r.jsxs)("main", {
                        id: "main",
                        children: [Object(r.jsx)("section", {
                            id: "about",
                            className: "about video_section",
                            children: Object(r.jsxs)("div", {
                                className: "container aos-init aos-animate",
                                "data-aos": "fade-up",
                                children: [Object(r.jsx)("div", {
                                    className: "section-title",
                                    children: Object(r.jsx)("h2", {
                                        children: "Create the metamask wallet"
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "row",
                                    children: [Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice  mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "1. Download/Install MetaMask from Chrome at this link: https://metamask.io/download.html"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: te,
                                                className: "img-thumbnail"
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "2. Open a wallet or import one, be sure to store your keyphrase safely"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: ae,
                                                className: "img-thumbnail  "
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "3. Setting BSC network - You can buy HODL (HODL) with the BSC network only."
                                                })]
                                            }), Object(r.jsxs)("div", {
                                                className: "guidee_image",
                                                children: [Object(r.jsx)("img", {
                                                    src: ne,
                                                    className: "img-thumbnail  "
                                                }), Object(r.jsx)("img", {
                                                    src: se,
                                                    className: "img-thumbnail  "
                                                })]
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: ["The BSC Network information ", Object(r.jsx)("br", {}), "1. Network Name: ", Object(r.jsx)("span", {
                                                    children: "BSC Mainnet"
                                                }), " ", Object(r.jsx)("br", {}), "2. New RPC URL: ", Object(r.jsx)("span", {
                                                    children: "https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/"
                                                }), " ", Object(r.jsx)("br", {}), "3. ChainID: ", Object(r.jsx)("span", {
                                                    children: "56, or 0x38 if 56 doesn\u2019t work"
                                                }), " ", Object(r.jsx)("br", {}), "4. Symbol: ", Object(r.jsx)("span", {
                                                    children: "BNB"
                                                }), " ", Object(r.jsx)("br", {}), "5. Block Explorer URL: ", Object(r.jsx)("span", {
                                                    children: "https://bscscan.com/"
                                                })]
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "4. After saving, you\u2019re now connected to the BSC network"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: ie,
                                                className: "img-thumbnail  "
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: [Object(r.jsxs)("span", {
                                                    children: ["Be sure that you transfer BNB to your wallet to buy $HOLD \u2026 ", Object(r.jsx)("br", {}), "Now, we can access HODL DApp and link to PancakeSwap to buy $HOLD."]
                                                }), " ", Object(r.jsx)("br", {})]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), Object(r.jsx)("section", {
                            id: "about",
                            className: "about video_section",
                            children: Object(r.jsxs)("div", {
                                className: "container aos-init aos-animate",
                                "data-aos": "fade-up",
                                children: [Object(r.jsx)("div", {
                                    className: "section-title",
                                    children: Object(r.jsx)("h2", {
                                        children: "Buy $HOLD on PancakeSwap"
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "row",
                                    children: [Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice  mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsxs)("strong", {
                                                    children: ["1. Access https://HODLtoken.net/dashboard ", Object(r.jsx)("br", {}), "Click on the ", Object(r.jsx)("a", {
                                                        href: "#",
                                                        children: "Buy $HOLD"
                                                    }), " button to redirect to Pancakeswap and buy..."]
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: ce,
                                                className: "img-thumbnail  "
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                className: "text-left",
                                                children: [" ", Object(r.jsxs)("strong", {
                                                    children: ["2. Buy HODL on Pancakeswap ", Object(r.jsx)("br", {}), "- Step 1: Check I understand -", ">", " Click \u201cContinue\u201d"]
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: oe,
                                                className: "img-thumbnail  "
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: ["Note: if you can\u2019t see this popup, try to reload this page again and make sure your internet is good ", Object(r.jsx)("br", {}), "1.  If you have not connected to the wallet, please connect it before you buy. Make sure your wallet is on BSC Network. ", Object(r.jsx)("br", {}), "2.  After connecting to the wallet, fill out the number of HODL you want to buy ", Object(r.jsx)("br", {}), " ", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                                    children: "*Tip: You can see the maximum transaction amount of HODL/BNB on the HODLtoken.net (The anti-whales feature)"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: re,
                                                className: "img-thumbnail guide_mainimage "
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsxs)("strong", {
                                                    children: [" Step 3: After filling out the amount and setting the Slippage Tolerance, Click on Swap -", ">", " Confirm Swap to buy HODL"]
                                                })]
                                            }), Object(r.jsxs)("div", {
                                                className: "guidee_image",
                                                children: [Object(r.jsx)("img", {
                                                    src: le,
                                                    className: "img-thumbnail  "
                                                }), Object(r.jsx)("img", {
                                                    src: de,
                                                    className: "img-thumbnail  "
                                                })]
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "- Step 4: Confirm to buy HODL on the MetaMask extension"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: be,
                                                className: "img-thumbnail  "
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: [Object(r.jsxs)("span", {
                                                    children: ["Be sure that you transfer BNB to your wallet to buy HODL \u2026 ", Object(r.jsx)("br", {}), "Now, we can access HODL DApp and link to PancakeSwap to buy HODL."]
                                                }), " ", Object(r.jsx)("br", {})]
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "- Step 5: Now you can see the result here:"
                                                })]
                                            }), Object(r.jsx)("div", {
                                                className: "guidee_image",
                                                children: Object(r.jsx)("img", {
                                                    src: ue,
                                                    className: "img-thumbnail  "
                                                })
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: [Object(r.jsxs)("span", {
                                                    children: ["Be sure that you transfer BNB to your wallet to buy HODL \u2026 ", Object(r.jsx)("br", {}), "Now, we can access HODL DApp and link to PancakeSwap to buy HODL."]
                                                }), " ", Object(r.jsx)("br", {})]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), Object(r.jsx)("section", {
                            id: "about",
                            className: "about video_section",
                            children: Object(r.jsxs)("div", {
                                className: "container aos-init aos-animate",
                                "data-aos": "fade-up",
                                children: [Object(r.jsx)("div", {
                                    className: "section-title",
                                    children: Object(r.jsx)("h2", {
                                        children: "Collect $BNB"
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "row",
                                    children: [Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice  mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "- Back to the MoonRat Dapp to check your amount, the time you can claim BNB from the reward pool"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: te,
                                                className: "img-thumbnail"
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "2. Open a wallet or import one, be sure to store your keyphrase safely"
                                                })]
                                            }), Object(r.jsx)("img", {
                                                src: ae,
                                                className: "img-thumbnail  "
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "col-lg-12 video-box align-self-baseline aos-init aos-animate ",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "100",
                                        children: Object(r.jsxs)("div", {
                                            className: "guide_notice mb-5",
                                            children: [Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "3. Setting BSC network - You can buy HODL (HODL) with the BSC network only."
                                                })]
                                            }), Object(r.jsxs)("div", {
                                                className: "guidee_image",
                                                children: [Object(r.jsx)("img", {
                                                    src: ne,
                                                    className: "img-thumbnail  "
                                                }), Object(r.jsx)("img", {
                                                    src: se,
                                                    className: "img-thumbnail  "
                                                })]
                                            }), Object(r.jsxs)("p", {
                                                className: "mt-5",
                                                children: ["The BSC Network information ", Object(r.jsx)("br", {}), "1. Network Name: ", Object(r.jsx)("span", {
                                                    children: "BSC Mainnet"
                                                }), " ", Object(r.jsx)("br", {}), "2. New RPC URL: ", Object(r.jsx)("span", {
                                                    children: "https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/"
                                                }), " ", Object(r.jsx)("br", {}), "3. ChainID: ", Object(r.jsx)("span", {
                                                    children: "56, or 0x38 if 56 doesn\u2019t work"
                                                }), " ", Object(r.jsx)("br", {}), "4. Symbol: ", Object(r.jsx)("span", {
                                                    children: "BNB"
                                                }), " ", Object(r.jsx)("br", {}), "5. Block Explorer URL: ", Object(r.jsx)("span", {
                                                    children: "https://bscscan.com/"
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), Object(r.jsx)(d, {}), Object(r.jsx)("a", {
                        href: "#",
                        className: "back-to-top",
                        children: Object(r.jsx)("i", {
                            className: "ri-arrow-up-line"
                        })
                    }), Object(r.jsx)("div", {
                        id: "preloader"
                    })]
                })
            };
            var je = function() {
                return Object(n.useEffect)((function() {
                    I()
                })), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(l, {}), Object(r.jsx)("main", {
                        id: "main",
                        children: Object(r.jsx)("section", {
                            id: "services",
                            className: "services section-bg section_feature ",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                "data-aos": "fade-up",
                                children: Object(r.jsx)("div", {
                                    className: "row",
                                    children: Object(r.jsx)("div", {
                                        className: "col-xl-12 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0",
                                        "data-aos": "zoom-in",
                                        "data-aos-delay": "300",
                                        children: Object(r.jsxs)("div", {
                                            className: "icon-box terms mt-5",
                                            children: [Object(r.jsx)("h2", {
                                                children: "Privacy Policy"
                                            }), Object(r.jsxs)("p", {
                                                children: [" ", Object(r.jsx)("strong", {
                                                    children: "Last Updated: April 26, 2021"
                                                })]
                                            }), Object(r.jsxs)("p", {
                                                children: ["We ", Object(r.jsx)("strong", {
                                                    children: "HODL"
                                                }), "  (HODL.com), are committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this ", Object(r.jsx)("strong", {
                                                    children: "Privacy Policy"
                                                }), "."]
                                            }), Object(r.jsx)("p", {
                                                children: "We are committed to protecting your privacy."
                                            }), Object(r.jsx)("p", {
                                                children: 'We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PI", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.'
                                            }), Object(r.jsx)("h4", {
                                                children: "Information Collected"
                                            }), Object(r.jsx)("p", {
                                                children: "We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser."
                                            }), Object(r.jsx)("h4", {
                                                children: "Information Use"
                                            }), Object(r.jsx)("p", {
                                                children: "This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. RunePay may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time."
                                            }), Object(r.jsx)("p", {
                                                children: "We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications."
                                            }), Object(r.jsx)("h4", {
                                                children: "Cookies"
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }), Object(r.jsx)(d, {}), Object(r.jsx)("a", {
                        href: "#",
                        className: "back-to-top",
                        children: Object(r.jsx)("i", {
                            className: "ri-arrow-up-line"
                        })
                    }), Object(r.jsx)("div", {
                        id: "preloader"
                    })]
                })
            };
            var me = function() {
                    return Object(n.useEffect)((function() {
                        I()
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(l, {}), Object(r.jsx)("main", {
                            id: "main",
                            children: Object(r.jsx)("section", {
                                id: "services",
                                className: "services section-bg section_feature",
                                children: Object(r.jsx)("div", {
                                    className: "container",
                                    "data-aos": "fade-up",
                                    children: Object(r.jsx)("div", {
                                        className: "row",
                                        children: Object(r.jsx)("div", {
                                            className: "col-xl-12 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "300",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box terms mt-5",
                                                children: [Object(r.jsx)("h2", {
                                                    children: "Terms and Conditions"
                                                }), Object(r.jsx)("p", {
                                                    children: Object(r.jsx)("strong", {
                                                        children: "Last updated: April 26, 2021"
                                                    })
                                                }), Object(r.jsx)("h4", {
                                                    children: "Please read these terms and conditions carefully before using Our Service."
                                                }), Object(r.jsx)("h3", {
                                                    children: "Interpretation and Definitions"
                                                }), Object(r.jsx)("h4", {
                                                    children: "Interpretation"
                                                }), Object(r.jsx)("p", {
                                                    children: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Definitions"
                                                }), Object(r.jsxs)("p", {
                                                    children: ["  ", Object(r.jsx)("strong", {
                                                        children: "For the purposes of these Terms and Conditions:"
                                                    }), " "]
                                                }), Object(r.jsxs)("p", {
                                                    children: ["  ", Object(r.jsx)("strong", {
                                                        children: "Country refers to:"
                                                    }), " Utah, United States. "]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "HODL.COM "
                                                    }), '(referred to as either "the HODL.COM", "We", "Us" or "Our" in this Agreement) refers to ', Object(r.jsx)("strong", {
                                                        children: "HODL.COM."
                                                    })]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Affiliate"
                                                    }), ' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.']
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Device"
                                                    }), " means any device that can access the ", Object(r.jsx)("strong", {
                                                        children: "Service"
                                                    }), " such as a computer, a cellphone or a digital tablet."]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Service"
                                                    }), " refers to the Website."]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Terms and Conditions"
                                                    }), " (also referred as ", Object(r.jsx)("strong", {
                                                        children: '"Terms"'
                                                    }), ") mean these ", Object(r.jsx)("strong", {
                                                        children: "Terms and Conditions"
                                                    }), " that form the entire agreement between You and the HODL.COM regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator."]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Third-party Social Media Service"
                                                    }), " means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. "]
                                                }), Object(r.jsxs)("p", {
                                                    children: [" ", Object(r.jsx)("strong", {
                                                        children: "Website"
                                                    }), " refers to HODL, accessible from https://hodl.com and all sub-domains belong to https://hodl.com"]
                                                }), Object(r.jsxs)("p", {
                                                    children: ["You means the individual accessing or using the ", Object(r.jsx)("strong", {
                                                        children: "Service,"
                                                    }), "  or the ", Object(r.jsx)("strong", {
                                                        children: "HODL.COM"
                                                    }), ", or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]
                                                }), Object(r.jsx)("h4", {
                                                    children: "Acknowledgment"
                                                }), Object(r.jsx)("p", {
                                                    children: "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the HODL.COM. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service."
                                                }), Object(r.jsx)("p", {
                                                    children: "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service."
                                                }), Object(r.jsx)("p", {
                                                    children: "By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service."
                                                }), Object(r.jsx)("p", {
                                                    children: "You represent that you are over the age of 18. The HODL.COM does not permit those under 18 to use the Service."
                                                }), Object(r.jsx)("p", {
                                                    children: "Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the HODL.COM. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Links to Other Websites"
                                                }), Object(r.jsx)("p", {
                                                    children: "Our Service may contain links to third-party web sites or services that are not owned or controlled by the HODL.COM."
                                                }), Object(r.jsx)("p", {
                                                    children: "The HODL.COM has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the HODL.COM shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services."
                                                }), Object(r.jsx)("p", {
                                                    children: "We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Termination"
                                                }), Object(r.jsx)("p", {
                                                    children: "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."
                                                }), Object(r.jsx)("p", {
                                                    children: "Upon termination, Your right to use the Service will cease immediately."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Limitation of Liability"
                                                }), Object(r.jsx)("p", {
                                                    children: "Notwithstanding any damages that You might incur, the entire liability of the HODL.COM and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service."
                                                }), Object(r.jsx)("p", {
                                                    children: "To the maximum extent permitted by applicable law, in no event shall the HODL.COM or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the HODL.COM or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."
                                                }), Object(r.jsx)("p", {
                                                    children: "Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law."
                                                }), Object(r.jsx)("h4", {
                                                    children: '"AS IS" and "AS AVAILABLE" Disclaimer'
                                                }), Object(r.jsx)("p", {
                                                    children: 'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the HODL.COM, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the HODL.COM provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.'
                                                }), Object(r.jsxs)("p", {
                                                    children: ["Without limiting the foregoing, neither the HODL.COM nor any of the HODL.COM's provider makes any representation or warranty of any kind, express or implied:", Object(r.jsx)("br", {}), "(i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon;", Object(r.jsx)("br", {}), "(ii) that the Service will be uninterrupted or error-free;", Object(r.jsx)("br", {}), "(iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or ", Object(r.jsx)("br", {}), "(iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the HODL.COM are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."]
                                                }), Object(r.jsx)("p", {
                                                    children: "Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Governing Law"
                                                }), Object(r.jsx)("p", {
                                                    children: "The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Disputes Resolution"
                                                }), Object(r.jsx)("p", {
                                                    children: "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the HODL.COM."
                                                }), Object(r.jsx)("h4", {
                                                    children: "For European Union (EU) Users"
                                                }), Object(r.jsx)("p", {
                                                    children: "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in."
                                                }), Object(r.jsx)("h4", {
                                                    children: "United States Legal Compliance"
                                                }), Object(r.jsxs)("p", {
                                                    children: ["You represent and warrant that ", Object(r.jsx)("br", {}), '(i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and ', Object(r.jsx)("br", {}), "(ii) You are not listed on any United States government list of prohibited or restricted parties."]
                                                }), Object(r.jsx)("h3", {
                                                    children: "Severability and Waiver"
                                                }), Object(r.jsx)("h4", {
                                                    children: "Severability"
                                                }), Object(r.jsx)("p", {
                                                    children: "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Waiver"
                                                }), Object(r.jsx)("p", {
                                                    children: "Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Translation Interpretation"
                                                }), Object(r.jsx)("p", {
                                                    children: "These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Changes to These Terms and Conditions"
                                                }), Object(r.jsx)("p", {
                                                    children: "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion."
                                                }), Object(r.jsx)("p", {
                                                    children: "By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."
                                                }), Object(r.jsx)("h4", {
                                                    children: "Contact Us"
                                                }), Object(r.jsxs)("p", {
                                                    children: ["If you have any questions about these Terms and Conditions, ", Object(r.jsx)("br", {}), "You can contact us: ", Object(r.jsx)("br", {}), "By email: hello@hodl.com"]
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        }), Object(r.jsx)(d, {}), Object(r.jsx)("a", {
                            href: "#",
                            className: "back-to-top",
                            children: Object(r.jsx)("i", {
                                className: "ri-arrow-up-line"
                            })
                        }), Object(r.jsx)("div", {
                            id: "preloader"
                        })]
                    })
                },
                pe = (a(345), a(394)),
                xe = (a(346), a(386), a(395)),
                Oe = a.n(xe),
                Ae = function() {
                    var e = Object(v.a)(w.a.mark((function e() {
                        var t, a, n, s;
                        return w.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = localStorage.getItem("loginType"), !(window.ethereum || window.BinanceChain || B.a.givenProvider)) {
                                        e.next = 38;
                                        break
                                    }
                                    if ("metamask" !== t) {
                                        e.next = 17;
                                        break
                                    }
                                    return a = new B.a(window.ethereum || B.a.givenProvider), window.web3 = a, e.next = 7, a.eth.requestAccounts();
                                case 7:
                                    return e.next = 9, a.eth.net.getId();
                                case 9:
                                    if (56 != (n = e.sent)) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 14:
                                    z()("Change Network to Binance Mainet");
                                case 15:
                                    e.next = 36;
                                    break;
                                case 17:
                                    if ("binance" !== t) {
                                        e.next = 36;
                                        break
                                    }
                                    if (!window.BinanceChain) {
                                        e.next = 33;
                                        break
                                    }
                                    return s = new B.a(window.BinanceChain), e.next = 22, s.eth.requestAccounts();
                                case 22:
                                    return e.next = 24, s.eth.net.getId();
                                case 24:
                                    if (n = e.sent, console.log("ID", n), 56 != n) {
                                        e.next = 30;
                                        break
                                    }
                                    return e.abrupt("return", s);
                                case 30:
                                    z()("Change Network to Binance Mainet");
                                case 31:
                                    e.next = 36;
                                    break;
                                case 33:
                                    return e.next = 35, z()("Please Install Binance Wallet!!");
                                case 35:
                                    window.location.reload();
                                case 36:
                                    e.next = 40;
                                    break;
                                case 38:
                                    window.addEventListener("ethereum#initialized", ye, {
                                        once: !0
                                    }), setTimeout(ye, 3e3);
                                case 40:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

            function ye() {
                return ge.apply(this, arguments)
            }

            function ge() {
                return (ge = Object(v.a)(w.a.mark((function e() {
                    return w.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Oe()();
                            case 2:
                                if (!e.sent) {
                                    e.next = 7;
                                    break
                                }
                                Ae(), e.next = 10;
                                break;
                            case 7:
                                return e.next = 9, z()("Please Install Wallet!");
                            case 9:
                                window.location.reload();
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var fe = {
                    getWeb3Client: Ae,
                    claimBNB: function() {
                        var e = Object(v.a)(w.a.mark((function e(t) {
                            var a, n, s, i, c, o, r, l;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("Claim BNB called => ", t), a = k, n = "0x0e3eaf83ea93abe756690c62c72284943b96a6bc", s = new t.eth.Contract(a, n), i = s.methods.claimBNBReward(), e.next = 7, t.eth.getAccounts();
                                    case 7:
                                        return c = e.sent, e.next = 10, i.estimateGas({
                                            from: c[0]
                                        });
                                    case 10:
                                        return o = e.sent, e.next = 13, t.eth.getGasPrice();
                                    case 13:
                                        return r = e.sent, l = {
                                            from: c[0],
                                            to: n,
                                            data: i.encodeABI(),
                                            gasPrice: t.utils.toHex(r),
                                            gasLimit: t.utils.toHex(o + 1e4)
                                        }, e.abrupt("return", new Promise((function(e, a) {
                                            t.eth.sendTransaction(l).on("transactionHash", (function(e, t) {
                                                t ? (console.log("1", t), a(t)) : console.log("HASH", e)
                                            })).on("confirmation", (function(t, a) {
                                                e(a)
                                            })).on("error", (function(e) {
                                                console.log("2", e), a(e)
                                            }))
                                        })));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    disruptiveTransfertokens: function() {
                        var e = Object(v.a)(w.a.mark((function e(t, a, n) {
                            var s, i, c, o, r, l, d, b, u;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("Disruptive Transfer called => ", t, a, n), s = k, i = "0x0e3eaf83ea93abe756690c62c72284943b96a6bc", c = new t.eth.Contract(s, i), console.log("value", n), o = t.utils.toWei(n, "ether"), r = o.slice(0, -9), l = c.methods.disruptiveTransfer(a, r), e.next = 10, t.eth.getAccounts();
                                    case 10:
                                        return d = e.sent, e.next = 13, t.eth.getGasPrice();
                                    case 13:
                                        return b = e.sent, u = {
                                            from: d[0],
                                            to: i,
                                            data: l.encodeABI(),
                                            gasPrice: t.utils.toHex(b),
                                            gasLimit: t.utils.toHex(8e5),
                                            value: t.utils.toHex(t.utils.toWei("1", "ether"))
                                        }, e.abrupt("return", new Promise((function(e, a) {
                                            t.eth.sendTransaction(u).on("transactionHash", (function(e, t) {
                                                t ? (console.log("1", t), a(t)) : console.log("HASH", e)
                                            })).on("confirmation", (function(t, a) {
                                                e(a)
                                            })).on("error", (function(e) {
                                                console.log("2", e), a(e)
                                            }))
                                        })));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, a, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    claimextraBNB: function() {
                        var e = Object(v.a)(w.a.mark((function e(t) {
                            var a, n, s, i, c, o, r, l;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("Claim BNB called => ", t), a = pe, n = "", s = new t.eth.Contract(a, n), i = s.methods.claimextraBNB(), e.next = 7, t.eth.getAccounts();
                                    case 7:
                                        return c = e.sent, e.next = 10, i.estimateGas({
                                            from: c[0]
                                        });
                                    case 10:
                                        return o = e.sent, e.next = 13, t.eth.getGasPrice();
                                    case 13:
                                        return r = e.sent, l = {
                                            from: c[0],
                                            to: n,
                                            data: i.encodeABI(),
                                            gasPrice: t.utils.toHex(r),
                                            gasLimit: t.utils.toHex(o + 1e4)
                                        }, e.abrupt("return", new Promise((function(e, a) {
                                            t.eth.sendTransaction(l).on("transactionHash", (function(e, t) {
                                                t ? (console.log("1", t), a(t)) : console.log("HASH", e)
                                            })).on("confirmation", (function(t, a) {
                                                e(a)
                                            })).on("error", (function(e) {
                                                console.log("2", e), a(e)
                                            }))
                                        })));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                we = (a.p, a.p + "static/media/MathWallet.4eddacc8.jpeg"),
                ve = (a(931), function(e) {
                    Object(V.a)(a, e);
                    var t = Object(W.a)(a);

                    function a(e) {
                        var n;
                        return Object(U.a)(this, a), (n = t.call(this, e)).logoutUser = Object(v.a)(w.a.mark((function e() {
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        localStorage.removeItem("provider"), window.sessionStorage.removeItem("walletAddress"), window.sessionStorage.removeItem("walletName"), window.location.reload();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.requestAuth = Object(v.a)(w.a.mark((function e() {
                            var t;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, console.log("Metamask auth requested"), localStorage.setItem("loginType", "metamask"), e.next = 5, fe.getWeb3Client();
                                    case 5:
                                        return t = e.sent, e.next = 8, n.userLogin(t);
                                    case 8:
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0), console.error(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        }))), n.requestAuthBSC = Object(v.a)(w.a.mark((function e() {
                            var t;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, console.log("Metamask auth requested"), localStorage.setItem("loginType", "binance"), e.next = 5, fe.getWeb3Client();
                                    case 5:
                                        return t = e.sent, e.next = 8, n.userLogin(t);
                                    case 8:
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0), console.error(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        }))), n.userLogin = function() {
                            var e = Object(v.a)(w.a.mark((function e(t) {
                                var a, n, s;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.eth.getAccounts();
                                        case 2:
                                            return a = e.sent, n = localStorage.getItem("loginType"), localStorage.getItem("loginType"), e.next = 7, t.eth.net.getId();
                                        case 7:
                                            s = e.sent, console.log("User login params => ", a, s), window.sessionStorage.setItem("walletAddress", a[0]), window.sessionStorage.setItem("walletName", n), window.location.reload();
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.state = {
                            wallet: "",
                            address: ""
                        }, n
                    }
                    return Object(F.a)(a, [{
                        key: "confirmPrivacy",
                        value: function() {
                            1 == L()("#chkConfirm").prop("checked") ? (L()("#confirmModal").modal("hide"), L()("#exampleModalCenter").modal("show")) : 0 == L()("#chkConfirm").prop("checked") && L()("#spanAcceptInfo").css("color", "#fb4f4f")
                        }
                    }, {
                        key: "onPrivacyAccept",
                        value: function() {
                            1 == L()("#chkConfirm").prop("checked") && L()("#spanAcceptInfo").css("color", "#1a6b92")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            if (this.wallet = window.sessionStorage.getItem("walletName"), this.address = window.sessionStorage.getItem("walletAddress"), console.log(this.wallet, this.address), this.address) {
                                e = Object(r.jsx)("a", {
                                    type: "button",
                                    class: "btn btn-primary get-started-btn scrollto address",
                                    children: this.address
                                }), t = Object(r.jsx)("a", {
                                    onClick: this.logoutUser,
                                    type: "button",
                                    class: "btn btn-primary get-started-btn scrollto address",
                                    children: "Logout"
                                });
                                var a = !0
                            } else {
                                e = Object(r.jsx)("a", {
                                    href: "#about",
                                    type: "button",
                                    class: "btn btn-primary get-started-btn scrollto",
                                    "data-toggle": "modal",
                                    "data-target": "#confirmModal",
                                    children: "Connect"
                                });
                                a = !1
                            }
                            return Object(r.jsxs)("div", {
                                children: [Object(r.jsx)("header", {
                                    id: "header",
                                    className: "fixed-top ",
                                    children: Object(r.jsxs)("div", {
                                        className: "container d-flex login-logut align-items-center ",
                                        children: [Object(r.jsx)("a", {
                                            href: "/",
                                            className: "logo mr-auto",
                                            children: Object(r.jsx)("img", {
                                                src: o,
                                                alt: "",
                                                className: "img-fluid"
                                            })
                                        }), e, a && t]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "modal fade",
                                    id: "exampleModalCenter",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "exampleModalCenterTitle",
                                    "aria-hidden": "true",
                                    children: Object(r.jsx)("div", {
                                        className: "modal-dialog modal-dialog-centered modal-connect",
                                        role: "document",
                                        children: Object(r.jsx)("div", {
                                            className: "modal-content modal-content-custom",
                                            children: Object(r.jsxs)("div", {
                                                className: "modal-body connect-body text-center",
                                                children: [Object(r.jsxs)("div", {
                                                    class: "connect-header",
                                                    children: [Object(r.jsx)("div", {
                                                        class: "connect-flex connect-header-title",
                                                        children: Object(r.jsx)("h5", {
                                                            color: "text",
                                                            class: "sc-gtsrHT sc-bCwfaz itNBpW kcUtoS",
                                                            children: "Connect to a wallet"
                                                        })
                                                    }), Object(r.jsx)("button", {
                                                        "data-dismiss": "modal",
                                                        class: "sc-hKFxyN  sc-eCApnc connect-label-btn fAYopv",
                                                        "aria-label": "Close the dialog",
                                                        scale: "md",
                                                        children: Object(r.jsx)("svg", {
                                                            viewBox: "0 0 24 24",
                                                            color: "primary",
                                                            width: "20px",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            class: "sc-bdnxRM connect-close-btn",
                                                            children: Object(r.jsx)("path", {
                                                                d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                                                            })
                                                        })
                                                    })]
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list connect-pad-list-top connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuth,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "Metamask"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNFNUI3MDA2OEUwQzExRUI4MzVBOEQzOEU1RjhCMjEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNFNUI3MDA3OEUwQzExRUI4MzVBOEQzOEU1RjhCMjEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0U1QjcwMDQ4RTBDMTFFQjgzNUE4RDM4RTVGOEIyMTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0U1QjcwMDU4RTBDMTFFQjgzNUE4RDM4RTVGOEIyMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZbarNAAAWLElEQVR42uxc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"
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuth,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "Trust Wallet"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0M0VGMTBBOEUwQzExRUI4NjdFRDg1Nzc0OTA2QUE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0M0VGMTBCOEUwQzExRUI4NjdFRDg1Nzc0OTA2QUE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQzRUYxMDg4RTBDMTFFQjg2N0VEODU3NzQ5MDZBQTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQzRUYxMDk4RTBDMTFFQjg2N0VEODU3NzQ5MDZBQTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4D5jBAAAALwUlEQVR42uxd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"
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuth,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "SafePal Wallet"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAcIAgYJBQQDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABtSAAA1eGCx/jw5osb1C8KmvbkuGRc2aeZNwksWqp6qWWaht9AAADRzeNAo1q0tp4Yj8oRZXPDOys4lLb/VVPrhQtOBCsQS/EA3nRkWgmjnurqZ/ea172d6FItlKLSggzo3y1tUll2631pF8NW1qUVnEt3pvhCb9ZAojEEvxBNC4BT9v2gwv3QS/dkpCxFspRaUEGdT3dKlt0rAsVKtrUqWs4lu9N8ITfrIFEYgl+IJp0X50dF0rJAc+QGq/dBL9pKQsRbKUWlBBnU93SpbdKwLFSra1KlrOJbvTfCE36yBRGIJfiCadF+dHRdKyQHPkBqv3QS/aSkLEWylFpQQZ162y6IN7aILa+FhnZWcS7P6miDe7QUkuFUORBL8QDcdOR63kgv3QS/dkpCxFspfkct3TdLzIdN4bKWCWyueGdlZxKXQmezmRcKdftKNRBL8QKOgpz6dNycyL9756J+osartUWkSKvpq8GUMTOlHRLZXPDOys4lu9N8ITfrIFEYgl+IJp0X50dF00iP9bgMtBYLm7fslIWI4kf4DmC+r5c6mKwFJLP2VZEtlc8M7KziW703whN+sgURiCX4gmnReit7kqpB/p+Yq/9Aulye6LAKb166a88pdX/AE/NKBZXPDOys4lu9N8ITfrIFEfjtp+8v20w8rSFH2xKN79J3a5CgGl7oOa2t9KqSzUXiLK54Z2VnEt3pvhDeNZ3fxatQBLYauP4FHvR5N4PSlOwLAAAGGYrpVbpp5ktWs5uiMqqJbvVks3WSyPD+y/z+zDaWq3269xcgAAAAAAARdXoic6+i7jYEs3MAAAAH//EACcQAAAFAwUAAwEAAwAAAAAAAAQFBgcQAAM2AQIgNDUVFjAXETFA/9oACAEBAAEFAvxMTgEUWzZ4ikHRs7R4YVqdmO4UUuwel1FLyFYqi02BnNj9zVTlRJRs9AKzTcrQxVhk93e4sp4i2XhumleUvUGuUUq0nO/yNl2Rk1Gz10bLw9Oa/wBwyXovd3uLKeI6+aQUrc7JaKXr36UUuCRHFaa6btJWxsIIkwaqk2O+TJei93ehtEwVHaSNmXA36NmvPiumasXAxQ6+acStSGZLqiDYQeJeHOwbgDACTG6UtIdmFIxCWEfT3d6GfxGXXzTk2GDQ52DQjEtqrjYpakiLaDBLAK1D3d6GfxGXXzSChtCY+TK1S31E2hsMGhzsGhmMp4Pd3oZ/EZdfNIROJPRlMNhg0Odg0MxlPB7u9DP4jLr5pCJxJ6MphsMGhzsGhmMp4Pd3oZ/EZdfNIROJPRlMNhg0Odg0MxlPB7u9DP4jLr5pCJxJ6MphsMGhzsGgtNRZPf8AvSgr70oK+9KCmlUBicjnu70FynNSkP8AelBX3pQU05wNOSl180gMsToGHMjUYcX4bDBoc7BuTJei93e4sp4jr5pybDBoc7BuTJei93e4sp4jr5pybDBou2tl/Z8SBr4kDXxIGnYABg6ShkvRe7vQ0oAMISnxIGviQNWA1kNo6+aQjSwHdSvxIGviQNfEgatWtljZCoO9U4Rf3C5X9wuUinG3K41d7D4ZL0Xu70M/iMuvmkInEls425Imv9wuV/cLlJY71UZFDnYNDMZS72HwyXovd3oZ/EZdfNIROJPRlMNhg0OLZ1vouGoMNoFXu9h8Ml6L3d6GfxGXXzSETiTwidt9Ww2mzW2iIMAe0wACg1wEKqxe3hryrVNlVNxDJei93ehn8Rl180pMpkWqDG+IBopNGZjdNjCtu3XduIi/4oll3k1qBNI0ubtu2GS9F7u9DP4jLr5okG+HqneGCFSIJFwtbytHQ2Cd1O1JwNyoOdlykTwlMmnBkvRe7vQz+IyLQZaYqBSrEtSQdUK4eqxUAgV4xFpBNWksTcVUlgqrLj5PjE2PlkvRe7vQz+IwaHIIkDqh4Lwmr1+4JuwHD3Bd9vkFsTAfmep8EowKuQA9LXIZL0Xu70M/iJ4tCdPUfPKLE0OMBJkIkmIxqgGItAhEpa/Hfs23NqraMMOo1JxpIJZL0Xu70M/iLhZnOmn+dUq1I43onJARCE/QwLApsGTaHCJUyegtFCN8M/iLhZnWmmu7VPNcbnVJtBFKa/4j5uCU9o7aE2L6aoHfAphVpszPFqSsvfuURo8pT2n4/wD/xAAbEQACAwADAAAAAAAAAAAAAAABMBARIABAUP/aAAgBAwEBPwF1PtBwYGTBwYGTBaZvlothaYPWrwP/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ASn/xABLEAABAgIDCAoQBAYDAQAAAAACAQMABAUQERIgITFBc7GyEyJRcnSDhJGzwRQjMjQ1QkNSYXGBkpOhwtEwU5TiM0BiY6LhFSRE8f/aAAgBAQAGPwL8G7nZpqWHJshWW+qFGTaenz3e4DnXD8oUWCbkG/7I2lzrHZKz8z2R+bsq3XPCC843Pt7j44edIQZ5h6RPzk7YHyw/KNmkpluZbxKra4vX/IL2bPMskniXVpe6mGFGj5NyZLz3VuB+8T6Tmxi022Kg20NiJhiis2elL6f4R9KRMMSrwlLIILsDoWj3PPCDSMibC/mMLdJzQiSk+04a+TVbk+ZfwlR+fbNxPJs7cvlCjRtH+pyaX6U+8Kj0+4Da+TY2g/Kuk80OmKKzZ6Uvp/hH0pE1vG9WtEl6Qd2NPJu7ceZYQaSkEL+5LLZ/iv3hEbngZcXycx2tfngi1MKXk7PSqij7VzcqSWphJE64Xs2feeFfEtsD3UwX1J5odMUVmz0pWRTsiy+avkmyKm3yeNjhSo+bdlS8x1LsfvCqMsk62njSy3XyxxSLbrZNOJMYRNLFTapE1vG9W+/6U88wnmIW15sUSU7NkhTDl1dKiWYjVOquk+L6Qb3Y5WXdmHPNaBSWEKYRuQb/ALpWlzJDxhMuTLzwoJKSII+xIorNnpSvlB9V5NbxvVv6M4zpCrpPi+kGspPsjsZBbV1TubrBaidcITrRzzm6+WDmSEal2W2G08RsblK6KzZ6Ur5QfVeTW8b1a6NmCByWmnGBInWTxrZuLggZPsjskTaR1CubnKqWfKujOM6Qq6T4vpBrmeBlrhe0Vmz0pXyg+q8mt43q10TwcNES3Ax1zrozjOkKuk+L6Qa5ngZa4XtFZs9KV8oPqvJreN6tdE8HDREtwMdc66M4zpCrpPi+kGuZ4GWuF7RWbPSlfKD6rya3jerXRPBw0RLcDHXOujOM6Qq6T4vpBrmeBlrhe0Vmz0pXyg+q8mt43q10TwcNES3Ax1zrozjOkKuk+L6Qa1ekpg5Z1RuVIFyR4WmfejwtM+9HhaZ96KQGenHZkQbFRRxcWGKKzZ6Ur2CTnnpdm26uAXBbHhaZ96PC0z70Tjk7MnMmL9yiuLiSxImt43q1tsMUk+202lyICWBEhHp2YOZdQblCNcldGcZ0hV0nxfSDf0nmh0xRWbPSl9P8I+lImt43q39GcZ0hV0nxfSDf0nmh0xRWbPSl9P8ACPpSJreN6t/RnGdIVag4AuAuMSS1I7zl/hJHecv8JI7zl/hJBG1LtNlswYQBEWuk80OmKKzZ6UrunZdp0tnPCYIq5I7zl/hJHecv8JIVGWgaRcgDZE1vG9WuiiOVZIllxtVW0w4I7zl/hJHecv8ACSO85f4SQgNgLYJiEUsSuZpFGtnVm57XdWW2kidceBx/UftjwOP6j9sOSayCStwyrt2jt1lRNz0wWfCuk80OmKKzZ6Ur5QfVeTW8b1a6J4OGiGpNJBJq7ZR27V25yqm56I8Dj+o/bHgcf1H7YlqRVnYFeuu13V1ZYSp1V0nxfSDXM8DLXCCz4V0nmh0xRWbPSlfKD6rya3jerXRPBw0RLcDHXOujOM6Qq6UFMgIXMSL1VtCa2JMNkzb6caaILPhXSeaHTFFZs9KV8oPqvJreN6tdE8HDRCAONmXAC9dql9VdGIu4a/5lXMSp9w82Ta+1LIel3UuXWjUCT0pU260Sg4BIQkmRYSYFUGZB5sX2/NL7LXSeaHTFFZs9KV8oPqvJreN6tQy0qNg43HV7ltN2BVw17Hk2kAbe6NcietYmJx9bXXjU1qRES1VyRIyeVlkQX12YbwaVZHtE1gcs8Vz/AGmhayFCVBLGm7XSeaHTFFZs9KV8oPqvJreN6sC6qLKyGV8k7re7sLc3MpKNJaZljJfTurGC1qRaXtTP1L6a23jG2Wk+2n6/FTn0Xr8lMjdMupYvo9MOScymLCDmQx3b2k80OmKKzZ6Ur5QfVeOUtOis04SCgsn3CWJuZYseJCfs7XKtd0v2SNkmjuWR/hy4dyH+/TW1LS7auvOlciKZYblBsJ5du855xXyy8xtHBwtPJjBYKVnG7kvFNO5NN1Lyk80OmKKzZ6Ur5QfVXs89MhLt/wBS4V9SZYJihm1l28XZLibdfUmSCddMnXCW0jNbVWsGWQJ101uRAUtVVjsqaRDpNxMO40nmp+AsrOtXYeKSd0C7qLCuWLNSFu1mATFvtyuk80OmKKzZ6Ur5QfVCjNzg7MnkG9sfNk9sE3RUukoH5zu2PmxJ84V+afcmHV8dwrVvBlpFlXXFxrkFN1VjZSsmaQJNs+qdz6B/CUSRCFcCouWDmKIIZR7GsuX8MvVuQrE9LnLuf1Jj9S5YpPNDpiis2elK+UH1RSuc6kvLEwrAP0jdSEpjuVTtp+zJ7YSWkWBYby2Yy9Krl/FViclwmGl8U0tibmJJw9ifFB2E8Nz7YkJlqXccYaA0NwBtQcWOvlB9UUrnOpKkREtVckC4+H/HSy+O+m2X1D97IE2Wdnmk/wDQ9hL2bn8kRrL9iTC+VltrzpigjkiCkWtwdofMv3gmZlk2HUmDtBwblckUokjJOvpsvdolg4k8bFCHSk4LI/lS+2Ln/wDsJ2HKALv5x7Y+f8L/xAAoEAABAQYGAwEBAQEAAAAAAAABEQAgIVFh8BAxQYGRoTBxwbHxQOH/2gAIAQEAAT8h8IubtGXqzOzI1jIQswKlaCQCq/QDLmPX+SsgQYaDRI8qyvCzAhuwTuZiVUgzBof8AaylqdG0f8BvcBEumigaVBLUqTy+E69gMj8AsQJjANi2h9SH71IRyW0S4/HR8JIAUwDTbQ40jEm6MFqVbJ6VLUdyWJJEkqTqcLrO+E69i1S4qFNShyCqbIyHbqvW0NuXkMtTYlhggIFBGRcCYKGxXh6JjGoL5x0eus7gQoN2jQAgAEDPQsp6ojaYMA5LVLC7mnEMCFMFZwBa1SvCxE4xR+zUuGFc1PiUOAoGPUdY4Yv+QMrRtYVRfshi6aw0ArqEclwJaUcWqXxL9TFgCEfKQiAURajV467tDlWy0DBh2DwS0o4tUuPvJRghU4IyLLh1gCuBS9X6njeQJaUcWqXxOFF+p43kCWlHFql8ThRfqeN5AlpRxapfE4UX6njeQJaUcWqXxOFF+piyzBJYkyCnIHDkYxVyKBUSVHAkRFYGpmcYxGa8rCpI1qlxFh6iAsgGGsktiBJKck8vL9R93Wd8J17Fql8S/Ufd1nfCdexapfEvk1gImxa6fjXT8a6fjI4fQqjqBjdZ3AkD+0Kk1ENdPxrp+MVpykISdmtUuJivpaSmKNdPxrp+NdPxsmsBA2GIzOdKoUNWTf0TP6Jg/VmAomRP8tYa43WdwJaUcWqVxwGKyAVTIv8Atv6Jn9EwLjKFQqCrLHqOPJYa43WdwJaUcWqXxOFFwvqdnP4hfBeUycxEbtYa43WdwJaUcWqVxwvS0aL8QYwXCdqTD9x6NUzF+tTBh5EP5hm1XMEVBG7CYRXOJHsHGhxus7gS0o4tUuCGQQN7Kshqx2BSMAEBUaF0Y5BdBQZbYETHIAzJZaNNdQBXKuZY2TQAPgvvES7CmYIiFxus7gS0o4tUrAJM/nB1VyHTC2KlrPFmSWwYGSeLGJ+rrKZOCilgxECJ/MvonctndmWgVBQhlLuRCmG4FXbrO4EtKONDyAGBT6dYUYf0ahDSHcdlaKRyshfanWWIIxM3Isd2CDXz2GQ9PBiig6/eDqNeCyV/jETbqLLl1ncCWlMRroMdpzCoGDHBEEei9ip9Ms7MEuZJzxBLOqi0AaAlshEnUnM7CGb4hZowXARssusPwENVcj1jdZ3AlpRhAV/7GHwYWU0Aj7wwZipyPVHSjkcrgIcZBgOASETD0Fcz14gH3Q1ASIYqWcwqv59MEr8hCGeQFQ11ncCWlGdC5EEAkgANWNq3JChd+DAMmOYTcF78tLZ3VEjUNOi+KCsM5HvlibGEKSiDL3jaUZ0OEcsUgAKSx/MBkLlYC6oExHptjU/4i+ZSERPI4WrIhyIyH3IdtjLMPGDDQWT48IFnEgcsVzoEewTgNgwmDAjEd+XoIPF//9oADAMBAAIAAwAAABDzzzXdAHfvzzzzxuCNcMBykPBfz0MQ74P2ykUsHz0P7z4P3ylUAHz0P7z4P3ylUAHz0MMPcOMSlMMHzg80NcMV6kA8ry0B4NcP3ylWFPzgvUNcP3yl8lXzyUMNcP3zfAffzzwwNcPn4EMbzzzzypYP8cg3zzzzzzyCP53zzzzz/8QAHREAAgMBAQEBAQAAAAAAAAAAARAAETFBICEwUf/aAAgBAwEBPxB1K+1KEqESj7UF1XDkGKhCKQ1E0g1HUMhNLCGrS0jqGIMmENWlpHUMQZMIa6nWcgx49HVcJuDITSE2hKE6uo6hiACEV4I+rqOoYg8AX1HVf8gCJvwDa6jsEVSJ9AwH6hqJqE3+NkS/su/X/8QAGxEAAgMBAQEAAAAAAAAAAAAAARAAESBBMDH/2gAIAQIBAT8QzaEvVviqB3LzUOxgI5EMGAjkQwa4xgOpS4qlOpTt8yENcyEGXzFbpcdutVOI/FXlXh//xAAnEAEAAQIFBAMBAQEBAAAAAAABESExACBBUWEQMHHwgZGh0UDB8f/aAAgBAQABPxDsl3dVDlxWXgLiqMxMzwvrXFRawF9kgPOKJJ7KEmYKI4mMUEhRQ+TnnHQ1A8xID4z84ewakpx2iRgGEp/gNhqVyfEhhChpkR0DF4R4V6NB3lWVAFYcHYlgjB4SiICoVYEriZEQmTuj/hcCwV1Ydg18gnPZRIASqwBiqjYoiaET88ASzc/6N70xVAcUOYIjiOWVKkq79zbLBeRhkvilMIBDYAPzc4tqwbh3kRfi4xSzktisGC8YwH3JyDZHUyCiSkI4VRRBNJi9sAqRP47tA2y4qCIaaCAlQCuK0bAJtJBOVcV9cavNKSPlOcIACUVoQnyZ/LecqLN/thYNwOsbS0NRFJmh2IkBdqJcoVDlpikPagXdcOG4GtSwKEMiVmdK2SXf67FZ17Hn8mYRHcjdMsvYiqwQ3xTAWTjwNzjH+VMKgwPrNLv598p1UYThR6zeCd8BT4hfiBKKZGslDr+TvCIBl38++fXbMgH8neEQDLv598+u2ZAP5O8IgGXfz759dsyAfyd4RAMu/n3z67ZkA/kzCJPz4tgN2V/DHsv5j2X8x7L+Yi6t8mlyQMkvhvAMUIuwfWPZfzHsv5ixvkZEO0q/OTzDk4CCARQDEJty3AXYX8uv5P8ASIm2WC8/k/0iJtlgvP5OoicnRVRJBGEHyGT/AP8A+EtnmQzIDDn2y1VobohJDFWnX/8A6DcGYRKAljXJ5Q7n9glSS8uT/wD/APO5OqqqwAEqvlepOwYo6fwRvJiNZ6pUpTi6U61wzVM+Fces3z9su/n3z67Zhax9KdLpYqmfCnVKlM8M3DXeSdpExpOeIB9Zvn7Zd/Pvn12zIB/J1D8FUNwPpdVtGDAQTyM5GPWb5+2Xfz759dswFsxjYAfm/PUw0GH/AMaHWhu8xMNH1gyBoNdP4V0VIYcFltwD8YdgM9nSL0FdplMGbbLv5t8r1WjqWq6qEFlbAoZbnOF6YgLEErQGCN62ypNoIBoDoG4RsoYANVcQgBasHfJN85EyjqsDl2CDdDc6mJ4Nhqgsw1Jtn2y7+XfNY7V5A1bGscqVSTKWkR4pJcABNgAAg9MrRZhYS0qFhM9QmaU8++DQtx65ZCw0Gue2MjcLlMKiTmYtfmxCTQDbs7Zd/JsEnl6eiuaod0SviO+Y6EImKUYpEDBEYNEZIDKTGsXqNiEDoTijpS+gKqtAFUBwqZYeyJE1iAtpJK5qfFqrFy1EDsALIDBps5KQRan2NAInY2y7/XT0+b2FxTxFeMSHkHFZao7UBszDX7ME3WVcr1eKAZRACquB0zbFaNkvTvsF7CTQkZHwRJL5EoEpiluZWhaHnSLpiGWGbbLv40lky3SJCXUVFDnEgMgEGlS3D8jGhrKhoFUGggNDJFVYSqQsoe7ewKgppaaJKhXTVywQOyruY10hRREojiQsaLqGKVu0NoBriVKTRoxGnmKc5dsu/l3U/kQKVNgNXFNpQI2IoDsTaGM4g6XBosSqndMWIAO7XjeiC3blogmjiuB+idy3hEBSLsI62w6pQxQaoKX63+u6jQIdIaABdwMuMmm9oN8g6LiJFqDUiYivaQYf8IgiJI6OKyQrkVCzt1k2YWlbSB5fYpcNDrvMsmMO+uH0Bs52JI4cHmqJQGxj+BziA6AfMarPXwna/9k="
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list  connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuth,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "TokenPocket Wallet"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADXCAMAAAAjrj0PAAAAmVBMVEUnYef///8prv8nW+UprP48tP8cXOaEne9Ruf8bq/+Lzv8AUeUXWuaRqvH7/v8Lqf/19/1Idupivv8AVebk6vwAUOWluPNBcelwke2LpPCes/JehOvI1Pjr7/zw8/2uv/TU3fl5l+7e5fu6yPY3a+hUfeuk1//r9/96x//L1vh+mu8rZOihtfNEc+leg+tpiuy34P8nee7L6P998KP1AAAERUlEQVR4nO3diV7iMBAH4AEhyCYcGq4CCgi4u6KA+/4Pt4DcaUkLKZCZ+T+APz7TtOmRGci4Sz8oOE5Qave6/VrVyc8DJ39llWFduI9SepFRJ+i9XQp2SFWQXsRSPAq65Qt+nztqtZ4i9ScL77RRuwOqTJ0Kq+FtNl5JUJdRstMlQl2MrR41Ek9bP6mwHNrghQh1eZL6SDRpPaYuj+NSgsPYa+piZGFIhQqgx3EvtN5TQcg2FepiYJtv16VmbkYFUe/FpVbffzlImst9W3QrHvV30UUqDzekghpZFxRL6p9i1kFyN6Uu7gP+xqA+5hBQAaRlwiKiguWqg4kKOiBDBf1Bhgp6QIYKukCGCrpEhhp9zcFHBRmxlkBIBRW+RsRIFSMyVFADMlTQYacmnFSQIdMVKVU8kaGGrSSwUkEaz0zRUs1DGC3VPAvjpYIok6GqgAwV5CsZqvggQwX9QoZ6OKyoqSCrZKiqTYYKEzpU3SVDFR0y1P1lBHaq+iRDFV9kqKBrZKi7Ixg9VYzJUEFX6VC7ZKgioEP9IkMFWSZD1X0yVNWjQy2QoW4WEQSoMCmToaoqGer65oYEtUuHOiRDVQ061BIdaoEMVQzoUFt0qDM61CkdKqFRJTRX6VAJXVcprZborIEJ3dmsn46SoL6QoQo6z5aau4ejz7ip6xXEijqvuLDeLXXz9d2qBMY8W7GlaP1v3C118y55XdikbEsmb7PeLXWzkyp2DRd/qRsifur6yRIF6na/DX7qdtMjfmpzI0BP3W0sQk/dfPRBgLoDYqeK3cY47FS5PX7RU5s7AXLq+gkaCereTjHcVLVffQk3tb5fRgA1df0KjgJVH5RdxUw9HFTUVHlYSxcxVR1Vl0VM1Uf12/FS1XFtHrxUo0AaWqpZ4g8r9fichJgKZk8jpNR6SIVKnNTQmsgoqWH17rBSQ5u/YKRGlJJFSA2twomSGln2GR01ulsGNqqaRQqQUdU4WoCLqqYnBKioqnNKgIlq6d+DiCojmwtgo9ra2aChCtG3CZBQVdPeyxIHVZ7s2YOIqiBW51kEVN2K167Te6qaxG0m7DlV2S6mWKhCtxL01fWYKurTWB06vacqPbMuGlBQlR4kGlFfqUJP2mc0rPeOKjQUEh65PlKFkiI4z+kRVQitYdZIPEHvkSqiopTWUkyDYS1Bu/Z7po6ewjKezgalxrBvviz1l2p8o5FCmGqGqUxlKlOZ6jhMNcNUpjKVqUx1HKaaYSpTmcpUpjoOU80wlalMZSpTHYepZpjKVKYylamOw1QzTGUqU5nKVMdhqhmmMpWpTPWNmr2I+pkm8ifuqPnv861C1uy/4NI4HNXst3iIiJKn0zx7R0mCuKTmc8XwVB4z1ZNJU7iNS2p0ntMkxM1VqDmmXjdMNcNUpjL1pmGqGaZipF7SubToF3VeOX9QK//SJMRNbGrmPX+uND9PERA//wGhXNEoNylEkQAAAABJRU5ErkJggg=="
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list  connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuth,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "Math Wallet"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: we
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "connect-pad-list connect-pad-list-bottom connect-flex connect-list-direction",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: this.requestAuthBSC,
                                                        class: "link-effect",
                                                        children: Object(r.jsxs)("button", {
                                                            class: "connect-list-btn connect-wallet-label",
                                                            width: "100%",
                                                            id: "wallet-connect-metamask",
                                                            scale: "md",
                                                            children: [Object(r.jsx)("div", {
                                                                color: "primary",
                                                                class: "sc-gtsrHT bGLBCp",
                                                                children: "Binance Chain Wallet"
                                                            }), Object(r.jsx)("img", {
                                                                class: "connect_wallet_img",
                                                                src: "data:image/jpeg;base64,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"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "modal fade",
                                    id: "confirmModal",
                                    tabindex: "-1",
                                    role: "dialog",
                                    "aria-labelledby": "exampleModalCenterTitle",
                                    "aria-hidden": "true",
                                    children: Object(r.jsx)("div", {
                                        className: "modal-dialog modal-dialog-centered modal-connect modal-content-confirm",
                                        role: "document",
                                        children: Object(r.jsx)("div", {
                                            className: "modal-content modal-content-confirm modal-content-custom",
                                            children: Object(r.jsx)("div", {
                                                className: "modal-body connect-body text-center",
                                                children: Object(r.jsxs)("div", {
                                                    class: "row ",
                                                    children: [Object(r.jsxs)("div", {
                                                        class: "col-md-12",
                                                        children: [Object(r.jsx)("h4", {
                                                            className: "confirm-heading",
                                                            children: "Disclaimer"
                                                        }), Object(r.jsxs)("p", {
                                                            class: "confirm-content",
                                                            children: ["Trading cryptocurrencies carries a ", Object(r.jsx)("b", {
                                                                className: "confirm-highlight",
                                                                children: "high level of risk"
                                                            }), ", and may not be suitable for all investors. ", Object(r.jsx)("b", {
                                                                className: "confirm-highlight",
                                                                children: "Before deciding to trade cryptocurrency"
                                                            }), " you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. ICO's, IEO's, STO's and any other form of offering will not guarantee a return on your investment."]
                                                        }), Object(r.jsx)("p", {
                                                            class: "confirm-content",
                                                            children: Object(r.jsx)("b", {
                                                                className: "confirm-highlight",
                                                                children: "You should be aware of all the risks associated with cryptocurrency trading, and seek advice from an independent financial advisor"
                                                            })
                                                        }), Object(r.jsx)("p", {
                                                            class: "confirm-content",
                                                            children: "Any opinions, news, research, analyses, prices, or other information contained on this website is provided as general market commentary, and does not constitute investment advice. The Hodltoken.net and its affiliates will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. All opinions expressed on this site are owned by the respective writer and should never be considered as advice in any form."
                                                        }), Object(r.jsx)("p", {
                                                            class: "confirm-content",
                                                            children: "The Hodltoken.net and its affiliates makes no representation or warranties as to the accuracy and or timelines of the information contained herein. A qualified professional should be consulted before making any financial decisions."
                                                        }), Object(r.jsxs)("label", {
                                                            children: [" ", Object(r.jsx)("input", {
                                                                class: "confirm-chk",
                                                                type: "checkbox",
                                                                id: "chkConfirm",
                                                                onClick: this.onPrivacyAccept
                                                            }), " ", Object(r.jsx)("b", {
                                                                className: "confirm-highlight",
                                                                id: "spanAcceptInfo",
                                                                children: "  I understand and accept that I will trade/invest HODL at          my own risks"
                                                            })]
                                                        })]
                                                    }), Object(r.jsx)("div", {
                                                        class: "col-md-12 text-center",
                                                        children: Object(r.jsx)("a", {
                                                            class: "btn-get-started scrollto  confirm-btn",
                                                            id: "confirmBtn",
                                                            onClick: this.confirmPrivacy,
                                                            children: "Confirm"
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }
                    }]), a
                }(n.Component)),
                Ne = a(210),
                Be = a(94),
                ke = a.n(Be);
            var Me = function() {
                    var e = Object(n.useState)(0),
                        t = Object(u.a)(e, 2),
                        a = t[0],
                        s = t[1],
                        i = Object(n.useState)(0),
                        c = Object(u.a)(i, 2),
                        l = c[0],
                        d = c[1],
                        b = Object(n.useState)(0),
                        h = Object(u.a)(b, 2),
                        j = h[0],
                        m = h[1],
                        p = Object(n.useState)(0),
                        x = Object(u.a)(p, 2),
                        y = x[0],
                        g = x[1],
                        f = Object(n.useState)(0),
                        N = Object(u.a)(f, 2),
                        M = N[0],
                        C = N[1],
                        T = Object(n.useState)(0),
                        D = Object(u.a)(T, 2),
                        E = (D[0], D[1]),
                        S = Object(n.useState)(0),
                        Q = Object(u.a)(S, 2),
                        U = Q[0],
                        F = Q[1],
                        V = Object(n.useState)(0),
                        W = Object(u.a)(V, 2),
                        P = W[0],
                        H = W[1],
                        R = Object(n.useState)(0),
                        G = Object(u.a)(R, 2),
                        J = G[0],
                        X = G[1],
                        K = Object(n.useState)(!1),
                        Z = Object(u.a)(K, 2),
                        _ = Z[0],
                        $ = Z[1],
                        ee = Object(n.useState)(""),
                        te = Object(u.a)(ee, 2),
                        ae = te[0],
                        ne = te[1],
                        se = Object(n.useState)(0),
                        ie = Object(u.a)(se, 2),
                        ce = ie[0],
                        oe = ie[1],
                        re = Object(n.useState)(0),
                        le = Object(u.a)(re, 2),
                        de = (le[0], le[1]),
                        be = Object(n.useState)(0),
                        ue = Object(u.a)(be, 2),
                        he = ue[0],
                        je = ue[1],
                        me = Object(n.useState)(0),
                        pe = Object(u.a)(me, 2),
                        xe = (pe[0], pe[1]),
                        Oe = Object(n.useState)(0),
                        Ae = Object(u.a)(Oe, 2),
                        ye = Ae[0],
                        ge = Ae[1],
                        we = Object(n.useState)(0),
                        ve = Object(u.a)(we, 2),
                        Be = ve[0],
                        Me = ve[1],
                        Ce = Object(n.useState)(0),
                        Te = Object(u.a)(Ce, 2),
                        De = Te[0],
                        Ee = Te[1],
                        Se = Object(n.useState)(0),
                        Qe = Object(u.a)(Se, 2),
                        Le = (Qe[0], Qe[1]),
                        Ie = Object(n.useState)(0),
                        Ue = Object(u.a)(Ie, 2),
                        Fe = (Ue[0], Ue[1]);

                    function Ve() {
                        var e = window.sessionStorage.getItem("walletAddress"),
                            t = new B.a("https://bsc-dataseed1.binance.org:443"),
                            a = k,
                            n = new t.eth.Contract(a, "0x0e3eaf83ea93abe756690c62c72284943b96a6bc");
                        n.methods._maxTxAmount().call().then((function(e) {
                            var a = t.utils.toBN(e).toString(),
                                n = t.utils.toWei(a, "Gwei");
                            s(t.utils.fromWei(n, "ether"))
                        })), t.eth.getBalance("0x0e3eaf83ea93abe756690c62c72284943b96a6bc").then((function(e) {
                            var a = t.utils.toBN(e).toString();
                            d(t.utils.fromWei(a, "ether"))
                        })), t.eth.getBalance("0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8").then((function(e) {
                            var a = t.utils.toBN(e).toString();
                            Fe(t.utils.fromWei(a, "ether"))
                        }));
                        new t.eth.Contract([{
                            constant: !0,
                            inputs: [{
                                name: "",
                                type: "address"
                            }],
                            name: "balanceOf",
                            outputs: [{
                                name: "",
                                type: "uint256"
                            }],
                            payable: !1,
                            stateMutability: "view",
                            type: "function"
                        }], "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c").methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(e) {
                            var a = t.utils.toBN(e).toString();
                            C(t.utils.fromWei(a, "ether"))
                        })), n.methods.balanceOf("0x2941273449ab4eb6fcdf8f84763f017fae264091").call().then((function(e) {
                            var a = t.utils.toBN(e).toString(),
                                n = t.utils.toWei(a, "Gwei");
                            m(t.utils.fromWei(n, "ether"))
                        })), n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call().then((function(e) {
                            var a = t.utils.toBN(e).toString(),
                                n = t.utils.toWei(a, "Gwei"),
                                s = Number(1e15) - Number(t.utils.fromWei(n, "ether"));
                            E(s)
                        })), (new Y.a).simple.price({
                            ids: ["binancecoin"],
                            vs_currencies: ["usd"]
                        }).then((function(e) {
                            g(e.data.binancecoin.usd)
                        })), n.methods.balanceOf(e).call().then((function(e) {
                            var a = t.utils.toBN(e).toString(),
                                n = t.utils.toWei(a, "Gwei");
                            F(t.utils.fromWei(n, "ether"))
                        })), n.methods.calculateBNBReward(e).call().then((function(e) {
                            var a = t.utils.toBN(e).toString();
                            H(t.utils.fromWei(a, "ether"))
                        })), n.methods.nextAvailableClaimDate(e).call().then((function(e) {
                            X(e), 0 == e && $(!0)
                        }));
                        var i = Number(1e6) * Number(M) / Number(j) / Number(1e6);
                        je(Number(1 / i))
                    }

                    function We() {
                        return (We = Object(v.a)(w.a.mark((function e() {
                            var t, a;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fe.getWeb3Client();
                                    case 2:
                                        if (t = e.sent, "" != ce && 0 != ce) {
                                            e.next = 7;
                                            break
                                        }
                                        Object(Ne.a)("Please enter Value"), e.next = 28;
                                        break;
                                    case 7:
                                        if ("" != ae) {
                                            e.next = 11;
                                            break
                                        }
                                        Object(Ne.a)("Please Enter recepient address"), e.next = 28;
                                        break;
                                    case 11:
                                        if (!t) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.prev = 12, e.next = 15, fe.disruptiveTransfertokens(t, ae, ce);
                                    case 15:
                                        a = e.sent, {
                                            value: ce,
                                            txHash: a,
                                            transactionType: "Disruptive Transfer"
                                        }, z()("Transaction done!", "You clicked the button!", "success"), setTimeout((function() {
                                            window.location.reload()
                                        }), 1e3), e.next = 25;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(12), z()("Transaction Failed!");
                                    case 25:
                                        e.next = 28;
                                        break;
                                    case 27:
                                        z()({
                                            title: "Change Network to Binance Mainet",
                                            timer: 3e3
                                        });
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [12, 22]
                            ])
                        })))).apply(this, arguments)
                    }

                    function Pe() {
                        return (Pe = Object(v.a)(w.a.mark((function e() {
                            var t, a, n;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Number(P), e.next = 3, fe.getWeb3Client();
                                    case 3:
                                        if (!(a = e.sent)) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.prev = 5, de(P), e.next = 9, fe.claimBNB(a);
                                    case 9:
                                        return n = e.sent, {
                                            value: ce,
                                            txHash: n,
                                            transactionType: "Claim Rewards"
                                        }, e.next = 14, ke()(Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("h3", {
                                                children: "Awesomeness !!"
                                            }), Object(r.jsx)("br", {}), Object(r.jsx)("h5", {
                                                children: "You have Successfully Claimed"
                                            }), Object(r.jsxs)("h5", {
                                                children: [" BNB ", t.toFixed(4)]
                                            }), t >= 1 && Object(r.jsxs)(r.Fragment, {
                                                children: [Object(r.jsxs)("h6", {
                                                    children: [" Wallet: ", (.8 * t).toFixed(2), "    |    Charities: ", (t - .8 * t).toFixed(2), "  "]
                                                }), Object(r.jsx)("h6", {
                                                    children: " Congratulations on Contributing Towards Charity !"
                                                })]
                                            }), Object(r.jsx)("br", {}), Object(r.jsxs)("p", {
                                                children: ["Next Collection Date: ", new Date(1e3 * J).toLocaleString("en-US", {
                                                    weekday: "long"
                                                }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                    month: "long"
                                                }), " ", new Date(1e3 * J).toLocaleString("en-US", {
                                                    day: "numeric"
                                                }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                    year: "numeric"
                                                }), "  ", new Date(1e3 * J).toLocaleString("en-US", {
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    hour12: !0
                                                })]
                                            }), Object(r.jsx)("p", {
                                                children: "Support Us By Sharing Now !!"
                                            }), Object(r.jsx)("br", {}), Object(r.jsx)("br", {}), Object(r.jsx)("img", {
                                                src: o,
                                                alt: "",
                                                className: "img-fluid photo"
                                            })]
                                        }));
                                    case 14:
                                        setTimeout((function() {
                                            window.location.reload()
                                        }), 10), e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(5), z()("Transaction Failed!");
                                    case 20:
                                        e.next = 23;
                                        break;
                                    case 22:
                                        z()({
                                            title: "Change Network to Binance Mainet",
                                            timer: 3e3
                                        });
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 17]
                            ])
                        })))).apply(this, arguments)
                    }

                    function He() {
                        return (He = Object(v.a)(w.a.mark((function e() {
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc", ke()(Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)("p", {
                                                children: "Your Current HODL balance is 0"
                                            }), Object(r.jsx)("h4", {
                                                children: "You need HODL Tokens to Earn BNB"
                                            }), Object(r.jsx)("br", {}), Object(r.jsx)("p", {
                                                children: Object(r.jsx)("a", {
                                                    href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                                    className: "COLLECTION_MONEY bubbly-button",
                                                    children: "Buy Now!"
                                                })
                                            })]
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function Ye() {
                        return (Ye = Object(v.a)(w.a.mark((function e(t) {
                            var a, n, s;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, xe(t);
                                    case 2:
                                        return a = Number(t), n = Number(Number(t) * he * .9).toFixed(0), e.next = 6, ge(n);
                                    case 6:
                                        return e.next = 8, Me((Number(t) * he * .9 / Number(709271212874876) * l).toFixed(5));
                                    case 8:
                                        return e.next = 10, Ee((Number(t) * he * .9 / Number(709271212874876) * l * 364).toFixed(2));
                                    case 10:
                                        return s = Number(t) * he * .9 / Number(709271212874876) * l * 364, e.next = 13, Le(Number(Number(364 * a / s).toFixed(0)).toFixed(0));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(n.useEffect)((function() {
                        Ve();
                        setInterval(Ve, 5e6);
                        I(), L()("#auto_modal").modal("show")
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("a", {
                            href: "",
                            class: "fixedbutton",
                            "data-toggle": "modal",
                            "data-target": "#InvestMent",
                            children: "Reward Calculator"
                        }), Object(r.jsx)("section", {
                            class: "smallsection",
                            children: Object(r.jsx)("div", {
                                class: "modal fade  ",
                                id: "InvestMent",
                                tabindex: "-1",
                                "aria-labelledby": "InvestMentLabel",
                                "aria-hidden": "true",
                                children: Object(r.jsx)("div", {
                                    class: "modal-dialog modal-lg ",
                                    children: Object(r.jsxs)("div", {
                                        class: "modal-content modal_hodlInsvetmentcal",
                                        children: [Object(r.jsxs)("div", {
                                            class: "modal-header",
                                            children: [Object(r.jsx)("h5", {
                                                class: "modal-title",
                                                id: "InvestMentLabel",
                                                children: "HODL Investment & Rewards Calculator"
                                            }), Object(r.jsx)("button", {
                                                type: "button",
                                                class: "close",
                                                "data-dismiss": "modal",
                                                "aria-label": "Close",
                                                children: Object(r.jsx)("span", {
                                                    "aria-hidden": "true",
                                                    children: "\xd7"
                                                })
                                            })]
                                        }), Object(r.jsx)("div", {
                                            class: "modal-body ",
                                            children: Object(r.jsxs)("div", {
                                                class: "row",
                                                children: [Object(r.jsx)("div", {
                                                    class: "col-md-12",
                                                    children: Object(r.jsx)("form", {
                                                        children: Object(r.jsxs)("div", {
                                                            class: "form-group row",
                                                            children: [Object(r.jsx)("label", {
                                                                for: "inputPassword",
                                                                class: "col-sm-6 col-form-label",
                                                                children: "Enter BNB Amount to Invest"
                                                            }), Object(r.jsx)("div", {
                                                                class: "col-sm-6",
                                                                children: Object(r.jsx)("input", {
                                                                    type: "text",
                                                                    class: "form-control",
                                                                    id: "inputtext",
                                                                    onChange: function(e) {
                                                                        return function(e) {
                                                                            return Ye.apply(this, arguments)
                                                                        }(e.target.value)
                                                                    }
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    class: "col-md-12 rewardcalc",
                                                    children: Object(r.jsxs)("table", {
                                                        class: "table table-bordered table-striped text-center",
                                                        children: [Object(r.jsx)("thead", {
                                                            children: Object(r.jsxs)("tr", {
                                                                children: [Object(r.jsx)("th", {
                                                                    scope: "col"
                                                                }), Object(r.jsx)("th", {
                                                                    scope: "col",
                                                                    children: "Existing"
                                                                }), Object(r.jsx)("th", {
                                                                    scope: "col",
                                                                    children: "New"
                                                                }), Object(r.jsx)("th", {
                                                                    scope: "col",
                                                                    children: "Total"
                                                                })]
                                                            })
                                                        }), Object(r.jsxs)("tbody", {
                                                            children: [Object(r.jsxs)("tr", {
                                                                children: [Object(r.jsx)("th", {
                                                                    scope: "row",
                                                                    children: "$HODL Balance"
                                                                }), Object(r.jsx)("td", {
                                                                    children: (new Intl.NumberFormat).format(Number(U).toFixed(0))
                                                                }), Object(r.jsx)("td", {
                                                                    children: (new Intl.NumberFormat).format(ye)
                                                                }), Object(r.jsx)("td", {
                                                                    children: (new Intl.NumberFormat).format(Number(Number(ye).toFixed(0)) + Number(Number(U).toFixed(0)))
                                                                })]
                                                            }), Object(r.jsxs)("tr", {
                                                                children: [Object(r.jsx)("th", {
                                                                    scope: "row",
                                                                    children: "Reward Share %"
                                                                }), Object(r.jsxs)("td", {
                                                                    children: [(Number(P) / Number(l) * 100).toFixed(3), " %"]
                                                                }), Object(r.jsxs)("td", {
                                                                    children: [Number(Be / l * 100).toFixed(3), " %"]
                                                                }), Object(r.jsxs)("td", {
                                                                    children: [(Number(P) / Number(l) * 100 + Number(Be / l * 100)).toFixed(3), " %"]
                                                                })]
                                                            }), Object(r.jsxs)("tr", {
                                                                children: [Object(r.jsx)("th", {
                                                                    scope: "row",
                                                                    children: "Daily Rewards in BNB*"
                                                                }), Object(r.jsx)("td", {
                                                                    children: Number(P).toFixed(3)
                                                                }), Object(r.jsx)("td", {
                                                                    children: Number(Be).toFixed(3)
                                                                }), Object(r.jsx)("td", {
                                                                    children: (Number(P) + Number(Be)).toFixed(3)
                                                                })]
                                                            }), Object(r.jsxs)("tr", {
                                                                children: [Object(r.jsx)("th", {
                                                                    scope: "row",
                                                                    children: "Yearly Rewards in BNB*"
                                                                }), Object(r.jsx)("td", {
                                                                    children: (364 * Number(P)).toFixed(2)
                                                                }), Object(r.jsx)("td", {
                                                                    children: Number(De).toFixed(2)
                                                                }), Object(r.jsx)("td", {
                                                                    children: Number(Number(364 * Number(P)) + Number(De)).toFixed(2)
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    class: "button_cacla",
                                                    children: Object(r.jsx)("a", {
                                                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                                        target: "_blank",
                                                        class: "btn-get-started scrollto",
                                                        children: "Buy HODL"
                                                    })
                                                }), Object(r.jsxs)("div", {
                                                    className: "text-center fsize",
                                                    children: [" ", Object(r.jsx)("br", {}), " ", Object(r.jsx)("p", {
                                                        className: "text-center",
                                                        children: "*These are only Estimates and not a Financial Advice."
                                                    }), " "]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), Object(r.jsxs)("main", {
                            id: "main",
                            children: [Object(r.jsx)("section", {
                                id: "services",
                                className: "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2",
                                children: Object(r.jsx)("div", {
                                    className: "container",
                                    "data-aos": "fade-up",
                                    children: Object(r.jsx)("div", {
                                        className: "row mt-3",
                                        children: Object(r.jsx)("div", {
                                            className: "col-xl-12 col-md-12 d-flex align-items-stretch mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "300",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsxs)("h5", {
                                                    children: ["My collectable BNB: ", Number(P).toFixed(5), " BNB  "]
                                                }), Object(r.jsxs)("h6", {
                                                    style: {
                                                        color: "DarkCyan"
                                                    },

                                                
                                                    
                                            
                                                            
                                                        



                                                    children: ["*Forecasted Annual BNB Rewards: ", (364 * Number(P)).toFixed(3), " BNB"]
                                                }), Object(r.jsx)("p", {
                                                    children: "*Pool and Rewards are always changing based on buys, sells, collects by others and your percentage holdings.",
                                                    children: " Your Reward     Share"
                                                }), Object(r.jsxs)("h5", {
                                                    children: [" ", a, " %"]
                                                }), Object(r.jsx)("h6", {
                                                    
                                                }), Object(r.jsx)("br", {}), !_ && 0 == J && Object(r.jsx)("h5", {
                                                    style: {
                                                        color: "red"
                                                    },
                                                    children: "Network Error: Please Try Again Later Or Use a Different Browser"
                                                }), !_ && 0 != J && Object(r.jsxs)("h5", {
                                                    children: ["Next Collect Date: ", new Date(1e3 * J).toLocaleString("en-US", {
                                                        weekday: "long"
                                                    }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                        month: "long"
                                                    }), " ", new Date(1e3 * J).toLocaleString("en-US", {
                                                        day: "numeric"
                                                    }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                        year: "numeric"
                                                    }), "  ", new Date(1e3 * J).toLocaleString("en-US", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: !0
                                                    })]
                                                }), _ && Object(r.jsx)("h5", {
                                                    children: "Next Collect Date: You need to Buy and Hold Tokens to Earn BNB"
                                                }), Object(r.jsx)("div", {
                                                    className: "Collect_MONEY mt-5",
                                                    children: !_ && J < Math.round(Date.now() / 1e3) && P > 0 ? Object(r.jsx)("a", {
                                                        onClick: function() {
                                                            return Pe.apply(this, arguments)
                                                        },
                                                        className: "COLLECTION_MONEY bubbly-button",
                                                        children: "Collect my BNB "
                                                    }) : !_ && J - Math.round(Date.now() / 1e3) > 946684782 ? Object(r.jsxs)("div", {
                                                        children: [Object(r.jsx)("p", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "Your Wallet is Under Zero Balance Punishment!"
                                                        }), Object(r.jsx)("a", {
                                                            onClick: function() {
                                                                ke()(Object(r.jsxs)("div", {
                                                                    children: [Object(r.jsx)("h5", {
                                                                        children: "Your wallet is under Zero Balance Punishment. This occurs due to selling of all HODL tokens. "
                                                                    }), Object(r.jsxs)("h5", {
                                                                        children: [Object(r.jsx)("br", {}), "To continue earning BNB rewards please buy HODL tokens or transfer to a New Wallet."]
                                                                    })]
                                                                }))
                                                            },
                                                            className: "COLLECTION_MONEY bubbly-button",
                                                            children: "More Information !"
                                                        })]
                                                    }) : !_ && J > Math.round(Date.now() / 1e3) && P > 0 ? Object(r.jsx)("a", {
                                                        onClick: function() {
                                                            ke()(Object(r.jsxs)("div", {
                                                                children: [Object(r.jsx)("h5", {
                                                                    children: '"Please wait till your collectible date is reached"'
                                                                }), Object(r.jsxs)("p", {
                                                                    children: ["Your Collectible Date is ", new Date(1e3 * J).toLocaleString("en-US", {
                                                                        weekday: "long"
                                                                    }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                                        month: "long"
                                                                    }), " ", new Date(1e3 * J).toLocaleString("en-US", {
                                                                        day: "numeric"
                                                                    }), ", ", new Date(1e3 * J).toLocaleString("en-US", {
                                                                        year: "numeric"
                                                                    }), "  ", new Date(1e3 * J).toLocaleString("en-US", {
                                                                        hour: "numeric",
                                                                        minute: "numeric",
                                                                        hour12: !0
                                                                    })]
                                                                })]
                                                            }))
                                                        },
                                                        className: "COLLECTION_MONEY bubbly-button",
                                                        children: "Collect my BNB "
                                                    }) : !_ && (J < Math.round(Date.now() / 1e3) || J > Math.round(Date.now() / 1e3)) && P <= 0 && 0 != J ? Object(r.jsxs)("div", {
                                                        children: [Object(r.jsx)("p", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "Your Wallet is Under Zero Balance Punishment!"
                                                        }), Object(r.jsx)("a", {
                                                            onClick: function() {
                                                                ke()(Object(r.jsx)("div", {
                                                                    children: Object(r.jsx)("h5", {
                                                                        children: "You are on Zero HODL balance Punishment, Please buy HODL from new wallet to participate in HODL BNB rewards."
                                                                    })
                                                                }))
                                                            },
                                                            className: "COLLECTION_MONEY bubbly-button",
                                                            children: "More Information !"
                                                        })]
                                                    }) : _ || 0 != J ? Object(r.jsx)("a", {
                                                        onClick: function() {
                                                            return He.apply(this, arguments)
                                                        },
                                                        className: "COLLECTION_MONEY bubbly-button",
                                                        children: "Collect my BNB"
                                                    }) : Object(r.jsx)("div", {})
                                                }), Object(r.jsx)("br", {}), P >= 1 && Object(r.jsxs)("p", {
                                                    children: [" 20% of reward will be donated towards charity.", Object(r.jsx)("a", {
                                                        href: "https://hodltoken.gitbook.io/hodl/features/charities-collection",
                                                        target: "_blank",
                                                        children: " More Info"
                                                    }), " "]
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), Object(r.jsx)("section", {
                                id: "services",
                                className: "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2",
                                children: Object(r.jsx)("div", {
                                    className: "container",
                                    "data-aos": "fade-up",
                                    children: Object(r.jsxs)("div", {
                                        className: "row",
                                        children: [Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "300",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: "data:image/png;base64,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"
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Max Transaction Amount"
                                                }), Object(r.jsxs)("p", {
                                                    children: ["$HODL ", (new Intl.NumberFormat).format(a), " "]
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch mt-md-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "200",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: O
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Total liquidity pool"
                                                }), Object(r.jsx)("p", {
                                                    children: Object(r.jsx)(q.a, {
                                                        value: (y * M * 2).toFixed(2),
                                                        formatValue: function(e) {
                                                            return "$ ".concat((new Intl.NumberFormat).format(e))
                                                        },
                                                        duration: 300
                                                    })
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "300",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: "data:image/png;base64,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"
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Current 1 mil $HODL Price"
                                                }), Object(r.jsx)("p", {
                                                    children: Object(r.jsx)(q.a, {
                                                        value: Number(1e6) * Number(M) / Number(j) * y,
                                                        formatValue: function(e) {
                                                            return "$ ".concat(e.toFixed(8))
                                                        },
                                                        duration: 300
                                                    })
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "400",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAD+klEQVR4nO2dT2hTWRjFz5dYbeOfCu5GXXShuBGEuFFbO6ngUwepG2HArYIo6k7dzFAQV678B2WGWY1/EAYGcWFTaNqpihsHRlTEVUWtu4pFjRGb97lIinlp7Txf471f6/mt8prHuaec3Nzcs3gXIIQQQpIhPgfP3rvXlBl70w3oHgWyAqwGsLj69kgIPXwn2HbTp8daXPhdMHubyejoK3RjbPwMIGuAaT8ZbWnI7wBWObY2La78ug+kpyfVvqnzNKAnPU/QeDj2m/rmI9TRvqnztEBPxrh1pAw98M0N/Q+u/Tr9iHb0Fboh+Ltu3BIgvdDwaotMPOoPgncuPc2ED7/OAqksiOOPJr+DqzxLQ34aCnIPXfmIiy+/zr6yKr9OIv9cyWoYgD+/DtcQ3RO9ll6rYVTw49flor4xMnBYvuJw7CR48esykJW1F9Kcfuxw7CR48esykCW1F0O53FuHYyfBi1/n+xAyM96qk0k68gX17cESnCHGYCDGYCDG8L6G3Aq6TFa+vtY2zhBjMBBjMBBjMBBjMBBjMBBjMBBjeN+HsMuKwhliDAZiDAZiDO9rCLusKJwhxmAgxmAgxmAgxmAgxmAgxmAgxvC+D2GXFYUzxBgMxBgMxBje1xB2WVE4Q4zBQIzBQIzBQIzBQIzBQIzBQIzhfR/CLisKZ4gxGIgxGIgxvK8h7LKicIYYg4EYg4EYg4EYg4EYw2UgT2tejzgcNyle/DoLJIQeEmBUgNEQetjVuEnx5XdWe4D2/oG9onKuKnXkVpD7qxGmOvKDP0P1PAShQI4OB7lrDdZNq+qx2zu2/WlNN1EgW67fXiqLPpwSkaM1GgrI2bDU9Oud7vY3jdZNL8QvSR+zN5d0vyqQ7I0bmUxTZh9EegD88IXbXkK1Z2JZy6W7mze/b7Ru8WPx8r+7dxfnoy4wQyA/Dg42o4jlmiqvDkU2QNAFyE4ArTG1xwG9CUUhpfqfhOnnyOA1AMxS9zWgfZDUQKpcvl9qwrOWdHp8rukO5XKl6W6eEsjW/sIuVVwA0BZvPH1QlVof02BM5r3utOeNTP2VpfgN8cIYA3C8uKI1W1zRmoXgBIBXMc1Q9/N5IxGmzpB84YXWPUQ4ij5WSG8GH/+oPxlgez6/uCQL94eqBwVYF8PUd60rwOhw0LWq7m9RtuQHdqYgF1EJ5S2A5yp4IqpDggV9w0FnrE3S1vw/bYqJHYJUTqFrUTkeaPLhxNSt7m8sHelECCFkbsMuy5guuyxjuuyyDOkC7LK86bLLsqfLLsuYLrssa7rssmzpsssihBDSUNhlGdNll2VMl12WIV2AXZY3XXZZ9nTZZRnTZZdlTZddli1ddlmEEEIayifP/MUhen7JTwAAAABJRU5ErkJggg=="
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Total BNB in liquidity pool"
                                                }), Object(r.jsx)("p", {
                                                    children: Object(r.jsx)(q.a, {
                                                        value: M,
                                                        formatValue: function(e) {
                                                            return "BNB ".concat((new Intl.NumberFormat).format(e))
                                                        },
                                                        duration: 300
                                                    })
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "400",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: A
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Total BNB in reward pool"
                                                }), Object(r.jsx)("p", {
                                                    children: Object(r.jsx)(q.a, {
                                                        value: l,
                                                        formatValue: function(e) {
                                                            return "BNB ".concat((new Intl.NumberFormat).format(e))
                                                        },
                                                        duration: 300
                                                    })
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "col-xl-4 col-md-6 d-flex align-items-stretch",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "100",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsx)("div", {
                                                    className: "icon",
                                                    children: Object(r.jsx)("img", {
                                                        src: "data:image/png;base64,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"
                                                    })
                                                }), Object(r.jsx)("h5", {
                                                    children: "Your $HODL balance"
                                                }), Object(r.jsxs)("p", {
                                                    children: ["$HODL ", (new Intl.NumberFormat).format(U)]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), Object(r.jsx)("section", {
                                id: "cta"
                            }), Object(r.jsx)("section", {
                                id: "services",
                                className: "services section-bg section_feature dashboard_page mb-0 pb-0 pt-2",
                                children: Object(r.jsx)("div", {
                                    className: "container",
                                    "data-aos": "fade-up",
                                    children: Object(r.jsx)("div", {
                                        className: "row mt-3",
                                        children: Object(r.jsx)("div", {
                                            className: "col-xl-12 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0",
                                            "data-aos": "zoom-in",
                                            "data-aos-delay": "300",
                                            children: Object(r.jsxs)("div", {
                                                className: "icon-box",
                                                children: [Object(r.jsxs)("div", {
                                                    className: "mb-3 row",
                                                    children: [Object(r.jsx)("label", {
                                                        for: "staticEmail",
                                                        className: "col-sm-2 col-form-label pt-0",
                                                        children: "Disruptive Transfer between 2 wallets"
                                                    }), Object(r.jsxs)("div", {
                                                        className: "col-sm-10",
                                                        children: ["Balance: ", U, " HODL"]
                                                    })]
                                                }), Object(r.jsxs)("div", {
                                                    className: "mb-3 row",
                                                    children: [Object(r.jsx)("label", {
                                                        for: "inputPassword",
                                                        className: "col-sm-2 col-form-label",
                                                        children: "Recipient (address)"
                                                    }), Object(r.jsx)("div", {
                                                        className: "col-sm-10",
                                                        children: Object(r.jsx)("input", {
                                                            onKeyUp: function(e) {
                                                                return ne(e.target.value)
                                                            },
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "inputPassword"
                                                        })
                                                    })]
                                                }), Object(r.jsxs)("div", {
                                                    className: "mb-3 row",
                                                    children: [Object(r.jsx)("label", {
                                                        for: "inputPassword",
                                                        className: "col-sm-2 col-form-label",
                                                        children: "Amount (HODL)"
                                                    }), Object(r.jsx)("div", {
                                                        className: "col-sm-10",
                                                        children: Object(r.jsx)("input", {
                                                            onKeyUp: function(e) {
                                                                return oe(e.target.value)
                                                            },
                                                            type: "number",
                                                            className: "form-control",
                                                            id: "inputPassword"
                                                        })
                                                    })]
                                                }), Object(r.jsx)("div", {
                                                    className: "Collect_MONEY mt-5 text-center",
                                                    children: Object(r.jsx)("a", {
                                                        onClick: function() {
                                                            return We.apply(this, arguments)
                                                        },
                                                        className: "COLLECTION_MONEY pl-5 pr-5",
                                                        children: "Send"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })]
                        }), Object(r.jsx)("a", {
                            href: "#",
                            className: "back-to-top",
                            children: Object(r.jsx)("i", {
                                className: "ri-arrow-up-line"
                            })
                        }), Object(r.jsx)("div", {
                            id: "preloader"
                        })]
                    })
                },
                Ce = function(e) {
                    Object(V.a)(a, e);
                    var t = Object(W.a)(a);

                    function a(e) {
                        var n;
                        return Object(U.a)(this, a), (n = t.call(this, e)).buy = Object(v.a)(w.a.mark((function e() {
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        z()("Presale goes Live on 10th May, 2021");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.state = {
                            showcomponent1: !0,
                            showcomponent2: !1,
                            TotalbnbinrewardPool: 0,
                            bnbreward: 0
                        }, n
                    }
                    return Object(F.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = window.sessionStorage.getItem("walletAddress"),
                                a = new B.a("https://bsc-dataseed1.binance.org:443"),
                                n = k,
                                s = new a.eth.Contract(n, "0x0e3eaf83ea93abe756690c62c72284943b96a6bc");
                            t && (a.eth.getBalance("0x0e3eaf83ea93abe756690c62c72284943b96a6bc").then((function(t) {
                                var n = a.utils.toBN(t).toString();
                                e.setState({
                                    TotalbnbinrewardPool: a.utils.fromWei(n, "ether")
                                })
                            })), s.methods.calculateBNBReward(t).call().then((function(t) {
                                var n = a.utils.toBN(t).toString();
                                e.setState({
                                    bnbreward: a.utils.fromWei(n, "ether")
                                })
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.showcomponent1,
                                t = this.state.showcomponent2;
                            if (window.sessionStorage.getItem("walletAddress")) {
                                e = !1, t = !0;
                                var a = (Number(this.state.bnbreward) / Number(this.state.TotalbnbinrewardPool) * 100).toFixed(3)
                            } else e = !0, t = !1;
                            return Object(r.jsxs)("div", {
                                children: [Object(r.jsx)(ve, {}), Object(r.jsxs)("section", {
                                    id: "services",
                                    className: "services section-bg section_feature mb-0 pb-0 ",
                                    children: [Object(r.jsx)("br", {}), Object(r.jsx)("br", {}), Object(r.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        children: Object(r.jsx)("div", {
                                            className: "row",
                                            children: Object(r.jsx)("div", {
                                                className: "col-xl-12 col-md-12 d-flex align-items-stretch",
                                                "data-aos": "zoom-in",
                                                "data-aos-delay": "100",
                                                style: {
                                                    justifyContent: "center"
                                                },
                                                children: Object(r.jsxs)("div", {
                                                    className: "icon-box text-center",
                                                    children: [Object(r.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(r.jsx)("img", {
                                                            src: E
                                                        })
                                                    }), Object(r.jsx)("h2", {
                                                        children: "100,000 HOLDERS GIVEAWAY"
                                                    }), t && Object(r.jsxs)("div", {
                                                        children: ["            ", Object(r.jsx)("h5", {
                                                            children: " Your Reward     Share"
                                                            
                                                        }), Object(r.jsxs)("h5", {
                                                            children: [" ", a, " %"]
                                                        }), Object(r.jsx)("h6", {
                                                            
                                                        })]
                                                    }), Object(r.jsx)("h5", {}), Object(r.jsx)("h6", {
                                                        children: " We are doing a giveaway to our first 100,000 holders.Send your tokens to our Smart Contract addres and we will send you double the amount "
                                                    }), Object(r.jsx)("br", {}), Object(r.jsx)("a", {
                                                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
                                                        className: "btn-get-started scrollto dashboard",
                                                        target: "_blank",
                                                        children: "Buy $HODL"
                                                    })]
                                                })
                                            })
                                        })
                                    })]



                                }), e && Object(r.jsx)("section", {
                                    id: "services",
                                    className: "services section-bg section_feature mb-0 pb-0 ",
                                    children: Object(r.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        children: Object(r.jsx)("div", {
                                            className: "row",
                                            children: Object(r.jsx)("div", {
                                                className: "col-xl-12 col-md-12 d-flex align-items-stretch",
                                                "data-aos": "zoom-in",
                                                "data-aos-delay": "100",
                                                style: {
                                                    justifyContent: "center"
                                                },
                                                children: Object(r.jsxs)("div", {
                                                    className: "icon-box text-center",
                                                    children: [Object(r.jsx)("h2", {
                                                        children: "You are not connected or not using Binance Smart Chain network"
                                                    }), Object(r.jsx)("h3", {
                                                        children: "To use the app, make sure: "
                                                    }), Object(r.jsx)("h3", {
                                                        children: "You are using the Binance Smart Chain network You need to connect wallet to continue"
                                                    }), Object(r.jsx)("br", {}), Object(r.jsx)("br", {}), Object(r.jsx)("h3", {
                                                        children: "Please switch to BSC Network if you use:"
                                                    }), Object(r.jsx)("h4", {
                                                        children: "Metamask"
                                                    }), Object(r.jsx)("h4", {
                                                        children: "TrustWallet"
                                                    }), Object(r.jsx)("br", {}), Object(r.jsx)("br", {})]
                                                })
                                            })
                                        })
                                    })
                                }), t && Object(r.jsx)(Me, {})]
                            })
                        }
                    }]), a
                }(n.Component);
            _.a.init(), c.a.render(Object(r.jsx)(s.a.StrictMode, {
                children: Object(r.jsx)($.a, {
                    children: Object(r.jsxs)(ee.c, {
                        children: [Object(r.jsx)(ee.a, {
                            path: "/dashboard",
                            children: Object(r.jsx)(Ce, {})
                        }), Object(r.jsx)(ee.a, {
                            path: "/guide",
                            children: Object(r.jsx)(he, {})
                        }), Object(r.jsx)(ee.a, {
                            path: "/privacy",
                            children: Object(r.jsx)(je, {})
                        }), Object(r.jsx)(ee.a, {
                            path: "/terms",
                            children: Object(r.jsx)(me, {})
                        }), Object(r.jsx)(ee.a, {
                            path: "/",
                            children: Object(r.jsx)(X, {})
                        })]
                    })
                })
            }), document.getElementById("root")), K()
        }
    },
    [
        [937, 1, 2]
    ]
]);
//# sourceMappingURL=main.f9f082e6.chunk.js.map