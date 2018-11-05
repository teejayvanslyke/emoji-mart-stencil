
// EmojiMart: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './emoji-mart.core.js';
import {
  Anchors,
  Category,
  Emoji,
  Picker,
  Preview,
  Search
} from './emoji-mart.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Anchors,
    Category,
    Emoji,
    Picker,
    Preview,
    Search
  ], opts);
}
