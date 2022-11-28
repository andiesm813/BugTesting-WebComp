import { expect } from '@open-wc/testing';
import Dialog from './dialog.js';

describe('Dialog', () => {
  it('<app-dialog> is an instance of Dialog', async () => {
    const element = document.createElement('app-dialog');
    expect(element).to.be.instanceOf(Dialog);
  });
});
