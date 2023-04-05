import Image from "next/image";
export default function Exchange() {
  return (
    <>
      <div className="grid grid-cols-3 max-w-xl w-full text-black dark:text-white bg-l-fg dark:bg-d-fg py-12 border-[3px] border-gray-200 dark:border-gray-600 rounded-lg px-3 lg:px-0">
        <h6 className="col-span-3 w-full flex justify-center items-center gap-2 text-black dark:text-neutral-300">
          1 ETH = 0.9886866 ETH
        </h6>
        <div className="flex col-span-3 lg:px-12 px-1 mt-5 gap-5 items-center">
          <button className="w-full text-black dark:text-white rounded-t-md border-2 border-b-4  rounded-lg pt-3 border-gray-500 hover:border-purple-400">
            <div className="flex flex-col items-center p-5">
              <Image
                src="https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg"
                alt="Picture of the author"
                className="w-24 h-24 mb-8"
                width={24}
                height={24}
              />

              <h5 className="text-neutral-400">You Send</h5>
              <h1 className="mt-2 font-bold">ETH</h1>
            </div>
          </button>
          <svg
            className="w-8 h-8 fill-gray-300  hover:fill-purple-400 hover:w-10 hover:h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
          </svg>
          <button className="w-full text-black dark:text-white rounded-t-md border-2 border-b-4  rounded-lg pt-3 border-gray-500 hover:border-purple-400">
            <div className="flex flex-col items-center p-5">
              <Image
                src="https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg"
                alt="Picture of the author"
                className="w-24 h-24 mb-8"
                width={24}
                height={24}
              />

              <h5 className="text-neutral-400">You Receive</h5>
              <h1 className="mt-2 font-bold">ETH</h1>
            </div>
          </button>
        </div>
        <div className="flex items-center justify-center col-span-3 gap-7 lg:mx-10 mx-1 mt-3">
          <div className="flex items-center w-full border border-neutral-200 dark:border-neutral-700  rounded-lg">
            <input
              className="w-full text-sm bg-transparent py-2 px-3   rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="You send"
            />
            <div className="border-l border-neutral-200 dark:border-neutral-700 py-2 px-3 dark:bg-d-h rounded-r-lg">
              <span className="text-sm">ETH</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 stroke-white hover:stroke-purple-400"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
          <div className="flex items-center w-full border border-neutral-200 dark:border-neutral-700  rounded-lg">
            <input
              className="w-full text-sm bg-transparent py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="You send"
            />
            <div className="border-l border-neutral-200 dark:border-neutral-700 py-2 px-3 dark:bg-d-h rounded-r-lg">
              <span className="text-sm">ETH</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-5 col-span-3 px-12 lg:px-1">
          <p className="mb-2 text-lg">Receiving Address</p>
          <div className="flex border border-neutral-200 dark:border-neutral-700 rounded-lg ">
            <input
              className="w-96 text-sm bg-transparent py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Your ETH address"
            />
            <div className="border-l border-neutral-200 dark:border-neutral-700 py-2 px-3 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-5 col-span-3 px-12 lg:px-1">
            <button className="bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded-md border-2 dark:border-neutral-700 px-12 py-2">
              Exchange
            </button>
          </div>
          <div className="col-span-3 w-full text-sm mt-5 flex justify-center items-center gap-2"></div>
        </div>
      </div>
    </>
  );
}
