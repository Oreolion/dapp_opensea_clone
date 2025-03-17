"use client";
import { useEffect } from "react";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import toast, { Toaster } from "react-hot-toast";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { createClient } from "@sanity/client";
import { ethereum } from "thirdweb/chains";

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export const sanityClient = createClient({
  projectId: "62vfb30n",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-25",
  token: "skgk1Zmr2MQkCdnSmbwu85rv3mYztMPL8nP0XzgNIBbKl0TQDf0OiOLKqmgVCh0QlAi2DI9wsou7hLlGETOyitMipfXxgXIXyt48cgJgvdq2YgGPV1ARqgB9ckURJWUSX6kJeN8znS0kzGSGBkTxyvuMa9O7JWajiEl6VF0BvbA2dxa0ACcn", // Optional: Use a token for write access
});

export default function Home() {
  const account = useActiveAccount();
  const { data: balance, isLoading } = useWalletBalance({
    client: client, 
    chain: ethereum,
    address: account?.address,
  });

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
              url: "http://localhost:3004",
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
