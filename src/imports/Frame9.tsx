import svgPaths from "./svg-k74chl5y4c";

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

function Frame() {
  return (
    <div className="absolute bg-[#6caeff] h-[100px] left-0 overflow-clip rounded-[15px] top-0 w-[107.333px]">
      <TablerSoup />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[8px] not-italic text-[16px] text-black text-nowrap top-[53px]">
        <p className="mb-0">{`Comfort `}</p>
        <p>Food</p>
      </div>
    </div>
  );
}

function Group() {
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
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#4aff74] h-[100px] left-[117.33px] overflow-clip rounded-[15px] top-0 w-[107.333px]">
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

function Frame2() {
  return (
    <div className="absolute bg-[#fffa5b] h-[100px] left-[234.67px] overflow-clip rounded-[15px] top-0 w-[107.333px]">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[9.33px] not-italic text-[16px] text-black text-nowrap top-[54px]">
        <p className="mb-0">Golf</p>
        <p>View</p>
      </div>
      <SolarGolfBroken />
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