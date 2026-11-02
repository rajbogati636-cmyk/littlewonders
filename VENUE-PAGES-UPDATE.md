# Extraordinary Venues — dedicated regional lists

The latest client's lists are supplied in `src/data/venues.ts`, including her additional Inverstanely (Crossdale) item.

**New/updated routes**
- `/locations` — full directory, searchable, grouped by five regions.
- `/locations/maleny` — Maleny & Hinterland (24).
- `/locations/sunshine-coast` — Sunshine Coast & Noosa (30).
- `/locations/brisbane` — Brisbane (39).
- `/locations/toowoomba` — Toowoomba & Darling Downs (21, including Inverstanely).
- `/locations/tamborine` — Tamborine Mountain (15).

The homepage Extraordinary Venues region links now open the respective regional pages, without changing its appearance or layout. `More Regions` continues opening the combined directory.

This patch intentionally does not modify the header, footer, registration forms, contact forms, Cloudflare Functions, Supabase or Resend configuration. The 129 venue entries are transcribed from client-provided content and should be approved by the client, not independently represented as verified partnerships.

## GitHub browser upload
Extract the changed-files ZIP. On your `pastel-preview` branch, use Add file -> Upload files and drag in the **contents** of the extracted folder, preserving `src/` paths. Do not upload the ZIP itself or overwrite unrelated files. After the Cloudflare preview deploys, visit `/locations` and test each regional link.
