Keep this folder empty. Next resolves `pages/` before `src/pages/`; without it,
Next would pick up the FSD `src/pages` layer as a Pages Router and refuse to
build, because `app/` and `pages/` must share a parent directory.
