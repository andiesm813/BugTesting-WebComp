import { expect } from '@open-wc/testing';
import CardsOpacity from './cards-opacity.js';

describe('CardsOpacity', () => {
  it('<app-cards-opacity> is an instance of CardsOpacity', async () => {
    const element = document.createElement('app-cards-opacity');
    expect(element).to.be.instanceOf(CardsOpacity);
  });
});
