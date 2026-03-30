const https = require('https');
const fs = require('fs');

https.get('https://www.disenadivisiones.es/modulacion/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Basic regex to find headers and descriptions.
    // Given the structure of wordpress sites, usually h2, h3 or strong inside specific divs.
    const h2s = data.match(/<h[23][^>]*>(.*?)<\/h[23]>/gi) || [];
    const strongs = data.match(/<strong[^>]*>(.*?)<\/strong>/gi) || [];
    const listItems = data.match(/<li[^>]*>(.*?)<\/li>/gi) || [];
    
    const relevant = [...h2s, ...strongs, ...listItems].map(t => t.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 3 && t.length < 150);
    fs.writeFileSync('scrape_results.txt', JSON.stringify(relevant.slice(0, 50), null, 2));
  });
});
