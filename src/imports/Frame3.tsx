import svgPaths from "./svg-imbeqsl6mb";

function TablerSoup() {
  return (
    <div className="absolute right-[10px] size-[48px] top-[10px]" data-name="tabler:soup">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="tabler:soup">
          <path d={svgPaths.p3ab6a700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#6caeff] overflow-clip relative rounded-[15px] size-full">
      <TablerSoup />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">{`Comfort `}</p>
        <p>Food</p>
      </div>
    </div>
  );
}
