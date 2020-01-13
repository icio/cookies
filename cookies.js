(function() {
    var sameSite = ['', 'SameSite=None', 'SameSite=Lax', 'SameSite=Strict'];
    var secure = ['', 'Secure'];

    for (var s = 0; s < sameSite.length; s++) {
        for (var t = 0; t < secure.length; t++) {
            var name = 'cookieTest' + sameSite[s].replace(/=/, '') + secure[t];
            var val = ['ok', 'path=/', sameSite[s], secure[t]].join(';').replace(/;+/g, ';').replace(/;+$/g, '');
            console.info(name+"="+val);
            document.cookie = name + '=' + val;
        }
    }
})();
