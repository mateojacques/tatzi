# AGENTS.md - Tatzi

## Project Overview

Tatzi is a React Native + Expo mobile app (SDK 54) for discovering tattoo artists.
Built with React 19, React Native 0.81, and TypeScript 5.9.
UI text is in Argentine Spanish. Early-stage prototype (v0.3.0) with mock data only.

## Tech Stack

- **Framework:** React Native 0.81.5 + Expo SDK 54
- **Language:** TypeScript (strict mode via `@react-native/typescript-config`)
- **Navigation:** React Navigation bottom tabs via `react-native-paper/react-navigation`
- **UI Libraries:** React Native Paper, React Native Elements (`@rneui`)
- **Icons:** `react-native-vector-icons` (MaterialCommunityIcons)
- **Fonts:** LeagueSpartan (8 weights, linked via `react-native.config.js`)
- **Testing:** Jest 29 + react-test-renderer
- **Linting:** ESLint (`@react-native` config) + Prettier

## Build / Lint / Test Commands

```bash
# Start Metro bundler
npm start

# Run on platforms
npm run android
npm run ios

# Linting
npm run lint

# Run all tests
npm test

# Run a single test file
npx jest __tests__/App.test.tsx

# Run tests matching a name pattern
npx jest -t "renders correctly"

# Run tests in watch mode
npx jest --watch

# TypeScript type-checking (no build emit - noEmit is set)
npx tsc --noEmit
```

## Project Structure

```
App.tsx                 # Root component (SafeAreaProvider + NavigationContainer)
Navigation.tsx          # Bottom tab navigator (4 tabs)
index.js                # Entry point (registerRootComponent)
screens/                # Screen components (one per tab)
  HomeScreen.tsx
  FeedScreen.tsx
  DesignsScreen.tsx
  ProfileScreen.tsx
components/             # Reusable components
  home/                 # Home screen components
  layout/               # Layout components (TopBar)
utils/
  constants.ts          # Fonts, colors, design tokens
  helpers.ts            # Pure utility functions
  mock.ts               # Hardcoded mock data (artists, styles, works)
assets/
  fonts/                # LeagueSpartan font files
  images/               # Banner images
__tests__/              # Test files
```

## Code Style Guidelines

### Formatting (Prettier)

Configured in `.prettierrc.js`:

- Single quotes (`'`)
- No bracket spacing (`{foo}` not `{ foo }`)
- Trailing commas everywhere
- Arrow parens avoided (`x => x` not `(x) => x`)
- JSX closing bracket on same line (`bracketSameLine: true`)

### Imports

- `React` is imported explicitly: `import React from 'react'`
- React Native modules are destructured: `import {View, Text, StyleSheet} from 'react-native'`
- Use relative paths for local imports (no path aliases configured)
- Order: React first, then external packages, then local modules
- No barrel exports / index files

### Components

- Use arrow function components: `const MyComponent = () => { ... }`
- Exception: `App.tsx` uses a `function` declaration with explicit `React.JSX.Element` return type
- One component per file
- `export default` at the bottom of the file (not inline)

### Naming Conventions

- **Components & files:** PascalCase (`TattooArtistCard.tsx`, `HomeScreen.tsx`)
- **Variables & functions:** camelCase (`filterTattooListBySelectedStyle`)
- **Constants:** SCREAMING_SNAKE_CASE (`ACCENT`, `BOLD_FONT`, `TEXT_DARK`)
- **Screen files:** `<Name>Screen.tsx`
- **Component directories:** group by feature (`home/`, `layout/`)

### Styling

- Use `StyleSheet.create()` defined at the bottom of the file, after the component
- Style object name is always `styles`
- Inline styles only for dynamic/conditional values
- Color theme: dark backgrounds (`#111`), white text (`#fff`), red accent (`#EF5350`)
- Design tokens live in `utils/constants.ts`

### TypeScript

- `strict` mode is enabled in tsconfig
- The codebase currently uses `any` extensively for props and state - prefer defining
  proper interfaces/types when adding or modifying code
- Component props should use named interfaces: `interface MyComponentProps { ... }`
- Use `React.JSX.Element` as the return type when explicitly typing components

### State Management

- Local state only via `useState` hooks
- No global state management library is configured
- All data currently comes from `utils/mock.ts` (no API calls)

### Error Handling

- No error boundaries or try/catch patterns are currently in place
- When adding error-prone code (API calls, async operations), wrap in try/catch
- Use optional chaining and nullish coalescing for safe property access

### Testing

- Test files go in `__tests__/` directory at project root
- Use `react-test-renderer` for component rendering tests
- Import test utilities explicitly: `import {it} from '@jest/globals'`
- Test preset is `react-native` (configured in `jest.config.js`)

### Commit Style

- Imperative mood, descriptive messages
- No conventional commit prefixes (no `feat:`, `fix:`, etc.)
- Examples: "Add tabs to profile screen", "Create basic setup and mocked explore section"

## Key Configurations

- **`.npmrc`**: `legacy-peer-deps=true` - required for dependency installation
- **`tsconfig.json`**: extends `@react-native/typescript-config` (strict, noEmit, bundler moduleResolution)
- **`.eslintrc.js`**: extends `@react-native`
- **`babel.config.js`**: uses `babel-preset-expo`
- **`metro.config.js`**: uses Expo's default Metro config

## Important Notes

- No CI/CD is configured
- No git hooks or lint-staged
- No path aliases - all imports use relative paths
- `key.jks` is in the repo root (Android keystore) - do not commit secrets
- A `home_banner_image.png` exists in `screens/` but is imported via `assets/images/`
- Node >= 18 is required (specified in `engines`)
