const Toolbar = () => {
  return (
    <div className="w-[1440px] h-[48px] border-b-[1px] pt-[6px] flex flex-row items-center px-4 bg-white">
      {/* Left Side: Toolbar label */}
      <div className="w-[91px] h-[36px] flex flex-row items-center justify-center border-r border-[#EEEEEE]">
        <div className="w-[55px] h-[20px] text-sm">Tool bar</div>
        <div className="w-4 h-4 ml-1">
          <img src="/image5.png" className="block w-[13px] h-[13px] top-1 left-1"/>
        </div>
      </div>

      {/* Center Section: Hide fields, Sort, Filter, Cell View */}
      <div className="w-[871px] h-[36px] gap-2 flex flex-row items-center ml-2">
        <button className="w-[118px] h-[36px] rounded-[6px] px-2 gap-1 bg-[#FFFFFF] flex flex-row items-center">
          <div className="w-[20px] h-[20px]"><img src="/image6.png" alt=""/></div>
          <div className="text-[14px] leading-5">Hide fields</div>
        </button>

        <button className="w-[73px] h-[36px] rounded-[6px] px-2 gap-1 flex flex-row items-center">
          <div className="w-[20px] h-[20px]"><img src="/image7.png" alt=""/></div>
          <div className="text-[14px] leading-5">Sort</div>
        </button>

        <button className="h-[36px] rounded-[6px] px-2 gap-1 flex flex-row items-center">
          <div className="w-[20px] h-[20px]"><img src="/image8.png" alt=""/></div>
          <div className="text-[14px] leading-5">Filter</div>
        </button>

        <button className="w-[105px] h-[36px] rounded-[6px] px-2 gap-1 flex flex-row items-center">
          <div className="w-[20px] h-[20px]">📄</div>
          <div className="text-[14px] leading-5">Cell View</div>
        </button>
      </div>

      {/* Right Section: Import, Export, Share, New Action */}
      <div className="flex flex-row items-center gap-2 ml-auto">
        <button className="w-[90px] h-[36px] flex flex-row items-center hover:bg-gray-100 rounded-md px-2">
          <div className="w-[20px] h-[20px]"><img src="/image9.png" alt=""/></div>
          <div className="text-[14px] leading-5 ml-2">Import</div>
        </button>

        <button className="w-[89px] h-[36px] flex flex-row items-center hover:bg-gray-100 rounded-md px-2">
          <div className="w-[20px] h-[22px] "><img src="/image14.png" alt="up arrow  "  /></div>
          <div className="text-[14px] leading-5 ml-2">Export</div>
        </button>

        <button className="w-[84px] h-[36px] flex flex-row items-center hover:bg-gray-100 rounded-md px-2">
          <img src="/image10.png" alt="" className="size-5"/>
          <div className="text-[14px] leading-5">Share</div>
        </button>

        <button className="bg-green-600 text-white hover:bg-green-700 px-3 h-[36px] rounded-md flex flex-row items-center">
          <div className="w-[20px] h-[20px]"><img src="\image11.png" alt=""/></div>
          <div className="text-[14px] leading-5 ml-2">New Action</div>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
