import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../utilites/styles.css";

import { Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="hero md:min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728108124/6_g5xokq.jpg)",
            }}
          >
            <div className="flex justify-center md:justify-start md:pl-20 text-neutral-content  w-full px-5 md:px-0  ">
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
            className="hero bg-cover min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728194633/coffee-shop-aesthetic-mhbo1vdkdug7tr1u_gl3gyh.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="flex justify-center md:justify-start md:pl-20 text-neutral-content  w-full px-5 md:px-0 ">
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
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728193834/ai-generated-an-aesthetic-studihoto_mtmh8i.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex justify-center md:justify-end text-neutral-content  w-full px-5 md:px-0 md:pr-32 ">
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
        {/* slide 4 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728103053/3_hnl4xc.png)",
            }}
          >
            <div className="flex justify-center md:justify-end text-neutral-content  w-full px-5 md:px-0 md:pr-32 ">
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
        {/* slide 5 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvp64j4a3/image/upload/v1728194822/cozy-coffee-shop-steaming-coffee-open_maiwqt.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex justify-center md:justify-start md:pl-20 text-neutral-content  w-full px-5 md:px-0 ">
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
