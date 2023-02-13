// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _layouts = require("./layouts");
var _components = require("./components");
var _svg = require("./components/svg");
var _contactsJson = require("./mock/contacts.json");
var _contactsJsonDefault = parcelHelpers.interopDefault(_contactsJson);
var _editPasswordHbs = require("./pages/edit-password.hbs");
var _editPasswordHbsDefault = parcelHelpers.interopDefault(_editPasswordHbs);
var _editProfileHbs = require("./pages/edit-profile.hbs");
var _editProfileHbsDefault = parcelHelpers.interopDefault(_editProfileHbs);
//pages
var _404Hbs = require("./pages/404.hbs");
var _404HbsDefault = parcelHelpers.interopDefault(_404Hbs);
var _500Hbs = require("./pages/500.hbs");
var _500HbsDefault = parcelHelpers.interopDefault(_500Hbs);
var _homeHbs = require("./pages/home.hbs");
var _homeHbsDefault = parcelHelpers.interopDefault(_homeHbs);
var _loginHbs = require("./pages/login.hbs");
var _loginHbsDefault = parcelHelpers.interopDefault(_loginHbs);
var _modalsHbs = require("./pages/modals.hbs");
var _modalsHbsDefault = parcelHelpers.interopDefault(_modalsHbs);
var _profileHbs = require("./pages/profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _registrationHbs = require("./pages/registration.hbs");
var _registrationHbsDefault = parcelHelpers.interopDefault(_registrationHbs);
//style
var _globalScss = require("./assets/styles/global.scss");
var _globalScssDefault = parcelHelpers.interopDefault(_globalScss);
var _userJson = require("./mock/user.json");
var _userJsonDefault = parcelHelpers.interopDefault(_userJson);
function render(html) {
    const app = document.querySelector("#app");
    app.innerHTML = html;
}
const ROUTES = {
    "login": (0, _loginHbsDefault.default),
    "registration": (0, _registrationHbsDefault.default),
    "home": (0, _homeHbsDefault.default),
    "profile": (0, _profileHbsDefault.default),
    "edit-password": (0, _editPasswordHbsDefault.default),
    "edit-profile": (0, _editProfileHbsDefault.default),
    "500": (0, _500HbsDefault.default),
    "404": (0, _404HbsDefault.default),
    "modals": (0, _modalsHbsDefault.default)
};
window.goToPage = function(name) {
    const page = ROUTES[name];
    render(page({
        user: (0, _userJsonDefault.default),
        contacts: (0, _contactsJsonDefault.default)
    }));
};
window.addEventListener("DOMContentLoaded", ()=>{
    const context = {
        styles: (0, _globalScssDefault.default),
        user: (0, _userJsonDefault.default)
    };
    render(ROUTES.login(context));
});

},{"./layouts":"5c5Oi","./components":"6nkmk","./components/svg":"by6bl","./mock/contacts.json":"layyU","./pages/edit-password.hbs":"lRIQ3","./pages/edit-profile.hbs":"jwhL4","./pages/404.hbs":"52oLe","./pages/500.hbs":"a6zev","./pages/home.hbs":"3fDFY","./pages/login.hbs":"7cXQ0","./pages/modals.hbs":"cABAP","./pages/profile.hbs":"1b4LU","./pages/registration.hbs":"4AfXH","./assets/styles/global.scss":"8nuQp","./mock/user.json":"5gzWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5c5Oi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileLayout", ()=>(0, _profileLayout.ProfileLayout));
parcelHelpers.export(exports, "PrimaryLayout", ()=>(0, _primaryLayout.PrimaryLayout));
var _profileLayout = require("./profile-layout");
var _primaryLayout = require("./primary-layout");

},{"./profile-layout":"aRCRk","./primary-layout":"fQzUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRCRk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _handlebarsLayouts = require("handlebars-layouts");
var _handlebarsLayoutsDefault = parcelHelpers.interopDefault(_handlebarsLayouts);
var _profileLayoutHbs = require("./profile-layout.hbs");
var _profileLayoutHbsDefault = parcelHelpers.interopDefault(_profileLayoutHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ProfileLayout", (0, _profileLayoutHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerHelper((0, _handlebarsLayoutsDefault.default)((0, _handlebarsRuntimeDefault.default)));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","handlebars-layouts":"2m7X9","./profile-layout.hbs":"35vD7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = "4.7.7";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"];
        /***/ },
        /* 4 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === "function";
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === "function" && toString.call(value) === "[object Function]";
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== "string") {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return "";
                    else if (!string) return string + "";
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            }
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$defineProperty = __webpack_require__(6)["default"];
            exports.__esModule = true;
            var errorProps = [
                "description",
                "fileName",
                "lineNumber",
                "endLineNumber",
                "message",
                "name",
                "number",
                "stack"
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, "column", {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, "endColumn", {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports["default"] = Exception;
            module1.exports = exports["default"];
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module1, exports) {
            var $Object = Object;
            module1.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports["default"] = function(instance) {
                    instance.registerHelper("each", function(context, options) {
                        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === "object") {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(14);
            module1.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module1.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "1.2.6"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper("unless", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 26 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 27 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    "debug",
                    "info",
                    "warn",
                    "error"
                ],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = "log";
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports["default"] = logger;
            module1.exports = exports["default"];
        /***/ },
        /* 32 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module1, exports) {
            // Build out our basic SafeString type
            "use strict";
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            };
            exports["default"] = SafeString;
            module1.exports = exports["default"];
        /***/ },
        /* 37 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$seal = __webpack_require__(38)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join("\n");
                        }
                        return result;
                    } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context != options.depths[0] ? [
                            context
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") partial = options.data["partial-block"];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) (function() {
                    options.data = _base.createFrame(options.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data["partial-block"] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
                else if (partial instanceof Function) return partial(context, options);
            }
            function noop() {
                return "";
            }
            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(40);
            module1.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /* 42 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module1, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"2m7X9":[function(require,module,exports) {
"use strict";
var hasOwn = Object.prototype.hasOwnProperty;
function noop() {
    return "";
}
function getStack(context) {
    return context.$$layoutStack || (context.$$layoutStack = []);
}
function applyStack(context) {
    var stack = getStack(context);
    while(stack.length)stack.shift()(context);
}
function getActions(context) {
    return context.$$layoutActions || (context.$$layoutActions = {});
}
function getActionsByName(context, name) {
    var actions = getActions(context);
    return actions[name] || (actions[name] = []);
}
function applyAction(val, action) {
    var context = this;
    function fn() {
        return action.fn(context, action.options);
    }
    switch(action.mode){
        case "append":
            return val + fn();
        case "prepend":
            return fn() + val;
        case "replace":
            return fn();
        default:
            return val;
    }
}
function mixin(target) {
    var arg, key, len = arguments.length, i = 1;
    for(; i < len; i++){
        arg = arguments[i];
        if (!arg) continue;
        for(key in arg)// istanbul ignore else
        if (hasOwn.call(arg, key)) target[key] = arg[key];
    }
    return target;
}
/**
 * Generates an object of layout helpers.
 *
 * @type {Function}
 * @param {Object} handlebars Handlebars instance.
 * @return {Object} Object of helpers.
 */ function layouts(handlebars) {
    var helpers = {
        /**
		 * @method extend
		 * @param {String} name
		 * @param {?Object} customContext
		 * @param {Object} options
		 * @param {Function(Object)} options.fn
		 * @param {Object} options.hash
		 * @return {String} Rendered partial.
		 */ extend: function(name, customContext, options) {
            // Make `customContext` optional
            if (arguments.length < 3) {
                options = customContext;
                customContext = null;
            }
            options = options || {};
            var fn = options.fn || noop, context = mixin({}, this, customContext, options.hash), data = handlebars.createFrame(options.data), template = handlebars.partials[name];
            // Partial template required
            if (template == null) throw new Error("Missing partial: '" + name + "'");
            // Compile partial, if needed
            if (typeof template !== "function") template = handlebars.compile(template);
            // Add overrides to stack
            getStack(context).push(fn);
            // Render partial
            return template(context, {
                data: data
            });
        },
        /**
		 * @method embed
		 * @param {String} name
		 * @param {?Object} customContext
		 * @param {Object} options
		 * @param {Function(Object)} options.fn
		 * @param {Object} options.hash
		 * @return {String} Rendered partial.
		 */ embed: function() {
            var context = mixin({}, this || {});
            // Reset context
            context.$$layoutStack = null;
            context.$$layoutActions = null;
            // Extend
            return helpers.extend.apply(context, arguments);
        },
        /**
		 * @method block
		 * @param {String} name
		 * @param {Object} options
		 * @param {Function(Object)} options.fn
		 * @return {String} Modified block content.
		 */ block: function(name, options) {
            options = options || {};
            var fn = options.fn || noop, data = handlebars.createFrame(options.data), context = this || {};
            applyStack(context);
            return getActionsByName(context, name).reduce(applyAction.bind(context), fn(context, {
                data: data
            }));
        },
        /**
		 * @method content
		 * @param {String} name
		 * @param {Object} options
		 * @param {Function(Object)} options.fn
		 * @param {Object} options.hash
		 * @param {String} options.hash.mode
		 * @return {String} Always empty.
		 */ content: function(name, options) {
            options = options || {};
            var fn = options.fn, data = handlebars.createFrame(options.data), hash = options.hash || {}, mode = hash.mode || "replace", context = this || {};
            applyStack(context);
            // Getter
            if (!fn) return name in getActions(context);
            // Setter
            getActionsByName(context, name).push({
                options: {
                    data: data
                },
                mode: mode.toLowerCase(),
                fn: fn
            });
        }
    };
    return helpers;
}
/**
 * Registers layout helpers on a Handlebars instance.
 *
 * @method register
 * @param {Object} handlebars Handlebars instance.
 * @return {Object} Object of helpers.
 * @static
 */ layouts.register = function(handlebars) {
    var helpers = layouts(handlebars);
    handlebars.registerHelper(helpers);
    return helpers;
};
module.exports = layouts;

},{}],"35vD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return "";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<!doctype html>\n<html lang="en">\n  <div class="profileLayout">\n    ' + ((stack1 = (lookupProperty(helpers, "block") || depth0 && lookupProperty(depth0, "block") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "block",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 29
                }
            }
        })) != null ? stack1 : "") + "\n  </div>\n</html>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fQzUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _handlebarsLayouts = require("handlebars-layouts");
