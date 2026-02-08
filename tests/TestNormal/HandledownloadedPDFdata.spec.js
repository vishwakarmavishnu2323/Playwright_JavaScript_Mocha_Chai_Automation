import { test, expect } from '@playwright/test';

// download pdf-parse using command     npm install pdf-parse 0r npm install pdf-parse@1.1.1 --save-dev

import pdfParse from 'pdf-parse';

test('Read PDF text from URL', async ({ request }) => {
  // Download PDF as binary
  const response = await request.get(
    'https://www.princexml.com/samples/invoice-plain/index.pdf'
  );

  const pdfBuffer = await response.body();

  // Parse PDF
  const result = await pdfParse(pdfBuffer);
  console.log(result.text);

  // Extract invoice number
  const invoiceRegex = /Invoice number:\s*(\d+)/;
  const match = result.text.match(invoiceRegex);

  expect(match).not.toBeNull();
  expect(match[1]).toBe('161126');
});



test('download pdf and read invoice number', async ({ page }) => {
  await page.goto(
    'https://playground.bondaracademy.com/pages/extra-components/pdf-download'
  );

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download PDF' }).click()
  ]);

  // Create a buffer to read the downloaded PDF
  const buffer = await download.createReadStream().then(stream => {
    return new Promise((resolve, reject) => {
      const chunks = [];
      stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
      stream.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
  });

  // ✅ Correct pdf-parse usage
  const result = await pdfParse(buffer);

  const invoiceRegex = /Invoice number:\s*(\d+)/;
  const match = result.text.match(invoiceRegex);

  expect(match).not.toBeNull();
  expect(match[1]).toBe('161126');
});
