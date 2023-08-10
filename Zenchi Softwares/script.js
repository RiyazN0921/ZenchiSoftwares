function createCookie() {
    var cookieName = document.getElementById("cookieName").value;
    var cookieValue = document.getElementById("cookieValue").value;
    
    document.cookie = `${cookieName}=${cookieValue}`;
    
    document.getElementById("createdCookieName").textContent = cookieName;
    document.getElementById("createdCookieValue").textContent = cookieValue;

    console.log("Cookie created:", cookieName, cookieValue);
  }

  function deleteCookie() {
    var cookieName = document.getElementById("cookieName").value;
    var cookieValue = document.getElementById("cookieValue").value;

    
    localStorage.setItem("deletedCookieName", cookieName);
    localStorage.setItem("deletedCookieValue", cookieValue);

    
    document.cookie = `${cookieName}=; expires=Thu, 18 Aug 2023 00:00:00 IST;`;

    
    document.getElementById("createdCookieName").textContent = "";
    document.getElementById("createdCookieValue").textContent = "";

    console.log("Cookie deleted:", cookieName, cookieValue);
  }

  function retrieveCookie() {
    var deletedCookieName = localStorage.getItem("deletedCookieName");
    var deletedCookieValue = localStorage.getItem("deletedCookieValue");

    if (deletedCookieName && deletedCookieValue) {
      console.log("Retrieved cookie:", deletedCookieName, deletedCookieValue);
    } else {
      console.log("No deleted cookie found in local storage.");
    }
  }