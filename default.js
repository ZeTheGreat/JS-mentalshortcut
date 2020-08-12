URL_PADRAO =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "0.0.0.0" ||
  window.location.hostname === "localhost"
    ? "0.0.0.0:5000/back/informações"
    : "www.backnanuvem.com/back/informações";