var _handlebarsLayoutsDefault = parcelHelpers.interopDefault(_handlebarsLayouts);
var _primaryLayoutHbs = require("./primary-layout.hbs");
var _primaryLayoutHbsDefault = parcelHelpers.interopDefault(_primaryLayoutHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("PrimaryLayout", (0, _primaryLayoutHbsDefault.default));
(0, _handlebarsRuntimeDefault.default).registerHelper((0, _handlebarsLayoutsDefault.default)((0, _handlebarsRuntimeDefault.default)));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","handlebars-layouts":"2m7X9","./primary-layout.hbs":"ftSuD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftSuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return "";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<!doctype html>\n<html lang="en">\n  <div class="PrimaryLayout">\n    <div class="PrimaryLayout__content">\n      ' + ((stack1 = (lookupProperty(helpers, "block") || depth0 && lookupProperty(depth0, "block") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "block",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 31
                }
            }
        })) != null ? stack1 : "") + "\n    </div>\n  </div>\n</html>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nkmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>(0, _button.Button));
parcelHelpers.export(exports, "ButtonBack", ()=>(0, _buttonBack.ButtonBack));
parcelHelpers.export(exports, "BodyProfile", ()=>(0, _bodyProfile.BodyProfile));
parcelHelpers.export(exports, "Contact", ()=>(0, _contact.Contact));
parcelHelpers.export(exports, "ContactMessage", ()=>(0, _contactMessage.ContactMessage));
parcelHelpers.export(exports, "EditPassword", ()=>(0, _editPassword.EditPassword));
parcelHelpers.export(exports, "EditProfile", ()=>(0, _editProfile.EditProfile));
parcelHelpers.export(exports, "HeadBar", ()=>(0, _headBar.HeadBar));
parcelHelpers.export(exports, "ListContacts", ()=>(0, _listContacts.ListContacts));
parcelHelpers.export(exports, "LoginForm", ()=>(0, _loginForm.LoginForm));
parcelHelpers.export(exports, "MyMessage", ()=>(0, _myMessage.MyMessage));
parcelHelpers.export(exports, "ReadMessage", ()=>(0, _readMessage.ReadMessage));
parcelHelpers.export(exports, "RegistrationForm", ()=>(0, _registrationForm.RegistrationForm));
parcelHelpers.export(exports, "WriteMessage", ()=>(0, _writeMessage.WriteMessage));
parcelHelpers.export(exports, "Input", ()=>(0, _input.Input));
parcelHelpers.export(exports, "InputMessage", ()=>(0, _inputMessage.InputMessage));
parcelHelpers.export(exports, "InputProfile", ()=>(0, _inputProfile.InputProfile));
parcelHelpers.export(exports, "InputSearch", ()=>(0, _inputSearch.InputSearch));
parcelHelpers.export(exports, "ModalFileError", ()=>(0, _modalFileError.ModalFileError));
parcelHelpers.export(exports, "ModalFileOnload", ()=>(0, _modalFileOnload.ModalFileOnload));
parcelHelpers.export(exports, "ModalFileUpload", ()=>(0, _modalFileUpload.ModalFileUpload));
parcelHelpers.export(exports, "ModalUserAdd", ()=>(0, _modalUserAdd.ModalUserAdd));
parcelHelpers.export(exports, "ModalUserDelete", ()=>(0, _modalUserDelete.ModalUserDelete));
var _button = require("./buttons/button");
var _buttonBack = require("./buttons/button-back");
var _bodyProfile = require("./common/body-profile");
var _contact = require("./common/contact");
var _contactMessage = require("./common/contact-message");
var _editPassword = require("./common/edit-password");
var _editProfile = require("./common/edit-profile");
var _headBar = require("./common/head-bar");
var _listContacts = require("./common/list-contacts");
var _loginForm = require("./common/login-form");
var _myMessage = require("./common/my-message");
var _readMessage = require("./common/read-message");
var _registrationForm = require("./common/registration-form");
var _writeMessage = require("./common/write-message");
var _input = require("./fields/input");
var _inputMessage = require("./fields/input-message");
var _inputProfile = require("./fields/input-profile");
var _inputSearch = require("./fields/input-search");
var _modalFileError = require("./modals/modal-file-error");
var _modalFileOnload = require("./modals/modal-file-onload");
var _modalFileUpload = require("./modals/modal-file-upload");
var _modalUserAdd = require("./modals/modal-user-add");
var _modalUserDelete = require("./modals/modal-user-delete");

},{"./buttons/button":"9JCb3","./buttons/button-back":"dE85D","./common/body-profile":"kl9L2","./common/contact":"6T1BE","./common/contact-message":"8DmZI","./common/edit-password":"ZDEMm","./common/edit-profile":"jnPSr","./common/head-bar":"b6x55","./common/list-contacts":"iCvvu","./common/login-form":"eTZz0","./common/my-message":"etLQp","./common/read-message":"fdQZ1","./common/registration-form":"hupjR","./common/write-message":"aRslX","./fields/input":"2nbid","./fields/input-message":"dOw7I","./fields/input-profile":"l4gzG","./fields/input-search":"berYe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modals/modal-file-error":"kwyx5","./modals/modal-file-onload":"3vzB7","./modals/modal-file-upload":"a2h9M","./modals/modal-user-add":"8Losy","./modals/modal-user-delete":"31c6o"}],"9JCb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("Button", (0, _buttonHbsDefault.default));

},{"./button.hbs":"dHQER","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHQER":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<button onclick=" + alias4((helper = (helper = lookupProperty(helpers, "onClick") || (depth0 != null ? lookupProperty(depth0, "onClick") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "onClick",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 16
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            }
        }) : helper)) + ' class="button button_blue f-normal ' + alias4((helper = (helper = lookupProperty(helpers, "className") || (depth0 != null ? lookupProperty(depth0, "className") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "className",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 63
                },
                "end": {
                    "line": 1,
                    "column": 76
                }
            }
        }) : helper)) + '">\n  ' + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 11
                }
            }
        }) : helper)) + alias4((helper = (helper = lookupProperty(helpers, "symbol") || (depth0 != null ? lookupProperty(depth0, "symbol") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "symbol",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 11
                },
                "end": {
                    "line": 2,
                    "column": 21
                }
            }
        }) : helper)) + "\n</button>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dE85D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _buttonBackHbs = require("./button-back.hbs");
