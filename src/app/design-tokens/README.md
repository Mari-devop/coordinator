# Design Tokens System

This directory contains the design system tokens that can be easily updated by designers using JSON format.

## 📁 Files

- `tokens.json` - Main design tokens file (designer updates this)
- `generate-css-variables.js` - Script to generate CSS variables
- `tailwind-config.js` - Tailwind configuration based on tokens
- `design-tokens.css` - Generated CSS variables (auto-generated)

## 🎨 How to Use

### For Designers

1. **Update Design Tokens**: Edit `tokens.json` with new colors, spacing, typography, etc.
2. **Run Generation Script**: Execute the script to update CSS variables
3. **Share with Developers**: The updated tokens are automatically applied

### For Developers

1. **Import Generated CSS**: Include `design-tokens.css` in your app
2. **Use CSS Variables**: Reference variables like `var(--primary-500)`
3. **Use Tailwind Classes**: Use generated Tailwind classes like `bg-primary-500`

## 🔧 Scripts

### Generate CSS Variables
```bash
node src/app/design-tokens/generate-css-variables.js
```

### Update Tailwind Config
```bash
# Copy the generated config to your tailwind.config.js
cp src/app/design-tokens/tailwind-config.js tailwind.config.js
```

## 📝 Token Structure

### Colors
```json
{
  "colors": {
    "primary": {
      "50": "#F0F9FF",
      "500": "#0EA5E9",
      "900": "#0C4A6E"
    }
  }
}
```

### Spacing
```json
{
  "spacing": {
    "1": "4px",
    "4": "16px",
    "8": "32px"
  }
}
```

### Typography
```json
{
  "typography": {
    "fontSize": {
      "sm": "14px",
      "base": "16px",
      "lg": "18px"
    }
  }
}
```

## 🎯 Generated CSS Variables

The script automatically generates CSS variables like:
- `--primary-500`
- `--spacing-4`
- `--font-size-base`
- `--shadow-md`

## 🌙 Dark Theme Support

Dark theme overrides are automatically generated in the CSS file, inverting color scales for better dark mode experience.

## 🔄 Workflow

1. Designer updates `tokens.json`
2. Run generation script
3. CSS variables are updated
4. App automatically uses new design tokens
5. No code changes needed for design updates!
