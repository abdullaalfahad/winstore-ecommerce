import BestDeals from '@/components/best-deals';
import CategoryCarousel from '@/components/category-carousel';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Navigation from '@/components/navigation';
import NewArrivals from '@/components/new-arrivals';

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryCarousel />
      <NewArrivals />
      <BestDeals />
      <Footer />
    </div>
  );
}
