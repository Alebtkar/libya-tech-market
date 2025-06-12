
import { Product, Category, AdBanner, Review } from '@/types';

export const categories: Category[] = [
  {
    id: "1",
    name: "هواتف ذكية",
    slug: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "أحدث الهواتف الذكية بأفضل الأسعار",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    name: "حاسوب محمول",
    slug: "laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "أجهزة كمبيوتر محمولة عالية الأداء",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "3",
    name: "سماعات",
    slug: "headphones", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "سماعات عالية الجودة للاستمتاع بالصوت",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "4",
    name: "كاميرات",
    slug: "cameras",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    description: "كاميرات احترافية لالتقاط أجمل اللحظات",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "5",
    name: "ساعات ذكية",
    slug: "smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "ساعات ذكية لمتابعة أنشطتك اليومية",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "6",
    name: "إكسسوارات",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    description: "إكسسوارات تقنية متنوعة",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

export const products: Product[] = [
  {
    id: "1",
    title: "iPhone 15 Pro Max",
    description: "أحدث إصدار من آيفون بكاميرا احترافية ومعالج قوي",
    slug: "iphone-15-pro-max",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    ],
    categories: ["1"],
    brand: "Apple",
    tags: ["جديد", "مميز"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "1-1",
        productId: "1",
        color: "#1f2937",
        size: "256GB",
        qty: 15,
        price: 4500,
        originalPrice: 5000,
        offer: true,
        offerNote: "خصم خاص لفترة محدودة"
      }
    ],
    published: true
  },
  {
    id: "2", 
    title: "MacBook Pro M3",
    description: "حاسوب محمول احترافي بمعالج M3 الجديد",
    slug: "macbook-pro-m3",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    ],
    categories: ["2"],
    brand: "Apple",
    tags: ["احترافي", "جديد"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "2-1",
        productId: "2",
        color: "#6b7280",
        size: "512GB",
        qty: 8,
        price: 8500,
        originalPrice: 9000,
        offer: true
      }
    ],
    published: true
  },
  {
    id: "3",
    title: "AirPods Pro",
    description: "سماعات لاسلكية بتقنية إلغاء الضوضاء",
    slug: "airpods-pro",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    categories: ["3"],
    brand: "Apple",
    tags: ["لاسلكي", "مميز"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "3-1",
        productId: "3",
        color: "#ffffff",
        qty: 25,
        price: 850,
        originalPrice: 950
      }
    ],
    published: true
  },
  {
    id: "4",
    title: "Canon EOS R5",
    description: "كاميرا احترافية بدقة 45 ميجابكسل",
    slug: "canon-eos-r5",
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500"
    ],
    categories: ["4"],
    brand: "Canon",
    tags: ["احترافي", "تصوير"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "4-1",
        productId: "4",
        qty: 5,
        price: 12500,
        originalPrice: 13000
      }
    ],
    published: true
  },
  {
    id: "5",
    title: "Apple Watch Series 9",
    description: "ساعة ذكية بمزايا صحية متقدمة",
    slug: "apple-watch-series-9",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500"
    ],
    categories: ["5"],
    brand: "Apple",
    tags: ["صحي", "ذكي"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "5-1",
        productId: "5",
        color: "#1f2937",
        size: "45mm",
        qty: 20,
        price: 1850,
        originalPrice: 2000,
        offer: true
      }
    ],
    published: true
  },
  {
    id: "6",
    title: "Samsung Galaxy S24 Ultra",
    description: "هاتف ذكي بشاشة كبيرة وقلم S Pen",
    slug: "samsung-galaxy-s24-ultra",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500"
    ],
    categories: ["1"],
    brand: "Samsung",
    tags: ["كبير", "قلم"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "6-1",
        productId: "6",
        color: "#000000",
        size: "512GB",
        qty: 12,
        price: 4200,
        originalPrice: 4500
      }
    ],
    published: true
  },
  {
    id: "7",
    title: "Dell XPS 13",
    description: "حاسوب محمول أنيق وخفيف الوزن",
    slug: "dell-xps-13",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    ],
    categories: ["2"],
    brand: "Dell",
    tags: ["خفيف", "أنيق"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "7-1",
        productId: "7",
        color: "#c0c0c0",
        size: "256GB",
        qty: 10,
        price: 3500,
        originalPrice: 3800
      }
    ],
    published: true
  },
  {
    id: "8",
    title: "Sony WH-1000XM5",
    description: "سماعات رأس بتقنية إلغاء الضوضاء الرائدة",
    slug: "sony-wh-1000xm5",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    categories: ["3"],
    brand: "Sony",
    tags: ["إلغاء ضوضاء", "راحة"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    variants: [
      {
        id: "8-1",
        productId: "8",
        color: "#000000",
        qty: 18,
        price: 1200,
        originalPrice: 1350
      }
    ],
    published: true
  }
];

export const banners: AdBanner[] = [
  {
    id: "1",
    title: "عروض الجمعة البيضاء",
    description: "خصومات تصل إلى 50% على جميع المنتجات",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
  },
  {
    id: "2", 
    title: "أحدث الهواتف الذكية",
    description: "تشكيلة واسعة من أفضل العلامات التجارية",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
  },
  {
    id: "3",
    title: "تقنية متطورة",
    description: "اكتشف عالم التكنولوجيا مع منتجاتنا المميزة",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    userId: "user1",
    productId: "1",
    rating: 5,
    comment: "منتج ممتاز وجودة عالية، أنصح به بشدة",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: "2",
    userId: "user2", 
    productId: "1",
    rating: 4,
    comment: "هاتف رائع ولكن السعر مرتفع قليلاً",
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z"
  },
  {
    id: "3",
    userId: "user3",
    productId: "2",
    rating: 5,
    comment: "أداء فائق وسرعة مذهلة، يستحق كل قرش",
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z"
  }
];
