// pages/api/sitemap.js

export default async (req, res) => {
    try {
      // Fetch post slugs from Laravel backend
      const response = await fetch('https://admin.bitsofdev.com/api/allpost');
      const data = await response.json();
  
      console.log('Data received from the backend:', data);
  
      let posts = [];
      // Check if the response contains an array of posts
      if (Array.isArray(data)) {
        posts = data;
      } else if (data.posts) {
        posts = data.posts;
      } else {
        throw new Error('Posts not found in the response');
      }
  
      console.log('Posts:', posts);
  
      // Generate sitemap XML
      const urls = posts.map(post => {
        const slug = post.slug; // Assuming 'slug' is the field containing the post slug
        return `<url><loc>https://bitsofdev.com/post/${slug}</loc></url>`;
      });
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${urls.join('')}
        </urlset>`;
  
      // Serve XML
      res.setHeader('Content-Type', 'text/xml');
      res.write(sitemap);
      res.end();
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).end();
    }
  };
  