import { IoIosPerson } from "react-icons/io";
import { GrUserExpert } from "react-icons/gr";
import { IoIosCloudy } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaCommentAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={`w-full h-full flex flex-col overflow-auto ${styles.scrollbarHide}`}
    >
      <div className="h-full w-full" style={{ opacity: 1 }}>
        <section
          id="about"
          className={`w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10 mb-20`}
        >
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div>
                <IoIosPerson className="w-6 h-6"></IoIosPerson>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                About Me
              </h2>
            </div>
            <div className="transition-opacity duration-1000 opacity-100 md:p-6 px-2 bg-gray-100 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 text-gray-700 px-6 border-r-[1px] border-r-gray-200 flex items-center relative">
                  <div className="py-6 relative z-10">
                    <h2 className="font-normal md:font-medium mb-4 text-gray-900 text-2xl flex items-center">
                      Hello I&apos;m Samuel Ogunti
                    </h2>
                    <p className="text-base leading-6 text-gray-700">
                      <span className="font-bold">
                        Senior Cloud Infrastructure Engineer | SENIOR CLOUD
                        ENGINEER | Senior Security Engineer
                      </span>
                      <span> </span> <br></br>
                      Experienced Senior Cloud Engineer and Cybersecurity Expert
                      with over 7 years of proven track record in delivering
                      secure, scalable, and compliant IT solutions. Proficient
                      in cloud engineering, cybersecurity, and risk management,
                      specializing in government-regulated environments. Possess
                      a deep understanding of cloud security frameworks (FISMA,
                      NIST) and best practices, with expertise in implementing
                      Zero Trust architectures and IAM frameworks within AWS and
                      Google Cloud platforms. Certified in CompTIA Security+,
                      AWS Certified Security Specialty, AWS Certified Solutions
                      Architect – Professional, and Certificate of Cloud
                      Security Knowledge (CCSK).
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <div className="flex flex-row gap-2 items-center">
                        <MdOutlineWork />
                        <span className="font-semibold text-gray-900">
                          Driven by a Relentless Pursuit of Cybersecurity
                          Excellence.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex flex-row gap-2 items-center">
                        <ImLocation className="w-6 h-6"></ImLocation>
                        <span className="font-semibold text-gray-900">
                          Washington DC-Baltimore Area
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="fade-in  flex items-center space-x-2 md:space-x-4 mb-6">
              <div>
                <GrUserExpert className="w-6 h-6"></GrUserExpert>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Technical Expertise
              </h2>
            </div>
            <div className="fade-in show grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 rounded-2xl shadow-lg">
              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <IoIosCloudy className="w-6 h-6"></IoIosCloudy>
                  </div>
                  <h3 className="  md:text-xl sm:text-lg font-semibold">
                    AWS Cloud Infrastructure Expertise
                  </h3>
                </div>
                <p>
                  As an AWS Cloud Infrastructure Architect, I possess a deep
                  understanding of the platform and its services. I have a
                  proven track record of designing, implementing, and managing
                  scalable, reliable, and secure cloud solutions. My expertise
                  spans across key areas, including:
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Storage: S3 for object storage, RDS for relational
                      databases, and DynamoDB for NoSQL databases.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Compute: Lambda for serverless functions and ECS for
                      container orchestration.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Integration: API Gateway for creating and managing APIs.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Security: IAM for identity and access management, KMS for
                      key management, and SNS/SQS for messaging.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <SiSpringsecurity className="w-6 h-6"></SiSpringsecurity>
                  </div>
                  <h3 className=" md:text-xl sm:text-lg font-semibold">
                    Infrastructure as Code (CloudFormation){" "}
                  </h3>
                </div>
                <p>
                  I am proficient in using Infrastructure as Code (IaC) tools,
                  specifically CloudFormation, to automate the provisioning,
                  configuration, and management of cloud infrastructure. My
                  expertise includes:
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Template Creation: Designing and writing CloudFormation
                      templates to define and deploy cloud resources.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Version Control: Integrating IaC templates with version
                      control systems like Git to ensure code management and
                      collaboration.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Deployment Automation: Using IaC to automate the
                      deployment of cloud environments, reducing manual errors
                      and improving efficiency.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Configuration Management: Applying IaC to manage and
                      maintain the desired state of cloud resources.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Continuous Integration/Continuous Delivery (CI/CD):
                      Integrating IaC into CI/CD pipelines to automate
                      infrastructure provisioning and updates.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <MdManageAccounts className="w-6 h-6"></MdManageAccounts>
                  </div>
                  <h3 className="md:text-xl sm:text-lg font-semibold">
                    Continuous Integration and Deployment (CI/CD) Specialist
                  </h3>
                </div>
                <p>
                  I possess a deep understanding of CI/CD principles and best
                  practices. I am skilled in:
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Version Control: Utilizing Git or other version control
                      systems to manage code changes.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Build Automation: Automating the build process using tools
                      like Jenkins, GitLab CI/CD, or CircleCI.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Testing: Integrating automated testing frameworks (unit,
                      integration, and end-to-end) into the CI/CD pipeline.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Deployment Automation: Deploying applications to various
                      environments (development, testing, production) using
                      automated deployment tools.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <FaChalkboardTeacher className="w-6 h-6"></FaChalkboardTeacher>
                  </div>
                  <h3 className="md:text-xl sm:text-lg font-semibold">
                    API Development and Database Integration
                  </h3>
                </div>

                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      API Design and Development: Proficient in creating RESTful
                      and GraphQL APIs using modern programming languages and
                      frameworks.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Database Integration: Skilled in connecting APIs to
                      various database systems (relational and NoSQL) for
                      efficient data retrieval and storage.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Data Modeling: Experienced in designing optimized data
                      structures and schemas to ensure API performance and
                      scalability.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      API Testing and Documentation: Committed to thorough API
                      testing and comprehensive documentation to enhance
                      usability and maintainability.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      API Security: Focused on implementing robust security
                      measures to protect APIs from vulnerabilities and
                      unauthorized access.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <FaChalkboardTeacher className="w-6 h-6"></FaChalkboardTeacher>
                  </div>
                  <h3 className="md:text-xl sm:text-lg font-semibold">
                    Monitoring and Observability Expertise
                  </h3>
                </div>

                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Proactive Problem Detection: Implemented robust monitoring
                      solutions to proactively identify and address performance
                      issues, anomalies, and system failures.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Data-Driven Insights: Leveraged observability tools to
                      gain deep insights into application behavior, identify
                      root causes of problems, and optimize performance.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Scalable Monitoring Infrastructure: Designed and
                      implemented scalable monitoring systems capable of
                      handling high-volume workloads and complex environments.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Alerting and Notification: Configured effective alerting
                      mechanisms to promptly notify stakeholders of critical
                      issues and facilitate timely response.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Performance Optimization: Utilized monitoring data to
                      identify bottlenecks, optimize resource utilization, and
                      improve overall system performance.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <FaChalkboardTeacher className="w-6 h-6"></FaChalkboardTeacher>
                  </div>
                  <h3 className="md:text-xl sm:text-lg font-semibold">
                    Cross-functional Team Collaboration
                  </h3>
                </div>

                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-gray-600">
                    <span className="">
                      Proven ability to collaborate effectively with colleagues
                      from diverse backgrounds and disciplines.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Strong communication and interpersonal skills to foster
                      productive teamwork and build consensus.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Experience in facilitating cross-functional meetings and
                      workshops to drive project outcomes.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Ability to navigate complex organizational structures and
                      build relationships with stakeholders across different
                      departments.
                    </span>
                  </li>
                  <li className="text-gray-600">
                    <span className="">
                      Demonstrated success in working collaboratively to achieve
                      shared goals and overcome challenges.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white text-primary rounded-lg shadow-md transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <FaChalkboardTeacher className="w-6 h-6"></FaChalkboardTeacher>
                  </div>
                  <h3 className="md:text-xl sm:text-lg font-semibold">
                    DevSecOps and Agile Methodologies
                  </h3>
                </div>

                <p>
                  Experienced in implementing DevSecOps practices to integrate
                  security into the software development lifecycle, ensuring
                  secure and efficient delivery. Proficient in Agile
                  methodologies, such as Scrum and Kanban, for collaborative
                  project management and iterative development. Skilled in using
                  tools like Jira and Git for project tracking and version
                  control. Demonstrated ability to foster a culture of
                  collaboration and continuous improvement within development
                  teams.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0">
                <GrCertificate className="w-6 h-6"></GrCertificate>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Certifications
              </h2>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 opacity-100">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Academy Graduate
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      May 02, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/f08f7ecf-797b-4a9f-a195-f6353660b63f"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Partner: Technical Accredited
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      May 13, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/fc58be36-6116-47a2-86da-f07bf36f1fcb"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Partner: Accreditation (Business)
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      May 13, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/fe583224-1633-4d00-b1db-705c6eb3e902"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      IDPro Member
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      August 31, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/501a4707-9080-4dba-8c7f-6c7e07b7edf3"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Solutions Architect – Associate
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      April 11, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/8057788c-4897-4c64-9e18-abd4e91a4c6c"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Cloud Practitioner
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      February 16, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/af53f67e-8c95-41c4-afcd-1ee76369d112"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Solutions Architect – Professional
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      October 31, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/4c7cda38-751c-4bdb-ab80-68ae71caedc7"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Cloud Practitioner
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      February 16, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/af53f67e-8c95-41c4-afcd-1ee76369d112"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Solutions Architect – Professional
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      October 31, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/4c7cda38-751c-4bdb-ab80-68ae71caedc7"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Solutions Architect – Professional
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      October 31, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/4c7cda38-751c-4bdb-ab80-68ae71caedc7"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Partner: Cloud Economics Essentials
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      February 13, 2022
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/66ba9c8d-0ddc-4e2f-9eab-baf27c53b712"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Tech U Graduate
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      June 25, 2021
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/682bf779-6b31-4bf6-ad51-3a1bdbaca648"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AWS Certified Database – Specialty
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      July 31, 2022
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/6c15d755-e1e7-4173-aab6-2ce0760c3399"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      CyberOps Associate
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      April 18, 2023
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/9e56ec8f-6611-41c3-8c28-36d4f9888f6f"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      CompTIA Security+ ce Certification
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      September 25, 2023
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/f76e7198-765a-423c-af7c-8aa912e7ae53"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Developing Intercultural Competence for Future Business
                      Leaders
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      November 06, 2023
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/3d262d79-9828-4581-b7da-4b4ca7ad5a9c"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Certificate of Cloud Security Knowledge v.4
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      April 30, 2024
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/45029b29-d4b5-48db-aaf0-2e06802eba59"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex flex-col flex-grow mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Champion - Authorized Instructor
                    </h4>
                    <span className="text-sm text-gray-500 block mt-1">
                      April 29, 2022
                    </span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://www.credly.com/badges/6de07ec0-f5bd-4d64-85f0-fe51c2fcfe99"
                      className="py-2 px-4 bg-gray-200 bg-opacity-50 text-gray-800 font-semibold border border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="fade-in show flex items-center space-x-2 md:space-x-4 mb-6">
              <div className="flex-shrink-0">
                <FaCommentAlt className="w-6 h-6"></FaCommentAlt>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Recommendations
              </h2>
            </div>
            <div className="fade-in show p-6 bg-gray-100 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <IoIosPerson className="w-6 h-6"></IoIosPerson>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Fola Adenola
                      </h4>
                      <p className="text-sm text-gray-500">Data Engineer</p>
                    </div>
                  </div>
                  <p className="text-primary text-lg italic">
                    Samuel Ogunti consistently demonstrated a deep understanding
                    of information security principles and practices. They were
                    instrumental in developing and implementing comprehensive
                    security policies, procedures, and standards that
                    effectively protected our organizations sensitive data and
                    systems.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <IoIosPerson className="w-6 h-6"></IoIosPerson>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Seun Rabiu
                      </h4>
                      <p className="text-sm text-gray-500">Project Manager</p>
                    </div>
                  </div>
                  <p className="text-primary text-lg italic">
                    Samuel Ogunti proved to be a highly effective leader and
                    team player. He was able to build strong relationships with
                    colleagues across the organization, fostering a culture of
                    security awareness and collaboration. His ability to
                    communicate complex technical concepts to non-technical
                    stakeholders was exceptional, ensuring that everyone
                    understood the importance of cybersecurity and their role in
                    protecting our organization.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-700 ease-out transform translate-y-0 opacity-100">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <IoIosPerson className="w-6 h-6"></IoIosPerson>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Camelia Afolabi
                      </h4>
                      <p className="text-sm text-gray-500">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-primary text-lg italic">
                    Samuel Ogunti provided exceptional guidance on AWS cloud
                    services. His calm and collected teaching style made the
                    learning process smooth and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
// Hero.propTypes = {
//   opacity: PropTypes.string.isRequired,

// };

export default Hero;
