const TopToolbar = () => {
  return (
    <div className="w-[1440px] h-[56px] border-b-[1px] flex flex-row justify-between pt-2 pr-4 pb-2 pl-4 bg-white border-[#EEEEEE]">
      {/* Left Section */}
      <div className="w-[343px] h-[24px] gap-4 flex flex-row items-center">
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <div className="w-[20px] h-4 outline-[#618666] text-white text-xs flex items-center justify-center rounded-sm"><img src="/image3.png" alt="panel"/></div>
        </div>

        <div className="w-[303px] h-[24px] gap-1 flex flex-row items-center">
          <div className="w-[76px] h-[20px] gap-2 flex flex-row items-center">
            <div className="w-[76px] h-[20px] font-[500] text-[14px]  space-y-3 leading-5">Workspace</div>
          </div>

          <div className="w-[12px] h-[12px] ">
            <img src="/image4.png" alt="arrow" className="h-3"/>
          </div>

          <div className="w-[56px] h-[20px] gap-2 flex items-center">
            <div className="w-[56px] h-[20px] font-[500] text-[14px] leading-5 space-y-3">Folder2</div>
          </div>

          <div className="w-[12px] h-[12px] flex items-center justify-center">
            <div><img src="/image4.png" alt=""/></div>
          </div>

          <div className="w-[131px] h-[24px] gap-2 flex flex-row items-center">
            <div className="w-[99px] h-[20px] font-[500] text-[14px] leading-5">Spreadsheet3</div>
            <div className="w-[24px] h-[24px] rounded-[4px] flex items-center justify-center">
              <div className="w-[20px] h-[20px] flex items-center justify-center">⋯</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[325px] h-[40px] gap-1 flex flex-row items-center">
        {/* Search box */}
        <div className="w-[165px] h-[40px] rounded-[6px] px-3 gap-2 flex flex-row items-center bg-[#F6F6F6]">
          <div className="text-gray-500 text-sm"><img src="/image1.png" alt="" className="h-3"/></div>
          <div className="text-[14px] leading-4 text-[#757575] truncate">Search within sheet</div>
        </div>

        {/* Bell icon */}
        <div className="w-[40px] h-[40px] relative flex items-center justify-center p-2 rounded-s-lg">
          <div className="text-xl"><img src="/image2.png" alt="bell"/></div>
          <div className="absolute top-[4px] right-[6px] w-4 h-4 bg-green-500 text-white text-[10px] rounded-full flex items-center justify-center">2</div>
        </div>

        {/* Profile */}
        <div className="w-[112px] h-[40px] rounded-lg gap-2 flex flex-row items-center">
          <img src="https://i.pravatar.cc/32" alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="w-[56px] h-[26px] flex flex-row justify-center">
            <div className="font-[400] text-[12px] leading-[16px]">Ankit Prajapati</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TopToolbar;
