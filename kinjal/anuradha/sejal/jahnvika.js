const CDN_BASE =
  "https://varsha.ingr.in/kinjal/anuradha/sejal/";

const files = {
  sanju: "sanju.js",

  divya: "sinu/divya.js",
  fatima: "sinu/fatima.js",
  ammu: "sinu/ammu.js",

  indumati: "punam/indumati.js",
  selina: "punam/selina.js"
};


function localURL(path) {
  return new URL(path, import.meta.url).href;
}


function remoteURL(path) {
  return new URL(path, CDN_BASE).href;
}


export async function load(name) {

  const path = files[name];

  if (!path) {
    throw new Error(`Unknown module: ${name}`);
  }

  const local = localURL(path);
  const remote = remoteURL(path);

  // -------------------------
  // LOCAL
  // -------------------------
  try {
    console.log(`[local] ${local}`);

    return await import(local);

  } catch (error) {

    console.warn(
      `[local failed] ${local}`,
      error
    );
  }


  // -------------------------
  // REMOTE / CDN
  // -------------------------
  try {
    console.log(`[remote] ${remote}`);

    return await import(remote);

  } catch (error) {

    console.error(
      `[remote failed] ${remote}`,
      error
    );

    throw new Error(
      `Unable to load "${name}"\n` +
      `Local: ${local}\n` +
      `Remote: ${remote}`
    );
  }
}
