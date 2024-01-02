import CardCollectors from "../cardCollectors";
import Container from "../container";
import TitleSection from "../titleSection";

import Thumb10 from "@/assets/img-neft/10.jpg";
import Thumb07 from "@/assets/img-neft/07.jpg";
import Thumb03 from "@/assets/img-neft/03.jpg";
import Thumb05 from "@/assets/img-neft/05.jpg";
import Thumb08 from "@/assets/img-neft/08.jpg";
import Thumb12 from "@/assets/img-neft/12.jpg";
import Thumb11 from "@/assets/img-neft/11.jpg";
import Thumb04 from "@/assets/img-neft/04.jpg";

const collectors = [
	{
		image: Thumb10,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb07,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb03,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb05,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb08,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb12,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb11,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
	{
		image: Thumb04,
		name: "Lorem Ipsum",
		value_crypto: "0.721",
		percent: "20",
	},
];

const SectionCollectors = () => {
	return (
		<section className="py-10 @laptop:py-28">
			<Container>
				<TitleSection subtitle={"Colecionadores em Foco"} title={"Principais colecionadores"} />

				<div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @laptop:gap-x-8 gap-y-4">
					{collectors.map(({ image, name, value_crypto, percent }, index) => (
						<CardCollectors
							key={index}
							position={index + 1}
							image={image}
							name={name}
							value_crypto={value_crypto}
							percent={percent}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default SectionCollectors;
