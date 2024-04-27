import { Hero } from './components/Hero';
import { InvestCards } from './components/InvestCard';
import { RecentlyLaunched } from './components/RecentlyLaunched';
import { WhatsNewOnOurAngel } from './components/WhatsNewOnOurAngel';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <InvestCards />
      <RecentlyLaunched />
      <WhatsNewOnOurAngel />
    </main>
  );
}
