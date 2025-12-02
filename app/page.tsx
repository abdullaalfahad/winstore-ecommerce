import CategoryCarousel from '@/components/category-carousel';
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
    </div>
  );
}
