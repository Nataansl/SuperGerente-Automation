# 🚀 SuperGerente - Testes E2E com Cypress

Projeto de automação de testes End-to-End utilizando Cypress para validação das funcionalidades do sistema SuperGerente, com foco nos módulos de autenticação, financeiro e sistema.

---

## 📌 Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js
* Mochawesome Reporter
* Mocha JUnit Reporter

---

## 📁 Estrutura do projeto

```
cypress/
 ├── e2e/
 │   ├── autenticacao/
 │   ├── financeiro/
 │   └── sistema/
 ├── fixtures/
 ├── pages/
 └── support/
```

---
### 🔐 Autenticação

* Login
* Recuperação de senha

### 💰 Financeiro

* Categorias (CRUD)
* Centro de Custo (CRUD)
* Contas (CRUD)
* Contas a Pagar
* Contas a Receber
* Contatos

### ⚙️ Sistema

* Módulos
* Validação de títulos existentes

---

## ⚙️ Clone o repositório:

```
git clone https://github.com/hmaxsoftware/hmax-tester.git
```

---

## ▶️ Como executar os testes

Abrir interface do Cypress:

```
npx cypress open
```

Executar em modo headless:

```
npx cypress run
```

---

## 🌍 Execução por ambiente

O projeto suporta múltiplos ambientes (dev e prod).

Exemplo:

```
npm run cypress:dev
npm run cypress:prod
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```
CYPRESS_username=seu_usuario
CYPRESS_password=sua_senha
```

---

## 📊 Relatórios

Os testes geram relatórios utilizando:

* Mochawesome
* JUnit

Os arquivos são gerados na pasta:

```
cypress/reports/
```

---

## 📸 Evidências

* Screenshots: `cypress/screenshots/`
* Vídeos: `cypress/videos/`

---

## 💡 Boas práticas aplicadas

* Page Object Pattern
* Reutilização de comandos customizados
* Separação por domínio de negócio
* Testes independentes
* Organização escalável

---
