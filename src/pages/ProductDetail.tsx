
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, reviews } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Heart, ShoppingCart, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
          <Link to="/products">
            <Button variant="outline">العودة للمنتجات</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const mainVariant = product.variants[0];
  const productReviews = reviews.filter(r => r.productId === product.id);
  const averageRating = productReviews.length > 0 
    ? productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length 
    : 0;

  const handleAddToCart = () => {
    if (mainVariant) {
      addItem({
        variantId: mainVariant.id,
        qty: quantity,
        price: mainVariant.price,
        title: product.title,
        image: product.images[0]
      });
      toast({
        title: "تم إضافة المنتج",
        description: `تم إضافة ${quantity} قطعة إلى سلة التسوق`,
      });
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    toast({
      title: isFavorite(product.id) ? "تم الحذف من المفضلة" : "تم الإضافة للمفضلة",
      description: isFavorite(product.id) 
        ? "تم حذف المنتج من قائمة المفضلة" 
        : "تم إضافة المنتج إلى قائمة المفضلة",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-foreground">المنتجات</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggleFavorite}
                  className={isFavorite(product.id) ? 'text-red-500' : 'text-muted-foreground'}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              {product.brand && (
                <p className="text-muted-foreground mb-2">العلامة التجارية: {product.brand}</p>
              )}
              
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(averageRating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({productReviews.length} تقييم)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-3xl font-bold text-primary">
                  {mainVariant?.price.toLocaleString('ar-LY')} د.ل
                </span>
                {mainVariant?.originalPrice && mainVariant.originalPrice > mainVariant.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    {mainVariant.originalPrice.toLocaleString('ar-LY')} د.ل
                  </span>
                )}
              </div>
              {mainVariant?.offer && mainVariant.offerNote && (
                <Badge variant="destructive">{mainVariant.offerNote}</Badge>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="font-semibold mb-2">وصف المنتج</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="font-medium">الكمية:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= (mainVariant?.qty || 0)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({mainVariant?.qty} متوفر)
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full"
                disabled={!mainVariant || mainVariant.qty === 0}
              >
                {!mainVariant || mainVariant.qty === 0 ? 'غير متوفر' : (
                  <>
                    <ShoppingCart className="h-5 w-5 ml-2" />
                    إضافة للسلة
                  </>
                )}
              </Button>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">تفاصيل المنتج</h3>
                <div className="space-y-2 text-sm">
                  {product.brand && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">العلامة التجارية</span>
                      <span>{product.brand}</span>
                    </div>
                  )}
                  {mainVariant?.color && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">اللون</span>
                      <span>{mainVariant.color}</span>
                    </div>
                  )}
                  {mainVariant?.size && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">المواصفات</span>
                      <span>{mainVariant.size}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Reviews */}
        {productReviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Separator className="mb-8" />
            <h2 className="text-2xl font-bold mb-6">التقييمات ({productReviews.length})</h2>
            <div className="grid gap-4">
              {productReviews.map(review => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        بواسطة مستخدم #{review.userId}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
