function NowApp() {
    return (
        <>
            <header>
                <nav aria-label="Navigation">
                    <ul>
                        <li><a href="/">Back to Home</a></li>
                        <li><a href="/freelance/">Freelancing (🇧🇷)</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Now</h1>
                <p>Hi, I'm Lucas Vinicius, a Web Developer based in Brazil. This page is what I'm currently working on and exploring.</p>
                <p>This page is inspired by the "Now" concept popularized by <a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a>.</p>
                <p>🕑 <time dateTime="2026-08-25">Last Updated: August 25, 2026</time></p>

                <p>I'm currently open to full-time and freelance opportunities in web development.</p>
                <p>My main interests are building useful web applications, improving existing products, and working on projects where thoughtful engineering matters more than chasing trends.</p>

                <section>
                    <h2>🚀 Building</h2>
                    <article>
                        <h3>Flip Lab</h3>
                        <p>I'm working on a local Path of Exile market-analysis dashboard built with TypeScript, React, Node.js, and SQLite.</p>
                        <p>It started as a personal tool and became an opportunity to explore data collection, market scoring, local-first software, background processes, and interactive data visualization.</p>
                    </article>
                    <article>
                        <h3>Obsidian Finances</h3>
                        <p>I recently turned my personal finance workflow into a reusable Obsidian template.</p>
                        <p>The project focuses on local-first data, recurring transactions, installments, dashboards, and practical automation without depending on a hosted service.</p>
                    </article>
                    <article>
                        <h3>Career Workbench</h3>
                        <p>I'm developing a file-based system for maintaining fact-checked career information and generating resumes with AI-assisted workflows.</p>
                        <p>The goal is to keep professional facts structured, portable, private, and separate from generated documents.</p>
                    </article>
                </section>
                <section>
                    <h2>⏸️ On pause</h2>
                    <p>Candidate Tracker is currently paused while I focus on smaller projects that solve immediate problems.</p>
                    <p>I still plan to revisit it. The project remains an important TypeScript, Next.js, PostgreSQL, Prisma, and software-architecture learning lab.</p>
                </section>
                <section>
                    <h2>📚 Learning</h2>
                    <p>Right now, I’m spending time on:</p>
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
                    <h2>🎮 Outside of work</h2>
                    <p>I'm playing Path of Exile and occasionally turning the problems I encounter in games into software projects.</p>
                    <p>I'm also organizing my personal finances, refining my development workflow, and trying to build more things that I actually use.</p>
                </section>
                <section>
                    <h2>💭 Current mindset</h2>
                    <p>I'm trying to build less for the sake of building and focus more on software that solves a real problem.</p>
                    <p>Small, useful, and finished is often better than ambitious and permanently unfinished.</p>
                </section>
            </main>
        </>
    );
}

export default NowApp;