import svgPaths from "./svg-zgltx242n0";

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
    <div className="absolute right-[10px] overflow-clip size-[48px] top-[10px]" data-name="icon-park-outline:family">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#4aff74] overflow-clip relative rounded-[15px] size-full">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">Family</p>
        <p>Dinner</p>
      </div>
      <IconParkOutlineFamily />
    </div>
  );
}
