"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/lib/images";
import Image from "next/image";

const ImageGallery = () => {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="h-96 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />{" "}
                {/* Using img tag instead of next/image */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageGallery;
