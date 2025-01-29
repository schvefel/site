const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const filePath = path.join(__dirname, '../../files/example.txt'); // Dosya yolunu belirtin
  try {
    const data = fs.readFileSync(filePath);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="example.txt"',
      },
      body: data.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Dosya indirilemedi' }),
    };
  }
};
