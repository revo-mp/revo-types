# Revo types

TypeScript declarations for Revo. These packages contain declarations only. Revo provides the runtime APIs.

| Package | API |
| --- | --- |
| `@revomp/types-shared` | `revo-shared` |
| `@revomp/types-client` | `revo-client`, including shared types |
| `@revomp/types-server` | `revo-server`, including shared types |
| `@revomp/types-natives` | `natives`, including client types |
| `@revomp/types-webview` | `revo` and `window.revo` in WebView pages |

Install the package for your environment. For client scripts:

```sh
npm install --save-dev @revomp/types-client
```

Select it in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@revomp/types-client"]
  }
}
```

Client and server scripts use separate TypeScript projects. For native calls, select `@revomp/types-natives`. It also loads the client declarations. WebView projects need the `DOM` library.
