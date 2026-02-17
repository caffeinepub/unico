# Specification

## Summary
**Goal:** Replace the UNICO header logo with the newly uploaded UNICO logo image.

**Planned changes:**
- Add the user-provided logo image as a static asset under `frontend/public/assets/generated` (using the specified filename).
- Update the header logo reference in `frontend/src/App.tsx` to use the new logo file instead of `/assets/generated/1000035744.jpeg.dim_512x512.png`.
- Ensure the logo displays crisply and contained (no stretching) at the existing `h-16 w-16` size.

**User-visible outcome:** The top bar/header shows the new UNICO logo image instead of the old one, with the same sizing and layout.
