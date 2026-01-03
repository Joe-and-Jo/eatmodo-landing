import { Hero } from './components/Hero';
import { TemplatesCarousel } from './components/TemplatesCarousel';
import { WaitlistSection } from './components/WaitlistSection';
import { SocialLinks } from './components/SocialLinks';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f3]">
      <Hero />
      <TemplatesCarousel />
      <WaitlistSection />
      <SocialLinks />
    </div>
  );
}