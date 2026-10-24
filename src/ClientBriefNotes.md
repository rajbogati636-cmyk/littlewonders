# Little Wonders client brief implementation — 24 October 2026

Working source: user-uploaded `littlewonders-pastel-preview.zip` (not an earlier Bolt ZIP).

## Strictly preserved
- `src/pages/Contact.tsx`, `src/pages/EventRegistration.tsx`, `src/pages/ParentRegistration.tsx`
- All `functions/api/*` Cloudflare/Resend handlers, `src/lib/supabase.ts`, and `supabase/*` files
- No changes to form fields, validation, recipient emails, request payloads, API keys, functions, or destination addresses.

## Implemented in this review pass
- Client homepage service positioning and section order; latest cover photo; venue panorama and section; remove star/sparkle symbols.
- Five care options with Wedding as flagship and correct distinction of Group Bookings.
- Dedicated Wedding Childcare, Group Bookings, Defence Care, Locations and Journal entry routes.
- Longer client-supplied About/Story, Values/Mission/Sustainability, Ratios, Safety and grouped FAQ content.
- Separate Privacy Policy and Privacy Notice website pages, using client-supplied text as source.
- Actual nine-page Functions Guide PDF from client's attachment.
- Updated site navigation, footer contact display, privacy links and wedding-first hierarchy.

## Important incomplete items before merging into `main`
- Client did not supply an approved Terms & Conditions document, so no substitute legal terms were invented. Footer label is currently non-clickable.
- Journal posts were not exported. `/journal` is a holding page, NOT an exact migration; obtain a clean export from the original site. The original site appears to have unrelated spam pages indexed, so migration should be selective and secure.
- Instagram API/authentication and genuine post feed are not connected. Instagram link is provided; gallery still includes previously supplied/reused website imagery, not a verified automatically updating feed. Obtain access or approved recent post imagery.
- Regions page has editorial summaries, not venue/accommodation partner lists, since lists have not been provided.
- No third-party scheduling link was provided. “Book” takes visitors to the EXISTING contact page, preserving the user's Resend connection.
- Privacy/legal content must be checked by the client/appropriate legal adviser before publication. The content was transcribed from correspondence, not legally reviewed.
- Real forms must be end-to-end tested on Cloudflare preview by the site owner; no credentials or secrets have been accessed.
