import svgPaths from "./svg-cfkyoqj5fp";
import imgImage17 from "figma:asset/95a30296c2c93e271f8769288fdb84e44301182f.png";
import imgImage18 from "figma:asset/e4c88d6410fe81f749683bd5ea22f58342149d06.png";
import imgImage19 from "figma:asset/5da1a980a9dc76fd2f1be8d6b6a658ba29dc509b.png";
import imgImage20 from "figma:asset/28152921fe41e12641f522b62dfcaafd31ed8860.png";
import imgImage21 from "figma:asset/ea3a4692c20cb1fa7c737568977afd7c60e12b81.png";
import imgImage22 from "figma:asset/dae56c16388983a607456355600f03978b3a7283.png";

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

function Frame() {
  return (
    <div className="absolute bg-[#f1ece6] content-stretch flex items-center justify-center left-[76px] p-[15px] rounded-[15px] top-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[257px]">I want to eat in a restaurant that has a cozy date night vibe</p>
    </div>
  );
}

function SolarCopyOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="solar:copy-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:copy-outline">
          <path clipRule="evenodd" d={svgPaths.pdbc1d00} fill="var(--fill-0, #6F6F6F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SiThumbDownAlt1Line() {
  return (
    <div className="relative size-[24px]" data-name="si:thumb-down-alt-1-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:thumb-down-alt-1-line">
          <path d={svgPaths.p19428b00} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SiThumbDownAlt1Line1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="si:thumb-down-alt-1-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="si:thumb-down-alt-1-line">
          <path d={svgPaths.p19428b00} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[-1px] top-[1780px]">
      <SolarCopyOutline />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <SiThumbDownAlt1Line />
        </div>
      </div>
      <SiThumbDownAlt1Line1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">4.6</p>
      <div className="h-[11px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
          <path d={svgPaths.p11183d00} fill="var(--fill-0, #FF8C00)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">(1.7K)</p>
    </div>
  );
}

function BiDot() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bi:dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bi:dot">
          <path d={svgPaths.p22018400} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
      <BiDot />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">$$$</p>
      <BiDot />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">Japanese</p>
      <BiDot />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">1.5 km</p>
      <BiDot />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#239939] text-[12px] text-nowrap">Buka</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[275px]">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[20px] underline w-full">Sushi Hiro Manyar</p>
      <Frame2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[124px] relative shrink-0 w-full">
      <div className="absolute h-[124px] left-0 rounded-[10px] top-0 w-[185px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage17} />
      </div>
      <div className="absolute h-[124px] left-[190px] rounded-[10px] top-0 w-[185px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage18} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[43px] relative shrink-0 w-[328px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[17px] not-italic text-[#2e2e2e] text-[14px] top-0 w-[311px]">Tempatnya cozy, musiknya pelan, cocok buat deep talks.</p>
      <div className="absolute flex h-[43px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[43px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
                <line id="Line 13" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="41.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[27px] relative shrink-0 w-[339px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[21px] not-italic text-[#2e2e2e] text-[14px] top-[3px] w-[318px]">Lighting-nya warm, cocok untuk foto berdua.</p>
      <div className="absolute flex h-[27px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[27px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 3">
                <line id="Line 2" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="25.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[21px] h-[27px] items-center relative shrink-0">
      <div className="flex h-[27px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[27px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 3">
                <line id="Line 3" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="25.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] w-[336px]">Kalo mau tempat sepi, datang sebelum jam 7.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[358px]">
      <Frame15 />
      <Frame16 />
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 top-[306px] w-[375px]">
      <Frame18 />
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">4.4</p>
      <div className="h-[11px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
          <path d={svgPaths.p11183d00} fill="var(--fill-0, #FF8C00)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">(1.2K)</p>
    </div>
  );
}

function BiDot1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bi:dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bi:dot">
          <path d={svgPaths.p22018400} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame3 />
      <BiDot1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">$$$</p>
      <BiDot1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">Italian</p>
      <BiDot1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">1.5 km</p>
      <BiDot1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#239939] text-[12px] text-nowrap">Buka</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[275px]">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[20px] underline w-full">Tutto Bono Restaurant</p>
      <Frame4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[124px] relative shrink-0 w-full">
      <div className="absolute h-[124px] left-0 rounded-[10px] top-0 w-[185px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage19} />
      </div>
      <div className="absolute h-[124px] left-[190px] rounded-[10px] top-0 w-[185px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage20} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[43px] relative shrink-0 w-[328px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[17px] not-italic text-[#2e2e2e] text-[14px] top-0 w-[311px]">Tempatnya kecil tapi super cozy, lighting-nya warm banget, dan musiknya soft</p>
      <div className="absolute flex h-[43px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[43px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
                <line id="Line 13" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="41.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[45px] relative shrink-0 w-[339px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[21px] not-italic text-[#2e2e2e] text-[14px] top-[2px] w-[318px]">Pasta mereka tuh always al dente, dan carbonara-nya creamy tapi nggak bikin enek.</p>
      <div className="absolute flex h-[43px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[43px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
                <line id="Line 13" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="41.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[21px] h-[27px] items-center relative shrink-0 w-full">
      <div className="flex h-[27px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[27px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 3">
                <line id="Line 3" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="25.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] w-[336px]">Harga medium, tapi vibe-nya… chef’s kiss. 😌🍝</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[358px]">
      <Frame24 />
      <Frame25 />
      <Frame12 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 top-[694px] w-[375px]">
      <Frame22 />
      <Frame23 />
      <Frame26 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">4.9</p>
      <div className="h-[11px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
          <path d={svgPaths.p11183d00} fill="var(--fill-0, #FF8C00)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">(116)</p>
    </div>
  );
}

