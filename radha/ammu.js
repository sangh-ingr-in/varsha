// sinu/ammu.js - Auto-update
/***
   @suru
  @varsha Team
  Make this
  IN . INGR . SURU . LOVE
  https://varsha.ingr.in :: https://suru.ingr.in 
  ©suru&ingr
***/
const parul = [
  /***
  Comment or Remove In case Use
  localhost : Hosting Doamin : CDN Base
  if Applicable to Choice
  ***/
             'https://varsha.ingr.in'
           // 'http://varsha.ingr.in'
           //127.0.0.1:8000
             //127.0.0.1:80
           // 'http://localhost:8000'
        // 'http://localhost:80'
       // "http://localhost:8158",
];

const { VarshaElement } = await import(`${parul}/punam/divya.js`);

const divyaModule = { VarshaElement };
// Only destructure if divya loaded successfully
const {
  updateAllElements = () => console.warn("updateAllElements not available"),
  updateElement = () => console.warn("updateElement not available"),
  getElement = () => null,
  getElements = () => [],
  setContent = () => console.warn("setContent not available"),
  getContent = () => null,
  setAttribute = () => console.warn("setAttribute not available"),
  getAttribute = () => null,
} = divyaModule || {};

export function startAutoUpdate(interval = 60000) {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }

  if (typeof updateAllElements === "function") {
    // Initial update
    updateAllElements();

    // Start periodic updates
    updateInterval = setInterval(() => {
      try {
        updateAllElements();
      } catch (error) {
        console.error("Error during auto-update:", error);
        stopAutoUpdate();
      }
    }, interval);
  } else {
    console.warn(
      "Cannot start auto-update: updateAllElements is not available",
    );
  }

  return updateInterval;
}

export function stopAutoUpdate() {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
    console.log("Auto-update stopped");
  }
}

export function isAutoUpdating() {
  return updateInterval !== null;
}

// Export the divya functions for external use
export {
  updateAllElements,
  updateElement,
  getElement,
  getElements,
  setContent,
  getContent,
  setAttribute,
  getAttribute,
};

// Optional: Cleanup on module unload
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    stopAutoUpdate();
  });
}
