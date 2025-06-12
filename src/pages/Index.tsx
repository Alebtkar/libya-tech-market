
import Layout from '@/components/layout/Layout';
import HeroCarousel from '@/components/home/HeroCarousel';
import CategoryScroll from '@/components/home/CategoryScroll';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 py-6">
            <HeroCarousel />
          </div>
        </motion.div>
        
        <CategoryScroll />
        <FeaturedProducts />
      </div>
    </Layout>
  );
};

export default Index;
