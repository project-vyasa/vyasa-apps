# project-vyasa/vyasa-apps

This is the frontend monorepo for the Vyasa platform. It contains the unified SvelteKit application which hosts the Vyasa Viewer, Playground, and Studio interfaces.

## Architecture
The application is a pure statically generated (SSG) SvelteKit app optimized for frictionless GitHub Pages deployment.

It dynamically consumes:
1. `@project-vyasa/vyasa-ui` (The component design system library)
2. `@project-vyasa/vyasa-viewer-wasm` (The Rust-compiled `vyasav` viewer runtime)
3. `@project-vyasa/vyasa-compiler-wasm` (The Rust-compiled `vyasac` compiler runtime)

## Local Development
To develop against the platform locally, install the dependencies from the `vyasa-apps` root:
```bash
npm install
```

Start the Vite development server:
```bash
cd apps/platform
npm run dev
```

### Developing Across Repositories
If you are modifying the core Rust crates (`vyasav`, `vyasac`) or the Svelte component library (`vyasa-ui`) and want to test them locally in `vyasa-apps`, use `npm link`.

1. Compile WASM packages:
```bash
cd ../vyasa
./build_wasm.sh
```

2. Link local packages:
```bash
cd ../vyasa-ui/svelte && npm link
cd ../../vyasa/vyasav/pkg && npm link
cd ../../vyasa/vyasac/pkg && npm link

cd ../../vyasa-apps/apps/platform
npm link @project-vyasa/vyasa-ui @project-vyasa/vyasa-viewer-wasm @project-vyasa/vyasa-compiler-wasm
```
