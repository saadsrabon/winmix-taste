export interface Product {
  id: string;
  nameEn: string;
  nameBn: string;
  category: string;
  image: string;
  price?: string;
  featured?: boolean;
  brand: string;
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
  nameEn: 'Baking',
  nameBn: 'বেকিং',
  descriptionEn: 'Baking essentials',
  descriptionBn: 'বেকিংয়ের প্রয়োজনীয় উপকরণ',
  icon: baking,
  products: [
    { id: 'agar-agar', nameEn: 'Agar Agar', nameBn: 'আগার আগার', category: 'baking', brand: 'Cookwell', image: AgarAgarImg, price: '৳85' },
    { id: 'bakingsoda', nameEn: 'Baking Soda', nameBn: 'বেকিং সোডা', category: 'baking', brand: 'Cookwell', image: BakingsodaImg, price: '৳35' },
    { id: 'cornflower', nameEn: 'Cornflower', nameBn: 'কর্নফ্লাওয়ার', category: 'baking', brand: 'Cookwell', image: CornflowerImg, price: '৳45', featured: true },
    { id: 'yeast', nameEn: 'Yeast', nameBn: 'ইস্ট', category: 'baking', brand: 'Cookwell', image: YeastImg, price: '৳45' },
  ]
}
,{
  id: 'food-color',
  nameEn: 'Food Color',
  nameBn: 'খাদ্য রঙ',
  descriptionEn: 'Food coloring products',
  descriptionBn: 'খাদ্য রঙের পণ্য',
  icon: seasoning,
  products: [
    { id: 'blue-food-color', nameEn: 'Blue Food Color', nameBn: 'নীল খাদ্য রঙ', category: 'food-color', brand: 'Cookwell', image: BlueFoodColorImg, price: '৳30' },
    { id: 'chocolate-food-color', nameEn: 'Chocolate Food Color', nameBn: 'চকলেট খাদ্য রঙ', category: 'food-color', brand: 'Cookwell', image: ChocolateFoodColorImg, price: '৳35' },
    { id: 'green-color', nameEn: 'Green Food Color', nameBn: 'সবুজ খাদ্য রঙ', category: 'food-color', brand: 'Cookwell', image: GreenColorImg, price: '৳30' },
    { id: 'orange-food-color', nameEn: 'Orange Food Color', nameBn: 'কমলা খাদ্য রঙ', category: 'food-color', brand: 'Cookwell', image: OrangeFoodColorImg, price: '৳35' },
    { id: 'yellow-food-color', nameEn: 'Yellow Food Color', nameBn: 'হলুদ খাদ্য রঙ', category: 'food-color', brand: 'Cookwell', image: YellowFoodColorImg, price: '৳30' },
    { id: 'zarda-color', nameEn: 'Zarda Color', nameBn: 'জর্দা রঙ', category: 'food-color', brand: 'Cookwell', image: ZardaColorImg, price: '৳35' },
  ]
},
{
  id: 'food-essence',
  nameEn: 'Food Essence',
  nameBn: 'ফুড এসেন্স',
  descriptionEn: 'Aromatic food essences',
  descriptionBn: 'সুগন্ধি ফুড এসেন্স',
  icon: seasoning,
  products: [
    { id: 'banana-food-essence', nameEn: 'Banana Essence', nameBn: 'কলা এসেন্স', category: 'food-essence', brand: 'Cookwell', image: BananaFoodEssenceImg, price: '৳45' },
    { id: 'biriyani-food-essence', nameEn: 'Biriyani Essence', nameBn: 'বিরিয়ানি এসেন্স', category: 'food-essence', brand: 'Cookwell', image: BiriyaniFoodEssenceImg, price: '৳40', featured: true },
    { id: 'chocolate-food-essence', nameEn: 'Chocolate Essence', nameBn: 'চকলেট এসেন্স', category: 'food-essence', brand: 'Cookwell', image: ChocolateFoodEssenceImg, price: '৳45' },
    { id: 'kewra-food-essence', nameEn: 'Kewra Essence', nameBn: 'কেওড়া এসেন্স', category: 'food-essence', brand: 'Cookwell', image: kewraFoodEssenceImg, price: '৳40' },
    { id: 'lemon-food-essence', nameEn: 'Lemon Essence', nameBn: 'লেবু এসেন্স', category: 'food-essence', brand: 'Cookwell', image: LemonFoodEssenceImg, price: '৳40' },
    { id: 'mango-food-essence', nameEn: 'Mango Essence', nameBn: 'আম এসেন্স', category: 'food-essence', brand: 'Cookwell', image: MangoFoodEssenceImg, price: '৳45' },
    { id: 'orange-food-essence', nameEn: 'Orange Essence', nameBn: 'কমলা এসেন্স', category: 'food-essence', brand: 'Cookwell', image: OrangeFoodEssenceImg, price: '৳40' },
    { id: 'polao-food-essence', nameEn: 'Polao Essence', nameBn: 'পোলাও এসেন্স', category: 'food-essence', brand: 'Cookwell', image: PolaoFoodEssenceImg, price: '৳40' },
    { id: 'strawberry-food-essence', nameEn: 'Strawberry Essence', nameBn: 'স্ট্রবেরি এসেন্স', category: 'food-essence', brand: 'Cookwell', image: StrawberryFoodEssenceImg, price: '৳45' },
    { id: 'vanilla-food-essence', nameEn: 'Vanilla Essence', nameBn: 'ভ্যানিলা এসেন্স', category: 'food-essence', brand: 'Cookwell', image: VanillaFoodEssenceImg, price: '৳45' },
    { id: 'zafran-food-essence', nameEn: 'Zafran Essence', nameBn: 'জাফরান এসেন্স', category: 'food-essence', brand: 'Cookwell', image: ZafranFoodEssenceImg, price: '৳50' },
  ]
},
{
  id: 'ready-mix-masala',
  nameEn: 'Ready-mix Masala',
  nameBn: 'রেডি মিক্স মসলা',
  descriptionEn: 'Ready-made spice mixes',
  descriptionBn: 'রান্নার জন্য প্রস্তুত মসলা',
  icon: seasoning,
  products: [
    { id: 'bar-b-q-masala', nameEn: 'B-B-Q Masala', nameBn: 'বারবিকিউ মসলা', category: 'ready-mix-masala', brand: 'Cookwell', image: BarBQMasalaImg, price: '৳85' },
    { id: 'biriyani-masala', nameEn: 'Biriyani Masala', nameBn: 'বিরিয়ানি মসলা', category: 'ready-mix-masala', brand: 'Cookwell', image: BiriyaniMasalaImg, price: '৳95', featured: true },
    { id: 'chat-masala', nameEn: 'Chat Masala', nameBn: 'চাট মসলা', category: 'ready-mix-masala', brand: 'Cookwell', image: ChatMasalaImg, price: '৳65' },
  ]
},
{
  id: 'seasoning',
  nameEn: 'Seasoning',
  nameBn: 'সিজনিং',
  descriptionEn: 'Seasoning products',
  descriptionBn: 'সিজনিং পণ্য',
  icon: seasoning,
  products: [
    { id: 'bit-salt', nameEn: 'Bit Salt', nameBn: 'বিট লবণ', category: 'seasoning', brand: 'Cookwell', image: BitSaltImg, price: '৳25' },
    { id: 'rose-water', nameEn: 'Rose Water', nameBn: 'গোলাপ জল', category: 'seasoning', brand: 'Cookwell', image: RoseWaterImg, price: '৳60' },
    { id: 'kewra-water-green', nameEn: 'Kewra Water', nameBn: 'কেওড়া জল', category: 'seasoning', brand: 'Cookwell', image: KewraWaterGreenImg, price: '৳55' },
    { id: 'soya-sauce', nameEn: 'Soya Sauce', nameBn: 'সয়া সস', category: 'seasoning', brand: 'Cookwell', image: soyaSauceImg, price: '৳75' },
    { id: 'white-vinegar', nameEn: 'White Vinegar', nameBn: 'সাদা ভিনেগার', category: 'seasoning', brand: 'Cookwell', image: whiteVinegarImg, price: '৳55' },
  ]
},
{
  id: 'spices',
  nameEn: 'Spices',
  nameBn: 'মশলা',
  descriptionEn: 'Whole spices',
  descriptionBn: 'সম্পূর্ণ মশলা',
  icon: seasoning,
  products: [
    { id: 'black-pepper', nameEn: 'Black Pepper', nameBn: 'কালো গোলমরিচ', category: 'spices', brand: 'Cookwell', image: BlackPepperImg, price: '৳110' },
    { id: 'white-pepper', nameEn: 'White Pepper', nameBn: 'সাদা গোলমরিচ', category: 'spices', brand: 'Cookwell', image: whitePepperImg, price: '৳120' },
  ]
},
{
  id: 'chocolate',
  nameEn: 'Chocolate',
  nameBn: 'চকলেট',
  descriptionEn: 'Chocolate products',
  descriptionBn: 'চকলেট পণ্য',
  icon: seasoning,
  products: [
    { id: 'winmix-choco-choco', nameEn: 'Choco Choco', nameBn: 'চকো চকো', category: 'chocolate', brand: 'Winmix', image: WinmixChocoChocoImg, price: '৳85' },
  ]
},
{
  id: 'snacks-beverages',
  nameEn: 'Snacks & Beverages',
  nameBn: 'স্ন্যাকস ও পানীয়',
  descriptionEn: 'Beverages',
  descriptionBn: 'পানীয়',
  icon: seasoning,
  products: [
    { id: 'gold-tea', nameEn: 'Winmix Gold Tea 400gm', nameBn: 'উইনমিক্স গোল্ড টি', category: 'snacks-beverages', brand: 'Winmix', image: GoldTeaImg, price: '৳150', featured: true },
  ]
}






 
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
