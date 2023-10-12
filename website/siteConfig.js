// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const repoUrl = 'https://github.com/scalacenter/course-management-tools'
// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Alpakka',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/alpakka-icon.png',
    infoLink: 'https://github.com/akka/alpakka',
    pinned: true,
  },
  {
    caption: 'Lunatech "Moving from Scala 2 to Scala 3"',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/dotty-logo-white.svg',
    infoLink: 'https://github.com/scalacenter/lunatech-scala-2-to-scala3-course',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Course Management Tools',
  tagline: 'A set of tools to build and maintain\ntraining courses, demos, and POCs.',
  url: 'https://scalacenter.github.io',
  baseUrl: '/course-management-tools/',

  // Documentation source files generated by mdoc
  customDocsPath: "course-management-tools-docs/target/mdoc",

  // Used for publishing and more
  projectName: 'course-management-tools',
  organizationName: 'scalacenter',

  // Algolia DocSearch
  algolia: {
    apiKey: 'ad215f5ba694d2e808dde2e2c3c465f4',
    indexName: 'scalacenter_course-management-tools',
    //appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    // algoliaOptions: {} // Optional, if provided by Algolia
  },

  headerLinks: [
    {doc: 'getting_started', label: 'Docs'},
    {href: repoUrl, label: "GitHub", external: true },
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#00B900',
    secondaryColor: '#00A900',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Course Management Tools`,

  jetbrains: {
    enabled: true,
    icon: 'img/jetbrains.svg',
    targetUrl: 'https://www.jetbrains.com/?from=course-management-tools'
  },

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'github',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/build.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: repoUrl
};

module.exports = siteConfig;
