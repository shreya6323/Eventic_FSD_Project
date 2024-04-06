const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://eventicbackendfinal-production.up.railway.app/',  // Update the port if necessary
            changeOrigin: true,
          
        })
    );
};



