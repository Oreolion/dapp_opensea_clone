"use client";
import { useEffect } from "react";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import toast, { Toaster } from "react-hot-toast";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { defineChain, ethereum } from "thirdweb/chains";
import sanityClient from "../../lib/sanityClient";

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
  const account = useActiveAccount();
  const { data: balance, isLoading } = useWalletBalance({
    client: client, 
    chain: defineChain(11155111),
    address: account?.address,
  });

  console.log(balance);
  

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!account?.address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: account.address,
        userName: account.address,
        walletAddress: account.address,
      };

      try {
        const result = await sanityClient.createIfNotExists(userDoc);
        welcomeUser(result.userName);
      } catch (error) {
        console.error("Sanity error:", error);
      }
    })();
  }, [account?.address]);

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />

      {account?.address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <ConnectButton
            client={client}
            appMetadata={{
              name: "OpenSea App",
              url: "http://localhost:3000",
            }}
          />
          <div className={style.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
