import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';

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
        <About />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}