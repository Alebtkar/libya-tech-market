
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, ShoppingCart, Heart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'الأقسام', path: '/categories', icon: Grid3X3 },
    { name: 'السلة', path: '/cart', icon: ShoppingCart },
    { name: 'المفضلة', path: '/favorites', icon: Heart },
    { name: 'حسابي', path: '/dashboard', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center py-2 px-3 relative"
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`relative ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Icon className="h-5 w-5" />
                {item.path === '/cart' && getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </motion.div>
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 w-6 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
