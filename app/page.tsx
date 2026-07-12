import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { StatsStrip } from '@/components/sections/stats-strip';
import { BentoGrid } from '@/components/sections/bento-grid';
import { EducationTimeline } from '@/components/sections/education-timeline';

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: 'hsl(var(--background))',
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '20px 20px',
        minHeight: '100vh',
        color: 'hsl(var(--foreground))',
      }}
      className="w-full"
    >
      {/* Navbar - Sticky */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Stats Strip */}
        <StatsStrip />

        {/* Beyond Tech / Bento Grid */}
        <BentoGrid />

        {/* Education Timeline */}
        <EducationTimeline />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}