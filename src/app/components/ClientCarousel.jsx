import Image from "next/image";

const ClientCarousel = () => {
  const items = [
    { text: "Quality Product", icon: <Image src="/images/client/image-1.png" alt="client-logo" width={76} height={40} /> },
    { text: "Shipping Across India", icon: <Image src="/images/client/image-1.png" alt="client-logo" width={76} height={40} /> },
  ];

  return (
    <section>
      <div className="w-full bg-white py-[96px] overflow-hidden">
        {/* Fixed background container */}
        <div className="-rotate-[6deg] origin-center w-[200%] -ml-[50%] bg-[#D9ECFF] border-t border-b border-slate-300 py-10 relative">
          {/* Scrolling content overlay */}
          <div className="flex animate-scroll absolute inset-0">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-10 whitespace-nowrap flex-shrink-0"
              >
                {items.map((item, itemIndex) => (
                  <div
                    key={`item-${itemIndex}`}
                    className="flex items-center space-x-3 px-6"
                  >
                    {item.icon}
                    <span className="text-[#002B55] font-medium text-lg">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
