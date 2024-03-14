Chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "hello") {
            var ID;

            function getCookies(domain, name) {
                chrome.cookies.get({"url": domain, "name": name}, function (cookie) {
                    ID = cookie.value;
                    showId();
                });
            }

            function showId() {
                if (ID) {
                    sendResponse({farewell: "logged"});
                }
                ;
            }

            getCookies(baseUrl, COOKIE_KEY_USER_ID);
        }
    }
);