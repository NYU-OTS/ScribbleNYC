import Mosaic from 'mosaic-framework';

import '../styles/DividerBubbles.less';

export default new Mosaic({
    name: 'divider-bubbles',
    view: () => html`
    <div tabIndex={-1} aria-hidden='true'></div>
    <div tabIndex={-1} aria-hidden='true'></div>
    <div tabIndex={-1} aria-hidden='true'></div>
    <div tabIndex={-1} aria-hidden='true'></div>
    <div tabIndex={-1} aria-hidden='true'></div>
    `
});