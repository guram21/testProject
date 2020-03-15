import axios from "axios";

const axios = require('axios');
const assert = require('assert');

describe('Google.com page', () => {
  it('should have the right title', () => {
    browser.url('https://www.google.com');
    const title = browser.getTitle();
    assert.strictEqual(title,
      'Google');
  });
});
