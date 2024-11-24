import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";
import client1 from "../../../assets/images/clientLogos/Circular logo.png";
import client2 from "../../../assets/images/clientLogos/cropped-ut-removebg 1.png";
import client3 from "../../../assets/images/clientLogos/Frame 893.png";
import client4 from "../../../assets/images/clientLogos/Frame.png";
import client5 from "../../../assets/images/clientLogos/Circular logo.png";
import client6 from "../../../assets/images/clientLogos/hi voco.png";
import client7 from "../../../assets/images/clientLogos/hqazshrbboyrqnnugjqe.png";
import client8 from "../../../assets/images/clientLogos/hyundai-motor-company-2 1.png";
import client9 from "../../../assets/images/clientLogos/Kia.png";
import client10 from "../../../assets/images/clientLogos/LOGO_250-x-150.png";
import client11 from "../../../assets/images/clientLogos/logo_Apprikart (2) 1.png";
import client12 from "../../../assets/images/clientLogos/logo_d9e0a75a-dd55-4aa1-950b-346167a65f67_632x168.webp";
import client13 from "../../../assets/images/clientLogos/Rectangle.png";
import client14 from "../../../assets/images/clientLogos/Serendipity_Logo_240x240.avif";

const testimonialsData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Super customer service!",
    description:
      "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    author: "William Jack",
    designation: "Founder@XYZ",
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: "Exceptional creativity and vision",
    description:
      "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
    author: "Smith Align",
    designation: "Businessman",
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Innovative and professional",
    description:
      "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    author: "Smith Align",
    designation: "Milano Joe",
    img: Thumb3Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: "Transformed our brand",
    description:
      "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    author: "Danial Mark",
    designation: "Marketing Director",
    img: Thumb4Img,
  },
];

const logos = [
  client1,
  client2,
  client3,
  client4,
//   client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
];

function Testimonial() {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Clients are always
            <span className="aximo-title-animation">
              satisfied with us
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        {/* <div className="row">
					{testimonialsData.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div> */}
        <div className="logo-section">
         {logos.map((src)=>(
			<img src={src} style={{backgroundColor:src===client10?"black":''}} alt="" />
		 ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