var _buttonBackHbsDefault = parcelHelpers.interopDefault(_buttonBackHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("ButtonBack", (0, _buttonBackHbsDefault.default));

},{"./button-back.hbs":"fI2D9","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fI2D9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<button onclick=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "onClick") || (depth0 != null ? lookupProperty(depth0, "onClick") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "onClick",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 16
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            }
        }) : helper)) + ' class="button_back">\n  <div class="button_back-label">' + ((stack1 = container.invokePartial(lookupProperty(partials, "LeftSVG"), depth0, {
            "name": "LeftSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>\n</button>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kl9L2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bodyProfileHbs = require("./body-profile.hbs");
var _bodyProfileHbsDefault = parcelHelpers.interopDefault(_bodyProfileHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("BodyProfile", (0, _bodyProfileHbsDefault.default));

},{"./body-profile.hbs":"8lgoc","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lgoc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="body_profile">\n    <div class="body_profile-photo">\n        <div class="photo_update" data-title="Поменять аватар"></div>\n        <div>' + ((stack1 = container.invokePartial(lookupProperty(partials, "PhotoSVG"), depth0, {
            "name": "PhotoSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '</div>\n    </div>\n    <div class="f-title-bold body_profile-username">' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + '</div>\n    <div class="form__profile f-normal">\n        <div class="form__profile_row">\n            <div>Почта</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "email") : stack1, depth0)) + '</div> \n        </div>\n        <div class="form__profile_row">\n            <div>Логин</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "login") : stack1, depth0)) + '</div>\n        </div>\n        <div class="form__profile_row">\n            <div>Имя</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "first_name") : stack1, depth0)) + '</div>\n        </div>\n        <div class="form__profile_row">\n            <div>Фамилия</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "second_name") : stack1, depth0)) + '</div>\n        </div>\n        <div class="form__profile_row">\n            <div>Имя в чате</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + '</div>\n        </div>\n        <div class="form__profile_row">\n            <div>Телефон</div>\n            <div>' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "phone") : stack1, depth0)) + '</div>\n        </div>\n    </div>\n    <div class="body_profile-edit f-normal">\n        <div class="btn-edit" onclick="goToPage(\'edit-profile\')">\n            Изменить данные\n        </div>\n        <div class="btn-edit" onclick="goToPage(\'edit-password\')">\n            Изменить пароль\n        </div>\n        <div class="btn-exit" onclick="goToPage(\'login\')">\n            Выйти\n        </div>\n    </div>\n</div>';
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6T1BE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _contactHbs = require("./contact.hbs");
var _contactHbsDefault = parcelHelpers.interopDefault(_contactHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("Contact", (0, _contactHbsDefault.default));

},{"./contact.hbs":"iuyys","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuyys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="contact">\n  <div class="contact_wrapper">\n    <div class="contact_avatar">\n    </div>\n    <div class="contact_user">\n      <div class="contact_user-name f-bold">\n        ' + alias4((helper = (helper = lookupProperty(helpers, "display_name") || (depth0 != null ? lookupProperty(depth0, "display_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "display_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 24
                }
            }
        }) : helper)) + '\n      </div>\n      <div class="contact_user-msg f-light">\n        <span class="f-bold">' + alias4((helper = (helper = lookupProperty(helpers, "from") || (depth0 != null ? lookupProperty(depth0, "from") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "from",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 29
                },
                "end": {
                    "line": 11,
                    "column": 37
                }
            }
        }) : helper)) + "</span> " + alias4((helper = (helper = lookupProperty(helpers, "message") || (depth0 != null ? lookupProperty(depth0, "message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 45
                },
                "end": {
                    "line": 11,
                    "column": 56
                }
            }
        }) : helper)) + '\n      </div>\n    </div>\n    <div class="contact_info">\n      <div class="contact_info-date f-mini">\n        ' + alias4((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "date",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 8
                },
                "end": {
                    "line": 16,
                    "column": 16
                }
            }
        }) : helper)) + '\n      </div>\n      <div class="contact_info-msg f-light">\n        ' + alias4((helper = (helper = lookupProperty(helpers, "count") || (depth0 != null ? lookupProperty(depth0, "count") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "count",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 8
                },
                "end": {
                    "line": 19,
                    "column": 17
                }
            }
        }) : helper)) + "\n      </div>\n    </div>\n  </div>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DmZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _contactMessageHbs = require("./contact-message.hbs");
