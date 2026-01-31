export interface Product {
  id: string;
  nameEn: string;
  nameBn: string;
  category: string;
  image: string;
  price?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  icon: string;
  products: Product[];
}

// Import product images from main folder
import AgarAgarImg from '@/assets/main/agar agar.jpeg';
import BakingsodaImg from '@/assets/main/bakingsoda.jpeg';
import BananaFoodEssenceImg from '@/assets/main/banana food essence.jpeg';
import BarBQMasalaImg from '@/assets/main/bar b q masala.jpeg';
import BiriyaniFoodEssenceImg from '@/assets/main/biriyani food essence.jpeg';
import BiriyaniMasalaImg from '@/assets/main/biriyani masala.jpeg';
import BitSaltImg from '@/assets/main/bit salt.jpeg';
import BlackPepperImg from '@/assets/main/black pepper.jpeg';
import BlueFoodColorImg from '@/assets/main/blue food color.jpeg';
import ChatMasalaImg from '@/assets/main/chat masala.jpeg';
// import ChatpatiMasalaImg from '@/assets/main/chatpateg.jpeg';
import ChocolateFoodColorImg from '@/assets/main/chocolate food color.jpeg';
import ChocolateFoodEssenceImg from '@/assets/main/chocolate food essence.jpeg';
import CornflowerImg from '@/assets/main/cornflower.jpeg';
import GoldTeaImg from '@/assets/main/gold a food essence.jpeg';
import GreenColorImg from '@/assets/main/green color.jpeg';
import KewraWaterGreenImg from '@/assets/main/kewra water green.jpeg';
import LemonFoodEssenceImg from '@/assets/main/lemon food essence.jpeg';
import MangoFoodEssenceImg from '@/assets/main/mango food essence.jpeg';
import OrangeFoodColorImg from '@/assets/main/orange food color.jpeg';
import OrangeFoodEssenceImg from '@/assets/main/orange food essence.jpeg';
import PolaoFoodEssenceImg from '@/assets/main/polao food essence.jpeg';
import RoseWaterImg from '@/assets/main/rose water.jpeg';
import StrawberryFoodEssenceImg from '@/assets/main/strawberry food essence.jpeg';
import VanillaFoodEssenceImg from '@/assets/main/vanilla food essence.jpeg';
import WinmixChocoChocoImg from '@/assets/main/winmix choco choco.jpeg';
import YeastImg from '@/assets/main/yeast.jpeg';
import YellowFoodColorImg from '@/assets/main/yellow food color.jpeg';
import ZafranFoodEssenceImg from '@/assets/main/zafran food essence.jpeg';
import ZardaColorImg from '@/assets/main/zarda color.jpeg';
import kewraFoodEssenceImg from '@/assets/main/kewra food essence.jpeg';
import soyaSauceImg from '@/assets/main/soya sao.jpeg';
import whitePepperImg from '@/assets/main/white pepper.jpeg';
import whiteVinegarImg from '@/assets/main/white vinegar.jpeg';

// Category icons
import baking from '@/assets/baking.png';
import seasoning from '@/assets/seasoning.png';

