import { Services } from "./components/Services";
import { services } from "./data/services";

function FreelanceApp() {
    return (
        <>
            <header id="top">
                <nav aria-label="Navegação principal">
                    <a href="#inicio">Lucas Vinicius</a>
                    <ul>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#trabalhos">Trabalhos</a></li>
                        <li><a href="#processo">Processo</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="inicio">
                    <p>Design gráfico e sites</p>
                    <h1>Crio materiais gráficos e sites profissionais.</h1>
                    <p>Para pequenos negócios, profissionais e quem precisa de um serviço pontual.</p>

                    <a href="https://wa.me/5511953988891?text=Ol%C3%A1%2C%20Lucas%21%20Gostaria%20de%20conversar%20sobre%20um%20servi%C3%A7o." target="_blank" rel="noopener noreferrer">Vamos conversar</a>
                </section>
                <section id="servicos">
                    <h2>O que você precisa?</h2>
                    <p>Escolha o serviço mais próximo do seu pedido.</p>

                    <Services items={services} />
                </section>
            </main>
            <footer>
                <p><strong>Lucas Vinicius</strong></p>
                <p>Design gráfico e sites</p>
                <p>
                    <a href="mailto:lksvn@outlook.com">E-mail</a>
                    <span aria-hidden="true">·</span>
                    <a href="https://www.linkedin.com/in/lksvn/" rel="me noopener noreferrer">LinkedIn</a>
                    <span aria-hidden="true">·</span>
                    <a href="https://lksvn.com.br">Portfólio profissional</a>
                </p>
                <p>Sorocaba, SP · Atendimento remoto</p>
                <p><small>&copy; 2026 Lucas Vinicius. Todos os direitos reservados.</small></p>
            </footer>
        </>
    );
}

export default FreelanceApp;