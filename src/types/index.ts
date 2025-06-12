
/**
 * Product Interface
 * المنتج
 */
export interface Product {
  /** Unique identifier / معرف فريد */
  id: string;

  /** Product title / عنوان المنتج */
  title: string;

  /** Product description (optional) / وصف المنتج (اختياري) */
  description?: string;

  /** URL-friendly slug / اسم قصير مخصص للرابط */
  slug: string;

  /** List of image URLs / روابط صور المنتج */
  images: string[];

  /** Category IDs / معرّفات الفئات */
  categories?: string[];

  /** Brand name / اسم العلامة التجارية */
  brand?: string;

  /** Associated tags / الوسوم المرتبطة */
  tags?: string[];

  /** Creation date / تاريخ الإنشاء */
  createdAt: string;

  /** Last updated date / تاريخ آخر تحديث */
  updatedAt: string;

  /** List of variants / قائمة المتغيرات */
  variants: Variant[];

  /** Is the product visible on store? / هل المنتج منشور؟ */
  published: boolean;

  /** External system ID / معرف خارجي للنظام */
  externalID?: string | null | number;
}

/**
 * Variant Interface
 * المتغيرات (مثل الحجم أو اللون)
 */
export interface Variant {
  id: string;
  externalID?: string | null | number;
  productId: string;
  color?: string; // اللون، اسم أو رمز hex
  size?: string; // الحجم (مثل S, M, L)
  qty: number; // الكمية المتوفرة
  price: number; // السعر الحالي
  originalPrice?: number; // السعر الأصلي قبل الخصم
  offer?: boolean; // هل عليه عرض؟
  offerNote?: string; // ملاحظات العرض (مثل اشتري 3 بسعر خاص)
  image?: string; // صورة خاصة بالمتغير
  barcode?: string; // باركود
  createdAt?: string;
  updatedAt?: string;
}

/**
 * CartItem Interface
 * عنصر في سلة المشتريات
 */
export interface CartItem {
  image: string;
  variantId: string;
  qty: number;
  price: number;
  title: string;
}

/**
 * Cart Interface
 * سلة المشتريات
 */
export interface Cart {
  userId: string;
  items: CartItem[];
}

/**
 * Review Interface
 * تقييم المستخدمين
 */
export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number; // من 1 إلى 5
  comment?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Category Interface
 * الفئات
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * User Interface
 * المستخدمون
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "customer" | "seller";
  createdAt: string;
  updatedAt: string;
}

/** Roles for platform users */
export type UserRole = "admin" | "customer" | "seller";

/** Order or Package status */
export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface AdBanner {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}
