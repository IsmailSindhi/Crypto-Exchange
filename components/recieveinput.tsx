export default function ReceiveInput() {
    return (
      <>
     <div className="relative flex items-center w-[187px] border-2 border-neutral-200 dark:border-neutral-500  rounded-lg">
            <input
              className="c-input"
              placeholder="You recive"
            />
            <div className="absolute right-2">
              <span className="text-sm font-GT_Pressura_Mono_Regular eq-sign cursor-default">ETH</span>
            </div>
          </div>
      </>
    );
  }
  