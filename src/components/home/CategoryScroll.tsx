
import { categories } from '@/data/mockData';
import CategoryCard from '@/components/ui/CategoryCard';
import { motion } from 'framer-motion';

const CategoryScroll = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          تسوق حسب الفئة
        </motion.h2>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="flex-shrink-0 w-32 md:w-40"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryScroll;
