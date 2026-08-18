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

Each file maps to one asset. The `--window-size` height is baked to crop the
frame tightly, so keep it in sync with the `body { height }` in each file.

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd tools/case-study-mockups/secure-file-sharing

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,790 --screenshot=../../../src/assets/secure-file-sharing/dashboard.png \
  screen-dashboard.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,772 --screenshot=../../../src/assets/secure-file-sharing/file-library.png \
  screen-files.html

"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,706 --screenshot=../../../src/assets/secure-file-sharing/share-file.png \
  screen-share.html
```

Palette lives in `base.css` as custom properties — changing `--bg`, `--surface`
and `--primary` there re-skins all three screens at once.
