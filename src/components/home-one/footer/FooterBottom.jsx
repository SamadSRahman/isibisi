import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
import isbisilogo from "../../../assets/images/logo/isbilogo.png";


function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={isbisilogo} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved.  </p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
