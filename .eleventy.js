const htmlmin = require('html-minifier');
const pluginNavigation = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const moment = require('moment-timezone');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItEmoji = require('markdown-it-emoji');
const markdownItAttrs = require('markdown-it-attrs');
const pluginTOC = require('eleventy-plugin-toc');
const pluginPWA = require('eleventy-plugin-pwa');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(pluginPWA, {
    clientsClaim: true,
    skipWaiting: true,
  });

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  });

  eleventyConfig.addPassthroughCopy({ './src/assets': './assets' });

  eleventyConfig.addPassthroughCopy({ './src/data/manifest.json': './manifest.json' });

  eleventyConfig.addPassthroughCopy({ './CNAME': './CNAME' });

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now());
  });

  eleventyConfig.addFilter('dateformat', function (dateIn) {
    return moment(dateIn).tz('GMT').format('DD-MM-YYYY');
  });

  eleventyConfig.addFilter('sitemapdateformat', function (dateIn) {
    return moment(dateIn).tz('GMT').format('YYYY-MM-DD');
  });

  eleventyConfig.addFilter('gettheme', function (themes, id) {
    return themes.find(theme => theme.id === id);
  });

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
      .use(markdownItAnchor)
      .use(markdownItEmoji)
      .use(markdownItAttrs),
  );

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'docs',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  };
};
