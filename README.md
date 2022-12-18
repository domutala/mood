# mood

## install

Ouvrir le shell dans le répertoire `src`

```bash
git clone git://github.com/domutala/mood
```

## use

### dans main.ts

```typescript
import { Mood, init } from "@mood/index";

const app = init();

// ...

app.mount("#app");
```

### dans le fichier style.scss

```scss
@import "@mood/styles/main";
@import "path-to-your-vars"; // importer les variables ici s'il y'a lieu
@import "@mood/styles/all";
// ...
```
