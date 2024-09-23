# Change Log

All notable changes to NAOS extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2024-09-23

### Fixed

- Case sensitive json schema names -> validation works on non-Windows OSes.

## [1.0.0] - 2024-09-20

### Added

- Views for monitoring services, users, teams, instances, projects, workspaces, jobs, geofiles, coverages, artifacts
- Copy ID command available in NAOS views items.
- Delete commands for user, team, instance, project, workspace, job, geofile
- TextDocumentContentProvider for user, team, instance, job, run, task, project, workspace, geofile, coverage, artifact, messages
- Create / Update command for user, team, instance, job, project, workspace
- Snippets for user, team, instance, job, project, workspace in XXX.naos files
- JSON validation of XXX.naos files
- Task Provider for "naos-job" vscode tasks
- Display of Task messages during naos-job task execution.
- Configuration auto reload
- NAOS-ext output log channel
