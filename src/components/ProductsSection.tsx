import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, getAllProducts, type Product } from '@/data/products';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

/* ---------------------------------------------
   Product Card
---------------------------------------------- */
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { language } = useLanguage();
  const category = categories.find(c => c.id === product.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <div className="aspect-square bg-muted relative overflow-hidden p-4">
          <img
            src={product.image}
            alt={language === 'en' ? product.nameEn : product.nameBn}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <h4 className="font-medium text-center">
            {language === 'en' ? product.nameEn : product.nameBn}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------------------------------------
   Products Section
---------------------------------------------- */
const ProductsSection = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get('category') || 'all';
  const brandFromURL = searchParams.get('brand') || 'all';

const [activeBrand, setActiveBrand] = useState<string>('all');
const [activeCategory, setActiveCategory] = useState<string>('all');
const [showAll, setShowAll] = useState(false);

  /* ---------------------------------------------
     Derive brands
  ---------------------------------------------- */
  const brands = useMemo(() => {
    return Array.from(new Set(getAllProducts().map(p => p.brand)));
  }, []);

  /* ---------------------------------------------
     Brand-filtered products
  ---------------------------------------------- */
  const brandFilteredProducts = useMemo(() => {
    if (activeBrand === 'all') return getAllProducts();
    return getAllProducts().filter(p => p.brand === activeBrand);
  }, [activeBrand]);

  /* ---------------------------------------------
     Brand-aware categories
  ---------------------------------------------- */
  const visibleCategories = useMemo(() => {
    if (activeBrand === 'all') return categories;

    return categories.filter(category =>
      category.products.some(p => p.brand === activeBrand)
    );
  }, [activeBrand]);

  /* ---------------------------------------------
     Final filtered products
  ---------------------------------------------- */
  const filteredProducts = useMemo(() => {
    let products =
      activeCategory === 'all'
        ? brandFilteredProducts
        : brandFilteredProducts.filter(p => p.category === activeCategory);

    return products;
  }, [brandFilteredProducts, activeCategory]);

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 9);
  const hasMoreProducts = filteredProducts.length > 9;

  /* ---------------------------------------------
     Reset invalid category on brand change
  ---------------------------------------------- */
  useEffect(() => {
    if (
      activeCategory !== 'all' &&
      !visibleCategories.some(c => c.id === activeCategory)
    ) {
      setActiveCategory('all');
    }
    setShowAll(false);
  }, [activeBrand, visibleCategories]);

  /* ---------------------------------------------
     URL sync
  ---------------------------------------------- */
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeBrand !== 'all') params.set('brand', activeBrand);
    if (activeCategory !== 'all') params.set('category', activeCategory);

    window.history.replaceState(null, '', `?${params.toString()}`);
  }, [activeBrand, activeCategory]);

  useEffect(() => {
  const urlBrand = searchParams.get('brand') || 'all';
  const urlCategory = searchParams.get('category') || 'all';

  setActiveBrand(urlBrand);
  setActiveCategory(urlCategory);
  setShowAll(false);
}, [searchParams]);

  /* ---------------------------------------------
     Render
  ---------------------------------------------- */
  return (
    <section className="py-16 my-24 bg-background" id="products">
      <div className="container-wide">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {language === 'en' ? 'Our Products' : 'আমাদের পণ্য'}
          </h2>
        </div>

        {/* Brand Filter */}
        <div className="flex justify-center mb-6 overflow-x-auto">
          <div className="flex gap-2 bg-muted/50 p-1 rounded-full">
            <button
              onClick={() => setActiveBrand('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium
                ${activeBrand === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'}`}
            >
              {language === 'en' ? 'All Brands' : 'সব ব্র্যান্ড'}
            </button>

            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${activeBrand === brand
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'}`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs (brand-aware) */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <div className="md:flex md:justify-center mb-8 overflow-x-auto scroll-smooth ">
            <TabsList className="bg-muted/50 p-1 rounded-full">
              <TabsTrigger value="all" className="rounded-full px-6">
                {language === 'en' ? 'All Items' : 'সব পণ্য'}
              </TabsTrigger>

              {visibleCategories.map(category => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 whitespace-nowrap"
                >
                  {language === 'en' ? category.nameEn : category.nameBn}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Products */}
          <TabsContent value={activeCategory}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {displayProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {hasMoreProducts && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
                >
                  {showAll
                    ? (language === 'en' ? 'Show Less' : 'কম দেখুন')
                    : (language === 'en' ? 'Show More' : 'আরও দেখুন')}
                  <ChevronRight className={`inline ml-2 ${showAll ? 'rotate-90' : ''}`} />
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
