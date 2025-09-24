# Conector n8n - Gerador de Números Aleatórios 

Projeto desenvolvido como parte do **Desafio Técnico** para a vaga de Estágio na empresa **Onfly**.

## Nota sobre Contribuições
Este projeto foi desenvolvido como parte do desafio técnico. A seção de "Contributors" do GitHub pode, eventualmente, exibir outros usuários. Isso se deve à utilização de arquivos de configuração (`.editorconfig`, `.gitignore`, etc.) que foram originados do template oficial `n8n-nodes-starter`. Toda a lógica, implementação e customização do conector `Random` são de autoria própria.

---

## Descrição
Este projeto consiste na criação de um **conector customizado (Custom Node)** para a plataforma de automação low-code **n8n**.  
O objetivo é estender as capacidades do n8n, oferecendo aos usuários uma maneira simples e confiável de gerar números inteiros **aleatórios** em seus workflows.

A aleatoriedade é garantida pela integração direta com a **API pública do random.org**.

---

## Features
- **Interface Intuitiva**: O node aparece na UI do n8n como *"Random"*, com a operação *True Random Number Generator*.  
- **Configuração Simplificada**: Dois campos numéricos, **Min** e **Max**, definem o intervalo.  
- **Aleatoriedade Real**: Utiliza exclusivamente a API do random.org.  
- **Design Consistente**: Ícone SVG para identificação visual no n8n.  
- **Ambiente Dockerizado**: Execução completa via Docker Compose (n8n + PostgreSQL).  

---

## Pré-requisitos
- **Git** → [Download](https://git-scm.com/)  
- **Docker + Docker Compose** → [Download](https://www.docker.com/)  
- **Node.js v22 (LTS)** → [Download](https://nodejs.org/)  

---

## Instalação e Execução Local

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/desafio-n8n-FINAL.git

2. **Acesse a pasta do projeto**
   ```bash
   cd desafio-n8n-FINAL

3. **Compile e suba o ambiente**
   
    a. Instala dependências
         ```bash
         npm install

      b. Compila TypeScript → JavaScript (/dist)
       ```bash
         npm run build

   c. Sobe n8n + Postgres em segundo plano
   ```bash
    docker-compose up -d
      OBS: A primeira execução pode levar alguns minutos.

5. **Verifique os contêineres**
   ```bash
   docker-compose ps
      OBS: Esperado: serviços n8n e postgres com status Up ou running.

6. **Encerrar o ambiente**
   ```bash
   docker-compose down

## Como Usar o Node
  1. Acesse: http://localhost:5678
  2. Configure o usuário owner (primeiro acesso).
  3. Crie um novo workflow (Start from scratch).
  4. Clique em + → adicione o node Random.
  5. Configure os campos:
  6. Min: valor mínimo.
  7. Max: valor máximo.
  8. Clique em Execute Node.

  Exemplo de saída JSON:

  {
    "randomNumber": 42
  }

## Estrutura do Projeto
      .
      ├── dist/                     # Código JS compilado (usado pelo n8n)
      ├── nodes/                    # Código-fonte TypeScript
      │   └── random/
      │       ├── random.node.ts    # Lógica e definição do node
      │       └── icon.svg          # Ícone do node
      ├── .gitignore                # Arquivos e pastas a serem ignorados pelo Git
      ├── docker-compose.yml        # Configuração do ambiente n8n + Postgres
      ├── package.json              # "Identidade" do projeto, dependências e scripts
      ├── README.md                 # Esta documentação
      └── tsconfig.json             # Regras para o compilador TypeScript

## Tecnologias Utilizadas
Plataforma: n8n v1.85.4

Linguagem: TypeScript

Runtime: Node.js v22 (LTS)

Containerização: Docker & Docker Compose

Banco de Dados: PostgreSQL v11

API Externa: random.org

## Conclusão
A produção deste projeto foi um processo de grande aprendizado, especialmente por envolver a configuração de um ambiente de desenvolvimento completo com Docker, a criação de um node customizado em TypeScript e a depuração de desafios de integração. Cada etapa contribuiu significativamente para o meu desenvolvimento profissional.
