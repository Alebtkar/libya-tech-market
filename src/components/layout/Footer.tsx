
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">متجر ليبيا</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              متجر إلكتروني شامل لبيع منتجات تقنية وغيرها بأفضل الأسعار وأعلى جودة في الخدمة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  الأقسام
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  جميع المنتجات
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-muted-foreground hover:text-foreground transition-colors">
                  المفضلة
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">سياسات المتجر</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">تواصل معنا</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+218 91 234 5678</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@libyastore.ly</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>طرابلس، ليبيا</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} متجر ليبيا. جميع الحقوق محفوظة</p>
          <p>
            Built by{' '}
            <a 
              href="https://www.ebtkar.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ebtkar Tqni
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
