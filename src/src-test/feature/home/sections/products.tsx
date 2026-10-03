import React from "react";
import Link from "next/link";

const products = [
  {
    id: "solar",
    title: "Solar Control Series",
    description: "Engineered to reject up to 80% of solar energy. Experience dramatic temperature drops and eliminate harsh glare while preserving your panoramic views.",
    image: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "safety",
    title: "Safety & Security",
    description: "Optically clear, tear-resistant defense holding shattered glass in place.",
    image: "/images/low-angle-view-business-buildings-1-scaled.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "decorative",
    title: "Decorative & Privacy",
    description: "Elegant frosted finishes for interior partitions and confidential spaces.",
    image: "/images/minimalist-office-interior-desig.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "anti-graffiti",
    title: "Anti-Graffiti Film",
    description: "Sacrificial outer layer that protects expensive glass from scratches and vandalism.",
    image: "/images/modern-skyscrapers-business-district-scaled.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "low-e",
    title: "Low-E Insulation",
    description: "Retains interior heat during winter while blocking solar heat in the summer.",
    image: "/images/heroimg.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "exterior",
    title: "Exterior Facade Enhancement",
    description: "Revitalize the look of aging buildings with a sleek, uniform mirrored or tinted exterior.",
    image: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "uv-shield",
    title: "UV Shield Clear",
    description: "Blocks 99.9% of UV rays without changing the appearance of your glass.",
    image: "/images/low-angle-view-business-buildings-1-scaled.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "glare-reduction",
    title: "Ultra Glare Reduction",
    description: "Specialized dark tints perfect for media rooms or heavily sunlit offices.",
    image: "/images/minimalist-office-interior-desig.webp",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function ProductsGallery() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base/7 font-semibold text-amber-600 mb-2">Our Collection</h2>
            <p className="font-display text-4xl tracking-tight text-neutral-900 sm:text-5xl leading-[1.1]">
              Engineered for performance.<br className="hidden sm:block" />
              Designed for your space.
            </p>
          </div>
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-amber-600 transition-colors w-max"
          >
            Explore all products
            <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group relative overflow-hidden rounded-2xl bg-neutral-900 ${product.className}`}
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-w-sm line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
