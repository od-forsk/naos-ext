# NAOS Extension

[![Version](https://img.shields.io/visual-studio-marketplace/v/forsk-sas.naos)](https://marketplace.visualstudio.com/items?itemName=forsk-sas.naos)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/forsk-sas.naos)](https://marketplace.visualstudio.com/items?itemName=forsk-sas.naos)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/forsk-sas.naos)](https://marketplace.visualstudio.com/items?itemName=forsk-sas.naos)

NAOS Extension to manage your **NAOS** deployments directly from Visual Studio Code.

NAOS (Network as a Service) is a platform for Radio Access Network (RAN) management and network optimization. This extension provides a comprehensive interface for managing services, users, teams, instances, projects, workspaces, jobs, geofiles, coverages, and artifacts within your NAOS environment.

## Installation

### From Visual Studio Code Marketplace

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "NAOS"
4. Click "Install" on the NAOS extension by forsk-sas

### From VSIX Package

1. Download the latest `.vsix` file from the [releases page](https://github.com/od-forsk/naos-ext/releases)
2. Open Visual Studio Code
3. Open Command Palette (Ctrl+Shift+P)
4. Run `Extensions: Install from VSIX...`
5. Select the downloaded `.vsix` file

## Getting Started

### 1. Configure NAOS Gateway URL

Before using the extension, you need to configure the NAOS gateway URL:

1. Open VS Code Settings (Ctrl+,)
2. Search for "naos.gatewayURL"
3. Set the URL to your NAOS deployment (e.g., `http://localhost:9090/v1/`)
4. For basic authentication, format your URL like: `http://admin:admin@127.0.0.1:9090/v1/`

Alternatively, you can:
- Use the [Configuration link](vscode://settings/naos.gatewayURL) for quick access
- Open Command Palette (Ctrl+Shift+P) and run `Preferences: Open Settings` and search for "naos"

### 2. Access NAOS Views

1. Click on the NAOS icon in the Activity Bar (left sidebar)
2. Explore the different views:
   - **Services**: Monitor NAOS services status
   - **Users**: Manage user accounts
   - **Teams**: Organize users into teams
   - **Instances**: Manage NAOS instances
   - **Workareas**: Handle projects and workspaces
   - **Geofiles**: Manage geographical data files
   - **Jobs**: Create and monitor jobs
   - **Coverages**: Handle coverage data
   - **Artifacts**: Manage build artifacts

### 3. Interactive Walkthrough

For a guided introduction, access the built-in walkthrough:
1. Open Command Palette (Ctrl+Shift+P)
2. Run `Help: Open Walkthrough`
3. Select "Get Started with NAOS"

## Features

### 🔍 Resource Management Views
- **View container** and dedicated **views** for monitoring services, users, teams, instances, projects, workspaces, jobs, geofiles, coverages, artifacts
- **Copy ID** command available on NAOS views items for easy reference
- **Delete** commands for user, team, instance, project, workspace, job, geofile, coverage, artifact

### 📄 Document Content Provider
- **TextDocumentContentProvider** for user, team, instance, job, run, task, project, workspace, geofile, coverage, artifact, messages
- Click on any NAOS view item to open its API JSON representation in a new editor tab
- Real-time data viewing with formatted JSON output

### ✏️ Create and Update Operations
- **Create / Update** commands for user, team, instance, job, project, workspace, coverage, geofile
- Context-aware operations based on whether an ID is provided (update) or not (create)

### 🔧 Development Tools
- **Snippets** for user, team, instance, job, project, workspace, geofile in `*.naos` files
- JSON **validation** of `*.naos` files with:
  - Properties completion (IntelliSense)
  - Embedded documentation on mouse hover
  - Schema-based validation for all NAOS resource types

### ⚡ Task Integration
- **Task Provider** for "naos-job" VS Code tasks
- Display of Task messages during naos-job task execution via WebSockets
- Real-time job monitoring and logging
- Command to abort running jobs

### ⚙️ Configuration & Logging
- [**Configuration**](vscode://settings/naos.gatewayURL) auto reload
- Creation of JWT tokens in the user view for authentication
- **NAOS-ext output log channel** for debugging and monitoring
- Configurable minimum log level for task messages

<!-- Screenshots placeholder - Add screenshots showing the extension in action -->
<!-- ![NAOS Extension Overview](images/naos-overview.png) -->
<!-- ![NAOS Views](images/naos-views.png) -->
<!-- ![JSON Validation](images/json-validation.png) -->

## Usage

### Working with NAOS Files

The extension supports various NAOS file types with JSON validation and snippets:

1. **Create a new NAOS file**: Create a file with the pattern `*.{type}.naos` where `{type}` can be:
   - `user.naos` - User definitions
   - `team.naos` - Team configurations
   - `instance.naos` - NAOS instance settings
   - `job.naos` - Job definitions
   - `project.naos` - Project configurations
   - `workspace.naos` - Workspace settings
   - `geofile.naos` - Geographical data files
   - `coverage.naos` - Coverage data

2. **Use snippets**: In any `.naos` file, start typing the resource type (e.g., "user", "team") and use IntelliSense (Ctrl+Space) to insert templates

3. **Validate and edit**: The extension provides real-time validation, auto-completion, and hover documentation

4. **Publish changes**: Use the cloud upload button in the editor title or run the "NAOS: POST or PUT to NAOS" command to apply changes

### Managing Resources

#### Users
- Add new users via the "+" button in the Users view
- Generate JWT tokens for authentication
- Delete users when no longer needed
- View user details by clicking on any user item

#### Teams
- Create teams and manage membership
- Add/remove users from teams
- Organize access control and permissions

#### Jobs
- Create and configure jobs using `.job.naos` files
- Run jobs directly from the Jobs view
- Monitor job execution with real-time task messages
- Abort running jobs if needed

#### Instances
- Provision and manage NAOS instances
- Configure instance parameters
- Monitor instance status and health

### VS Code Tasks Integration

Create VS Code tasks for NAOS jobs:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "naos-job",
            "jobId": "your-job-id-here",
            "priority": 5,
            "label": "Run NAOS Job",
            "group": "build"
        }
    ]
}
```

## Configuration

The extension provides several configuration options accessible via VS Code Settings:

### Required Settings

| Setting | Description | Default | Example |
|---------|-------------|---------|---------|
| `naos.gatewayURL` | URL of the NAOS gateway | `http://localhost:9090/v1/` | `http://naos.example.com:9090/v1/` |

### Optional Settings

| Setting | Description | Default | Range |
|---------|-------------|---------|-------|
| `naos.messages.minloglevel` | Minimum log level for task messages | `20` | `0-50` |

### Authentication

For deployments requiring authentication, include credentials in the gateway URL:
```
http://username:password@your-naos-host:9090/v1/
```

### Network Configuration

Ensure your VS Code environment can reach the NAOS gateway:
- Check firewall settings
- Verify network connectivity
- Confirm the NAOS gateway is accessible and running

## Requirements

### System Requirements
- Visual Studio Code version 1.79.0 or higher
- An accessible NAOS deployment to connect to

### NAOS Deployment
You need a running NAOS deployment with:
- NAOS Gateway accessible via HTTP/HTTPS
- Proper network connectivity from your development environment
- Valid authentication credentials (if required)

No additional software installation is required on the client side.

## Development

### Building from Source

1. **Clone the repository**:
   ```bash
   git clone https://github.com/od-forsk/naos-ext.git
   cd naos-ext
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the extension**:
   ```bash
   npm run compile
   ```

4. **Run linting**:
   ```bash
   npm run lint
   ```

5. **Run tests**:
   ```bash
   npm test
   ```

### Development Workflow

1. **Open in VS Code**: Open the project folder in VS Code
2. **Debug**: Press F5 to launch a new Extension Development Host window
3. **Make changes**: Edit the source code in the `src` directory
4. **Watch mode**: Use `npm run watch` for automatic recompilation
5. **Test**: Verify changes in the Extension Development Host

### Project Structure

```
├── src/                    # TypeScript source code
│   ├── extension.ts        # Main extension entry point
│   ├── naosclient/         # Generated NAOS API client
│   ├── treeProviders/      # Tree view providers for different resources
│   └── test/               # Test files
├── schemas/                # JSON schemas for validation
├── resources/              # Icons and images
├── snippets.json          # Code snippets definitions
└── package.json           # Extension manifest
```

### Generating API Client

The NAOS API client is generated from OpenAPI specifications:

```bash
npm run genclient
```

This requires a running NAOS deployment at `http://localhost:9090/v1/openapi.json`.

### Building Distribution Package

To create a `.vsix` package for distribution:

```bash
npm run package
```

## Contributing

We welcome contributions to the NAOS Extension! Here's how you can help:

### Reporting Issues

1. Check existing [issues](https://github.com/od-forsk/naos-ext/issues) to avoid duplicates
2. Provide detailed information including:
   - VS Code version
   - Extension version
   - NAOS deployment version
   - Steps to reproduce
   - Expected vs actual behavior

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes following the existing code style
4. Add or update tests as needed
5. Run linting and tests: `npm run lint && npm test`
6. Commit with clear messages
7. Push to your fork and submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Maintain existing code formatting (use provided ESLint configuration)
- Add JSDoc comments for public APIs
- Write tests for new functionality
- Update documentation as needed

## License

This project is licensed under the terms specified in the [LICENSE.md](LICENCE.md) file.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes and version information.

## Support

- **Issues**: Report bugs and request features on [GitHub Issues](https://github.com/od-forsk/naos-ext/issues)
- **Documentation**: Additional documentation available in the [repository wiki](https://github.com/od-forsk/naos-ext/wiki)
- **Community**: Join discussions in the repository's discussion section

## Related Links

- [NAOS Platform Documentation](https://github.com/od-forsk/naos-ext/wiki)
- [VS Code Extension Development Guide](https://code.visualstudio.com/api)
- [Forsk SAS](https://www.forsk.com/) - Extension publisher

---

**Made with ❤️ by the Forsk SAS team**
