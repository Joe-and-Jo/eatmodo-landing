import svgPaths from "./svg-n4h945v3im";

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

function Group() {
  return (
    <div className="absolute inset-[8.33%_18.75%]" data-name="Group">
      <div className="absolute inset-[-4.5%_-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18.1667">
          <g id="Group">
            <path d={svgPaths.p30fd8000} id="Vector" stroke="var(--stroke-0, #2E2E2E)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p437a800} id="Vector_2" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineVoice() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon-park-outline:voice">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f1ece6] content-stretch flex items-center justify-between left-[calc(50%-0.5px)] overflow-clip px-[20px] py-[15px] rounded-[30px] top-[681px] translate-x-[-50%] w-[361px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center text-nowrap">What is your craving today?...</p>
      <IconParkOutlineVoice />
    </div>
  );
}

function RiChatAi3Fill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:chat-ai-3-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:chat-ai-3-fill">
          <path d={svgPaths.p20258b00} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0">
      <RiChatAi3Fill />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center text-nowrap">Home</p>
    </div>
  );
}

function FluentFood20Regular() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="fluent:food-20-regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="fluent:food-20-regular">
          <path d={svgPaths.pe7f5400} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[62px]">
      <FluentFood20Regular />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center w-[min-content]">Discover</p>
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0">
      <IconamoonProfile />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center text-nowrap">Profile</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[43px] items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#faf7f3] left-1/2 top-[771px] translate-x-[-50%] w-[402px]">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[50px] pt-[10px] px-[34px] relative rounded-[inherit] w-full">
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#faf7f3] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_-1px_10px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function FluentNavigation20Filled() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fluent:navigation-20-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fluent:navigation-20-filled">
          <path d={svgPaths.p1a3f87f0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimePenToSquare() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="prime:pen-to-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="prime:pen-to-square">
          <path clipRule="evenodd" d={svgPaths.p18b89a80} fill="var(--fill-0, #2E2E2E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <PrimePenToSquare />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[78px] w-[361px]">
      <FluentNavigation20Filled />
      <Frame16 />
    </div>
  );
}

function TablerSoup() {
  return (
    <div className="absolute left-[62px] size-[36px] top-[9px]" data-name="tabler:soup">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="tabler:soup">
          <path d={svgPaths.p3ab6a700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#6caeff] h-[100px] left-0 overflow-clip rounded-[15px] top-0 w-[112px]">
      <TablerSoup />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[8px] not-italic text-[16px] text-black text-nowrap top-[53px]">
        <p className="mb-0">{`Comfort `}</p>
        <p>Food</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-4.17%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0002 26.0003">
          <g id="Group">
            <path d={svgPaths.p5500380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pae680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p18e3df00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p282fff80} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineFamily() {
  return (
    <div className="absolute left-[61.67px] overflow-clip size-[36px] top-[11px]" data-name="icon-park-outline:family">
      <Group2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#4aff74] h-[100px] left-[122px] overflow-clip rounded-[15px] top-0 w-[113px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[6.67px] not-italic text-[16px] text-black text-nowrap top-[55px]">
        <p className="mb-0">Family</p>
        <p>Dinner</p>
      </div>
      <IconParkOutlineFamily />
    </div>
  );
}

function SolarGolfBroken() {
  return (
    <div className="absolute left-[61.33px] size-[36px] top-[10px]" data-name="solar:golf-broken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="solar:golf-broken">
          <path d={svgPaths.p95fde80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#fffa5b] h-[100px] left-[245px] overflow-clip rounded-[15px] top-0 w-[112px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[9.33px] not-italic text-[16px] text-black text-nowrap top-[54px]">
        <p className="mb-0">Golf</p>
        <p>View</p>
      </div>
      <SolarGolfBroken />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[100px] left-[calc(50%-2.5px)] top-[calc(50%+47px)] translate-x-[-50%] translate-y-[-50%] w-[357px]">
      <Frame2 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-3.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 32">
          <g id="Group">
            <path d={svgPaths.p3719e100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p30eb9a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsCalendarLove() {
  return (
    <div className="absolute left-[calc(50%+23px)] overflow-clip size-[36px] top-[14px] translate-x-[-50%]" data-name="hugeicons:calendar-love-02">
      <Group3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#d0a9ff] h-[100px] left-0 overflow-clip rounded-[15px] top-0 w-[112px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[30px] not-italic text-[16px] text-black text-center text-nowrap top-[52px] translate-x-[-50%]">
        <p className="mb-0">{`Date `}</p>
        <p>Night</p>
      </div>
      <HugeiconsCalendarLove />
    </div>
  );
}

function CarbonCafe() {
  return (
    <div className="absolute left-[58.67px] size-[36px] top-[12px]" data-name="carbon:cafe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="carbon:cafe">
          <path d={svgPaths.p95f2f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#4ad5ff] h-[100px] left-[122px] overflow-clip rounded-[15px] top-0 w-[113px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[29.67px] not-italic text-[16px] text-black text-center text-nowrap top-[55px] translate-x-[-50%]">
        <p className="mb-0">Cozy</p>
        <p>Cafe</p>
      </div>
      <CarbonCafe />
    </div>
  );
}

function CarbonGem() {
  return (
    <div className="absolute left-[58.33px] size-[36px] top-[11px]" data-name="carbon:gem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="carbon:gem">
          <path d={svgPaths.p66b3540} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#ff9a5b] h-[100px] left-[245px] overflow-clip rounded-[15px] top-0 w-[112px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[9.33px] not-italic text-[16px] text-black text-nowrap top-[54px]">
        <p className="mb-0">Hidden</p>
        <p>Gems</p>
      </div>
      <CarbonGem />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[100px] left-[calc(50%-2.5px)] top-[calc(50%-74px)] translate-x-[-50%] translate-y-[-50%] w-[357px]">
      <Frame3 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

export default function MainPageHome() {
  return (
    <div className="bg-[#faf7f3] relative size-full" data-name="Main Page / Home">
      <StatusBarLight />
      <Frame />
      <Frame1 />
      <Frame12 />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[20px] not-italic text-[#2e2e2e] text-[24px] top-[222px] w-[342px]">
        <p className="mb-0">Hi Joe,</p>
        <p>what is your craving today?</p>
      </div>
      <Frame13 />
      <Frame14 />
    </div>
  );
}