export const categories: Category[] = [
  {
    id: 'baking',
    nameEn: 'Baking Items',
    nameBn: 'বেকিং আইটেম',
    descriptionEn: 'Essential ingredients for perfect baking',
    descriptionBn: 'নিখুঁত বেকিংয়ের জন্য প্রয়োজনীয় উপকরণ',
    icon: baking,
    products: [
      { id: 'cornflower', nameEn: 'Cornflower', nameBn: 'কর্নফ্লাওয়ার', category: 'baking', image: CornflowerImg, price: '৳45', featured: true },
      { id: 'bakingsoda', nameEn: 'Baking Soda', nameBn: 'বেকিং সোডা', category: 'baking', image: BakingsodaImg, price: '৳35' },
      { id: 'yeast', nameEn: 'Yeast', nameBn: 'ইস্ট', category: 'baking', image: YeastImg, price: '৳45' },
      { id: 'winmix-choco-choco', nameEn: 'Winmix Choco Choco', nameBn: 'উইনমিক্স চকো চকো', category: 'baking', image: WinmixChocoChocoImg, price: '৳85', featured: true },
    ]
  },
  {
    id: 'condiments',
    nameEn: 'Condiments & Seasonings',
    nameBn: 'মসলা ও সিজনিং',
    descriptionEn: 'Enhance your dishes with authentic flavors',
    descriptionBn: 'খাঁটি স্বাদে আপনার রান্নাকে সমৃদ্ধ করুন',
    icon: seasoning,
    products: [
      { id: 'white-vinegar', nameEn: 'White Vinegar', nameBn: 'সাদা ভিনেগার', category: 'condiments', image: whiteVinegarImg, price: '৳55', featured: true },
      { id: 'soya-sauce', nameEn: 'Soya Sauce', nameBn: 'সয়া সস', category: 'condiments', image: soyaSauceImg, price: '৳75', featured: true },
      { id: 'bit-salt', nameEn: 'Bit Salt', nameBn: 'বিট লবণ', category: 'condiments', image: BitSaltImg, price: '৳25' },
      { id: 'agar-agar', nameEn: 'Agar Agar', nameBn: 'আগার আগার', category: 'condiments', image: AgarAgarImg, price: '৳85' },
    ]
  },
  {
    id: 'spices',
    nameEn: 'Spices & Aromatics',
    nameBn: 'মশলা ও সুগন্ধি',
    descriptionEn: 'Premium spices for authentic taste',
    descriptionBn: 'খাঁটি স্বাদের জন্য প্রিমিয়াম মশলা',
    icon: seasoning,
    products: [
      { id: 'white-pepper', nameEn: 'White Pepper', nameBn: 'সাদা গোলমরিচ', category: 'spices', image: whitePepperImg, price: '৳120' },
      { id: 'black-pepper', nameEn: 'Black Pepper', nameBn: 'কালো গোলমরিচ', category: 'spices', image: BlackPepperImg, price: '৳110' },
      { id: 'rose-water', nameEn: 'Rose Water', nameBn: 'গোলাপ জল', category: 'spices', image: RoseWaterImg, price: '৳60' },
      { id: 'kewra-water-green', nameEn: 'Kewra Water Green', nameBn: 'কেওড়া জল সবুজ', category: 'spices', image: KewraWaterGreenImg, price: '৳55' },
    ]
  },
  {
    id: 'masala',
    nameEn: 'Masala Blends',
    nameBn: 'মসলা মিশ্রণ',
    descriptionEn: 'Traditional spice blends for authentic dishes',
    descriptionBn: 'ঐতিহ্যবাহী স্বাদের জন্য মসলা মিশ্রণ',
    icon: seasoning,
    products: [
      { id: 'biriyani-masala', nameEn: 'Biriyani Masala', nameBn: 'বিরিয়ানি মসলা', category: 'masala', image: BiriyaniMasalaImg, price: '৳95', featured: true },
      { id: 'bar-b-q-masala', nameEn: 'Bar B Q Masala', nameBn: 'বার-বি-কিউ মসলা', category: 'masala', image: BarBQMasalaImg, price: '৳85' },
      // { id: 'chatpati-masala', nameEn: 'Chatpati Masala', nameBn: 'চটপটি মসলা', category: 'masala', image: ChatpatiMasalaImg, price: '৳70' },
      { id: 'chat-masala', nameEn: 'Chat Masala', nameBn: 'চাট মসলা', category: 'masala', image: ChatMasalaImg, price: '৳65' },
    ]
  },
  {
    id: 'essences',
    nameEn: 'Food Essences',
    nameBn: 'ফুড এসেন্স',
    descriptionEn: 'Aromatic essences for delightful cooking',
    descriptionBn: 'সুস্বাদু রান্নার জন্য সুগন্ধি এসেন্স',
    icon: seasoning,
    products: [
      { id: 'biriyani-food-essence', nameEn: 'Biriyani Food Essence', nameBn: 'বিরিয়ানি ফুড এসেন্স', category: 'essences', image: BiriyaniFoodEssenceImg, price: '৳40', featured: true },
      { id: 'polao-food-essence', nameEn: 'Polao Food Essence', nameBn: 'পোলাও ফুড এসেন্স', category: 'essences', image: PolaoFoodEssenceImg, price: '৳40' },
      { id: 'chocolate-food-essence', nameEn: 'Chocolate Food Essence', nameBn: 'চকলেট ফুড এসেন্স', category: 'essences', image: ChocolateFoodEssenceImg, price: '৳45' },
      { id: 'banana-food-essence', nameEn: 'Banana Food Essence', nameBn: 'কলা ফুড এসেন্স', category: 'essences', image: BananaFoodEssenceImg, price: '৳45' },
      { id: 'kewra-food-essence', nameEn: 'Kewra Food Essence', nameBn: 'কেওড়া ফুড এসেন্স', category: 'essences', image: kewraFoodEssenceImg, price: '৳40' },
      { id: 'lemon-food-essence', nameEn: 'Lemon Food Essence', nameBn: 'লেবু ফুড এসেন্স', category: 'essences', image: LemonFoodEssenceImg, price: '৳40' },
      { id: 'mango-food-essence', nameEn: 'Mango Food Essence', nameBn: 'আম ফুড এসেন্স', category: 'essences', image: MangoFoodEssenceImg, price: '৳45' },
      { id: 'strawberry-food-essence', nameEn: 'Strawberry Food Essence', nameBn: 'স্ট্রবেরি ফুড এসেন্স', category: 'essences', image: StrawberryFoodEssenceImg, price: '৳45' },
      { id: 'vanilla-food-essence', nameEn: 'Vanilla Food Essence', nameBn: 'ভ্যানিলা ফুড এসেন্স', category: 'essences', image: VanillaFoodEssenceImg, price: '৳45' },
      { id: 'zafran-food-essence', nameEn: 'Zafran Food Essence', nameBn: 'জাফরান ফুড এসেন্স', category: 'essences', image: ZafranFoodEssenceImg, price: '৳50' },
      { id: 'orange-food-essence', nameEn: 'Orange Food Essence', nameBn: 'কমলা ফুড এসেন্স', category: 'essences', image: OrangeFoodEssenceImg, price: '৳40' },
    ]
  },
  {
    id: 'colors',
    nameEn: 'Food Colors',
    nameBn: 'খাদ্য রঙ',
    descriptionEn: 'Vibrant food colors for beautiful presentations',
    descriptionBn: 'সুন্দর উপস্থাপনার জন্য উজ্জ্বল খাদ্য রঙ',
    icon: seasoning,
    products: [
      { id: 'blue-food-color', nameEn: 'Blue Food Color', nameBn: 'নীল খাদ্য রঙ', category: 'colors', image: BlueFoodColorImg, price: '৳30' },
      { id: 'chocolate-food-color', nameEn: 'Chocolate Food Color', nameBn: 'চকলেট খাদ্য রঙ', category: 'colors', image: ChocolateFoodColorImg, price: '৳35' },
      { id: 'green-color', nameEn: 'Green Color', nameBn: 'সবুজ রঙ', category: 'colors', image: GreenColorImg, price: '৳30' },
      { id: 'orange-food-color', nameEn: 'Orange Food Color', nameBn: 'কমলা খাদ্য রঙ', category: 'colors', image: OrangeFoodColorImg, price: '৳35' },
      { id: 'yellow-food-color', nameEn: 'Yellow Food Color', nameBn: 'হলুদ খাদ্য রঙ', category: 'colors', image: YellowFoodColorImg, price: '৳30' },
      { id: 'zarda-color', nameEn: 'Zarda Color', nameBn: 'জর্দা রঙ', category: 'colors', image: ZardaColorImg, price: '৳35' },
    ]
  },
  {
    id: 'specialty',
    nameEn: 'Specialty Products',
    nameBn: 'বিশেষ পণ্য',
    descriptionEn: 'Unique specialty products for special occasions',
    descriptionBn: 'বিশেষ অনুষ্ঠানের জন্য অনন্য বিশেষ পণ্য',
    icon: seasoning,
    products: [
      { id: 'gold-tea', nameEn: 'Gold Tea', nameBn: 'গোল্ড টি', category: 'specialty', image: GoldTeaImg, price: '৳150', featured: true },
    ]
  },
];

