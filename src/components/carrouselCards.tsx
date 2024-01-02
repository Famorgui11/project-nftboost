"use client";

interface ICardNFT {
	thumbnail: StaticImageData | string;
	name: string;
	value_crypto: string;
	value_brl: string;
	index?: number;
}

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import CardNft from "@/components/cardNft";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";

import Arrow from "@/assets/arrow.svg";

const CarrouselCards = ({ data }: { data: ICardNFT[] }) => {
	const swiperRef = useRef<SwiperCore>();
	return (
		<div className="w-full relative">
			<button
				className="w-12 h-12 absolute z-10 bg-blue-primary hover:bg-gray-h-btn-slide transition-all ease-linear border border-white border-opacity-5 rounded-full hidden @laptop:flex items-center justify-center top-1/2 -mt-6 -left-6"
				onClick={() => {
					swiperRef.current?.slidePrev();
				}}>
				<Image src={Arrow} alt={"Arrow Previous"} />
			</button>
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slidesPerView={4}
				spaceBetween={32}
				speed={800}
				loop={true}
				modules={[Navigation]}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				breakpoints={{
					320: {
						slidesPerView: 1.3,
						spaceBetween: 24,
					},
					640: {
						slidesPerView: 2.5,
					},
					1024: {
						slidesPerView: 3.3,
					},
					1250: {
						slidesPerView: 4,
						spaceBetween: 32,
					},
				}}
				className="!px-3">
				{data.map(({ name, thumbnail, value_crypto, value_brl, index }: ICardNFT) => (
					<SwiperSlide key={index}>
						<CardNft
							thumbnail={thumbnail}
							name={name}
							value_crypto={value_crypto}
							value_brl={value_brl}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<button
				className="w-12 h-12 absolute z-10 bg-blue-primary hover:bg-gray-h-btn-slide transition-all ease-linear border border-white border-opacity-5 rounded-full hidden @laptop:flex items-center justify-center rotate-180 top-1/2 -mt-6 -right-6"
				onClick={() => {
					swiperRef.current?.slideNext();
				}}>
				<Image src={Arrow} alt={"Arrow Next"} />
			</button>
		</div>
	);
};

export default CarrouselCards;
