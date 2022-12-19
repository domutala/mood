import type { App } from "vue";

function onRouteChange() {
  setTitle();

  const metasName = ["title", "og:title", "description", "og:description"];
  const head = document.querySelector("head") as HTMLHeadElement;

  for (const name of metasName) {
    const meta = head.querySelector(`meta[name='${name}']`) as HTMLMetaElement;
    if (meta) meta.remove();
  }
}

function setTitle(text = "", appName?: string) {
  const head = document.querySelector("head") as HTMLHeadElement;
  let el = head.querySelector("title");
  if (!el) {
    el = document.createElement("title");
    head.appendChild(el);
  }

  if (appName) text = text ? `${text} - ${appName}` : appName;

  el.innerHTML = text;
}

function setMeta(name: string, content: string) {
  const head = document.querySelector("head") as HTMLHeadElement;
  let meta = head.querySelector(`meta[name='${name}']`) as HTMLMetaElement;

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    head.appendChild(meta);
  }

  meta.content = content;
}

export function useMeta({
  title,
  appName,
  metas,
}: {
  title?: string;
  appName?: string;
  metas?: { name: string; content: string }[];
} = {}) {
  setTitle(title, appName);

  if (metas) {
    for (const meta of metas) {
      setMeta(meta.name, meta.content);
    }
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$mood.useMeta = useMeta;
    app.mixin({
      mounted() {
        if (!app.config.globalProperties.$moodMetaInit) {
          app.config.globalProperties.$moodMetaInit = true;
          this.$watch("$router.currentRoute", onRouteChange, { deep: true });
        }
      },
    });
  },
};
