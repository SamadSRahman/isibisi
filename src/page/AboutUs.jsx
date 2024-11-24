import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team4Img from "../assets/images/team/team4.png";
import vidya from "../assets/images/team/vidya (1).webp"
import sandesh from "../assets/images/team/sandesh.webp"
import minakshi from "../assets/images/team/meenakshi.webp"

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
function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			{/* <Story /> */}
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
