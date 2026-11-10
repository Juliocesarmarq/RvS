# Planejamento do site – Raízes Verdes

## 1. Objetivo
Apresentar os projetos da ONG Raízes Verdes, divulgar ações sustentáveis e permitir que interessados conheçam as iniciativas e manifestem interesse em participar.

## 2. Público-alvo
- Moradores do bairro;
- Jovens interessados em voluntariado;
- Empresas e comércios que queiram apoiar projetos ambientais.

## 3. Sitemap
```text
                         index.html
       ┌─────────┬──────────┼──────────┬──────────┬─────────┐
       │         │          │          │          │         │
     sobre    projetos   galeria  voluntarios    faq    contato  orcamento
                  │
           ┌──────┴────────┐
           │               │
    projeto-horta   projeto-reciclagem
```

Menu principal: Início | Sobre | Projetos | Galeria | Voluntários | FAQ | Contato | Orçamento. As páginas de detalhes dos projetos são acessadas pelos cards da página Projetos.

## 4. Inventário de conteúdo
| Página | Objetivo | Conteúdo previsto |
|---|---|---|
| `index.html` | Apresentar o site | Chamada principal, cards de projetos e áudio |
| `sobre.html` | Explicar quem somos | Missão, visão, valores e história |
| `projetos.html` | Listar ações | Cards e figuras com legendas |
| `projeto-horta.html` | Detalhar a horta | Texto, lista, imagem e vídeo |
| `projeto-reciclagem.html` | Detalhar a reciclagem | Texto e tabela de materiais |
| `galeria.html` | Exibir imagens | Figuras e legendas |
| `voluntarios.html` | Convidar à participação | Informações e chamada para contato |
| `faq.html` | Tirar dúvidas | Perguntas e respostas |
| `contato.html` | Permitir contato | Formulário, dados fictícios identificados e mapa incorporado |
| `orcamento.html` | Documentar a pesquisa | Comparativo resumido e link para o relatório |

## 5. Wireframes de baixa fidelidade
Os esquemas textuais abaixo são referências de organização. O roteiro da disciplina solicita wireframes da Home, de uma página interna e da página de Contato. Para garantir que a exigência seja atendida, o grupo deve desenhar essas três telas (papel e caneta ou ferramenta digital), identificar cada área e inserir fotos/arquivos dos desenhos nesta documentação, caso o professor solicite a entrega dos wireframes.

### Home
```text
┌──────────────────────────────────────────┐
│ HEADER – nome e identificação da ONG      │
├──────────────────────────────────────────┤
│ NAV – links de navegação                  │
├──────────────────────────────────────────┤
│ DESTAQUE – título, texto e botão          │
├──────────────┬──────────────┬─────────────┤
│ CARD projeto │ CARD projeto │ CARD convite│
├──────────────┴──────────────┴─────────────┤
│ ÁUDIO – recurso com controles             │
├──────────────────────────────────────────┤
│ FOOTER – identificação e informações      │
└──────────────────────────────────────────┘
```

### Página interna – exemplo: projeto-horta
```text
HEADER + NAV
TÍTULO DA PÁGINA
IMAGEM DE DESTAQUE
TEXTO EXPLICATIVO + LISTA
VÍDEO COM CONTROLES
LINK PARA VOLTAR A PROJETOS
FOOTER
```

### Contato
```text
HEADER + NAV
TÍTULO: Fale com a gente
FORMULÁRIO: nome, e-mail, telefone, assunto e mensagem
BOTÃO ENVIAR + ÁREA DE RETORNO AO USUÁRIO
INFORMAÇÕES FICTÍCIAS DE CONTATO + MAPA (IFRAME)
FOOTER
```

**Anexos dos wireframes finais:** [INSERIR FOTOS OU ARQUIVOS DOS TRÊS DESENHOS, SE APLICÁVEL].

## 6. Guia visual
| Elemento | Decisão |
|---|---|
| Cor principal | Verde `#2e7d32` |
| Cor secundária | Verde escuro `#1b5e20` |
| Cor de destaque | Amarelo `#f9a825` |
| Cor de fundo | `#f4f8f1` |
| Fonte principal | Georgia (serifada) |
| Botões | Verdes, cantos arredondados e mudança de cor no hover |
| Cards | Fundo branco, cantos arredondados e sombra leve |

## 7. Modelo comum de página
As páginas compartilham a estrutura `header` → `nav` → `main` (conteúdo específico) → `footer`, mantendo navegação e identidade visual consistentes.

## 8. Formulário de contato
| Campo | Tipo HTML | Regra |
|---|---|---|
| Nome | `text` | `required`, `minlength=3`, `maxlength=80` |
| E-mail | `email` | `required` |
| Telefone | `tel` | `pattern` opcional |
| Assunto | `select` | `required` |
| Mensagem | `textarea` | `required`, `minlength=10`, `maxlength=500` |

O formulário apresenta validação nativa do HTML5. O JavaScript mostra uma confirmação **demonstrativa** de que os campos passaram na validação; não há envio real porque o projeto não possui backend ou serviço de formulários configurado. Para transmitir os dados, será necessário definir um destino real e autorizado e configurar o serviço correspondente.

## 9. Mídias
- Imagens nas páginas inicial, projetos, galeria e detalhes dos projetos, com texto alternativo adequado;
- Áudio de floresta na Home;
- Vídeo na página da horta;
- Iframe de mapa na página de contato.

## 10. Divisão de responsabilidades
Preencher com a distribuição realmente combinada pelo grupo. Se uma pessoa acumular mais de uma função, isso pode ser indicado na tabela.

| Responsabilidade | Integrante responsável |
|---|---|
| Planejamento e conteúdo | [NOME A CONFIRMAR] |
| Estrutura HTML e navegação | [NOME A CONFIRMAR] |
| CSS e identidade visual | [NOME A CONFIRMAR] |
| Imagens e mídias | [NOME A CONFIRMAR] |
| Documentação | [NOME A CONFIRMAR] |
| Git e GitHub | [NOME A CONFIRMAR] |
| Revisão e correções | [NOME A CONFIRMAR] |

## 11. Pendências de confirmação
- Confirmar os nomes e a divisão real das responsabilidades.
- Produzir/anexar os três wireframes solicitados no roteiro.
- Executar as validações oficiais de HTML e CSS e registrar os resultados.
- Confirmar com o professor se o formulário precisa enviar dados de verdade ou se a demonstração Front-End atende ao objetivo da atividade.
