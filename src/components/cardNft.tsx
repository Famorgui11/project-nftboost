interface ICardNFT {
	thumbnail: StaticImageData | string;
	name: string;
	value_crypto: string;
	value_brl: string;
}

import Image, { StaticImageData } from "next/image";

import IconHeart from "@/assets/icon-heart.svg";
import IconVerify from "@/assets/verify.svg";
import IconETH from "@/assets/icon-eth.svg";
import IconClock from "@/assets/icon-clock.svg";

const CardNft = ({ thumbnail, name, value_crypto, value_brl }: ICardNFT) => {
	return (
		<div className="w-full max-w-cardNftWidth overflow-hidden rounded-2xl border border-gray-b-card bg-gray-a-card">
			<div className="relative w-full h-cardNftHeight overflow-hidden">
				<Image src={thumbnail} alt="Image NFT 01" className="w-full h-full object-cover" />
				<div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-a-card rounded-full border border-gray-b-card">
					<Image src={IconHeart} alt="Icon Likes" />
					<small>0</small>
				</div>
			</div>
			<div className="w-full p-4">
				<h4 className="flex items-center gap-1 text-xs font-semibold mb-1">
					Cartoon Collection
					<Image src={IconVerify} alt="Icon verify" />
				</h4>
				<h3 className="text-lg font-semibold">{name}</h3>

				<div className="flex justify-between items-end my-4">
					<div className="space-y-1">
						<span className="text-xs text-white text-opacity-70">Preço atual</span>
						<h3 className="flex items-center gap-1 text-lg/none font-semibold">
							<Image src={IconETH} alt="Icon Ether" />
							{value_crypto} BTC
						</h3>
					</div>
					<h5 className="text-xs font-medium">R$ {value_brl}</h5>
				</div>

				<button className="w-full py-4 bg-blue-primary rounded-full text-sm font-semibold mb-4 hover:bg-blue-700 transition-all ease-linear">
					Buy now
				</button>

				<div className="flex items-center gap-1">
					<Image src={IconClock} alt="Icon clock" />
					<p className="text-xs">Fim em 4h 8m 22s</p>
				</div>
			</div>
		</div>
	);
};

export default CardNft;
