import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  // Legacy content uses anchors and unescaped quotation marks extensively.
  // Keep those diagnostics visible while retaining errors for broken hooks.
  { rules: {
    '@next/next/no-html-link-for-pages': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react-hooks/set-state-in-effect': 'warn',
    'react-hooks/immutability': 'warn',
  } },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
