import React from 'react'
import ProductCard from './ProductCard'

const ProductSection = () => {

    const products = [
      {
        id: 1,
        name: "JF Barbed Wire- 270 GSM",
        price: 4995.00,
        image: "/images/product/image-1.png",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "/images/product/image-1.png",
      },
    ];

  return (
    <section className='pt-[100px] pb-[110px]'>
        <div className='container mx-auto'>
            <h2>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductSection;