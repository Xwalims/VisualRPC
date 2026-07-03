# VisualRPC

Discord Rich Presence для Visual Studio Code — покажи миру что ты кодишь!

## Как выглядит

```
┌─────────────────────────────────┐
│  [иконка языка]  MyProject      │
│                  index.ts • TS  │
│          12:34 elapsed          │
└─────────────────────────────────┘
```

## Возможности

- Автоматическое определение языка программирования
- Иконка текущего языка из [discord-vscode](https://github.com/iCrawl/discord-vscode)
- Название файла и языка в статусе
- Название проекта
- Время кодинга
- 100+ языков программирования

## Установка

### Через VSIX

1. Скачай `visualrpc-1.0.0.vsix` из релизов
2. `Ctrl+Shift+P` → **Extensions: Install from VSIX...**
3. Выбери скачанный файл
4. Перезапусти VS Code

### Через терминал

```bash
code --install-extension visualrpc-1.0.0.vsix
```

### Из исходников

```bash
git clone https://github.com/Xwalims/VisualRPC.git
cd VisualRPC
npm install
npm run build
npx vsce package
code --install-extension visualrpc-1.0.0.vsix
```

## Требования

- VS Code 1.74+
- Discord Desktop (запущенный)

## Поддерживаемые языки

<details>
<summary>Нажми чтобы развернуть полный список</summary>

AutoHotkey, Android, Angular, Ansible, AppleScript, Arduino, Assembly, Astro, AutoIt, Babel, Batch, Bazel, Bower, Brainfuck, C, C3, Cargo (Rust), Clojure, CMake, COBOL, CoffeeScript, C++, Crystal, C#, CSS, CUDA, Cython, D, Dart, Delphi, Docker, EJS, Elixir, Elm, Erlang, Fortran, F#, Gleam, GLSL, GML, Go, Godot, Gradle, GraphQL, Groovy, Handlebars, Haskell, Haxe, HLSL, HTML, Java, JavaScript, Jinja, JSON, JSX, Julia, Jupyter, Kotlin, LaTeX, Lua, Makefile, Markdown, Nim, Nix, Objective-C, OCaml, Pascal, Perl, PHP, PowerShell, Prolog, Protobuf, Pug, Python, R, Reason, Ruby, Rust, Scala, SCSS, Shell, SQL, Svelte, SVG, Swift, Terraform, TOML, TSX, TypeScript, Vue, WASM, XML, YAML, Zig и много других!

</details>

## Настройка

Расширение работает из коробки без настройки. Просто установи и пользуйся.

## Лицензия

MIT
