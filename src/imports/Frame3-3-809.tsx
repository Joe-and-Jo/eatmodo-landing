import svgPaths from "./svg-i24hmdbl9d";

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
    <div className="absolute right-[10px] overflow-clip size-[48px] top-[10px]" data-name="hugeicons:calendar-love-02">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#d0a9ff] overflow-clip relative rounded-[15px] size-full">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">{`Date `}</p>
        <p>Night</p>
      </div>
      <HugeiconsCalendarLove />
    </div>
  );
}
