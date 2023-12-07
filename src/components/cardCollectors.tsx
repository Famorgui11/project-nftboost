interface ICardColectors {
	image: StaticImageData | string;
	name: string;
	value_crypto: string;
	percent: string;
}

import Image, { StaticImageData } from "next/image";

import IconVerify from "@/assets/verify.svg";
import IconETH from "@/assets/icon-eth.svg";

const CardCollectors = ({ image, name, value_crypto, percent }: ICardColectors) => {
	return (
		<div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-cardCollectorWidth">
			<div className="flex items-center gap-6">
				<strong className="font-semibold">1</strong>
				<div className="flex items-center gap-4">
					<div className="relative w-[2.625rem] h-[2.625rem]">
						<div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
							<Image src={image} alt="Image NFT" className="w-full h-full object-cover" />
						</div>
						<Image src={IconVerify} alt="Icon Verify" className="absolute bottom-0 right-0" />
					</div>
					<div className="space-y-1">
						<h4>{name}</h4>
						<p className="flex items-center gap-1 text-sm text-white text-opacity-70">
							Preço mínimo
							<span className="flex items-center gap-1 text-sm font-semibold">
								<Image src={IconETH} alt={"Icon Ether"} />
								{value_crypto} BTC
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-1 text-right">
				<strong className="text-green-primary text-sm/4 font-bold">{percent}</strong>
				<span className="flex items-center gap-1 text-sm font-semibold">
					<Image src={IconETH} alt={"Icon Ether"} />
					{value_crypto} BTC
				</span>
			</div>
		</div>
	);
};

export default CardCollectors;
