import { SelectedWorks } from "./components/SelectedWorks";
import { Services } from "./components/Services";
import { selectedWorks } from "./data/selectedWorks";
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

                    <a href="https://wa.me/5511953988891?text=Ol%C3%A1%2C%20Lucas%21%20Gostaria%20de%20conversar%20sobre%20um%20servi%C3%A7o." target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#whatsapp" /></svg> Vamos conversar</a>
                </section>
                <section id="servicos">
                    <h2>O que você precisa?</h2>
                    <p>Escolha o serviço mais próximo do seu pedido.</p>

                    <Services items={services} />
                </section>
                <section id="trabalhos">
                    <h2>Trabalhos Selecionados</h2>

                    <SelectedWorks items={selectedWorks} />

                    <a href="https://wa.me/5511953988891?text=Ol%C3%A1%2C%20Lucas%21%20Vi%20seus%20trabalhos%20e%20gostaria%20de%20conversar%20sobre%20algo%20parecido." target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#whatsapp" /></svg> Vamos conversar</a>
                </section>
                <section id="expectativas">
                    <h2>O que você pode esperar?</h2>
                    <ul>
                        <li>Você fala diretamente comigo</li>
                        <li>Explico cada etapa sem termos técnicos</li>
                        <li>Definimos escopo, prazo e entregas antes de começar</li>
                        <li>Atendo pedidos pontuais e projetos completos</li>
                    </ul>
                </section>
                <section id="sobre">
                    <h2>Quem fará o trabalho?</h2>
                    <p>Trabalho profissionalmente desde 2009 com sites e materiais gráficos.</p>
                    <p>Prefiro comunicação direta, escopo claro e trabalho simples de manter.</p>
                </section>
                <section id="processo">
                    <h2>O que acontece depois da mensagem?</h2>
                    <p>Primeiro, entendo o seu pedido.</p>
                    <ol>
                        <li>
                            <h3>O que você envia?</h3>
                            <p>Conte o que precisa e para quem é o trabalho.</p>
                        </li>
                        <li>
                            <h3>O que preciso saber?</h3>
                            <p>Pergunto sobre objetivo, prazo e materiais disponíveis.</p>
                        </li>
                        <li>
                            <h3>O que vem na proposta?</h3>
                            <p>Serviço, valor, prazo, entregas e alterações.</p>
                        </li>
                        <li>
                            <h3>Quando começamos?</h3>
                            <p>Depois da aprovação. Você acompanha o trabalho até a entrega.</p>
                        </li>
                    </ol>
                    <a href="https://wa.me/5511953988891?text=Ol%C3%A1%2C%20Lucas%21%20Vi%20seus%20trabalhos%20e%20gostaria%20de%20conversar%20sobre%20algo%20parecido." target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#whatsapp" /></svg> Vamos conversar</a>
                </section>
                <section id="duvidas">
                    <h2>Ainda tem dúvidas?</h2>

                    <details name="duvidas">
                        <summary>Quanto custa?</summary>
                        <p>Envio o valor depois de entender o pedido.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Quanto tempo demora?</summary>
                        <p>Depende do projeto. Você recebe o prazo antes do início.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Quantas alterações posso solicitar?</summary>
                        <p>A quantidade e o tipo ficam definidos na proposta.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Posso contratar apenas uma arte?</summary>
                        <p>Sim. Pedidos pontuais também são bem-vindos.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Você ajuda a organizar os textos e informações?</summary>
                        <p>Sim. Organizo o material e aviso o que estiver faltando.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Você também atualiza sites existentes?</summary>
                        <p>Sim. Faço ajustes de conteúdo, correções e pequenas melhorias.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Você prepara o arquivo para a gráfica?</summary>
                        <p>Sim. Preparo o arquivo conforme as orientações da gráfica. A impressão não está incluída.</p>
                    </details>

                    <details name="duvidas">
                        <summary>O trabalho pode ser feito à distância?</summary>
                        <p>Sim. Conversa, acompanhamento e entrega podem ser feitos online.</p>
                    </details>

                    <details name="duvidas">
                        <summary>Como funciona o pagamento?</summary>
                        <p>As condições ficam definidas na proposta.</p>
                    </details>

                    <details name="duvidas">
                        <summary>O que preciso enviar para começar?</summary>
                        <p>Uma explicação do pedido e os materiais que você já tiver.</p>
                    </details>
                </section>
                <section id="contato">
                    <h2>Como começar?</h2>
                    <p>Conte pelo WhatsApp o que você precisa. Não precisa ter tudo definido.</p>
                    <a href="https://wa.me/5511953988891?text=Ol%C3%A1%2C%20Lucas%21%20Vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer"><svg className="icon" aria-hidden="true"><use href="/icons.svg#whatsapp" /></svg> Vamos conversar</a>
                </section>
                <footer>
                    <p><strong>Lucas Vinicius</strong></p>
                    <p>Design gráfico e sites</p>
                    <nav aria-label="Links de contato">
                        <ul>
                            <li><a href="mailto:lksvn@outlook.com">E-mail</a></li>
                            <li><a href="https://www.linkedin.com/in/lksvn/" target="_blank" rel="me noopener noreferrer">LinkedIn</a></li>
                            <li><a href="/">Portfólio profissional</a></li>
                        </ul>
                    </nav>
                    <p>Sorocaba, SP · Atendimento remoto</p>
                    <p><small>&copy; 2026 Lucas Vinicius. Todos os direitos reservados.</small></p>
                </footer>
                <a href="#top"><svg className="icon" aria-hidden="true"><use href="/icons.svg#corner-up" /></svg></a>
            </main>
        </>
    );
}

export default FreelanceApp;