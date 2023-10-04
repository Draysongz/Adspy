import axios from 'axios';
const cheerio = require('cheerio');

const getPageName = async (req, res) => {
  const adSnapshotUrl = req.body.adSnapshotUrl; // Extract the adSnapshotUrl from the request body
  try {
    const response = await axios.get(adSnapshotUrl); // Fetch the ad snapshot URL

    // Parse the response and extract the page name as you were doing before
    const html = response.data;
    const $ = cheerio.load(html);

    console.log('loaded');
    const htmlContent = $.html();
    console.log(htmlContent);

    // Search for 'pageName' in the HTML content
    if (htmlContent.includes('pageName')) {
      const pageNameIndex = htmlContent.indexOf('pageName');
      const pageNameStart = htmlContent.indexOf(':', pageNameIndex) + 1;
      const pageNameEnd = htmlContent.indexOf(',', pageNameStart);
      const pageName = htmlContent.slice(pageNameStart, pageNameEnd).trim();

      console.log('Page Name:', pageName);

      if (pageName) {
        // Send the pageName as a response
        res.status(200).json({ pageName });
      } else {
        console.log('Page Name not found in the HTML content.');
        // You should send an appropriate error response
        res.status(404).json({ error: 'Page Name not found' });
      }
    } 
  }catch (error) {
    console.error('Error:', error);
    // You should send an appropriate error response
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getPageName;
