# Dashboard Metrics Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Components](#components)
5. [Styling](#styling)
6. [Testing](#testing)

## Overview

The Dashboard Metrics project is a React-based administrative interface that provides visualization of key metrics, user statistics, and analytical data. It features a responsive design, modular components, and comprehensive testing coverage.

### Key Features
- Real-time metrics display
- Interactive charts and graphs
- Responsive layout
- Modular component architecture
- Key component Test coverage
- Styled-components for styling

## Project Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── index.js
│   │   ├── styles.js
│   ├── Header/
│   │   ├── index.js
│   │   ├── styles.js
│   └── MetricsCard/
│       ├── index.js
│       ├── styles.js
├── styles/
│   ├── GlobalStyles.js
│   └── DashboardStyles.js
├── pages/
│   └── Dashboard/
│       ├── index.js
│       ├── styles.js
│       └── index.test.js
└── test/
    ├── setup.js
    └── test-utils.jsx
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Install required dependencies
npm install styled-components recharts 
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event
```

### Development
```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run coverage
```

## Components

### MetricsCard
A reusable card component for displaying individual metrics.

```jsx
<MetricsCard 
  label="Requests"
  value="7,265"
  change="+11.02%"
/>
```

Props:
- `label` (string): Metric name
- `value` (string): Current value
- `change` (string): Percentage change

### Sidebar
Main navigation component.

```jsx
<Sidebar />
```

Features:
- Logo display
- Navigation menu
- User profile section
- Active state handling

### Header
Top bar component with search and actions.

```jsx
<Header />
```

Features:
- Search functionality
- Action buttons (notifications etc.)
- Responsive design

## Styling

The project uses styled-components with a responsive design approach.

### Grid System
```javascript
export const MetricsGrid = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 32px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
`;
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Testing

### Setup
Tests are configured using Vitest and React Testing Library.

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
```

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run coverage
```

## Best Practices

### Component Development
1. Keep components focused and single-responsibility
4. Maintain consistent naming conventions

### Styling
1. Implement responsive design
2. Keep styles modular and component-specific

### Testing
1. Test component rendering
2. Test user interactions

### Performance
1. Optimize re-renders
2. Follow React best practices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
