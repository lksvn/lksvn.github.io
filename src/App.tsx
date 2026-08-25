import { Projects } from "./components/Projects"
import { projects } from "./data/projects"

function App() {
    return (
        <>
            <header id="top">
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
                        <li><a href="/now/">Now</a></li>
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
                    <h2>Past Experiences</h2>
                    <article>
                        <h3>Freelancing</h3>
                        <p>Web Developer (Part-time)</p>
                        <p><time dateTime="2009">2009</time>{' – Present'}</p>
                    </article>
                    <article>
                        <h3>WI Digital</h3>
                        <p>Web Developer</p>
                        <p>
                            <time dateTime="2017-07">July 2017</time>{' – '}<time dateTime="2026-06">June 2026</time>
                        </p>
                        <ul>
                            <li>Contributed to the evolution of the platform for nearly nine years.</li>
                            <li>Rebuilt most of the application's responsive user interface.</li>
                            <li>Developed front-end and back-end features.</li>
                            <li>Maintained REST APIs and customer integrations.</li>
                            <li>Worked with Brazilian payment gateways.</li>
                            <li>Implemented business rules for products, commissions and payments.</li>
                            <li>Served as the team's primary reference for front-end implementation and UI development.</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Fazul Comunicação</h3>
                        <p>Web Designer / PSD to HTML</p>
                        <p>
                            <time dateTime="2015-08">August 2015</time>{' – '}<time dateTime="2015-10">October 2015</time>
                        </p>
                    </article>
                    <article>
                        <h3>Takestore</h3>
                        <p>Web Designer / PSD to HTML</p>
                        <p>
                            <time dateTime="2014-08">August 2014</time>{' – '}<time dateTime="2014-11">November 2014</time>
                        </p>
                    </article>
                    <article>
                        <h3>Agência EP2</h3>
                        <p>Web Developer</p>
                        <p>
                            <time dateTime="2013-01">January 2013</time>{' – '}<time dateTime="2013-10">October 2013</time>
                        </p>
                    </article>
                    <article>
                        <h3>MQV Propaganda</h3>
                        <p>Web Designer</p>
                        <p>
                            <time dateTime="2011-10">October 2011</time>{' – '}<time dateTime="2011-12">December 2011</time>
                        </p>
                    </article>
                    <article>
                        <h3>DHG Web Agência Interativa</h3>
                        <p>Graphic Designer / Web Designer</p>
                        <p><time dateTime="2011-01">January 2011</time>{' – '}<time dateTime="2011-09">September 2011</time></p>
                        <p><time dateTime="2012-02">February 2012</time>{' – '}<time dateTime="2013-01">January 2013</time></p>
                    </article>
                    <article>
                        <h3>StudioBR Desenvolvimentos</h3>
                        <p>Graphic Designer / Web Designer</p>
                        <p>
                            <time dateTime="2009-03">March 2009</time>{' – '}<time dateTime="2010-12">December 2010</time>
                        </p>
                    </article>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p>Over the years I've worked on websites, landing pages, interfaces, branding projects and SaaS-related solutions.</p>
                    <p>Below are some public projects I can share.</p>
                    <Projects items={projects} />
                </section>
                <section>
                    <h2>Engineering Principles</h2>
                    <p>I believe good software evolves over time.</p>
                    <p>I prefer maintainable solutions over unnecessary complexity, simple interfaces over visual overload, and incremental improvements over large rewrites.</p>
                    <p>My goal is to build software that is easy to understand, easy to maintain, and enjoyable to use.</p>
                </section>
                <section>
                    <h2>Uses</h2>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>PHP</li>
                        <li>Git</li>
                        <li>Tailwind CSS</li>
                        <li>Vue.js</li>
                        <li>Python</li>
                        <li>Windows</li>
                        <li>Linux</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vite</li>
                    </ul>
                </section>
                <section>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>Magic: The Gathering</li>
                        <li>ARPGs: Diablo IV, Path of Exile 1 & 2 and Last Epoch</li>
                        <li>Listening to EDM</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>Code by coffee and cat love — since 1990.</p>
                <p>
                    Hosted by <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">GitHub Pages</a> and served through <a href="https://www.cloudflare.com/" rel="noopener noreferrer" target="_blank">Cloudflare</a>
                </p>
                <p>
                    <small><em>Simple site for a simple showcase</em></small>
                </p>
                <a href="#top">Back to top</a>
            </footer>
        </>
    )
}

export default App
