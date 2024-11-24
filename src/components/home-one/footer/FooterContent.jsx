import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import youtube from './youtube-play.png'
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Lets start a
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				project together
			</h2>
			<p>
				We work closely with our clients to understand their objectives, target audience, and unique needs. We
				use our creative skills to translate these requirements and practical design solutions.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:+91 797512 9131">  +91 797512 9131 </a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:sandesh@isibisi.in "> sandesh@isibisi.in  </a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://youtube.com/@isibisi_studio?si=nBw5rz6HFfdehdRH" target="_blank">
							<i className="icon-youtube-play"></i>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/share/Ur3bqvaxCUr3LBoc/?mibextid=LQQJ4d" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/isibisi.in/profilecard/?igsh=NjVvYzhlc2o0ZW9n" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/isibisidotin/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
