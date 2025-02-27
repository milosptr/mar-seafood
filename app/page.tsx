import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { QualitySection } from './components/QualitySection'
import { ProductsSection } from './components/ProductsSection'
import { FooterSection } from './components/FooterSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className='max-w-[1200px] min-h-screen mx-auto px-6'>
      <main className='grid grid-cols-1 gap-24 sm:gap-48'>
        <HeroSection />
        <AboutSection />
        <QualitySection />
        <ProductsSection />
        <div className='grid grid-cols-1 gap-12'>
          <FooterSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
