const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  // Show the install button
  butInstall.classList.remove("hidden");

  // Event handler for the `butInstall` element
  butInstall.addEventListener("click", () => {
    // Show the install prompt
    event.prompt();

    // Hide the install button
    butInstall.classList.add("hidden");
  });
});

const isPWA = () =>
  !!(
    window.matchMedia?.("(display-mode: standalone)").matches ||
    window.navigator.standalone
  );

// Hide the install button if the app is already installed or running in standalone mode
if (isPWA()) {
  butInstall.classList.add("hidden");
}

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
});
