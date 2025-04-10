// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          hid: "meta-pixel",
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '357461123910430');
            fbq('track', 'PageView');
          `,
          type: "text/javascript",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "meta-pixel": ["innerHTML"],
      },
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=357461123910430&ev=PageView&noscript=1" />`,
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "nuxt-svgo",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Raleway: {
            wght: [300, 400, 500, 600, 700, 800],
          },
        },
      },
    ],
  ],
  svgo: {
    autoImportPath: "./public/svg",
  },
});
