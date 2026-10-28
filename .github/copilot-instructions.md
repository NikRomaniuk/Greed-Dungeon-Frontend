# Commit Message Guidelines

When generating commit messages, you MUST strictly follow the Conventional Commits specification.

## Anatomy:
<type>(<scope>): <short description>
[optional full description]

## Allowed Types and Usage:
- `feat`: A new feature for the user (e.g., `feat(auth): add dark mode toggle`)
- `fix`: A bug fix (e.g., `fix(api): resolve crash on login`)
- `refactor`: A code change that neither fixes a bug nor adds a feature (e.g., `refactor(auth): simplify user auth logic`)
- `docs`: Documentation only changes (e.g., `docs(readme): update API endpoints list`)
- `style`: Changes that do not affect the meaning of the code (formatting, spaces) (e.g., `style(header): fix indentation in header`)
- `perf`: A code change that improves performance (e.g., `perf(images): optimize image loading speed`)
- `test`: Adding missing tests or correcting existing tests (e.g., `test(payment): add unit tests for payment gateway`)
- `chore`: Other changes that don't modify src or test files (e.g., `chore(deps): remove old temp files`)
- `build`: Changes that affect the build system or external dependencies (e.g., `build(deps): update react version to 18.2`)
- `ci`: Changes to CI configuration files and scripts (e.g., `ci(github): add auto-deploy to staging`)

Always write the description in imperative mood ("add", "fix", not "added" or "fixes"). Keep the short description under 50 characters.
Include an optional scope in parentheses if the change is isolated to a specific module or package, e.g., `fix(ui): ...`.