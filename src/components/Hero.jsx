import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <div>
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728103053/3_hnl4xc.png)",
            }}
          >
            <div className="flex justify-end text-neutral-content  w-full pr-32 ">
              <div className="max-w-lg">
                <h1 className="mb-5 text-2xl font-bold">
                  Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="mb-5">
                  It&apos;s coffee time - Sip & Savor - Relaxation in every sip!
                  Get the nostalgia back!! Your companion of every moment!!!
                  Enjoy the beautiful moments and make them memorable.
                </p>
                <button className=" px-5 py-1 rounded-md text-white bg-[#E3B577]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          ;
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728103053/3_hnl4xc.png)",
            }}
          >
            <div className="flex justify-end text-neutral-content  w-full pr-32 ">
              <div className="max-w-lg">
                <h1 className="mb-5 text-2xl font-bold">
                  Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="mb-5">
                  It&apos;s coffee time - Sip & Savor - Relaxation in every sip!
                  Get the nostalgia back!! Your companion of every moment!!!
                  Enjoy the beautiful moments and make them memorable.
                </p>
                <button className=" px-5 py-1 rounded-md text-white bg-[#E3B577]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          ;
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728103053/3_hnl4xc.png)",
            }}
          >
            <div className="flex justify-end text-neutral-content  w-full pr-32 ">
              <div className="max-w-lg">
                <h1 className="mb-5 text-2xl font-bold">
                  Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="mb-5">
                  It&apos;s coffee time - Sip & Savor - Relaxation in every sip!
                  Get the nostalgia back!! Your companion of every moment!!!
                  Enjoy the beautiful moments and make them memorable.
                </p>
                <button className=" px-5 py-1 rounded-md text-white bg-[#E3B577]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          ;
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
