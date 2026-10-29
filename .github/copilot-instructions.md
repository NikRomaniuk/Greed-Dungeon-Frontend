# Commit Message Guidelines

At a glance:

- **Must** follow the Conventional Commits specification.
- A commit message has an ordered structure: **header → blank line → body → blank line → footers**.
- The header is one line; everything below the first blank line is a separate part of the message.
- Write descriptions in imperative mood ("add", "fix", not "added" or "fixes").
- Keep the short description under 50 characters.

## 1. Commit Message Anatomy

```text
<type>(<scope>): <short description>     ← header (1 line, required)
                                         ← blank line (required before a body)
<detailed description>                   ← body (multi-line, optional)
                                         ← blank line (required before footers)
<footer(s)>                              ← footers (optional)
```

| Part | Required | Purpose |
|------|----------|---------|
| Header | Yes | `type`, optional `(scope)`, `short description` — the one-line summary |
| Body | No | The **detailed description**: what exactly changed and for which entities |
| Footers | No | Breaking changes, issue refs, co-authors, etc. |

The blank line after the header is not cosmetic: it is the delimiter that separates the short description from the detailed description. Without it, all the following text is still part of the header (subject), not a body.

## 2. Allowed Types

| Type | When to use | Example |
|------|-------------|---------|
| `feat` | A new feature for the user | `feat(auth): add dark mode toggle` |
| `fix` | A bug fix | `fix(api): resolve crash on login` |
| `refactor` | A code change that neither fixes a bug nor adds a feature | `refactor(auth): simplify user auth logic` |
| `docs` | Documentation only changes | `docs(readme): update API endpoints list` |
| `style` | Changes that do not affect the meaning of the code (formatting, spaces) | `style(header): fix indentation in header` |
| `perf` | A code change that improves performance | `perf(images): optimize image loading speed` |
| `test` | Adding missing tests or correcting existing tests | `test(payment): add unit tests for payment gateway` |
| `chore` | Other changes that don't modify src or test files | `chore(deps): remove old temp files` |
| `build` | Changes that affect the build system or external dependencies | `build(deps): update react version to 18.2` |
| `ci` | Changes to CI configuration files and scripts | `ci(github): add auto-deploy to staging` |

Rules for the header: `type` is required and lowercase; `(scope)` is optional and names the module or package the change is isolated to; the `short description` is required, imperative, has no trailing period, and stays under 50 characters.

## 3. Detailed Description (body)

**Where it goes.** The detailed description is the commit message *body*. It is the block of text that starts after the blank line that follows the header, and ends before the optional footer block. It is a separate part of the message — not a continuation or a wrapping of the short description.

```text
feat(hero): add typed DTOs for state transfer   ← header (ended here)
                                                ← blank line (required)
Add typed DTO interface for:                    ← body starts here
- Hero (Create, Response)
- HeroMemento (Snapshot, Restore)               ← body ends here
                                                ← blank line (required)
Refs: #128                                      ← footer
```

**When to use it.** Add a detailed description whenever the change touches more than one thing: several entities, components, DTOs, payload shapes, or variations of the same feature — or when a one-line summary genuinely cannot carry the detail. For a single, obvious change, omit the body entirely.

**How to format it:**

1. Start with a single introductory sentence in imperative mood, ending with a colon. It announces what the list below contains (e.g. `Add typed DTO interface for:`).
2. List each affected entity on its own line, starting with a bullet `- `.
3. In parentheses after the entity, name the specific types / payload shapes affected (e.g. `- User (Create, Response)`).
4. Keep one bullet per entity — do not merge several entities or variations into a single bullet.

Do not put the short description, type, or scope inside the body, and do not repeat the header text there.

## 4. Footers

Place footers after the body, separated from it by a blank line (or directly after the header's blank line when there is no body). Typical footers:

```text
BREAKING CHANGE: <what broke and how to migrate>
Refs: #123
Co-authored-by: Name <email@example.com>
```

## 5. Full Reference Example

```text
perf(floor): cache floor chamber layout

Extract layout generation into a memoized helper and reuse it across
render passes:

- Floor (Chamber, Corridor)
- FloorService (getLayout, invalidate)

Refs: #141
```

Header (1 line) → blank line → detailed description (intro sentence + bullets) → blank line → footer.

## 6. Checklist

Before generating a commit message, verify:

- [ ] `type` is one of the allowed types and is lowercase.
- [ ] `(scope)` is included when the change is isolated to a specific module or package.
- [ ] The short description uses imperative mood and stays under 50 characters.
- [ ] A blank line separates the header from the detailed description.
- [ ] The detailed description is present when multiple entities/components/variations are affected.
- [ ] The detailed description opens with an imperative sentence ending in a colon, followed by one bullet per entity with its types in parentheses.
- [ ] A blank line separates the detailed description from any footer.
