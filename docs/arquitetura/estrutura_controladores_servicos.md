# 🧩 Estrutura Técnica: Controladores e Serviços — Backend ArqLegisTech

## 1. Finalidade

Documentar a estrutura técnica e modular do backend ArqLegisTech, separando controladores HTTP e serviços de negócio para garantir escalabilidade, segurança e rastreabilidade.

---

## 2. Organização

| Camada          | Pasta                             | Função                                    |
|-----------------|------------------------------------|-------------------------------------------|
| Controlador     | `controllers/`                     | Rotas HTTP, escopo JWT, autenticação      |
| Serviço         | `services/`                        | Lógica de negócio, preservação, eventos   |
| Modelo OAIS     | `services/modelo_oais/`            | Implementação do protocolo OAI-PMH, SIP   |

---

## 3. Exemplos

- `controllers/preservacao_controller.py` → aplica `verificar_permissao("preservacao.adicionar")`
- `services/preservacao/preservacao_service.py` → registra eventos de preservação digital

---

## 4. Justificativa

Separar responsabilidades técnicas facilita:

- Auditoria por função
- Testes automatizados por camada
- Aplicação clara de escopos e rastreabilidade
- Conformidade com boas práticas de SGSI e arquitetura segura
