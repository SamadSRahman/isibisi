import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import BreadCrumb from "../common/Breadcrumb";
import WorkingApproach from "./WorkingApproach";
import mainImg from "../../assets/images/relavent/CMS.jpeg"

export default function ContentManagement() {
  return (
    <>
      <BreadCrumb title="Content Management Services" />
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
                   Content Management
                      <span className="aximo-title-icon">
                        <img src={Star2Img} alt="star" />
                      </span>
                    </span>
                 
                  Services
                  </h2>
                  <p>
                  Our data-driven strategies take the guesswork out of content marketing. We analyze performance metrics to optimize your content and ensure it delivers results. With our insights, your content strategy will be fine-tuned to achieve maximum impact and sustained success.
                  </p>
                  {/* <p>
                  They are often used interchangeably, but they refer to
                  different aspects of the design and user interaction process.
                  Here's a brief overview of each:
                </p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>1/ Content Creation & Curation:</h3>
                  <ul>
                    
                    Managing the creation and selection of high-quality content that aligns with your brand’s voice and objectives.
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>2/ Content Scheduling & Publishing:</h3>
                  <ul>
                   
                    Organizing and automating content distribution across multiple platforms to ensure consistent messaging.
                  
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>3/ Content Optimization:</h3>
                  <ul>
                   
                    Enhancing content for better visibility, engagement, and SEO performance.
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>4/ Content Versioning & Updates:</h3>
                  <ul>
                   
                    Maintaining and updating content to keep it relevant, accurate, and aligned with current trends.
                   
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>5/ Multichannel Content Distribution:</h3>
                  <ul>
                    
                    Coordinating content deployment across various channels such as social media, websites, email, and more.
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>6/ Content Collaboration & Workflow Management: </h3>
                  <ul>
                  
                    Streamlining collaboration between teams and managing the content production process from ideation to publication.
                   
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>7/ Content Performance Monitoring: </h3>
                  <ul>
                  
                    Tracking and analyzing how content performs across different platforms to make data-driven improvements.
                  
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>8/ Content Localization & Translation: </h3>
                 
                  Adapting content for different languages and regions to reach a global audience effectively.
                
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-user-interface">
                  <h3>9/ E-commerce Content Management: </h3>
                 
                    <li>
                    Managing and optimizing content for e-commerce platforms like Shopify, including product descriptions, images, and promotional materials
                    </li>
                 
                </div>
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