function BiDot2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bi:dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bi:dot">
          <path d={svgPaths.p22018400} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame5 />
      <BiDot2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">$$$$</p>
      <BiDot2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">French</p>
      <BiDot2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[12px] text-nowrap">1.5 km</p>
      <BiDot2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#239939] text-[12px] text-nowrap">Buka</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[275px]">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[20px] underline w-full">Ledoyan French Dining</p>
      <Frame6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[124px] relative shrink-0 w-full">
      <div className="absolute h-[124px] left-0 rounded-[10px] top-0 w-[185px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage21} />
      </div>
      <div className="absolute h-[124px] left-[190px] rounded-[10px] top-0 w-[185px]" data-name="image 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[223.79%] left-0 max-w-none top-[-90.93%] w-full" src={imgImage22} />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[43px] relative shrink-0 w-[328px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[17px] not-italic text-[#2e2e2e] text-[14px] top-0 w-[311px]">Interior-nya classy, candlelight vibes-nya dapet, dan service-nya ramah.</p>
      <div className="absolute flex h-[43px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[43px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 3">
                <line id="Line 13" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="41.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[74px] relative shrink-0 w-[339px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[60px] leading-[21px] left-[21px] not-italic text-[#2e2e2e] text-[14px] top-[6px] w-[318px]">
        <span>{`Menu favorit banyak orang: `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">{`Beef Lasagna `}</span>
        <span>{`yang cheesy banget, dan `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">Aglio Olio spicy</span>
        <span>
          {` yang pedesnya nagih.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
      </p>
      <div className="absolute flex h-[71px] items-center justify-center left-0 top-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[71px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 3">
                <line id="Line 13" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="69.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[21px] h-[49px] items-center relative shrink-0">
      <div className="flex h-[49px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[49px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 3">
                <line id="Line 3" stroke="var(--stroke-0, #E3DED8)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="47.5" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] w-[336px]">Portion pas, vibe-nya intimate, cocok buat date night.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0">
      <Frame29 />
      <Frame30 />
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 top-[1201px] w-[375px]">
      <Frame27 />
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function Scroll() {
  return (
    <div className="absolute h-[1825px] left-[20px] overflow-x-clip overflow-y-auto top-[134px] w-[382px]" data-name="Scroll">
      <Frame />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25px] left-px not-italic text-[#2e2e2e] text-[16px] top-[133px] w-[362px]">Romantic vibes? Cozy date night coming right up✨</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[295px] not-italic text-[#969696] text-[12px] text-nowrap top-[72px]">10.00 AM</p>
      <div className="absolute h-[124px] left-[380px] rounded-[10px] top-[370px] w-[185.637px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage18} />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#2e2e2e] text-[20px] top-[217px] w-[325px]">❤️ Cozy Date Night Restaurants in Surabaya:</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25px] left-0 not-italic text-[#2e2e2e] text-[16px] top-[1121px] w-[325px]">💎 Yang Ini hidden gem banget, jarang orang tau:</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25px] left-[-1px] not-italic text-[#2e2e2e] text-[16px] top-[1686px] w-[359px]">Restaurant-resaturant diatas cocok untuk dijadikan tempat date maupun makan cantik bersama teman atau keluarga.</p>
      <Frame8 />
      <div className="absolute h-0 left-[-1px] top-[1649px] w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 11" stroke="var(--stroke-0, #E3DED8)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[197px] w-[363px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363 1">
            <line id="Line 12" stroke="var(--stroke-0, #E3DED8)" x2="363" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[-3px] top-[1089px] w-[363px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363 1">
            <line id="Line 12" stroke="var(--stroke-0, #E3DED8)" x2="363" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function FluentNavigation20Filled() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fluent:navigation-20-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fluent:navigation-20-filled">
          <path d={svgPaths.p1a3f87f0} fill="var(--fill-0, black)" id="Vector" />
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
          <path clipRule="evenodd" d={svgPaths.p18b89a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <PrimePenToSquare />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[78px] w-[361px]">
      <FluentNavigation20Filled />
      <Frame10 />
    </div>
  );
}

export default function Chat() {
  return (
    <div className="bg-[#faf7f3] relative size-full" data-name="Chat.2">
      <Frame7 />
      <StatusBarLight />
      <Scroll />
    </div>
  );
}