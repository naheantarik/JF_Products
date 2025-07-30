import React from 'react'
import Image from 'next/image'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#F2F4F6] rounded-[18px]">
      <div>
        <Image
          src={product.image}
          alt="product-image"
          width={285}
          height={220}
          className="w-full h-full object-cover rounded-[18px] px-[10px] pt-[10px]"
        />
        <div className="p-5">
          <h6 className="text-left mb-[10px]">{product.name}</h6>
            <p className="text-[14px] font-poppins leading-[140%] font-medium text-[#1A1A1A] opacity-[0.7] mb-5">
              ₹
              {product.price.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {product.price2 && (
                <>
                  - ₹{product.price2.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </>
              )}
            </p>
          <button className="bg-[#B0DD1D] text-black text-[14px] font-medium dm-sans-text leading-[100%] tracking-[0px] px-[32px] py-[12px] rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;