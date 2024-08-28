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

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
