import sitemap from "@astrojs/sitemap";
import rehypeFigure from "@microflash/rehype-figure";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import og from "astro-og";
import robotsTxt from "astro-robots-txt";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	site: "https://lucho.cool",
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					rel: ["nofollow, noreferrer"],
					target: "_blank",
				},
			],
			[
				// The ' ' value is the only way to
				// get rid of the class :/
				rehypeFigure,
				{ className: " " },
			],
		],
	},
	integrations: [
		sitemap(),
		robotsTxt(),
		icon({ iconDir: "src/assets/vectors" }),
		og(),
	],
	prefetch: true,
});
