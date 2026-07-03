"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const discord_rpc_1 = require("discord-rpc");
const CLIENT_ID = "1522544700844933160";
const ICONS_BASE = "https://raw.githubusercontent.com/iCrawl/discord-vscode/master/assets/icons";
const LANG_ASSETS = {
    autohotkey: `${ICONS_BASE}/ahk.png`,
    android: `${ICONS_BASE}/android.png`,
    angular: `${ICONS_BASE}/angular.png`,
    ansible: `${ICONS_BASE}/ansible.png`,
    applescript: `${ICONS_BASE}/applescript.png`,
    arduino: `${ICONS_BASE}/arduino.png`,
    asciidoc: `${ICONS_BASE}/asciidoc.png`,
    asp: `${ICONS_BASE}/asp.png`,
    assembly: `${ICONS_BASE}/assembly.png`,
    astro: `${ICONS_BASE}/astro.png`,
    autoit: `${ICONS_BASE}/autoit.png`,
    babel: `${ICONS_BASE}/babel.png`,
    bat: `${ICONS_BASE}/bat.png`,
    bazel: `${ICONS_BASE}/bazel.png`,
    bower: `${ICONS_BASE}/bower.png`,
    brainfuck: `${ICONS_BASE}/brainfuck.png`,
    c: `${ICONS_BASE}/c.png`,
    c3: `${ICONS_BASE}/c3.png`,
    cargo: `${ICONS_BASE}/cargo.png`,
    clojure: `${ICONS_BASE}/clojure.png`,
    cmake: `${ICONS_BASE}/cmake.png`,
    cobol: `${ICONS_BASE}/cobol.png`,
    coffeescript: `${ICONS_BASE}/coffee.png`,
    cpp: `${ICONS_BASE}/cpp.png`,
    crystal: `${ICONS_BASE}/crystal.png`,
    csharp: `${ICONS_BASE}/csharp.png`,
    css: `${ICONS_BASE}/css.png`,
    cuda: `${ICONS_BASE}/cuda.png`,
    cython: `${ICONS_BASE}/cython.png`,
    d: `${ICONS_BASE}/d.png`,
    dart: `${ICONS_BASE}/dart.png`,
    delphi: `${ICONS_BASE}/delphi.png`,
    dockerfile: `${ICONS_BASE}/docker.png`,
    docker: `${ICONS_BASE}/docker.png`,
    ejs: `${ICONS_BASE}/ejs.png`,
    elixir: `${ICONS_BASE}/elixir.png`,
    elm: `${ICONS_BASE}/elm.png`,
    erlang: `${ICONS_BASE}/erlang.png`,
    fortran: `${ICONS_BASE}/fortran.png`,
    fsharp: `${ICONS_BASE}/fsharp.png`,
    gatsby: `${ICONS_BASE}/gatsbyjs.png`,
    gleam: `${ICONS_BASE}/gleam.png`,
    glsl: `${ICONS_BASE}/glsl.png`,
    gml: `${ICONS_BASE}/gml.png`,
    go: `${ICONS_BASE}/go.png`,
    godot: `${ICONS_BASE}/godot.png`,
    gradle: `${ICONS_BASE}/gradle.png`,
    graphql: `${ICONS_BASE}/graphql.png`,
    groovy: `${ICONS_BASE}/groovy.png`,
    handlebars: `${ICONS_BASE}/handlebars.png`,
    haskell: `${ICONS_BASE}/haskell.png`,
    haxe: `${ICONS_BASE}/haxe.png`,
    hlsl: `${ICONS_BASE}/hlsl.png`,
    html: `${ICONS_BASE}/html.png`,
    java: `${ICONS_BASE}/java.png`,
    javascript: `${ICONS_BASE}/js.png`,
    jinja: `${ICONS_BASE}/jinja.png`,
    json: `${ICONS_BASE}/json.png`,
    jsx: `${ICONS_BASE}/jsx.png`,
    julia: `${ICONS_BASE}/julia.png`,
    jupyter: `${ICONS_BASE}/jupyter.png`,
    kotlin: `${ICONS_BASE}/kotlin.png`,
    latex: `${ICONS_BASE}/latex.png`,
    less: `${ICONS_BASE}/css.png`,
    lisp: `${ICONS_BASE}/lisp.png`,
    lua: `${ICONS_BASE}/lua.png`,
    makefile: `${ICONS_BASE}/makefile.png`,
    markdown: `${ICONS_BASE}/markdown.png`,
    nim: `${ICONS_BASE}/nim.png`,
    nix: `${ICONS_BASE}/nix.png`,
    objectivec: `${ICONS_BASE}/objc.png`,
    ocaml: `${ICONS_BASE}/ocaml.png`,
    pascal: `${ICONS_BASE}/pascal.png`,
    perl: `${ICONS_BASE}/perl.png`,
    php: `${ICONS_BASE}/php.png`,
    powershell: `${ICONS_BASE}/powershell.png`,
    prolog: `${ICONS_BASE}/prolog.png`,
    protobuf: `${ICONS_BASE}/protobuf.png`,
    pug: `${ICONS_BASE}/pug.png`,
    python: `${ICONS_BASE}/python.png`,
    r: `${ICONS_BASE}/r.png`,
    reason: `${ICONS_BASE}/reason.png`,
    ruby: `${ICONS_BASE}/ruby.png`,
    rust: `${ICONS_BASE}/cargo.png`,
    sass: `${ICONS_BASE}/css.png`,
    scala: `${ICONS_BASE}/scala.png`,
    scss: `${ICONS_BASE}/css.png`,
    shellscript: `${ICONS_BASE}/shell.png`,
    bash: `${ICONS_BASE}/shell.png`,
    shell: `${ICONS_BASE}/shell.png`,
    sql: `${ICONS_BASE}/sql.png`,
    svelte: `${ICONS_BASE}/svelte.png`,
    svg: `${ICONS_BASE}/svg.png`,
    swift: `${ICONS_BASE}/swift.png`,
    terraform: `${ICONS_BASE}/terraform.png`,
    toml: `${ICONS_BASE}/toml.png`,
    tsx: `${ICONS_BASE}/tsx.png`,
    typescript: `${ICONS_BASE}/ts.png`,
    v: `${ICONS_BASE}/v.png`,
    vue: `${ICONS_BASE}/vue.png`,
    wasm: `${ICONS_BASE}/wasm.png`,
    xml: `${ICONS_BASE}/xml.png`,
    yaml: `${ICONS_BASE}/yaml.png`,
    yml: `${ICONS_BASE}/yaml.png`,
    zig: `${ICONS_BASE}/zig.png`,
    plaintext: `${ICONS_BASE}/idle.png`,
    gitignore: `${ICONS_BASE}/git.png`,
    env: `${ICONS_BASE}/env.png`,
    editorconfig: `${ICONS_BASE}/editorconfig.png`,
    eslint: `${ICONS_BASE}/eslint.png`,
    firebase: `${ICONS_BASE}/firebase.png`,
};
const LANG_MAP = {
    typescriptreact: "typescript",
    javascriptreact: "javascript",
    cmaketxt: "cmake",
    "cmake-cache": "cmake",
};
function getLangId(langId) {
    return LANG_MAP[langId] || langId;
}
function detectLangFromFile(fileName) {
    const lower = fileName.toLowerCase();
    if (lower === "cmakelists.txt")
        return "cmake";
    if (lower === "dockerfile")
        return "dockerfile";
    if (lower === "makefile")
        return "makefile";
    if (lower === ".gitignore")
        return "gitignore";
    if (lower === ".env")
        return "env";
    if (lower.endsWith(".cmake"))
        return "cmake";
    if (lower.endsWith(".toml"))
        return "toml";
    if (lower.endsWith(".yaml") || lower.endsWith(".yml"))
        return "yaml";
    return null;
}
function getLangName(langId, fileName) {
    let id = getLangId(langId);
    if (id === "plaintext" && fileName) {
        const detected = detectLangFromFile(fileName);
        if (detected)
            id = detected;
    }
    const names = {
        javascript: "JavaScript",
        typescript: "TypeScript",
        python: "Python",
        java: "Java",
        csharp: "C#",
        cpp: "C++",
        c: "C",
        go: "Go",
        rust: "Rust",
        ruby: "Ruby",
        php: "PHP",
        swift: "Swift",
        kotlin: "Kotlin",
        html: "HTML",
        css: "CSS",
        scss: "SCSS",
        json: "JSON",
        yaml: "YAML",
        markdown: "Markdown",
        xml: "XML",
        sql: "SQL",
        bash: "Bash",
        shell: "Shell",
        dockerfile: "Docker",
        lua: "Lua",
        r: "R",
        scala: "Scala",
        dart: "Dart",
        elixir: "Elixir",
        haskell: "Haskell",
        jsx: "React JSX",
        tsx: "React TSX",
        vue: "Vue",
        svelte: "Svelte",
        toml: "TOML",
        ini: "INI",
        makefile: "Makefile",
        cmake: "CMake",
    };
    return names[id] || langId.charAt(0).toUpperCase() + langId.slice(1);
}
function getLangAsset(langId, fileName) {
    let id = getLangId(langId);
    if (id === "plaintext" && fileName) {
        const detected = detectLangFromFile(fileName);
        if (detected)
            id = detected;
    }
    return LANG_ASSETS[id] || "vscode_logo";
}
class VisualRPC {
    constructor(context) {
        this.context = context;
        this.rpc = null;
        this.enabled = true;
        this.codingStartTime = Date.now();
        this.isCoding = false;
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
        this.statusBarItem.text = "$(pulse) Discord: Connecting...";
        this.statusBarItem.tooltip = "Discord Rich Presence";
        this.statusBarItem.show();
        context.subscriptions.push(this.statusBarItem);
    }
    async activate() {
        const config = vscode.workspace.getConfiguration("visualrpc");
        this.enabled = config.get("enabled", true);
        console.log("VisualRPC: Activating, enabled =", this.enabled);
        if (!this.enabled) {
            this.statusBarItem.text = "$(circle-slash) Discord: Disabled";
            return;
        }
        await this.connect();
        vscode.window.onDidChangeActiveTextEditor(() => this.updatePresence(), null, this.context.subscriptions);
        vscode.workspace.onDidSaveTextDocument(() => this.updatePresence(), null, this.context.subscriptions);
        vscode.window.onDidChangeTextEditorSelection(() => this.updatePresence(), null, this.context.subscriptions);
    }
    async connect() {
        try {
            console.log("VisualRPC: Connecting to Discord...");
            this.rpc = new discord_rpc_1.Client({ transport: "ipc" });
            this.rpc.on("ready", () => {
                console.log("VisualRPC: Connected to Discord!");
                this.statusBarItem.text = "$(check) Discord: Connected";
                this.statusBarItem.tooltip = "Discord: Connected";
                this.updatePresence();
            });
            this.rpc.on("disconnected", () => {
                console.log("VisualRPC: Disconnected from Discord");
                this.statusBarItem.text = "$(warning) Discord: Disconnected";
                this.statusBarItem.tooltip = "Discord: Disconnected";
            });
            await this.rpc.login({ clientId: CLIENT_ID });
            console.log("VisualRPC: Login successful");
        }
        catch (err) {
            console.error("VisualRPC: Failed to connect to Discord", err);
            this.statusBarItem.text = "$(error) Discord: Failed";
            this.statusBarItem.tooltip = `Discord: ${String(err)}`;
            setTimeout(() => this.connect(), 30000);
        }
    }
    async reconnect() {
        if (this.rpc) {
            try {
                await this.rpc.destroy();
            }
            catch { }
        }
        this.statusBarItem.text = "$(sync~spin) Discord: Reconnecting...";
        await this.connect();
    }
    getWorkspaceName() {
        const folders = vscode.workspace.workspaceFolders;
        if (folders && folders.length > 0) {
            return folders[0].name;
        }
        return "No Workspace";
    }
    async updatePresence() {
        if (!this.rpc || !this.enabled) {
            console.log("VisualRPC: updatePresence skipped, rpc =", !!this.rpc, "enabled =", this.enabled);
            return;
        }
        console.log("VisualRPC: updatePresence called");
        const editor = vscode.window.activeTextEditor;
        const workspace = this.getWorkspaceName();
        const presence = {
            largeImageKey: `${ICONS_BASE}/idle.png`,
            largeImageText: "Visual Studio Code",
            instance: false,
            type: 3,
        };
        if (editor) {
            if (!this.isCoding) {
                this.codingStartTime = Date.now();
                this.isCoding = true;
            }
            const document = editor.document;
            const fileName = document.fileName.split("/").pop() || document.fileName.split("\\").pop() || "Unknown";
            const langId = document.languageId;
            const langName = getLangName(langId, fileName);
            const langAsset = getLangAsset(langId, fileName);
            presence.details = workspace;
            presence.state = `${fileName} • ${langName}`;
            presence.largeImageKey = langAsset;
            presence.largeImageText = langName;
        }
        else {
            this.isCoding = false;
            presence.details = workspace;
            presence.state = "Idle";
            presence.largeImageKey = `${ICONS_BASE}/idle.png`;
            presence.largeImageText = "Visual Studio Code";
        }
        presence.startTimestamp = this.isCoding ? this.codingStartTime : undefined;
        try {
            await this.rpc.setActivity(presence);
        }
        catch (err) {
            console.error("VisualRPC: Failed to set activity", err);
        }
    }
    enable() {
        this.enabled = true;
        vscode.workspace.getConfiguration("visualrpc").update("enabled", true, true);
        this.statusBarItem.text = "$(check) Discord: Connected";
        this.updatePresence();
    }
    disable() {
        this.enabled = false;
        vscode.workspace.getConfiguration("visualrpc").update("enabled", false, true);
        if (this.rpc) {
            this.rpc.clearActivity();
        }
        this.statusBarItem.text = "$(circle-slash) Discord: Disabled";
    }
    async deactivate() {
        if (this.rpc) {
            try {
                await this.rpc.clearActivity();
                await this.rpc.destroy();
            }
            catch { }
        }
        this.statusBarItem.dispose();
    }
}
let rpc;
async function activate(context) {
    rpc = new VisualRPC(context);
    context.subscriptions.push(vscode.commands.registerCommand("visualrpc.enable", () => rpc.enable()));
    context.subscriptions.push(vscode.commands.registerCommand("visualrpc.disable", () => rpc.disable()));
    context.subscriptions.push(vscode.commands.registerCommand("visualrpc.reconnect", () => rpc.reconnect()));
    await rpc.activate();
}
async function deactivate() {
    if (rpc) {
        await rpc.deactivate();
    }
}
//# sourceMappingURL=extension.js.map