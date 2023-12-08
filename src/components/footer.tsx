import Image from "next/image";

import Container from "@/components/container";

import Logo from "@/assets/logo.svg";
import Link from "next/link";

const footerNav = [
	{
		titleMenu: "NFT Boost®",
		items: ["Download", "NFTs", "Rank", "FAQ"],
	},
	{
		titleMenu: "Links importantes",
		items: ["About us", "Questions", "Press", "Contact us", "Legal"],
	},
];

const Footer = () => {
	return (
		<footer className="py-10 @laptop:pt-32 @laptop:pb-14">
			<Container className="flex flex-col @laptop:flex-row justify-between gap-10">
				<div className="text-left max-w-full @laptop:max-w-leftContFooterWidth">
					<Image src={Logo} alt={"Logo NFTBoost"} className="w-full max-w-logoMobileWidth" />
					<p className="mt-4 mb-6 text-lg text-white text-opacity-70">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry
					</p>
					<button className="w-full @tablet:w-auto bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-700 transition-all ease-linear">
						Conectar carteira
					</button>
				</div>
				<div className="gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row">
					{footerNav.map(({ titleMenu, items }) => (
						<div key={`Menu-${titleMenu}`}>
							<strong className="block text-xl mb-4">{titleMenu}</strong>
							<ul className="space-y-4">
								{items.map((item, index) => (
									<li key={index}>
										<Link
											href={""}
											className="text-lg text-white text-opacity-70 hover:text-blue-primary transition-colors ease-linear">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
