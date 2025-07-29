# 🎛️ Perfis de Acesso e Escopos Técnicos — Integração Frontend Angular

## 1. Finalidade

Facilitar o controle de visibilidade e ações na interface Angular com base nos escopos autorizados em JWT, garantindo segurança e funcionalidade por perfil.

---

## 2. Perfis

| Perfil       | Descrição                       |
|--------------|----------------------------------|
| `admin`      | Acesso total                    |
| `arquivista` | Técnico arquivístico autorizado |
| `visitante`  | Leitura restrita                |

---

## 3. Escopos recomendados

```ts
// Exemplo Angular
if (userToken.includes("preservacao.adicionar")) {
  this.exibirBotaoPreservacao = true;
}
