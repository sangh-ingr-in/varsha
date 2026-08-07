// app.js - Application entry point
import yearUpdater from './yearUpdater.js';
import { updateYear, startAutoUpdate, getElement, setContent } from './yearUpdater.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update all date elements
  updateYear();
  
  // Start auto-update every minute
  const intervalId = startAutoUpdate(60000);
  
  // Example: Get element and update
  const footerYear = getElement('#footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
  
  // Example: Set content dynamically
  setContent('#dynamic-date', 'Updated on: ' + new Date().toLocaleString());
  
  console.log('Year updater initialized!');
  console.log('Supported languages:', yearUpdater.SUPPORTED_LANGUAGES);
});

// Export for use in other modules
export { yearUpdater, updateYear, startAutoUpdate };