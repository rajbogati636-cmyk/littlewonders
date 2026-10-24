# Little Wonders — 2026 brand implementation

Source: client-provided **2026 Brand Colour Reference Card.pdf** and client message.

## Client directions
- A softer site-wide palette using **Super Pastels** and **Pastels**.
- **Questrial** for text and subheadings.
- **Dancing Script** for headings, quotes and the *Babysitting & Events Service* logo descriptor.
- Do not automatically uppercase titles written in Dancing Script.

## Website colour tokens
Change the variables in `src/index.css` to make consistent site-wide changes.
They use the exact PDF swatch values below unless labelled as neutral or light tints.

| Super Pastels | HEX |
| :-- | :-- |
| blush | `#ECC2CD` |
| butter | `#FFE6AA` |
| peach | `#FFD3CA` |
| aqua | `#D4F0ED` |
| pink | `#F8C8D3` |
| lavender | `#F3D7EF` |
| mint | `#C4ECE0` |
| petal | `#FFDCE1` |
| blue | `#C8DEF3` |

| Pastels | HEX |
| :-- | :-- |
| rose | `#CC8D9D` |
| yellow | `#F1CF7C` |
| coral | `#EBAD9F` |
| seafoam | `#C3DBD9` |
| rosy pink | `#EBA4B5` |
| mauve | `#D3B8CF` |
| sage | `#A4C5BB` |
| muted pink | `#E9BAC1` |
| blue | `#93ACC3` |

Primary pages, feature strips, footer, and registration headers have been softened; darker blue is reserved for legible headings and minor emphasis. Dark neutral text and pale tints are retained for legibility.

Both `src/index.css` and `tailwind.config.js` reflect the brand. `index.html` loads the two specified Google Fonts.

No site navigation, content, data handling, APIs, or image assets were intentionally changed.
