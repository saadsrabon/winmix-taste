import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, getAllProducts, type Product } from '@/data/products';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

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
        {/* Product Image */}
        <div className="aspect-square bg-muted relative overflow-hidden p-4">
          {product.image ? (
            <img 
              src={product.image} 
              alt={language === 'en' ? product.nameEn : product.nameBn}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <span className="text-4xl opacity-40">{category?.icon || '📦'}</span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h4 className="font-medium text-foreground text-sm sm:text-base lg:text-base xl:text-lg text-center">
            {language === 'en' ? product.nameEn : product.nameBn}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
const categoryFromURL = searchParams.get('category') || 'all';

 const [activeCategory, setActiveCategory] = useState(categoryFromURL);

  const [showAll, setShowAll] = useState(false);
  
  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return getAllProducts();
    }
    const category = categories.find(c => c.id === activeCategory);
    return category?.products || [];
  };

  const filteredProducts = getFilteredProducts();
  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 9);
  const hasMoreProducts = filteredProducts.length > 9;
useEffect(() => {
  setActiveCategory(categoryFromURL);
  setShowAll(false); // reset pagination on category change
}, [categoryFromURL]);

useEffect(()=>{
  /// start from top
  
},[])
  return (
    <section className="py-16 my-24 bg-background" id="products">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {language === 'en' ? 'Our Products' : 'আমাদের পণ্য'}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {language === 'en' 
              ? 'Premium quality ingredients for your culinary adventures'
              : 'আপনার রন্ধন অভিযানের জন্য প্রিমিয়াম মানের উপাদান'}
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory}
  onValueChange={setActiveCategory}
  className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-muted/50 p-1 rounded-full">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {language === 'en' ? 'All Items' : 'সব পণ্য'}
              </TabsTrigger>
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id} 
                  className="rounded-full px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                >
                  {language === 'en' ? category.nameEn : category.nameBn}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Products Grid */}
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {displayProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            
            {/* Show More Button */}
            {hasMoreProducts && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  {showAll 
                    ? (language === 'en' ? 'Show Less' : 'কম দেখুন')
                    : (language === 'en' ? 'Show More' : 'আরও দেখুন')
                  }
                  <ChevronRight className={`w-4 h-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors font-medium"
          >
            {language === 'en' ? 'View Complete Catalog' : 'সম্পূর্ণ ক্যাটালগ দেখুন'}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
