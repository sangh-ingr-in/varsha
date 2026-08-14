// jahnvika.js - Module Loader Status Checker
/***
  @suru
  @varsha Team
  Make this
  IN . INGR . SURU . LOVE
  https://varsha.ingr.in :: https://suru.ingr.in 
  ©suru&ingr
***/

(function() {
  console.log("🚀 JAHNVIKA MODULE LOADER STARTED");
  console.log("====================================\n");

const parul = [
  /***
  Comment or Remove In case Use
  localhost : Hosting Doamin : CDN Base
  if Applicable to Choice
  ***/
           'https://varsha.ingr.in',
         'http://varsha.ingr.in',
       '127.0.0.1:80',
       '127.0.0.1:8000',
           'http://localhost:8000',
         'http://localhost:80',
     "http://localhost:8158",
];

  const files = {
    sanju: "sanju.js",
    divya: "divya.js",
    fatima: "fatima.js",
    ammu: "ammu.js",
    indumati: "indumati.js",
  };

  console.log("📁 CONFIGURATION LOADED:");
  console.log("  Base URLs:", parul);
  console.log("  Files to check:", files);
  console.log("\n");

  // Function to check URL
  async function checkUrl(url) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch(url, {
        method: "HEAD",
        signal: controller.signal,
        mode: "no-cors",
      });
      
      clearTimeout(timeoutId);
      return { url, status: "running", ok: true };
    } catch (error) {
      if (error.name === "AbortError") {
        return { url, status: "timeout", ok: false };
      }
      return { url, status: "error", ok: false };
    }
  }

  // Function to check file
  async function checkFile(baseUrl, fileName) {
    const fullUrl = `${baseUrl}/${fileName}`;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch(fullUrl, {
        method: "HEAD",
        signal: controller.signal,
        mode: "no-cors",
      });
      
      clearTimeout(timeoutId);
      return { url: fullUrl, status: "✅ FOUND", ok: true };
    } catch (error) {
      return { url: fullUrl, status: "❌ NOT FOUND", ok: false };
    }
  }

  // Main function to check everything
  async function checkAll() {
    console.log("🔍 CHECKING URLS...\n");
    
    const results = [];
    
    // Check each URL
    for (const url of parul) {
      console.log(`  ⏳ Checking: ${url}`);
      const result = await checkUrl(url);
      
      if (result.ok) {
        console.log(`    ✅ RUNNING`);
        results.push({ url, status: "running", files: [] });
        
        // Check files on this URL
        console.log(`    📂 Checking files on ${url}:`);
        for (const [name, path] of Object.entries(files)) {
          console.log(`      ⏳ ${name} (${path})`);
          const fileResult = await checkFile(url, path);
          console.log(`      ${fileResult.status} ${name}`);
          
          // Store file result
          results[results.length - 1].files.push(fileResult);
        }
        console.log(`    ✅ All files checked for ${url}\n`);
      } else {
        console.log(`    ❌ NOT RUNNING\n`);
      }
    }

    // Summary
    console.log("\n📊 SUMMARY REPORT");
    console.log("==================");
    
    const runningUrls = results.filter(r => r.status === "running");
    console.log(`\n✅ RUNNING URLs (${runningUrls.length}):`);
    runningUrls.forEach(r => {
      console.log(`  • ${r.url}`);
      const foundFiles = r.files.filter(f => f.ok);
      console.log(`    📁 Files found: ${foundFiles.length}/${r.files.length}`);
      foundFiles.forEach(f => console.log(`      ✅ ${f.url}`));
    });

    const notRunning = parul.filter(url => !results.some(r => r.url === url && r.status === "running"));
    console.log(`\n❌ NOT RUNNING URLs (${notRunning.length}):`);
    notRunning.forEach(url => console.log(`  • ${url}`));

    console.log("\n✅ JAHNVIKA CHECK COMPLETE!");
    return results;
  }

  // Run the check
  console.log("⏳ Starting checks...\n");
  checkAll().then(results => {
    console.log("\n📦 Module loading simulation complete!");
    console.log("💡 You can now use these URLs and files.");
  });

})();