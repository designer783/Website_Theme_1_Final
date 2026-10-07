import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import {ROUTES} from './src/routes';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

// Static hosting (cPanel/Apache): write dist/<page>.html for every route so each URL is a
// real HTML file with its own <title>. The .htaccess serves /pricing from pricing.html,
// strips trailing slashes, and falls back to the home page for anything else.
function staticPagesPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'static-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
      for (const { path: routePath, title } of Object.values(ROUTES)) {
        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`)
          .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(title)}$2`);
        const file = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`;
        fs.writeFileSync(path.join(outDir, file), html);
      }
      fs.writeFileSync(
        path.join(outDir, '.htaccess'),
        [
          'Options -MultiViews',
          'DirectoryIndex index.html',
          'RewriteEngine On',
          'RewriteBase /',
          '# Remove trailing slash: /pricing/ -> /pricing',
          'RewriteCond %{REQUEST_FILENAME} !-d',
          'RewriteCond %{REQUEST_URI} ^(.+)/$',
          'RewriteRule ^ %1 [R=301,L]',
          '# Clean URLs: /pricing -> pricing.html',
          'RewriteCond %{REQUEST_FILENAME}.html -f',
          'RewriteRule ^(.+)$ $1.html [L]',
          '# Serve real files and folders as-is',
          'RewriteCond %{REQUEST_FILENAME} -f [OR]',
          'RewriteCond %{REQUEST_FILENAME} -d',
          'RewriteRule ^ - [L]',
          '# Anything else falls back to the home page',
          'RewriteRule ^ index.html [L]',
          '',
        ].join('\n'),
      );
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin(), staticPagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
