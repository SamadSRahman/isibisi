import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import vidya from "../../assets/images/team/vidya (1).webp"
import sandesh from "../../assets/images/team/sandesh.webp"
import minakshi from "../../assets/images/team/meenakshi.webp"

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Content Creation",
		route:"/content-creation-service",
		description:
			"Crafting compelling visuals, 3D designs, videos, and logos that bring your brand to life.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		route:"/technology-service",
		
		title: "Technology",
		description:
			"Building cutting-edge apps and leveraging AI to create dynamic, personalized video content.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "PR & Marketing",
		route:"/marketing-service",
		description:
			"Amplifying your brand's voice through strategic public relations and targeted marketing campaigns.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "CMS",
		route:"/content-management-service",
		description:
			"Driving results with data-driven content strategies and performance insights.",
		icon: "icon-design-thinking",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Sandesh P",
		designation: "Founder & CEO",
		img: sandesh,
		link:"https://www.linkedin.com/in/sandeshpare/"
	},
	{
		id: crypto.randomUUID(),
		name: "Vidhyarekha",
		designation: "Consulting Partner",
		img: vidya,
		link:"https://www.linkedin.com/in/vidhya-rekha-26461b1",
	},
	{
		id: crypto.randomUUID(),
		name: "Meenakshi Singh",
		designation: "Consulting Partner",
		link:"https://www.linkedin.com/in/meenakshi-singh-mahapatra/",
		img: minakshi,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			{/* <Projects /> */}
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
