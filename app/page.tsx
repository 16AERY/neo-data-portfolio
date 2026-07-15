import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { StatsStrip } from '@/components/sections/stats-strip';
import { BentoGrid } from '@/components/sections/bento-grid';
import { EducationTimeline } from '@/components/sections/education-timeline';

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        minHeight: '100vh',
        color: 'hsl(var(--foreground))',
      }}
      className="w-full"
    >
      <main className="w-full">
        <Hero />
        <StatsStrip />
        <BentoGrid />
        <EducationTimeline />
      </main>

      <Footer />
    </div>
  );
}