"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useReadContract } from "thirdweb/react";
import { client } from "../../client.ts";
import Header from "../../../../components/Header.js";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import NFTCard from "../../../../components/NFTCard.js";
import { defineChain, getContract } from "thirdweb";
import { isERC721 } from "thirdweb/extensions/erc721";

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const Collection = () => {
  const params = useParams();
  const collectionId = params?.collectionId;
  const [collection, setCollection] = useState({});
  console.log(params);

  // Fetch NFT contract
  const contract = getContract({
    client,
    address: "0x1D97aafFCC43316a03ee7dB0d2eb4D68BC8dbED4",
    chain: defineChain(11155111),
  });

  console.log(contract);
  console.log(collectionId);

  // Fetch collection data from Sanity
  useEffect(() => {
    if (!collectionId) return;

    const fetchCollectionData = async () => {
      const query = `*[_type == "marketItems" && contractAddress == "${collectionId}"] {
        "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title,
        floorPrice,
        "allOwners": owners[]->,
        description
      }`;

      // Uncomment to fetch data from Sanity
      // const collectionData = await client.fetch(query);
      // setCollection(collectionData[0] || {});
    };

    fetchCollectionData();
  }, [collectionId]);
  return (
    <div className="overflow-hidden">
      <Header />
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src={collection?.bannerImageUrl || "https://via.placeholder.com/200"}
          alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src={collection?.imageUrl || "https://via.placeholder.com/200"}
            alt="profile"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>{collection?.title}</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by{" "}
            <span className="text-[#2081e2]">{collection?.creator}</span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              {/* <div className={style.statValue}>{nfts?.length || 0}</div> */}
              <div className={style.statName}>items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {collection?.allOwners?.length || 0}
              </div>
              <div className={style.statName}>owners</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {collection?.floorPrice || 0}
              </div>
              <div className={style.statName}>floor price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {collection?.volumeTraded || 0}K
              </div>
              <div className={style.statName}>volume traded</div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}>{collection?.description}</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Uncomment and update with actual NFT data */}
        {/* {nfts?.map((nft, id) => (
          <NFTCard key={id} nftItem={nft} title={collection?.title} />
        ))} */}
      </div>
    </div>
  );
};

export default Collection;
