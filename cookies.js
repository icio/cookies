(function() {
    var sameSite = ['', 'SameSite=None', 'SameSite=Lax', 'SameSite=Strict'];
    var secure = ['', 'Secure'];

    // Permute the cookies to generate.
    var cookies = [];
    for (var s = 0; s < sameSite.length; s++) {
        for (var t = 0; t < secure.length; t++) {
            var name = 'cookieTest' + sameSite[s].replace(/=/, '') + secure[t];
            var val = ['ok', 'path=/', sameSite[s], secure[t]].join(';').replace(/;+/g, ';').replace(/;+$/g, '');
            cookies.push(name + '=' + val);
        }
    }

    // Set the cookies with an interval between each, to allow the browser
    // cookie warning to trigger between each setting.
    var interval;
    interval = setInterval(function() {
        var c = cookies.shift();
        console.info(c);
        document.cookie = c;
        if (cookies.length == 0) clearInterval(interval);
    }, 100);
})();
