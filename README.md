# 🔐 Authentication Nest Backend

Este projeto foi desenvolvido com o objetivo de dominar os conceitos de autenticação e segurança no ecossistema **NestJS**. A aplicação implementa um sistema de gestão de usuários onde a segurança é prioridade, utilizando guardas de rota para proteger informações sensíveis.

---

## 🛠️ Tecnologias e Arquitetura

O projeto utiliza o que há de melhor no desenvolvimento server-side com Node.js:

* **NestJS**: Framework progressivo para construção de aplicações escaláveis.
* **TypeScript**: Tipagem estática para maior segurança e produtividade no código.
* **Auth Guards**: Implementação de segurança a nível de controlador para proteção de rotas.
* **Arquitetura Modular**: Divisão clara entre os módulos de `Auth` e `Usuario`.

---

## ✨ Funcionalidades

* **Proteção de Rotas**: Uso do `@UseGuards(AuthGuard)` para garantir que apenas usuários autenticados acessem os endpoints.
* **CRUD de Usuários**: Sistema completo para Criar, Ler, Atualizar e Deletar usuários (POST, GET, PATCH, DELETE).
* **Validação de Dados**: Estrutura preparada para validação de entradas através de DTOs e Entities.

---

## 📂 Estrutura de Pastas

O código está organizado seguindo as melhores práticas do NestJS:
- `src/auth`: Lógica de autenticação e validação de tokens.
- `src/usuario`: Gerenciamento da entidade de usuário e regras de negócio.
- `src/photo`: Módulo adicional para gestão de mídias/fotos.

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/feliipenevesnow/authentication-nest-backend.git](https://github.com/feliipenevesnow/authentication-nest-backend.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie a aplicação:**
    ```bash
    # Modo desenvolvimento
    npm run start:dev
    ```

---

## 👨‍💻 Desenvolvedor

**Felipe Neves**
📍 Presidente Epitácio - SP
