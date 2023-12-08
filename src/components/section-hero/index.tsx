import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";
import CardsHero from "./cards";

import IconBoost from "@/assets/icon-boost.svg";
import SmallNft from "@/assets/nft-small.png";
import DoubleNft from "@/assets/double-nft.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";

const SectionHero = () => {
	return (
		<section className="overflow-hidden pt-36 bg-sHeroBg bg-no-repeat">
			<Container className="flex flex-col items-center">
				<h3 className="flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl/normal mb-3">
					<Image src={IconBoost} alt={"Icon NFTBoost"} />
					<span>Adentre um reino de possibilidades infinitas</span>
				</h3>
				<h1 className="hidden @tablet:block font-poppins text-5xl/normal @desktop:text-7xl/normal font-semibold text-center mb-4">
					Explore um Universo
					<div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
						<Image src={SmallNft} alt={"Small NFT"} className="w-11 @desktop:w-auto" />
					</div>
					Digital de
					<Image
						src={DoubleNft}
						alt={"Double NFT"}
						className="inline-block w-[4.5rem] @desktop:w-auto mx-2"
					/>
					Colecionáveis Únicos!
				</h1>
				<h1 className="block @tablet:hidden font-poppins text-5xl/normal font-semibold text-center mb-4">
					Explore
					<Image src={DoubleNft} alt={"Double NFT"} className="inline-block w-[4.5rem] mx-2" />
					um Universo Digital
					<div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24">
						<Image src={SmallNft} alt={"Small NFT"} className="w-11" />
					</div>
					de Colecionáveis Únicos!
				</h1>
				<p className="w-full @desktop:max-w-textSHeroWidth @desktop:text-xl text-center text-white text-opacity-90 mb-6 @desktop:mb-9">
					Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte,
					a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.
				</p>
				<div className="flex flex-col @tablet:flex-row items-center gap-4">
					<Link href={""}>
						<Image src={GooglePlay} alt={"Icon GooglePlay"} />
					</Link>
					<Link href={""}>
						<Image src={AppleStore} alt={"Icon AppleStore"} />
					</Link>
				</div>

				<CardsHero />

				<div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36"></div>
			</Container>
		</section>
	);
};

export default SectionHero;
