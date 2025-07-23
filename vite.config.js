// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: [
//       '@babel/runtime/helpers/extends',
//       '@babel/runtime/helpers/defineProperty',
//       '@babel/runtime/helpers/slicedToArray',
//       '@babel/runtime/helpers/objectWithoutProperties',
//     ],
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       manifest: {
//         name: 'Youth Camp Anniversary 2025',
//         short_name: 'YouthCamp',
//         start_url: '/',
//         display: 'standalone',
//         theme_color: '#ffffff',
//         background_color: '#ffffff',
//         icons: [
//           {
//             src: '/web-app-manifest-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: '/web-app-manifest-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './', // ✅ This line is key for Vercel static deployment
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Youth Camp Anniversary 2025',
        short_name: 'YouthCamp',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