// Get all products flats
export const getAllProducts = (): Product[] => {
  return categories.flatMap(cat => cat.products);
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return getAllProducts().filter(p => p.featured);
};

// Hero carousel slides data
export interface HeroSlide {
  id: string;
  category: Category;
  taglineEn: string;
  taglineBn: string;
  subtitleEn: string;
  subtitleBn: string;
  image?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'masala',
    category: categories.find(c => c.id === 'masala')!,
    taglineEn: 'Quality Ingredients for Perfect Results',
    taglineBn: 'নিখুঁত ফলাফলের জন্য গুণগত উপাদান',
    subtitleEn: 'Discover our premium collection of spices, seasonings and cooking essentials. Our carefully sourced ingredients help you create authentic flavors in every dish.',
    subtitleBn: 'আমাদের প্রিমিয়াম মশলা, সিজনিং এবং রান্নার প্রয়োজনীয় উপাদান আবিষ্কার করুন। সতর্কতার সাথে সংগ্রহ করা উপাদানগুলি প্রতিটি খাবারে খাঁটি স্বাদ তৈরি করতে সাহায্য করে।',
    image: BiriyaniMasalaImg,
  },
  {
    id: 'baking',
    category: categories.find(c => c.id === 'baking')!,
    taglineEn: 'Premium Baking Essentials',
    taglineBn: 'প্রিমিয়াম বেকিং উপকরণ',
    subtitleEn: 'Everything you need for perfect bakes - from corn flour to custard powder. Create delicious cakes, pastries and desserts.',
    subtitleBn: 'নিখুঁত বেকিংয়ের জন্য সব কিছু - কর্ন ফ্লাওয়ার থেকে কাস্টার্ড পাউডার। সুস্বাদু কেক, পেস্ট্রি এবং মিষ্টি তৈরি করুন।',
    image: baking,
  },
  {
    id: 'essences',
    category: categories.find(c => c.id === 'essences')!,
    taglineEn: 'Aromatic Food Essences',
    taglineBn: 'সুগন্ধি ফুড এসেন্স',
    subtitleEn: 'Add authentic aromas to your cooking with our range of premium food essences.',
    subtitleBn: 'আমাদের প্রিমিয়াম ফুড এসেন্সের সাথে আপনার রান্নায় যোগ করুন খাঁটি সুগন্ধ।',
    image: BiriyaniFoodEssenceImg,
  },
  {
    id: 'condiments',
    category: categories.find(c => c.id === 'condiments')!,
    taglineEn: 'Essential Condiments',
    taglineBn: 'প্রয়োজনীয় মসলা ও সস',
    subtitleEn: 'Complete your kitchen with our trusted range of vinegars, sauces and seasonings.',
    subtitleBn: 'আমাদের বিশ্বস্ত ভিনেগার, সস এবং সিজনিংয়ের সাথে আপনার রান্নাঘর সম্পূর্ণ করুন।',
    image: seasoning,
  },
];