var _contactMessageHbsDefault = parcelHelpers.interopDefault(_contactMessageHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("ContactMessage", (0, _contactMessageHbsDefault.default));

},{"./contact-message.hbs":"bsf3Q","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsf3Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="contact_msg f-light">\n  ' + alias4((helper = (helper = lookupProperty(helpers, "contact_msg") || (depth0 != null ? lookupProperty(depth0, "contact_msg") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "contact_msg",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) + '\n  <div class="contact_msg-time f-mini">' + alias4((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 39
                },
                "end": {
                    "line": 3,
                    "column": 47
                }
            }
        }) : helper)) + "</div>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZDEMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _editPasswordHbs = require("./edit-password.hbs");
var _editPasswordHbsDefault = parcelHelpers.interopDefault(_editPasswordHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("EditPassword", (0, _editPasswordHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./edit-password.hbs":"eaeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eaeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="edit-password">\n    <div class="edit-password-photo">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "PhotoSVG"), depth0, {
            "name": "PhotoSVG",
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="f-title-bold edit-password-username">' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + '</div>\n    <div class="form__edit f-normal">\n        <div class="form__edit_row">\n            <div>Старый пароль</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "value": "",
                "placeholderInput": "•••••••••••",
                "inputName": "oldPassword",
                "typeInput": "password",
                "idInput": "oldPassword"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Новый пароль</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "value": "",
                "placeholderInput": "•••••••••••",
                "inputName": "newPassword",
                "typeInput": "password",
                "idInput": "newPassword"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Повторите новый пароль</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "value": "",
                "placeholderInput": "•••••••••••",
                "inputName": "newPasswordTwo",
                "typeInput": "password",
                "idInput": "newPasswordTwo"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "        </div>\n    </div>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "goToPage('profile')",
                "label": "Сохранить"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jnPSr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editProfileHbs = require("./edit-profile.hbs");
var _editProfileHbsDefault = parcelHelpers.interopDefault(_editProfileHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("EditProfile", (0, _editProfileHbsDefault.default));

},{"./edit-profile.hbs":"bZgNP","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZgNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="edit_profile">\n    <div class="edit_profile-photo">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "PhotoSVG"), depth0, {
            "name": "PhotoSVG",
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="f-title-bold edit_profile-username">' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1, depth0)) + '</div>\n    <form class="form__edit f-normal">\n        <div class="form__edit_row">\n            <div>Почта</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "35",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "email") : stack1,
                "placeholderInput": "Почта",
                "inputName": "email",
                "typeInput": "email",
                "idInput": "email",
                "id": "text"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Логин</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "35",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "login") : stack1,
                "placeholderInput": "Логин",
                "inputName": "login",
                "typeInput": "text",
                "idInput": "login",
                "id": "text"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Имя</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "35",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "first_name") : stack1,
                "placeholderInput": "Имя",
                "inputName": "firstName",
                "typeInput": "text",
                "idInput": "firstName",
                "id": "text"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Фамилия</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "35",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "second_name") : stack1,
                "placeholderInput": "Фамилия",
                "inputName": "secondName",
                "typeInput": "text",
                "idInput": "secondName",
                "id": "text"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Имя в чате</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "35",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "display_name") : stack1,
                "placeholderInput": "Имя в чате",
                "inputName": "displayName",
                "typeInput": "text",
                "idInput": "displayName",
                "id": "text"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </div>\n        <div class="form__edit_row">\n            <div>Телефон</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputProfile"), depth0, {
            "name": "InputProfile",
            "hash": {
                "maxLength": "17",
                "value": (stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "phone") : stack1,
                "placeholderInput": "+7(123)123-34-56",
                "inputName": "phone",
                "typeInput": "tel",
                "idInput": "phone",
                "id": "phone"
            },
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "        </div>\n    </form>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "goToPage('profile')",
                "label": "Сохранить"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6x55":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _headBarHbs = require("./head-bar.hbs");
var _headBarHbsDefault = parcelHelpers.interopDefault(_headBarHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("HeadBar", (0, _headBarHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./head-bar.hbs":"3WoUg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WoUg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="head_bar">\n  <div class="head_bar-user">\n    <div class="head_bar-avatar">\n    </div>\n    <div class="head_bar-username f-bold">\n        ' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "display_name") || (depth0 != null ? lookupProperty(depth0, "display_name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "display_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 24
                }
            }
        }) : helper)) + '\n    </div>\n  </div>\n  <ul class="head_bar-options">\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</div>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCvvu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _listContactsHbs = require("./list-contacts.hbs");
