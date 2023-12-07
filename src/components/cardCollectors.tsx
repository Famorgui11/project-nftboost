import Image from "next/image";

import IconVerify from "@/assets/verify.svg";
import ImageNFT from "@/assets/img-neft/01.jpg";
import IconETH from "@/assets/icon-eth.svg";

const CardCollectors = () => {
	return (
		<div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between">
			<div className="flex items-center gap-6">
				<strong className="font-semibold">1</strong>
				<div className="flex items-center gap-4">
					<div className="relative w-[2.625rem] h-[2.625rem]">
						<div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
							<Image src={ImageNFT} alt="Image NFT" className="w-full h-full object-cover" />
						</div>
						<Image src={IconVerify} alt="Icon Verify" className="absolute bottom-0 right-0" />
					</div>
					<div className="space-y-1">
						<h4>Lorem Ipsum</h4>
						<p className="flex items-center gap-1">
							Preço mínimo
							<span className="flex items-center gap-1">
								<Image src={IconETH} alt={"Icon Ether"} />
								0.721 BTC
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardCollectors;
