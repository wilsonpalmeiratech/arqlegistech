# 📋 Requisitos Funcionais e Não Funcionais — Sistema ArqLegisTech RDC-Arq

## 1. Finalidade

Documentar os requisitos funcionais e não funcionais implementados no backend ArqLegisTech, com base nos aportes legais e arquivísticos exigidos para repositórios confiáveis digitais (RDC-Arq), conforme Resolução nº 51/CONARQ, Modelo OAIS, e demais normas correlatas.

---

## 2. Requisitos Funcionais

| Função Arquivística                             | Implementação Técnica                        | Referência Normativa / Teórica                   |
|--------------------------------------------------|-----------------------------------------------|--------------------------------------------------|
| Ingestão de SIPs                                 | `/sip/ingestao`                               | OAIS (Ingest), Res. 51/CONARQ                    |
| Registro de eventos PREMIS                       | `/premis/registrar`                           | PREMIS, Res. 51, e-ARQ Brasil                    |
| Preservação digital / ações arquivísticas        | `/preservacao/adicionar`                      | OAIS, Res. 51, Res. 37                           |
| Migração de formatos preserváveis                | `/migracao/executar`                          | OAIS, Res. 51, ISO 14721                         |
| Controle de versões documentais                  | MongoDB: `versoes[]`                          | e-ARQ Brasil, Res. 51                            |
| Verificação de integridade                       | `/seguranca/verificar_hash`                   | Res. 37, ISO/IEC 27001                           |
| Registro em blockchain                           | `/seguranca/registrar_blockchain`            | Res. 51                                          |
| Assinatura digital e verificação                 | `/assinatura/assinar`, `/verificar`          | Res. 37, LGPD                                    |
| Exportação arquivística interoperável            | `/oai/*`, `gerar_mets`, `gerar_json`         | OAIS, METS, DC, e-ARQ                            |
| Controle por nível de sigilo documental          | Campo `nivelSigilo`, filtragem nas rotas      | LGPD, Res. 37                                    |
| Gerência de propriedade intelectual              | `/propriedade/atualizar`, `/visualizar`      | e-ARQ Brasil                                     |

---

## 3. Requisitos Não Funcionais

| Requisito                                          | Aplicação                                     | Referência                                      |
|----------------------------------------------------|-----------------------------------------------|--------------------------------------------------|
| Segurança da informação                            | JWT + escopo + proteção de rotas              | ISO/IEC 27001, LGPD                             |
| Confidencialidade e acesso por perfil              | `verificar_permissao()`, controle por escopo  | LGPD, Res. 51, e-ARQ                            |
| Rastreabilidade e auditabilidade                  | Eventos PREMIS com agente, ação e timestamp   | PREMIS, ISO/IEC 27001                           |
| Interoperabilidade técnica                         | OAI-PMH, METS, Dublin Core                    | OAIS, Res. 51                                   |
| Modularidade de arquitetura                        | Separação por `controllers` e `services`     | Boas práticas SGSI                              |
| Escalabilidade e clareza de interface              | Documentação OpenAPI, escopo por rota         | ISO/IEC 27001                                   |
