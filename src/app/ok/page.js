// "use client";

// import { useEffect, useRef } from "react";
// import Swiper from 'swiper';
// import './ok.css';

// function Ok() {
//     const swiperRef = useRef(null);

//     const handlePrev = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slidePrev();
//         }
//     };

//     const handleNext = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slideNext();
//         }
//     };

//     // Initialize Swiper when the component mounts
//     useEffect(() => {
//         if (swiperRef.current) {
//             swiperRef.current.swiper = new Swiper(swiperRef.current, {
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 },
//             });
//         }
//     }, []);

//     return (
//         <div className="swiper-container mt-96" ref={swiperRef}>
//             <div className="swiper-wrapper">
//                 <div className="swiper-slide">Slide 1</div>
//                 <div className="swiper-slide">Slide 2</div>
//                 <div className="swiper-slide">Slide 3</div>
//             </div>

//             <div className="w-full border ">
//                 <div className="swiper-button-next" onClick={handleNext}>
//                     Next
//                 </div>
//                 <div className="swiper-button-prev mb-20" onClick={handlePrev}>
//                     Prev
//                 </div></div>
//         </div>
//     );
// }

// export default Ok;

"use client";

import { useEffect, useRef } from "react";
import Swiper from 'swiper';
import './ok.css';

function Ok() {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Initialize Swiper when the component mounts
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper = new Swiper(swiperRef.current, {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }, []);

    return (
        <div className="swiper-container mt-96" ref={swiperRef}>

            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>

            <div className="w-full border">
                <div className="" onClick={handleNext}>
                    Next
                </div>
                <div className=" mt-2" onClick={handlePrev}>
                    Prev
                </div>
            </div>

        </div>
    );
}

export default Ok;