var _listContactsHbsDefault = parcelHelpers.interopDefault(_listContactsHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ListContacts", (0, _listContactsHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./list-contacts.hbs":"fjNxT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjNxT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data, blockParams) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = container.invokePartial(lookupProperty(partials, "childEntry"), depth0, {
            "name": "childEntry",
            "fn": container.program(2, data, 0, blockParams),
            "inverse": container.noop,
            "data": data,
            "blockParams": blockParams,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data, blockParams) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "Contact"), depth0, {
            "name": "Contact",
            "hash": {
                "count": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "count") : stack1,
                "date": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "date") : stack1,
                "message": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "message") : stack1,
                "from": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "from") : stack1,
                "display_name": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "display_name") : stack1,
                "avatar": (stack1 = blockParams[1][0]) != null ? lookupProperty(stack1, "avatar") : stack1
            },
            "data": data,
            "blockParams": blockParams,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '      <div class="line_x"></div>\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data, blockParams) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="ListContacts">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "contacts") : depth0) != null ? lookupProperty(stack1, "people") : stack1, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 1, blockParams),
            "inverse": container.noop,
            "data": data,
            "blockParams": blockParams,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 14,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true,
    "useBlockParams": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTZz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _loginFormHbs = require("./login-form.hbs");
var _loginFormHbsDefault = parcelHelpers.interopDefault(_loginFormHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("LoginForm", (0, _loginFormHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./login-form.hbs":"9KhFd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KhFd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="form_login" >\n  <div class="f-header">Вход</div>\n  <form onsubmit="event.preventDefault()">\n    <div class="input_login">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "maxLength": "35",
                "name": "login",
                "id": "login",
                "label": "Логин",
                "type": "text"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="input_pass">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "maxLength": "35",
                "name": "password",
                "id": "password",
                "label": "Пароль",
                "type": "password"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    </div>\n    <div class="buttons">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "form": "data",
                "type": "submit",
                "onClick": "goToPage('home')",
                "label": "Авторизоваться"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('registration')",
                "label": "Нет аккаунта?"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n  </form>\n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etLQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _myMessageHbs = require("./my-message.hbs");
var _myMessageHbsDefault = parcelHelpers.interopDefault(_myMessageHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("MyMessage", (0, _myMessageHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./my-message.hbs":"8XrbV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XrbV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="my_message-position">\n<div class="my_message f-light">' + alias4((helper = (helper = lookupProperty(helpers, "my_msg") || (depth0 != null ? lookupProperty(depth0, "my_msg") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "my_msg",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 32
                },
                "end": {
                    "line": 2,
                    "column": 42
                }
            }
        }) : helper)) + '\n    <div class="my_message-time f-mini">' + ((stack1 = container.invokePartial(lookupProperty(partials, "CheckMessageSVG"), depth0, {
            "name": "CheckMessageSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + alias4((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 61
                },
                "end": {
                    "line": 3,
                    "column": 69
                }
            }
        }) : helper)) + "</div>\n</div>\n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdQZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _readMessageHbs = require("./read-message.hbs");
var _readMessageHbsDefault = parcelHelpers.interopDefault(_readMessageHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ReadMessage", (0, _readMessageHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./read-message.hbs":"8bNRd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bNRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="read-message">\n	<div class="messages-day f-light">19 июня</div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ContactMessage"), depth0, {
            "name": "ContactMessage",
            "hash": {
                "contact_msg": "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.",
                "time": "11:56"
            },
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "MyMessage"), depth0, {
            "name": "MyMessage",
            "hash": {
                "my_msg": "Круто!",
                "time": "12:00"
            },
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ContactMessage"), depth0, {
            "name": "ContactMessage",
            "hash": {
                "contact_msg": "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.",
                "time": "11:56"
            },
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ContactMessage"), depth0, {
            "name": "ContactMessage",
            "hash": {
                "contact_msg": "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.",
                "time": "11:56"
            },
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "MyMessage"), depth0, {
            "name": "MyMessage",
            "hash": {
                "my_msg": "Круто!",
                "time": "12:00"
            },
            "data": data,
            "indent": "		",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hupjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _registrationFormHbs = require("./registration-form.hbs");
var _registrationFormHbsDefault = parcelHelpers.interopDefault(_registrationFormHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("RegistrationForm", (0, _registrationFormHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./registration-form.hbs":"jUeJF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUeJF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="form_registration" >\n  <div class="f-header">Регистрация</div>\n  <form class="form_registration_inputs" onsubmit="event.preventDefault()">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "email",
                "name": "email",
                "id": "email",
                "label": "Почта"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "login",
                "name": "login",
                "id": "login",
                "label": "Логин"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "firstName",
                "name": "firstName",
                "id": "firstName",
                "label": "Имя"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "secondName",
                "name": "secondName",
                "id": "secondName",
                "label": "Фамилия"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "phone",
                "name": "phone",
                "id": "phone",
                "label": "Телефон"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "type": "password",
                "name": "newPassword",
                "id": "newPassword",
                "label": "Пароль"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "name": "newPasswordTwo",
                "id": "newPassword",
                "label": "Пароль (еще раз)",
                "type": "password"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '  <div class="form_registration_buttons">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "type": "onsubmit",
                "onClick": "goToPage('home')",
                "label": "Зарегистрироваться"
            },
            "data": data,
            "indent": "  ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('login')",
                "label": "Войти"
            },
            "data": data,
            "indent": "  ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "  </div>\n  </form>  \n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRslX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _writeMessageHbs = require("./write-message.hbs");
var _writeMessageHbsDefault = parcelHelpers.interopDefault(_writeMessageHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("WriteMessage", (0, _writeMessageHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./write-message.hbs":"92HY6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92HY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="write-message">\n    <div class="attach_message">' + ((stack1 = container.invokePartial(lookupProperty(partials, "AttachSVG"), depth0, {
            "name": "AttachSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "InputMessage"), depth0, {
            "name": "InputMessage",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    <div class="post_message">' + ((stack1 = container.invokePartial(lookupProperty(partials, "RightSVG"), depth0, {
            "name": "RightSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>\n</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nbid":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("Input", (0, _inputHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./input.hbs":"2NXIl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NXIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="text-field text-field_floating-3">\n  <input\n    class="text-field__input"\n    autocomplete="off"\n    id=' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 7
                },
                "end": {
                    "line": 5,
                    "column": 15
                }
            }
        }) : helper)) + "\n    type=" + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 9
                },
                "end": {
                    "line": 6,
                    "column": 17
                }
            }
        }) : helper)) + "\n    name=" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 9
                },
                "end": {
                    "line": 7,
                    "column": 17
                }
            }
        }) : helper)) + "\n    placeholder=" + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 16
                },
                "end": {
                    "line": 8,
                    "column": 31
                }
            }
        }) : helper)) + "\n    maxlength=" + alias4((helper = (helper = lookupProperty(helpers, "maxLength") || (depth0 != null ? lookupProperty(depth0, "maxLength") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "maxLength",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 14
                },
                "end": {
                    "line": 9,
                    "column": 27
                }
            }
        }) : helper)) + '\n  >\n  <label class="text-field__label" for=' + alias4((helper = (helper = lookupProperty(helpers, "for") || (depth0 != null ? lookupProperty(depth0, "for") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "for",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 39
                },
                "end": {
                    "line": 11,
                    "column": 46
                }
            }
        }) : helper)) + ">\n    " + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 4
                },
                "end": {
                    "line": 12,
                    "column": 13
                }
            }
        }) : helper)) + "\n  </label>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dOw7I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _inputMessageHbs = require("./input-message.hbs");
