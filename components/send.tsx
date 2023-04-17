import Image from "next/image";
export default function Send() {
    return (
      <>
        <button className="img-btn">
            <div className="flex flex-col items-center p-5 w-[180px]">
              <Image
              // /images
                src="/coins/svg/ETH.svg"
                // src="https://sideshift.ai/assets/eth-1f94df85.svg"
                alt="Picture of the author"
                className="w-[74px] h-[76px]"
                width={74}
                height={76}
              />
              <h5 className="text-neutral-400 font-verctex mt-5">You Send</h5>
              <h1 className="font-GT_Pressura_Mono_Bold">ETH</h1>
            </div>
          </button>
      </>
    );
  }
  