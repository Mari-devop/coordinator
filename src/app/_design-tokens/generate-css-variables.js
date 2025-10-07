const fs = require('fs'); // eslint-disable-line @typescript-eslint/no-require-imports
const path = require('path'); // eslint-disable-line @typescript-eslint/no-require-imports

const tokensPath = path.join(__dirname, 'tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function generateCSSVariables(obj, prefix = '') {
  let cssVars = '';
  
  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      cssVars += generateCSSVariables(value, varName);
    } else {
      cssVars += `  --${varName}: ${value};\n`;
    }
  }
  
  return cssVars;
}

const cssVariables = generateCSSVariables(tokens);

const cssContent = `/* Design Tokens - Auto-generated from tokens.json */
:root {
${cssVariables}
}

[data-theme="dark"] {
  --primary-50: #0C4A6E;
  --primary-100: #075985;
  --primary-200: #0369A1;
  --primary-300: #0284C7;
  --primary-400: #0EA5E9;
  --primary-500: #38BDF8;
  --primary-600: #7DD3FC;
  --primary-700: #BAE6FD;
  --primary-800: #E0F2FE;
  --primary-900: #F0F9FF;
  
  --secondary-50: #0F172A;
  --secondary-100: #1E293B;
  --secondary-200: #334155;
  --secondary-300: #475569;
  --secondary-400: #64748B;
  --secondary-500: #94A3B8;
  --secondary-600: #CBD5E1;
  --secondary-700: #E2E8F0;
  --secondary-800: #F1F5F9;
  --secondary-900: #F8FAFC;
  
  --neutral-50: #171717;
  --neutral-100: #262626;
  --neutral-200: #404040;
  --neutral-300: #525252;
  --neutral-400: #737373;
  --neutral-500: #A3A3A3;
  --neutral-600: #D4D4D4;
  --neutral-700: #E5E5E5;
  --neutral-800: #F5F5F5;
  --neutral-900: #FAFAFA;
}
`;

const outputPath = path.join(__dirname, 'design-tokens.css');
fs.writeFileSync(outputPath, cssContent);

console.log('✅ Design tokens CSS generated successfully!');
console.log(`📁 Output: ${outputPath}`);
console.log(`📊 Generated ${cssVariables.split('\n').filter(line => line.includes('--')).length} CSS variables`);
