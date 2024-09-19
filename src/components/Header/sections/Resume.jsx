import { GrUserExpert } from "react-icons/gr";
import { FaCertificate } from "react-icons/fa6";
import styles from "./Resume.module.css";
const Resume = () => {
  return (
    <div
      className={`w-full h-full flex flex-col overflow-auto ${styles.scrollbarHide}`}
    >
      <div className="h-full w-full" style={{ opacity: 1 }}>
        <section
          id="resume"
          className={`w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10 mb-20 
           `}
        >
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0">
                <GrUserExpert className="w-6 h-6"></GrUserExpert>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Experience
              </h2>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Amazon Web Services
                </h3>
                <p className="text-sm text-gray-700">
                  Solutions Engineer | Security Trainer December 2020 – May 2024
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Designed and developed 15+ cloud-based solutions in AWS,
                      utilizing services such as EC2, S3, RDS, and Lambda to
                      ensure high availability and fault tolerance, directly
                      contributing to significant business transformations.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Translated business requirements into 8 cloud solutions,
                      using AWS services like CloudFormation, EC2, and IAM,
                      resulting in a 25% reduction in development time and a 30%
                      increase in operational efficiency.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Automated IAM features using AWS CloudFormation and AWS
                      Lambda, reducing manual oversight by 40% and improving
                      security operations efficiency by 35%.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Implemented proactive monitoring and observability using
                      AWS CloudWatch and Eventbridge, reducing system anomalies
                      by 20% and enhancing system scalability and flexibility by
                      25%.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Collaborated with cross-functional teams including
                      architecture, sales, and customer success, to ensure
                      seamless integration of solutions and customer
                      satisfaction.
                    </span>
                  </li>

                  <li className="text-gray-600">
                    <span className="">
                      Provided technical training and mentorship, enhancing team
                      capabilities and promoting cloud adoption.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Florida Safety Council
                </h3>
                <p className="text-sm text-gray-700">
                  Cloud Security Architect January 2019 - December 2020
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Led technical strategy sessions and designed a Zero Trust
                      architecture, utilizing AWS services like VPC, Security
                      Groups, and AWS Config to enhance security for
                      enterprise-scale systems and align with broader
                      transformation objectives.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Automated security operations and implemented monitoring
                      solutions using AWS CloudWatch and AWS Config, reducing
                      incident response times and improving overall system
                      reliability.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Provided expert advice on cloud security and risk
                      management to C-level executives, driving strategic
                      initiatives and enhancing organizational security posture.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Developed and presented technical solutions to
                      stakeholders, using AWS services like CloudFormation and
                      IAM, ensuring alignment with business goals and technical
                      feasibility.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Technical Account Manager
                </h3>
                <p className="text-sm text-gray-700">
                  Alorica, March 2018 - January 2019
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Maintained a 100% issue resolution rating, contributing to
                      a 23% growth in revenue by identifying and acting on
                      upsell opportunities.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Collaborated with cross-functional teams to improve
                      product quality, leading to higher customer satisfaction
                      and retention rates.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Conducted technical discovery and leveraged findings to
                      create, test, and document solution recommendations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Alorica</h3>
                <p className="text-sm text-gray-700">
                  Technical Account Manager March 2018 - January 2019
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Authored 10+ technical wikis read by over 20,000 visitors
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Collaborated on product development based on client
                      feedback, leading to improved product quality.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Created technical documentation and delivered training
                      sessions that increased client productivity by 20%.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Charter Communications
                </h3>
                <p className="text-sm text-gray-700">
                  Enterprise Technical Support Engineer July 2016 - March 2018
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Conducted training sessions for internal teams and
                      clients, reducing resolution time by 20% and improving
                      overall customer satisfaction by ensuring all stakeholders
                      were well-versed in security protocols and operational
                      procedures.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Enhanced the technical support knowledge base, increasing
                      support response efficiency and accuracy by over 80%
                      through the implementation of a comprehensive internal
                      documentation system and knowledge-sharing platform.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Collaborated on product development based on client
                      feedback, working closely with network and security teams
                      to develop and deploy solutions that addressed customer
                      needs and integrated seamlessly into existing systems.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Presented technical solutions to clients and internal
                      stakeholders, showcasing product capabilities and
                      fostering strong relationships by effectively
                      communicating the benefits and functionalities of new
                      security and network operations tools.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0">
                <FaCertificate className="w-6 h-6"></FaCertificate>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Industry Certifications
              </h2>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow-lg">
              <p className="mt-2 mb-4 text-gray-700 text-base leading-relaxed"></p>
              <div className="mt-2 space-y-2">
                <div className="bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
                  <strong className="text-primary">
                    {" "}
                    AWS Certified Solutions Architect – Professional
                  </strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
                  <strong className="text-primary">
                    AWS Certified Security Specialty
                  </strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
                  <strong className="text-primary">
                    Certificate of Cloud Security Knowledge (CCSK)
                  </strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
                  <strong className="text-primary">CompTIA Security+</strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
                  <strong className="text-primary">
                    ISC2 Certified in Cybersecurity
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Education
              </h2>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 fade-in opacity-100">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Master of Business Administration in Cybersecurity Risk
                      Management
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Florida International University, Miami, FL
                    </p>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li className="text-gray-600">
                        <span className="">
                          Relevant Coursework: Advanced Cybersecurity
                          Strategies, Risk Management Frameworks, IT Governance
                        </span>
                      </li>

                      <li className="text-gray-600">
                        <span className="">
                          Capstone Project: Developed a comprehensive risk
                          management strategy for a simulated federal agency,
                          aligning with FISMA and NIST standards, which was
                          commended for its innovative approach and practical
                          applicability.
                        </span>
                      </li>

                      <li className="text-gray-600">
                        <span className="">
                          Leadership Role: Served as the president of the
                          Cybersecurity Club, organizing guest lectures,
                          workshops, and career networking events to enhance the
                          professional development of members.
                        </span>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Bachelor of Science in Information Systems Technology &
                      Cybersecurity
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Seminole State College of Florida, Sanford, FL
                    </p>

                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li className="text-gray-600">
                        <span className=" font-medium">
                          Honors: Graduated Cum Laude; recipient of the Dean’s
                          Academic Excellence Award for outstanding academic
                          achievements and leadership in technology.
                        </span>
                      </li>

                      <li className="text-gray-600">
                        <span className="">
                          Projects: Led a team project designing a secure
                          network infrastructure for a small business, focusing
                          on intrusion detection systems and compliance with
                          PCI-DSS standards.
                        </span>
                      </li>

                      <li className="text-gray-600">
                        <span className="">
                          Extracurricular Activities: Active member of the
                          Information Systems Security Association (ISSA),
                          participating in competitions and security awareness
                          events.
                        </span>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                LEADERSHIP EXPERIENCE AND COMMUNITY INVOLVEMENT
              </h2>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 fade-in opacity-100">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Youth for Human Rights International
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">Role: Leader</p>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li className="text-gray-600">
                        <span className="font-medium">
                          Achievements: Led initiatives to educate over 500
                          youths on human rights principles, aligning
                          educational efforts with broader societal impact
                          goals.
                        </span>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Campus Vote Project
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Role: Coordinator
                    </p>

                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li className="text-gray-600">
                        <span className=" font-medium">
                          Impact: Engaged over 1,000 students in democratic
                          processes, fostering community involvement and
                          leadership among young voters.
                        </span>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      DC Jail Outreach Program
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Role: Volunteer Instructor
                    </p>

                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li className="text-gray-600">
                        <span className=" font-medium">
                          Initiative: Developed and led a training program for
                          inmates at the DC Jail, focusing on AWS Cloud
                          technology.
                        </span>
                      </li>

                      <li className="text-gray-600">
                        <span className=" font-medium">
                          Outcome: Successfully trained 30 inmates to pass the
                          AWS Certified Cloud Practitioner certification,
                          empowering them with skills for technological
                          engagement and improving their employment prospects
                          post-release.
                        </span>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
// Resume.propTypes = {
//   opacity: PropTypes.string.isRequired,
// };
export default Resume;
