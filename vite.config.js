import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@babel/runtime/helpers/extends', '@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/helpers/objectWithoutProperties'],
  },
});

