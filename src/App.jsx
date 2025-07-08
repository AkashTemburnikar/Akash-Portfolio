function App() {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <header className="bg-purple-100 py-12 text-center">
                <h1 className="text-4xl font-bold">Akashappa Temburnikar (Akash)</h1>
                <p className="mt-2 text-lg text-gray-700">
                    Software Engineer • Cloud-Native .NET Developer • Azure & Kubernetes
                </p>
                <p className="mt-1">📧 <a href="mailto:akashappa.te@gmail.com" className="text-purple-600">akashappa.te@gmail.com</a></p>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
                <section>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-3">Skills</h2>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li><strong>Languages & Frameworks:</strong> C#, Python, T-SQL, PowerShell, .NET Core, ASP.NET Core (Web API), MVC, EF Core, LINQ, JavaScript, ReactJS</li>
                        <li><strong>Cloud:</strong> Azure (App Service, APIM, Key Vault, Redis, Service Bus, Web Jobs, Storage, Functions, AAD, App Insights)</li>
                        <li><strong>Infrastructure/DevOps:</strong> Azure DevOps (YAML), Terraform, Helm, GitHub Actions, Git</li>
                        <li><strong>Testing:</strong> NUnit, Moq, SpecFlow, k6, SonarQube, Checkmarx</li>
                        <li><strong>Database:</strong> MS SQL Server</li>
                        <li><strong>Security:</strong> JWT, RBAC, MFA, Okta</li>
                        <li><strong>Containers:</strong> Docker, Kubernetes (AKS)</li>
                        <li><strong>Architecture:</strong> Microservices, Clean Architecture, DDD, Event-Driven Architecture</li>
                        <li><strong>Tools:</strong> VS, Rider, VS Code</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-3">Experience</h2>

                    <div className="space-y-5 text-sm">
                        <div>
                            <h3 className="font-bold">General Motors Financial – Irving, TX (Jul 2021 – Present)</h3>
                            <p><strong>Software Development Engineer</strong></p>
                            <p className="mt-1 underline">LeadHub Modernization</p>
                            <ul className="list-disc pl-6">
                                <li>Modernized legacy platform to cloud-native microservices on AKS</li>
                                <li>Built event-driven services using Azure Service Bus Queues</li>
                                <li>Automated recall notifications with Azure Functions</li>
                                <li>Used DDD, Clean Architecture, Terraform, Key Vault</li>
                            </ul>
                            <p className="mt-2 underline">Shop Click Drive</p>
                            <ul className="list-disc pl-6">
                                <li>Built secure .NET Core APIs with Okta + Redis + APIM</li>
                                <li>Automated infrastructure and CI/CD with Terraform + Azure DevOps</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">Kalderos – Chicago, IL (Feb 2021 – May 2021)</h3>
                            <ul className="list-disc pl-6">
                                <li>Built Python workflows to transform healthcare rebate data into Snowflake</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">Medpace Labs – Cincinnati, OH (Jun 2020 – Jan 2021)</h3>
                            <ul className="list-disc pl-6">
                                <li>Developed lab management tools in ASP.NET + SQL Server</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">ProcessMAP (Ideagen EHS) – Hyderabad, India (Aug 2016 – Jul 2019)</h3>
                            <ul className="list-disc pl-6">
                                <li>Built ASP.NET MVC apps with EF + Web API</li>
                                <li>Migrated Classic ASP to React + Redux, increasing adoption 50%</li>
                                <li>Optimized dynamic SQL/stored procedures</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-3">Education</h2>
                    <ul className="list-disc pl-6 text-sm">
                        <li>M.Eng Computer Science – University of Cincinnati (2019–2020)</li>
                        <li>B.Tech CSE – JNTU Hyderabad (2012–2016)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-3">Certificates</h2>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Microsoft Certified: Azure Fundamentals (June 2022, ID: I314-5913)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-3">Projects</h2>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Built and deployed React-based portfolio to GitHub Pages</li>
                        <li><a href="https://akashtemburnikar.github.io/Akash-Portfolio/" className="text-purple-600">Visit: Akash-MyPortfolio</a></li>
                    </ul>
                </section>
            </main>

            <footer className="text-center text-sm text-gray-400 py-4">
                © {new Date().getFullYear()} Akashappa Temburnikar
            </footer>
        </div>
    );
}

export default App;