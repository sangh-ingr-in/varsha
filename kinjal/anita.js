// anita.js - Browser Entry Point with Copy Functionality
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
  // 'https://varsha.ingr.in'
  // 'http://varsha.ingr.in'
  //127.0.0.1:8000
  //127.0.0.1:80
  // 'http://localhost:8000'
  // 'http://localhost:80'
  "http://localhost:8158",
];

const { startAutoUpdate, updateAllElements, SUPPORTED_LANGUAGES } = await import (`${parul}/anuradha/sanju.js`);

// ============================================
// COPY BUTTON FUNCTIONALITY
// ============================================

function setupCopyButtons() {
  document.querySelectorAll('.copy-btn-top').forEach(button => {
    // Remove existing listeners to avoid duplicates
    button.removeEventListener('click', handleCopy);
    button.addEventListener('click', handleCopy);
  });
}

async function handleCopy(e) {
  const btn = e.currentTarget;
  const textToCopy = btn.getAttribute('data-copy');
  
  if (!textToCopy) {
    showToast('❌ Nothing to copy!', 'error');
    return;
  }
  
  try {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(textToCopy);
      showCopyFeedback(btn, '✅ Copied!', 'success');
      showToast('✅ Copied to clipboard!', 'success');
    } else {
      // Fallback for older browsers
      const success = fallbackCopy(textToCopy);
      if (success) {
        showCopyFeedback(btn, '✅ Copied!', 'success');
        showToast('✅ Copied to clipboard!', 'success');
      } else {
        showCopyFeedback(btn, '❌ Failed', 'error');
        showToast('❌ Copy failed', 'error');
      }
    }
  } catch (err) {
    console.error('Copy error:', err);
    // Try fallback
    const success = fallbackCopy(textToCopy);
    if (success) {
      showCopyFeedback(btn, '✅ Copied!', 'success');
      showToast('✅ Copied to clipboard!', 'success');
    } else {
      showCopyFeedback(btn, '❌ Failed', 'error');
      showToast('❌ Copy failed', 'error');
    }
  }
}

function fallbackCopy(text) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (err) {
    console.error('Fallback copy failed:', err);
    return false;
  }
}

function showCopyFeedback(btn, message, type) {
  const originalHTML = btn.innerHTML;
  const originalBg = btn.style.background;
  const originalColor = btn.style.color;
  
  btn.innerHTML = message;
  btn.style.background = type === 'success' ? '#4CAF50' : '#f44336';
  btn.style.color = 'white';
  btn.style.borderColor = type === 'success' ? '#4CAF50' : '#f44336';
  
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = originalBg || '';
    btn.style.color = originalColor || '';
    btn.style.borderColor = '';
  }, 2000);
}

function showToast(message, type = 'info') {
  // Remove existing toast
  const existing = document.querySelector('.varsha-toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'varsha-toast';
  toast.textContent = message;
  
  // Styling
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '14px',
    zIndex: '99999',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    animation: 'slideInUp 0.3s ease',
    maxWidth: '400px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  });
  
  // Colors based on type
  const colors = {
    success: { bg: '#4CAF50', color: 'white' },
    error: { bg: '#f44336', color: 'white' },
    info: { bg: '#2196F3', color: 'white' },
    warning: { bg: '#FF9800', color: 'white' }
  };
  
  const style = colors[type] || colors.info;
  toast.style.backgroundColor = style.bg;
  toast.style.color = style.color;
  
  document.body.appendChild(toast);
  
  // Auto-remove after 2.5 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
  console.log("🌺 Varsha initializing...");

  try {
    // 1. Setup copy buttons
    setupCopyButtons();
    console.log("📋 Copy buttons initialized");

    // 2. Initial update of all elements
    if (typeof updateAllElements === "function") {
      updateAllElements();
      console.log("🔄 Initial update completed");
    }

    // 3. Start auto-update (every 60 seconds)
    if (typeof startAutoUpdate === "function") {
      startAutoUpdate(60000);
      console.log("⏰ Auto-update started (60s interval)");
    }

    // 4. Log supported languages
    if (SUPPORTED_LANGUAGES) {
      console.log("🌍 Supported languages:", SUPPORTED_LANGUAGES.join(", "));
    }

    console.log("✅ Varsha initialized successfully.");
  } catch (error) {
    console.error("Ovide This Cash Browser to Remove Catch data Refresh ❌Runing Still during initialization:", 101);
    //showToast('⚠️ Initialization error', 'error');
  }
}

// ============================================
// DOM READY HANDLING
// ============================================

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    // DOM already loaded, but wait for custom elements
    if (typeof customElements !== 'undefined') {
      // Wait for custom elements to be defined
      const checkElements = setInterval(() => {
        if (customElements.get('varsha-date') || customElements.get('varsha')) {
          clearInterval(checkElements);
          init();
        }
      }, 100);
      
      // Timeout fallback
      setTimeout(() => {
        clearInterval(checkElements);
        init();
      }, 5000);
    } else {
      init();
    }
  }
}

// ============================================
// HANDLE DYNAMIC CONTENT (for copy buttons)
// ============================================

// Watch for dynamically added copy buttons
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    let shouldSetup = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // Element node
            if (node.matches && node.matches('.copy-btn-top')) {
              shouldSetup = true;
              break;
            }
            if (node.querySelectorAll) {
              const btns = node.querySelectorAll('.copy-btn-top');
              if (btns.length) {
                shouldSetup = true;
                break;
              }
            }
          }
        }
      }
      if (shouldSetup) break;
    }
    
    if (shouldSetup) {
      setupCopyButtons();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// ============================================
// EXPORTS
// ============================================

export { 
  startAutoUpdate, 
  updateAllElements, 
  SUPPORTED_LANGUAGES,
  setupCopyButtons,
  showToast
};

export default {
  startAutoUpdate,
  updateAllElements,
  SUPPORTED_LANGUAGES,
  setupCopyButtons,
  showToast
};