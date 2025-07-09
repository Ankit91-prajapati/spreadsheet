

const Footertitle = () => {
  return (
    <div className="w-[1440px] h-[48px] border-t-[1px]  pt-1 pr-4 pl-8  gap-6 bg-white border-[#EEEEEE]">
        <div className="w-[437px] h-[44px]  flex flex-row ">
            <div className="w-[111px] h-[44px] border-t-[2px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-8 bg-[#4B6A4F]">
              <div className="w-[79px] h-[24px] font-[600] size-4 leading-6 text-[#3E5741] ">All orders</div>
            </div>
            <div className="w-[94px] h-[44px]  pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-8">
              <div className="w-[62px] h-[24px] font-[500] size-[16px] leading-6 text-[#757575]">Pending</div>
            </div>
            <div className="w-[107px] h-[44px] border-t-[2px]  pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-8">
              <div className="w-[75px] h-[24px] font-[500] size-[16px] leading-6 text-[#757575]">Reviewed</div>
            </div>
            <div className="w-[89px] h-[44px] border-t-[2px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-8">
              <div className="w-[57px] h-[24px] font-[500] size-[16px] leading-6 text-[#757575]">Arrived</div>
            </div>

            <div className="w-[36px] h-[44px] pt-2 pr-1 pb-2 pl-1 gap-1"><img src="/image13.png" className="block w-[28px] h-[28px] rounded-[4px] p-1 gap-2 bg-white font-[500]"/></div>
        </div>
        
    </div>
  )
}

export default Footertitle