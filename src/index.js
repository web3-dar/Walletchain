import wallet_1 from "./assets/wallet-1.png";
import wallet_2 from "./assets/wallet-2.jpeg";
import wallet_3 from "./assets/wallet-3.jpeg";
import wallet_4 from "./assets/wallet-4.png";
import wallet_5 from "./assets/wallet-5.jpg";
import wallet_6 from "./assets/wallet-6.png";
import wallet_7 from "./assets/wallet-7.png";
import wallet_8 from "./assets/wallet-8.png";
import wallet_9 from "./assets/wallet-9.jpeg";
import wallet_10 from "./assets/wallet-10.png";
import wallet_11 from "./assets/wallet-11.png";
import wallet_12 from "./assets/wallet-12.jpeg";
import wallet_13 from "./assets/wallet-13.jpg";
import wallet_14 from "./assets/wallet14.png";
import wallet_15 from "./assets/wallet15.png";
import wallet_16 from "./assets/wallet16.png";
import wallet_17 from "./assets/wallet17.jpeg";
import wallet_18 from "./assets/wallet18.png";
import wallet_19 from "./assets/wallet19.png";
import wallet_20 from "./assets/wallet20.jpeg";
import wallet_21 from "./assets/wallet21.jpeg";
import wallet_22 from "./assets/wallet22.png";
import wallet_23 from "./assets/wallet23.png";
import wallet_24 from "./assets/wallet24.png";
import wallet_25 from "./assets/wallet25.jpg";
import wallet_26 from "./assets/wallet26.jpeg";
import wallet_27 from "./assets/wallet27.jpg";
import wallet_28 from "./assets/wallet28.png";
import wallet_29 from "./assets/wallet29.png";
import wallet_30 from "./assets/wallet30.png";
import wallet_31 from "./assets/wallet31.png";
import wallet_32 from "./assets/wallet32.png";
import wallet_33 from "./assets/wallet33.png";
import wallet_34 from "./assets/wallet34.png";
import wallet_35 from "./assets/wallet35.png";
import wallet_36 from "./assets/wallet36.png";
import wallet_37 from "./assets/wallet37.png";
import wallet_38 from "./assets/wallet38.png";
import wallet_39 from "./assets/wallet39.png";
import wallet_40 from "./assets/wallet40.png";
import wallet_41 from "./assets/wallet41.png";
import wallet_42 from "./assets/wallet42.png";
import wallet_43 from "./assets/wallet43.png";
import wallet_44 from "./assets/wallet44.png";
import wallet_45 from "./assets/wallet45.png";
import wallet_46 from "./assets/wallet46.png";
import wallet_47 from "./assets/wallet47.png";
import wallet_48 from "./assets/wallet48.png";
import wallet_49 from "./assets/wallet49.jpg";
import wallet_50 from "./assets/wallet50.png";
import wallet_51 from "./assets/wallet51.png";
import wallet_52 from "./assets/wallet52.png";
import wallet_53 from "./assets/wallet53.png";
import wallet_54 from "./assets/wallet55.png";
import wallet_55 from "./assets/wallet55.png";
import wallet_56 from "./assets/wallet56.png";
import wallet_57 from "./assets/wallet57.png";
import wallet_58 from "./assets/wallet58.png";
import wallet_59 from "./assets/wallet59.png";
import wallet_60 from "./assets/wallet60.png";
import wallet_61 from "./assets/wallet61.png";
import wallet_62 from "./assets/wallet62.png";
import wallet_63 from "./assets/wallet63.png";
import wallet_64 from "./assets/wallet66.png";
import wallet_65 from "./assets/wallet65.png";
import wallet_66 from "./assets/wallet66.png";
import wallet_67 from "./assets/wallet67.png";
import wallet_68 from "./assets/wallet68.png";
import wallet_69 from "./assets/wallet69.png";
import wallet_70 from "./assets/wallet70.png";
import wallet_71 from "./assets/wallet71.png";
import wallet_72 from "./assets/wallet72.png";
import wallet_73 from "./assets/wallet73.png";
import wallet_74 from "./assets/wallet74.png";

export const LOOP_DURATION = 6;

