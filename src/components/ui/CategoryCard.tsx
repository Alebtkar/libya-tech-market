
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/category/${category.slug}`}>
        <Card className="group overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          </div>
          <CardContent className="p-3 text-center">
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {category.name}
            </h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
