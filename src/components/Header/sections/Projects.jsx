
import { RiLuggageDepositFill } from "react-icons/ri";
import styles from "./Projects.module.css"
const Projects = () => {
  return (
    
    <div
      className={`w-full h-full flex flex-col overflow-auto ${styles.scrollbarHide}`}
    >
      <div className="h-full w-full" style={{ opacity: 1 }}>
      <section
        id="projects"
        className={`w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10 mb-20  `} 
      >
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <div className="mb-6">
            <div className="transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
              <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <RiLuggageDepositFill className="w-6 h-6" ></RiLuggageDepositFill>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 mt-6">
            <div className="p-6 bg-white text-primary rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-700 ease-out transform translate-y-0 opacity-100 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Serverless Web Application
                </h3>
                <p className=" text-lg  font-light mb-2">
                  Developed a serverless web application using AWS Lambda, API
                  Gateway, and DynamoDB
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                  <span>
                  Lambda: Used AWS Lambda to create the backend logic,
                  enabling a serverless architecture.
                  </span>
                    
                  </li>
                  <li className="text-gray-600">
                  <span>
                    API Gateway: Set up API Gateway to expose RESTful APIs for
                    frontend interaction.
                    </span>
                  </li>
                  <li className="text-gray-600">
                  <span>
                    DynamoDB: Utilized DynamoDB for a scalable and flexible
                    NoSQL database solution.
                    </span>
                  </li>
                  <li className="text-gray-600">
                  <span>
                    S3 and CloudFront: Hosted the frontend static content on S3
                    and used CloudFront for content delivery to ensure low
                    latency and high transfer speeds.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="font-medium">
                      Outcome: Reduced operational overhead and improved
                      application scalability by leveraging serverless
                      components, resulting in a highly available and
                      cost-effective web application.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 mt-6">
            <div className="p-6 bg-white text-primary rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-700 ease-out transform translate-y-0 opacity-100 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Serverless Web Application
                </h3>
                <p className="text-lg  font-light mb-2">
                  Designed and implemented a disaster recovery solution using
                  AWS for critical business applications.
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    Lambda: Used AWS Lambda to create the backend logic,
                    enabling a serverless architecture.EC2 and RDS: Deployed
                    mirrored environments on EC2 instances and RDS databases for
                    primary and backup regions.
                  </li>
                  <li className="text-gray-600">
                    S3 and Glacier: Utilized S3 for regular data backups and
                    Glacier for long-term archival storage.
                  </li>
                  <li className="text-gray-600">
                    Route 53: Configured Route 53 for DNS failover to ensure
                    high availability and quick recovery during disasters.
                  </li>
                  <li className="text-gray-600">
                    CloudFormation: Automated the deployment and configuration
                    of recovery environments using CloudFormation templates.
                  </li>
                  <li className="text-gray-600">
                    <span className=" font-medium">
                      Outcome: Provided a robust disaster recovery plan,
                      ensuring business continuity and minimizing downtime
                      during unforeseen events.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    
  );
};
// Projects.propTypes = {
//   opacity: PropTypes.string.isRequired,
// };

export default Projects;
