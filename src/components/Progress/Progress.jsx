import React from "react";
import { Link } from "react-router-dom";

const Progress = () => {
  return (
    <>
      <div className="py-20 font-poppins border-t border-gray-700">
        <h3 className="text-white text-center mb-10 text-[20px] ">
          Opening the doors of new world of Dapp experiences.
        </h3>
        <div className="w-[90%] lg:w-[70%] mx-auto border-l-2 border-white pl-8 pt-5">
          <ul className="border-b-[1px] border-gray-700">
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Swap/Exchange</p>
              <span className="text-gray-600 mb-4 block">
                For any issues with swapping/exchange of coins
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Fix Swap Issues →
              </Link>
            </li>

            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Validation</p>
              <span className="text-gray-600 mb-4 block">
                For any validation click here
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Validation →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Claim Airdrop</p>
              <span className="text-gray-600 mb-4 block">
                to Claim Airdrop click here
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Click here to Claim Airdrop →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Rectification</p>
              <span className="text-gray-600 mb-4 block">
                For Rectification click here
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectification →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">
                Decentralized/Centralized Trading Wallet
              </p>
              <span className="text-gray-600 mb-4 block">
                Connect decentralised web applications to mobile wallets or
                enable DApp on mobile wallets/extension.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Connect →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Buy/Sell</p>
              <span className="text-gray-600 mb-4 block">
                Connect to enable Buy/Sell of DApp on mobile wallets/extension.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Connect →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Verification</p>

              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Verify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Withdrawal</p>
              <span className="text-gray-600 mb-4 block">
                Move your Cryptocurrency balance off the revolute platform to an
                external crypto wallet that you control such as a Ledger or a
                Trezor.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Withdraw →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">
                Stake/Harvest Stakings/Unstake
              </p>
              <span className="text-gray-600 mb-4 block">
                Stake your assets and when you choose to redeem, we'll return
                your assets to your spot wallet the followimg day
              </span>
              <Link
                to="/wallet"
                className=" w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Stake →
              </Link>
              <Link
                to="/wallet"
                className="ms-1 w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Harvest Stakings →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Login Issues</p>
              <span className="text-gray-600 mb-4 block">
                if you have issues logging into your wallet.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Fix →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Farm/Pool</p>
              <span className="text-gray-600 mb-4 block">
                if you have issues logging into your wallet.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Fix →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">
                Missing Funds/Irregular token balance
              </p>
              <span className="text-gray-600 mb-4 block">
                Recover missing or lost funds.
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Fix →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Exhorbitant Gas fees</p>

              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Fix →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Transaction Error</p>
              <span className="text-gray-600 mb-4 block">
                Do you have any issues with transactions?
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">
                Issue with Trading Wallet
              </p>
              <span className="text-gray-600 mb-4 block">
                Do you have any issues with your trading wallet?
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Minting</p>
              <span className="text-gray-600 mb-4 block">
                Fix all minting related issues
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Buy Presale</p>
              <span className="text-gray-600 mb-4 block">
                Fix all Buy Presale related issues
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Claim Prelsale</p>
              <span className="text-gray-600 mb-4 block">
                Fix all Claim Prelsale related issues
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Withdraw Token</p>
              <span className="text-gray-600 mb-4 block">
                Fix all Withdraw Token related issues
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
            <li className="relative dot mb-10">
              <p className="text-white font-semibold t">Swap Token</p>
              <span className="text-gray-600 mb-4 block">
                Fix all Swap Token related issues
              </span>
              <Link
                to="/wallet"
                className="block w-fit p-3 bg-white rounded-[7px] text-[13px]  text-gray-800 "
              >
                Rectify →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Progress;
