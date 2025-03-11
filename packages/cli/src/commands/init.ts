import chalk from "chalk";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface InitOptions {
  template: string;
}

/**
 * Initialize a new web extension project
 * @param name Project name
 * @param options Command options
 */
export async function initCommand(
  name: string = "my-extension",
  options: InitOptions
): Promise<void> {
  const projectDir = join(process.cwd(), name);

  console.log(
    chalk.blue("Creating project directory:"),
    chalk.green(projectDir)
  );

  try {
    // Create project directory
    await mkdir(projectDir, { recursive: true });

    // Create basic project structure based on template
    if (options.template === "basic") {
      await createBasicTemplate(projectDir);
    } else {
      console.log(
        chalk.yellow(
          `Template "${options.template}" not found, using basic template instead.`
        )
      );
      await createBasicTemplate(projectDir);
    }

    console.log(chalk.green("✓"), "Project initialized successfully!");
    console.log();
    console.log("Next steps:");
    console.log(chalk.blue(`  cd ${name}`));
    console.log(chalk.blue("  npm install"));
    console.log(chalk.blue("  npm run dev"));
  } catch (error) {
    console.error(chalk.red("Error initializing project:"), error);
    process.exit(1);
  }
}

/**
 * Create a basic web extension template
 * @param projectDir Project directory
 */
async function createBasicTemplate(projectDir: string): Promise<void> {
  const files = [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: projectDir.split("/").pop(),
          version: "0.1.0",
          description: "Web Extension created with ExtKit",
          scripts: {
            dev: "extkit dev",
            build: "extkit build",
            pack: "extkit pack",
          },
          dependencies: {},
          devDependencies: {
            "@extkit/cli": "^0.1.0",
          },
        },
        null,
        2
      ),
    },
    {
      path: "manifest.json",
      content: JSON.stringify(
        {
          manifest_version: 3,
          name: projectDir.split("/").pop(),
          version: "0.1.0",
          description: "Web Extension created with ExtKit",
          action: {
            default_popup: "popup.html",
            default_icon: {
              "16": "icons/icon16.png",
              "48": "icons/icon48.png",
              "128": "icons/icon128.png",
            },
          },
          icons: {
            "16": "icons/icon16.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png",
          },
          permissions: [],
        },
        null,
        2
      ),
    },
    {
      path: "popup.html",
      content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Extension Popup</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <div class="container">
    <h1>My Extension</h1>
    <p>This is a web extension created with ExtKit.</p>
  </div>
  <script src="popup.js"></script>
</body>
</html>`,
    },
    {
      path: "popup.css",
      content: `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 300px;
  padding: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #333;
  font-size: 18px;
}

p {
  color: #666;
  font-size: 14px;
  text-align: center;
}`,
    },
    {
      path: "popup.js",
      content: `// Popup script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Popup loaded');
});`,
    },
    {
      path: "README.md",
      content: `# ${projectDir.split("/").pop()}

A web extension created with ExtKit.

## Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Package for distribution
npm run pack
\`\`\`
`,
    },
  ];

  // Create directories
  await mkdir(join(projectDir, "icons"), { recursive: true });

  // Create files
  for (const file of files) {
    await writeFile(join(projectDir, file.path), file.content);
    console.log(chalk.green("✓"), `Created ${file.path}`);
  }
}
