import { Icon } from "./Icon";

export function Footer() {
    return(
        <footer>
            <p>Code by <a href="https://www.instagram.com/p/Btf41tLFmgI/" target="_blank" rel="noopener noreferrer">coffee</a> and <a href="https://www.instagram.com/p/CdZSjPjFhM1" target="_blank" rel="noopener noreferrer">cat love</a> — since 1990.</p>
            <nav aria-label="Footer navigation">
                <ul>
                    <li><a href="/"><Icon name="rat"/> Home</a></li>
                    <li><a href="/now/"><Icon name="book-open"/> Now</a></li>
                    <li><a href="/freelance/"><Icon name="toolbox"/> Freelancing (pt-BR)</a></li>
                    <li><a href="mailto:lksvn@outlook.com?subject=Hello There!"><Icon name="email"/> Email</a></li>
                    <li><a href="/Lucas_Vinicius_Web_Developer.pdf" target="_blank" rel="noopener noreferrer"><Icon name="resume"/> Resume</a></li>
                </ul>
            </nav>
            <p>
                Hosted by <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">GitHub Pages</a> and served through <a href="https://www.cloudflare.com/" rel="noopener noreferrer" target="_blank">Cloudflare</a>.
            </p>
            <p>
                <small><em>Simple site for a simple showcase</em></small>
            </p>
        </footer>
    );
}