var _inputMessageHbsDefault = parcelHelpers.interopDefault(_inputMessageHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("InputMessage", (0, _inputMessageHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./input-message.hbs":"21KD6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21KD6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<input\n  class="message-field__input"\n  type="text"\n  id="message"\n  placeholder="Сообщение"\n  maxlength="500"\n/>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4gzG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _inputProfileHbs = require("./input-profile.hbs");
var _inputProfileHbsDefault = parcelHelpers.interopDefault(_inputProfileHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("InputProfile", (0, _inputProfileHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./input-profile.hbs":"2D63K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2D63K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input\n  class="input_profile"\n  autocomplete="off"\n  id=' + alias4((helper = (helper = lookupProperty(helpers, "idInput") || (depth0 != null ? lookupProperty(depth0, "idInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "idInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 5
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        }) : helper)) + "\n  type=" + alias4((helper = (helper = lookupProperty(helpers, "typeInput") || (depth0 != null ? lookupProperty(depth0, "typeInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "typeInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 7
                },
                "end": {
                    "line": 5,
                    "column": 20
                }
            }
        }) : helper)) + "\n  name=" + alias4((helper = (helper = lookupProperty(helpers, "inputName") || (depth0 != null ? lookupProperty(depth0, "inputName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inputName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 7
                },
                "end": {
                    "line": 6,
                    "column": 20
                }
            }
        }) : helper)) + "\n  placeholder=" + alias4((helper = (helper = lookupProperty(helpers, "placeholderInput") || (depth0 != null ? lookupProperty(depth0, "placeholderInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholderInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 14
                },
                "end": {
                    "line": 7,
                    "column": 34
                }
            }
        }) : helper)) + "\n  maxlength=" + alias4((helper = (helper = lookupProperty(helpers, "maxLength") || (depth0 != null ? lookupProperty(depth0, "maxLength") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "maxLength",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 12
                },
                "end": {
                    "line": 8,
                    "column": 25
                }
            }
        }) : helper)) + "\n  value=" + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 17
                }
            }
        }) : helper)) + "\n  >\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"berYe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _inputSearchHbs = require("./input-search.hbs");
