# arqlegistech_backend/documentacao/politica_controle_acesso.md

# 🛡️ Política Institucional de Controle de Acesso Arquivístico — Sistema ArqLegisTech

## 1. Finalidade

Estabelecer diretrizes técnicas, normativas e arquivísticas para o controle de acesso no backend ArqLegisTech, garantindo segurança digital, preservação documental, rastreabilidade e conformidade legal no tratamento de documentos arquivísticos digitais permanentes.

---

## 2. Aportes Normativos e Teóricos

| Referência Normativa / Legal                    | Aplicação                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| **Resolução nº 51/CONARQ (2022)**                | Requisitos mínimos para RDC-Arq e controle de acesso         |
| **Resolução nº 37/CONARQ (2009)**                | Garantia de autenticidade e integridade documental           |
| **Modelo OAIS — ISO 14721**                      | Separação funcional por domínio arquivístico                 |
| **PREMIS — Data Dictionary v3.0**                | Registro de eventos de preservação digital                   |
| **e-ARQ Brasil — Arquivo Nacional**              | Classificação de acesso, ciclo de vida documental            |
| **LGPD — Lei nº 13.709/2018**                    | Tratamento de dados pessoais em acervos arquivísticos        |
| **ISO/IEC 27001:2022**                           | Segurança da informação e escopo técnico por responsabilidade|

---

## 3. Perfis Funcionais e Escopos Técnicos

### 🧑‍⚖️ Perfis de Usuários

| Perfil       | Descrição Técnica                                 |
|--------------|----------------------------------------------------|
| `admin`      | Acesso irrestrito ao sistema e todos os escopos   |
| `arquivista` | Usuário técnico com função arquivística plena     |
| `visitante`  | Usuário restrito, com acesso somente de leitura   |

### 🔐 Escopos por Perfil

```json
{
  "admin": ["*"],
  "arquivista": [
    "documento.visualizar", "documento.criar", "documento.editar", "documento.versionar", "documento.listar",
    "premis.registrar", "premis.listar",
    "preservacao.adicionar",
    "migracao.realizar",
    "seguranca.verificar", "seguranca.registrar",
    "assinatura.criar", "assinatura.verificar",
    "propriedade.editar", "propriedade.visualizar",
    "sip.ingerir",
    "oai_pmh.visualizar",
    "verificar_formato.validar"
  ],
  "visitante": [
    "documento.visualizar", "documento.listar",
    "propriedade.visualizar"
  ]
}
