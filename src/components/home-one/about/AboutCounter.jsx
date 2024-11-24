import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={40} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Years of experience</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={14} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Clients</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Client satisfaction rate</p>
			</div>
		</div>
	);
}

export default AboutCounter;
