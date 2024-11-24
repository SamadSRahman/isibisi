import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import BreadCrumb from "../common/Breadcrumb";
import WorkingApproach from "./WorkingApproach";
import mainImg from "../../assets/images/relavent/Technology.jpeg"

export default function Technology() {
  return (
    <>
      <BreadCrumb title="Technology" />
      <div className="section aximo-section-padding2 pb-0">
        <div className="container">
          <div className="aximo-service-details-wrap">
            <div className="aximo-service-details-thumb">
              <img src={mainImg} alt="Single img" />
            </div>
            <div className="row">
              <div className="col-lg-10">
                <div className="aximo-default-content">
                  <h2>
                    <span className="aximo-title-animation">
                      Technology
                      <span className="aximo-title-icon">
                        <img src={Star2Img} alt="star" />
                      </span>
                    </span>
                  </h2>
                  <p>
                    Stay ahead of the curve with our cutting-edge technology
                    solutions. We develop robust apps that enhance user
                    experience and harness the power of AI to produce dynamic,
                    personalized video content. Our tech-driven approach ensures
                    your brand is not just seen, but remembered.
                  </p>
                  {/* <p>
                  They are often used interchangeably, but they refer to
                  different aspects of the design and user interaction process.
                  Here's a brief overview of each:
                </p> */}
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>1/ Mobile App Development</h3>
          
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>2/ Website Development</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>3/ AI-Generated Videos</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>4/ Marketing Automation</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>5/ Internet of Things (IoT) Solutions</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>6/ Data Analytics & Insights </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>7/ Cloud Computing Services </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>8/ E-commerce Solutions</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>9/ Chatbots & Conversational AI </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>10/ Blockchain Creation </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>11/ Voice-Activated Experiences </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>12/ Content Management Systems (CMS) </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>13/ Gamification & Interactive Campaigns </h3>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <ul>
                <h3>1/ Mobile App Development</h3>
<h3>2/ Website Development</h3>
<h3>3/ AI-Generated Videos</h3>
<h3>4/ Marketing Automation</h3>
<h3>5/ Internet of Things (IoT) Solutions</h3>
<h3>6/ Data Analytics & Insights</h3>
<h3>7/ Cloud Computing Services</h3>
<h3>8/ Chatbots & Conversational AI</h3>
<h3>9/ Blockchain Creation</h3>
<h3>10/ Voice-Activated Experiences</h3>
<h3>11/ Content Management Systems (CMS)</h3>
<h3>12/ Gamification & Interactive Campaigns</h3>

                </ul>
              </div>
            </div>
            <div className="aximo-faq-wrap">
              {/* <WorkingApproach /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
