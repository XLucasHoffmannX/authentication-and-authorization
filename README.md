# Autenticação e Autorização com NestJS

Este repositório contém uma aplicação de exemplo desenvolvida com [NestJS](https://nestjs.com/) que demonstra a implementação de diferentes modelos de controle de acesso:

- **RBAC (Role-Based Access Control)**: Controle baseado em papéis, onde permissões são atribuídas a funções.
- **ABAC (Attribute-Based Access Control)**: Controle baseado em atributos do usuário, do recurso ou do contexto da requisição.
- **ACL (Access Control List)**: Lista de controle de acesso com permissões explícitas por recurso e operação.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [`@nestjs/jwt`](https://docs.nestjs.com/security/authentication#jwt-functionality) para autenticação via JWT
- [Prisma ORM](https://www.prisma.io/) para acesso ao banco de dados
- Banco de dados (ex: PostgreSQL) rodando em container Docker
- [CASL](https://casl.js.org/) para gerenciamento de regras de autorização (ABAC/RBAC/ACL)
- TypeScript

## Objetivo

Demonstrar e compreender, além de aplicar estratégias robustas de autorização (RBAC, ABAC, ACL) integradas com autenticação baseada em JWT, utilizando Prisma para persistência e Docker para infraestrutura de banco.

## Referência
Conteúdo aplicado pelo Professor Luiz Argentina repositório oficial https://github.com/devfullcycle/live-imersao-22-nestjs-auth-rbac-abac-acl e aplicado na vídeo aula https://www.youtube.com/watch?v=_ZyX4Vcofek