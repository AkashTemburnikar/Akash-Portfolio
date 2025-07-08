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

            {/* SKILLS */}
            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Settings2 size={22} />
                    <h2>SKILLS</h2>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                    <li>Programming Languages & Frameworks: C#, Python, T-SQL, PowerShell, .NET Core, ASP.NET Core (Web API), ASP.NET MVC, Entity Framework Core, LINQ, JavaScript, ReactJS</li>
                    <li>Cloud Platform: Microsoft Azure (App Service, API Management, Key Vault, Redis, Service Bus, Web Jobs, Storage Accounts, Azure Functions, Azure Active Directory, Application Insights)</li>
                    <li>Infrastructure & DevOps: Azure DevOps (YAML Pipelines), Terraform, Helm, GitHub Actions, Git</li>
                    <li>Testing & Quality Assurance: NUnit, Moq, SpecFlow, k6, SonarQube, Checkmarx</li>
                    <li>Database Technologies: MS SQL Server</li>
                    <li>Security & Identity: JWT, RBAC, MFA, Okta</li>
                    <li>Containerization & Orchestration: Docker, Kubernetes (AKS)</li>
                    <li>Architecture & Design Patterns: Microservices, Clean Architecture, Domain-Driven Design, Event Driven Architecture</li>
                    <li>Tools & IDEs: Visual Studio, JetBrains Rider, VS Code</li>
                </ul>
            </section>

            {/* EXPERIENCE */}
            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Briefcase size={22} />
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="space-y-6 text-sm leading-relaxed">
                    <div>
                        <p className="font-semibold">General Motors Financial – Irving, Texas <span className="float-right text-gray-500">July 2021 – Present</span></p>
                        <p className="italic text-gray-700">Software Development Engineer</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Supported modernization of a legacy platform into a cloud-native microservices architecture on Azure Kubernetes Service (AKS).</li>
                            <li>Contributed to event-driven .NET Core microservices using Azure Service Bus Queues, enabling scalable, asynchronous lead ingestion and processing.</li>
                            <li>Developed an Azure Function that automated recall notifications based on vehicle VINs, helping ensure timely outreach within the lead management system.</li>
                            <li>Applied Clean Architecture and Domain-Driven Design (DDD) to ensure long-term maintainability and extensibility.</li>
                            <li>Managed infrastructure provisioning, secret storage, monitoring, and CI/CD using Terraform, Azure DevOps, Key Vault, and Application Insights.</li>
                            <li>Conducted code reviews, led technical discussions, and participated in sprint planning to uphold engineering standards and mentor junior team members.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">Kalderos – Chicago, Illinois <span className="float-right text-gray-500">Feb 2021 – May 2021</span></p>
                        <p className="italic text-gray-700">Software Engineer</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed Python workflows for transforming and validating healthcare rebate data and loading it into Snowflake to support downstream analytics and reporting.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">Medpace Reference Laboratories – Cincinnati, OH <span className="float-right text-gray-500">Jun 2020 – Jan 2021</span></p>
                        <p className="italic text-gray-700">Software Engineer</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Contributed to lab data systems used in clinical trials as part of Master’s Capstone.</li>
                            <li>Developed internal lab management modules using ASP.NET Web Forms and SQL Server aligned with business requirements.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">ProcessMAP (now Ideagen EHS) – Hyderabad, India <span className="float-right text-gray-500">Aug 2016 – Jul 2019</span></p>
                        <p className="italic text-gray-700">Software Engineer</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed features using ASP.NET MVC, Web API, and Entity Framework for enterprise EHS platforms.</li>
                            <li>Migrated legacy Classic ASP apps to ReactJS + Redux, increasing usability and adoption by 50%.</li>
                            <li>Refactored stored procedures and dynamic SQL queries to enhance database performance.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* EDUCATION */}
            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <GraduationCap size={22} />
                    <h2>EDUCATION</h2>
                </div>
                <ul className="text-sm space-y-2">
                    <li>
                        <span className="font-semibold">University of Cincinnati – Cincinnati, OH</span>
                        <div className="text-gray-700">Master of Engineering in Computer Science (Aug 2019 – Dec 2020)</div>
                    </li>
                    <li>
                        <span className="font-semibold">Jawaharlal Nehru Technological University – Hyderabad, India</span>
                        <div className="text-gray-700">Bachelor of Technology in Computer Science and Engineering (Oct 2012 – Apr 2016)</div>
                    </li>
                </ul>
            </section>

            {/* CERTIFICATES */}
            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <Award size={22} />
                    <h2>Certificates</h2>
                </div>
                <ul className="list-disc list-inside text-sm">
                    <li>Microsoft Certified: Azure Fundamentals (Credential ID: I314-5913 · June 2022)</li>
                </ul>
            </section>

            {/* PROJECTS */}
            <section>
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-purple-700">
                    <FolderKanban size={22} />
                    <h2>Projects</h2>
                </div>
                <ul className="list-disc list-inside text-sm">
                    <li>My Portfolio (React SPA): Built with ReactJS and deployed on GitHub Pages — <a className="text-blue-600 underline" href="https://akashtemburnikar.github.io/Akash-Portfolio/">View Live</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Resume;