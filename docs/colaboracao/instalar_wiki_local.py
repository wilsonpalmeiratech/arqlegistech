import os

documentos = {
    "README.md": """# 📚 ArqLegisTech — Documentação Institucional Arquivística e Técnica
Esta pasta reúne os artefatos de apoio ao projeto **ArqLegisTech**...
[resumo do conteúdo completo conforme entregas anteriores]
""",

    "politica_controle_acesso.md": """# 🛡️ Política Institucional de Controle de Acesso Arquivístico — Sistema ArqLegisTech
[conteúdo completo gerado anteriormente]
""",

    "requisitos_funcionais_arquivisticos.md": """# 📋 Requisitos Funcionais e Não Funcionais — Sistema ArqLegisTech RDC-Arq
[conteúdo completo gerado anteriormente]
""",

    "mapa_rotas_angular_backend.md": """# 🌐 Integração Angular ↔ Backend ArqLegisTech — Mapeamento de Rotas
[conteúdo completo gerado anteriormente]
""",

    "politica_disseminacao_oai_pmh.md": """# 🔐 Política de Disseminação Arquivística via Protocolo OAI-PMH
[conteúdo completo gerado anteriormente]
""",

    "estrutura_controladores_servicos.md": """# 🧩 Estrutura Técnica: Controladores e Serviços — Backend ArqLegisTech
[conteúdo completo gerado anteriormente]
""",

    "controle_versao_eventos_preservacao.md": """# 🧾 Controle de Versão e Registro de Eventos Arquivísticos — ArqLegisTech
[conteúdo completo gerado anteriormente]
""",

    "perfis_escopos_integracao_frontend.md": """# 🎛️ Perfis de Acesso e Escopos Técnicos — Integração Frontend Angular
[conteúdo completo gerado anteriormente]
""",

    "fluxo_ingestao_sip_aip_dip.md": """# 📦 Fluxo Arquivístico SIP → AIP → DIP — Modelo OAIS no ArqLegisTech
[conteúdo completo gerado anteriormente]
"""
}

pasta = "documentacao_wiki"
os.makedirs(pasta, exist_ok=True)

for nome, conteudo in documentos.items():
    caminho = os.path.join(pasta, nome)
    with open(caminho, "w", encoding="utf-8") as f:
        f.write(conteudo)

print(f"📁 Wiki local criada com sucesso em: ./{pasta}/")
# python instalar_wiki_local.py
