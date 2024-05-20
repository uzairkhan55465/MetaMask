import React from 'react'
import Logo from "../../assets/images/logo.png"
import Connect from "../../assets/images/link.png"
import { useState, useEffect } from 'react';
import Coin1 from "../../assets/images/rainbow.svg";
import Coin2 from "../../assets/images/coin.svg";
import Coin3 from "../../assets/images/meta.svg";
import Coin4 from "../../assets/images/bluecoin.svg";
import { ethers } from 'ethers';
const Header = () => {
    const [isFixed, setIsFixed] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const checkIfWalletIsConnected = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.listAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0].address);
                    await fetchBalance(accounts[0].address);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            setError('MetaMask is not installed. Please install it to use this app.');
        }
    };

    const connectWallet = async () => {
        setLoading(true);
        setError(null); 
        if (window.ethereum) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const account = await signer.getAddress();
            setAccount(account);
            await fetchBalance(account);
          } catch (err) {
            console.error(err);
            setError('Failed to connect to MetaMask.');
          } finally {
            setLoading(false);
          }
        } else {
          setError('MetaMask is not installed. Please install it to use this app.');
          setLoading(false);
        }
      };
      
      


    const fetchBalance = async (account) => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const balance = await provider.getBalance(account);
            setBalance(ethers.formatEther(balance));
        } catch (err) {
            console.error('Error fetching balance:', err);
            setError('Failed to fetch balance.');
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        setBalance(null);
        setError(null); 
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(false);
            } else {
                setIsFixed(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <nav className={`text-white w-full ${isFixed ? 'fixed' : 'relative'} bg-[#08080a] bg-opacity-25 transition-all duration-300`}>
            {showModal && (
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur">
                        <div className="relative w-[720px] my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex w-full bg-[#1a1b1f] outline-none focus:outline-none">
                                <div className="py-6 px-6 border-r-2 border-[#2c2d31] pe-10 w-[45%]">
                                    <h3 className="text-[18px] font-[700] text-white">Connect a Wallet</h3>
                                    <h6 className="text-[#a3a4a5] font-[700] pt-5 pb-4">Popular</h6>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex cursor-pointer">
                                            <img src={Coin1} alt="" className="w-7 h-8" />
                                            <h2 className="text-white font-[700] ps-4 mb-4">Rainbow</h2>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <img src={Coin2} alt="" />
                                            <h2 className="text-white font-[700] ps-4 mb-4">Coinbase Wallet</h2>
                                        </div>
                                        <div className="flex cursor-pointer" onClick={connectWallet}>
                                            <img src={Coin3} alt="" />
                                            <h2 className="text-white font-[700] ps-4 mb-4">MetaMask</h2>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <img src={Coin4} alt="" />
                                            <h2 className="text-white font-[700] ps-4 mb-4">WalletConnect</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-[50%]">
                                    <div className="flex flex-col items-center">
                                        <img src={Coin3} alt="" className="w-[40px]" />
                                        {loading ? (
                                            <>
                                                <p className="text-white font-[700] pt-4">Opening MetaMask...</p>
                                                <div>
                                                    <button className="bg-[#b0d357] rounded-[30px] text-white border-none ps-4 pe-4 pt-1 pb-1 mt-2 text-[14px] " onClick={connectWallet}>Retry</button>
                                                </div>
                                            </>
                                        ) : account ? (
                                            <>
                                                <div>
                                                    <p>Connected as: {account}</p>
                                                    <p>Balance: {balance} ETH</p>
                                                </div>
                                                <button onClick={disconnectWallet} className="bg-[#b0d357] text-white rounded-[30px] border-none ps-4 pe-4 pt-1 pb-1 mt-2 text-[14px] ">Disconnect</button>
                                            </>
                                        ) : (
                                            <p className="text-white font-[700] pt-4">
                                                {error || 'Not connected'}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="xl:container xl:mx-auto">
                    <div className="flex justify-between items-center px-4 md:px-12 xl:px-[88px] py-6">
                        <a aria-current="page" className="active" href="/">
                            <img src={Logo} className="h-14 lg:h-20" alt="logo" />
                        </a>
                        <div className="md:flex items-center gap-8 lg:gap-16 hidden">
                            <div className="flex gap-4 lg:gap-8 text-md font-medium items-center">
                                <a aria-current="page" className="active" href="/">
                                    <div className="cursor-pointer font-[600] text-[17px]">Home</div>
                                </a>
                                <a className="" href="/overview">
                                    <div className="cursor-pointer font-[600] text-[17px]">Overview</div>
                                </a>
                                <a className="" href="/about-us">
                                    <div className="cursor-pointer font-[600] text-[17px]">About Us</div>
                                </a>
                                <div className="cursor-pointer font-[600] text-[17px]">FAQ</div>
                                <a className="" href="/secondary-market">
                                    <div className="cursor-pointer font-[600] text-[17px]">Marketplace</div>
                                </a>
                            </div>
                            <div className="flex gap-4 lg:gap-6 text-md font-medium pe-6">
                                <button className="w-32 border border-white px-8 py-[7px] rounded-full font-[600] text-[17px]">Signup</button>
                                <button className="w-32 bg-[#b0d357] px-8 py-[1.5px] rounded-full text-black font-[600] text-[17px]">Login</button>
                                <div
                                    className="flex flex-row justify-center items-center gap-2 border border-white w-32 cursor-pointer px-7 py-[1.5px] rounded-full"
                                    onClick={() => setShowModal(true)}
                                >
                                    <img src={Connect} alt="NAVA" />
                                    <div className='font-[600] text-[17px]'>Connect</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                color="#B0D357"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "rgb(176, 211, 87)" }}
                            >
                                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header