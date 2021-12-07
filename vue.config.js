const path = require('path')
const fs = require('fs')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        { loader: 'html-loader' },
        { loader: 'markdown-loader' },
      ],
    })

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/404.html',
            '/about',
            '/project',
            '/projects',
            ...fs.readdirSync('./src/contents').map(file => {
              const [fileName] = file.split('.')
              return fileName
            }).map(
              i => [`/project/${i}`, `/work/${i}`]
            ).flat(),
          ],
          renderer: new Renderer({ renderAfterDocumentEvent: 'render-event' }),
          postProcess (renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
        })
      )
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/assets/css/base/_base.sass\'',
      },
    },
  },
}
