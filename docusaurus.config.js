// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const { SitemapAndIndexStream } = require('sitemap');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TutoRef.com',
  tagline: 'Tutorials and Code Examples_',
  url: 'https://tutoref.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tutoref', // Usually your GitHub org/user name.
  projectName: 'tutoref', // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-126228996-1',
          anonymizeIP: true,
        },
      }),
    ],
  ], 
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'daily',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'tutoref.com',
        logo: {
          alt: 'tutoref.com',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Home',
          },
          {
            label: 'Java',
            to: '/java/',
          },
          {
            label: 'Software Quality',
            to: '/software-quality/',
          },
          {
            label: 'Miscellaneous',
            to: '/miscellaneous/',
          },
          {
            label: 'Cybersecurity',
            to: '/cybersecurity/',
          },
          {
            label: 'Tags',
            href: '/tags/',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Java',
                to: '/java/',
              },
              {
                label: 'Software Quality',
                to: '/software-quality/',
              },
              {
                label: 'Miscellaneous',
                to: '/miscellaneous/',
              },
              {
                label: 'Tags',
                to: '/tags/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/tutoref',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Online Tools',
                to: '/tools/',
              },
              {
                label: 'Common Problems',
                href: '/common-exceptions-and-errors/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tutoref.com Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java']
      },
    }),
    // custom scripts
    scripts: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true,
        'data-ad-client': 'ca-pub-8667333994890115',
      },
    ],
};

module.exports = config;

