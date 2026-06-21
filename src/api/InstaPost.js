import { RAPID_API_URL, RAPID_API_KEY } from '../utils/keys';

export const InstaPost = async () => {
  try {
    const url = RAPID_API_URL;
    const apiKey = RAPID_API_KEY;

    const payload = {
      username: 'keke',
      maxId: '',
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'instagram120.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(url, options);

    const responseText = await response.text();

    if (!response.ok) {
      console.error(`❌ API Error ${response.status}:`, responseText);
      throw new Error(`HTTP ${response.status}: ${responseText}`);
    }

    try {
      const result = JSON.parse(responseText);
      console.log('✅ Success! Got data');
      return result;
    } catch (parseErr) {
      console.error('JSON Parse Error:', responseText);
      throw new Error('Invalid JSON response');
    }
  } catch (err) {
    console.error('❌ Network Error:', err.message);
    // Log full error for debugging
    console.error('Full Error:', err);
    throw err;
  }
};
