# 🧾 Controle de Versão e Registro de Eventos Arquivísticos — ArqLegisTech

## 1. Finalidade

Estabelecer mecanismos técnicos e arquivísticos para garantir a rastreabilidade, autenticidade e integridade dos documentos digitais preservados.

---

## 2. Versionamento Documental

- Cada documento possui o campo `versoes[]` contendo:
  - `versaoId` (UUID)
  - `arquivo` (path/ID)
  - `modificacao` (timestamp)
  - `usuarioResponsavel`

- Toda nova versão deve ser registrada como evento PREMIS (`tipoEvento: "Versionamento"`)

---

## 3. Eventos de Preservação (PREMIS)

Tipos de eventos recomendados:

| Tipo            | Finalidade                                |
|-----------------|--------------------------------------------|
| `Ingestão`      | Registro de entrada no repositório         |
| `Preservação`   | Ações técnicas de migração ou verificação  |
| `Migração`      | Conversão para formato preservável         |
| `Verificação`   | Cálculo e validação de hash de integridade |
| `Disseminação`  | Exportação via OAI ou API externa          |

---

## 4. Referências

- PREMIS Data Dictionary v3.0
- Resolução nº 37/CONARQ
- e-ARQ Brasil
- ISO 14721 (OAIS)
