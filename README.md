# PWA simple project using React

1. Create the Project
> npm create vite@latest simplepwa -- --template react
> cd simplepwa
> npm i

2. install the PWA plugin
> npm i vite-plugin-pwa -D

3. create icons: pwa-192x192.png and pwa-512x512.png

4. Build and Test
Note: PWAs do not work in npm run dev. You must build the project and serve it.
    a. build the app
    > npm run build
    b. preview the app
    > npm run preview

## How to verify it's a PWA
1. Open your browser to the URL provided (usually http://localhost:4173).
2. Open Chrome DevTools (F12).
3. Go to the Application tab.
4. Click on Manifest in the left sidebar—you should see your app details.
5. Click on Service Workers—you should see the status “activated and is running.”
6. You will now see an Install Icon in the browser URL bar!

## Why this is a “real” PWA:
Offline support: The service worker caches your assets.
Installable: It adds an icon to your desktop or home screen.
Manifest: Tells the browser how to display your app (colors, icons, name).