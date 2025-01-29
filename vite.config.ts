import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import type { PreRenderedAsset } from 'rollup';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['source/**/*.ts', 'source/**/*.tsx'],
      exclude: ['source/**/*.css', 'source/**/*.stories.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './source/index.ts'),
      name: '@donghyun/ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
        assetFileNames: (assetInfo: PreRenderedAsset): string => {
          if (assetInfo.name === 'ui.css') {
            return 'style.css';
          }
          return assetInfo.name || 'unknown.file'; // 항상 string을 반환하도록 수정
        },
      },
    },

    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './source'),
    },
  },
});
