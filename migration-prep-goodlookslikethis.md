# Preparing GLLT_01 (goodlookslikethis) for migration to the dug-llm account

Written 9 Oct 2026 in the cv-skill repo on the new machine. Paste the section below into a Claude Code session opened in `~/Sites/GLLT_01` on the old machine. The cv-skill migration note (`MIGRATION.md`) was 322 KB because cv-skill had configuration outside the repo. GLLT_01 should need a fraction of that: the global instructions, settings and git excludes are already migrated and apply to every repo on the new machine.

## Method: one repo at a time

Dug is migrating repos individually rather than bulk-copying every harness memory folder. For each repo the steps are:

1. On the old machine, copy `~/.claude/projects/<old-folder-name>/` onto the new machine by hand (AirDrop or USB, not GitHub). Only the `memory/` subfolder is wanted; the `.jsonl` session transcripts that sit beside it are conversation logs and are discarded.
2. On the new machine, a cv-skill session places the memory files at `~/.claude/projects/<new-folder-name>/memory/`. The folder name changes from `-Users-dug-Sites-<repo>` to `-Users-dug-llm-Sites-<repo>`. The Bash sandbox cannot write there, so Claude uses its Write tool.
3. Run the prep instruction below in the old repo, commit, push, clone here.

Memory only loads when a repo exists at the matching path, so placing it before the clone is harmless.

## GLLT_01 memory: already done (9 Oct 2026)

The two files from `~/.claude/projects/-Users-dug-Sites-GLLT-01/memory/` are now at `~/.claude/projects/-Users-dug-llm-Sites-GLLT-01/memory/`, verified identical to the originals:

- `MEMORY.md` (index, one line)
- `github-pages-forces-liquid-on-loose-md.md` (feedback: GitHub Pages renders loose `.md` through Liquid, so literal braces in `CLAUDE.md`, `README.md` or `docs/*.md` break the live build; verify with a GitHub-faithful `jekyll build` before pushing)

The session transcript that came with the drop was discarded. Nothing from the drop was committed to cv-skill.

So the prep session on the old machine does not need to touch memory. Step 3 in the instruction is a read-only check that nothing was added since the copy.

## Context for the old-machine session

- New account home is `/Users/dug-llm`. The clone will live at `/Users/dug-llm/Sites/GLLT_01`, so the harness project folder is `-Users-dug-llm-Sites-GLLT-01`. Its memory is already in place there.
- GLLT_01 is a Jekyll site hosted on GitHub Pages (from the memory file above). Expect a `Gemfile` and `_config.yml`.
- cv-skill depends on this repo: its `index/` digests were built from `_cases_leadership`, `_cases_practitioner` and `_cases_sdingov`, and its project `CLAUDE.md` points at `~/Sites/GLLT_01`. The path must stay the same relative to home.

## Instruction to paste

> Prepare this repo for cloning into a new user account at `/Users/dug-llm/Sites/GLLT_01`. Do not commit or push; Dug does that. Write your findings to `MIGRATION.md` at the repo root, kept under 150 lines, then report in chat.
>
> 1. **Working tree.** Run `git status --short --ignored` and list anything untracked or ignored that is not build output (`_site/`, `.jekyll-cache/`) or `.DS_Store`. For each such file say whether it should be committed, moved outside the repo, or left behind. Pay attention to `.claude/settings.local.json`, `.env`, local config and anything with absolute `/Users/dug` paths.
> 2. **Absolute paths.** Grep the tracked files for `/Users/dug` and `-Users-dug-Sites`. List each hit with file and line. Do not change them yet; propose the edit.
> 3. **Claude memory, read-only.** List the files in `~/.claude/projects/-Users-dug-Sites-GLLT-01/memory/` with their modification dates. Dug copied this folder to the new machine on 9 Oct 2026 when it held `MEMORY.md` and `github-pages-forces-liquid-on-loose-md.md`. If anything else is there now, or either file is newer than 9 Oct, say so; otherwise report "unchanged since copy". Do not move or symlink it.
> 4. **Project instructions.** Check for `CLAUDE.md`, `CLAUDE.local.md`, `.claude/` and `.mcp.json` in the repo. Report which exist, which are tracked, and whether any reference the old home path.
> 5. **Build and dependencies.** Confirm how the site is built and served: `Gemfile`, `Gemfile.lock`, `_config.yml`, any overlay config used for the GitHub-faithful build, `package.json` or `Makefile` if present. List the Ruby version, bundler version and any gems or tools installed globally rather than from the lockfile, with install commands for a fresh Mac with Homebrew. Note the exact command for the GitHub-faithful build described in `docs/architecture.md`.
> 6. **Large or sensitive files.** Report the ten largest tracked files and anything that looks like primary research material, personal data or client-confidential content that the cv-skill sensitivity rules would keep out of git. Flag, do not delete.
> 7. **Hand-off.** End `MIGRATION.md` with a numbered list for the first session in the new account: clone command and path, install commands, path edits to apply, and a one-line smoke test that proves the site builds locally.
>
> Keep the note factual. Quote file paths, not recollections. If something cannot be read, say so.

## After the old-machine session

1. Dug reviews `MIGRATION.md`, commits and pushes GLLT_01.
2. On the new machine: `git clone <repo-url> ~/Sites/GLLT_01`, then follow the hand-off list.
3. Open a Claude Code session in `~/Sites/GLLT_01` and confirm it reports the Liquid-braces memory as loaded.
4. Confirm from a cv-skill session that `~/Sites/GLLT_01/_cases_leadership` resolves, since `index/` re-indexing depends on it.

## Same pattern for the other two

- **voice-tests**: drop `~/.claude/projects/-Users-dug-Sites-voice-tests/` (4 memory files) into the cv-skill root as before and ask the session to place it. Then run the instruction above with the paths swapped. Step 5 matters most there, since the spoken rig has runtime dependencies.
- **search-for-good-fit-roles**: same, with 6 memory files. Add one step to the instruction: list every dependency and integration the repo has, because Dug is weighing a merge into cv-skill and wants the dependency picture before deciding.
dug-llm ~/Sites/cv-skill> 
