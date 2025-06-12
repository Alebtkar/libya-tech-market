
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || '');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = products
    .filter(product => product.published)
    .filter(product => {
      if (searchQuery) {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
               product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .filter(product => {
      if (selectedCategory && selectedCategory !== 'all') {
        return product.categories?.includes(selectedCategory);
      }
      return true;
    })
    .filter(product => {
      if (priceRange && priceRange !== 'all') {
        const price = product.variants[0]?.price || 0;
        switch (priceRange) {
          case 'under-500': return price < 500;
          case '500-1000': return price >= 500 && price < 1000;
          case '1000-3000': return price >= 1000 && price < 3000;
          case 'over-3000': return price >= 3000;
          default: return true;
        }
      }
      return true;
    })
    .sort((a, b) => {
      const aPrice = a.variants[0]?.price || 0;
      const bPrice = b.variants[0]?.price || 0;
      
      switch (sortBy) {
        case 'price-low': return aPrice - bPrice;
        case 'price-high': return bPrice - aPrice;
        case 'name': return a.title.localeCompare(b.title, 'ar');
        default: return 0;
      }
    });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = filteredProducts.length > visibleCount;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ search: searchQuery });
  };

  const updateFilters = (newFilters: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== 'all') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          جميع المنتجات
        </motion.h1>
        
        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="البحث عن المنتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-right"
                dir="rtl"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute left-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              updateFilters({ category: value });
            }}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={(value) => {
              setPriceRange(value);
              updateFilters({ price: value });
            }}>
              <SelectTrigger>
                <SelectValue placeholder="نطاق السعر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأسعار</SelectItem>
                <SelectItem value="under-500">أقل من 500 د.ل</SelectItem>
                <SelectItem value="500-1000">500 - 1000 د.ل</SelectItem>
                <SelectItem value="1000-3000">1000 - 3000 د.ل</SelectItem>
                <SelectItem value="over-3000">أكثر من 3000 د.ل</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value) => {
              setSortBy(value);
              updateFilters({ sort: value });
            }}>
              <SelectTrigger>
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">بدون ترتيب</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                <SelectItem value="name">الاسم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6 text-center">
          عرض {displayedProducts.length} من أصل {filteredProducts.length} منتج
        </p>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        {hasMore && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button onClick={loadMore} variant="outline" size="lg">
              عرض المزيد ({filteredProducts.length - displayedProducts.length} منتج متبقي)
            </Button>
          </motion.div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">لم يتم العثور على منتجات مطابقة</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
