// core/auto-update.js - Auto-update
import { updateAllElements } from './dom.js';

let updateInterval = null;

export function startAutoUpdate(interval = 60000) {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateAllElements();
  updateInterval = setInterval(updateAllElements, interval);
  return updateInterval;
}

export function stopAutoUpdate() {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
}

export function isAutoUpdating() {
  return updateInterval !== null;
}