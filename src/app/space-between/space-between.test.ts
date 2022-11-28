import { expect } from '@open-wc/testing';
import SpaceBetween from './space-between.js';

describe('SpaceBetween', () => {
  it('<app-space-between> is an instance of SpaceBetween', async () => {
    const element = document.createElement('app-space-between');
    expect(element).to.be.instanceOf(SpaceBetween);
  });
});
