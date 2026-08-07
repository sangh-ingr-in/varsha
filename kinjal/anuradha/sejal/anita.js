const files = {
  sanju: ["./sanju.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sanju.js"]
};

async function load(name) {
  const [local, remote] = files[name];

  try {
    return await import(local);
  } catch {
    return await import(remote);
  }
}

// Load the module and destructure all needed exports
const sanjuModule = await load("sanju");

// Destructure all functions from the module
const {
  yearUpdater,
  updateYear,
  startAutoUpdate,
  getElement,
  setContent,
  SUPPORTED_LANGUAGES
} = sanjuModule;

// Or if yearUpdater is the default export:
// const yearUpdater = sanjuModule.default;
// const { updateYear, startAutoUpdate, getElement, setContent } = sanjuModule;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update all date elements
  if (typeof updateYear === 'function') {
    updateYear();
  }

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
  console.log('Supported languages:', SUPPORTED_LANGUAGES || yearUpdater?.SUPPORTED_LANGUAGES);
});

// Export for use in other modules
export { yearUpdater, updateYear, startAutoUpdate, getElement, setContent };