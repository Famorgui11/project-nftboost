interface ICardNFT {
	thumbnail: StaticImageData | string;
	name: string;
	value_crypto: string;
	value_brl: string;
	index?: number;
}

interface ICarrouselCards {
	subtitle: string;
	title: string;
	data: ICardNFT[];
}

import { StaticImageData } from "next/image";

import Container from "@/components/container";
import TitleSection from "../titleSection";
import CarrouselCards from "../carrouselCards";

const SectionCarrousel = ({ subtitle, title, data }: ICarrouselCards) => {
	return (
		<section className="py-10 @desktop:py-28">
			<Container className="px-0 @desktop:px-3">
				<TitleSection subtitle={subtitle} title={title} />

				<CarrouselCards data={data} />
			</Container>
		</section>
	);
};

export default SectionCarrousel;
