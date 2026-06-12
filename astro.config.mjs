import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { readFile, writeFile, glob } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const site = process.env.PUBLIC_SITE_URL ?? "https://fuki618.github.io";
const base = process.env.PUBLIC_SITE_BASE ?? "/tokumaru-new-design";

/** 配信中サイト（live-snapshot）とビルド成果物のHTML表現を揃える後処理。
 *  - コメント除去: 配信版はHTMLコメントを含まない（src内の <!-- ═══ --> 区切りは維持するため後処理で除去）
 *  - viewBox→viewbox: Astroコンパイラがsvg属性名をcamelCaseへ正規化するため、配信版の小文字表記に後処理で合わせる
 *  - x-init / x-bind:class 属性値のエンティティ化（& < > → &amp; &lt; &gt;）: 配信版のシリアライズ表現に一致させる
 *  - fonts URLの & → &amp;: 同上（Astroは静的属性のエンティティをデコードして出力するため後処理で付与）
 *  いずれもブラウザのHTMLパース結果（DOM）は変わらない、表記レベルの正規化。 */
const matchLiveHtmlSerialization = () => ({
  name: "match-live-html-serialization",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const root = fileURLToPath(dir);
      for await (const entry of glob("**/*.html", { cwd: root })) {
        const path = join(root, entry);
        const html = await readFile(path, "utf-8");
        let out = html.replace(/<!--[\s\S]*?-->/g, "");
        out = out.replace(/viewBox=/g, "viewbox=");
        out = out.replace(/ (x-init|x-bind:class)="([^"]*)"/g, (_, name, val) =>
          ` ${name}="${val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}"`,
        );
        out = out.replace(/wght@400;700&display=swap/g, "wght@400;700&amp;display=swap");
        if (out !== html) await writeFile(path, out);
      }
    },
  },
});

export default defineConfig({
  site,
  base,
  integrations: [sitemap(), matchLiveHtmlSerialization()],
  vite: {
    plugins: [tailwindcss()],
  },
});
