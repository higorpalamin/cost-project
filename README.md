# Cost Project

## Visão Geral

Este projeto é uma aplicação React + Vite que gerencia projetos e serviços associados. Ele usa um backend falso com `json-server` para simular uma API REST local e permite:

- criar projetos
- editar projetos
- excluir projetos
- adicionar e remover serviços de projetos
- navegar entre páginas usando `react-router-dom`

A aplicação utiliza CSS Modules para estilos organizados e componentes React funcionais com hooks.

## Tecnologias Utilizadas

- React 19
- Vite
- React Router DOM 7
- json-server
- React Icons
- UUID
- CSS Modules
- ESLint

## Estrutura do Projeto

- `package.json`: scripts, dependências e devDependencies.
- `vite.config.js`: configuração do Vite com `@vitejs/plugin-react` e `@rolldown/plugin-babel` usando `reactCompilerPreset`.
- `index.html`: ponto de entrada HTML.
- `db.json`: banco de dados mock para `json-server`.
- `src/main.jsx`: bootstrap do React.
- `src/App.jsx`: definição de rotas e layout global.
- `src/index.css`: estilo global básico.
- `src/custom.d.ts`: declarações de módulos para CSS e imagens.
- `src/components/`: conjunto de componentes organizados por função.
- `src/assets/`: imagens utilizadas pela interface.

## Como Rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o backend local:
   ```bash
   npm run backend
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador em `http://localhost:5173`.

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento Vite.
- `npm run backend`: inicia o `json-server` em `http://localhost:5000`.
- `npm run build`: gera o build de produção.
- `npm run preview`: visualiza o build localmente.
- `npm run lint`: executa o ESLint no código.

## Backend e API

O backend falso roda em `http://localhost:5000` e serve as rotas:

- `GET /projects`
- `POST /projects`
- `GET /projects/:id`
- `PATCH /projects/:id`
- `DELETE /projects/:id`
- `GET /categories`

O `db.json` contém:

- `projects`: array de projetos (inicialmente vazio).
- `categories`: categorias pré-definidas como Infra, Desenvolvimento, Design e Planejamento.

## Rotas da Aplicação

As rotas estão declaradas em `src/App.jsx`:

- `/`: página inicial (`Home`).
- `/projects`: lista de projetos (`Projects`).
- `/company`: página da empresa (`Company`).
- `/contact`: página de contato (`Contact`).
- `/newproject`: formulário de criação de projeto (`NewProject`).
- `/project/:id`: página de detalhe do projeto (`Project`).

## Componentes Importantes

### Layout

- `Navbar`: navegação principal com links para as páginas.
- `Footer`: rodapé com ícones sociais.
- `Container`: wrapper reutilizável para layout.
- `Loading`: componente de carregamento com SVG.
- `Message`: mensagens de status exibidas por 2 segundos.

### Páginas

- `Home`: página de boas-vindas com CTA para criar um projeto.
- `Projects`: lista de projetos e remoção de itens.
- `Company`: página de empresa estática.
- `Contact`: página de contato estática.
- `NewProject`: formulário para criar um novo projeto.
- `Project`: detalhes do projeto, edição de dados e gerenciamento de serviços.

### Formulários e Inputs

- `ProjectForm`: controla criação/edição do projeto.
  - busca categorias em `GET /categories`.
  - controla os campos `name`, `budget` e `category`.
- `ServiceForm`: adiciona serviços ao projeto.
  - insere o serviço em `projectData.services` e chama `handleSubmit`.
- `Input`: componente genérico para campos de formulário.
- `Select`: componente genérico para seleção de categoria.
- `SubmitButton`: botão de envio do formulário.

### Cards

- `ProjectCard`: apresenta nome, orçamento, categoria, link de edição e exclusão.
- `ServiceCard`: apresenta serviço com custo, descrição e botão de exclusão.

## Fluxo de Funcionalidades

### Criação de Projeto

1. Usuário acessa `/newproject`.
2. `ProjectForm` recebe dados e categorias.
3. `createPost()` em `NewProject` faz `POST /projects`.
4. O projeto é criado com `cost: 0` e `services: []`.
5. Usuário é redirecionado para `/projects` com mensagem de sucesso.

### Listagem de Projetos

- `Projects` busca `GET /projects` ao montar.
- Exibe `Loading` enquanto aguarda a resposta.
- Mostra mensagem se nenhum projeto estiver cadastrado.

### Exclusão de Projeto

- Ao excluir, `removeProject(id)` chama `DELETE /projects/:id`.
- A lista local de projetos é atualizada após a remoção.

### Edição de Projeto

- `Project` carrega o projeto com `GET /projects/:id`.
- O formulário de edição reaproveita `ProjectForm`.
- `editPost()` envia alterações via `PATCH /projects/:id`.
- O componente valida que `budget` não seja menor que `cost`.

### Adição de Serviço

- `ServiceForm` cria um novo serviço e adiciona ao projeto.
- `createService()` gera `uuid` para o serviço.
- Calcula o novo custo total e valida o orçamento.
- Se o orçamento for ultrapassado, o serviço é removido e o usuário é informado.
- Caso válido, o projeto é atualizado com `PATCH /projects/:id`.

### Remoção de Serviço

- `removeService(id, cost)` re-calcula o array de serviços e o custo total.
- Atualiza o projeto no backend com `PATCH /projects/:id`.