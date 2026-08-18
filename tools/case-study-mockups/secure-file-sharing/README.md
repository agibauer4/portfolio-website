# Secure file sharing — mockup sources

The three images in `src/assets/secure-file-sharing/` are rendered from the HTML
files here rather than exported from Figma. The original Figma screens are flat
rasters of a real employer product, so they could not be recoloured or
de-branded by editing layers — these rebuilds keep the layout and IA decisions
the case study is actually about, with the branding, palette and sample data
replaced.

What differs from the source screens: no product wordmark (a neutral mark sits
where the logo was), a violet-on-plum dark palette instead of blue-on-navy, and
invented people, filenames, team spaces and storage names throughout.

## Regenerating

Each file maps to one asset. The `--window-size` is baked to crop each frame
tightly, so keep it in sync with the `body { height }` (and `width`, where set)
in the file it renders.

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd tools/case-study-mockups/secure-file-sharing
OUT=../../../src/assets/secure-file-sharing

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1280,800 --screenshot=$OUT/card.png screen-card.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,720 --screenshot=$OUT/dashboard.png screen-dashboard.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,832 --screenshot=$OUT/file-library.png screen-files.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,700 --screenshot=$OUT/send-files.png screen-send.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,706 --screenshot=$OUT/share-file.png screen-share.html
```

`screen-card.html` is `screen-dashboard.html` at a 1280x800 viewport — the card
frame is 16:10, and rendering natively at that ratio keeps the sidebar labels
instead of letting `object-fit: cover` crop them off. Edit both if the dashboard
layout changes.

Palette lives in `base.css` as custom properties — changing `--bg`, `--surface`
and `--primary` there re-skins all three screens at once.
