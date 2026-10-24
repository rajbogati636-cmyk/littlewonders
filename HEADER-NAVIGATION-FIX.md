Little Wonders — header navigation stability fix

- Keeps Ready to Register + Event Registration + Parent Registration in the pre-header.
- Keeps the middle announcement message and Enquire link; the primary Book Your Connection Call button remains in the main navigation (also inside the menu on smaller screens).
- Leaves the three sections at their current initial heights; only the main navigation becomes sticky as the page scrolls.
- Prevents sticky overlap, scroll-triggered shrinking, and desktop links from being clipped or hidden.
- Uses a complete accessible menu at widths of 1420px and below, with About and Events submenus.
- The forms, Resend, Cloudflare Functions, email recipients and backend are completely unchanged.

Upload the contents of this ZIP into the ROOT of the pastel-preview branch, keeping src/ paths intact. Commit only after checking you are on pastel-preview.

Because this update contains the entire src/index.css, compare against any newer direct GitHub edits before overwriting it.
