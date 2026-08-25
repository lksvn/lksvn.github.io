import { Projects } from "./components/Projects"
import { projects } from "./data/projects"

function App() {
	return (
		<>
			<header>
				<h1>Hello there!</h1>
			</header>
			<main>
				<section>
					<h2>About Me</h2>
					<p>I'm a <strong>Web Developer</strong> based in <strong>Brazil</strong>, building and evolving <strong>commercial web applications</strong> and <strong>SaaS</strong> products since 2009.</p>
				</section>
				<section>
					<h2>Projects</h2>
					<p>Over the years I've worked on websites, landing pages, interfaces, branding projects and SaaS-related solutions.</p>
					<p>Below are some public projects I can share.</p>
					<Projects items={projects} />
				</section>
			</main>
			<footer>
				Code since 1990
			</footer>
		</>
	)
}

export default App
