import { Workbox } from "workbox-window";

export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    wb.addEventListener("activated", (event) => {
      if (!event.isUpdate) {
        console.log("Service worker aktywowany po raz pierwszy!");
      }
    });

    wb.addEventListener("waiting", () => {
      console.log("Nowa wersja dostępna!");
    });

    wb.register()
      .then((registration) => {
        console.log("Service Worker zarejestrowany:", registration);
      })
      .catch((error) => {
        console.error("Błąd podczas rejestracji Service Workera:", error);
      });
  }
}
