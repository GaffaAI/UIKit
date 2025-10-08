# Gaffa UIKit

Gaffa UIKit is a modern, customizable React component library built with TypeScript and Tailwind CSS. It provides a set of reusable UI components designed for rapid development and consistent design across GaffaAI projects.

## Features

- **Component-Based Architecture:** Includes essential UI components such as Button, Input, Select, Tabs, Tooltip, Popover, BlogCard, and more.
- **TypeScript Support:** Ensures type safety and better developer experience.
- **Tailwind CSS Integration:** Utility-first styling for easy customization.
- **Storybook Integration:** Interactive documentation and component previews.
- **Theming:** Easily configurable themes via `theme.ts`.

## Getting Started

### Installation

#### From GitHub

```bash
npm install github:GaffaAI/UIKit
```

### Usage

Import and use components in your React project:

```tsx
import { Button, Input, BlogCard } from "@gaffaai/uikit";

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Input placeholder="Type here..." />
      <BlogCard title="Sample Blog" content="Lorem ipsum..." />
    </div>
  );
}
```

### Storybook

To view and interact with components:

```bash
npm run storybook
```

## Project Structure

```
src/
  components/
    Button/
    Input/
    BlogCard/
    ...
  hooks/
  theme.ts
  index.ts
  index.css
```

## Build

To build the library for distribution:

```bash
npm run build
```

## Update

To update use

```bash
 npm update @gaffaai/uikit
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

## License

MIT

# UIKit

Gaffa's UI for our mini apps
