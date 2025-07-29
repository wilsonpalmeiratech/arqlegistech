# 🌐 Integração Angular ↔ Backend ArqLegisTech — Mapeamento de Rotas

## 1. Finalidade

Facilitar o consumo das APIs do backend ArqLegisTech no frontend Angular (PrimeNG), com base nos escopos, perfis e funções arquivísticas, promovendo segurança, clareza e interoperabilidade.

---

## 2. Estrutura de Rotas por Domínio

| Rota (`/api/v1/...`)        | Escopo               | Função                | Exemplo Angular                        |
|-----------------------------|----------------------|------------------------|----------------------------------------|
| `/oai/list_records`         | `oai_pmh.visualizar` | Disseminação           | Mostrar metadados OAI na interface     |
| `/sip/ingestao`             | `sip.ingerir`        | Ingestão digital       | Formulário de ingestão SIP             |
| `/premis/listar`            | `premis.listar`      | Histórico preservação  | Tabela de eventos por documento        |
| `/preservacao/adicionar`    | `preservacao.adicionar`| Ação preservacional   | Botão "Preservar"                      |
| `/migracao/executar`        | `migracao.realizar`  | Migração preservacional| Migrar para formato PDF/A              |
| `/assinatura/verificar`     | `assinatura.verificar`| Autenticidade         | Verificação de assinatura digital      |
| `/seguranca/verificar_hash` | `seguranca.verificar`| Integridade            | Validar hash SHA-256 na interface      |
| `/propriedade/visualizar`   | `propriedade.visualizar`| Direitos autorais   | Exibir autor/licença no documento      |

---

## 3. Perfis e Comportamentos UI

```ts
if (userToken.includes("preservacao.adicionar")) {
  this.habilitarBotaoPreservar = true;
}
