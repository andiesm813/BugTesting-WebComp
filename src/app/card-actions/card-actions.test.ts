import { expect } from '@open-wc/testing';
import CardActions from './card-actions.js';

describe('CardActions', () => {
  it('<app-card-actions> is an instance of CardActions', async () => {
    const element = document.createElement('app-card-actions');
    expect(element).to.be.instanceOf(CardActions);
  });
});
