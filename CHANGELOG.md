# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.3] - 2025-12-02
### Changed
- chore: remove react-native-pdf-lib to fix Android build (continued)
- chore: bump release to 0.1.3 for build stability

## [0.1.2] - 2025-12-02
### Changed
- chore: remove react-native-pdf-lib due to unresolved Maven dependency (com.tom_roush:pdfbox-android:1.8.9.1)
- chore: reinstall dependencies and apply Android local fixes to enable clean builds

## [0.1.1] - YYYY-MM-DD
### Changed
- chore: switch to vanilla JS — removed TypeScript artifacts and consolidated package.json
- chore: updated devDependencies for React Native CLI and tooling

## [0.1.0] - 2025-12-02

### Added
- Initial repository setup with Git and branch protection strategy
- Professional README.md emphasizing privacy-first architecture and LMHC reporting
- Comprehensive .gitignore for React Native projects
- Development branch workflow (main as stable, development for active work)
- Conventional Commits validation via Husky pre-commit hooks
- GitHub Actions workflow for automated SemVer and CHANGELOG management (Release Please)
- Project roadmap and Phase 0 completion

### Changed
- N/A

### Fixed
- N/A
