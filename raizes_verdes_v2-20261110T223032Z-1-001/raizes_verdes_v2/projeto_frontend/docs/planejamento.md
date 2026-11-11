<h1 align="center">🌱 Raízes Verdes</h1>

<p align="center"><b>Planejamento do site da ONG</b></p>

<br>

## 📑 Sumário

1. [Objetivo](#-1-objetivo)
2. [Público-alvo](#-2-público-alvo)
3. [Sitemap](#-3-sitemap)
4. [Inventário de conteúdo](#-4-inventário-de-conteúdo)
5. [Wireframes](#-5-wireframes-de-baixa-fidelidade)
6. [Guia visual](#-6-guia-visual)
7. [Estrutura das páginas](#-7-estrutura-das-páginas)
8. [Formulário de contato](#-8-formulário-de-contato)
9. [Mídias](#-9-mídias)
10. [Responsabilidades](#-10-responsabilidades)

<br>

---

## 🎯 1. Objetivo

Apresentar os projetos da ONG Raízes Verdes, divulgar ações sustentáveis e permitir que interessados conheçam as iniciativas e entrem em contato.

<br>

---

## 👥 2. Público-alvo

- Moradores da comunidade
- Jovens interessados em voluntariado
- Empresas e comércios interessados em apoiar projetos ambientais

<br>

---

## 🗺️ 3. Sitemap

```text
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
```

**Menu principal:**

`Início` | `Sobre` | `Projetos` | `Galeria` | `Voluntários` | `FAQ` | `Contato` | `Orçamento`

> 💡 As páginas de detalhes dos projetos são acessadas através da página **Projetos**.

<br>

---

## 📋 4. Inventário de conteúdo

| Página | Objetivo | Conteúdo |
|:-------|:---------|:---------|
| `index.html` | Apresentar o site | Apresentação, destaques dos projetos e áudio |
| `sobre.html` | Apresentar a ONG | História, missão e valores |
| `projetos.html` | Apresentar ações | Cards dos projetos e informações principais |
| `projeto-horta.html` | Detalhar projeto de horta | Texto, imagens e vídeo |
| `projeto-reciclagem.html` | Detalhar projeto de reciclagem | Texto e tabela de materiais |
| `galeria.html` | Exibir imagens | Fotos e legendas |
| `voluntarios.html` | Apresentar participação voluntária | Informações e convite para participação |
| `faq.html` | Responder dúvidas | Perguntas e respostas |
| `contato.html` | Permitir contato | Formulário e informações de contato |
| `orcamento.html` | Apresentar pesquisa | Comparativo de domínio e hospedagem |

<br>

---

## 🧩 5. Wireframes de baixa fidelidade

### 🏠 Home

```text
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
```

### 🥕 Página interna – Projeto Horta

```text
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
```

### ✉️ Contato

```text
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
```

<br>

---

## 🎨 6. Guia visual

| Elemento | Decisão |
|:---------|:--------|
| Cor principal | Verde `#2e7d32` |
| Cor secundária | Verde escuro `#1b5e20` |
| Cor de destaque | Amarelo `#f9a825` |
| Fundo | `#f4f8f1` |
| Fonte | Georgia |
| Botões | Verdes com cantos arredondados |
| Cards | Fundo branco com sombra leve |

<br>

---

## 🏗️ 7. Estrutura das páginas

Todas as páginas seguem o modelo:

```text
header → nav → main → footer
```

A estrutura mantém a navegação e a identidade visual do site.

<br>

---

## 📝 8. Formulário de contato

| Campo | Tipo HTML | Validação |
|:------|:----------|:----------|
| Nome | `text` | `required`, `minlength`, `maxlength` |
| E-mail | `email` | `required` |
| Telefone | `tel` | `pattern` opcional |
| Assunto | `select` | `required` |
| Mensagem | `textarea` | `required`, `minlength`, `maxlength` |

O formulário utiliza validações nativas do HTML5.

<br>

---

## 🎬 9. Mídias

- 🖼️ Imagens nas páginas principais e projetos
- 🔊 Áudio na página inicial
- 🎥 Vídeo na página do projeto de horta
- 📍 Iframe de mapa na página de contato

<br>

---

## 🙋 10. Responsabilidades

| Responsabilidade | Integrante |
|:-----------------|:-----------|
| Planejamento e conteúdo | Júlio |
| Estrutura HTML e navegação | Júlio |
| CSS e identidade visual | Júlio |
| Imagens e mídias | Júlio |
| Documentação | Júlio |
| Git e GitHub | Júlio |
| Revisão e correções | Júlio |

