import Image from "next/image";

import CardsLeft from "@/assets/cards-left.png";
import CardsRigth from "@/assets/cards-right.png";

const CardsHero = () => {
	return (
		<div className="relative w-areaCardsMobileWidth @desktop:w-full h-areaCardsMobileHeight @desktop:h-areaCardsDesktopHeight mt-12 @desktop:mt-20">
			<Image
				src={CardsLeft}
				alt={"Cards NFT Left"}
				className="absolute top-0 left-8 @desktop:left-0 z-10 w-1/2 @desktop:w-auto"
			/>
			<Image
				src={CardsRigth}
				alt={"Cards NFT Right"}
				className="absolute top-0 right-8 @desktop:right-0 w-1/2 @desktop:w-auto"
			/>
		</div>
	);
};

export default CardsHero;
