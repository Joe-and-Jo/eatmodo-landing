import svgPaths from "./svg-jsbwm0cu64";

function SolarGolfBroken() {
  return (
    <div className="absolute right-[10px] size-[48px] top-[10px]" data-name="solar:golf-broken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="solar:golf-broken">
          <path d={svgPaths.p95fde80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fffa5b] overflow-clip relative rounded-[15px] size-full">
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[10px] not-italic text-[20px] text-black text-nowrap bottom-[10px]">
        <p className="mb-0">Golf</p>
        <p>View</p>
      </div>
      <SolarGolfBroken />
    </div>
  );
}
