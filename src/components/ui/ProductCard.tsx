
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const mainVariant = product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mainVariant) {
      addItem({
        variantId: mainVariant.id,
        qty: 1,
        price: mainVariant.price,
        title: product.title,
        image: product.images[0]
      });
      toast({
        title: "تم إضافة المنتج",
        description: "تم إضافة المنتج إلى سلة التسوق بنجاح",
      });
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(product.id);
    toast({
      title: isFavorite(product.id) ? "تم الحذف من المفضلة" : "تم الإضافة للمفضلة",
      description: isFavorite(product.id) 
        ? "تم حذف المنتج من قائمة المفضلة" 
        : "تم إضافة المنتج إلى قائمة المفضلة",
    });
  };

  if (!mainVariant) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link to={`/product/${product.slug}`}>
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {mainVariant.offer && (
              <Badge className="absolute top-2 right-2 bg-red-500">
                عرض خاص
              </Badge>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 left-2 bg-background/80 hover:bg-background ${
                isFavorite(product.id) ? 'text-red-500' : 'text-muted-foreground'
              }`}
              onClick={handleToggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </Link>
        
        <CardContent className="p-4">
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>
          
          {product.brand && (
            <p className="text-xs text-muted-foreground mb-2">{product.brand}</p>
          )}
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">
                {mainVariant.price.toLocaleString('ar-LY')} د.ل
              </span>
              {mainVariant.originalPrice && mainVariant.originalPrice > mainVariant.price && (
                <span className="text-xs text-muted-foreground line-through">
                  {mainVariant.originalPrice.toLocaleString('ar-LY')} د.ل
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-1 space-x-reverse">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">4.5</span>
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
            disabled={mainVariant.qty === 0}
          >
            {mainVariant.qty === 0 ? 'غير متوفر' : (
              <>
                <ShoppingCart className="h-4 w-4 ml-2" />
                إضافة للسلة
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
