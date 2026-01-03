import svgPaths from "./svg-mduqqq5ngi";

function CarbonCafe() {
  return (
    <div className="absolute right-[10px] size-[48px] top-[10px]" data-name="carbon:cafe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="carbon:cafe">
          <path d={svgPaths.p95f2f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#4ad5ff] overflow-clip relative rounded-[15px] size-full">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">Cozy</p>
        <p>Cafe</p>
      </div>
      <CarbonCafe />
    </div>
  );
}
