
import { useState } from 'react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const featuredProducts = products.filter(p => p.published).slice(0, visibleCount);
  const hasMore = products.filter(p => p.published).length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, products.length));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          المنتجات المميزة
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {hasMore && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button onClick={loadMore} variant="outline" size="lg">
              عرض المزيد
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
