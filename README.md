# ScrollShift website

Source for the ScrollShift website, built with [Nift](https://nift.dev/).

```bash
nift build-all
```

The generated site is written to `public/`. Documentation source lives under `content/docs/` and is emitted under `/docs/*.html` (with `/docs/` as the documentation index).

The visual theme supports system, light and dark modes. The selected override is stored locally in the browser; no analytics or framework runtime is required.

Development conventions and Nift relationship rules are recorded in [`HANDOVER.md`](HANDOVER.md).
