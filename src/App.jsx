function App() {
    return (
        <div className="font-sans text-gray-800">
            <nav className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-purple-700">Akash Temburnikar</h1>
                    <ul className="flex gap-4 text-sm sm:text-base">
                        <li><a href="#about" className="hover:text-purple-600">About</a></li>
                        <li><a href="#resume" className="hover:text-purple-600">Resume</a></li>
                        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <header className="bg-gradient-to-r from-purple-100 to-white py-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold">Akashappa Temburnikar</h2>
                <p className="text-lg sm:text-xl mt-4 text-gray-600">
                    Software Engineer | Cloud & Backend Enthusiast
                </p>
            </header>

            <section id="about" className="max-w-4xl mx-auto px-4 py-10">
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p>
                    Experienced in .NET, ReactJS, Azure, Kubernetes, and DevOps with a passion for clean architecture and modern microservices.
                </p>
            </section>

            <section id="resume" className="max-w-5xl mx-auto px-4 py-10">
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Resume</h3>
                <p className="mb-2">✉️ Email: <a href="mailto:akashappa.te@gmail.com" className="text-purple-600">akashappa.te@gmail.com</a></p>

                <div className="mt-6">
                    <h4 className="font-semibold text-lg">Skills</h4>
                    <ul className="list-disc pl-6 text-sm mt-2">
                        <li>C#, .NET Core, ReactJS, Python, JavaScript, T-SQL</li>
                        <li>Azure (APIM, Service Bus, Functions, AAD, Redis, App Service)</li>
                        <li>Terraform, Docker, Kubernetes (AKS), Azure DevOps</li>
                        <li>JWT, RBAC, Okta, NUnit, Moq, k6, GitHub Actions</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h4 className="font-semibold text-lg">Experience</h4>
                    <p className="text-sm mt-2 font-semibold">General Motors Financial (2021–Present)</p>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Modernized legacy platform using Azure & AKS microservices</li>
                        <li>Built secure APIs with .NET Core, Okta, Redis, and APIM</li>
                        <li>Automated deployment with Terraform & Azure DevOps</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h4 className="font-semibold text-lg">Education</h4>
                    <ul className="list-disc pl-6 text-sm mt-2">
                        <li>M.Eng CS – University of Cincinnati (2019–2020)</li>
                        <li>B.Tech CSE – JNTU Hyderabad (2012–2016)</li>
                    </ul>
                </div>
            </section>

            <section id="contact" className="max-w-4xl mx-auto px-4 py-10">
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <p>Email: <a href="mailto:akashappa.te@gmail.com" className="text-purple-600">akashappa.te@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/akashappa" target="_blank" className="text-purple-600">/in/akashappa</a></p>
            </section>

            <footer className="bg-white text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} Akash Temburnikar
            </footer>
        </div>
    );
}

export default App;