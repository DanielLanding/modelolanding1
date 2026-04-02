import https from 'https';
import fs from 'fs';
import path from 'path';

const ASSETS = [
  // Carousel images
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/1-2.webp', name: 'img-1.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/2-2.webp', name: 'img-2.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/3-2.webp', name: 'img-3.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/4.webp', name: 'img-4.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/5.webp', name: 'img-5.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/6.webp', name: 'img-6.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/7.webp', name: 'img-7.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/8.webp', name: 'img-8.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/9.webp', name: 'img-9.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/10.webp', name: 'img-10.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/11.webp', name: 'img-11.webp' },
  // About section images
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/Design-sem-nome-3-rebijamfl08k8vy85v2jctdnyhu7z8890mz9v727uo.webp', name: 'about-main.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/1-rdzghtlqz0564qtky5zskcl8lft0ax6odq8j4h3t4w.png', name: 'about-1.png' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/3-rebifn11078f3h9dia6rnql4sjuu1lptujnaoghc1s.png', name: 'about-3.png' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/1-rebifgg5oczeu7ixkpcdoa8wmur9jpzphn2wbir39c.png', name: 'about-1b.png' },
  // Experiencia
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/10/Gemini_Generated_Image_la8z7lla8z7lla8z.webp', name: 'experiencia-boat.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/DSC00871-re64f0t4kxyr48ppc7pxlet6d96145zrns9ooxlfq0.webp', name: 'experiencia-dsc.webp' },
  // Testimonial design images
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/Design-sem-nome-2-1-re87e4cqplil6gnhpa2bnapq87vusy1gp3n9z864ho.webp', name: 'design-2-1.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/Design-sem-nome-2-re877mb22i0mzz3nfu6nxjdq95xngzg15qn0unmln8.webp', name: 'design-2.webp' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/elementor/thumbs/Design-sem-nome-1-re877cwoexfsp1nmhektr23t0s1rq0mecc6dx0lg4w.webp', name: 'design-1.webp' },
  // Mentor
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/11/Altemir-683x1024.webp', name: 'altemir.webp' },
  // Logos
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/11/logo-gigantes.svg', name: 'logo-gigantes-new.svg' },
  { url: 'https://pv.corretorvencedor.club/wp-content/uploads/2025/11/logo-ibraciv-2.svg', name: 'logo-ibraciv.svg' },
];

const OUTPUT_DIR = path.resolve('public/images');

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Download 4 at a time
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    await Promise.all(batch.map(async (asset) => {
      const dest = path.join(OUTPUT_DIR, asset.name);
      try {
        await download(asset.url, dest);
        console.log(`OK: ${asset.name}`);
      } catch (err) {
        console.error(`FAIL: ${asset.name} - ${err.message}`);
      }
    }));
  }
  console.log('Done!');
}

main();
