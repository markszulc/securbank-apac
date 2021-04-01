/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any.  The
 * intellectual and technical concepts contained herein are
 * proprietary to Adobe and its suppliers and are protected
 * by all applicable intellectual property laws, including
 * trade secret and copyright laws.  Dissemination of this
 * information or reproduction of this material is strictly
 * forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js'
);

// Do not modify here. Instead use the sites project properties to configure the service worker
const swconfig = {"cachestrategy":"staleWhileRevalidate"};
const {strategies} = workbox;
let requestHandler = null;

if (swconfig) {
    if (swconfig.cachestrategy === "networkFirst") {
        requestHandler = new strategies.NetworkFirst();
    }
    else if (swconfig.cachestrategy === "cacheFirst") {
        requestHandler = new strategies.CacheFirst();
    }
    else {
        requestHandler = new strategies.StaleWhileRevalidate();
    }
}

function cachePath({ url, event }) {
    if (!swconfig || !swconfig.cachingpaths) {
        return false;
    }

    const isCacheable = swconfig.cachingpaths.find(function(path) {
        // Support both relative and absolute URLs
        const trimmedPath = path.trim();
        return url.pathname.startsWith(trimmedPath) || url.href.startsWith(trimmedPath);
    });

    const isExcluded = swconfig.exclusionpaths && swconfig.exclusionpaths.find(function(path) {
            // Support both relative and absolute URLs
            const trimmedPath = path.trim();
            return url.pathname.startsWith(trimmedPath) || url.href.startsWith(trimmedPath);
    });

    return (isCacheable && !isExcluded) || false;
}

workbox.routing.registerRoute(cachePath, requestHandler);

