# Emanon

Emanon é um editor de legendas desktop inspirado no [Aegisub](http://www.aegisub.org/), construído com [Tauri](https://tauri.app/), [Solid.js](https://www.solidjs.com/) e [Tailwind CSS](https://tailwindcss.com/). O objetivo é oferecer uma alternativa moderna, leve e multiplataforma para criação, estilização e sincronização de legendas (fansubbing, karaokê, timing, typesetting, etc).

> ⚠️ Projeto em estágio inicial de desenvolvimento. A base da interface (menubar, tema claro/escuro, tokens de cores) já está sendo construída; funcionalidades de edição de legenda ainda não existem.

## Stack

- **[Tauri 2](https://tauri.app/)** — runtime desktop nativo (Rust) com bundle leve e APIs de sistema.
- **[Solid.js](https://www.solidjs.com/)** — UI reativa, sem virtual DOM.
- **[Kobalte](https://kobalte.dev/)** — componentes acessíveis headless (menubar, dialogs, etc).
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilização utilitária, com tokens de tema (light/dark) via CSS variables.
- **[Vite](https://vitejs.dev/)** — bundler/dev server do frontend.
- **[Bun](https://bun.sh/)** — gerenciador de pacotes e runtime.

## Pré-requisitos

- [Bun](https://bun.sh/) instalado.
- Toolchain do [Rust](https://www.rust-lang.org/tools/install) (necessário para compilar o Tauri).
- Dependências de sistema do Tauri para o seu SO ([guia oficial](https://v2.tauri.app/start/prerequisites/)).

## Como rodar

```bash
# instalar dependências
bun install

# subir em modo desenvolvimento (abre janela nativa via Tauri)
bun run tauri dev

# apenas o frontend (sem janela nativa), útil para iterar UI rápido
bun run dev
```

## Build

```bash
bun run tauri build
```

Os binários/instaladores gerados ficam em `src-tauri/target/release/bundle`.

## Estrutura do projeto

```
src/                  # frontend (Solid.js)
├── components/        # componentes de UI (menubar, etc)
├── styles/            # tokens de tema e estilos globais (Tailwind)
├── main.tsx           # componente raiz da aplicação
└── index.tsx          # entry point (render no DOM)

src-tauri/             # backend nativo (Rust) e configuração do Tauri
├── src/                # código Rust
└── tauri.conf.json     # configuração da janela, bundle, permissões
```

## Roadmap

Marcos planejados para chegar a uma alternativa funcional ao Aegisub. A ordem pode mudar conforme o projeto evolui.

### Fase 0 — Base da aplicação
- [x] Setup do projeto (Tauri + Solid + Tailwind)
- [x] Menubar e sistema de tema (light/dark, tokens de cor)
- [ ] Estrutura de janelas/painéis (layout redimensionável estilo Aegisub)

### Fase 1 — Edição de legendas (MVP)
- [ ] Importar/exportar `.ass`/`.ssa` e `.srt`
- [ ] Grid de eventos (lista de linhas de legenda com tempos, estilo, ator, texto)
- [ ] Edição de texto de linha com tags básicas de estilo (`\b`, `\i`, `\c`, etc)
- [ ] Undo/redo
- [ ] Atalhos de teclado essenciais

### Fase 2 — Player e sincronização
- [ ] Preview de vídeo integrado
- [ ] Timeline de áudio (waveform) para ajuste fino de tempo
- [ ] Snap de tempos entre eventos
- [ ] Atalhos de timing (estilo Aegisub: marcar início/fim com player rodando)

### Fase 3 — Estilização e typesetting
- [ ] Editor visual de estilos (fonte, cor, contorno, sombra, posicionamento)
- [ ] Preview em tempo real do estilo aplicado sobre o frame do vídeo
- [ ] Suporte a tags avançadas de ASS (`\pos`, `\move`, `\clip`, `\t`, etc)

### Fase 4 — Karaokê
- [ ] Modo karaokê (split silábico, tags `\k`/`\kf`/`\ko`)
- [ ] Visualização de karaokê na timeline

### Fase 5 — Automação e extensibilidade
- [ ] Sistema de scripts/automação (equivalente aos Automation scripts do Aegisub)
- [ ] Templates de efeitos reutilizáveis
- [ ] Plugins/extensões da comunidade

### Fase 6 — Qualidade de vida
- [ ] Verificação ortográfica
- [ ] Assistente de tradução/edição colaborativa
- [ ] Configurações de perfil de teclado/atalhos customizáveis
- [ ] Internacionalização da interface (i18n)

## Contribuindo

Contribuições são bem-vindas! Como o projeto ainda está em fase inicial, é uma boa oportunidade para ajudar a moldar a arquitetura desde o começo.

### Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch a partir da `master`: `git checkout -b feat/minha-feature`.
3. Rode o projeto localmente (`bun install` + `bun run tauri dev`) e valide sua alteração.
4. Faça commits pequenos e descritivos.
5. Abra um Pull Request explicando o que foi feito e por quê.

### Diretrizes

- Priorize consistência com os padrões já existentes no código (Solid.js idiomático, Tailwind para estilos, tokens de cor definidos em `src/styles/main.css`).
- Evite adicionar dependências novas sem necessidade clara.
- PRs grandes/estruturais são mais fáceis de revisar se vierem acompanhados de uma breve descrição da motivação/design.
- Para features maiores (itens do roadmap, novas telas), abra uma issue antes para alinhar abordagem.

### Reportando bugs

Abra uma issue descrevendo:
- Passos para reproduzir.
- Comportamento esperado vs. observado.
- Sistema operacional e versão do app.

## Licença

[MIT](./LICENSE)
