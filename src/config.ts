import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Linson's Blog",
	subtitle: "学习技术 改变人生",
	themeColor: {
		hue: 275, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,//已关闭
		src: "/Celestia.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		   {
		     src: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>'
		//   theme: 'light',
		//   sizes: '32x32',
		   }
	], 
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Series,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/1inson", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		/*{
			name: "开往",
			url: "https://www.travellings.cn/train.html",
			external: true,
		},*/
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/' 原assets/images/demo-avatar.png,可选https://q2.qlogo.cn/headimg_dl?dst_uin=189563385&spec=0
	name: "Linson",
	bio: "学习技术，记录成长",
	links: [
		/*{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},*/
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/1inson",
		},
		/*{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/yCENzh",
		},
		{
			name: "开往",
			icon: "fa6-solid:train-subway",
			url: "https://www.travellings.cn/train.html",
		},*/
		{
			name: "LinkedIn",
		    icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/%E6%98%8E%E6%A3%AE-%E6%9E%97-linson/",
		},
		
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
