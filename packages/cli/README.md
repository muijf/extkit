# @extkit/cli

CLI tool for the Web Extension Ecosystem Toolkit.

## Installation

### Using npm

```bash
npm install -g @extkit/cli
```

### Using Bun

```bash
bun install -g @extkit/cli
```

## Usage

```bash
extkit --help
```

### Commands

#### Initialize a new web extension project

```bash
extkit init [name] --template <template>
```

Options:

- `--template, -t`: Template to use (default: "basic")

#### Build the web extension

```bash
extkit build --env <environment> --watch
```

Options:

- `--env, -e`: Build environment (default: "production")
- `--watch, -w`: Watch for changes

#### Start development server

```bash
extkit dev --port <port>
```

Options:

- `--port, -p`: Port to use (default: "8000")

#### Package the extension for distribution

```bash
extkit pack --target <target>
```

Options:

- `--target, -t`: Target browser (default: "chrome")

## Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/extkit.git
cd extkit

# Install dependencies
bun install

# Build the CLI
cd packages/cli
bun run build

# Create a binary
bun run build:binary
```

## License

MIT
