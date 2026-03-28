const fs = require('fs');

const urls = [
  "https://ecovenplus.com/ventanas-de-pvc-diseno/",
  "https://ecovenplus.com/puertas-de-entrada/",
  "https://ecovenplus.com/perfiles/",
  "https://ecovenplus.com/ecoven-plus-paralelas/",
  "https://ecovenplus.com/ecoven-plus-corredera/",
  "https://ecovenplus.com/ecoven-plus-vekamotion/",
  "https://ecovenplus.com/cajones-de-persiana-para-ventanas-de-pvc/",
  "https://ecovenplus.com/control-solar/",
  "https://ecovenplus.com/espacio-domotico/",
  "https://ecovenplus.com/ventanas-de-pvc-ecoven-plus-s70/",
  "https://ecovenplus.com/ventanas-de-pvc-ecoven-plus-s76/",
  "https://ecovenplus.com/ventanas-de-pvc-ecoven-plus-s82/",
  "https://ecovenplus.com/acristalamiento/",
  "https://ecovenplus.com/herraje/"
];

async function scrape() {
  const results = {};
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      
      const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
      let match;
      const images = new Set();
      while ((match = imgRegex.exec(text)) !== null) {
        if (!match[1].includes('data:image') && !match[1].includes('svg') && match[1].includes('uploads')) {
          images.add(match[1]);
        }
      }
      
      const h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

      const contentMatch = text.match(/<p>([\s\S]*?)<\/p>/g);
      const paragraphs = contentMatch ? contentMatch.slice(0, 5).map(p => p.replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 50) : [];

      results[url] = {
        title,
        images: Array.from(images).filter(i => i.endsWith('.jpg') || i.endsWith('.png') || i.endsWith('.jpeg') || i.endsWith('.webp')),
        paragraphs
      };
      console.log(`Scraped ${url}: ${results[url].images.length} images`);
    } catch (e) {
      console.error(`Error on ${url}: ${e.message}`);
    }
  }
  fs.writeFileSync('scraped_ecoven.json', JSON.stringify(results, null, 2));
}

scrape();
