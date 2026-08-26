import { Projects } from "./components/Projects"
import { projects } from "./data/projects"

function App() {
    return (
        <>
            <header id="top" className="hero">
                <svg className="icon lg" aria-hidden="true"><use href="/icons.svg#squirrel" /></svg>
                <h1><strong>Lucas Vinicius</strong></h1>
                <p>Web Developer</p>
                <p>Building and evolving commercial web applications and SaaS products since 2009</p>
                <p><small>Available for freelance projects and full-time opportunities.</small></p>
                <nav aria-label="Contact and Profiles">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/lksvn/" target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#linkedin" /></svg> LinkedIn</a></li>
                        <li><a href="https://github.com/lksvn" target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#github" /></svg> GitHub</a></li>
                        <li><a href="https://instagram.com/luwske" target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#instagram" /></svg> Instagram</a></li>
                        <li><a href="mailto:lksvn@outlook.com?subject=Hello There!"><svg className="icon" aria-hidden="true"><use href="/icons.svg#email" /></svg> Email</a></li>
                        <li><a href="/Lucas_Vinicius_Web_Developer.pdf" target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#resume" /></svg> Resume</a></li>
                        <li><a href="/now/"><svg className="icon" aria-hidden="true"><use href="/icons.svg#book-open" /></svg> Now</a></li>
                    </ul>
                </nav>
                <a href="#about" aria-label="Go to about"><svg className="icon flip" aria-hidden="true"><use href="/icons.svg#arrow-right" /></svg></a>
            </header>
            <main>
                <section id="about">
                    <h2><svg className="icon" aria-hidden="true"><use href="/icons.svg#rat" /></svg> About Me</h2>
                    <p>I'm a <mark>Web Developer</mark> based in <strong>Brazil</strong>, building and evolving <strong>commercial web applications</strong> and <mark>SaaS products</mark> since 2009.</p>
                    <p>My career started in <strong>Graphic Design</strong> and <strong>Web Design</strong> before naturally evolving into <strong>front-end</strong> development and later web application development. This multidisciplinary background allows me to bridge <strong>design</strong>, <strong>user experience</strong>, <strong>business requirements</strong>, and <strong>software development</strong>.</p>
                    <p>
                        Most recently, I spent <mark>nearly 9 years</mark> at <a href="https://widigital.com.br?ref=lksvn" target="_blank" rel="noopener noreferrer">WI Digital</a>, contributing to the continuous evolution of a commercial <strong>SaaS platform</strong>.
                        My work included building responsive user interfaces, developing REST APIs, implementing business rules, integrating external services, and improving the product over time.
                    </p>
                </section>
                <section className="what-i-do">
                    <h2><svg className="icon" aria-hidden="true"><use href="/icons.svg#file-coding" /></svg> What I Do</h2>

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
                <section className="past-experiences">
                    <h2><svg className="icon" aria-hidden="true"><use href="/icons.svg#resume" /></svg> Past Experiences</h2>
                    <article>
                        <h3>Freelancing</h3>
                        <p>Web Developer (Part-time)</p>
                        <p className="hasTime">
                            <time dateTime="2009">2009</time>{' – '}<mark>{'Present'}</mark>
                        </p>
                        <p>Building websites, landing pages and custom web solutions, primarily through referrals.</p>
                    </article>
                    <article>
                        <h3>WI Digital</h3>
                        <p>Web Developer</p>
                        <p className="hasTime">
                            <time dateTime="2017-07">July 2017</time>{' – '}<time dateTime="2026-06">June 2026</time>
                        </p>
                        <ul>
                            <li>Built responsive administrative and end-user interfaces for a commercial SaaS platform.</li>
                            <li>Developed front-end and back-end features with PHP, JavaScript, MySQL, MongoDB and CodeIgniter.</li>
                            <li>Maintained and extended REST APIs, business modules, customer integrations and payment integrations.</li>
                            <li>Implemented the complete administrative interface for a PIX integration used by approximately 7–9 clients.</li>
                            <li>Served as a team reference for responsive layouts, front-end implementation and UI/UX.</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Fazul Comunicação</h3>
                        <p>Web Designer / PSD to HTML</p>
                        <p className="hasTime">
                            <time dateTime="2015-08">August 2015</time>{' – '}<time dateTime="2015-10">October 2015</time>
                        </p>
                        <p>Maintained third-party websites and created occasional layouts from scratch.</p>
                    </article>
                    <article>
                        <h3>Takestore</h3>
                        <p>Web Designer / PSD to HTML</p>
                        <p className="hasTime">
                            <time dateTime="2014-08">August 2014</time>{' – '}<time dateTime="2014-11">November 2014</time>
                        </p>
                        <p>Customized approximately 10–15 client websites per day using existing templates.</p>
                    </article>
                    <article>
                        <h3>Agência EP2</h3>
                        <p>Web Developer</p>
                        <p className="hasTime">
                            <time dateTime="2013-01">January 2013</time>{' – '}<time dateTime="2013-10">October 2013</time>
                        </p>
                        <p>Built WordPress and static institutional websites and maintained some Magento stores.</p>
                    </article>
                    <article>
                        <h3>MQV Propaganda</h3>
                        <p>Web Designer</p>
                        <p className="hasTime">
                            <time dateTime="2011-10">October 2011</time>{' – '}<time dateTime="2011-12">December 2011</time>
                        </p>
                        <p>Combined website production with graphic-design work.</p>
                    </article>
                    <article>
                        <h3>DHG Web Agência Interativa</h3>
                        <p>Graphic Designer / Web Designer</p>
                        <p className="hasTime">
                            <time dateTime="2011-01">January 2011</time>{' – '}<time dateTime="2011-09">September 2011</time>
                        </p>
                        <p className="hasTime">
                            <time dateTime="2012-02">February 2012</time>{' – '}<time dateTime="2013-01">January 2013</time>
                        </p>
                        <p>Combined website-template customization with high-volume graphic-design work.</p>
                    </article>
                    <article>
                        <h3>StudioBR Desenvolvimentos</h3>
                        <p>Graphic Designer / Web Designer</p>
                        <p className="hasTime">
                            <time dateTime="2009-03">March 2009</time>{' – '}<time dateTime="2010-12">December 2010</time>
                        </p>
                        <p>First professional role, creating and maintaining websites alongside digital and print materials.</p>
                    </article>
                </section>
                <section>
                    <h2><svg className="icon" aria-hidden="true"><use href="/icons.svg#coffee" /></svg> Projects</h2>
                    <p>Over the years I've worked on websites, landing pages, interfaces, branding projects and SaaS-related solutions.</p>
                    <p>Below are some public projects I can share.</p>
                    <Projects items={projects} />
                </section>
                <section id="uses" className="what-i-use">
                    <h2><svg className="icon" aria-hidden="true"><use href="/icons.svg#toolbox" /></svg> Uses</h2>
                    <p>A small collection of the tools, technologies and platforms I use for work, learning and personal projects. Inspired by <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer">Uses.tech</a>.</p>
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
                <footer>
                    <p>Code by <a href="https://www.instagram.com/p/Btf41tLFmgI/" target="_blank" rel="noopener noreferrer">coffee</a> and <a href="https://www.instagram.com/p/CdZSjPjFhM1" target="_blank" rel="noopener noreferrer">cat love</a> — since 1990.</p>
                    <p>
                        Hosted by <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">GitHub Pages</a> and served through <a href="https://www.cloudflare.com/" rel="noopener noreferrer" target="_blank">Cloudflare</a>.
                    </p>
                    <p>
                        <small><em>Simple site for a simple showcase</em></small>
                    </p>
                </footer>
                <a href="#top" aria-label="Back to top"><svg className="icon" aria-hidden="true"><use href="/icons.svg#corner-up" /></svg></a>
            </main>
        </>
    )
}

export default App
