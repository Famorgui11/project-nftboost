import SectionCarrousel from "@/components/section-carrousel";
import SectionHero from "@/components/section-hero";

import Thumb01 from "@/assets/img-neft/01.jpg";
import Thumb02 from "@/assets/img-neft/02.jpg";
import Thumb03 from "@/assets/img-neft/03.jpg";
import Thumb04 from "@/assets/img-neft/04.jpg";
import Thumb05 from "@/assets/img-neft/05.jpg";
import Thumb06 from "@/assets/img-neft/06.jpg";
import Thumb07 from "@/assets/img-neft/07.jpg";
import Thumb08 from "@/assets/img-neft/08.jpg";
import Thumb09 from "@/assets/img-neft/09.jpg";
import Thumb10 from "@/assets/img-neft/10.jpg";
import Thumb11 from "@/assets/img-neft/11.jpg";
import Thumb12 from "@/assets/img-neft/12.jpg";
import SectionCollectors from "@/components/section-collectors";

const notableCollections = [
	{
		thumbnail: Thumb01,
		name: "Cat #221",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb02,
		name: "Snike #2331",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb03,
		name: "Skull Hatter #2311",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb04,
		name: "Nox #2611",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb05,
		name: "Crazy Monkey #131",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
];

const highlightOfTheMonth = [
	{
		thumbnail: Thumb05,
		name: "Crazy Monkey #131",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb06,
		name: "Alien Shooter #2211",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb07,
		name: "Yordlee #1221",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb08,
		name: "Dragon Cannon #4401",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb09,
		name: "Borex #171",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
];

const tendencies = [
	{
		thumbnail: Thumb09,
		name: "Borex #171",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb10,
		name: "Durtre #2391",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb11,
		name: "Hatter #321",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb12,
		name: "Sailor Skull #4431",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
	{
		thumbnail: Thumb01,
		name: "Cat #221",
		value_crypto: "0.0721",
		value_brl: "602,02",
	},
];

const Home = () => {
	return (
		<>
			<SectionHero />
			<SectionCarrousel
				subtitle={"Destaque em Coleções"}
				title={"Coleções notáveis"}
				data={notableCollections}
			/>

			<hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />

			<SectionCarrousel
				subtitle={"Seleção Mensal"}
				title={"Destaque do Mês"}
				data={highlightOfTheMonth}
			/>

			<hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />

			<SectionCollectors />

			<hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />

			<SectionCarrousel subtitle={"Em Tendência"} title={"Tendências"} data={tendencies} />
		</>
	);
};

export default Home;
