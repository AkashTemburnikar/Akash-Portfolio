import './index.css';

function App() {
    return (
        <div className="font-sans text-gray-800">
            <nav className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-purple-700">Akash Temburnikar</h1>
                    <ul className="flex gap-4 text-sm sm:text-base">
                        <li><a href="#about" className="hover:text-purple-600">About</a></li>
                        <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
                        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <header className="bg-gradient-to-r from-purple-100 to-white py-20 text-center">
                <h2 className="text-3xl sm:text-5xl font-extrabold">Akashappa Temburnikar</h2>
                <p className="text-lg sm:text-xl mt-4 text-gray-600">
                    Software Engineer | Cloud & Backend Enthusiast
                </p>
            </header>

            <section id="about" className="max-w-4xl mx-auto px-4 py-10">
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p>
                    Skilled in C#, .NET Core, Azure, Kubernetes, ReactJS, and Python. Passionate about microservices, clean architecture, and DevOps.
                </p>
            </section>

            <section id="experience" className="max-w-4xl mx-auto px-4 py-10 bg-gray-50">
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <ul className="space-y-4">
                    <li><strong>General Motors Financial</strong> – Software Engineer (2021–Present)</li>
                    <li><strong>Kalderos</strong> – Software Engineer (2021)</li>
                    <li><strong>Medpace Labs</strong> – Software Engineer (2020–2021)</li>
                    <li><strong>ProcessMAP</strong> – Software Engineer (2016–2019)</li>
                </ul>
            </section>

            <section id="contact" className="max-w-4xl mx-auto px-4 py-10">
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <p>Email: <a href="mailto:akashappa.te@gmail.com" className="text-purple-600">akashappa.te@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/akashappa" target="_blank" rel="noopener noreferrer" className="text-purple-600">/in/akashappa</a></p>
            </section>

            <footer className="bg-white text-center py-4 mt-10 text-sm text-gray-500">
                © {new Date().getFullYear()} Akash Temburnikar
            </footer>
        </div>
    );
}

export default App;