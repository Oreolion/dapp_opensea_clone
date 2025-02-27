import Image from "next/image";
import React from "react";

const style = {
  container: ``,
  contentWrapper: ``,
  copyContainer: ``,
  title: ``,
  description: "",
  ctaContainer: ``,
  accentedButton: ``,
  button: ` `,
  cardContainer: `border-red-300 border-2 border-solid rounded-[3rem]`,
  infoContainer: `border-2 border-solid border-red-300 h-20 bg-[#313338] p-4 rounded-b-lg flex gap-4 items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `border-2 border-solid border-red-300 flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur mx-auto flex items-center justify-between max-md:justify-between">
        {/* <div className="flex h-screen gap-[6rem] flex-wrap items-center"> */}
          <div className="w-1/2 text-white flex flex-col gap124 justify-center mr-16">
            <div className="text-white text-[46px] font-semibold">
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className="text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]">
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className="flex gap-4">
              <button className="text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer">
                Explore
              </button>
              <button className="text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer">
                Create
              </button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <Image
              height={230}
              width={400}
              className="rounded-t-lg object-cover"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <Image
                height={60}
                width={60}
                className="rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt="image"
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
