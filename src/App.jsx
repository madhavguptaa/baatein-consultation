import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsultationMediums from './components/ConsultationMediums';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ConsultationMediums />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
