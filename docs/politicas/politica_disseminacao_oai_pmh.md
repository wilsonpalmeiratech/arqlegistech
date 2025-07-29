# 🔐 Política de Disseminação Arquivística via Protocolo OAI-PMH

## 1. Finalidade

Estabelecer critérios arquivísticos, técnicos e legais para o controle da disseminação de metadados e objetos arquivísticos digitais através do protocolo OAI-PMH.

---

## 2. Justificativa

- Documentos arquivísticos permanentes podem conter **dados sensíveis ou sigilosos**, sendo vedada sua exposição automática.
- O modelo OAIS define que a disseminação deve ocorrer via DIP conforme perfil de acesso autorizado.
- A Resolução nº 51/CONARQ reforça que o RDC-Arq deve aplicar critérios de restrição com base em avaliação documental.

---

## 3. Regras de Disseminação via OAI-PMH

- Apenas documentos com `nivelSigilo: "publico"` e `oaiHabilitado: True` são expostos via OAI-PMH.
- Perfis com escopo `oai_pmh.visualizar` podem acessar os endpoints controlados.
- Toda disseminação gera um evento PREMIS (`tipoEvento: "Disseminação"`), contendo agente, data/hora e justificativa.

---

## 4. Referências Normativas

- Resolução nº 37/CONARQ — Classificação por nível de sigilo
- Resolução nº 51/CONARQ — Requisitos de preservação e acesso
- OAIS (ISO 14721) — Gerência de Dissemination Information Package
- LGPD — Controle e exposição de dados pessoais
