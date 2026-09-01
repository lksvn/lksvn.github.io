import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Icon } from "./components/Icon";

function NowApp() {
    return (
        <>
            <header>
                <nav aria-label="Navigation">
                    <ul>
                        <li><Icon name="arrow-right" className="flip-h"/> <a href="/">Home</a></li>
                        <li><Icon name="toolbox"/> <a href="/freelance/">Freelancing (pt-BR)</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h1><Icon name="book-open"/> Now</h1>
                    <p><Icon name="coffee"/> <time dateTime="2026-08-31"><strong>Last Updated:</strong> August 31, 2026</time></p>

                    <p>Hi, I'm Lucas Vinicius, a <mark>Web Developer</mark> based in <strong>Brazil</strong>. This page is what I'm currently working on and exploring.</p>

                    <p>This page is inspired by the "Now" concept popularized by <a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a>.</p>


                    <p>I'm currently <mark>open</mark> to full-time and freelance <mark>opportunities</mark> in web development.</p>
                    <p>My main interests are building useful web applications, improving existing products, and working on projects where thoughtful engineering matters more than chasing trends.</p>
                </section>

                <section>
                    <h2><Icon name="file-coding"/> Building</h2>
                    <article className="spacing md">
                        <h3>MTG Proxy</h3>
                        <p>I built a client-side React application that turns Magic: The Gathering deck lists into printable playtest card PDFs.</p>
                        <p>It uses Scryfall for card data and supports printing selection, list history, text backups, and configurable PDF exports.</p>
                        <p><a href="/mtg-proxy/"><Icon name="arrow-right"/> Open MTG Proxy</a></p>
                        <a href="https://github.com/lksvn/mtg-proxy" target="_blank" rel="noopener noreferrer"><Icon name="github"/> Visit the repository</a>
                    </article>
                    <article className="spacing md">
                        <h3>Flip Lab</h3>
                        <p>I'm working on a local Path of Exile market-analysis dashboard built with TypeScript, React, Node.js, and SQLite.</p>
                        <p>It started as a personal tool and became an opportunity to explore data collection, market scoring, local-first software, background processes, and interactive data visualization.</p>
                        <a href="https://github.com/lksvn/poe-flip-lab" target="_blank" rel="noopener noreferrer"><Icon name="github"/> Visit the repository</a>
                    </article>
                    <article className="spacing md">
                        <h3>Obsidian Finances</h3>
                        <p>I recently turned my personal finance workflow into a reusable Obsidian template.</p>
                        <p>The project focuses on local-first data, recurring transactions, installments, dashboards, and practical automation without depending on a hosted service.</p>
                        <a href="https://github.com/lksvn/obsidian-finances-template" target="_blank" rel="noopener noreferrer"><Icon name="github"/> Visit the repository</a>
                    </article>
                    <article className="spacing md">
                        <h3>Career Workbench</h3>
                        <p>I'm developing a file-based system for maintaining fact-checked career information and generating resumes with AI-assisted workflows.</p>
                        <p>The goal is to keep professional facts structured, portable, private, and separate from generated documents.</p>
                        <a href="https://github.com/lksvn/career-workbench" target="_blank" rel="noopener noreferrer"><Icon name="github"/> Visit the repository</a>
                    </article>
                </section>

                <section>
                    <h2><Icon name="monitor-pause"/> On pause</h2>
                    <p>Candidate Tracker is currently paused while I focus on smaller projects that solve immediate problems.</p>
                    <p>I still plan to revisit it. The project remains an important TypeScript, Next.js, PostgreSQL, Prisma, and software-architecture learning lab.</p>
                </section>
                <section>
                    <h2><Icon name="graduation-cap"/> Learning</h2>
                    <p>Right now, I'm spending time on:</p>
                    <ul>
                        <li>TypeScript and React architecture</li>
                        <li>Local-first applications</li>
                        <li>Data modeling and SQLite</li>
                        <li>AI-assisted development workflows</li>
                        <li>Building smaller tools with a clear purpose</li>
                        <li>Writing better project documentation</li>
                    </ul>
                </section>
                <section>
                    <h2><Icon name="gamepad"/> Outside of work</h2>
                    <p>I'm playing Path of Exile and occasionally turning the problems I encounter in games into software projects.</p>
                    <p>I'm also organizing my personal finances, refining my development workflow, and trying to build more things that I actually use.</p>
                </section>
                <section>
                    <h2><Icon name="coffee"/> Current mindset</h2>
                    <p>I'm trying to build less for the sake of building and focus more on software that solves a real problem.</p>
                    <p>Small, useful, and finished is often better than ambitious and permanently unfinished.</p>
                </section>

                <Footer/>
                <BackToTop/>
            </main>
        </>
    );
}

export default NowApp;
