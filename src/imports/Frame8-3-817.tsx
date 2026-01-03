import svgPaths from "./svg-7y3rx6jh55";

function CarbonGem() {
  return (
    <div className="absolute right-[10px] size-[48px] top-[10px]" data-name="carbon:gem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="carbon:gem">
          <path d={svgPaths.p66b3540} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#ff9a5b] overflow-clip relative rounded-[15px] size-full">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">Hidden</p>
        <p>Gems</p>
      </div>
      <CarbonGem />
    </div>
  );
}
