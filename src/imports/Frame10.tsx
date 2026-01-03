import svgPaths from "./svg-2681rvf2le";

function Group() {
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
    <div className="absolute left-[calc(50%+23.33px)] overflow-clip size-[36px] top-[14px] translate-x-[-50%]" data-name="hugeicons:calendar-love-02">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#d0a9ff] h-[100px] left-0 overflow-clip rounded-[15px] top-0 w-[107.333px]">
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

function Frame1() {
  return (
    <div className="absolute bg-[#4ad5ff] h-[100px] left-[117.33px] overflow-clip rounded-[15px] top-0 w-[107.333px]">
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

function Frame2() {
  return (
    <div className="absolute bg-[#ff9a5b] h-[100px] left-[234.67px] overflow-clip rounded-[15px] top-0 w-[107.333px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[9.33px] not-italic text-[16px] text-black text-nowrap top-[54px]">
        <p className="mb-0">Hidden</p>
        <p>Gems</p>
      </div>
      <CarbonGem />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}