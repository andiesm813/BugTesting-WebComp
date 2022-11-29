import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './buttons/buttons';
import './space-between/space-between';
import './cards-opacity/cards-opacity';
import './card-actions/card-actions';

export const routes: Route[] = [
  { path: '', component: 'app-buttons', name: 'Buttons' },
  { path: 'buttons', component: 'app-buttons', name: 'Buttons' },
  { path: 'space-between', component: 'app-space-between', name: 'Space Between' },
  { path: 'cards-opacity', component: 'app-cards-opacity', name: 'Cards Opacity' },
  { path: 'card-actions', component: 'app-card-actions', name: 'Card Actions' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
