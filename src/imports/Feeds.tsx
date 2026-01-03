import svgPaths from "./svg-38oxcwtfnu";
import imgImage21 from "figma:asset/d06111a1e8eb938bcadbb726b8acd67938da6506.png";
import imgImage22 from "figma:asset/27309da1c5355e17fb7011a15bbb02a9184b9744.png";
import imgImage20 from "figma:asset/0700c9e1686320ce18c893e6021f6e19618829aa.png";
import imgImage25 from "figma:asset/84939964a22973704c0fa14c0c0b5145ea97a7db.png";
import imgImage23 from "figma:asset/d1702842c879e5e755d6aec1c6afb16a623cc7e0.png";
import imgImage24 from "figma:asset/0a7967cead69d24b96e1020cede09388699e8343.png";

function Battery() {
  return (
    <div className="absolute h-[11.333px] right-[15.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="8" id="Capacity" rx="1.33333" width="18" x="2" y="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute h-[21px] left-[18px] top-[12px] w-[54px]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[27px] not-italic text-[14px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.28px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function IPhoneXStatusBarsStatusBarBlack() {
  return (
    <div className="absolute h-[44px] left-[calc(50%-0.5px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
      <Battery />
      <div className="absolute inset-[39.39%_11.48%_35.69%_84.45%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_16.62%_35.61%_78.84%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function StatusBarLight() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[402px]" data-name="Status Bar/Light">
      <IPhoneXStatusBarsStatusBarBlack />
    </div>
  );
}

function RiChatAi3Line() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="ri:chat-ai-3-line">
          <path d={svgPaths.pfb4fe80} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0">
      <RiChatAi3Line />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center text-nowrap">Home</p>
    </div>
  );
}

function FluentFood28Filled() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="fluent:food-28-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="fluent:food-28-filled">
          <path d={svgPaths.p2a0e6180} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[44px]">
      <FluentFood28Filled />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center w-[min-content]">Feeds</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6667 20.6667">
          <g id="Group">
            <path d={svgPaths.pc897300} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1dae2100} id="Vector_2" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconamoonProfile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="iconamoon:profile">
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0">
      <IconamoonProfile />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center text-nowrap">Profile</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[115px] left-0 top-0 w-[402px]">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[34px] py-[18px] relative rounded-[inherit] size-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-solid border-white inset-0 pointer-events-none shadow-[0px_-1px_10px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[115px] left-0 top-[759px] w-[402px]">
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[190px] left-0 overflow-clip rounded-[20px] top-0 w-[174.5px]">
      <div className="absolute h-[192px] left-[-44px] top-0 w-[273px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[227px] left-[185px] overflow-clip rounded-[20px] top-0 w-[174px]">
      <div className="absolute h-[231px] left-[-8px] top-[-2px] w-[302px]" data-name="image 22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage22} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[318px] left-0 overflow-clip rounded-[20px] top-[198px] w-[175px]">
      <div className="absolute h-[318px] left-[-32px] top-0 w-[225px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[190px] left-0 overflow-clip rounded-[20px] top-[524px] w-[174.5px]">
      <div className="absolute h-[185px] left-[-87px] top-[-1px] w-[262px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[190px] left-[185px] overflow-clip rounded-[20px] top-[235px] w-[174.5px]">
      <div className="absolute left-[-16px] size-[191px] top-0" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[190px] left-[185px] overflow-clip rounded-[20px] top-[432px] w-[174.5px]">
      <div className="absolute h-[134px] left-[-25px] top-[-2px] w-[239px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage24} />
      </div>
    </div>
  );
}

function RiChatAi3Line1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ri:chat-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ri:chat-ai-3-line">
          <path d={svgPaths.p7d57080} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#f1ece6] content-stretch flex items-center justify-center left-[296px] p-[21px] rounded-[37px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] size-[64px] top-[469px]">
      <RiChatAi3Line1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[556px] left-[20px] overflow-clip top-[203px] w-[360px]">
      <Frame6 />
      <Frame7 />
      <Frame14 />
      <Frame13 />
      <Frame15 />
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function MynauiSearch() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:search">
          <path d={svgPaths.p104a8500} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#f1ece6] content-stretch flex gap-[10px] items-center left-[20px] px-[15px] py-[7px] rounded-[20px] top-[84px] w-[310px]">
      <MynauiSearch />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[25px] not-italic relative shrink-0 text-[#2e2e2e] text-[16px] text-nowrap">Search</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[30px] items-center leading-[25px] left-[20px] not-italic text-[#2e2e2e] text-[16px] text-nowrap top-[153px]">
      <p className="relative shrink-0">For you</p>
      <p className="relative shrink-0">Explore</p>
      <p className="relative shrink-0">Near you</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[344px] size-[36px] top-[86px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 36">
          <circle cx="18" cy="18" data-figma-bg-blur-radius="12" fill="var(--fill-0, #F1ECE6)" id="Ellipse 8" r="18" />
          <g id="solar:heart-bold">
            <rect height="21" stroke="var(--stroke-0, #F1ECE6)" width="23" x="6.49984" y="8.49995" />
            <path d={svgPaths.pc93e500} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="1.5" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_3_484_clip_path" transform="translate(12 12)">
            <circle cx="18" cy="18" r="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Feeds() {
  return (
    <div className="bg-[#fffdfe] relative size-full" data-name="Feeds">
      <StatusBarLight />
      <Frame16 />
      <Frame9 />
      <Frame8 />
      <Frame10 />
      <div className="absolute h-0 left-[20px] top-[179px] w-[57px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 2">
            <line id="Line 8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" x1="1" x2="56" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}