import {defineConfig} from 'tsup';

export default defineConfig(() => {
  const entry = ['src/index.ts'];

  return {
    entry,
    outDir: 'dist',
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
  };
});
