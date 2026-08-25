import { Projects } from "./components/Projects"
import { projects } from "./data/projects"

function App() {
    return (
        <>
            <header>
                <h1>Lucas Vinicius</h1>
                <p>Web Developer</p>
                <p>Building and evolving commercial web applications and SaaS products since 2009</p>
                <p>
                    <small>Available for freelance projects and full-time opportunities.</small>
                </p>
                <nav aria-label="Contact and Profiles">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/lksvn/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/lksvn" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://instagram.com/luwske" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="mailto:lksvn@outlook.com?subject=Hello There!">Email</a></li>
                        <li><a href="/Lucas_Vinicius_Web_Developer.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>I'm a <strong>Web Developer</strong> based in <strong>Brazil</strong>, building and evolving <strong>commercial web applications</strong> and <strong>SaaS</strong> products since 2009.</p>
                    <p>My career started in <strong>Graphic Design</strong> and <strong>Web Design</strong> before naturally evolving into <strong>front-end</strong> development and later web application development. This multidisciplinary background allows me to bridge <strong>design</strong>, <strong>user experience</strong>, <strong>business requirements</strong>, and <strong>software development</strong>.</p>
                    <p>
                        Most recently, I spent nearly <strong>9 years</strong> at <a href="https://widigital.com.br?ref=lksvn" target="_blank" rel="noopener noreferrer">WI Digital</a>, contributing to the continuous evolution of a commercial <strong>SaaS platform</strong>.
                        My work included building <strong>responsive user interfaces</strong>, developing <strong>REST APIs</strong>, implementing <strong>business rules</strong>, integrating <strong>external services</strong>, and improving the product over time.
                    </p>
                </section>
                <section>
                    <h2>What I Do</h2>
                    <dl>
                        <dt>SaaS Products</dt>
                        <dd>Helping evolve long-lived commercial SaaS platforms</dd>
                        <dt>REST APIs</dt>
                        <dd>Connecting systems and business workflows</dd>
                        <dt>User Experience</dt>
                        <dd>Creating responsive interfaces focused on usability and simplicity</dd>
                        <dt>Continuous Learning</dt>
                        <dd>Modernizing my toolkit through real-world projects</dd>
                    </dl>
                    <p>Currently exploring: TypeScript &bull; React &bull; Next.js &bull; Vite</p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p>Over the years I've worked on websites, landing pages, interfaces, branding projects and SaaS-related solutions.</p>
                    <p>Below are some public projects I can share.</p>
                    <Projects items={projects} />
                </section>
            </main>
            <footer>Code since 1990</footer>
        </>
    )
}

export default App
