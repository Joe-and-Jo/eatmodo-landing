import { useEffect, useRef, useState } from 'react';
import Frame3 from '../imports/Frame3';
import Frame7 from '../imports/Frame7';
import Frame8 from '../imports/Frame8';
import DateNight from '../imports/Frame3-3-809';
import CozyCafe from '../imports/Frame7-3-813';
import HiddenGems from '../imports/Frame8-3-817';

export function TemplatesCarousel() {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // All 6 template boxes
  const baseTemplates = [
    { id: 'comfort-food', Component: Frame3 },
    { id: 'family-dinner', Component: Frame7 },
    { id: 'golf-view', Component: Frame8 },
    { id: 'date-night', Component: DateNight },
    { id: 'cozy-cafe', Component: CozyCafe },
    { id: 'hidden-gems', Component: HiddenGems },
  ];

  // Repeat multiple times for seamless infinite scroll
  const templates = [];
  for (let i = 0; i < 15; i++) {
    baseTemplates.forEach((template, idx) => {
      templates.push({
        id: `${template.id}-${i}-${idx}`,
        Component: template.Component
      });
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const cardWidth = 160;
        // Use smaller gap for mobile calculation
        const isMobile = window.innerWidth < 768;
        const gap = isMobile ? 20 : 50;
        const singleCardMove = cardWidth + gap;
        const newOffset = prev + 0.8;
        
        // Reset smoothly when we've scrolled far enough
        if (newOffset >= singleCardMove * 30) {
          return 0;
        }
        return newOffset;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-[#faf7f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h3 className="text-[#2e2e2e] mb-3 text-3xl sm:text-4xl px-[50px] py-[0px]">
            Find what others crave too
          </h3>
          <p className="text-[#6f6f6f] text-lg">
            Search with pre-made templates or discover trending spots
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-5 md:gap-[50px]"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {templates.map((template) => {
            const TemplateComponent = template.Component;
            return (
              <div key={template.id} className="flex-shrink-0">
                <div className="relative h-[160px] w-[160px]">
                  <TemplateComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}