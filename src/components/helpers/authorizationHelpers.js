const authHelpers = {
    generateCodeVerifier: function () {
        function dec2hex(dec) {
            return ('0' + dec.toString(16)).substr(-2)
        }

        function generateRandomString() {
            var array = new Uint32Array(56 / 2);
            window.crypto.getRandomValues(array);
            return Array.from(array, dec2hex).join('');
        }

        return generateRandomString();
    },
    createCodeChallenge: function (code_verifier) {
        function sha256(plain) {
            const encoder = new TextEncoder();
            const data = encoder.encode(plain);
            return window.crypto.subtle.digest('SHA-256', data);
        }

        function base64urlencode(a) {
            var str = "";
            var bytes = new Uint8Array(a);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                str += String.fromCharCode(bytes[i]);
            }
            return btoa(str)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
        }

        async function challenge_from_verifier(v) {
            const hashed = await sha256(v);
            const base64encoded = base64urlencode(hashed);
            return base64encoded;
        }

        return challenge_from_verifier(code_verifier);
    },
    generateState: function () {
        const length = 16;

        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}

export default authHelpers;