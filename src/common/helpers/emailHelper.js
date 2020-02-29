var emailHelper = {
    sendEmail(subject, to, from, body) {
        /* SmtpJS.com - v3.0.0 */
        let Email = {
            send: function (emailParameters) {
                return new Promise(function (resolve, reject) {
                    emailParameters.nocache = Math.floor(1e6 * Math.random() + 1);
                    emailParameters.Action = "Send";
                    var emailParametersJson = JSON.stringify(emailParameters);
                    Email.ajaxPost(
                        "https://smtpjs.com/v3/smtpjs.aspx?",
                        emailParametersJson,
                        function (response) {
                            if (response.toLowerCase() === "ok") {
                                resolve(response)
                            }
                            else {
                                reject(response)
                            }
                        }
                    )
                })
            },
            ajaxPost: function (url, parameters, callback) {
                var cors = Email.createCORSRequest("POST", url);
                cors.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                cors.onload = function () {
                    var corsResponse = cors.responseText;
                    null != callback && callback(corsResponse);
                };
                cors.send(parameters);
            },
            ajax: function (e, n) {
                var t = Email.createCORSRequest("GET", e);
                t.onload = function () {
                    var e = t.responseText;
                    null != n && n(e)
                };
                t.send();
            },
            createCORSRequest: function (method, url) {
                var xhr = new XMLHttpRequest();
                if ("withCredentials" in xhr) {
                    // Check if the XMLHttpRequest object has a "withCredentials" property.
                    // "withCredentials" only exists on XMLHTTPRequest2 objects.
                    xhr.open(method, url, true);
                } else if (typeof XDomainRequest != "undefined") {
                    // Otherwise, check if XDomainRequest.
                    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                    xhr = new window.XDomainRequest();
                    xhr.open(method, url);
                } else {
                    // Otherwise, CORS is not supported by the browser.
                    xhr = null;
                }
                return xhr;
            }
        };

        return new Promise(function (resolve, reject) {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "kenneth.m.carolino@gmail.com",
                Password: "415A39FEEA7CF5414E1E00326D7230875D9B",
                To: to,
                From: "kenneth.m.carolino@gmail.com",
                Subject: subject,
                Body: `From: ${from}; Body: ${body}`
            }).then(message => {
                resolve(message);
            }, err => {
                reject(err)
            });
        })
    }
}

export default emailHelper;