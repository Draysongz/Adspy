import pretty from 'pretty';

const axios = require('axios');
const cheerio = require('cheerio');
const he = require('he');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const getPageName = async (req, res) => {
  const adSnapshotUrl = req.body.adSnapshotUrl;

  try {
    // Fetch the ad snapshot URL
    const response = await axios.get(adSnapshotUrl);

    // Parse the response and extract the HTML content
    const html = response.data;
    const $ = cheerio.load(html);
    const htmlContent = $.html();
    console.log(htmlContent)

    // Initialize variables for pageName, htmlValue, and originalImageUrl
    let pageName = null;
    let htmlValue = null;
    let originalImageUrl = null;
    let adImageUrl= null
    let pageTitle= null
    let pageDescription= null
    let cta= null

    // Search for 'pageName' in the HTML content
    if (htmlContent.includes('pageName')) {
      const pageNameIndex = htmlContent.indexOf('pageName');
      const pageNameStart = htmlContent.indexOf(':', pageNameIndex) + 1;
      const pageNameEnd = htmlContent.indexOf(',', pageNameStart);
      pageName = htmlContent.slice(pageNameStart, pageNameEnd).trim();
    }
   
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


function cleanText(text) {
  // Remove HTML tags
  const textWithoutTags = text.replace(/<[^>]*>/g, '');

  // Remove escape sequences (e.g., \u003Cbr\/>)
  const textWithoutEscapeSequences = textWithoutTags.replace(/\\u[\dA-Fa-f]{4}/g, '');

  // Remove unwanted slashes and > characters
  let cleanedText = textWithoutEscapeSequences.replace(/[\\>]/g, '');
  const textWithoutAHref = cleanedText.replace(/a\s*href\s*=\s*/g, '');
  const textWithoutBrTags = textWithoutAHref.replace(/br\s*\/\s*/g, '');
  cleanedText = DOMPurify.sanitize(textWithoutBrTags)

  return cleanedText;
}



   // Search for '__html' in the HTML content
   if (htmlContent.includes('__html')) {
    const startIndex = htmlContent.indexOf('"__html"');
    if (startIndex !== -1) {
      const startValueIndex = htmlContent.indexOf('"', startIndex + 9) + 1; // 9 is the length of "__html":
      const endValueIndex = htmlContent.indexOf('"', startValueIndex);

      if (startValueIndex !== -1 && endValueIndex !== -1) {
        htmlValue = htmlContent.slice(startValueIndex, endValueIndex);
        htmlValue= cleanText(htmlValue).slice(0, 150)
        htmlValue= `${htmlValue}...`
      }
    }
  }
    

  if (htmlContent.includes('"cta_text":')) {
    const startIndex = htmlContent.indexOf('"cta_text":');
    const endIndex = htmlContent.indexOf(',', startIndex);
    cta = cleanText(htmlContent.slice(startIndex + 12, endIndex)).replace(/^"(.*)"$/, '$1');
  }

      // Search for 'title' in the HTML content
   // Extract title and remove surrounding double quotes
   if (htmlContent.includes('"title":')) {
    const startIndex = htmlContent.indexOf('"title":');
    const endIndex = htmlContent.indexOf(',', startIndex);
    pageTitle = cleanText(htmlContent.slice(startIndex + 8, endIndex)).replace(/^"(.*)"$/, '$1');
  }

  // Extract linkDescription
  if (htmlContent.includes('"link_description":')) {
    const startIndex = htmlContent.indexOf('"link_description":');
    const endIndex = htmlContent.indexOf(',', startIndex);
    pageDescription = cleanText(htmlContent.slice(startIndex + 20  , endIndex));
    pageDescription= `${pageDescription}....`
  }
   

    // Search for 'original_image_url' in the HTML content
    if (htmlContent.includes('page_profile_picture_url"')) {
      const urlRegex = /"page_profile_picture_url":"(.*?)"/;
      const match = htmlContent.match(urlRegex);
      if (match && match.length > 1) {
        originalImageUrl = match[1].replace(/\\/g, '');
      }
      
    }  

    if (htmlContent.includes('original_image_url')) {
      const urlRegex = /"original_image_url":"(.*?)"/;
      const match = htmlContent.match(urlRegex);
      if (match && match.length > 1) {
        adImageUrl = match[1].replace(/\\/g, '');
      }
      
    } 
    console.log(pretty(htmlContent))

    if (pageName !== null && pageTitle !== null && pageDescription !== null) {
      // Send pageName, htmlValue, and originalImageUrl as a response
      // console.log("pagename", pageName)
      // console.log('htmlValue', pretty(htmlValue))
      // console.log('imageUrl', pretty(originalImageUrl))
      res.status(200).json({ pageName, pageDescription, pageTitle, cta, originalImageUrl,htmlValue, adImageUrl });
    } else {
      // Handle the case when either 'pageName' or '__html' is not found
      res.status(404).json({ error: 'Page Name or __html not found' });
    }
  } catch (error) {
    // Handle errors, log the error, and send an appropriate error response
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getPageName;
