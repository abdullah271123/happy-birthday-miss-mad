# سالگرہ مبارک مدیحہ ❤️

A single-page birthday surprise for Madiha: envelope → landing page → a 34-second film of her photos.
Plain HTML/CSS/JS, no build step. Double-click `index.html` to open it.

## Folder

```
madiha-birthday/
  index.html
  style.css
  script.js
  photos/   photo1.jpg … photo11.jpg   (photo1 is also the page background)
  audios/   audio1.mp3 (landing, loops)  audio2.mp3 (film)
  fonts/    optional .ttf files for offline use
```

## Add or remove photos
1. Put the image in `photos/`.
2. Add its path to the `PHOTOS` list at the top of `script.js`.
3. Optional: add a caption at the same position in `CONFIG.captions`.

Missing files are skipped automatically. To choose which photo appears in each film scene, edit `CONFIG.FILM.scenes`. The `photos: [0]` entry means photo1, `[1]` means photo2, and so on.

## Replace the music
Swap `audios/audio1.mp3` or `audios/audio2.mp3` for your own files, keeping the same names.
The film uses 34 seconds of audio2 (`CONFIG.FILM.duration`), starting at `CONFIG.audio.filmStartAt` (currently 99 seconds, i.e. 1:39). Change that number to use a different part of the song.

## Change any text
All of the Urdu text is in the `CONFIG` object at the top of `script.js`. That includes the wishes, the story, the love letter, the dreams, the promises, the captions and the sign-off name.

## Put it online for free

**GitHub Pages**
1. Create a new public repository, for example `madiha`.
2. Upload everything inside this folder (Add file → Upload files). Drag in the files *and* the `photos` and `audios` folders.
3. Go to Settings → Pages. Under "Branch", choose `main` and `/ (root)`, then Save.
4. After a minute your link appears: `https://<your-username>.github.io/madiha/`

**Netlify Drop (fastest)**
Go to https://app.netlify.com/drop and drag this whole folder onto the page. You'll get a link right away.

## Notes
- She should open it on her phone with the volume up. Music starts when she taps the wax seal, because browsers don't allow sound before a tap.
- On iPhone, Safari ignores volume fades, so the music starts and stops at full volume. Everything else works normally there.
- `?reel=1` at the end of the URL plays an automatic demo of the whole site. It was used to record the reel.