const wallets = [
  { id: 0, title: "Connect Wallet", img: wallet_1 },
  { id: 1, title: "Trust", img: wallet_2 },
  { id: 2, title: "Metamask", img: wallet_3 },
  { id: 3, title: "Ledger", img: wallet_4 },
  { id: 4, title: "BRD wallet", img: wallet_5 },
  { id: 5, title: "Coinbase", img: wallet_6 },
  { id: 6, title: "Saitama wallet", img: wallet_7 },
  { id: 7, title: "Terra station", img: wallet_8 },
  { id: 8, title: "Phantom wallet", img: wallet_9 },
  { id: 9, title: "Cosmos station", img: wallet_10 },
  { id: 10, title: "Exodus wallet", img: wallet_11 },
  { id: 11, title: "Rainbow", img: wallet_12 },
  { id: 12, title: "Argent", img: wallet_13 },
  { id: 13, title: "Binance chain", img: wallet_14 },
  { id: 14, title: "Safemoon", img: wallet_15 },
  { id: 15, title: "Gnosis Safe", img: wallet_16 },
  { id: 16, title: "Defi", img: wallet_17 },
  { id: 17, title: "Pillar", img: wallet_18 },
  { id: 18, title: "ImToken", img: wallet_19 },
  { id: 19, title: "ONTO", img: wallet_20 },
  { id: 20, title: "TokenPocket", img: wallet_21 },
  { id: 21, title: "Aave", img: wallet_22 },
  { id: 22, title: "Digitex", img: wallet_23 },
  { id: 23, title: "Portis", img: wallet_24 },
  { id: 24, title: "Formatic", img: wallet_25 },
  { id: 25, title: "MathWallet", img: wallet_26 },
  { id: 26, title: "BitPay", img: wallet_27 },
  { id: 27, title: "Ledger Live", img: wallet_28 },
  { id: 28, title: "WalETH", img: wallet_29 },
  { id: 29, title: "Authereum", img: wallet_30 },
  { id: 30, title: "Dharma", img: wallet_31 },
  { id: 31, title: "1inch Wallet", img: wallet_32 },
  { id: 32, title: "Huobi", img: wallet_33 },
  { id: 33, title: "Eidoo", img: wallet_34 },
  { id: 34, title: "MYKEY", img: wallet_35 },
  { id: 35, title: "Loopring", img: wallet_36 },
  { id: 36, title: "TrustVault", img: wallet_37 },
  { id: 37, title: "Atomic", img: wallet_38 },
  { id: 38, title: "Coin98", img: wallet_39 },
  { id: 39, title: "Tron", img: wallet_40 },
  { id: 40, title: "Alice", img: wallet_41 },
  { id: 41, title: "AlphaWallet", img: wallet_42 },
  { id: 42, title: "D'CENT", img: wallet_43 },
  { id: 43, title: "ZelCare", img: wallet_44 },
  { id: 44, title: "Nash", img: wallet_45 },
  { id: 45, title: "Coinmoni", img: wallet_46 },
  { id: 46, title: "GridPlus", img: wallet_47 },
  { id: 47, title: "CYBAVO", img: wallet_48 },
  { id: 48, title: "Tokenary", img: wallet_49 },
  { id: 49, title: "Torus", img: wallet_50 },
  { id: 50, title: "Spatium", img: wallet_51 },
  { id: 51, title: "SafePal", img: wallet_52 },
  { id: 52, title: "Inifito", img: wallet_53 },
  { id: 53, title: "wallet.io", img: wallet_54 },
  { id: 54, title: "Ownbit", img: wallet_55 },
  { id: 55, title: "EasyPocket", img: wallet_56 },
  { id: 56, title: "Bridge Wallet", img: wallet_57 },
  { id: 57, title: "Spark Point", img: wallet_58 },
  { id: 58, title: "ViaWallet", img: wallet_59 },
  { id: 59, title: "BitKeep", img: wallet_60 },
  { id: 60, title: "Vision", img: wallet_61 },
  { id: 61, title: "PEAKDEFI", img: wallet_62 },
  { id: 62, title: "Unstoppable", img: wallet_63 },
  { id: 63, title: "HaloDefi", img: wallet_64 },
  { id: 64, title: "Dok Wallet", img: wallet_65 },
  { id: 65, title: "Midas", img: wallet_66 },
  { id: 66, title: "Ellipal", img: wallet_67 },
  { id: 67, title: "KEYRING PRO", img: wallet_68 },
  { id: 68, title: "Aktionariat", img: wallet_69 },
  { id: 69, title: "Talken", img: wallet_70 },
  { id: 70, title: "Flare", img: wallet_71 },
  { id: 71, title: "KyberSwap", img: wallet_72 },
  { id: 72, title: "PayTube", img: wallet_73 },
  { id: 73, title: "Linen", img: wallet_74 },
];

export default wallets;
