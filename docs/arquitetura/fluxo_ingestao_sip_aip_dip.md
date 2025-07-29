
---

### ✅ `# arqlegistech_backend/documentacao/fluxo_ingestao_sip_aip_dip.md`

```markdown
# 📦 Fluxo Arquivístico SIP → AIP → DIP — Modelo OAIS no ArqLegisTech

## 1. Finalidade

Descrever o fluxo técnico-operacional do backend ArqLegisTech para ingestão, preservação e disseminação de objetos arquivísticos digitais, conforme Modelo OAIS.

---

## 2. Etapas do Fluxo

| Fase        | Artefato          | Rotas/API                   | Descrição Técnica                                 |
|-------------|-------------------|-----------------------------|---------------------------------------------------|
| Ingestão    | SIP (Submission)  | `/sip/ingestao`             | Objeto submetido, com metadados mínimos           |
| Preservação | AIP (Archival)    | `versoes[]`, `PREMIS`       | Objeto preservado com metadados, eventos e hash   |
| Disseminação| DIP (Disseminated)| `/oai/get_record`, `gerar_mets` | Objeto disponibilizado conforme perfil de acesso |

---

## 3. Justificativa Arquivística

- OAIS define a separação entre SIP, AIP e DIP como requisito essencial de preservação.
- Resolução nº 51 exige controle de ingestão, preservação e acesso.
- LGPD determina que disseminação deve respeitar sigilo e perfil do usuário.

---

## 4. Registro de Eventos por Fase

- Fase `Ingestão`: tipoEvento = "Ingestão"
- Fase `Preservação`: tipoEvento = "Preservação", "Migração", "Verificação"
- Fase `Disseminação`: tipoEvento = "Disseminação"

Todos os eventos registrados com PREMIS incluem:
- `documento_id`
- `eventoId` (UUID)
- `dataHoraEvento`
- `agenteResponsavel`
- `justificativa`
