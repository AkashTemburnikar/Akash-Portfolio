import {
    Mail,
    Settings2,
    Briefcase,
    GraduationCap,
    Award,
    FolderKanban,
} from "lucide-react";
function Resume() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 font-sans text-gray-900 space-y-10">
            <div>
                <h1 className="text-3xl font-bold">Akashappa Temburnikar (Akash)</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Mail size={18} />
                    <span>akashappa.te@gmail.com</span>
                </div>
            </div>

            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Settings2 size={22} />
                    <h2>SKILLS</h2>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
• Programming Languages & Frameworks: C#, Python, T-SQL, PowerShell, .NET Core, ASP.NET Core (Web API), ASP.NET MVC, Entity Framework Core, LINQ, JavaScript, ReactJS
• Cloud Platform: Microsoft Azure (App Service, API Management, Key Vault, Redis, Service Bus, Web Jobs, Storage Accounts, Azure Functions, Azure Active Directory, Application Insights).
• Infrastructure & DevOps: Azure DevOps (YAML Pipelines), Terraform, Helm, GitHub Actions, Git
• Testing & Quality Assurance: NUnit, Moq, SpecFlow, k6, SonarQube, Checkmarx
• Database Technologies: MS SQL Server
• Security & Identity: JWT, RBAC, MFA, Okta
• Containerization & Orchestration: Docker, Kubernetes (AKS)
• Architecture & Design Patterns: Microservices, Clean Architecture, Domain-Driven Design, Event Driven Architecture
• Tools & IDEs: Visual Studio, JetBrains Rider, VS Code
        </pre>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Briefcase size={22} />
                    <h2>EXPERIENCE</h2>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
General Motors Financial – Irving, Texas       July 2021 – Present
Software Development Engineer 

LeadHub Modernization
• Supported modernization of a legacy platform into a cloud-native microservices architecture on Azure Kubernetes Service (AKS).
• Contributed to event-driven .NET Core microservices using Azure Service Bus Queues, enabling scalable, asynchronous lead ingestion and processing.
• Developed an Azure Function that automated recall notifications based on vehicle VINs, helping ensure timely outreach within the lead management system.
• Applied Clean Architecture and Domain-Driven Design (DDD) to ensure long-term maintainability and extensibility.
• Managed infrastructure provisioning, secret storage, monitoring, and CI/CD using Terraform, Azure DevOps, Key Vault, and Application Insights.
• Conducted code reviews, led technical discussions, and participated in sprint planning to uphold engineering standards and mentor junior team members.

Shop Click Drive
• Built a .NET Core API integration platform hosted on Azure App Services, enabling secure and scalable data exchange between GM and GM Financial systems.
• Delivered high-performance APIs secured through Azure API Management (APIM) and Okta-based authentication.
• Optimized system responsiveness with Azure Redis Cache and enabled deep diagnostics through Application Insights.
• Automated infrastructure and deployment pipelines using Terraform and Azure DevOps.

Kalderos – Chicago, Illinois       February 2021 –May 2021
Software Engineer
• Developed Python workflows for transforming and validating healthcare rebate data and loading it into Snowflake to support downstream analytics and reporting.

Medpace Reference Laboratories – Cincinnati, Ohio       June 2020 – January 2021
Software Engineer
• Worked full-time as part of the Master’s Capstone requirement, contributing to lab data systems used in clinical trials.
• Developed internal lab management modules using ASP.NET Web Forms and SQL Server, aligned with business and UI requirements for clinical trial data workflows.

ProcessMAP (now Ideagen EHS) – Hyderabad, India       August 2016 – July 2019
Software Engineer
• Designed and developed features in ASP.NET MVC, Web API, and Entity Framework to support enterprise EHS platforms.  
• Migrated legacy Classic ASP front-end applications to ReactJS with Redux, increasing usability and adoption by 50%. 
• Refactored stored procedures and dynamic SQL queries to enhance database performance and reduce execution
        </pre>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Award size={22} />
                    <h2>EDUCATION</h2>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
University of Cincinnati – Cincinnati, OH       August 2019 – December 2020
• Master of Engineering in Computer Science.

Jawaharlal Nehru Technological University – Hyderabad, India       October 2012 – April 2016
• Bachelor of Technology in Computer Science and Engineering.
        </pre>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Certificate size={22} />
                    <h2>Certificates</h2>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
Microsoft Certified: Azure Fundamentals
• Issued by Microsoft · Credential ID: I314-5913 · June 2022
        </pre>
            </section>

            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <FolderKanban size={22} />
                    <h2>Projects</h2>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
My Portfolio (React Single Page App)
• Built a personal portfolio with ReactJS and deployed it on GitHub Pages.
• Live Link: https://akashtemburnikar.github.io/Akash-Portfolio/
        </pre>
            </section>
        </div>
    );
}

export default Resume;