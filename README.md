# Surprise rickroll page

This is a tiny static site that shows a short intro/animation and then reveals a Rick Astley video (rickroll) at the end.

How to use
1. Create a GitHub repository (public or private).
2. Add these files to the repo root: `index.html`, `styles.css`, `script.js`, `README.md`.
3. Push to `main` (or `master`) and enable GitHub Pages:
   - Settings → Pages → Source: choose `main` branch `/ (root)` and save.
4. The page will be available at `https://<your-username>.github.io/<repo>/` after a minute.

Notes on autoplay
- Modern browsers frequently block autoplay with sound unless the user has interacted with the page.
- The script attempts to autoplay the YouTube embed but also shows a clear "Click to play" overlay if autoplay is blocked.
- If you want guaranteed playback, ask visitors to click the Start button (which counts as an interaction).

Customizing
- To change which video plays, update `YT_ID` in `script.js` to another YouTube video id.
- You can replace the animation in `index.html` with any content you like.

License
- You are responsible for respecting copyright and platform terms when embedding third-party videos (this example uses the public YouTube embed).