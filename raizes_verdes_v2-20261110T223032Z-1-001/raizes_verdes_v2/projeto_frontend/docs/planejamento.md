🌱 Planejamento do Site – Raízes Verdes

Documento de planejamento do site da ONG Raízes Verdes.

Sumário

	1.	Objetivo
	2.	Público-alvo
	3.	Sitemap
	4.	Inventário de conteúdo
	5.	Wireframes de baixa fidelidade
	6.	Guia visual
	7.	Estrutura das páginas
	8.	Formulário de contato
	9.	Mídias
	10.	Responsabilidades

1. Objetivo

Apresentar os projetos da ONG Raízes Verdes, divulgar ações sustentáveis e permitir que interessados conheçam as iniciativas e entrem em contato.

2. Público-alvo

	•	Moradores da comunidade;
	•	Jovens interessados em voluntariado;
	•	Empresas e comércios interessados em apoiar projetos ambientais.

3. Sitemap

index.html
├── sobre.html
├── projetos.html
│   ├── projeto-horta.html
│   └── projeto-reciclagem.html
├── galeria.html
├── voluntarios.html
├── faq.html
├── contato.html
└── orcamento.html

Menu principal

Início | Sobre | Projetos | Galeria | Voluntários | FAQ | Contato | Orçamento

As páginas de detalhes dos projetos são acessadas através da página Projetos.

4. Inventário de conteúdo

Página	Objetivo	Conteúdo
index.html	Apresentar o site	Apresentação, destaques dos projetos e áudio
sobre.html	Apresentar a ONG	História, missão e valores
projetos.html	Apresentar ações	Cards dos projetos e informações principais
projeto-horta.html	Detalhar projeto de horta	Texto, imagens e vídeo
projeto-reciclagem.html	Detalhar projeto de reciclagem	Texto e tabela de materiais
galeria.html	Exibir imagens	Fotos e legendas
voluntarios.html	Apresentar participação voluntária	Informações e convite para participação
faq.html	Responder dúvidas	Perguntas e respostas
contato.html	Permitir contato	Formulário e informações de contato
orcamento.html	Apresentar pesquisa	Comparativo de domínio e hospedagem

5. Wireframes de baixa fidelidade

Home

+--------------------------------+
| HEADER - Nome da ONG           |
+--------------------------------+
| NAV - Menu de navegação        |
+--------------------------------+
| Título + apresentação          |
+--------------------------------+
| Projeto 1 | Projeto 2 | Ação   |
+--------------------------------+
| Áudio                          |
+--------------------------------+
| FOOTER                         |
+--------------------------------+

Página interna – Projeto Horta

+--------------------------------+
| HEADER + NAV                   |
+--------------------------------+
| Título da página               |
+--------------------------------+
| Imagem principal               |
+--------------------------------+
| Texto explicativo              |
| Lista de informações           |
+--------------------------------+
| Vídeo                          |
+--------------------------------+
| FOOTER                         |
+--------------------------------+

Contato

+--------------------------------+
| HEADER + NAV                   |
+--------------------------------+
| Fale com a gente               |
+--------------------------------+
| Formulário                     |
+--------------------------------+
| Informações de contato         |
| Mapa                           |
+--------------------------------+
| FOOTER                         |
+--------------------------------+

6. Guia visual

Elemento	Decisão
Cor principal	Verde #2e7d32
Cor secundária	Verde escuro #1b5e20
Cor de destaque	Amarelo #f9a825
Fundo	#f4f8f1
Fonte	Georgia
Botões	Verdes com cantos arredondados
Cards	Fundo branco com sombra leve

7. Estrutura das páginas

Todas as páginas seguem o modelo:

header → nav → main → footer

A estrutura mantém a navegação e a identidade visual do site.

8. Formulário de contato

Campo	Tipo HTML	Validação
Nome	text	required, minlength, maxlength
E-mail	email	required
Telefone	tel	pattern opcional
Assunto	select	required
Mensagem	textarea	required, minlength, maxlength

O formulário utiliza validações nativas do HTML5.

9. Mídias

	•	Imagens nas páginas principais e projetos;
	•	Áudio na página inicial;
	•	Vídeo na página do projeto de horta;
	•	Iframe de mapa na página de contato.

10. Responsabilidades
