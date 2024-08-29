import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.svg";
import isbisilogo from "../../../assets/images/logo/isbilogo.png";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={isbisilogo} alt="Logo" className="light-version-logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
