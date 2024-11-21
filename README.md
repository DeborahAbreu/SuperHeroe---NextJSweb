# Superheroes App

Este projeto é uma aplicação simples desenvolvida em Next.js que consome dados da API [SuperHeroAPI](https://superheroapi.com/) para exibir informações sobre super-heróis. A aplicação inclui o uso de componentes, estilos globais, fontes personalizadas e carregamento dinâmico de dados.

---

## Estrutura do Projeto

A estrutura principal do projeto é composta pelos seguintes arquivos e funcionalidades:

1. **`Home`**:
   - Carrega e exibe informações de super-heróis utilizando a API.
   - Gera dinamicamente componentes de cartão (`Card`) para cada super-herói carregado.
   - Inclui gerenciamento de estado com React Hooks (`useState` e `useEffect`).

2. **`RootLayout`**:
   - Configura estilos globais e fontes personalizadas.
   - Define a estrutura base da aplicação com `<html>` e `<body>`.

3. **Estilos**:
   - Estilização global em `globals.css`.
   - Estilo específico para o layout desktop no `page.module.css`.

4. **Fontes**:
   - Fontes customizadas (`GeistSans` e `GeistMono`) são importadas localmente.

---

## Funcionalidades

- **Carregamento de Dados Dinâmico**:
  - A aplicação utiliza a função `getHeroes` para buscar dados da API com base em IDs de super-heróis.
  - O carregamento inicial inclui dois super-heróis (IDs 200 e 465).

- **Exibição Condicional**:
  - Enquanto os dados não são carregados, a aplicação exibe um texto de "Carregando...".
  - Após o carregamento, as informações dos heróis são exibidas em cartões estilizados.

- **Monitoramento do Estado**:
  - Atualizações no estado dos heróis são registradas no console do navegador para fins de debug.

---

## Tecnologias Utilizadas

- **Next.js**:
  - Framework React para renderização server-side e geração de páginas estáticas.

- **React**:
  - Hooks (`useState`, `useEffect`) para gerenciar estado e efeitos colaterais.

- **CSS**:
  - Estilos globais para reset e layout base.

- **SuperHeroAPI**:
  - API de terceiros para buscar informações sobre super-heróis.

---

## Como Executar o Projeto

-1. Clone o repositório:
-2. Instale as dependências: npm install
-3. Inicie o servidor de desenvolvimento: npm run dev
-4. Acesse a aplicação no navegador em: http://localhost:3000