var _inputSearchHbsDefault = parcelHelpers.interopDefault(_inputSearchHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("InputSearch", (0, _inputSearchHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./input-search.hbs":"03wUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03wUH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '  <input\n    class="search-field__input"\n    type="text"\n    id="search"\n    name="search"\n    placeholder="Поиск"\n    maxlength="100"\n  />';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwyx5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _modalFileErrorHbs = require("./modal-file-error.hbs");
var _modalFileErrorHbsDefault = parcelHelpers.interopDefault(_modalFileErrorHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ModalFileError", (0, _modalFileErrorHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./modal-file-error.hbs":"8yXUW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yXUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="modal_box">\n    <div class="f-title f-red">\n        Ошибка, попробуйте ещё раз\n    </div>\n    <div class="f-light f-link">\n        Выбрать файл на компьютере\n    </div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "(alert(1))",
                "label": "Поменять"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vzB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _modalFileOnloadHbs = require("./modal-file-onload.hbs");
var _modalFileOnloadHbsDefault = parcelHelpers.interopDefault(_modalFileOnloadHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ModalFileOnload", (0, _modalFileOnloadHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./modal-file-onload.hbs":"g2PwB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2PwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="modal_box">\n    <div class="f-title">\n        Загрузите файл\n    </div>\n    <div class="f-normal f-link">\n        Выбрать файл на компьютере\n    </div>\n    <div class="f-light f-red">\n        Нужно выбрать файл\n    </div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "(alert(2))",
                "label": "Поменять"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2h9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _modalFileUploadHbs = require("./modal-file-upload.hbs");
var _modalFileUploadHbsDefault = parcelHelpers.interopDefault(_modalFileUploadHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ModalFileUpload", (0, _modalFileUploadHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./modal-file-upload.hbs":"kRMGs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRMGs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="modal_box">\n    <div class="f-title">\n        Файл загружен\n    </div>\n    <div class="f-normal f-silver">\n        pic.jpg\n    </div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "(alert(3))",
                "label": "Поменять"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Losy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _modalUserAddHbs = require("./modal-user-add.hbs");
var _modalUserAddHbsDefault = parcelHelpers.interopDefault(_modalUserAddHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ModalUserAdd", (0, _modalUserAddHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./modal-user-add.hbs":"4cqYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4cqYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="modal_box">\n    <div class="f-title">\n        Добавить пользователя\n    </div>\n    <div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "maxLength": "35",
                "name": "login",
                "id": "login",
                "label": "Логин",
                "type": "text"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "(alert(5))",
                "label": "Добавить"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31c6o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _modalUserDeleteHbs = require("./modal-user-delete.hbs");
var _modalUserDeleteHbsDefault = parcelHelpers.interopDefault(_modalUserDeleteHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ModalUserDelete", (0, _modalUserDeleteHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./modal-user-delete.hbs":"8If9Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8If9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="modal_box">\n    <div class="f-title">\n        Удалить пользователя\n    </div>\n    <div>\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Input"), depth0, {
            "name": "Input",
            "hash": {
                "maxLength": "35",
                "name": "login",
                "id": "login",
                "label": "Логин",
                "type": "text"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "onClick": "(alert(5))",
                "label": "Удалить"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</div>";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"by6bl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddSVG", ()=>(0, _addSvg.AddSVG));
parcelHelpers.export(exports, "AttachSVG", ()=>(0, _attachSvg.AttachSVG));
parcelHelpers.export(exports, "BlueFileSVG", ()=>(0, _bluePhotoSvg.BlueFileSVG));
parcelHelpers.export(exports, "BluePhotoSVG", ()=>(0, _bluePhotoSvg.BluePhotoSVG));
parcelHelpers.export(exports, "CheckMessageSVG", ()=>(0, _checkMessageSvg.CheckMessageSVG));
parcelHelpers.export(exports, "LeftSVG", ()=>(0, _leftSvg.LeftSVG));
parcelHelpers.export(exports, "MoreSVG", ()=>(0, _moreSvg.MoreSVG));
parcelHelpers.export(exports, "PhotoSVG", ()=>(0, _photoSvg.PhotoSVG));
parcelHelpers.export(exports, "RemoveSVG", ()=>(0, _removeSvg.RemoveSVG));
parcelHelpers.export(exports, "RightSVG", ()=>(0, _rightSvg.RightSVG));
parcelHelpers.export(exports, "ZoomSVG", ()=>(0, _zoomSvg.ZoomSVG));
var _addSvg = require("./add-svg");
var _attachSvg = require("./attach-svg");
var _bluePhotoSvg = require("./blue-photo-svg");
var _checkMessageSvg = require("./check-message-svg");
var _leftSvg = require("./left-svg");
var _moreSvg = require("./more-svg");
var _photoSvg = require("./photo-svg");
var _removeSvg = require("./remove-svg");
var _rightSvg = require("./right-svg");
var _zoomSvg = require("./zoom-svg");

},{"./add-svg":"4YASi","./attach-svg":"5rGJI","./blue-photo-svg":"3Wdhc","./check-message-svg":"mhwC1","./left-svg":"dZEzS","./more-svg":"hUc5Q","./photo-svg":"8WWEH","./remove-svg":"4NTvf","./right-svg":"3IPys","./zoom-svg":"1LC5N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YASi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _addSvgHbs = require("./add-svg.hbs");
var _addSvgHbsDefault = parcelHelpers.interopDefault(_addSvgHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("AddSVG", (0, _addSvgHbsDefault.default));

},{"./add-svg.hbs":"6z2ot","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z2ot":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="12"\n  height="12"\n  viewBox="0 0 12 12"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <line\n    x1="5.99988"\n    y1="0.5"\n    x2="5.99988"\n    y2="11.5"\n    stroke="#3369F3"\n    stroke-width="1.5"\n  ></line>\n  <line\n    x1="0.499878"\n    y1="6"\n    x2="11.4999"\n    y2="6"\n    stroke="#3369F3"\n    stroke-width="1.5"\n  ></line>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rGJI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _attachSvgHbs = require("./attach-svg.hbs");
var _attachSvgHbsDefault = parcelHelpers.interopDefault(_attachSvgHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("AttachSVG", (0, _attachSvgHbsDefault.default));

},{"./attach-svg.hbs":"fIBI3","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIBI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>\n</svg>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Wdhc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bluePhotoSvgHbs = require("./blue-photo-svg.hbs");
var _bluePhotoSvgHbsDefault = parcelHelpers.interopDefault(_bluePhotoSvgHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("BluePhotoSVG", (0, _bluePhotoSvgHbsDefault.default));

},{"./blue-photo-svg.hbs":"bCTg0","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCTg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="22"\n  height="22"\n  viewBox="0 0 22 22"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"\n    fill="#3369F3"\n  ></path>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mhwC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _checkMessageSvgHbs = require("./check-message-svg.hbs");
var _checkMessageSvgHbsDefault = parcelHelpers.interopDefault(_checkMessageSvgHbs);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
(0, _handlebarsRuntimeDefault.default).registerPartial("CheckMessageSVG", (0, _checkMessageSvgHbsDefault.default));

},{"./check-message-svg.hbs":"3WEnw","handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WEnw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>\n<line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>\n<line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>\n</svg>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZEzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _leftSvgHbs = require("./left-svg.hbs");
var _leftSvgHbsDefault = parcelHelpers.interopDefault(_leftSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("LeftSVG", (0, _leftSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./left-svg.hbs":"eT6PU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eT6PU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="13" y="6.80005" width="11" height="1.6" transform="rotate(-180 13 6.80005)" fill="white"/>\n<path d="M6 11L2 6L6 1" stroke="white" stroke-width="1.6"/>\n</svg>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUc5Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _moreSvgHbs = require("./more-svg.hbs");
var _moreSvgHbsDefault = parcelHelpers.interopDefault(_moreSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("MoreSVG", (0, _moreSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./more-svg.hbs":"5Vo3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Vo3s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg width="16" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 9C2.5621 7.4379 3.4379 6.5621 5 5C3.4379 3.4379 2.5621 2.5621 1 1" stroke="#999999"/>\n</svg>\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WWEH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _photoSvgHbs = require("./photo-svg.hbs");
var _photoSvgHbsDefault = parcelHelpers.interopDefault(_photoSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("PhotoSVG", (0, _photoSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./photo-svg.hbs":"4yHJv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yHJv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="40"\n  height="40"\n  viewBox="0 0 40 40"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z"\n    fill="#CDCDCD"\n  ></path>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NTvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _removeSvgHbs = require("./remove-svg.hbs");
var _removeSvgHbsDefault = parcelHelpers.interopDefault(_removeSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("RemoveSVG", (0, _removeSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./remove-svg.hbs":"lJmry","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJmry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="16"\n  height="16"\n  viewBox="0 0 16 16"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <line\n    x1="4.11077"\n    y1="4.11103"\n    x2="11.8889"\n    y2="11.8892"\n    stroke="#3369F3"\n    stroke-width="1.5"\n  ></line>\n  <line\n    x1="4.11078"\n    y1="11.8891"\n    x2="11.889"\n    y2="4.11093"\n    stroke="#3369F3"\n    stroke-width="1.5"\n  ></line>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IPys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _rightSvgHbs = require("./right-svg.hbs");
var _rightSvgHbsDefault = parcelHelpers.interopDefault(_rightSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("RightSVG", (0, _rightSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./right-svg.hbs":"8dmsd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dmsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="13"\n  height="12"\n  viewBox="0 0 13 12"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <rect y="5.19995" width="11" height="1.6" fill="white"></rect>\n  <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"></path>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LC5N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
var _zoomSvgHbs = require("./zoom-svg.hbs");
var _zoomSvgHbsDefault = parcelHelpers.interopDefault(_zoomSvgHbs);
(0, _handlebarsRuntimeDefault.default).registerPartial("ZoomSVG", (0, _zoomSvgHbsDefault.default));

},{"handlebars/dist/handlebars.runtime":"b7ZpO","./zoom-svg.hbs":"1DoIS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1DoIS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<svg\n  width="13"\n  height="14"\n  viewBox="0 0 13 14"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M7.59239 8.41379C6.16047 9.84571 3.83886 9.84571 2.40694 8.41379C0.975017 6.98187 0.975017 4.66027 2.40694 3.22834C3.83886 1.79642 6.16047 1.79642 7.59239 3.22834C9.02431 4.66027 9.02431 6.98187 7.59239 8.41379ZM8.03277 9.79675C6.07255 11.2961 3.25696 11.1494 1.46413 9.3566C-0.488491 7.40398 -0.488491 4.23816 1.46413 2.28553C3.41675 0.332912 6.58258 0.332912 8.5352 2.28553C10.3279 4.07828 10.4747 6.8937 8.97555 8.85391L12.5423 12.4206L11.5994 13.3634L8.03277 9.79675Z"\n    fill="#999999"\n  ></path>\n</svg>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"layyU":[function(require,module,exports) {
module.exports = JSON.parse('{"people":[{"avatar":"links","display_name":"Киноклуб","from":"Вы","message":"стикер","date":"12:00","count":"2"},{"avatar":"links","display_name":"Илья","from":"Вы","message":"Друзья, у меня для вас особенный выпуск новостей!...","date":"15:12","count":"4"},{"avatar":"links","display_name":"Вадим","from":"Вы","message":"Круто!","date":"Пт","count":"2"},{"avatar":"links","display_name":"тет-а-теты","from":"Вы","message":"И Human Interface Guidelines и Material Design рекомендуют...","date":"Ср","count":"2"},{"avatar":"links","display_name":"1, 2, 3","from":"Вы","message":"Миллионы россиян ежедневно проводят десятки часов свое...","date":"Пн","count":"2"},{"avatar":"links","display_name":"Design Destroyer","from":"Вы","message":"В 2008 году художник Jon Rafman\xa0 начал собирать...","date":"Пн","count":"2"},{"avatar":"links","display_name":"Day.","from":"Вы","message":"Так увлёкся работой по курсу, что совсем забыл его анонсир...","date":"01.02","count":"2"},{"avatar":"links","display_name":"Стас Рогозин","from":"Вы","message":"Можно или сегодня или завтра вечером.","date":"01.02","count":"2"},{"avatar":"links","display_name":"Стас Рогозин","from":"Вы","message":"Можно или сегодня или завтра вечером.","date":"01.02","count":"2"},{"avatar":"links","display_name":"Стас Рогозин","from":"Вы","message":"Можно или сегодня или завтра вечером.","date":"01.02","count":"2"}]}');

},{}],"lRIQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <div class="page_profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ButtonBack"), depth0, {
            "name": "ButtonBack",
            "hash": {
                "onClick": "goToPage('home')"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "EditPassword"), depth0, {
            "name": "EditPassword",
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwhL4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <div class="page_profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ButtonBack"), depth0, {
            "name": "ButtonBack",
            "hash": {
                "onClick": "goToPage('home')"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "EditProfile"), depth0, {
            "name": "EditProfile",
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52oLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 18,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '  <div class="page_error">\n    <span class="f-big">\n      404\n    </span>\n    <span class="f-header error_message">\n      Не туда попали\n    </span>\n    <div class="error_next">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('login')",
                "label": "Назад к чатам"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n  </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 19,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6zev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 18,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '  <div class="page_error">\n    <span class="f-big">\n      500\n    </span>\n    <span class="f-header error_message">\n      Мы уже фиксим\n    </span>\n    <div class="error_next">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('login')",
                "label": "Назад к чатам"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n  </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 19,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fDFY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 22,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <div class="page_home">\n      <div class="page_home-bar">\n        <section class="page_home-bar_top">\n          <div onclick="goToPage(\'profile\')"  class="button_default">Профиль ' + ((stack1 = container.invokePartial(lookupProperty(partials, "MoreSVG"), depth0, {
            "name": "MoreSVG",
            "data": data,
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '</div>\n          <div class="page_home-bar_search">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "InputSearch"), depth0, {
            "name": "InputSearch",
            "data": data,
            "indent": "            ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '          </div>\n        </section>\n        <div class="line_x"></div>\n        <section class="page_home-contacts">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ListContacts"), depth0, {
            "name": "ListContacts",
            "data": data,
            "indent": "          ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '        </section>\n      </div>\n      <div class="page_home-chat">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "HeadBar"), depth0, {
            "name": "HeadBar",
            "hash": {
                "display_name": "Ананас",
                "avatar": "avatar"
            },
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ReadMessage"), depth0, {
            "name": "ReadMessage",
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "WriteMessage"), depth0, {
            "name": "WriteMessage",
            "data": data,
            "indent": "        ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "      </div>\n    </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 23,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "\n";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7cXQ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 9,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return ((stack1 = container.invokePartial(lookupProperty(partials, "LoginForm"), depth0, {
            "name": "LoginForm",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + '    <div class="test_pages">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('404')",
                "label": "404"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('500')",
                "label": "500"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('modals')",
                "label": "modals"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "PrimaryLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 10,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cABAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 11,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '  <div class="modal">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ModalFileError"), depth0, {
            "name": "ModalFileError",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ModalFileOnload"), depth0, {
            "name": "ModalFileOnload",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ModalFileUpload"), depth0, {
            "name": "ModalFileUpload",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ModalUserAdd"), depth0, {
            "name": "ModalUserAdd",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "ModalUserDelete"), depth0, {
            "name": "ModalUserDelete",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "Button"), depth0, {
            "name": "Button",
            "hash": {
                "className": "btn-white",
                "onClick": "goToPage('login')",
                "label": "Назад"
            },
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "  </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 12,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1b4LU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <div class="page_profile">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "ButtonBack"), depth0, {
            "name": "ButtonBack",
            "hash": {
                "onClick": "goToPage('home')"
            },
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "BodyProfile"), depth0, {
            "name": "BodyProfile",
            "data": data,
            "indent": "      ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "    </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ProfileLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4AfXH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "content") || depth0 && lookupProperty(depth0, "content") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "body") : depth0, {
            "name": "content",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 14
                }
            }
        })) != null ? stack1 : "";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = container.invokePartial(lookupProperty(partials, "RegistrationForm"), depth0, {
            "name": "RegistrationForm",
            "data": data,
            "indent": "    ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (lookupProperty(helpers, "extend") || depth0 && lookupProperty(depth0, "extend") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "PrimaryLayout", {
            "name": "extend",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 11
                }
            }
        })) != null ? stack1 : "";
    },
    "usePartial": true,
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nuQp":[function() {},{}],"5gzWK":[function(require,module,exports) {
module.exports = JSON.parse('{"email":"pochta@yandex.ru","login":"ivanivanov","first_name":"Иван","second_name":"Иванов","display_name":"Иван","phone":"+7(909)967-30-30"}');

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequiree650")

//# sourceMappingURL=index.975ef6c8.js.map
