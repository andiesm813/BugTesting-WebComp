import { expect } from '@open-wc/testing';
import Buttons from './buttons.js';

describe('Buttons', () => {
  it('<app-buttons> is an instance of Buttons', async () => {
    const element = document.createElement('app-buttons');
    expect(element).to.be.instanceOf(Buttons);
  });
});
