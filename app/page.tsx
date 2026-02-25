import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Location from '../components/Location';
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0f0f0f] text-white font-sans selection:bg-amber-500 selection:text-white">
      <Hero />
      <Menu />
      <Location />
      <Footer /> 
    </main>
  );
}