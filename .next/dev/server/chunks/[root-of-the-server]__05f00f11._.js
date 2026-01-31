module.exports = [
"[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>t,
    "b",
    ()=>E
]);
var e = {
    "1xx": "Informational",
    "1xx_NAME": "INFORMATIONAL",
    "1xx_MESSAGE": "Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.",
    INFORMATIONAL: "1xx",
    "2xx": "Successful",
    "2xx_NAME": "SUCCESSFUL",
    "2xx_MESSAGE": "Indicates that the client's request was successfully received, understood, and accepted.",
    SUCCESSFUL: "2xx",
    "3xx": "Redirection",
    "3xx_NAME": "REDIRECTION",
    "3xx_MESSAGE": "Indicates that further action needs to be taken by the user agent in order to fulfill the request.",
    REDIRECTION: "3xx",
    "4xx": "Client Error",
    "4xx_NAME": "CLIENT_ERROR",
    "4xx_MESSAGE": "Indicates that the client seems to have erred.",
    CLIENT_ERROR: "4xx",
    "5xx": "Server Error",
    "5xx_NAME": "SERVER_ERROR",
    "5xx_MESSAGE": "Indicates that the server is aware that it has erred or is incapable of performing the requested method.",
    SERVER_ERROR: "5xx"
}, t = {
    classes: e,
    100: "Continue",
    "100_NAME": "CONTINUE",
    "100_MESSAGE": "The server has received the request headers and the client should proceed to send the request body.",
    "100_CLASS": e.INFORMATIONAL,
    CONTINUE: 100,
    101: "Switching Protocols",
    "101_NAME": "SWITCHING_PROTOCOLS",
    "101_MESSAGE": "The requester has asked the server to switch protocols and the server has agreed to do so.",
    "101_CLASS": e.INFORMATIONAL,
    SWITCHING_PROTOCOLS: 101,
    102: "Processing",
    "102_NAME": "PROCESSING",
    "102_MESSAGE": "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.",
    "102_CLASS": e.INFORMATIONAL,
    PROCESSING: 102,
    103: "Early Hints",
    "103_NAME": "EARLY_HINTS",
    "103_MESSAGE": "Used to return some response headers before final HTTP message.",
    "103_CLASS": e.INFORMATIONAL,
    EARLY_HINTS: 103,
    200: "OK",
    "200_NAME": "OK",
    "200_MESSAGE": "Standard response for successful HTTP requests.",
    "200_CLASS": e.SUCCESSFUL,
    OK: 200,
    201: "Created",
    "201_NAME": "CREATED",
    "201_MESSAGE": "The request has been fulfilled, resulting in the creation of a new resource.",
    "201_CLASS": e.SUCCESSFUL,
    CREATED: 201,
    202: "Accepted",
    "202_NAME": "ACCEPTED",
    "202_MESSAGE": "The request has been accepted for processing, but the processing has not been completed.",
    "202_CLASS": e.SUCCESSFUL,
    ACCEPTED: 202,
    203: "Non-Authoritative Information",
    "203_NAME": "NON_AUTHORITATIVE_INFORMATION",
    "203_MESSAGE": "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
    "203_CLASS": e.SUCCESSFUL,
    NON_AUTHORITATIVE_INFORMATION: 203,
    204: "No Content",
    "204_NAME": "NO_CONTENT",
    "204_MESSAGE": "The server successfully processed the request and is not returning any content.",
    "204_CLASS": e.SUCCESSFUL,
    NO_CONTENT: 204,
    205: "Reset Content",
    "205_NAME": "RESET_CONTENT",
    "205_MESSAGE": "The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.",
    "205_CLASS": e.SUCCESSFUL,
    RESET_CONTENT: 205,
    206: "Partial Content",
    "206_NAME": "PARTIAL_CONTENT",
    "206_MESSAGE": "The server is delivering only part of the resource (byte serving) due to a range header sent by the client.",
    "206_CLASS": e.SUCCESSFUL,
    PARTIAL_CONTENT: 206,
    207: "Multi Status",
    "207_NAME": "MULTI_STATUS",
    "207_MESSAGE": "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
    "207_CLASS": e.SUCCESSFUL,
    MULTI_STATUS: 207,
    208: "Already Reported",
    "208_NAME": "ALREADY_REPORTED",
    "208_MESSAGE": "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
    "208_CLASS": e.SUCCESSFUL,
    ALREADY_REPORTED: 208,
    226: "IM Used",
    "226_NAME": "IM_USED",
    "226_MESSAGE": "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    "226_CLASS": e.SUCCESSFUL,
    IM_USED: 226,
    300: "Multiple Choices",
    "300_NAME": "MULTIPLE_CHOICES",
    "300_MESSAGE": "Indicates multiple options for the resource from which the client may choose.",
    "300_CLASS": e.REDIRECTION,
    MULTIPLE_CHOICES: 300,
    301: "Moved Permanently",
    "301_NAME": "MOVED_PERMANENTLY",
    "301_MESSAGE": "This and all future requests should be directed to the given URI.",
    "301_CLASS": e.REDIRECTION,
    MOVED_PERMANENTLY: 301,
    302: "Found",
    "302_NAME": "FOUND",
    "302_MESSAGE": 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
    "302_CLASS": e.REDIRECTION,
    FOUND: 302,
    303: "See Other",
    "303_NAME": "SEE_OTHER",
    "303_MESSAGE": "The response to the request can be found under another URI using the GET method.",
    "303_CLASS": e.REDIRECTION,
    SEE_OTHER: 303,
    304: "Not Modified",
    "304_NAME": "NOT_MODIFIED",
    "304_MESSAGE": "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.",
    "304_CLASS": e.REDIRECTION,
    NOT_MODIFIED: 304,
    305: "Use Proxy",
    "305_NAME": "USE_PROXY",
    "305_MESSAGE": "The requested resource is available only through a proxy, the address for which is provided in the response.",
    "305_CLASS": e.REDIRECTION,
    USE_PROXY: 305,
    306: "Switch Proxy",
    "306_NAME": "SWITCH_PROXY",
    "306_MESSAGE": 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
    "306_CLASS": e.REDIRECTION,
    SWITCH_PROXY: 306,
    307: "Temporary Redirect",
    "307_NAME": "TEMPORARY_REDIRECT",
    "307_MESSAGE": "In this case, the request should be repeated with another URI; however, future requests should still use the original URI.",
    "307_CLASS": e.REDIRECTION,
    TEMPORARY_REDIRECT: 307,
    308: "Permanent Redirect",
    "308_NAME": "PERMANENT_REDIRECT",
    "308_MESSAGE": "The request and all future requests should be repeated using another URI.",
    "308_CLASS": e.REDIRECTION,
    PERMANENT_REDIRECT: 308,
    400: "Bad Request",
    "400_NAME": "BAD_REQUEST",
    "400_MESSAGE": "The server cannot or will not process the request due to an apparent client error.",
    "400_CLASS": e.CLIENT_ERROR,
    BAD_REQUEST: 400,
    401: "Unauthorized",
    "401_NAME": "UNAUTHORIZED",
    "401_MESSAGE": "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.",
    "401_CLASS": e.CLIENT_ERROR,
    UNAUTHORIZED: 401,
    402: "Payment Required",
    "402_NAME": "PAYMENT_REQUIRED",
    "402_MESSAGE": "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.",
    "402_CLASS": e.CLIENT_ERROR,
    PAYMENT_REQUIRED: 402,
    403: "Forbidden",
    "403_NAME": "FORBIDDEN",
    "403_MESSAGE": "The request was valid, but the server is refusing action.",
    "403_CLASS": e.CLIENT_ERROR,
    FORBIDDEN: 403,
    404: "Not Found",
    "404_NAME": "NOT_FOUND",
    "404_MESSAGE": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
    "404_CLASS": e.CLIENT_ERROR,
    NOT_FOUND: 404,
    405: "Method Not Allowed",
    "405_NAME": "METHOD_NOT_ALLOWED",
    "405_MESSAGE": "A request method is not supported for the requested resource.",
    "405_CLASS": e.CLIENT_ERROR,
    METHOD_NOT_ALLOWED: 405,
    406: "Not Acceptable",
    "406_NAME": "NOT_ACCEPTABLE",
    "406_MESSAGE": "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
    "406_CLASS": e.CLIENT_ERROR,
    NOT_ACCEPTABLE: 406,
    407: "Proxy Authentication Required",
    "407_NAME": "PROXY_AUTHENTICATION_REQUIRED",
    "407_MESSAGE": "The client must first authenticate itself with the proxy.",
    "407_CLASS": e.CLIENT_ERROR,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    408: "Request Time-out",
    "408_NAME": "REQUEST_TIMEOUT",
    "408_MESSAGE": "The server timed out waiting for the request.",
    "408_CLASS": e.CLIENT_ERROR,
    REQUEST_TIMEOUT: 408,
    409: "Conflict",
    "409_NAME": "CONFLICT",
    "409_MESSAGE": "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.",
    "409_CLASS": e.CLIENT_ERROR,
    CONFLICT: 409,
    410: "Gone",
    "410_NAME": "GONE",
    "410_MESSAGE": "Indicates that the resource requested is no longer available and will not be available again.",
    "410_CLASS": e.CLIENT_ERROR,
    GONE: 410,
    411: "Length Required",
    "411_NAME": "LENGTH_REQUIRED",
    "411_MESSAGE": "The request did not specify the length of its content, which is required by the requested resource.",
    "411_CLASS": e.CLIENT_ERROR,
    LENGTH_REQUIRED: 411,
    412: "Precondition Failed",
    "412_NAME": "PRECONDITION_FAILED",
    "412_MESSAGE": "The server does not meet one of the preconditions that the requester put on the request.",
    "412_CLASS": e.CLIENT_ERROR,
    PRECONDITION_FAILED: 412,
    413: "Request Entity Too Large",
    "413_NAME": "REQUEST_ENTITY_TOO_LARGE",
    "413_MESSAGE": 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
    "413_CLASS": e.CLIENT_ERROR,
    REQUEST_ENTITY_TOO_LARGE: 413,
    414: "Request-URI Too Large",
    "414_NAME": "REQUEST_URI_TOO_LONG",
    "414_MESSAGE": "The URI provided was too long for the server to process.",
    "414_CLASS": e.CLIENT_ERROR,
    REQUEST_URI_TOO_LONG: 414,
    415: "Unsupported Media Type",
    "415_NAME": "UNSUPPORTED_MEDIA_TYPE",
    "415_MESSAGE": "The request entity has a media type which the server or resource does not support.",
    "415_CLASS": e.CLIENT_ERROR,
    UNSUPPORTED_MEDIA_TYPE: 415,
    416: "Requested Range not Satisfiable",
    "416_NAME": "REQUESTED_RANGE_NOT_SATISFIABLE",
    "416_MESSAGE": "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.",
    "416_CLASS": e.CLIENT_ERROR,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    417: "Expectation Failed",
    "417_NAME": "EXPECTATION_FAILED",
    "417_MESSAGE": "The server cannot meet the requirements of the Expect request-header field.",
    "417_CLASS": e.CLIENT_ERROR,
    EXPECTATION_FAILED: 417,
    418: "I'm a teapot",
    "418_NAME": "IM_A_TEAPOT",
    "418_MESSAGE": `Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.`,
    "418_CLASS": e.CLIENT_ERROR,
    IM_A_TEAPOT: 418,
    421: "Misdirected Request",
    "421_NAME": "MISDIRECTED_REQUEST",
    "421_MESSAGE": "The request was directed at a server that is not able to produce a response.",
    "421_CLASS": e.CLIENT_ERROR,
    MISDIRECTED_REQUEST: 421,
    422: "Unprocessable Entity",
    "422_NAME": "UNPROCESSABLE_ENTITY",
    "422_MESSAGE": "The request was well-formed but was unable to be followed due to semantic errors.",
    "422_CLASS": e.CLIENT_ERROR,
    UNPROCESSABLE_ENTITY: 422,
    423: "Locked",
    "423_NAME": "LOCKED",
    "423_MESSAGE": "The resource that is being accessed is locked.",
    "423_CLASS": e.CLIENT_ERROR,
    LOCKED: 423,
    424: "Failed Dependency",
    "424_NAME": "FAILED_DEPENDENCY",
    "424_MESSAGE": "The request failed because it depended on another request and that request failed.",
    "424_CLASS": e.CLIENT_ERROR,
    FAILED_DEPENDENCY: 424,
    425: "Too Early",
    "425_NAME": "TOO_EARLY",
    "425_MESSAGE": "The server is unwilling to risk processing a request that might be replayed.",
    "425_CLASS": e.CLIENT_ERROR,
    TOO_EARLY: 425,
    426: "Upgrade Required",
    "426_NAME": "UPGRADE_REQUIRED",
    "426_MESSAGE": "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.",
    "426_CLASS": e.CLIENT_ERROR,
    UPGRADE_REQUIRED: 426,
    428: "Precondition Required",
    "428_NAME": "PRECONDITION_REQUIRED",
    "428_MESSAGE": "The origin server requires the request to be conditional.",
    "428_CLASS": e.CLIENT_ERROR,
    PRECONDITION_REQUIRED: 428,
    429: "Too Many Requests",
    "429_NAME": "TOO_MANY_REQUESTS",
    "429_MESSAGE": "The user has sent too many requests in a given amount of time.",
    "429_CLASS": e.CLIENT_ERROR,
    TOO_MANY_REQUESTS: 429,
    431: "Request Header Fields Too Large",
    "431_NAME": "REQUEST_HEADER_FIELDS_TOO_LARGE",
    "431_MESSAGE": "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
    "431_CLASS": e.CLIENT_ERROR,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    451: "Unavailable For Legal Reasons",
    "451_NAME": "UNAVAILABLE_FOR_LEGAL_REASONS",
    "451_MESSAGE": "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.",
    "451_CLASS": e.CLIENT_ERROR,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    500: "Internal Server Error",
    "500_NAME": "INTERNAL_SERVER_ERROR",
    "500_MESSAGE": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
    "500_CLASS": e.SERVER_ERROR,
    INTERNAL_SERVER_ERROR: 500,
    501: "Not Implemented",
    "501_NAME": "NOT_IMPLEMENTED",
    "501_MESSAGE": "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.",
    "501_CLASS": e.SERVER_ERROR,
    NOT_IMPLEMENTED: 501,
    502: "Bad Gateway",
    "502_NAME": "BAD_GATEWAY",
    "502_MESSAGE": "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
    "502_CLASS": e.SERVER_ERROR,
    BAD_GATEWAY: 502,
    503: "Service Unavailable",
    "503_NAME": "SERVICE_UNAVAILABLE",
    "503_MESSAGE": "The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.",
    "503_CLASS": e.SERVER_ERROR,
    SERVICE_UNAVAILABLE: 503,
    504: "Gateway Time-out",
    "504_NAME": "GATEWAY_TIMEOUT",
    "504_MESSAGE": "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
    "504_CLASS": e.SERVER_ERROR,
    GATEWAY_TIMEOUT: 504,
    505: "HTTP Version not Supported",
    "505_NAME": "HTTP_VERSION_NOT_SUPPORTED",
    "505_MESSAGE": "The server does not support the HTTP protocol version used in the request.",
    "505_CLASS": e.SERVER_ERROR,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    506: "Variant Also Negotiates",
    "506_NAME": "VARIANT_ALSO_NEGOTIATES",
    "506_MESSAGE": "Transparent content negotiation for the request results in a circular reference.",
    "506_CLASS": e.SERVER_ERROR,
    VARIANT_ALSO_NEGOTIATES: 506,
    507: "Insufficient Storage",
    "507_NAME": "INSUFFICIENT_STORAGE",
    "507_MESSAGE": "The server is unable to store the representation needed to complete the request.",
    "507_CLASS": e.SERVER_ERROR,
    INSUFFICIENT_STORAGE: 507,
    508: "Loop Detected",
    "508_NAME": "LOOP_DETECTED",
    "508_MESSAGE": "The server detected an infinite loop while processing the request.",
    "508_CLASS": e.SERVER_ERROR,
    LOOP_DETECTED: 508,
    510: "Not Extended",
    "510_NAME": "NOT_EXTENDED",
    "510_MESSAGE": "Further extensions to the request are required for the server to fulfil it.",
    "510_CLASS": e.SERVER_ERROR,
    NOT_EXTENDED: 510,
    511: "Network Authentication Required",
    "511_NAME": "NETWORK_AUTHENTICATION_REQUIRED",
    "511_MESSAGE": "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.",
    "511_CLASS": e.SERVER_ERROR,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    extra: {
        unofficial: {
            103: "Checkpoint",
            "103_NAME": "CHECKPOINT",
            "103_MESSAGE": "Used in the resumable requests proposal to resume aborted PUT or POST requests.",
            "103_CLASS": e.INFORMATIONAL,
            CHECKPOINT: 103,
            419: "Page Expired",
            "419_NAME": "PAGE_EXPIRED",
            "419_MESSAGE": "Used by the Laravel Framework when a CSRF Token is missing or expired.",
            "419_CLASS": e.CLIENT_ERROR,
            PAGE_EXPIRED: 419,
            218: "This is fine",
            "218_NAME": "THIS_IS_FINE",
            "218_MESSAGE": "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.",
            "218_CLASS": e.SUCCESSFUL,
            THIS_IS_FINE: 218,
            420: "Enhance Your Calm",
            "420_NAME": "ENHANCE_YOUR_CALM",
            "420_MESSAGE": "Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.",
            "420_CLASS": e.CLIENT_ERROR,
            ENHANCE_YOUR_CALM: 420,
            450: "Blocked by Windows Parental Controls",
            "450_NAME": "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS",
            "450_MESSAGE": "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.",
            "450_CLASS": e.CLIENT_ERROR,
            BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
            498: "Invalid Token",
            "498_NAME": "INVALID_TOKEN",
            "498_MESSAGE": "Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.",
            "498_CLASS": e.CLIENT_ERROR,
            INVALID_TOKEN: 498,
            499: "Token Required",
            "499_NAME": "TOKEN_REQUIRED",
            "499_MESSAGE": "Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.",
            "499_CLASS": e.CLIENT_ERROR,
            TOKEN_REQUIRED: 499,
            509: "Bandwidth Limit Exceeded",
            "509_NAME": "BANDWIDTH_LIMIT_EXCEEDED",
            "509_MESSAGE": "The server has exceeded the bandwidth specified by the server administrator.",
            "509_CLASS": e.SERVER_ERROR,
            BANDWIDTH_LIMIT_EXCEEDED: 509,
            530: "Site is frozen",
            "530_NAME": "SITE_IS_FROZEN",
            "530_MESSAGE": "Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.",
            "530_CLASS": e.SERVER_ERROR,
            SITE_IS_FROZEN: 530,
            598: "Network read timeout error",
            "598_NAME": "NETWORK_READ_TIMEOUT_ERROR",
            "598_MESSAGE": "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.",
            "598_CLASS": e.SERVER_ERROR,
            NETWORK_READ_TIMEOUT_ERROR: 598
        },
        iis: {
            440: "Login Time-out",
            "440_NAME": "LOGIN_TIME_OUT",
            "440_MESSAGE": "The client's session has expired and must log in again.",
            "440_CLASS": e.CLIENT_ERROR,
            LOGIN_TIME_OUT: 440,
            449: "Retry With",
            "449_NAME": "RETRY_WITH",
            "449_MESSAGE": "The server cannot honour the request because the user has not provided the required information.",
            "449_CLASS": e.CLIENT_ERROR,
            RETRY_WITH: 449,
            451: "Redirect",
            "451_NAME": "REDIRECT",
            "451_MESSAGE": "Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.",
            "451_CLASS": e.CLIENT_ERROR,
            REDIRECT: 451
        },
        nginx: {
            444: "No Response",
            "444_NAME": "NO_RESPONSE",
            "444_MESSAGE": "Used internally to instruct the server to return no information to the client and close the connection immediately.",
            "444_CLASS": e.CLIENT_ERROR,
            NO_RESPONSE: 444,
            494: "Request header too large",
            "494_NAME": "REQUEST_HEADER_TOO_LARGE",
            "494_MESSAGE": "Client sent too large request or too long header line.",
            "494_CLASS": e.CLIENT_ERROR,
            REQUEST_HEADER_TOO_LARGE: 494,
            495: "SSL Certificate Error",
            "495_NAME": "SSL_CERTIFICATE_ERROR",
            "495_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.",
            "495_CLASS": e.CLIENT_ERROR,
            SSL_CERTIFICATE_ERROR: 495,
            496: "SSL Certificate Required",
            "496_NAME": "SSL_CERTIFICATE_REQUIRED",
            "496_MESSAGE": "An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.",
            "496_CLASS": e.CLIENT_ERROR,
            SSL_CERTIFICATE_REQUIRED: 496,
            497: "HTTP Request Sent to HTTPS Port",
            "497_NAME": "HTTP_REQUEST_SENT_TO_HTTPS_PORT",
            "497_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.",
            "497_CLASS": e.CLIENT_ERROR,
            HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
            499: "Client Closed Request",
            "499_NAME": "CLIENT_CLOSED_REQUEST",
            "499_MESSAGE": "Used when the client has closed the request before the server could send a response.",
            "499_CLASS": e.CLIENT_ERROR,
            CLIENT_CLOSED_REQUEST: 499
        },
        cloudflare: {
            520: "Unknown Error",
            "520_NAME": "UNKNOWN_ERROR",
            "520_MESSAGE": 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
            "520_CLASS": e.SERVER_ERROR,
            UNKNOWN_ERROR: 520,
            521: "Web Server Is Down",
            "521_NAME": "WEB_SERVER_IS_DOWN",
            "521_MESSAGE": "The origin server has refused the connection from Cloudflare.",
            "521_CLASS": e.SERVER_ERROR,
            WEB_SERVER_IS_DOWN: 521,
            522: "Connection Timed Out",
            "522_NAME": "CONNECTION_TIMED_OUT",
            "522_MESSAGE": "Cloudflare could not negotiate a TCP handshake with the origin server.",
            "522_CLASS": e.SERVER_ERROR,
            CONNECTION_TIMED_OUT: 522,
            523: "Origin Is Unreachable",
            "523_NAME": "ORIGIN_IS_UNREACHABLE",
            "523_MESSAGE": "Cloudflare could not reach the origin server.",
            "523_CLASS": e.SERVER_ERROR,
            ORIGIN_IS_UNREACHABLE: 523,
            524: "A Timeout Occurred",
            "524_NAME": "A_TIMEOUT_OCCURRED",
            "524_MESSAGE": "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
            "524_CLASS": e.SERVER_ERROR,
            A_TIMEOUT_OCCURRED: 524,
            525: "SSL Handshake Failed",
            "525_NAME": "SSL_HANDSHAKE_FAILED",
            "525_MESSAGE": "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
            "525_CLASS": e.SERVER_ERROR,
            SSL_HANDSHAKE_FAILED: 525,
            526: "Invalid SSL Certificate",
            "526_NAME": "INVALID_SSL_CERTIFICATE",
            "526_MESSAGE": "Cloudflare could not validate the SSL/TLS certificate that the origin server presented.",
            "526_CLASS": e.SERVER_ERROR,
            INVALID_SSL_CERTIFICATE: 526,
            527: "Railgun Error",
            "527_NAME": "RAILGUN_ERROR",
            "527_MESSAGE": "Error 527 indicates that the request timed out or failed after the WAN connection had been established.",
            "527_CLASS": e.SERVER_ERROR,
            RAILGUN_ERROR: 527
        }
    }
}, E = t;
;
}),
"[project]/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)");
;
;
}),
"[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "status",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)");
}),
"[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export b as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)");
}),
"[project]/node_modules/dataloader/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2019-present, GraphQL Foundation
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ // A Function, which when given an Array of keys, returns a Promise of an Array
// of values or Errors.
// Optionally turn off batching or caching or provide a cache key function or a
// custom cache instance.
// If a custom cache is provided, it must be of this type (a subset of ES6 Map).
/**
 * A `DataLoader` creates a public API for loading data from a particular
 * data back-end with unique keys such as the `id` column of a SQL table or
 * document name in a MongoDB database, given a batch loading function.
 *
 * Each `DataLoader` instance contains a unique memoized cache. Use caution when
 * used in long-lived applications or those which serve many users with
 * different access permissions and consider creating a new instance per
 * web request.
 */ var DataLoader = /*#__PURE__*/ function() {
    function DataLoader(batchLoadFn, options) {
        if (typeof batchLoadFn !== 'function') {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + ("Array<key> and returns Promise<Array<value>>, but got: " + batchLoadFn + "."));
        }
        this._batchLoadFn = batchLoadFn;
        this._maxBatchSize = getValidMaxBatchSize(options);
        this._batchScheduleFn = getValidBatchScheduleFn(options);
        this._cacheKeyFn = getValidCacheKeyFn(options);
        this._cacheMap = getValidCacheMap(options);
        this._batch = null;
        this.name = getValidName(options);
    } // Private
    var _proto = DataLoader.prototype;
    /**
   * Loads a key, returning a `Promise` for the value represented by that key.
   */ _proto.load = function load(key) {
        if (key === null || key === undefined) {
            throw new TypeError('The loader.load() function must be called with a value, ' + ("but got: " + String(key) + "."));
        }
        var batch = getCurrentBatch(this);
        var cacheMap = this._cacheMap;
        var cacheKey; // If caching and there is a cache-hit, return cached Promise.
        if (cacheMap) {
            cacheKey = this._cacheKeyFn(key);
            var cachedPromise = cacheMap.get(cacheKey);
            if (cachedPromise) {
                var cacheHits = batch.cacheHits || (batch.cacheHits = []);
                return new Promise(function(resolve) {
                    cacheHits.push(function() {
                        resolve(cachedPromise);
                    });
                });
            }
        } // Otherwise, produce a new Promise for this key, and enqueue it to be
        // dispatched along with the current batch.
        batch.keys.push(key);
        var promise = new Promise(function(resolve, reject) {
            batch.callbacks.push({
                resolve: resolve,
                reject: reject
            });
        }); // If caching, cache this promise.
        if (cacheMap) {
            cacheMap.set(cacheKey, promise);
        }
        return promise;
    };
    _proto.loadMany = function loadMany(keys) {
        if (!isArrayLike(keys)) {
            throw new TypeError('The loader.loadMany() function must be called with Array<key> ' + ("but got: " + keys + "."));
        } // Support ArrayLike by using only minimal property access
        var loadPromises = [];
        for(var i = 0; i < keys.length; i++){
            loadPromises.push(this.load(keys[i])["catch"](function(error) {
                return error;
            }));
        }
        return Promise.all(loadPromises);
    };
    _proto.clear = function clear(key) {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            var cacheKey = this._cacheKeyFn(key);
            cacheMap["delete"](cacheKey);
        }
        return this;
    };
    _proto.clearAll = function clearAll() {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            cacheMap.clear();
        }
        return this;
    };
    _proto.prime = function prime(key, value) {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            var cacheKey = this._cacheKeyFn(key); // Only add the key if it does not already exist.
            if (cacheMap.get(cacheKey) === undefined) {
                // Cache a rejected promise if the value is an Error, in order to match
                // the behavior of load(key).
                var promise;
                if (value instanceof Error) {
                    promise = Promise.reject(value); // Since this is a case where an Error is intentionally being primed
                    // for a given key, we want to disable unhandled promise rejection.
                    promise["catch"](function() {});
                } else {
                    promise = Promise.resolve(value);
                }
                cacheMap.set(cacheKey, promise);
            }
        }
        return this;
    };
    return DataLoader;
}(); // Private: Enqueue a Job to be executed after all "PromiseJobs" Jobs.
//
// ES6 JavaScript uses the concepts Job and JobQueue to schedule work to occur
// after the current execution context has completed:
// http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues
//
// Node.js uses the `process.nextTick` mechanism to implement the concept of a
// Job, maintaining a global FIFO JobQueue for all Jobs, which is flushed after
// the current call stack ends.
//
// When calling `then` on a Promise, it enqueues a Job on a specific
// "PromiseJobs" JobQueue which is flushed in Node as a single Job on the
// global JobQueue.
//
// DataLoader batches all loads which occur in a single frame of execution, but
// should include in the batch all loads which occur during the flushing of the
// "PromiseJobs" JobQueue after that same execution frame.
//
// In order to avoid the DataLoader dispatch Job occuring before "PromiseJobs",
// A Promise Job is created with the sole purpose of enqueuing a global Job,
// ensuring that it always occurs after "PromiseJobs" ends.
//
// Node.js's job queue is unique. Browsers do not have an equivalent mechanism
// for enqueuing a job to be performed after promise microtasks and before the
// next macrotask. For browser environments, a macrotask is used (via
// setImmediate or setTimeout) at a potential performance penalty.
var enqueuePostPromiseJob = typeof process === 'object' && typeof process.nextTick === 'function' ? function(fn) {
    if (!resolvedPromise) {
        resolvedPromise = Promise.resolve();
    }
    resolvedPromise.then(function() {
        process.nextTick(fn);
    });
} : typeof setImmediate === 'function' ? function(fn) {
    setImmediate(fn);
} : function(fn) {
    setTimeout(fn);
}; // Private: cached resolved Promise instance
var resolvedPromise; // Private: Describes a batch of requests
// Private: Either returns the current batch, or creates and schedules a
// dispatch of a new batch for the given loader.
function getCurrentBatch(loader) {
    // If there is an existing batch which has not yet dispatched and is within
    // the limit of the batch size, then return it.
    var existingBatch = loader._batch;
    if (existingBatch !== null && !existingBatch.hasDispatched && existingBatch.keys.length < loader._maxBatchSize) {
        return existingBatch;
    } // Otherwise, create a new batch for this loader.
    var newBatch = {
        hasDispatched: false,
        keys: [],
        callbacks: []
    }; // Store it on the loader so it may be reused.
    loader._batch = newBatch; // Then schedule a task to dispatch this batch of requests.
    loader._batchScheduleFn(function() {
        dispatchBatch(loader, newBatch);
    });
    return newBatch;
}
function dispatchBatch(loader, batch) {
    // Mark this batch as having been dispatched.
    batch.hasDispatched = true; // If there's nothing to load, resolve any cache hits and return early.
    if (batch.keys.length === 0) {
        resolveCacheHits(batch);
        return;
    } // Call the provided batchLoadFn for this loader with the batch's keys and
    // with the loader as the `this` context.
    var batchPromise;
    try {
        batchPromise = loader._batchLoadFn(batch.keys);
    } catch (e) {
        return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function ' + ("errored synchronously: " + String(e) + ".")));
    } // Assert the expected response from batchLoadFn
    if (!batchPromise || typeof batchPromise.then !== 'function') {
        return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise: " + String(batchPromise) + ".")));
    } // Await the resolution of the call to batchLoadFn.
    batchPromise.then(function(values) {
        // Assert the expected resolution from batchLoadFn.
        if (!isArrayLike(values)) {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise of an Array: " + String(values) + "."));
        }
        if (values.length !== batch.keys.length) {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + 'not return a Promise of an Array of the same length as the Array ' + 'of keys.' + ("\n\nKeys:\n" + String(batch.keys)) + ("\n\nValues:\n" + String(values)));
        } // Resolve all cache hits in the same micro-task as freshly loaded values.
        resolveCacheHits(batch); // Step through values, resolving or rejecting each Promise in the batch.
        for(var i = 0; i < batch.callbacks.length; i++){
            var _value = values[i];
            if (_value instanceof Error) {
                batch.callbacks[i].reject(_value);
            } else {
                batch.callbacks[i].resolve(_value);
            }
        }
    })["catch"](function(error) {
        failedDispatch(loader, batch, error);
    });
} // Private: do not cache individual loads if the entire batch dispatch fails,
// but still reject each request so they do not hang.
function failedDispatch(loader, batch, error) {
    // Cache hits are resolved, even though the batch failed.
    resolveCacheHits(batch);
    for(var i = 0; i < batch.keys.length; i++){
        loader.clear(batch.keys[i]);
        batch.callbacks[i].reject(error);
    }
} // Private: Resolves the Promises for any cache hits in this batch.
function resolveCacheHits(batch) {
    if (batch.cacheHits) {
        for(var i = 0; i < batch.cacheHits.length; i++){
            batch.cacheHits[i]();
        }
    }
} // Private: given the DataLoader's options, produce a valid max batch size.
function getValidMaxBatchSize(options) {
    var shouldBatch = !options || options.batch !== false;
    if (!shouldBatch) {
        return 1;
    }
    var maxBatchSize = options && options.maxBatchSize;
    if (maxBatchSize === undefined) {
        return Infinity;
    }
    if (typeof maxBatchSize !== 'number' || maxBatchSize < 1) {
        throw new TypeError("maxBatchSize must be a positive number: " + maxBatchSize);
    }
    return maxBatchSize;
} // Private
function getValidBatchScheduleFn(options) {
    var batchScheduleFn = options && options.batchScheduleFn;
    if (batchScheduleFn === undefined) {
        return enqueuePostPromiseJob;
    }
    if (typeof batchScheduleFn !== 'function') {
        throw new TypeError("batchScheduleFn must be a function: " + batchScheduleFn);
    }
    return batchScheduleFn;
} // Private: given the DataLoader's options, produce a cache key function.
function getValidCacheKeyFn(options) {
    var cacheKeyFn = options && options.cacheKeyFn;
    if (cacheKeyFn === undefined) {
        return function(key) {
            return key;
        };
    }
    if (typeof cacheKeyFn !== 'function') {
        throw new TypeError("cacheKeyFn must be a function: " + cacheKeyFn);
    }
    return cacheKeyFn;
} // Private: given the DataLoader's options, produce a CacheMap to be used.
function getValidCacheMap(options) {
    var shouldCache = !options || options.cache !== false;
    if (!shouldCache) {
        return null;
    }
    var cacheMap = options && options.cacheMap;
    if (cacheMap === undefined) {
        return new Map();
    }
    if (cacheMap !== null) {
        var cacheFunctions = [
            'get',
            'set',
            'delete',
            'clear'
        ];
        var missingFunctions = cacheFunctions.filter(function(fnName) {
            return cacheMap && typeof cacheMap[fnName] !== 'function';
        });
        if (missingFunctions.length !== 0) {
            throw new TypeError('Custom cacheMap missing methods: ' + missingFunctions.join(', '));
        }
    }
    return cacheMap;
}
function getValidName(options) {
    if (options && options.name) {
        return options.name;
    }
    return null;
} // Private
function isArrayLike(x) {
    return typeof x === 'object' && x !== null && typeof x.length === 'number' && (x.length === 0 || x.length > 0 && Object.prototype.hasOwnProperty.call(x, x.length - 1));
}
module.exports = DataLoader;
}),
"[project]/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var MACHINE_ID = Math.floor(Math.random() * 0xFFFFFF);
var index = ObjectID.index = parseInt(Math.random() * 0xFFFFFF, 10);
var pid = (typeof process === 'undefined' || typeof process.pid !== 'number' ? Math.floor(Math.random() * 100000) : process.pid) % 0xFFFF;
// <https://github.com/williamkapke/bson-objectid/pull/51>
// Attempt to fallback Buffer if _Buffer is undefined (e.g. for Node.js).
// Worst case fallback to null and handle with null checking before using.
var BufferCtr = (()=>{
    try {
        return _Buffer;
    } catch (_) {
        try {
            return Buffer;
        } catch (_) {
            return null;
        }
    }
})();
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 */ var isBuffer = function(obj) {
    return !!(obj != null && obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj));
};
// Precomputed hex table enables speedy hex string conversion
var hexTable = [];
for(var i = 0; i < 256; i++){
    hexTable[i] = (i <= 15 ? '0' : '') + i.toString(16);
}
// Regular expression that checks for hex value
var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
// Lookup tables
var decodeLookup = [];
i = 0;
while(i < 10)decodeLookup[0x30 + i] = i++;
while(i < 16)decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
/**
 * Create a new immutable ObjectID instance
 *
 * @class Represents the BSON ObjectID type
 * @param {String|Number} id Can be a 24 byte hex string, 12 byte binary string or a Number.
 * @return {Object} instance of ObjectID.
 */ function ObjectID(id) {
    if (!(this instanceof ObjectID)) return new ObjectID(id);
    if (id && (id instanceof ObjectID || id._bsontype === "ObjectID")) return id;
    this._bsontype = 'ObjectID';
    // The most common usecase (blank id, new objectId instance)
    if (id == null || typeof id === 'number') {
        // Generate a new id
        this.id = this.generate(id);
        // Return the object
        return;
    }
    // Check if the passed in id is valid
    var valid = ObjectID.isValid(id);
    // Throw an error if it's not a valid setup
    if (!valid && id != null) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    } else if (valid && typeof id === 'string' && id.length === 24) {
        return ObjectID.createFromHexString(id);
    } else if (id != null && id.length === 12) {
        // assume 12 byte string
        this.id = id;
    } else if (id != null && typeof id.toHexString === 'function') {
        // Duck-typing to support ObjectId from different npm packages
        return id;
    } else {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
}
module.exports = ObjectID;
ObjectID.default = ObjectID;
/**
 * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
 *
 * @param {Number} time an integer number representing a number of seconds.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromTime = function(time) {
    time = parseInt(time, 10) % 0xFFFFFFFF;
    return new ObjectID(hex(8, time) + "0000000000000000");
};
/**
 * Creates an ObjectID from a hex string representation of an ObjectID.
 *
 * @param {String} hexString create a ObjectID from a passed in 24 byte hexstring.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromHexString = function(hexString) {
    // Throw an error if it's not a valid setup
    if (typeof hexString === 'undefined' || hexString != null && hexString.length !== 24) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
    // Calculate lengths
    var data = '';
    var i = 0;
    while(i < 24){
        data += String.fromCharCode(decodeLookup[hexString.charCodeAt(i++)] << 4 | decodeLookup[hexString.charCodeAt(i++)]);
    }
    return new ObjectID(data);
};
/**
 * Checks if a value is a valid bson ObjectId
 *
 * @param {String} objectid Can be a 24 byte hex string or an instance of ObjectID.
 * @return {Boolean} return true if the value is a valid bson ObjectID, return false otherwise.
 * @api public
 *
 * THE NATIVE DOCUMENTATION ISN'T CLEAR ON THIS GUY!
 * http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#objectid-isvalid
 */ ObjectID.isValid = function(id) {
    if (id == null) return false;
    if (typeof id === 'number') {
        return true;
    }
    if (typeof id === 'string') {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
    }
    if (id instanceof ObjectID) {
        return true;
    }
    // <https://github.com/williamkapke/bson-objectid/issues/53>
    if (isBuffer(id)) {
        return ObjectID.isValid(id.toString('hex'));
    }
    // Duck-Typing detection of ObjectId like objects
    // <https://github.com/williamkapke/bson-objectid/pull/51>
    if (typeof id.toHexString === 'function') {
        if (BufferCtr && (id.id instanceof BufferCtr || typeof id.id === 'string')) {
            return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
        }
    }
    return false;
};
ObjectID.prototype = {
    constructor: ObjectID,
    /**
   * Return the ObjectID id as a 24 byte hex string representation
   *
   * @return {String} return the 24 byte hex string representation.
   * @api public
   */ toHexString: function() {
        if (!this.id || !this.id.length) {
            throw new Error('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
        }
        if (this.id.length === 24) {
            return this.id;
        }
        if (isBuffer(this.id)) {
            return this.id.toString('hex');
        }
        var hexString = '';
        for(var i = 0; i < this.id.length; i++){
            hexString += hexTable[this.id.charCodeAt(i)];
        }
        return hexString;
    },
    /**
   * Compares the equality of this ObjectID with `otherID`.
   *
   * @param {Object} otherId ObjectID instance to compare against.
   * @return {Boolean} the result of comparing two ObjectID's
   * @api public
   */ equals: function(otherId) {
        if (otherId instanceof ObjectID) {
            return this.toString() === otherId.toString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12 && isBuffer(this.id)) {
            return otherId === this.id.toString('binary');
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 24) {
            return otherId.toLowerCase() === this.toHexString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12) {
            return otherId === this.id;
        } else if (otherId != null && (otherId instanceof ObjectID || otherId.toHexString)) {
            return otherId.toHexString() === this.toHexString();
        } else {
            return false;
        }
    },
    /**
   * Returns the generation date (accurate up to the second) that this ID was generated.
   *
   * @return {Date} the generation date
   * @api public
   */ getTimestamp: function() {
        var timestamp = new Date();
        var time;
        if (isBuffer(this.id)) {
            time = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
        } else {
            time = this.id.charCodeAt(3) | this.id.charCodeAt(2) << 8 | this.id.charCodeAt(1) << 16 | this.id.charCodeAt(0) << 24;
        }
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    },
    /**
  * Generate a 12 byte id buffer used in ObjectID's
  *
  * @method
  * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
  * @return {string} return the 12 byte id buffer string.
  */ generate: function(time) {
        if ('number' !== typeof time) {
            time = ~~(Date.now() / 1000);
        }
        //keep it in the ring!
        time = parseInt(time, 10) % 0xFFFFFFFF;
        var inc = next();
        return String.fromCharCode(time >> 24 & 0xFF, time >> 16 & 0xFF, time >> 8 & 0xFF, time & 0xFF, MACHINE_ID >> 16 & 0xFF, MACHINE_ID >> 8 & 0xFF, MACHINE_ID & 0xFF, pid >> 8 & 0xFF, pid & 0xFF, inc >> 16 & 0xFF, inc >> 8 & 0xFF, inc & 0xFF);
    }
};
function next() {
    return index = (index + 1) % 0xFFFFFF;
}
function hex(length, n) {
    n = n.toString(16);
    return n.length === length ? n : "00000000".substring(n.length, length) + n;
}
function buffer(str) {
    var i = 0, out = [];
    if (str.length === 24) for(; i < 24; out.push(parseInt(str[i] + str[i + 1], 16)), i += 2);
    else if (str.length === 12) for(; i < 12; out.push(str.charCodeAt(i)), i++);
    return out;
}
var inspect = Symbol && Symbol.for && Symbol.for('nodejs.util.inspect.custom') || 'inspect';
/**
 * Converts to a string representation of this Id.
 *
 * @return {String} return the 24 byte hex string representation.
 * @api private
 */ ObjectID.prototype[inspect] = function() {
    return "ObjectID(" + this + ")";
};
ObjectID.prototype.toJSON = ObjectID.prototype.toHexString;
ObjectID.prototype.toString = ObjectID.prototype.toHexString;
}),
"[project]/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importDateFNSLocale",
    ()=>importDateFNSLocale
]);
const importDateFNSLocale = async (locale)=>{
    let result;
    switch(locale){
        case 'ar':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ar.js [app-route] (ecmascript, async loader)")).ar;
            break;
        case 'az':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/az.js [app-route] (ecmascript, async loader)")).az;
            break;
        case 'bg':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bg.js [app-route] (ecmascript, async loader)")).bg;
            break;
        case 'bn-BD':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bn.js [app-route] (ecmascript, async loader)")).bn;
            break;
        case 'bn-IN':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bn.js [app-route] (ecmascript, async loader)")).bn;
            break;
        case 'ca':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ca.js [app-route] (ecmascript, async loader)")).ca;
            break;
        case 'cs':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/cs.js [app-route] (ecmascript, async loader)")).cs;
            break;
        case 'da':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/da.js [app-route] (ecmascript, async loader)")).da;
            break;
        case 'de':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/de.js [app-route] (ecmascript, async loader)")).de;
            break;
        case 'en-US':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/en-US.js [app-route] (ecmascript, async loader)")).enUS;
            break;
        case 'es':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/es.js [app-route] (ecmascript, async loader)")).es;
            break;
        case 'et':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/et.js [app-route] (ecmascript, async loader)")).et;
            break;
        case 'fa-IR':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/fa-IR.js [app-route] (ecmascript, async loader)")).faIR;
            break;
        case 'fr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/fr.js [app-route] (ecmascript, async loader)")).fr;
            break;
        case 'he':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/he.js [app-route] (ecmascript, async loader)")).he;
            break;
        case 'hr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/hr.js [app-route] (ecmascript, async loader)")).hr;
            break;
        case 'hu':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/hu.js [app-route] (ecmascript, async loader)")).hu;
            break;
        case 'id':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/id.js [app-route] (ecmascript, async loader)")).id;
            break;
        case 'is':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/is.js [app-route] (ecmascript, async loader)")).is;
            break;
        case 'it':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/it.js [app-route] (ecmascript, async loader)")).it;
            break;
        case 'ja':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ja.js [app-route] (ecmascript, async loader)")).ja;
            break;
        case 'ko':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ko.js [app-route] (ecmascript, async loader)")).ko;
            break;
        case 'lt':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/lt.js [app-route] (ecmascript, async loader)")).lt;
            break;
        case 'lv':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/lv.js [app-route] (ecmascript, async loader)")).lv;
            break;
        case 'nb':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/nb.js [app-route] (ecmascript, async loader)")).nb;
            break;
        case 'nl':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/nl.js [app-route] (ecmascript, async loader)")).nl;
            break;
        case 'pl':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/pl.js [app-route] (ecmascript, async loader)")).pl;
            break;
        case 'pt':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/pt.js [app-route] (ecmascript, async loader)")).pt;
            break;
        case 'ro':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ro.js [app-route] (ecmascript, async loader)")).ro;
            break;
        case 'rs':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sr.js [app-route] (ecmascript, async loader)")).sr;
            break;
        case 'rs-Latin':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sr-Latn.js [app-route] (ecmascript, async loader)")).srLatn;
            break;
        case 'ru':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ru.js [app-route] (ecmascript, async loader)")).ru;
            break;
        case 'sk':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sk.js [app-route] (ecmascript, async loader)")).sk;
            break;
        case 'sl-SI':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sl.js [app-route] (ecmascript, async loader)")).sl;
            break;
        case 'sv':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sv.js [app-route] (ecmascript, async loader)")).sv;
            break;
        case 'ta':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ta.js [app-route] (ecmascript, async loader)")).ta;
            break;
        case 'th':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/th.js [app-route] (ecmascript, async loader)")).th;
            break;
        case 'tr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/tr.js [app-route] (ecmascript, async loader)")).tr;
            break;
        case 'uk':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/uk.js [app-route] (ecmascript, async loader)")).uk;
            break;
        case 'vi':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/vi.js [app-route] (ecmascript, async loader)")).vi;
            break;
        case 'zh-CN':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/zh-CN.js [app-route] (ecmascript, async loader)")).zhCN;
            break;
        case 'zh-TW':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/zh-TW.js [app-route] (ecmascript, async loader)")).zhTW;
            break;
    }
    // @ts-expect-error - I'm not sure if this is still necessary.
    if (result?.default) {
        // @ts-expect-error - I'm not sure if this is still necessary.
        return result.default;
    }
    return result;
}; //# sourceMappingURL=importDateFNSLocale.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Very simple, but fast deepMerge implementation. Only deepMerges objects, not arrays and clones everything.
 * Do not use this if your object contains any complex objects like React Components, or if you would like to combine Arrays.
 * If you only have simple objects and need a fast deepMerge, this is the function for you.
 *
 * obj2 takes precedence over obj1 - thus if obj2 has a key that obj1 also has, obj2's value will be used.
 *
 * @param obj1 base object
 * @param obj2 object to merge "into" obj1
 */ __turbopack_context__.s([
    "deepMergeSimple",
    ()=>deepMergeSimple
]);
function deepMergeSimple(obj1, obj2) {
    const output = {
        ...obj1
    };
    for(const key in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj1[key]) {
                // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                output[key] = deepMergeSimple(obj1[key], obj2[key]);
            } else {
                // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                output[key] = obj2[key];
            }
        }
    }
    return output;
} //# sourceMappingURL=deepMergeSimple.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/clientKeys.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientTranslationKeys",
    ()=>clientTranslationKeys
]);
function createClientTranslationKeys(keys) {
    return keys;
}
const clientTranslationKeys = createClientTranslationKeys([
    'authentication:account',
    'authentication:accountOfCurrentUser',
    'authentication:accountVerified',
    'authentication:alreadyActivated',
    'authentication:alreadyLoggedIn',
    'authentication:apiKey',
    'authentication:authenticated',
    'authentication:backToLogin',
    'authentication:beginCreateFirstUser',
    'authentication:changePassword',
    'authentication:checkYourEmailForPasswordReset',
    'authentication:confirmGeneration',
    'authentication:confirmPassword',
    'authentication:createFirstUser',
    'authentication:emailNotValid',
    'authentication:usernameNotValid',
    'authentication:emailOrUsername',
    'authentication:emailSent',
    'authentication:emailVerified',
    'authentication:enableAPIKey',
    'authentication:failedToUnlock',
    'authentication:forceUnlock',
    'authentication:forgotPassword',
    'authentication:forgotPasswordEmailInstructions',
    'authentication:forgotPasswordUsernameInstructions',
    'authentication:forgotPasswordQuestion',
    'authentication:generate',
    'authentication:generateNewAPIKey',
    'authentication:generatingNewAPIKeyWillInvalidate',
    'authentication:logBackIn',
    'authentication:loggedOutInactivity',
    'authentication:loggedOutSuccessfully',
    'authentication:loggingOut',
    'authentication:login',
    'authentication:logOut',
    'authentication:loggedIn',
    'authentication:loggedInChangePassword',
    'authentication:logout',
    'authentication:logoutUser',
    'authentication:logoutSuccessful',
    'authentication:newAPIKeyGenerated',
    'authentication:newPassword',
    'authentication:passed',
    'authentication:passwordResetSuccessfully',
    'authentication:resetPassword',
    'authentication:stayLoggedIn',
    'authentication:successfullyRegisteredFirstUser',
    'authentication:successfullyUnlocked',
    'authentication:username',
    'authentication:unableToVerify',
    'authentication:tokenRefreshSuccessful',
    'authentication:verified',
    'authentication:verifiedSuccessfully',
    'authentication:verify',
    'authentication:verifyUser',
    'authentication:youAreInactive',
    'dashboard:addWidget',
    'dashboard:deleteWidget',
    'dashboard:searchWidgets',
    'error:autosaving',
    'error:correctInvalidFields',
    'error:deletingTitle',
    'error:documentNotFound',
    'error:emailOrPasswordIncorrect',
    'error:usernameOrPasswordIncorrect',
    'error:loadingDocument',
    'error:insufficientClipboardPermissions',
    'error:invalidClipboardData',
    'error:invalidRequestArgs',
    'error:invalidFileType',
    'error:logoutFailed',
    'error:noMatchedField',
    'error:notAllowedToAccessPage',
    'error:previewing',
    'error:unableToCopy',
    'error:unableToDeleteCount',
    'error:unableToReindexCollection',
    'error:unableToUpdateCount',
    'error:unauthorized',
    'error:unauthorizedAdmin',
    'error:unknown',
    'error:unspecific',
    'error:unverifiedEmail',
    'error:userEmailAlreadyRegistered',
    'error:usernameAlreadyRegistered',
    'error:tokenNotProvided',
    'error:unPublishingDocument',
    'error:revertingDocument',
    'error:problemUploadingFile',
    'error:restoringTitle',
    'fields:addLabel',
    'fields:addLink',
    'fields:addNew',
    'fields:addNewLabel',
    'fields:addRelationship',
    'fields:addUpload',
    'fields:block',
    'fields:blocks',
    'fields:blockType',
    'fields:chooseBetweenCustomTextOrDocument',
    'fields:customURL',
    'fields:chooseDocumentToLink',
    'fields:openInNewTab',
    'fields:enterURL',
    'fields:internalLink',
    'fields:chooseFromExisting',
    'fields:linkType',
    'fields:textToDisplay',
    'fields:searchForLanguage',
    'fields:collapseAll',
    'fields:editLink',
    'fields:editRelationship',
    'fields:itemsAndMore',
    'fields:labelRelationship',
    'fields:latitude',
    'fields:linkedTo',
    'fields:longitude',
    'fields:passwordsDoNotMatch',
    'fields:removeRelationship',
    'fields:removeUpload',
    'fields:saveChanges',
    'fields:searchForBlock',
    'fields:selectFieldsToEdit',
    'fields:showAll',
    'fields:swapRelationship',
    'fields:swapUpload',
    'fields:toggleBlock',
    'fields:uploadNewLabel',
    'folder:byFolder',
    'folder:browseByFolder',
    'folder:deleteFolder',
    'folder:folders',
    'folder:folderTypeDescription',
    'folder:folderName',
    'folder:itemsMovedToFolder',
    'folder:itemsMovedToRoot',
    'folder:itemHasBeenMoved',
    'folder:itemHasBeenMovedToRoot',
    'folder:moveFolder',
    'folder:movingFromFolder',
    'folder:moveItemsToFolderConfirmation',
    'folder:moveItemsToRootConfirmation',
    'folder:moveItemToFolderConfirmation',
    'folder:moveItemToRootConfirmation',
    'folder:noFolder',
    'folder:newFolder',
    'folder:renameFolder',
    'folder:searchByNameInFolder',
    'folder:selectFolderForItem',
    'general:all',
    'general:aboutToDeleteCount',
    'general:aboutToDelete',
    'general:aboutToPermanentlyDelete',
    'general:aboutToPermanentlyDeleteTrash',
    'general:aboutToRestore',
    'general:aboutToRestoreAsDraft',
    'general:aboutToRestoreAsDraftCount',
    'general:aboutToRestoreCount',
    'general:aboutToTrash',
    'general:aboutToTrashCount',
    'general:addBelow',
    'general:addFilter',
    'general:adminTheme',
    'general:allCollections',
    'general:and',
    'general:anotherUser',
    'general:anotherUserTakenOver',
    'general:applyChanges',
    'general:ascending',
    'general:automatic',
    'general:backToDashboard',
    'general:cancel',
    'general:changesNotSaved',
    'general:close',
    'general:collapse',
    'general:collections',
    'general:confirmMove',
    'general:yes',
    'general:no',
    'general:columns',
    'general:columnToSort',
    'general:confirm',
    'general:confirmCopy',
    'general:confirmDeletion',
    'general:confirmDuplication',
    'general:confirmReindex',
    'general:confirmReindexAll',
    'general:confirmReindexDescription',
    'general:confirmReindexDescriptionAll',
    'general:confirmRestoration',
    'general:copied',
    'general:clear',
    'general:clearAll',
    'general:copy',
    'general:copyField',
    'general:copyRow',
    'general:copyWarning',
    'general:copying',
    'general:create',
    'general:created',
    'general:createdAt',
    'general:createNew',
    'general:createNewLabel',
    'general:creating',
    'general:creatingNewLabel',
    'general:currentlyEditing',
    'general:custom',
    'general:dark',
    'general:dashboard',
    'general:delete',
    'general:deleted',
    'general:deletedAt',
    'general:deletePermanently',
    'general:deleteLabel',
    'general:deletedSuccessfully',
    'general:deletedCountSuccessfully',
    'general:deleting',
    'general:descending',
    'general:depth',
    'general:deselectAllRows',
    'general:document',
    'general:documentIsTrashed',
    'general:documentLocked',
    'general:documents',
    'general:duplicate',
    'general:duplicateWithoutSaving',
    'general:edit',
    'general:editAll',
    'general:editing',
    'general:editingLabel',
    'general:editingTakenOver',
    'general:editLabel',
    'general:editedSince',
    'general:email',
    'general:emailAddress',
    'general:emptyTrash',
    'general:emptyTrashLabel',
    'general:enterAValue',
    'general:error',
    'general:errors',
    'general:fallbackToDefaultLocale',
    'general:false',
    'general:filters',
    'general:filterWhere',
    'general:globals',
    'general:goBack',
    'general:groupByLabel',
    'general:isEditing',
    'general:item',
    'general:items',
    'general:language',
    'general:lastModified',
    'general:leaveAnyway',
    'general:leaveWithoutSaving',
    'general:light',
    'general:livePreview',
    'general:lock',
    'general:exitLivePreview',
    'general:loading',
    'general:locale',
    'general:locales',
    'general:menu',
    'general:moreOptions',
    'general:move',
    'general:moveConfirm',
    'general:moveCount',
    'general:moveDown',
    'general:moveUp',
    'general:moving',
    'general:movingCount',
    'general:name',
    'general:next',
    'general:newLabel',
    'general:noDateSelected',
    'general:noFiltersSet',
    'general:noLabel',
    'general:none',
    'general:noOptions',
    'general:noResults',
    'general:notFound',
    'general:nothingFound',
    'general:noTrashResults',
    'general:noUpcomingEventsScheduled',
    'general:noValue',
    'general:of',
    'general:open',
    'general:only',
    'general:or',
    'general:order',
    'general:overwriteExistingData',
    'general:pageNotFound',
    'general:password',
    'general:pasteField',
    'general:pasteRow',
    'general:payloadSettings',
    'general:permanentlyDelete',
    'general:permanentlyDeletedCountSuccessfully',
    'general:perPage',
    'general:previous',
    'general:reindex',
    'general:reindexingAll',
    'general:remove',
    'general:rename',
    'general:reset',
    'general:resetPreferences',
    'general:resetPreferencesDescription',
    'general:resettingPreferences',
    'general:restore',
    'general:restoreAsPublished',
    'general:restoredCountSuccessfully',
    'general:restoring',
    'general:row',
    'general:rows',
    'general:save',
    'general:schedulePublishFor',
    'general:saving',
    'general:searchBy',
    'general:select',
    'general:selectAll',
    'general:selectAllRows',
    'general:selectedCount',
    'general:selectLabel',
    'general:selectValue',
    'general:showAllLabel',
    'general:sorryNotFound',
    'general:sort',
    'general:sortByLabelDirection',
    'general:stayOnThisPage',
    'general:submissionSuccessful',
    'general:submit',
    'general:submitting',
    'general:success',
    'general:successfullyCreated',
    'general:successfullyDuplicated',
    'general:successfullyReindexed',
    'general:takeOver',
    'general:thisLanguage',
    'general:time',
    'general:timezone',
    'general:titleDeleted',
    'general:titleTrashed',
    'general:titleRestored',
    'general:trash',
    'general:trashedCountSuccessfully',
    'general:import',
    'general:export',
    'general:allLocales',
    'general:true',
    'general:upcomingEvents',
    'general:users',
    'general:user',
    'general:username',
    'general:unauthorized',
    'general:unlock',
    'general:unsavedChanges',
    'general:unsavedChangesDuplicate',
    'general:untitled',
    'general:updatedAt',
    'general:updatedLabelSuccessfully',
    'general:updatedCountSuccessfully',
    'general:updateForEveryone',
    'general:updatedSuccessfully',
    'general:updating',
    'general:value',
    'general:viewing',
    'general:viewReadOnly',
    'general:uploading',
    'general:uploadingBulk',
    'general:welcome',
    'localization:localeToPublish',
    'localization:copyToLocale',
    'localization:copyFromTo',
    'localization:selectedLocales',
    'localization:selectLocaleToCopy',
    'localization:selectLocaleToDuplicate',
    'localization:cannotCopySameLocale',
    'localization:copyFrom',
    'localization:copyTo',
    'operators:equals',
    'operators:exists',
    'operators:isNotIn',
    'operators:isIn',
    'operators:contains',
    'operators:isLike',
    'operators:isNotLike',
    'operators:isNotEqualTo',
    'operators:near',
    'operators:isGreaterThan',
    'operators:isLessThan',
    'operators:isGreaterThanOrEqualTo',
    'operators:isLessThanOrEqualTo',
    'operators:within',
    'operators:intersects',
    'upload:addFile',
    'upload:addFiles',
    'upload:bulkUpload',
    'upload:crop',
    'upload:cropToolDescription',
    'upload:dragAndDrop',
    'upload:editImage',
    'upload:fileToUpload',
    'upload:filesToUpload',
    'upload:focalPoint',
    'upload:focalPointDescription',
    'upload:height',
    'upload:pasteURL',
    'upload:previewSizes',
    'upload:selectCollectionToBrowse',
    'upload:selectFile',
    'upload:setCropArea',
    'upload:setFocalPoint',
    'upload:sizesFor',
    'upload:sizes',
    'upload:width',
    'upload:fileName',
    'upload:fileSize',
    'upload:noFile',
    'upload:download',
    'validation:emailAddress',
    'validation:enterNumber',
    'validation:fieldHasNo',
    'validation:greaterThanMax',
    'validation:invalidInput',
    'validation:invalidSelection',
    'validation:invalidSelections',
    'validation:latitudeOutOfBounds',
    'validation:lessThanMin',
    'validation:limitReached',
    'validation:longitudeOutOfBounds',
    'validation:invalidBlock',
    'validation:invalidBlocks',
    'validation:longerThanMin',
    'validation:notValidDate',
    'validation:required',
    'validation:requiresAtLeast',
    'validation:requiresNoMoreThan',
    'validation:requiresTwoNumbers',
    'validation:shorterThanMax',
    'validation:trueOrFalse',
    'validation:timezoneRequired',
    'validation:username',
    'validation:validUploadID',
    'version:aboutToPublishSelection',
    'version:aboutToRestore',
    'version:aboutToRestoreGlobal',
    'version:aboutToRevertToPublished',
    'version:aboutToUnpublish',
    'version:aboutToUnpublishIn',
    'version:aboutToUnpublishSelection',
    'version:autosave',
    'version:autosavedSuccessfully',
    'version:autosavedVersion',
    'version:versionAgo',
    'version:moreVersions',
    'version:changed',
    'version:changedFieldsCount',
    'version:confirmRevertToSaved',
    'version:compareVersions',
    'version:comparingAgainst',
    'version:currentlyViewing',
    'version:confirmPublish',
    'version:confirmUnpublish',
    'version:confirmVersionRestoration',
    'version:currentDraft',
    'version:currentPublishedVersion',
    'version:currentlyPublished',
    'version:draft',
    'version:draftHasPublishedVersion',
    'version:draftSavedSuccessfully',
    'version:lastSavedAgo',
    'version:modifiedOnly',
    'version:noFurtherVersionsFound',
    'version:noLabelGroup',
    'version:noRowsFound',
    'version:noRowsSelected',
    'version:preview',
    'version:previouslyDraft',
    'version:previouslyPublished',
    'version:previousVersion',
    'version:problemRestoringVersion',
    'version:publish',
    'version:publishAllLocales',
    'version:publishChanges',
    'version:published',
    'version:publishIn',
    'version:publishing',
    'version:restoreAsDraft',
    'version:restoredSuccessfully',
    'version:restoreThisVersion',
    'version:restoring',
    'version:reverting',
    'version:revertUnsuccessful',
    'version:revertToPublished',
    'version:saveDraft',
    'version:scheduledSuccessfully',
    'version:schedulePublish',
    'version:selectLocales',
    'version:selectVersionToCompare',
    'version:showLocales',
    'version:specificVersion',
    'version:status',
    'version:type',
    'version:unpublish',
    'version:unpublished',
    'version:unpublishIn',
    'version:unpublishing',
    'version:unpublishedSuccessfully',
    'version:versionID',
    'version:version',
    'version:versions',
    'version:viewingVersion',
    'version:viewingVersionGlobal',
    'version:viewingVersions',
    'version:viewingVersionsGlobal'
]); //# sourceMappingURL=clientKeys.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslationsByContext.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslationsByContext",
    ()=>getTranslationsByContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$clientKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/clientKeys.js [app-route] (ecmascript)");
;
function filterKeys(obj, parentGroupKey = '', keys) {
    const result = {};
    for (const [namespaceKey, value] of Object.entries(obj)){
        // Skip $schema key
        if (namespaceKey === '$schema') {
            result[namespaceKey] = value;
            continue;
        }
        if (typeof value === 'object') {
            const filteredObject = filterKeys(value, namespaceKey, keys);
            if (Object.keys(filteredObject).length > 0) {
                result[namespaceKey] = filteredObject;
            }
        } else {
            for (const key of keys){
                const [groupKey, selector] = key.split(':');
                if (parentGroupKey === groupKey) {
                    if (namespaceKey === selector) {
                        result[selector] = value;
                    } else {
                        const pluralKeys = [
                            'zero',
                            'one',
                            'two',
                            'few',
                            'many',
                            'other'
                        ];
                        pluralKeys.forEach((pluralKey)=>{
                            if (namespaceKey === `${selector}_${pluralKey}`) {
                                result[`${selector}_${pluralKey}`] = value;
                            }
                        });
                    }
                }
            }
        }
    }
    return result;
}
function sortObject(obj) {
    const sortedObject = {};
    Object.keys(obj).sort().forEach((key)=>{
        if (typeof obj[key] === 'object') {
            sortedObject[key] = sortObject(obj[key]);
        } else {
            sortedObject[key] = obj[key];
        }
    });
    return sortedObject;
}
const getTranslationsByContext = (selectedLanguage, context)=>{
    if (context === 'client') {
        return sortObject(filterKeys(selectedLanguage.translations, '', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$clientKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clientTranslationKeys"]));
    } else {
        return selectedLanguage.translations;
    }
}; //# sourceMappingURL=getTranslationsByContext.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/init.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslationString",
    ()=>getTranslationString,
    "initI18n",
    ()=>initI18n,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslationsByContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslationsByContext.js [app-route] (ecmascript)");
;
;
;
const getTranslationString = ({ count, key, translations })=>{
    const keys = key.split(':');
    let keySuffix = '';
    const translation = keys.reduce((acc, key, index)=>{
        if (typeof acc === 'string') {
            return acc;
        }
        if (typeof count === 'number') {
            if (count === 0 && `${key}_zero` in acc) {
                keySuffix = '_zero';
            } else if (count === 1 && `${key}_one` in acc) {
                keySuffix = '_one';
            } else if (count === 2 && `${key}_two` in acc) {
                keySuffix = '_two';
            } else if (count > 5 && `${key}_many` in acc) {
                keySuffix = '_many';
            } else if (count > 2 && count <= 5 && `${key}_few` in acc) {
                keySuffix = '_few';
            } else if (`${key}_other` in acc) {
                keySuffix = '_other';
            }
        }
        let keyToUse = key;
        if (index === keys.length - 1 && keySuffix) {
            keyToUse = `${key}${keySuffix}`;
        }
        if (acc && keyToUse in acc) {
            return acc[keyToUse];
        }
        return undefined;
    }, translations);
    if (!translation) {
        console.log('key not found:', key);
    }
    return translation || key;
};
/**
 * @function replaceVars
 *
 * Replaces variables in a translation string with values from an object
 *
 * @returns string
 */ const replaceVars = ({ translationString, vars })=>{
    const parts = translationString.split(/(\{\{.*?\}\})/);
    return parts.map((part)=>{
        if (part.startsWith('{{') && part.endsWith('}}')) {
            const placeholder = part.substring(2, part.length - 2).trim();
            const value = vars[placeholder];
            return value !== undefined && value !== null ? value : part;
        } else {
            return part;
        }
    }).join('');
};
function t({ key, translations, vars }) {
    let translationString = getTranslationString({
        count: typeof vars?.count === 'number' ? vars.count : undefined,
        key,
        translations
    });
    if (vars) {
        translationString = replaceVars({
            translationString,
            vars
        });
    }
    if (!translationString) {
        translationString = key;
    }
    return translationString;
}
const initTFunction = (args)=>{
    const { config, language, translations } = args;
    const mergedTranslations = language && config?.translations?.[language] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepMergeSimple"])(translations, config.translations[language]) : translations;
    return {
        t: (key, vars)=>{
            return t({
                key,
                translations: mergedTranslations,
                vars
            });
        },
        translations: mergedTranslations
    };
};
function memoize(fn, keys) {
    const cacheMap = new Map();
    const memoized = async (args)=>{
        const cacheKey = keys.reduce((acc, key)=>acc + String(args[key]), '');
        if (!cacheMap.has(cacheKey)) {
            const result = await fn(args);
            cacheMap.set(cacheKey, result);
        }
        return cacheMap.get(cacheKey);
    };
    return memoized;
}
const initI18n = memoize(async ({ config, context, language = config.fallbackLanguage })=>{
    if (!language || !config.supportedLanguages?.[language]) {
        throw new Error(`Language ${language} not supported`);
    }
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslationsByContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslationsByContext"])(config.supportedLanguages?.[language], context);
    const { t, translations: mergedTranslations } = initTFunction({
        config: config,
        language: language || config.fallbackLanguage,
        translations: translations
    });
    const dateFNSKey = config.supportedLanguages[language]?.dateFNSKey || 'en-US';
    const dateFNS = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importDateFNSLocale"])(dateFNSKey);
    const i18n = {
        dateFNS,
        dateFNSKey,
        fallbackLanguage: config.fallbackLanguage,
        language: language || config.fallbackLanguage,
        t,
        translations: mergedTranslations
    };
    return i18n;
}, [
    'language',
    'context'
]); //# sourceMappingURL=init.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en,
    "enTranslations",
    ()=>enTranslations
]);
const enTranslations = {
    authentication: {
        account: 'Account',
        accountOfCurrentUser: 'Account of current user',
        accountVerified: 'Account verified successfully.',
        alreadyActivated: 'Already Activated',
        alreadyLoggedIn: 'Already logged in',
        apiKey: 'API Key',
        authenticated: 'Authenticated',
        backToLogin: 'Back to login',
        beginCreateFirstUser: 'To begin, create your first user.',
        changePassword: 'Change Password',
        checkYourEmailForPasswordReset: "If the email address is associated with an account, you will receive instructions to reset your password shortly. Please check your spam or junk mail folder if you don't see the email in your inbox.",
        confirmGeneration: 'Confirm Generation',
        confirmPassword: 'Confirm Password',
        createFirstUser: 'Create first user',
        emailNotValid: 'The email provided is not valid',
        emailOrUsername: 'Email or Username',
        emailSent: 'Email Sent',
        emailVerified: 'Email verified successfully.',
        enableAPIKey: 'Enable API Key',
        failedToUnlock: 'Failed to unlock',
        forceUnlock: 'Force Unlock',
        forgotPassword: 'Forgot Password',
        forgotPasswordEmailInstructions: 'Please enter your email below. You will receive an email message with instructions on how to reset your password.',
        forgotPasswordUsernameInstructions: 'Please enter your username below. Instructions on how to reset your password will be sent to email address associated with your username.',
        usernameNotValid: 'The username provided is not valid',
        forgotPasswordQuestion: 'Forgot password?',
        generate: 'Generate',
        generateNewAPIKey: 'Generate new API key',
        generatingNewAPIKeyWillInvalidate: 'Generating a new API key will <1>invalidate</1> the previous key. Are you sure you wish to continue?',
        lockUntil: 'Lock Until',
        logBackIn: 'Log back in',
        loggedIn: 'To log in with another user, you should <0>log out</0> first.',
        loggedInChangePassword: 'To change your password, go to your <0>account</0> and edit your password there.',
        loggedOutInactivity: 'You have been logged out due to inactivity.',
        loggedOutSuccessfully: 'You have been logged out successfully.',
        loggingOut: 'Logging out...',
        login: 'Login',
        loginAttempts: 'Login Attempts',
        loginUser: 'Login user',
        loginWithAnotherUser: 'To log in with another user, you should <0>log out</0> first.',
        logOut: 'Log out',
        logout: 'Logout',
        logoutSuccessful: 'Logout successful.',
        logoutUser: 'Logout user',
        newAccountCreated: 'A new account has just been created for you to access <a href="{{serverURL}}">{{serverURL}}</a> Please click on the following link or paste the URL below into your browser to verify your email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> After verifying your email, you will be able to log in successfully.',
        newAPIKeyGenerated: 'New API Key Generated.',
        newPassword: 'New Password',
        passed: 'Authentication Passed',
        passwordResetSuccessfully: 'Password reset successfully.',
        resetPassword: 'Reset Password',
        resetPasswordExpiration: 'Reset Password Expiration',
        resetPasswordToken: 'Reset Password Token',
        resetYourPassword: 'Reset Your Password',
        stayLoggedIn: 'Stay logged in',
        successfullyRegisteredFirstUser: 'Successfully registered first user.',
        successfullyUnlocked: 'Successfully unlocked',
        tokenRefreshSuccessful: 'Token refresh successful.',
        unableToVerify: 'Unable to Verify',
        username: 'Username',
        verified: 'Verified',
        verifiedSuccessfully: 'Verified Successfully',
        verify: 'Verify',
        verifyUser: 'Verify User',
        verifyYourEmail: 'Verify your email',
        youAreInactive: "You haven't been active in a little while and will shortly be automatically logged out for your own security. Would you like to stay logged in?",
        youAreReceivingResetPassword: 'You are receiving this because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste this into your browser to complete the process:',
        youDidNotRequestPassword: 'If you did not request this, please ignore this email and your password will remain unchanged.'
    },
    dashboard: {
        addWidget: 'Add Widget',
        deleteWidget: 'Delete widget {{id}}',
        searchWidgets: 'Search widgets...'
    },
    error: {
        accountAlreadyActivated: 'This account has already been activated.',
        autosaving: 'There was a problem while autosaving this document.',
        correctInvalidFields: 'Please correct invalid fields.',
        deletingFile: 'There was an error deleting file.',
        deletingTitle: 'There was an error while deleting {{title}}. Please check your connection and try again.',
        documentNotFound: 'The document with ID {{id}} could not be found. It may have been deleted or never existed, or you may not have access to it.',
        emailOrPasswordIncorrect: 'The email or password provided is incorrect.',
        followingFieldsInvalid_one: 'The following field is invalid:',
        followingFieldsInvalid_other: 'The following fields are invalid:',
        incorrectCollection: 'Incorrect Collection',
        insufficientClipboardPermissions: 'Clipboard access denied. Please check your clipboard permissions.',
        invalidClipboardData: 'Invalid clipboard data.',
        invalidFileType: 'Invalid file type',
        invalidFileTypeValue: 'Invalid file type: {{value}}',
        invalidRequestArgs: 'Invalid arguments passed in request: {{args}}',
        loadingDocument: 'There was a problem loading the document with ID of {{id}}.',
        localesNotSaved_one: 'The following locale could not be saved:',
        localesNotSaved_other: 'The following locales could not be saved:',
        logoutFailed: 'Logout failed.',
        missingEmail: 'Missing email.',
        missingIDOfDocument: 'Missing ID of document to update.',
        missingIDOfVersion: 'Missing ID of version.',
        missingRequiredData: 'Missing required data.',
        noFilesUploaded: 'No files were uploaded.',
        noMatchedField: 'No matched field found for "{{label}}"',
        notAllowedToAccessPage: 'You are not allowed to access this page.',
        notAllowedToPerformAction: 'You are not allowed to perform this action.',
        notFound: 'The requested resource was not found.',
        noUser: 'No User',
        previewing: 'There was a problem previewing this document.',
        problemUploadingFile: 'There was a problem while uploading the file.',
        restoringTitle: 'There was an error while restoring {{title}}. Please check your connection and try again.',
        revertingDocument: 'There was a problem while reverting this document.',
        tokenInvalidOrExpired: 'Token is either invalid or has expired.',
        tokenNotProvided: 'Token not provided.',
        unableToCopy: 'Unable to copy.',
        unableToDeleteCount: 'Unable to delete {{count}} out of {{total}} {{label}}.',
        unableToReindexCollection: 'Error reindexing collection {{collection}}. Operation aborted.',
        unableToUpdateCount: 'Unable to update {{count}} out of {{total}} {{label}}.',
        unauthorized: 'Unauthorized, you must be logged in to make this request.',
        unauthorizedAdmin: 'Unauthorized, this user does not have access to the admin panel.',
        unknown: 'An unknown error has occurred.',
        unPublishingDocument: 'There was a problem while un-publishing this document.',
        unspecific: 'An error has occurred.',
        unverifiedEmail: 'Please verify your email before logging in.',
        userEmailAlreadyRegistered: 'A user with the given email is already registered.',
        userLocked: 'This user is locked due to having too many failed login attempts.',
        usernameAlreadyRegistered: 'A user with the given username is already registered.',
        usernameOrPasswordIncorrect: 'The username or password provided is incorrect.',
        valueMustBeUnique: 'Value must be unique',
        verificationTokenInvalid: 'Verification token is invalid.'
    },
    fields: {
        addLabel: 'Add {{label}}',
        addLink: 'Add Link',
        addNew: 'Add new',
        addNewLabel: 'Add new {{label}}',
        addRelationship: 'Add Relationship',
        addUpload: 'Add Upload',
        block: 'Block',
        blocks: 'blocks',
        blockType: 'Block Type',
        chooseBetweenCustomTextOrDocument: 'Choose between entering a custom text URL or linking to another document.',
        chooseDocumentToLink: 'Choose a document to link to',
        chooseFromExisting: 'Choose from existing',
        chooseLabel: 'Choose {{label}}',
        collapseAll: 'Collapse All',
        customURL: 'Custom URL',
        editLabelData: 'Edit {{label}} data',
        editLink: 'Edit Link',
        editRelationship: 'Edit Relationship',
        enterURL: 'Enter a URL',
        internalLink: 'Internal Link',
        itemsAndMore: '{{items}} and {{count}} more',
        labelRelationship: '{{label}} Relationship',
        latitude: 'Latitude',
        linkedTo: 'Linked to <0>{{label}}</0>',
        linkType: 'Link Type',
        longitude: 'Longitude',
        newLabel: 'New {{label}}',
        openInNewTab: 'Open in new tab',
        passwordsDoNotMatch: 'Passwords do not match.',
        relatedDocument: 'Related Document',
        relationTo: 'Relation To',
        removeRelationship: 'Remove Relationship',
        removeUpload: 'Remove Upload',
        saveChanges: 'Save changes',
        searchForBlock: 'Search for a block',
        searchForLanguage: 'Search for a language',
        selectExistingLabel: 'Select existing {{label}}',
        selectFieldsToEdit: 'Select fields to edit',
        showAll: 'Show All',
        swapRelationship: 'Swap Relationship',
        swapUpload: 'Swap Upload',
        textToDisplay: 'Text to display',
        toggleBlock: 'Toggle block',
        uploadNewLabel: 'Upload new {{label}}'
    },
    folder: {
        browseByFolder: 'Browse by Folder',
        byFolder: 'By Folder',
        deleteFolder: 'Delete Folder',
        folderName: 'Folder Name',
        folders: 'Folders',
        folderTypeDescription: 'Select which type of collection documents should be allowed in this folder.',
        itemHasBeenMoved: '{{title}} has been moved to {{folderName}}',
        itemHasBeenMovedToRoot: '{{title}} has been moved to the root folder',
        itemsMovedToFolder: '{{title}} moved to {{folderName}}',
        itemsMovedToRoot: '{{title}} moved to the root folder',
        moveFolder: 'Move Folder',
        moveItemsToFolderConfirmation: 'You are about to move <1>{{count}} {{label}}</1> to <2>{{toFolder}}</2>. Are you sure?',
        moveItemsToRootConfirmation: 'You are about to move <1>{{count}} {{label}}</1> to the root folder. Are you sure?',
        moveItemToFolderConfirmation: 'You are about to move <1>{{title}}</1> to <2>{{toFolder}}</2>. Are you sure?',
        moveItemToRootConfirmation: 'You are about to move <1>{{title}}</1> to the root folder. Are you sure?',
        movingFromFolder: 'Moving {{title}} from {{fromFolder}}',
        newFolder: 'New Folder',
        noFolder: 'No Folder',
        renameFolder: 'Rename Folder',
        searchByNameInFolder: 'Search by Name in {{folderName}}',
        selectFolderForItem: 'Select folder for {{title}}'
    },
    general: {
        name: 'Name',
        aboutToDelete: 'You are about to delete the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToDeleteCount_many: 'You are about to delete {{count}} {{label}}',
        aboutToDeleteCount_one: 'You are about to delete {{count}} {{label}}',
        aboutToDeleteCount_other: 'You are about to delete {{count}} {{label}}',
        aboutToPermanentlyDelete: 'You are about to permanently delete the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToPermanentlyDeleteTrash: 'You are about to permanently delete <0>{{count}}</0> <1>{{label}}</1> from the trash. Are you sure?',
        aboutToRestore: 'You are about to restore the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToRestoreAsDraft: 'You are about to restore the {{label}} <1>{{title}}</1> as a draft. Are you sure?',
        aboutToRestoreAsDraftCount: 'You are about to restore {{count}} {{label}} as draft',
        aboutToRestoreCount: 'You are about to restore {{count}} {{label}}',
        aboutToTrash: 'You are about to move the {{label}} <1>{{title}}</1> to the trash. Are you sure?',
        aboutToTrashCount: 'You are about to move {{count}} {{label}} to the trash',
        addBelow: 'Add Below',
        addFilter: 'Add Filter',
        adminTheme: 'Admin Theme',
        all: 'All',
        allCollections: 'All Collections',
        allLocales: 'All locales',
        and: 'And',
        anotherUser: 'Another user',
        anotherUserTakenOver: 'Another user has taken over editing this document.',
        applyChanges: 'Apply Changes',
        ascending: 'Ascending',
        automatic: 'Automatic',
        backToDashboard: 'Back to Dashboard',
        cancel: 'Cancel',
        changesNotSaved: 'Your changes have not been saved. If you leave now, you will lose your changes.',
        clear: 'Clear',
        clearAll: 'Clear All',
        close: 'Close',
        collapse: 'Collapse',
        collections: 'Collections',
        columns: 'Columns',
        columnToSort: 'Column to Sort',
        confirm: 'Confirm',
        confirmCopy: 'Confirm copy',
        confirmDeletion: 'Confirm deletion',
        confirmDuplication: 'Confirm duplication',
        confirmMove: 'Confirm move',
        confirmReindex: 'Reindex all {{collections}}?',
        confirmReindexAll: 'Reindex all collections?',
        confirmReindexDescription: 'This will remove existing indexes and reindex documents in the {{collections}} collections.',
        confirmReindexDescriptionAll: 'This will remove existing indexes and reindex documents in all collections.',
        confirmRestoration: 'Confirm restoration',
        copied: 'Copied',
        copy: 'Copy',
        copyField: 'Copy Field',
        copying: 'Copying',
        copyRow: 'Copy Row',
        copyWarning: 'You are about to overwrite {{to}} with {{from}} for {{label}} {{title}}. Are you sure?',
        create: 'Create',
        created: 'Created',
        createdAt: 'Created At',
        createNew: 'Create New',
        createNewLabel: 'Create new {{label}}',
        creating: 'Creating',
        creatingNewLabel: 'Creating new {{label}}',
        currentlyEditing: 'is currently editing this document. If you take over, they will be blocked from continuing to edit, and may also lose unsaved changes.',
        custom: 'Custom',
        dark: 'Dark',
        dashboard: 'Dashboard',
        delete: 'Delete',
        deleted: 'Deleted',
        deletedAt: 'Deleted At',
        deletedCountSuccessfully: 'Deleted {{count}} {{label}} successfully.',
        deletedSuccessfully: 'Deleted successfully.',
        deleteLabel: 'Delete {{label}}',
        deletePermanently: 'Skip trash and delete permanently',
        deleting: 'Deleting...',
        depth: 'Depth',
        descending: 'Descending',
        deselectAllRows: 'Deselect all rows',
        document: 'Document',
        documentIsTrashed: 'This {{label}} is trashed and is read-only.',
        documentLocked: 'Document locked',
        documents: 'Documents',
        duplicate: 'Duplicate',
        duplicateWithoutSaving: 'Duplicate without saving changes',
        edit: 'Edit',
        editAll: 'Edit all',
        editedSince: 'Edited since',
        editing: 'Editing',
        editingLabel_many: 'Editing {{count}} {{label}}',
        editingLabel_one: 'Editing {{count}} {{label}}',
        editingLabel_other: 'Editing {{count}} {{label}}',
        editingTakenOver: 'Editing taken over',
        editLabel: 'Edit {{label}}',
        email: 'Email',
        emailAddress: 'Email Address',
        emptyTrash: 'Empty trash',
        emptyTrashLabel: 'Empty {{label}} trash',
        enterAValue: 'Enter a value',
        error: 'Error',
        errors: 'Errors',
        exitLivePreview: 'Exit Live Preview',
        export: 'Export',
        fallbackToDefaultLocale: 'Fallback to default locale',
        false: 'False',
        filter: 'Filter',
        filters: 'Filters',
        filterWhere: 'Filter {{label}} where',
        globals: 'Globals',
        goBack: 'Go back',
        groupByLabel: 'Group by {{label}}',
        import: 'Import',
        isEditing: 'is editing',
        item: 'Item',
        items: 'items',
        language: 'Language',
        lastModified: 'Last Modified',
        leaveAnyway: 'Leave anyway',
        leaveWithoutSaving: 'Leave without saving',
        light: 'Light',
        livePreview: 'Live Preview',
        loading: 'Loading',
        locale: 'Locale',
        locales: 'Locales',
        lock: 'Lock',
        menu: 'Menu',
        moreOptions: 'More options',
        move: 'Move',
        moveConfirm: 'You are about to move {{count}} {{label}} to <1>{{destination}}</1>. Are you sure?',
        moveCount: 'Move {{count}} {{label}}',
        moveDown: 'Move Down',
        moveUp: 'Move Up',
        moving: 'Moving',
        movingCount: 'Moving {{count}} {{label}}',
        newLabel: 'New {{label}}',
        newPassword: 'New Password',
        next: 'Next',
        no: 'No',
        noDateSelected: 'No date selected',
        noFiltersSet: 'No filters set',
        noLabel: '<No {{label}}>',
        none: 'None',
        noOptions: 'No options',
        noResults: "No {{label}} found. Either no {{label}} exist yet or none match the filters you've specified above.",
        notFound: 'Not Found',
        nothingFound: 'Nothing found',
        noTrashResults: 'No {{label}} in trash.',
        noUpcomingEventsScheduled: 'No upcoming events scheduled.',
        noValue: 'No value',
        of: 'of',
        only: 'Only',
        open: 'Open',
        or: 'Or',
        order: 'Order',
        overwriteExistingData: 'Overwrite existing field data',
        pageNotFound: 'Page not found',
        password: 'Password',
        pasteField: 'Paste Field',
        pasteRow: 'Paste Row',
        payloadSettings: 'Payload Settings',
        permanentlyDelete: 'Permanently Delete',
        permanentlyDeletedCountSuccessfully: 'Permanently deleted {{count}} {{label}} successfully.',
        perPage: 'Per Page: {{limit}}',
        previous: 'Previous',
        reindex: 'Reindex',
        reindexingAll: 'Reindexing all {{collections}}.',
        remove: 'Remove',
        rename: 'Rename',
        reset: 'Reset',
        resetPreferences: 'Reset Preferences',
        resetPreferencesDescription: 'This will reset all of your preferences to their default settings.',
        resettingPreferences: 'Resetting Preferences.',
        restore: 'Restore',
        restoreAsPublished: 'Restore as published version',
        restoredCountSuccessfully: 'Restored {{count}} {{label}} successfully.',
        restoring: 'Restoring...',
        row: 'Row',
        rows: 'Rows',
        save: 'Save',
        saving: 'Saving...',
        schedulePublishFor: 'Schedule publish for {{title}}',
        searchBy: 'Search by {{label}}',
        select: 'Select',
        selectAll: 'Select all {{count}} {{label}}',
        selectAllRows: 'Select all rows',
        selectedCount: '{{count}} {{label}} selected',
        selectLabel: 'Select {{label}}',
        selectValue: 'Select a value',
        showAllLabel: 'Show all {{label}}',
        sorryNotFound: 'Sorry—there is nothing to correspond with your request.',
        sort: 'Sort',
        sortByLabelDirection: 'Sort by {{label}} {{direction}}',
        stayOnThisPage: 'Stay on this page',
        submissionSuccessful: 'Submission Successful.',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Success',
        successfullyCreated: '{{label}} successfully created.',
        successfullyDuplicated: '{{label}} successfully duplicated.',
        successfullyReindexed: 'Successfully reindexed {{count}} of {{total}} documents from {{collections}} and skipped {{skips}} drafts.',
        takeOver: 'Take over',
        thisLanguage: 'English',
        time: 'Time',
        timezone: 'Timezone',
        titleDeleted: '{{label}} "{{title}}" successfully deleted.',
        titleRestored: '{{label}} "{{title}}" successfully restored.',
        titleTrashed: '{{label}} "{{title}}" moved to trash.',
        trash: 'Trash',
        trashedCountSuccessfully: '{{count}} {{label}} moved to trash.',
        true: 'True',
        unauthorized: 'Unauthorized',
        unlock: 'Unlock',
        unsavedChanges: 'You have unsaved changes. Save or discard before continuing.',
        unsavedChangesDuplicate: 'You have unsaved changes. Would you like to continue to duplicate?',
        untitled: 'Untitled',
        upcomingEvents: 'Upcoming Events',
        updatedAt: 'Updated At',
        updatedCountSuccessfully: 'Updated {{count}} {{label}} successfully.',
        updatedLabelSuccessfully: 'Updated {{label}} successfully.',
        updatedSuccessfully: 'Updated successfully.',
        updateForEveryone: 'Update for everyone',
        updating: 'Updating',
        uploading: 'Uploading',
        uploadingBulk: 'Uploading {{current}} of {{total}}',
        user: 'User',
        username: 'Username',
        users: 'Users',
        value: 'Value',
        viewing: 'Viewing',
        viewReadOnly: 'View read-only',
        welcome: 'Welcome',
        yes: 'Yes'
    },
    localization: {
        cannotCopySameLocale: 'Cannot copy to the same locale',
        copyFrom: 'Copy from',
        copyFromTo: 'Copying from {{from}} to {{to}}',
        copyTo: 'Copy to',
        copyToLocale: 'Copy to locale',
        localeToPublish: 'Locale to publish',
        selectedLocales: 'Selected Locales',
        selectLocaleToCopy: 'Select locale to copy',
        selectLocaleToDuplicate: 'Select locales to duplicate'
    },
    operators: {
        contains: 'contains',
        equals: 'equals',
        exists: 'exists',
        intersects: 'intersects',
        isGreaterThan: 'is greater than',
        isGreaterThanOrEqualTo: 'is greater than or equal to',
        isIn: 'is in',
        isLessThan: 'is less than',
        isLessThanOrEqualTo: 'is less than or equal to',
        isLike: 'is like',
        isNotEqualTo: 'is not equal to',
        isNotIn: 'is not in',
        isNotLike: 'is not like',
        near: 'near',
        within: 'within'
    },
    upload: {
        addFile: 'Add file',
        addFiles: 'Add files',
        bulkUpload: 'Bulk Upload',
        crop: 'Crop',
        cropToolDescription: 'Drag the corners of the selected area, draw a new area or adjust the values below.',
        download: 'Download',
        dragAndDrop: 'Drag and drop a file',
        dragAndDropHere: 'or drag and drop a file here',
        editImage: 'Edit Image',
        fileName: 'File Name',
        fileSize: 'File Size',
        filesToUpload: 'Files to Upload',
        fileToUpload: 'File to Upload',
        focalPoint: 'Focal Point',
        focalPointDescription: 'Drag the focal point directly on the preview or adjust the values below.',
        height: 'Height',
        lessInfo: 'Less info',
        moreInfo: 'More info',
        noFile: 'No file',
        pasteURL: 'Paste URL',
        previewSizes: 'Preview Sizes',
        selectCollectionToBrowse: 'Select a Collection to Browse',
        selectFile: 'Select a file',
        setCropArea: 'Set crop area',
        setFocalPoint: 'Set focal point',
        sizes: 'Sizes',
        sizesFor: 'Sizes for {{label}}',
        width: 'Width'
    },
    validation: {
        emailAddress: 'Please enter a valid email address.',
        enterNumber: 'Please enter a valid number.',
        fieldHasNo: 'This field has no {{label}}',
        greaterThanMax: '{{value}} is greater than the max allowed {{label}} of {{max}}.',
        invalidBlock: 'The block "{{block}}" is not allowed.',
        invalidBlocks: 'This field contains blocks that are no longer allowed: {{blocks}}.',
        invalidInput: 'This field has an invalid input.',
        invalidSelection: 'This field has an invalid selection.',
        invalidSelections: 'This field has the following invalid selections:',
        latitudeOutOfBounds: 'Latitude must be between -90 and 90.',
        lessThanMin: '{{value}} is less than the min allowed {{label}} of {{min}}.',
        limitReached: 'Limit reached, only {{max}} items can be added.',
        longerThanMin: 'This value must be longer than the minimum length of {{minLength}} characters.',
        longitudeOutOfBounds: 'Longitude must be between -180 and 180.',
        notValidDate: '"{{value}}" is not a valid date.',
        required: 'This field is required.',
        requiresAtLeast: 'This field requires at least {{count}} {{label}}.',
        requiresNoMoreThan: 'This field requires no more than {{count}} {{label}}.',
        requiresTwoNumbers: 'This field requires two numbers.',
        shorterThanMax: 'This value must be shorter than the max length of {{maxLength}} characters.',
        timezoneRequired: 'A timezone is required.',
        trueOrFalse: 'This field can only be equal to true or false.',
        username: 'Please enter a valid username. Can contain letters, numbers, hyphens, periods and underscores.',
        validUploadID: 'This field is not a valid upload ID.'
    },
    version: {
        type: 'Type',
        aboutToPublishSelection: 'You are about to publish all {{label}} in the selection. Are you sure?',
        aboutToRestore: 'You are about to restore this {{label}} document to the state that it was in on {{versionDate}}.',
        aboutToRestoreGlobal: 'You are about to restore the global {{label}} to the state that it was in on {{versionDate}}.',
        aboutToRevertToPublished: "You are about to revert this document's changes to its published state. Are you sure?",
        aboutToUnpublish: 'You are about to unpublish this document. Are you sure?',
        aboutToUnpublishIn: 'You are about to unpublish this document in {{locale}}. Are you sure?',
        aboutToUnpublishSelection: 'You are about to unpublish all {{label}} in the selection. Are you sure?',
        autosave: 'Autosave',
        autosavedSuccessfully: 'Autosaved successfully.',
        autosavedVersion: 'Autosaved version',
        changed: 'Changed',
        changedFieldsCount_one: '{{count}} changed field',
        changedFieldsCount_other: '{{count}} changed fields',
        compareVersion: 'Compare version against:',
        compareVersions: 'Compare Versions',
        comparingAgainst: 'Comparing against',
        confirmPublish: 'Confirm publish',
        confirmRevertToSaved: 'Confirm revert to saved',
        confirmUnpublish: 'Confirm unpublish',
        confirmVersionRestoration: 'Confirm Version Restoration',
        currentDocumentStatus: 'Current {{docStatus}} document',
        currentDraft: 'Current Draft',
        currentlyPublished: 'Currently Published',
        currentlyViewing: 'Currently viewing',
        currentPublishedVersion: 'Current Published Version',
        draft: 'Draft',
        draftHasPublishedVersion: 'Draft (has published version)',
        draftSavedSuccessfully: 'Draft saved successfully.',
        lastSavedAgo: 'Last saved {{distance}} ago',
        modifiedOnly: 'Modified only',
        moreVersions: 'More versions...',
        noFurtherVersionsFound: 'No further versions found',
        noLabelGroup: 'Unnamed Group',
        noRowsFound: 'No {{label}} found',
        noRowsSelected: 'No {{label}} selected',
        preview: 'Preview',
        previouslyDraft: 'Previously a Draft',
        previouslyPublished: 'Previously Published',
        previousVersion: 'Previous Version',
        problemRestoringVersion: 'There was a problem restoring this version',
        publish: 'Publish',
        publishAllLocales: 'Publish all locales',
        publishChanges: 'Publish changes',
        published: 'Published',
        publishIn: 'Publish in {{locale}}',
        publishing: 'Publishing',
        restoreAsDraft: 'Restore as draft',
        restoredSuccessfully: 'Restored Successfully.',
        restoreThisVersion: 'Restore this version',
        restoring: 'Restoring...',
        reverting: 'Reverting...',
        revertToPublished: 'Revert to published',
        revertUnsuccessful: 'Revert unsuccessful. No previously published version found.',
        saveDraft: 'Save Draft',
        scheduledSuccessfully: 'Scheduled successfully.',
        schedulePublish: 'Schedule Publish',
        selectLocales: 'Select locales to display',
        selectVersionToCompare: 'Select a version to compare',
        showingVersionsFor: 'Showing versions for:',
        showLocales: 'Show locales:',
        specificVersion: 'Specific Version',
        status: 'Status',
        unpublish: 'Unpublish',
        unpublished: 'Unpublished',
        unpublishedSuccessfully: 'Unpublished successfully.',
        unpublishIn: 'Unpublish in {{locale}}',
        unpublishing: 'Unpublishing...',
        version: 'Version',
        versionAgo: '{{distance}} ago',
        versionCount_many: '{{count}} versions found',
        versionCount_none: 'No versions found',
        versionCount_one: '{{count}} version found',
        versionCount_other: '{{count}} versions found',
        versionID: 'Version ID',
        versions: 'Versions',
        viewingVersion: 'Viewing version for the {{entityLabel}} {{documentTitle}}',
        viewingVersionGlobal: 'Viewing version for the global {{entityLabel}}',
        viewingVersions: 'Viewing versions for the {{entityLabel}} {{documentTitle}}',
        viewingVersionsGlobal: 'Viewing versions for the global {{entityLabel}}'
    }
};
const en = {
    dateFNSKey: 'en-US',
    translations: enTranslations
}; //# sourceMappingURL=en.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation
]);
const getTranslation = (label, /**
   * @todo type as I18nClient in 4.0
   */ i18n)=>{
    // If it's a Record, look for translation. If string or React Element, pass through
    if (typeof label === 'object' && !Object.prototype.hasOwnProperty.call(label, '$$typeof')) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        if (label[i18n.language]) {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            return label[i18n.language];
        }
        let fallbacks = [];
        if (typeof i18n.fallbackLanguage === 'string') {
            fallbacks = [
                i18n.fallbackLanguage
            ];
        } else if (Array.isArray(i18n.fallbackLanguage)) {
            fallbacks = i18n.fallbackLanguage;
        }
        const fallbackLang = fallbacks.find((language)=>label[language]);
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        return fallbackLang && label[fallbackLang] ? label[fallbackLang] : label[Object.keys(label)[0]];
    }
    if (typeof label === 'function') {
        return label({
            i18n: i18n,
            t: i18n.t
        });
    }
    // If it's a React Element or string, then we should just pass it through
    return label;
}; //# sourceMappingURL=getTranslation.js.map
}),
"[project]/node_modules/jose/dist/node/esm/runtime/digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const digest = (algorithm, data)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])(algorithm).update(data).digest();
const __TURBOPACK__default__export__ = digest;
}),
"[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat,
    "concatKdf",
    ()=>concatKdf,
    "decoder",
    ()=>decoder,
    "encoder",
    ()=>encoder,
    "lengthAndInput",
    ()=>lengthAndInput,
    "p2s",
    ()=>p2s,
    "uint32be",
    ()=>uint32be,
    "uint64be",
    ()=>uint64be
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/digest.js [app-route] (ecmascript)");
;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function p2s(alg, p2sInput) {
    return concat(encoder.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeBase64",
    ()=>decodeBase64,
    "encode",
    ()=>encode,
    "encodeBase64",
    ()=>encodeBase64
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
;
;
function normalize(input) {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(encoded);
    }
    return encoded;
}
const encode = (input)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64url');
const decodeBase64 = (input)=>new Uint8Array(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input, 'base64'));
const encodeBase64 = (input)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64');
;
const decode = (input)=>new Uint8Array(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(normalize(input), 'base64url'));
}),
"[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEAlgNotAllowed",
    ()=>JOSEAlgNotAllowed,
    "JOSEError",
    ()=>JOSEError,
    "JOSENotSupported",
    ()=>JOSENotSupported,
    "JWEDecryptionFailed",
    ()=>JWEDecryptionFailed,
    "JWEInvalid",
    ()=>JWEInvalid,
    "JWKInvalid",
    ()=>JWKInvalid,
    "JWKSInvalid",
    ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys",
    ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey",
    ()=>JWKSNoMatchingKey,
    "JWKSTimeout",
    ()=>JWKSTimeout,
    "JWSInvalid",
    ()=>JWSInvalid,
    "JWSSignatureVerificationFailed",
    ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed",
    ()=>JWTClaimValidationFailed,
    "JWTExpired",
    ()=>JWTExpired,
    "JWTInvalid",
    ()=>JWTInvalid
]);
class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWEDecryptionFailed extends JOSEError {
    static code = 'ERR_JWE_DECRYPTION_FAILED';
    code = 'ERR_JWE_DECRYPTION_FAILED';
    constructor(message = 'decryption operation failed', options){
        super(message, options);
    }
}
class JWEInvalid extends JOSEError {
    static code = 'ERR_JWE_INVALID';
    code = 'ERR_JWE_INVALID';
}
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
class JWKInvalid extends JOSEError {
    static code = 'ERR_JWK_INVALID';
    code = 'ERR_JWK_INVALID';
}
class JWKSInvalid extends JOSEError {
    static code = 'ERR_JWKS_INVALID';
    code = 'ERR_JWKS_INVALID';
}
class JWKSNoMatchingKey extends JOSEError {
    static code = 'ERR_JWKS_NO_MATCHING_KEY';
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSTimeout extends JOSEError {
    static code = 'ERR_JWKS_TIMEOUT';
    code = 'ERR_JWKS_TIMEOUT';
    constructor(message = 'request timed out', options){
        super(message, options);
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options){
        super(message, options);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dsaDigest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function dsaDigest(alg) {
    switch(alg){
        case 'PS256':
        case 'RS256':
        case 'ES256':
        case 'ES256K':
            return 'sha256';
        case 'PS384':
        case 'RS384':
        case 'ES384':
            return 'sha384';
        case 'PS512':
        case 'RS512':
        case 'ES512':
            return 'sha512';
        case 'EdDSA':
            return undefined;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/hmac_digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hmacDigest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function hmacDigest(alg) {
    switch(alg){
        case 'HS256':
            return 'sha256';
        case 'HS384':
            return 'sha384';
        case 'HS512':
            return 'sha512';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isCryptoKey",
    ()=>isCryptoKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
;
;
const webcrypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["webcrypto"];
const __TURBOPACK__default__export__ = webcrypto;
const isCryptoKey = (key)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isCryptoKey(key);
}),
"[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
;
const __TURBOPACK__default__export__ = (obj)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isKeyObject(obj);
}),
"[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withAlg",
    ()=>withAlg
]);
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
const __TURBOPACK__default__export__ = (actual, ...types)=>{
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "types",
    ()=>types
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key);
const types = [
    'KeyObject'
];
if (globalThis.CryptoKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]?.CryptoKey) {
    types.push('CryptoKey');
}
;
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isObject
]);
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJWK",
    ()=>isJWK,
    "isPrivateJWK",
    ()=>isPrivateJWK,
    "isPublicJWK",
    ()=>isPublicJWK,
    "isSecretJWK",
    ()=>isSecretJWK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
;
function isJWK(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return isJWK(key) && key.kty === 'oct' && typeof key.k === 'string';
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/get_named_curve.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "weakMap",
    ()=>weakMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const weakMap = new WeakMap();
const namedCurveToJOSE = (namedCurve)=>{
    switch(namedCurve){
        case 'prime256v1':
            return 'P-256';
        case 'secp384r1':
            return 'P-384';
        case 'secp521r1':
            return 'P-521';
        case 'secp256k1':
            return 'secp256k1';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported key curve for this operation');
    }
};
const getNamedCurve = (kee, raw)=>{
    let key;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(kee)) {
        key = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"].from(kee);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(kee)) {
        key = kee;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"])(kee)) {
        return kee.crv;
    } else {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(kee, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"]));
    }
    if (key.type === 'secret') {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
    }
    switch(key.asymmetricKeyType){
        case 'ed25519':
        case 'ed448':
            return `Ed${key.asymmetricKeyType.slice(2)}`;
        case 'x25519':
        case 'x448':
            return `X${key.asymmetricKeyType.slice(1)}`;
        case 'ec':
            {
                const namedCurve = key.asymmetricKeyDetails.namedCurve;
                if (raw) {
                    return namedCurve;
                }
                return namedCurveToJOSE(namedCurve);
            }
        default:
            throw new TypeError('Invalid asymmetric key type for this operation');
    }
};
const __TURBOPACK__default__export__ = getNamedCurve;
}),
"[project]/node_modules/jose/dist/node/esm/runtime/check_key_length.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = (key, alg)=>{
    let modulusLength;
    try {
        if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
            modulusLength = key.asymmetricKeyDetails?.modulusLength;
        } else {
            modulusLength = Buffer.from(key.n, 'base64url').byteLength << 3;
        }
    } catch  {}
    if (typeof modulusLength !== 'number' || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};
}),
"[project]/node_modules/jose/dist/node/esm/runtime/node_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>keyForCrypto
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_named_curve$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/get_named_curve.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/check_key_length.js [app-route] (ecmascript)");
;
;
;
;
const ecCurveAlgMap = new Map([
    [
        'ES256',
        'P-256'
    ],
    [
        'ES256K',
        'secp256k1'
    ],
    [
        'ES384',
        'P-384'
    ],
    [
        'ES512',
        'P-521'
    ]
]);
function keyForCrypto(alg, key) {
    let asymmetricKeyType;
    let asymmetricKeyDetails;
    let isJWK;
    if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
        asymmetricKeyType = key.asymmetricKeyType;
        asymmetricKeyDetails = key.asymmetricKeyDetails;
    } else {
        isJWK = true;
        switch(key.kty){
            case 'RSA':
                asymmetricKeyType = 'rsa';
                break;
            case 'EC':
                asymmetricKeyType = 'ec';
                break;
            case 'OKP':
                {
                    if (key.crv === 'Ed25519') {
                        asymmetricKeyType = 'ed25519';
                        break;
                    }
                    if (key.crv === 'Ed448') {
                        asymmetricKeyType = 'ed448';
                        break;
                    }
                    throw new TypeError('Invalid key for this operation, its crv must be Ed25519 or Ed448');
                }
            default:
                throw new TypeError('Invalid key for this operation, its kty must be RSA, OKP, or EC');
        }
    }
    let options;
    switch(alg){
        case 'EdDSA':
            if (![
                'ed25519',
                'ed448'
            ].includes(asymmetricKeyType)) {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448');
            }
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, alg);
            break;
        case 'PS256':
        case 'PS384':
        case 'PS512':
            if (asymmetricKeyType === 'rsa-pss') {
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = asymmetricKeyDetails;
                const length = parseInt(alg.slice(-3), 10);
                if (hashAlgorithm !== undefined && (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
                }
                if (saltLength !== undefined && saltLength > length >> 3) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
                }
            } else if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss');
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, alg);
            options = {
                padding: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["constants"].RSA_PKCS1_PSS_PADDING,
                saltLength: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["constants"].RSA_PSS_SALTLEN_DIGEST
            };
            break;
        case 'ES256':
        case 'ES256K':
        case 'ES384':
        case 'ES512':
            {
                if (asymmetricKeyType !== 'ec') {
                    throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ec');
                }
                const actual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_named_curve$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key);
                const expected = ecCurveAlgMap.get(alg);
                if (actual !== expected) {
                    throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
                }
                options = {
                    dsaEncoding: 'ieee-p1363'
                };
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    if (isJWK) {
        return {
            format: 'jwk',
            key,
            ...options
        };
    }
    return options ? {
        ...options,
        key
    } : key;
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/crypto_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEncCryptoKey",
    ()=>checkEncCryptoKey,
    "checkSigCryptoKey",
    ()=>checkSigCryptoKey
]);
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected)=>key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        } else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        } else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'EdDSA':
            {
                if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                    throw unusable('Ed25519 or Ed448');
                }
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                    case 'X448':
                        break;
                    default:
                        throw unusable('ECDH, X25519, or X448');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getSignVerifyKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/crypto_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
;
;
;
function getSignVerifyKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"]));
        }
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createSecretKey"])(key);
    }
    if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(key, alg, usage);
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"].from(key);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (alg.startsWith('HS')) {
            return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createSecretKey"])(Buffer.from(key.k, 'base64url'));
        }
        return key;
    }
    throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', 'JSON Web Key'));
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$hmac_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/hmac_digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/node_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-route] (ecmascript)");
;
;
;
;
;
;
const oneShotSign = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["sign"]);
const sign = async (alg, key, data)=>{
    const k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, 'sign');
    if (alg.startsWith('HS')) {
        const hmac = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$hmac_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg), k);
        hmac.update(data);
        return hmac.digest();
    }
    return oneShotSign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg), data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, k));
};
const __TURBOPACK__default__export__ = sign;
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isDisjoint = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
const __TURBOPACK__default__export__ = isDisjoint;
}),
"[project]/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkKeyTypeWithJwk",
    ()=>checkKeyTypeWithJwk,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined && key.use !== 'sig') {
        throw new TypeError('Invalid key for this operation, when present its use must be sig');
    }
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (key instanceof Uint8Array) return;
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSecretJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        switch(usage){
            case 'sign':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPrivateJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'verify':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPublicJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
    } else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
}
const __TURBOPACK__default__export__ = checkKeyType.bind(undefined, false);
const checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);
}),
"[project]/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
const __TURBOPACK__default__export__ = validateCrit;
}),
"[project]/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlattenedSign",
    ()=>FlattenedSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class FlattenedSign {
    _payload;
    _protectedHeader;
    _unprotectedHeader;
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(this._protectedHeader, this._unprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode('');
        }
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(protectedHeader, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode('.'), payload);
        const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, data);
        const jws = {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(signature),
            payload: ''
        };
        if (b64) {
            jws.payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader);
        }
        return jws;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactSign",
    ()=>CompactSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-route] (ecmascript)");
;
class CompactSign {
    _flattened;
    constructor(payload){
        this._flattened = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FlattenedSign"](payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/epoch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (date)=>Math.floor(date.getTime() / 1000);
}),
"[project]/node_modules/jose/dist/node/esm/lib/secs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
const __TURBOPACK__default__export__ = (str)=>{
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};
}),
"[project]/node_modules/jose/dist/node/esm/jwt/produce.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProduceJWT",
    ()=>ProduceJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/epoch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/secs.js [app-route] (ecmascript)");
;
;
;
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
class ProduceJWT {
    _payload;
    constructor(payload = {}){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = {
            ...this._payload,
            iss: issuer
        };
        return this;
    }
    setSubject(subject) {
        this._payload = {
            ...this._payload,
            sub: subject
        };
        return this;
    }
    setAudience(audience) {
        this._payload = {
            ...this._payload,
            aud: audience
        };
        return this;
    }
    setJti(jwtId) {
        this._payload = {
            ...this._payload,
            jti: jwtId
        };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                nbf: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                exp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = {
                ...this._payload,
                iat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date())
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else if (typeof input === 'string') {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', input)
            };
        }
        return this;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/jwt/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignJWT",
    ()=>SignJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$produce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/produce.js [app-route] (ecmascript)");
;
;
;
;
class SignJWT extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$produce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProduceJWT"] {
    _protectedHeader;
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactSign"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/node_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-route] (ecmascript)");
;
;
;
;
;
;
const oneShotVerify = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["verify"]);
const verify = async (alg, key, signature, data)=>{
    const k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, 'verify');
    if (alg.startsWith('HS')) {
        const expected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, k, data);
        const actual = signature;
        try {
            return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"](actual, expected);
        } catch  {
            return false;
        }
    }
    const algorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg);
    const keyInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, k);
    try {
        return await oneShotVerify(algorithm, data, keyInput, signature);
    } catch  {
        return false;
    }
};
const __TURBOPACK__default__export__ = verify;
}),
"[project]/node_modules/jose/dist/node/esm/lib/validate_algorithms.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const validateAlgorithms = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
const __TURBOPACK__default__export__ = validateAlgorithms;
}),
"[project]/node_modules/jose/dist/node/esm/runtime/asn1.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromPKCS8",
    ()=>fromPKCS8,
    "fromSPKI",
    ()=>fromSPKI,
    "fromX509",
    ()=>fromX509,
    "toPKCS8",
    ()=>toPKCS8,
    "toSPKI",
    ()=>toSPKI
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
;
;
;
;
;
;
const genericExport = (keyType, keyFormat, key)=>{
    let keyObject;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        if (!key.extractable) {
            throw new TypeError('CryptoKey is not extractable');
        }
        keyObject = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"].from(key);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key)) {
        keyObject = key;
    } else {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"]));
    }
    if (keyObject.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return keyObject.export({
        format: 'pem',
        type: keyFormat
    });
};
const toSPKI = (key)=>{
    return genericExport('public', 'spki', key);
};
const toPKCS8 = (key)=>{
    return genericExport('private', 'pkcs8', key);
};
const fromPKCS8 = (pem)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createPrivateKey"])({
        key: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(pem.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ''), 'base64'),
        type: 'pkcs8',
        format: 'der'
    });
const fromSPKI = (pem)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createPublicKey"])({
        key: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(pem.replace(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, ''), 'base64'),
        type: 'spki',
        format: 'der'
    });
const fromX509 = (pem)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createPublicKey"])({
        key: pem,
        type: 'spki',
        format: 'pem'
    });
}),
"[project]/node_modules/jose/dist/node/esm/runtime/jwk_to_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const parse = (key)=>{
    if (key.d) {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createPrivateKey"])({
            format: 'jwk',
            key
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createPublicKey"])({
        format: 'jwk',
        key
    });
};
const __TURBOPACK__default__export__ = parse;
}),
"[project]/node_modules/jose/dist/node/esm/key/import.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importJWK",
    ()=>importJWK,
    "importPKCS8",
    ()=>importPKCS8,
    "importSPKI",
    ()=>importSPKI,
    "importX509",
    ()=>importX509
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/asn1.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$jwk_to_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/jwk_to_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
;
;
;
;
;
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromSPKI"])(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromX509"])(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromPKCS8"])(pkcs8, alg, options);
}
async function importJWK(jwk, alg) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg ||= jwk.alg;
    switch(jwk.kty){
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$jwk_to_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
                ...jwk,
                alg
            });
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported "kty" (Key Type) Parameter value');
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenedVerify",
    ()=>flattenedVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/validate_algorithms.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/key/import.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function flattenedVerify(jws, key, options) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(jws)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(jws.protected);
            parsedProt = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader));
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header is invalid');
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(parsedProt, jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
        [
            'b64',
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string');
        }
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'verify');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
            key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importJWK"])(key, alg);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'verify');
    }
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(jws.protected ?? ''), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode('.'), typeof jws.payload === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(jws.signature);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the signature');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, signature, data);
    if (!verified) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
    }
    let payload;
    if (b64) {
        try {
            payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(jws.payload);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the payload');
        }
    } else if (typeof jws.payload === 'string') {
        payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key
        };
    }
    return result;
}
}),
"[project]/node_modules/jose/dist/node/esm/jws/compact/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compactVerify",
    ()=>compactVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
;
;
;
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Invalid Compact JWS');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenedVerify"])({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/jwt_claims_set.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/epoch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/secs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
;
;
;
;
;
const normalizeTyp = (value)=>value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
const __TURBOPACK__default__export__ = (protectedHeader, encodedPayload, options = {})=>{
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(encodedPayload));
    } catch  {}
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(payload)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(maxTokenAge);
        if (age - tolerance > max) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
};
}),
"[project]/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtVerify",
    ()=>jwtVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/compact/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/jwt_claims_set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
;
;
async function jwtVerify(jwt, key, options) {
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactVerify"])(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
"[project]/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)");
}),
"[project]/node_modules/fast-deep-equal/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}),
"[project]/node_modules/payload/node_modules/json-schema-traverse/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var traverse = module.exports = function(schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
        cb = opts;
        opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == 'function' ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    _traverse(opts, pre, post, schema, '', schema);
};
traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
};
traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
};
traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for(var key in schema){
            var sch = schema[key];
            if (Array.isArray(sch)) {
                if (key in traverse.arrayKeywords) {
                    for(var i = 0; i < sch.length; i++)_traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
                }
            } else if (key in traverse.propsKeywords) {
                if (sch && typeof sch == 'object') {
                    for(var prop in sch)_traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
                }
            } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
                _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
            }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
}
function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
}
}),
"[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {(value: string) => boolean} */ const isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
/** @type {(value: string) => boolean} */ const isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
/**
 * @param {Array<string>} input
 * @returns {string}
 */ function stringArrayToHexStripped(input) {
    let acc = '';
    let code = 0;
    let i = 0;
    for(i = 0; i < input.length; i++){
        code = input[i].charCodeAt(0);
        if (code === 48) {
            continue;
        }
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
            return '';
        }
        acc += input[i];
        break;
    }
    for(i += 1; i < input.length; i++){
        code = input[i].charCodeAt(0);
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
            return '';
        }
        acc += input[i];
    }
    return acc;
}
/**
 * @typedef {Object} GetIPV6Result
 * @property {boolean} error - Indicates if there was an error parsing the IPv6 address.
 * @property {string} address - The parsed IPv6 address.
 * @property {string} [zone] - The zone identifier, if present.
 */ /**
 * @param {string} value
 * @returns {boolean}
 */ const nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
/**
 * @param {Array<string>} buffer
 * @returns {boolean}
 */ function consumeIsZone(buffer) {
    buffer.length = 0;
    return true;
}
/**
 * @param {Array<string>} buffer
 * @param {Array<string>} address
 * @param {GetIPV6Result} output
 * @returns {boolean}
 */ function consumeHextets(buffer, address, output) {
    if (buffer.length) {
        const hex = stringArrayToHexStripped(buffer);
        if (hex !== '') {
            address.push(hex);
        } else {
            output.error = true;
            return false;
        }
        buffer.length = 0;
    }
    return true;
}
/**
 * @param {string} input
 * @returns {GetIPV6Result}
 */ function getIPV6(input) {
    let tokenCount = 0;
    const output = {
        error: false,
        address: '',
        zone: ''
    };
    /** @type {Array<string>} */ const address = [];
    /** @type {Array<string>} */ const buffer = [];
    let endipv6Encountered = false;
    let endIpv6 = false;
    let consume = consumeHextets;
    for(let i = 0; i < input.length; i++){
        const cursor = input[i];
        if (cursor === '[' || cursor === ']') {
            continue;
        }
        if (cursor === ':') {
            if (endipv6Encountered === true) {
                endIpv6 = true;
            }
            if (!consume(buffer, address, output)) {
                break;
            }
            if (++tokenCount > 7) {
                // not valid
                output.error = true;
                break;
            }
            if (i > 0 && input[i - 1] === ':') {
                endipv6Encountered = true;
            }
            address.push(':');
            continue;
        } else if (cursor === '%') {
            if (!consume(buffer, address, output)) {
                break;
            }
            // switch to zone detection
            consume = consumeIsZone;
        } else {
            buffer.push(cursor);
            continue;
        }
    }
    if (buffer.length) {
        if (consume === consumeIsZone) {
            output.zone = buffer.join('');
        } else if (endIpv6) {
            address.push(buffer.join(''));
        } else {
            address.push(stringArrayToHexStripped(buffer));
        }
    }
    output.address = address.join('');
    return output;
}
/**
 * @typedef {Object} NormalizeIPv6Result
 * @property {string} host - The normalized host.
 * @property {string} [escapedHost] - The escaped host.
 * @property {boolean} isIPV6 - Indicates if the host is an IPv6 address.
 */ /**
 * @param {string} host
 * @returns {NormalizeIPv6Result}
 */ function normalizeIPv6(host) {
    if (findToken(host, ':') < 2) {
        return {
            host,
            isIPV6: false
        };
    }
    const ipv6 = getIPV6(host);
    if (!ipv6.error) {
        let newHost = ipv6.address;
        let escapedHost = ipv6.address;
        if (ipv6.zone) {
            newHost += '%' + ipv6.zone;
            escapedHost += '%25' + ipv6.zone;
        }
        return {
            host: newHost,
            isIPV6: true,
            escapedHost
        };
    } else {
        return {
            host,
            isIPV6: false
        };
    }
}
/**
 * @param {string} str
 * @param {string} token
 * @returns {number}
 */ function findToken(str, token) {
    let ind = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === token) ind++;
    }
    return ind;
}
/**
 * @param {string} path
 * @returns {string}
 *
 * @see https://datatracker.ietf.org/doc/html/rfc3986#section-5.2.4
 */ function removeDotSegments(path) {
    let input = path;
    const output = [];
    let nextSlash = -1;
    let len = 0;
    // eslint-disable-next-line no-cond-assign
    while(len = input.length){
        if (len === 1) {
            if (input === '.') {
                break;
            } else if (input === '/') {
                output.push('/');
                break;
            } else {
                output.push(input);
                break;
            }
        } else if (len === 2) {
            if (input[0] === '.') {
                if (input[1] === '.') {
                    break;
                } else if (input[1] === '/') {
                    input = input.slice(2);
                    continue;
                }
            } else if (input[0] === '/') {
                if (input[1] === '.' || input[1] === '/') {
                    output.push('/');
                    break;
                }
            }
        } else if (len === 3) {
            if (input === '/..') {
                if (output.length !== 0) {
                    output.pop();
                }
                output.push('/');
                break;
            }
        }
        if (input[0] === '.') {
            if (input[1] === '.') {
                if (input[2] === '/') {
                    input = input.slice(3);
                    continue;
                }
            } else if (input[1] === '/') {
                input = input.slice(2);
                continue;
            }
        } else if (input[0] === '/') {
            if (input[1] === '.') {
                if (input[2] === '/') {
                    input = input.slice(2);
                    continue;
                } else if (input[2] === '.') {
                    if (input[3] === '/') {
                        input = input.slice(3);
                        if (output.length !== 0) {
                            output.pop();
                        }
                        continue;
                    }
                }
            }
        }
        // Rule 2E: Move normal path segment to output
        if ((nextSlash = input.indexOf('/', 1)) === -1) {
            output.push(input);
            break;
        } else {
            output.push(input.slice(0, nextSlash));
            input = input.slice(nextSlash);
        }
    }
    return output.join('');
}
/**
 * @param {import('../types/index').URIComponent} component
 * @param {boolean} esc
 * @returns {import('../types/index').URIComponent}
 */ function normalizeComponentEncoding(component, esc) {
    const func = esc !== true ? escape : unescape;
    if (component.scheme !== undefined) {
        component.scheme = func(component.scheme);
    }
    if (component.userinfo !== undefined) {
        component.userinfo = func(component.userinfo);
    }
    if (component.host !== undefined) {
        component.host = func(component.host);
    }
    if (component.path !== undefined) {
        component.path = func(component.path);
    }
    if (component.query !== undefined) {
        component.query = func(component.query);
    }
    if (component.fragment !== undefined) {
        component.fragment = func(component.fragment);
    }
    return component;
}
/**
 * @param {import('../types/index').URIComponent} component
 * @returns {string|undefined}
 */ function recomposeAuthority(component) {
    const uriTokens = [];
    if (component.userinfo !== undefined) {
        uriTokens.push(component.userinfo);
        uriTokens.push('@');
    }
    if (component.host !== undefined) {
        let host = unescape(component.host);
        if (!isIPv4(host)) {
            const ipV6res = normalizeIPv6(host);
            if (ipV6res.isIPV6 === true) {
                host = `[${ipV6res.escapedHost}]`;
            } else {
                host = component.host;
            }
        }
        uriTokens.push(host);
    }
    if (typeof component.port === 'number' || typeof component.port === 'string') {
        uriTokens.push(':');
        uriTokens.push(String(component.port));
    }
    return uriTokens.length ? uriTokens.join('') : undefined;
}
;
module.exports = {
    nonSimpleDomain,
    recomposeAuthority,
    normalizeComponentEncoding,
    removeDotSegments,
    isIPv4,
    isUUID,
    normalizeIPv6,
    stringArrayToHexStripped
};
}),
"[project]/node_modules/fast-uri/lib/schemes.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isUUID } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)");
const URN_REG = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
const supportedSchemeNames = [
    'http',
    'https',
    'ws',
    'wss',
    'urn',
    'urn:uuid'
];
/** @typedef {supportedSchemeNames[number]} SchemeName */ /**
 * @param {string} name
 * @returns {name is SchemeName}
 */ function isValidSchemeName(name) {
    return supportedSchemeNames.indexOf(name) !== -1;
}
/**
 * @callback SchemeFn
 * @param {import('../types/index').URIComponent} component
 * @param {import('../types/index').Options} options
 * @returns {import('../types/index').URIComponent}
 */ /**
 * @typedef {Object} SchemeHandler
 * @property {SchemeName} scheme - The scheme name.
 * @property {boolean} [domainHost] - Indicates if the scheme supports domain hosts.
 * @property {SchemeFn} parse - Function to parse the URI component for this scheme.
 * @property {SchemeFn} serialize - Function to serialize the URI component for this scheme.
 * @property {boolean} [skipNormalize] - Indicates if normalization should be skipped for this scheme.
 * @property {boolean} [absolutePath] - Indicates if the scheme uses absolute paths.
 * @property {boolean} [unicodeSupport] - Indicates if the scheme supports Unicode.
 */ /**
 * @param {import('../types/index').URIComponent} wsComponent
 * @returns {boolean}
 */ function wsIsSecure(wsComponent) {
    if (wsComponent.secure === true) {
        return true;
    } else if (wsComponent.secure === false) {
        return false;
    } else if (wsComponent.scheme) {
        return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === 'w' || wsComponent.scheme[0] === 'W') && (wsComponent.scheme[1] === 's' || wsComponent.scheme[1] === 'S') && (wsComponent.scheme[2] === 's' || wsComponent.scheme[2] === 'S');
    } else {
        return false;
    }
}
/** @type {SchemeFn} */ function httpParse(component) {
    if (!component.host) {
        component.error = component.error || 'HTTP URIs must have a host.';
    }
    return component;
}
/** @type {SchemeFn} */ function httpSerialize(component) {
    const secure = String(component.scheme).toLowerCase() === 'https';
    // normalize the default port
    if (component.port === (secure ? 443 : 80) || component.port === '') {
        component.port = undefined;
    }
    // normalize the empty path
    if (!component.path) {
        component.path = '/';
    }
    // NOTE: We do not parse query strings for HTTP URIs
    // as WWW Form Url Encoded query strings are part of the HTML4+ spec,
    // and not the HTTP spec.
    return component;
}
/** @type {SchemeFn} */ function wsParse(wsComponent) {
    // indicate if the secure flag is set
    wsComponent.secure = wsIsSecure(wsComponent);
    // construct resouce name
    wsComponent.resourceName = (wsComponent.path || '/') + (wsComponent.query ? '?' + wsComponent.query : '');
    wsComponent.path = undefined;
    wsComponent.query = undefined;
    return wsComponent;
}
/** @type {SchemeFn} */ function wsSerialize(wsComponent) {
    // normalize the default port
    if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === '') {
        wsComponent.port = undefined;
    }
    // ensure scheme matches secure flag
    if (typeof wsComponent.secure === 'boolean') {
        wsComponent.scheme = wsComponent.secure ? 'wss' : 'ws';
        wsComponent.secure = undefined;
    }
    // reconstruct path from resource name
    if (wsComponent.resourceName) {
        const [path, query] = wsComponent.resourceName.split('?');
        wsComponent.path = path && path !== '/' ? path : undefined;
        wsComponent.query = query;
        wsComponent.resourceName = undefined;
    }
    // forbid fragment component
    wsComponent.fragment = undefined;
    return wsComponent;
}
/** @type {SchemeFn} */ function urnParse(urnComponent, options) {
    if (!urnComponent.path) {
        urnComponent.error = 'URN can not be parsed';
        return urnComponent;
    }
    const matches = urnComponent.path.match(URN_REG);
    if (matches) {
        const scheme = options.scheme || urnComponent.scheme || 'urn';
        urnComponent.nid = matches[1].toLowerCase();
        urnComponent.nss = matches[2];
        const urnScheme = `${scheme}:${options.nid || urnComponent.nid}`;
        const schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = undefined;
        if (schemeHandler) {
            urnComponent = schemeHandler.parse(urnComponent, options);
        }
    } else {
        urnComponent.error = urnComponent.error || 'URN can not be parsed.';
    }
    return urnComponent;
}
/** @type {SchemeFn} */ function urnSerialize(urnComponent, options) {
    if (urnComponent.nid === undefined) {
        throw new Error('URN without nid cannot be serialized');
    }
    const scheme = options.scheme || urnComponent.scheme || 'urn';
    const nid = urnComponent.nid.toLowerCase();
    const urnScheme = `${scheme}:${options.nid || nid}`;
    const schemeHandler = getSchemeHandler(urnScheme);
    if (schemeHandler) {
        urnComponent = schemeHandler.serialize(urnComponent, options);
    }
    const uriComponent = urnComponent;
    const nss = urnComponent.nss;
    uriComponent.path = `${nid || options.nid}:${nss}`;
    options.skipEscape = true;
    return uriComponent;
}
/** @type {SchemeFn} */ function urnuuidParse(urnComponent, options) {
    const uuidComponent = urnComponent;
    uuidComponent.uuid = uuidComponent.nss;
    uuidComponent.nss = undefined;
    if (!options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
        uuidComponent.error = uuidComponent.error || 'UUID is not valid.';
    }
    return uuidComponent;
}
/** @type {SchemeFn} */ function urnuuidSerialize(uuidComponent) {
    const urnComponent = uuidComponent;
    // normalize UUID
    urnComponent.nss = (uuidComponent.uuid || '').toLowerCase();
    return urnComponent;
}
const http = {
    scheme: 'http',
    domainHost: true,
    parse: httpParse,
    serialize: httpSerialize
};
const https = {
    scheme: 'https',
    domainHost: http.domainHost,
    parse: httpParse,
    serialize: httpSerialize
};
const ws = {
    scheme: 'ws',
    domainHost: true,
    parse: wsParse,
    serialize: wsSerialize
};
const wss = {
    scheme: 'wss',
    domainHost: ws.domainHost,
    parse: ws.parse,
    serialize: ws.serialize
};
const urn = {
    scheme: 'urn',
    parse: urnParse,
    serialize: urnSerialize,
    skipNormalize: true
};
const urnuuid = {
    scheme: 'urn:uuid',
    parse: urnuuidParse,
    serialize: urnuuidSerialize,
    skipNormalize: true
};
const SCHEMES = {
    http,
    https,
    ws,
    wss,
    urn,
    'urn:uuid': urnuuid
};
Object.setPrototypeOf(SCHEMES, null);
/**
 * @param {string|undefined} scheme
 * @returns {SchemeHandler|undefined}
 */ function getSchemeHandler(scheme) {
    return scheme && (SCHEMES[scheme] || SCHEMES[scheme.toLowerCase()]) || undefined;
}
module.exports = {
    wsIsSecure,
    SCHEMES,
    isValidSchemeName,
    getSchemeHandler
};
}),
"[project]/node_modules/fast-uri/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizeComponentEncoding, isIPv4, nonSimpleDomain } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)");
const { SCHEMES, getSchemeHandler } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/schemes.js [app-route] (ecmascript)");
/**
 * @template {import('./types/index').URIComponent|string} T
 * @param {T} uri
 * @param {import('./types/index').Options} [options]
 * @returns {T}
 */ function normalize(uri, options) {
    if (typeof uri === 'string') {
        uri = serialize(parse(uri, options), options);
    } else if (typeof uri === 'object') {
        uri = parse(serialize(uri, options), options);
    }
    return uri;
}
/**
 * @param {string} baseURI
 * @param {string} relativeURI
 * @param {import('./types/index').Options} [options]
 * @returns {string}
 */ function resolve(baseURI, relativeURI, options) {
    const schemelessOptions = options ? Object.assign({
        scheme: 'null'
    }, options) : {
        scheme: 'null'
    };
    const resolved = resolveComponent(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true);
    schemelessOptions.skipEscape = true;
    return serialize(resolved, schemelessOptions);
}
/**
 * @param {import ('./types/index').URIComponent} base
 * @param {import ('./types/index').URIComponent} relative
 * @param {import('./types/index').Options} [options]
 * @param {boolean} [skipNormalization=false]
 * @returns {import ('./types/index').URIComponent}
 */ function resolveComponent(base, relative, options, skipNormalization) {
    /** @type {import('./types/index').URIComponent} */ const target = {};
    if (!skipNormalization) {
        base = parse(serialize(base, options), options); // normalize base component
        relative = parse(serialize(relative, options), options); // normalize relative component
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
        target.scheme = relative.scheme;
        // target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || '');
        target.query = relative.query;
    } else {
        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            // target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || '');
            target.query = relative.query;
        } else {
            if (!relative.path) {
                target.path = base.path;
                if (relative.query !== undefined) {
                    target.query = relative.query;
                } else {
                    target.query = base.query;
                }
            } else {
                if (relative.path[0] === '/') {
                    target.path = removeDotSegments(relative.path);
                } else {
                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                        target.path = '/' + relative.path;
                    } else if (!base.path) {
                        target.path = relative.path;
                    } else {
                        target.path = base.path.slice(0, base.path.lastIndexOf('/') + 1) + relative.path;
                    }
                    target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
            }
            // target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
        }
        target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
}
/**
 * @param {import ('./types/index').URIComponent|string} uriA
 * @param {import ('./types/index').URIComponent|string} uriB
 * @param {import ('./types/index').Options} options
 * @returns {boolean}
 */ function equal(uriA, uriB, options) {
    if (typeof uriA === 'string') {
        uriA = unescape(uriA);
        uriA = serialize(normalizeComponentEncoding(parse(uriA, options), true), {
            ...options,
            skipEscape: true
        });
    } else if (typeof uriA === 'object') {
        uriA = serialize(normalizeComponentEncoding(uriA, true), {
            ...options,
            skipEscape: true
        });
    }
    if (typeof uriB === 'string') {
        uriB = unescape(uriB);
        uriB = serialize(normalizeComponentEncoding(parse(uriB, options), true), {
            ...options,
            skipEscape: true
        });
    } else if (typeof uriB === 'object') {
        uriB = serialize(normalizeComponentEncoding(uriB, true), {
            ...options,
            skipEscape: true
        });
    }
    return uriA.toLowerCase() === uriB.toLowerCase();
}
/**
 * @param {Readonly<import('./types/index').URIComponent>} cmpts
 * @param {import('./types/index').Options} [opts]
 * @returns {string}
 */ function serialize(cmpts, opts) {
    const component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ''
    };
    const options = Object.assign({}, opts);
    const uriTokens = [];
    // find scheme handler
    const schemeHandler = getSchemeHandler(options.scheme || component.scheme);
    // perform scheme specific serialization
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(component, options);
    if (component.path !== undefined) {
        if (!options.skipEscape) {
            component.path = escape(component.path);
            if (component.scheme !== undefined) {
                component.path = component.path.split('%3A').join(':');
            }
        } else {
            component.path = unescape(component.path);
        }
    }
    if (options.reference !== 'suffix' && component.scheme) {
        uriTokens.push(component.scheme, ':');
    }
    const authority = recomposeAuthority(component);
    if (authority !== undefined) {
        if (options.reference !== 'suffix') {
            uriTokens.push('//');
        }
        uriTokens.push(authority);
        if (component.path && component.path[0] !== '/') {
            uriTokens.push('/');
        }
    }
    if (component.path !== undefined) {
        let s = component.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
        }
        if (authority === undefined && s[0] === '/' && s[1] === '/') {
            // don't allow the path to start with "//"
            s = '/%2F' + s.slice(2);
        }
        uriTokens.push(s);
    }
    if (component.query !== undefined) {
        uriTokens.push('?', component.query);
    }
    if (component.fragment !== undefined) {
        uriTokens.push('#', component.fragment);
    }
    return uriTokens.join('');
}
const URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
/**
 * @param {string} uri
 * @param {import('./types/index').Options} [opts]
 * @returns
 */ function parse(uri, opts) {
    const options = Object.assign({}, opts);
    /** @type {import('./types/index').URIComponent} */ const parsed = {
        scheme: undefined,
        userinfo: undefined,
        host: '',
        port: undefined,
        path: '',
        query: undefined,
        fragment: undefined
    };
    let isIP = false;
    if (options.reference === 'suffix') {
        if (options.scheme) {
            uri = options.scheme + ':' + uri;
        } else {
            uri = '//' + uri;
        }
    }
    const matches = uri.match(URI_PARSE);
    if (matches) {
        // store each component
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || '';
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        // fix port number
        if (isNaN(parsed.port)) {
            parsed.port = matches[5];
        }
        if (parsed.host) {
            const ipv4result = isIPv4(parsed.host);
            if (ipv4result === false) {
                const ipv6result = normalizeIPv6(parsed.host);
                parsed.host = ipv6result.host.toLowerCase();
                isIP = ipv6result.isIPV6;
            } else {
                isIP = true;
            }
        }
        if (parsed.scheme === undefined && parsed.userinfo === undefined && parsed.host === undefined && parsed.port === undefined && parsed.query === undefined && !parsed.path) {
            parsed.reference = 'same-document';
        } else if (parsed.scheme === undefined) {
            parsed.reference = 'relative';
        } else if (parsed.fragment === undefined) {
            parsed.reference = 'absolute';
        } else {
            parsed.reference = 'uri';
        }
        // check for reference errors
        if (options.reference && options.reference !== 'suffix' && options.reference !== parsed.reference) {
            parsed.error = parsed.error || 'URI is not a ' + options.reference + ' reference.';
        }
        // find scheme handler
        const schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
        // check if scheme can't handle IRIs
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            // if host component is a domain name
            if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
                // convert Unicode IDN -> ASCII IDN
                try {
                    parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
                } catch (e) {
                    parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
                }
            }
        // convert IRI -> URI
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
            if (uri.indexOf('%') !== -1) {
                if (parsed.scheme !== undefined) {
                    parsed.scheme = unescape(parsed.scheme);
                }
                if (parsed.host !== undefined) {
                    parsed.host = unescape(parsed.host);
                }
            }
            if (parsed.path) {
                parsed.path = escape(unescape(parsed.path));
            }
            if (parsed.fragment) {
                parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
            }
        }
        // perform scheme specific parsing
        if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(parsed, options);
        }
    } else {
        parsed.error = parsed.error || 'URI can not be parsed.';
    }
    return parsed;
}
const fastUri = {
    SCHEMES,
    normalize,
    resolve,
    resolveComponent,
    equal,
    serialize,
    parse
};
module.exports = fastUri;
module.exports.default = fastUri;
module.exports.fastUri = fastUri;
}),
"[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndOfStreamError",
    ()=>EndOfStreamError,
    "defaultMessages",
    ()=>defaultMessages
]);
const defaultMessages = 'End-Of-Stream';
class EndOfStreamError extends Error {
    constructor(){
        super(defaultMessages);
    }
}
}),
"[project]/node_modules/peek-readable/lib/Deferred.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Deferred",
    ()=>Deferred
]);
class Deferred {
    constructor(){
        this.resolve = ()=>null;
        this.reject = ()=>null;
        this.promise = new Promise((resolve, reject)=>{
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
}),
"[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractStreamReader",
    ()=>AbstractStreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
class AbstractStreamReader {
    constructor(){
        /**
         * Maximum request length on read-stream operation
         */ this.maxStreamReadSize = 1 * 1024 * 1024;
        this.endOfStream = false;
        /**
         * Store peeked data
         * @type {Array}
         */ this.peekQueue = [];
    }
    async peek(uint8Array, offset, length) {
        const bytesRead = await this.read(uint8Array, offset, length);
        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer
        return bytesRead;
    }
    async read(buffer, offset, length) {
        if (length === 0) {
            return 0;
        }
        let bytesRead = this.readFromPeekBuffer(buffer, offset, length);
        bytesRead += await this.readRemainderFromStream(buffer, offset + bytesRead, length - bytesRead);
        if (bytesRead === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return bytesRead;
    }
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes read
     */ readFromPeekBuffer(buffer, offset, length) {
        let remaining = length;
        let bytesRead = 0;
        // consume peeked data first
        while(this.peekQueue.length > 0 && remaining > 0){
            const peekData = this.peekQueue.pop(); // Front of queue
            if (!peekData) throw new Error('peekData should be defined');
            const lenCopy = Math.min(peekData.length, remaining);
            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);
            bytesRead += lenCopy;
            remaining -= lenCopy;
            if (lenCopy < peekData.length) {
                // remainder back to queue
                this.peekQueue.push(peekData.subarray(lenCopy));
            }
        }
        return bytesRead;
    }
    async readRemainderFromStream(buffer, offset, initialRemaining) {
        let remaining = initialRemaining;
        let bytesRead = 0;
        // Continue reading from stream if required
        while(remaining > 0 && !this.endOfStream){
            const reqLen = Math.min(remaining, this.maxStreamReadSize);
            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);
            if (chunkLen === 0) break;
            bytesRead += chunkLen;
            remaining -= chunkLen;
        }
        return bytesRead;
    }
}
}),
"[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamReader",
    ()=>StreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$Deferred$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/Deferred.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)");
;
;
;
;
class StreamReader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractStreamReader"] {
    constructor(s){
        super();
        this.s = s;
        /**
         * Deferred used for postponed read request (as not data is yet available to read)
         */ this.deferred = null;
        if (!s.read || !s.once) {
            throw new Error('Expected an instance of stream.Readable');
        }
        this.s.once('end', ()=>this.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]()));
        this.s.once('error', (err)=>this.reject(err));
        this.s.once('close', ()=>this.reject(new Error('Stream closed')));
    }
    /**
     * Read chunk from stream
     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset Offset target
     * @param length Number of bytes to read
     * @returns Number of bytes read
     */ async readFromStream(buffer, offset, length) {
        if (this.endOfStream) {
            return 0;
        }
        const readBuffer = this.s.read(length);
        if (readBuffer) {
            buffer.set(readBuffer, offset);
            return readBuffer.length;
        }
        const request = {
            buffer,
            offset,
            length,
            deferred: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$Deferred$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Deferred"]()
        };
        this.deferred = request.deferred;
        this.s.once('readable', ()=>{
            this.readDeferred(request);
        });
        return request.deferred.promise;
    }
    /**
     * Process deferred read request
     * @param request Deferred read request
     */ readDeferred(request) {
        const readBuffer = this.s.read(request.length);
        if (readBuffer) {
            request.buffer.set(readBuffer, request.offset);
            request.deferred.resolve(readBuffer.length);
            this.deferred = null;
        } else {
            this.s.once('readable', ()=>{
                this.readDeferred(request);
            });
        }
    }
    reject(err) {
        this.endOfStream = true;
        if (this.deferred) {
            this.deferred.reject(err);
            this.deferred = null;
        }
    }
    async abort() {
        this.reject(new Error('abort'));
    }
    async close() {
        return this.abort();
    }
}
}),
"[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebStreamReader",
    ()=>WebStreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)");
;
;
;
class WebStreamReader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractStreamReader"] {
    constructor(stream){
        super();
        this.reader = stream.getReader({
            mode: 'byob'
        });
    }
    async readFromStream(buffer, offset, length) {
        if (this.endOfStream) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        const result = await this.reader.read(new Uint8Array(length));
        if (result.done) {
            this.endOfStream = result.done;
        }
        if (result.value) {
            buffer.set(result.value, offset);
            return result.value.byteLength;
        }
        return 0;
    }
    abort() {
        return this.reader.cancel(); // Signals a loss of interest in the stream by a consumer
    }
    async close() {
        await this.abort();
        this.reader.releaseLock();
    }
}
}),
"[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractTokenizer",
    ()=>AbstractTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
class AbstractTokenizer {
    /**
     * Constructor
     * @param options Tokenizer options
     * @protected
     */ constructor(options){
        /**
         * Tokenizer-stream position
         */ this.position = 0;
        this.numBuffer = new Uint8Array(8);
        this.fileInfo = options?.fileInfo ?? {};
        this.onClose = options?.onClose;
    }
    /**
     * Read a token from the tokenizer-stream
     * @param token - The token to read
     * @param position - If provided, the desired position in the tokenizer-stream
     * @returns Promise with token data
     */ async readToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.readBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(uint8Array, 0);
    }
    /**
     * Peek a token from the tokenizer-stream.
     * @param token - Token to peek from the tokenizer-stream.
     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
     * @returns Promise with token data
     */ async peekToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.peekBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(uint8Array, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Ignore number of bytes, advances the pointer in under tokenizer-stream.
     * @param length - Number of bytes to ignore
     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
     */ async ignore(length) {
        if (this.fileInfo.size !== undefined) {
            const bytesLeft = this.fileInfo.size - this.position;
            if (length > bytesLeft) {
                this.position += bytesLeft;
                return bytesLeft;
            }
        }
        this.position += length;
        return length;
    }
    async close() {
        await this.onClose?.();
    }
    normalizeOptions(uint8Array, options) {
        if (options && options.position !== undefined && options.position < this.position) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (options) {
            return {
                mayBeLess: options.mayBeLess === true,
                offset: options.offset ? options.offset : 0,
                length: options.length ? options.length : uint8Array.length - (options.offset ? options.offset : 0),
                position: options.position ? options.position : this.position
            };
        }
        return {
            mayBeLess: false,
            offset: 0,
            length: uint8Array.length,
            position: this.position
        };
    }
}
}),
"[project]/node_modules/strtok3/lib/ReadStreamTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadStreamTokenizer",
    ()=>ReadStreamTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
;
const maxBufferSize = 256000;
class ReadStreamTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    /**
     * Constructor
     * @param streamReader stream-reader to read from
     * @param options Tokenizer options
     */ constructor(streamReader, options){
        super(options);
        this.streamReader = streamReader;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
            await this.ignore(skipBytes);
            return this.readBuffer(uint8Array, options);
        }
        if (skipBytes < 0) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (normOptions.length === 0) {
            return 0;
        }
        const bytesRead = await this.streamReader.read(uint8Array, normOptions.offset, normOptions.length);
        this.position += bytesRead;
        if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        let bytesRead = 0;
        if (normOptions.position) {
            const skipBytes = normOptions.position - this.position;
            if (skipBytes > 0) {
                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
                bytesRead = await this.peekBuffer(skipBuffer, {
                    mayBeLess: normOptions.mayBeLess
                });
                uint8Array.set(skipBuffer.subarray(skipBytes), normOptions.offset);
                return bytesRead - skipBytes;
            }
            if (skipBytes < 0) {
                throw new Error('Cannot peek from a negative offset in a stream');
            }
        }
        if (normOptions.length > 0) {
            try {
                bytesRead = await this.streamReader.peek(uint8Array, normOptions.offset, normOptions.length);
            } catch (err) {
                if (options?.mayBeLess && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]) {
                    return 0;
                }
                throw err;
            }
            if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
            }
        }
        return bytesRead;
    }
    async ignore(length) {
        // debug(`ignore ${this.position}...${this.position + length - 1}`);
        const bufSize = Math.min(maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while(totBytesRead < length){
            const remaining = length - totBytesRead;
            const bytesRead = await this.readBuffer(buf, {
                length: Math.min(bufSize, remaining)
            });
            if (bytesRead < 0) {
                return bytesRead;
            }
            totBytesRead += bytesRead;
        }
        return totBytesRead;
    }
}
}),
"[project]/node_modules/strtok3/lib/BufferTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferTokenizer",
    ()=>BufferTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
;
;
class BufferTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options Tokenizer options
     */ constructor(uint8Array, options){
        super(options);
        this.uint8Array = uint8Array;
        this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : uint8Array.length;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async readBuffer(uint8Array, options) {
        if (options?.position) {
            if (options.position < this.position) {
                throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
            }
            this.position = options.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options);
        this.position += bytesRead;
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read), normOptions.offset);
        return bytes2read;
    }
    close() {
        return super.close();
    }
}
}),
"[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromBuffer",
    ()=>fromBuffer,
    "fromStream",
    ()=>fromStream,
    "fromWebStream",
    ()=>fromWebStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/ReadStreamTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$BufferTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/BufferTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
;
;
;
;
;
function fromStream(stream, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadStreamTokenizer"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StreamReader"](stream), options);
}
function fromWebStream(webStream, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadStreamTokenizer"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebStreamReader"](webStream), options);
}
function fromBuffer(uint8Array, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$BufferTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferTokenizer"](uint8Array, options);
}
}),
"[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTokenizer",
    ()=>FileTokenizer,
    "fromFile",
    ()=>fromFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
class FileTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    constructor(fileHandle, options){
        super(options);
        this.fileHandle = fileHandle;
    }
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        this.position = normOptions.position;
        if (normOptions.length === 0) return 0;
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        this.position += res.bytesRead;
        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return res.bytesRead;
    }
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        if (!normOptions.mayBeLess && res.bytesRead < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return res.bytesRead;
    }
    async close() {
        await this.fileHandle.close();
        return super.close();
    }
}
async function fromFile(sourceFilePath) {
    const fileHandle = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["open"])(sourceFilePath, 'r');
    const stat = await fileHandle.stat();
    return new FileTokenizer(fileHandle, {
        fileInfo: {
            path: sourceFilePath,
            size: stat.size
        }
    });
}
}),
"[project]/node_modules/strtok3/lib/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromStream",
    ()=>fromStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)");
;
;
;
;
async function fromStream(stream, options) {
    const augmentedOptions = options ?? {};
    augmentedOptions.fileInfo = augmentedOptions.fileInfo ?? {};
    if (stream.path) {
        const stat = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(stream.path);
        augmentedOptions.fileInfo.path = stream.path;
        augmentedOptions.fileInfo.size = stat.size;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"])(stream, augmentedOptions);
}
}),
"[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractTokenizer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"],
    "EndOfStreamError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"],
    "fromBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromBuffer"],
    "fromStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"],
    "fromWebStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromWebStream"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
}),
"[project]/node_modules/ieee754/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8){}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8){}
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8){}
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8){}
    buffer[offset + i - d] |= s * 128;
};
}),
"[project]/node_modules/@borewit/text-codec/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textDecode",
    ()=>textDecode,
    "textEncode",
    ()=>textEncode
]);
const WINDOWS_1252_EXTRA = {
    0x80: "€",
    0x82: "‚",
    0x83: "ƒ",
    0x84: "„",
    0x85: "…",
    0x86: "†",
    0x87: "‡",
    0x88: "ˆ",
    0x89: "‰",
    0x8a: "Š",
    0x8b: "‹",
    0x8c: "Œ",
    0x8e: "Ž",
    0x91: "‘",
    0x92: "’",
    0x93: "“",
    0x94: "”",
    0x95: "•",
    0x96: "–",
    0x97: "—",
    0x98: "˜",
    0x99: "™",
    0x9a: "š",
    0x9b: "›",
    0x9c: "œ",
    0x9e: "ž",
    0x9f: "Ÿ"
};
const WINDOWS_1252_REVERSE = {};
for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA)){
    WINDOWS_1252_REVERSE[char] = Number.parseInt(code, 10);
}
// ---------- Cached decoders/encoders ----------
let _utf8Decoder;
let _utf8Encoder;
function utf8Decoder() {
    if (typeof globalThis.TextDecoder === "undefined") return undefined;
    return _utf8Decoder !== null && _utf8Decoder !== void 0 ? _utf8Decoder : _utf8Decoder = new globalThis.TextDecoder("utf-8");
}
function utf8Encoder() {
    if (typeof globalThis.TextEncoder === "undefined") return undefined;
    return _utf8Encoder !== null && _utf8Encoder !== void 0 ? _utf8Encoder : _utf8Encoder = new globalThis.TextEncoder();
}
// Safe chunk size well under your measured ~105k cliff.
// 32k keeps memory reasonable and is plenty fast.
const CHUNK = 32 * 1024;
function textDecode(bytes, encoding = "utf-8") {
    switch(encoding.toLowerCase()){
        case "utf-8":
        case "utf8":
            {
                const dec = utf8Decoder();
                return dec ? dec.decode(bytes) : decodeUTF8(bytes);
            }
        case "utf-16le":
            return decodeUTF16LE(bytes);
        case "us-ascii":
        case "ascii":
            return decodeASCII(bytes);
        case "latin1":
        case "iso-8859-1":
            return decodeLatin1(bytes);
        case "windows-1252":
            return decodeWindows1252(bytes);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
function textEncode(input = "", encoding = "utf-8") {
    switch(encoding.toLowerCase()){
        case "utf-8":
        case "utf8":
            {
                const enc = utf8Encoder();
                return enc ? enc.encode(input) : encodeUTF8(input);
            }
        case "utf-16le":
            return encodeUTF16LE(input);
        case "us-ascii":
        case "ascii":
            return encodeASCII(input);
        case "latin1":
        case "iso-8859-1":
            return encodeLatin1(input);
        case "windows-1252":
            return encodeWindows1252(input);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
// --- Internal helpers ---
function decodeUTF8(bytes) {
    const parts = [];
    let out = "";
    let i = 0;
    while(i < bytes.length){
        const b1 = bytes[i++];
        if (b1 < 0x80) {
            out += String.fromCharCode(b1);
        } else if (b1 < 0xe0) {
            const b2 = bytes[i++] & 0x3f;
            out += String.fromCharCode((b1 & 0x1f) << 6 | b2);
        } else if (b1 < 0xf0) {
            const b2 = bytes[i++] & 0x3f;
            const b3 = bytes[i++] & 0x3f;
            out += String.fromCharCode((b1 & 0x0f) << 12 | b2 << 6 | b3);
        } else {
            const b2 = bytes[i++] & 0x3f;
            const b3 = bytes[i++] & 0x3f;
            const b4 = bytes[i++] & 0x3f;
            let cp = (b1 & 0x07) << 18 | b2 << 12 | b3 << 6 | b4;
            cp -= 0x10000;
            out += String.fromCharCode(0xd800 + (cp >> 10 & 0x3ff), 0xdc00 + (cp & 0x3ff));
        }
        if (out.length >= CHUNK) {
            parts.push(out);
            out = "";
        }
    }
    if (out) parts.push(out);
    return parts.join("");
}
function decodeUTF16LE(bytes) {
    // Use chunked fromCharCode on 16-bit code units.
    // If odd length, ignore trailing byte (common behavior).
    const len = bytes.length & ~1;
    if (len === 0) return "";
    const parts = [];
    // Build a temporary code-unit array per chunk.
    const maxUnits = CHUNK; // CHUNK code units per chunk
    for(let i = 0; i < len;){
        const unitsThis = Math.min(maxUnits, len - i >> 1);
        const units = new Array(unitsThis);
        for(let j = 0; j < unitsThis; j++, i += 2){
            units[j] = bytes[i] | bytes[i + 1] << 8;
        }
        parts.push(String.fromCharCode.apply(null, units));
    }
    return parts.join("");
}
function decodeASCII(bytes) {
    // 7-bit ASCII: mask high bit. (Kept to match your original semantics.)
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++){
            codes[k] = bytes[j] & 0x7f;
        }
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join("");
}
function decodeLatin1(bytes) {
    // Latin-1 is 0x00..0xFF direct mapping; avoid spread.
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++){
            codes[k] = bytes[j];
        }
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join("");
}
function decodeWindows1252(bytes) {
    // Only 0x80..0x9F need mapping; others are direct 1-byte codes.
    const parts = [];
    let out = "";
    for(let i = 0; i < bytes.length; i++){
        const b = bytes[i];
        const extra = b >= 0x80 && b <= 0x9f ? WINDOWS_1252_EXTRA[b] : undefined;
        out += extra !== null && extra !== void 0 ? extra : String.fromCharCode(b);
        if (out.length >= CHUNK) {
            parts.push(out);
            out = "";
        }
    }
    if (out) parts.push(out);
    return parts.join("");
}
function encodeUTF8(str) {
    const out = [];
    for(let i = 0; i < str.length; i++){
        let cp = str.charCodeAt(i);
        // surrogate pair
        if (cp >= 0xd800 && cp <= 0xdbff && i + 1 < str.length) {
            const lo = str.charCodeAt(i + 1);
            if (lo >= 0xdc00 && lo <= 0xdfff) {
                cp = 0x10000 + (cp - 0xd800 << 10) + (lo - 0xdc00);
                i++;
            }
        }
        if (cp < 0x80) {
            out.push(cp);
        } else if (cp < 0x800) {
            out.push(0xc0 | cp >> 6, 0x80 | cp & 0x3f);
        } else if (cp < 0x10000) {
            out.push(0xe0 | cp >> 12, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        } else {
            out.push(0xf0 | cp >> 18, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        }
    }
    return new Uint8Array(out);
}
function encodeUTF16LE(str) {
    const out = new Uint8Array(str.length * 2);
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        const o = i * 2;
        out[o] = code & 0xff;
        out[o + 1] = code >>> 8;
    }
    return out;
}
function encodeASCII(str) {
    // 7-bit ASCII: mask high bit
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0x7f;
    return out;
}
function encodeLatin1(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0xff;
    return out;
}
function encodeWindows1252(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
        const ch = str[i];
        const code = ch.charCodeAt(0);
        if (code <= 0xff) {
            out[i] = code;
            continue;
        }
        const mapped = WINDOWS_1252_REVERSE[ch];
        out[i] = mapped !== undefined ? mapped : 0x3f; // '?'
    }
    return out;
}
}),
"[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnsiStringType",
    ()=>AnsiStringType,
    "Float16_BE",
    ()=>Float16_BE,
    "Float16_LE",
    ()=>Float16_LE,
    "Float32_BE",
    ()=>Float32_BE,
    "Float32_LE",
    ()=>Float32_LE,
    "Float64_BE",
    ()=>Float64_BE,
    "Float64_LE",
    ()=>Float64_LE,
    "Float80_BE",
    ()=>Float80_BE,
    "Float80_LE",
    ()=>Float80_LE,
    "INT16_BE",
    ()=>INT16_BE,
    "INT16_LE",
    ()=>INT16_LE,
    "INT24_BE",
    ()=>INT24_BE,
    "INT24_LE",
    ()=>INT24_LE,
    "INT32_BE",
    ()=>INT32_BE,
    "INT32_LE",
    ()=>INT32_LE,
    "INT64_BE",
    ()=>INT64_BE,
    "INT64_LE",
    ()=>INT64_LE,
    "INT8",
    ()=>INT8,
    "IgnoreType",
    ()=>IgnoreType,
    "StringType",
    ()=>StringType,
    "UINT16_BE",
    ()=>UINT16_BE,
    "UINT16_LE",
    ()=>UINT16_LE,
    "UINT24_BE",
    ()=>UINT24_BE,
    "UINT24_LE",
    ()=>UINT24_LE,
    "UINT32_BE",
    ()=>UINT32_BE,
    "UINT32_LE",
    ()=>UINT32_LE,
    "UINT64_BE",
    ()=>UINT64_BE,
    "UINT64_LE",
    ()=>UINT64_LE,
    "UINT8",
    ()=>UINT8,
    "Uint8ArrayType",
    ()=>Uint8ArrayType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ieee754/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$borewit$2f$text$2d$codec$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@borewit/text-codec/lib/index.js [app-route] (ecmascript)");
;
;
// Primitive types
function dv(array) {
    return new DataView(array.buffer, array.byteOffset);
}
const UINT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getUint8(offset);
    },
    put (array, offset, value) {
        dv(array).setUint8(offset, value);
        return offset + 1;
    }
};
const UINT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value, true);
        return offset + 2;
    }
};
const UINT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value);
        return offset + 2;
    }
};
const UINT24_LE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const UINT24_BE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const UINT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value, true);
        return offset + 4;
    }
};
const UINT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value);
        return offset + 4;
    }
};
const INT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getInt8(offset);
    },
    put (array, offset, value) {
        dv(array).setInt8(offset, value);
        return offset + 1;
    }
};
const INT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value);
        return offset + 2;
    }
};
const INT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value, true);
        return offset + 2;
    }
};
const INT24_LE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_LE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const INT24_BE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_BE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const INT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value);
        return offset + 4;
    }
};
const INT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value, true);
        return offset + 4;
    }
};
const UINT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value, true);
        return offset + 8;
    }
};
const INT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value, true);
        return offset + 8;
    }
};
const UINT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value);
        return offset + 8;
    }
};
const INT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value);
        return offset + 8;
    }
};
const Float16_BE = {
    len: 2,
    get (dataView, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](dataView, offset, false, 10, this.len);
    },
    put (dataView, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](dataView, value, offset, false, 10, this.len);
        return offset + this.len;
    }
};
const Float16_LE = {
    len: 2,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, true, 10, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, true, 10, this.len);
        return offset + this.len;
    }
};
const Float32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value);
        return offset + 4;
    }
};
const Float32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value, true);
        return offset + 4;
    }
};
const Float64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value);
        return offset + 8;
    }
};
const Float64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value, true);
        return offset + 8;
    }
};
const Float80_BE = {
    len: 10,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, false, 63, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, false, 63, this.len);
        return offset + this.len;
    }
};
const Float80_LE = {
    len: 10,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, true, 63, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, true, 63, this.len);
        return offset + this.len;
    }
};
class IgnoreType {
    /**
     * @param len number of bytes to ignore
     */ constructor(len){
        this.len = len;
    }
    // ToDo: don't read, but skip data
    get(_array, _off) {}
}
class Uint8ArrayType {
    constructor(len){
        this.len = len;
    }
    get(array, offset) {
        return array.subarray(offset, offset + this.len);
    }
}
class StringType {
    constructor(len, encoding){
        this.len = len;
        this.encoding = encoding;
    }
    get(data, offset = 0) {
        const bytes = data.subarray(offset, offset + this.len);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$borewit$2f$text$2d$codec$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["textDecode"])(bytes, this.encoding);
    }
}
class AnsiStringType extends StringType {
    constructor(len){
        super(len, 'windows-1252');
    }
}
}),
"[project]/node_modules/uint8array-extras/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areUint8ArraysEqual",
    ()=>areUint8ArraysEqual,
    "assertUint8Array",
    ()=>assertUint8Array,
    "assertUint8ArrayOrArrayBuffer",
    ()=>assertUint8ArrayOrArrayBuffer,
    "base64ToString",
    ()=>base64ToString,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "compareUint8Arrays",
    ()=>compareUint8Arrays,
    "concatUint8Arrays",
    ()=>concatUint8Arrays,
    "getUintBE",
    ()=>getUintBE,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "includes",
    ()=>includes,
    "indexOf",
    ()=>indexOf,
    "isUint8Array",
    ()=>isUint8Array,
    "stringToBase64",
    ()=>stringToBase64,
    "stringToUint8Array",
    ()=>stringToUint8Array,
    "toUint8Array",
    ()=>toUint8Array,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "uint8ArrayToString",
    ()=>uint8ArrayToString
]);
const objectToString = Object.prototype.toString;
const uint8ArrayStringified = '[object Uint8Array]';
const arrayBufferStringified = '[object ArrayBuffer]';
function isType(value, typeConstructor, typeStringified) {
    if (!value) {
        return false;
    }
    if (value.constructor === typeConstructor) {
        return true;
    }
    return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
    return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
    return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isUint8ArrayOrArrayBuffer(value) {
    return isUint8Array(value) || isArrayBuffer(value);
}
function assertUint8Array(value) {
    if (!isUint8Array(value)) {
        throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
    }
}
function assertUint8ArrayOrArrayBuffer(value) {
    if (!isUint8ArrayOrArrayBuffer(value)) {
        throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
    }
}
function toUint8Array(value) {
    if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
    }
    if (ArrayBuffer.isView(value)) {
        return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }
    throw new TypeError(`Unsupported value, got \`${typeof value}\`.`);
}
function concatUint8Arrays(arrays, totalLength) {
    if (arrays.length === 0) {
        return new Uint8Array(0);
    }
    totalLength ??= arrays.reduce((accumulator, currentValue)=>accumulator + currentValue.length, 0);
    const returnValue = new Uint8Array(totalLength);
    let offset = 0;
    for (const array of arrays){
        assertUint8Array(array);
        returnValue.set(array, offset);
        offset += array.length;
    }
    return returnValue;
}
function areUint8ArraysEqual(a, b) {
    assertUint8Array(a);
    assertUint8Array(b);
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < a.length; index++){
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}
function compareUint8Arrays(a, b) {
    assertUint8Array(a);
    assertUint8Array(b);
    const length = Math.min(a.length, b.length);
    for(let index = 0; index < length; index++){
        const diff = a[index] - b[index];
        if (diff !== 0) {
            return Math.sign(diff);
        }
    }
    // At this point, all the compared elements are equal.
    // The shorter array should come first if the arrays are of different lengths.
    return Math.sign(a.length - b.length);
}
const cachedDecoders = {
    utf8: new globalThis.TextDecoder('utf8')
};
function uint8ArrayToString(array, encoding = 'utf8') {
    assertUint8ArrayOrArrayBuffer(array);
    cachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);
    return cachedDecoders[encoding].decode(array);
}
function assertString(value) {
    if (typeof value !== 'string') {
        throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
    }
}
const cachedEncoder = new globalThis.TextEncoder();
function stringToUint8Array(string) {
    assertString(string);
    return cachedEncoder.encode(string);
}
function base64ToBase64Url(base64) {
    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function base64UrlToBase64(base64url) {
    const base64 = base64url.replaceAll('-', '+').replaceAll('_', '/');
    const padding = (4 - base64.length % 4) % 4;
    return base64 + '='.repeat(padding);
}
// Reference: https://phuoc.ng/collection/this-vs-that/concat-vs-push/
// Important: Keep this value divisible by 3 so intermediate chunks produce no Base64 padding.
const MAX_BLOCK_SIZE = 65_535;
function uint8ArrayToBase64(array, { urlSafe = false } = {}) {
    assertUint8Array(array);
    let base64 = '';
    for(let index = 0; index < array.length; index += MAX_BLOCK_SIZE){
        const chunk = array.subarray(index, index + MAX_BLOCK_SIZE);
        // Required as `btoa` and `atob` don't properly support Unicode: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
        base64 += globalThis.btoa(String.fromCodePoint.apply(undefined, chunk));
    }
    return urlSafe ? base64ToBase64Url(base64) : base64;
}
function base64ToUint8Array(base64String) {
    assertString(base64String);
    return Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), (x)=>x.codePointAt(0));
}
function stringToBase64(string, { urlSafe = false } = {}) {
    assertString(string);
    return uint8ArrayToBase64(stringToUint8Array(string), {
        urlSafe
    });
}
function base64ToString(base64String) {
    assertString(base64String);
    return uint8ArrayToString(base64ToUint8Array(base64String));
}
const byteToHexLookupTable = Array.from({
    length: 256
}, (_, index)=>index.toString(16).padStart(2, '0'));
function uint8ArrayToHex(array) {
    assertUint8Array(array);
    // Concatenating a string is faster than using an array.
    let hexString = '';
    // eslint-disable-next-line unicorn/no-for-loop -- Max performance is critical.
    for(let index = 0; index < array.length; index++){
        hexString += byteToHexLookupTable[array[index]];
    }
    return hexString;
}
const hexToDecimalLookupTable = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};
function hexToUint8Array(hexString) {
    assertString(hexString);
    if (hexString.length % 2 !== 0) {
        throw new Error('Invalid Hex string length.');
    }
    const resultLength = hexString.length / 2;
    const bytes = new Uint8Array(resultLength);
    for(let index = 0; index < resultLength; index++){
        const highNibble = hexToDecimalLookupTable[hexString[index * 2]];
        const lowNibble = hexToDecimalLookupTable[hexString[index * 2 + 1]];
        if (highNibble === undefined || lowNibble === undefined) {
            throw new Error(`Invalid Hex character encountered at position ${index * 2}`);
        }
        bytes[index] = highNibble << 4 | lowNibble; // eslint-disable-line no-bitwise
    }
    return bytes;
}
function getUintBE(view) {
    const { byteLength } = view;
    if (byteLength === 6) {
        return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
    }
    if (byteLength === 5) {
        return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
    }
    if (byteLength === 4) {
        return view.getUint32(0);
    }
    if (byteLength === 3) {
        return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
    }
    if (byteLength === 2) {
        return view.getUint16(0);
    }
    if (byteLength === 1) {
        return view.getUint8(0);
    }
}
function indexOf(array, value) {
    const arrayLength = array.length;
    const valueLength = value.length;
    if (valueLength === 0) {
        return -1;
    }
    if (valueLength > arrayLength) {
        return -1;
    }
    const validOffsetLength = arrayLength - valueLength;
    for(let index = 0; index <= validOffsetLength; index++){
        let isMatch = true;
        for(let index2 = 0; index2 < valueLength; index2++){
            if (array[index + index2] !== value[index2]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return index;
        }
    }
    return -1;
}
function includes(array, value) {
    return indexOf(array, value) !== -1;
}
}),
"[project]/node_modules/file-type/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringToBytes",
    ()=>stringToBytes,
    "tarHeaderChecksumMatches",
    ()=>tarHeaderChecksumMatches,
    "uint32SyncSafeToken",
    ()=>uint32SyncSafeToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)");
;
function stringToBytes(string) {
    return [
        ...string
    ].map((character)=>character.charCodeAt(0)); // eslint-disable-line unicorn/prefer-code-point
}
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
    const readSum = Number.parseInt(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](6).get(arrayBuffer, 148).replace(/\0.*$/, '').trim(), 8); // Read sum in header
    if (Number.isNaN(readSum)) {
        return false;
    }
    let sum = 8 * 0x20; // Initialize signed bit sum
    for(let index = offset; index < offset + 148; index++){
        sum += arrayBuffer[index];
    }
    for(let index = offset + 156; index < offset + 512; index++){
        sum += arrayBuffer[index];
    }
    return readSum === sum;
}
const uint32SyncSafeToken = {
    get: (buffer, offset)=>buffer[offset + 3] & 0x7F | buffer[offset + 2] << 7 | buffer[offset + 1] << 14 | buffer[offset] << 21,
    len: 4
};
}),
"[project]/node_modules/file-type/supported.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extensions",
    ()=>extensions,
    "mimeTypes",
    ()=>mimeTypes
]);
const extensions = [
    'jpg',
    'png',
    'apng',
    'gif',
    'webp',
    'flif',
    'xcf',
    'cr2',
    'cr3',
    'orf',
    'arw',
    'dng',
    'nef',
    'rw2',
    'raf',
    'tif',
    'bmp',
    'icns',
    'jxr',
    'psd',
    'indd',
    'zip',
    'tar',
    'rar',
    'gz',
    'bz2',
    '7z',
    'dmg',
    'mp4',
    'mid',
    'mkv',
    'webm',
    'mov',
    'avi',
    'mpg',
    'mp2',
    'mp3',
    'm4a',
    'oga',
    'ogg',
    'ogv',
    'opus',
    'flac',
    'wav',
    'spx',
    'amr',
    'pdf',
    'epub',
    'elf',
    'macho',
    'exe',
    'swf',
    'rtf',
    'wasm',
    'woff',
    'woff2',
    'eot',
    'ttf',
    'otf',
    'ico',
    'flv',
    'ps',
    'xz',
    'sqlite',
    'nes',
    'crx',
    'xpi',
    'cab',
    'deb',
    'ar',
    'rpm',
    'Z',
    'lz',
    'cfb',
    'mxf',
    'mts',
    'blend',
    'bpg',
    'docx',
    'pptx',
    'xlsx',
    '3gp',
    '3g2',
    'j2c',
    'jp2',
    'jpm',
    'jpx',
    'mj2',
    'aif',
    'qcp',
    'odt',
    'ods',
    'odp',
    'xml',
    'mobi',
    'heic',
    'cur',
    'ktx',
    'ape',
    'wv',
    'dcm',
    'ics',
    'glb',
    'pcap',
    'dsf',
    'lnk',
    'alias',
    'voc',
    'ac3',
    'm4v',
    'm4p',
    'm4b',
    'f4v',
    'f4p',
    'f4b',
    'f4a',
    'mie',
    'asf',
    'ogm',
    'ogx',
    'mpc',
    'arrow',
    'shp',
    'aac',
    'mp1',
    'it',
    's3m',
    'xm',
    'ai',
    'skp',
    'avif',
    'eps',
    'lzh',
    'pgp',
    'asar',
    'stl',
    'chm',
    '3mf',
    'zst',
    'jxl',
    'vcf',
    'jls',
    'pst',
    'dwg',
    'parquet',
    'class',
    'arj',
    'cpio',
    'ace',
    'avro',
    'icc',
    'fbx',
    'vsdx'
];
const mimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/flif',
    'image/x-xcf',
    'image/x-canon-cr2',
    'image/x-canon-cr3',
    'image/tiff',
    'image/bmp',
    'image/vnd.ms-photo',
    'image/vnd.adobe.photoshop',
    'application/x-indesign',
    'application/epub+zip',
    'application/x-xpinstall',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/zip',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/gzip',
    'application/x-bzip2',
    'application/x-7z-compressed',
    'application/x-apple-diskimage',
    'application/x-apache-arrow',
    'video/mp4',
    'audio/midi',
    'video/x-matroska',
    'video/webm',
    'video/quicktime',
    'video/vnd.avi',
    'audio/wav',
    'audio/qcelp',
    'audio/x-ms-asf',
    'video/x-ms-asf',
    'application/vnd.ms-asf',
    'video/mpeg',
    'video/3gpp',
    'audio/mpeg',
    'audio/mp4',
    'audio/opus',
    'video/ogg',
    'audio/ogg',
    'application/ogg',
    'audio/x-flac',
    'audio/ape',
    'audio/wavpack',
    'audio/amr',
    'application/pdf',
    'application/x-elf',
    'application/x-mach-binary',
    'application/x-msdownload',
    'application/x-shockwave-flash',
    'application/rtf',
    'application/wasm',
    'font/woff',
    'font/woff2',
    'application/vnd.ms-fontobject',
    'font/ttf',
    'font/otf',
    'image/x-icon',
    'video/x-flv',
    'application/postscript',
    'application/eps',
    'application/x-xz',
    'application/x-sqlite3',
    'application/x-nintendo-nes-rom',
    'application/x-google-chrome-extension',
    'application/vnd.ms-cab-compressed',
    'application/x-deb',
    'application/x-unix-archive',
    'application/x-rpm',
    'application/x-compress',
    'application/x-lzip',
    'application/x-cfb',
    'application/x-mie',
    'application/mxf',
    'video/mp2t',
    'application/x-blender',
    'image/bpg',
    'image/j2c',
    'image/jp2',
    'image/jpx',
    'image/jpm',
    'image/mj2',
    'audio/aiff',
    'application/xml',
    'application/x-mobipocket-ebook',
    'image/heif',
    'image/heif-sequence',
    'image/heic',
    'image/heic-sequence',
    'image/icns',
    'image/ktx',
    'application/dicom',
    'audio/x-musepack',
    'text/calendar',
    'text/vcard',
    'model/gltf-binary',
    'application/vnd.tcpdump.pcap',
    'audio/x-dsf',
    'application/x.ms.shortcut',
    'application/x.apple.alias',
    'audio/x-voc',
    'audio/vnd.dolby.dd-raw',
    'audio/x-m4a',
    'image/apng',
    'image/x-olympus-orf',
    'image/x-sony-arw',
    'image/x-adobe-dng',
    'image/x-nikon-nef',
    'image/x-panasonic-rw2',
    'image/x-fujifilm-raf',
    'video/x-m4v',
    'video/3gpp2',
    'application/x-esri-shape',
    'audio/aac',
    'audio/x-it',
    'audio/x-s3m',
    'audio/x-xm',
    'video/MP1S',
    'video/MP2P',
    'application/vnd.sketchup.skp',
    'image/avif',
    'application/x-lzh-compressed',
    'application/pgp-encrypted',
    'application/x-asar',
    'model/stl',
    'application/vnd.ms-htmlhelp',
    'model/3mf',
    'image/jxl',
    'application/zstd',
    'image/jls',
    'application/vnd.ms-outlook',
    'image/vnd.dwg',
    'application/x-parquet',
    'application/java-vm',
    'application/x-arj',
    'application/x-cpio',
    'application/x-ace-compressed',
    'application/avro',
    'application/vnd.iccprofile',
    'application/x.autodesk.fbx',
    'application/vnd.visio'
];
}),
"[project]/node_modules/file-type/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTypeParser",
    ()=>FileTypeParser,
    "fileTypeFromBlob",
    ()=>fileTypeFromBlob,
    "fileTypeFromBuffer",
    ()=>fileTypeFromBuffer,
    "fileTypeFromStream",
    ()=>fileTypeFromStream,
    "fileTypeFromTokenizer",
    ()=>fileTypeFromTokenizer,
    "reasonableDetectionSizeInBytes",
    ()=>reasonableDetectionSizeInBytes,
    "supportedExtensions",
    ()=>supportedExtensions,
    "supportedMimeTypes",
    ()=>supportedMimeTypes
]);
/**
Primary entry point, Node.js specific entry point is index.js
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/supported.js [app-route] (ecmascript)");
;
;
;
;
;
const reasonableDetectionSizeInBytes = 4100; // A fair amount of file-types are detectable within this range.
async function fileTypeFromStream(stream) {
    return new FileTypeParser().fromStream(stream);
}
async function fileTypeFromBuffer(input) {
    return new FileTypeParser().fromBuffer(input);
}
async function fileTypeFromBlob(blob) {
    return new FileTypeParser().fromBlob(blob);
}
function _check(buffer, headers, options) {
    options = {
        offset: 0,
        ...options
    };
    for (const [index, header] of headers.entries()){
        // If a bitmask is set
        if (options.mask) {
            // If header doesn't equal `buf` with bits masked off
            if (header !== (options.mask[index] & buffer[index + options.offset])) {
                return false;
            }
        } else if (header !== buffer[index + options.offset]) {
            return false;
        }
    }
    return true;
}
async function fileTypeFromTokenizer(tokenizer) {
    return new FileTypeParser().fromTokenizer(tokenizer);
}
class FileTypeParser {
    constructor(options){
        this.detectors = options?.customDetectors;
        this.fromTokenizer = this.fromTokenizer.bind(this);
        this.fromBuffer = this.fromBuffer.bind(this);
        this.parse = this.parse.bind(this);
    }
    async fromTokenizer(tokenizer) {
        const initialPosition = tokenizer.position;
        for (const detector of this.detectors || []){
            const fileType = await detector(tokenizer);
            if (fileType) {
                return fileType;
            }
            if (initialPosition !== tokenizer.position) {
                return undefined; // Cannot proceed scanning of the tokenizer is at an arbitrary position
            }
        }
        return this.parse(tokenizer);
    }
    async fromBuffer(input) {
        if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {
            throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
        }
        const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
        if (!(buffer?.length > 1)) {
            return;
        }
        return this.fromTokenizer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromBuffer"](buffer));
    }
    async fromBlob(blob) {
        return this.fromStream(blob.stream());
    }
    async fromStream(stream) {
        const tokenizer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromWebStream"](stream);
        try {
            return await this.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    check(header, options) {
        return _check(this.buffer, header, options);
    }
    checkString(header, options) {
        return this.check((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToBytes"])(header), options);
    }
    async parse(tokenizer) {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        // Keep reading until EOF if the file size is unknown.
        if (tokenizer.fileInfo.size === undefined) {
            tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
        }
        this.tokenizer = tokenizer;
        await tokenizer.peekBuffer(this.buffer, {
            length: 12,
            mayBeLess: true
        });
        // -- 2-byte signatures --
        if (this.check([
            0x42,
            0x4D
        ])) {
            return {
                ext: 'bmp',
                mime: 'image/bmp'
            };
        }
        if (this.check([
            0x0B,
            0x77
        ])) {
            return {
                ext: 'ac3',
                mime: 'audio/vnd.dolby.dd-raw'
            };
        }
        if (this.check([
            0x78,
            0x01
        ])) {
            return {
                ext: 'dmg',
                mime: 'application/x-apple-diskimage'
            };
        }
        if (this.check([
            0x4D,
            0x5A
        ])) {
            return {
                ext: 'exe',
                mime: 'application/x-msdownload'
            };
        }
        if (this.check([
            0x25,
            0x21
        ])) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 24,
                mayBeLess: true
            });
            if (this.checkString('PS-Adobe-', {
                offset: 2
            }) && this.checkString(' EPSF-', {
                offset: 14
            })) {
                return {
                    ext: 'eps',
                    mime: 'application/eps'
                };
            }
            return {
                ext: 'ps',
                mime: 'application/postscript'
            };
        }
        if (this.check([
            0x1F,
            0xA0
        ]) || this.check([
            0x1F,
            0x9D
        ])) {
            return {
                ext: 'Z',
                mime: 'application/x-compress'
            };
        }
        if (this.check([
            0xC7,
            0x71
        ])) {
            return {
                ext: 'cpio',
                mime: 'application/x-cpio'
            };
        }
        if (this.check([
            0x60,
            0xEA
        ])) {
            return {
                ext: 'arj',
                mime: 'application/x-arj'
            };
        }
        // -- 3-byte signatures --
        if (this.check([
            0xEF,
            0xBB,
            0xBF
        ])) {
            // Strip off UTF-8-BOM
            this.tokenizer.ignore(3);
            return this.parse(tokenizer);
        }
        if (this.check([
            0x47,
            0x49,
            0x46
        ])) {
            return {
                ext: 'gif',
                mime: 'image/gif'
            };
        }
        if (this.check([
            0x49,
            0x49,
            0xBC
        ])) {
            return {
                ext: 'jxr',
                mime: 'image/vnd.ms-photo'
            };
        }
        if (this.check([
            0x1F,
            0x8B,
            0x8
        ])) {
            return {
                ext: 'gz',
                mime: 'application/gzip'
            };
        }
        if (this.check([
            0x42,
            0x5A,
            0x68
        ])) {
            return {
                ext: 'bz2',
                mime: 'application/x-bzip2'
            };
        }
        if (this.checkString('ID3')) {
            await tokenizer.ignore(6); // Skip ID3 header until the header size
            const id3HeaderLength = await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint32SyncSafeToken"]);
            if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
                // Guess file type based on ID3 header for backward compatibility
                return {
                    ext: 'mp3',
                    mime: 'audio/mpeg'
                };
            }
            await tokenizer.ignore(id3HeaderLength);
            return this.fromTokenizer(tokenizer); // Skip ID3 header, recursion
        }
        // Musepack, SV7
        if (this.checkString('MP+')) {
            return {
                ext: 'mpc',
                mime: 'audio/x-musepack'
            };
        }
        if ((this.buffer[0] === 0x43 || this.buffer[0] === 0x46) && this.check([
            0x57,
            0x53
        ], {
            offset: 1
        })) {
            return {
                ext: 'swf',
                mime: 'application/x-shockwave-flash'
            };
        }
        // -- 4-byte signatures --
        // Requires a sample size of 4 bytes
        if (this.check([
            0xFF,
            0xD8,
            0xFF
        ])) {
            if (this.check([
                0xF7
            ], {
                offset: 3
            })) {
                return {
                    ext: 'jls',
                    mime: 'image/jls'
                };
            }
            return {
                ext: 'jpg',
                mime: 'image/jpeg'
            };
        }
        if (this.check([
            0x4F,
            0x62,
            0x6A,
            0x01
        ])) {
            return {
                ext: 'avro',
                mime: 'application/avro'
            };
        }
        if (this.checkString('FLIF')) {
            return {
                ext: 'flif',
                mime: 'image/flif'
            };
        }
        if (this.checkString('8BPS')) {
            return {
                ext: 'psd',
                mime: 'image/vnd.adobe.photoshop'
            };
        }
        if (this.checkString('WEBP', {
            offset: 8
        })) {
            return {
                ext: 'webp',
                mime: 'image/webp'
            };
        }
        // Musepack, SV8
        if (this.checkString('MPCK')) {
            return {
                ext: 'mpc',
                mime: 'audio/x-musepack'
            };
        }
        if (this.checkString('FORM')) {
            return {
                ext: 'aif',
                mime: 'audio/aiff'
            };
        }
        if (this.checkString('icns', {
            offset: 0
        })) {
            return {
                ext: 'icns',
                mime: 'image/icns'
            };
        }
        // Zip-based file formats
        // Need to be before the `zip` check
        if (this.check([
            0x50,
            0x4B,
            0x3,
            0x4
        ])) {
            try {
                while(tokenizer.position + 30 < tokenizer.fileInfo.size){
                    await tokenizer.readBuffer(this.buffer, {
                        length: 30
                    });
                    const view = new DataView(this.buffer.buffer);
                    // https://en.wikipedia.org/wiki/Zip_(file_format)#File_headers
                    const zipHeader = {
                        compressedSize: view.getUint32(18, true),
                        uncompressedSize: view.getUint32(22, true),
                        filenameLength: view.getUint16(26, true),
                        extraFieldLength: view.getUint16(28, true)
                    };
                    zipHeader.filename = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](zipHeader.filenameLength, 'utf-8'));
                    await tokenizer.ignore(zipHeader.extraFieldLength);
                    // Assumes signed `.xpi` from addons.mozilla.org
                    if (zipHeader.filename === 'META-INF/mozilla.rsa') {
                        return {
                            ext: 'xpi',
                            mime: 'application/x-xpinstall'
                        };
                    }
                    if (zipHeader.filename.endsWith('.rels') || zipHeader.filename.endsWith('.xml')) {
                        const type = zipHeader.filename.split('/')[0];
                        switch(type){
                            case '_rels':
                                break;
                            case 'word':
                                return {
                                    ext: 'docx',
                                    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                };
                            case 'ppt':
                                return {
                                    ext: 'pptx',
                                    mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                                };
                            case 'xl':
                                return {
                                    ext: 'xlsx',
                                    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                };
                            case 'visio':
                                return {
                                    ext: 'vsdx',
                                    mime: 'application/vnd.visio'
                                };
                            default:
                                break;
                        }
                    }
                    if (zipHeader.filename.startsWith('xl/')) {
                        return {
                            ext: 'xlsx',
                            mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        };
                    }
                    if (zipHeader.filename.startsWith('3D/') && zipHeader.filename.endsWith('.model')) {
                        return {
                            ext: '3mf',
                            mime: 'model/3mf'
                        };
                    }
                    // The docx, xlsx and pptx file types extend the Office Open XML file format:
                    // https://en.wikipedia.org/wiki/Office_Open_XML_file_formats
                    // We look for:
                    // - one entry named '[Content_Types].xml' or '_rels/.rels',
                    // - one entry indicating specific type of file.
                    // MS Office, OpenOffice and LibreOffice may put the parts in different order, so the check should not rely on it.
                    if (zipHeader.filename === 'mimetype' && zipHeader.compressedSize === zipHeader.uncompressedSize) {
                        let mimeType = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](zipHeader.compressedSize, 'utf-8'));
                        mimeType = mimeType.trim();
                        switch(mimeType){
                            case 'application/epub+zip':
                                return {
                                    ext: 'epub',
                                    mime: 'application/epub+zip'
                                };
                            case 'application/vnd.oasis.opendocument.text':
                                return {
                                    ext: 'odt',
                                    mime: 'application/vnd.oasis.opendocument.text'
                                };
                            case 'application/vnd.oasis.opendocument.spreadsheet':
                                return {
                                    ext: 'ods',
                                    mime: 'application/vnd.oasis.opendocument.spreadsheet'
                                };
                            case 'application/vnd.oasis.opendocument.presentation':
                                return {
                                    ext: 'odp',
                                    mime: 'application/vnd.oasis.opendocument.presentation'
                                };
                            default:
                        }
                    }
                    // Try to find next header manually when current one is corrupted
                    if (zipHeader.compressedSize === 0) {
                        let nextHeaderIndex = -1;
                        while(nextHeaderIndex < 0 && tokenizer.position < tokenizer.fileInfo.size){
                            await tokenizer.peekBuffer(this.buffer, {
                                mayBeLess: true
                            });
                            nextHeaderIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOf"])(this.buffer, new Uint8Array([
                                0x50,
                                0x4B,
                                0x03,
                                0x04
                            ]));
                            // Move position to the next header if found, skip the whole buffer otherwise
                            await tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : this.buffer.length);
                        }
                    } else {
                        await tokenizer.ignore(zipHeader.compressedSize);
                    }
                }
            } catch (error) {
                if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"])) {
                    throw error;
                }
            }
            return {
                ext: 'zip',
                mime: 'application/zip'
            };
        }
        if (this.checkString('OggS')) {
            // This is an OGG container
            await tokenizer.ignore(28);
            const type = new Uint8Array(8);
            await tokenizer.readBuffer(type);
            // Needs to be before `ogg` check
            if (_check(type, [
                0x4F,
                0x70,
                0x75,
                0x73,
                0x48,
                0x65,
                0x61,
                0x64
            ])) {
                return {
                    ext: 'opus',
                    mime: 'audio/opus'
                };
            }
            // If ' theora' in header.
            if (_check(type, [
                0x80,
                0x74,
                0x68,
                0x65,
                0x6F,
                0x72,
                0x61
            ])) {
                return {
                    ext: 'ogv',
                    mime: 'video/ogg'
                };
            }
            // If '\x01video' in header.
            if (_check(type, [
                0x01,
                0x76,
                0x69,
                0x64,
                0x65,
                0x6F,
                0x00
            ])) {
                return {
                    ext: 'ogm',
                    mime: 'video/ogg'
                };
            }
            // If ' FLAC' in header  https://xiph.org/flac/faq.html
            if (_check(type, [
                0x7F,
                0x46,
                0x4C,
                0x41,
                0x43
            ])) {
                return {
                    ext: 'oga',
                    mime: 'audio/ogg'
                };
            }
            // 'Speex  ' in header https://en.wikipedia.org/wiki/Speex
            if (_check(type, [
                0x53,
                0x70,
                0x65,
                0x65,
                0x78,
                0x20,
                0x20
            ])) {
                return {
                    ext: 'spx',
                    mime: 'audio/ogg'
                };
            }
            // If '\x01vorbis' in header
            if (_check(type, [
                0x01,
                0x76,
                0x6F,
                0x72,
                0x62,
                0x69,
                0x73
            ])) {
                return {
                    ext: 'ogg',
                    mime: 'audio/ogg'
                };
            }
            // Default OGG container https://www.iana.org/assignments/media-types/application/ogg
            return {
                ext: 'ogx',
                mime: 'application/ogg'
            };
        }
        if (this.check([
            0x50,
            0x4B
        ]) && (this.buffer[2] === 0x3 || this.buffer[2] === 0x5 || this.buffer[2] === 0x7) && (this.buffer[3] === 0x4 || this.buffer[3] === 0x6 || this.buffer[3] === 0x8)) {
            return {
                ext: 'zip',
                mime: 'application/zip'
            };
        }
        //
        // File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
        // It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.
        // `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.
        // Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).
        if (this.checkString('ftyp', {
            offset: 4
        }) && (this.buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?
        ) {
            // They all can have MIME `video/mp4` except `application/mp4` special-case which is hard to detect.
            // For some cases, we're specific, everything else falls to `video/mp4` with `mp4` extension.
            const brandMajor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1').get(this.buffer, 8).replace('\0', ' ').trim();
            switch(brandMajor){
                case 'avif':
                case 'avis':
                    return {
                        ext: 'avif',
                        mime: 'image/avif'
                    };
                case 'mif1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif'
                    };
                case 'msf1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif-sequence'
                    };
                case 'heic':
                case 'heix':
                    return {
                        ext: 'heic',
                        mime: 'image/heic'
                    };
                case 'hevc':
                case 'hevx':
                    return {
                        ext: 'heic',
                        mime: 'image/heic-sequence'
                    };
                case 'qt':
                    return {
                        ext: 'mov',
                        mime: 'video/quicktime'
                    };
                case 'M4V':
                case 'M4VH':
                case 'M4VP':
                    return {
                        ext: 'm4v',
                        mime: 'video/x-m4v'
                    };
                case 'M4P':
                    return {
                        ext: 'm4p',
                        mime: 'video/mp4'
                    };
                case 'M4B':
                    return {
                        ext: 'm4b',
                        mime: 'audio/mp4'
                    };
                case 'M4A':
                    return {
                        ext: 'm4a',
                        mime: 'audio/x-m4a'
                    };
                case 'F4V':
                    return {
                        ext: 'f4v',
                        mime: 'video/mp4'
                    };
                case 'F4P':
                    return {
                        ext: 'f4p',
                        mime: 'video/mp4'
                    };
                case 'F4A':
                    return {
                        ext: 'f4a',
                        mime: 'audio/mp4'
                    };
                case 'F4B':
                    return {
                        ext: 'f4b',
                        mime: 'audio/mp4'
                    };
                case 'crx':
                    return {
                        ext: 'cr3',
                        mime: 'image/x-canon-cr3'
                    };
                default:
                    if (brandMajor.startsWith('3g')) {
                        if (brandMajor.startsWith('3g2')) {
                            return {
                                ext: '3g2',
                                mime: 'video/3gpp2'
                            };
                        }
                        return {
                            ext: '3gp',
                            mime: 'video/3gpp'
                        };
                    }
                    return {
                        ext: 'mp4',
                        mime: 'video/mp4'
                    };
            }
        }
        if (this.checkString('MThd')) {
            return {
                ext: 'mid',
                mime: 'audio/midi'
            };
        }
        if (this.checkString('wOFF') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) {
            return {
                ext: 'woff',
                mime: 'font/woff'
            };
        }
        if (this.checkString('wOF2') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) {
            return {
                ext: 'woff2',
                mime: 'font/woff2'
            };
        }
        if (this.check([
            0xD4,
            0xC3,
            0xB2,
            0xA1
        ]) || this.check([
            0xA1,
            0xB2,
            0xC3,
            0xD4
        ])) {
            return {
                ext: 'pcap',
                mime: 'application/vnd.tcpdump.pcap'
            };
        }
        // Sony DSD Stream File (DSF)
        if (this.checkString('DSD ')) {
            return {
                ext: 'dsf',
                mime: 'audio/x-dsf'
            };
        }
        if (this.checkString('LZIP')) {
            return {
                ext: 'lz',
                mime: 'application/x-lzip'
            };
        }
        if (this.checkString('fLaC')) {
            return {
                ext: 'flac',
                mime: 'audio/x-flac'
            };
        }
        if (this.check([
            0x42,
            0x50,
            0x47,
            0xFB
        ])) {
            return {
                ext: 'bpg',
                mime: 'image/bpg'
            };
        }
        if (this.checkString('wvpk')) {
            return {
                ext: 'wv',
                mime: 'audio/wavpack'
            };
        }
        if (this.checkString('%PDF')) {
            try {
                await tokenizer.ignore(1350);
                const maxBufferSize = 10 * 1024 * 1024;
                const buffer = new Uint8Array(Math.min(maxBufferSize, tokenizer.fileInfo.size));
                await tokenizer.readBuffer(buffer, {
                    mayBeLess: true
                });
                // Check if this is an Adobe Illustrator file
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(buffer, new TextEncoder().encode('AIPrivateData'))) {
                    return {
                        ext: 'ai',
                        mime: 'application/postscript'
                    };
                }
            } catch (error) {
                // Swallow end of stream error if file is too small for the Adobe AI check
                if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"])) {
                    throw error;
                }
            }
            // Assume this is just a normal PDF
            return {
                ext: 'pdf',
                mime: 'application/pdf'
            };
        }
        if (this.check([
            0x00,
            0x61,
            0x73,
            0x6D
        ])) {
            return {
                ext: 'wasm',
                mime: 'application/wasm'
            };
        }
        // TIFF, little-endian type
        if (this.check([
            0x49,
            0x49
        ])) {
            const fileType = await this.readTiffHeader(false);
            if (fileType) {
                return fileType;
            }
        }
        // TIFF, big-endian type
        if (this.check([
            0x4D,
            0x4D
        ])) {
            const fileType = await this.readTiffHeader(true);
            if (fileType) {
                return fileType;
            }
        }
        if (this.checkString('MAC ')) {
            return {
                ext: 'ape',
                mime: 'audio/ape'
            };
        }
        // https://github.com/file/file/blob/master/magic/Magdir/matroska
        if (this.check([
            0x1A,
            0x45,
            0xDF,
            0xA3
        ])) {
            async function readField() {
                const msb = await tokenizer.peekNumber(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT8"]);
                let mask = 0x80;
                let ic = 0; // 0 = A, 1 = B, 2 = C, 3 = D
                while((msb & mask) === 0 && mask !== 0){
                    ++ic;
                    mask >>= 1;
                }
                const id = new Uint8Array(ic + 1);
                await tokenizer.readBuffer(id);
                return id;
            }
            async function readElement() {
                const idField = await readField();
                const lengthField = await readField();
                lengthField[0] ^= 0x80 >> lengthField.length - 1;
                const nrLength = Math.min(6, lengthField.length); // JavaScript can max read 6 bytes integer
                const idView = new DataView(idField.buffer);
                const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
                return {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUintBE"])(idView),
                    len: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUintBE"])(lengthView)
                };
            }
            async function readChildren(children) {
                while(children > 0){
                    const element = await readElement();
                    if (element.id === 0x42_82) {
                        const rawValue = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](element.len));
                        return rawValue.replaceAll(/\00.*$/g, ''); // Return DocType
                    }
                    await tokenizer.ignore(element.len); // ignore payload
                    --children;
                }
            }
            const re = await readElement();
            const docType = await readChildren(re.len);
            switch(docType){
                case 'webm':
                    return {
                        ext: 'webm',
                        mime: 'video/webm'
                    };
                case 'matroska':
                    return {
                        ext: 'mkv',
                        mime: 'video/x-matroska'
                    };
                default:
                    return;
            }
        }
        // RIFF file format which might be AVI, WAV, QCP, etc
        if (this.check([
            0x52,
            0x49,
            0x46,
            0x46
        ])) {
            if (this.check([
                0x41,
                0x56,
                0x49
            ], {
                offset: 8
            })) {
                return {
                    ext: 'avi',
                    mime: 'video/vnd.avi'
                };
            }
            if (this.check([
                0x57,
                0x41,
                0x56,
                0x45
            ], {
                offset: 8
            })) {
                return {
                    ext: 'wav',
                    mime: 'audio/wav'
                };
            }
            // QLCM, QCP file
            if (this.check([
                0x51,
                0x4C,
                0x43,
                0x4D
            ], {
                offset: 8
            })) {
                return {
                    ext: 'qcp',
                    mime: 'audio/qcelp'
                };
            }
        }
        if (this.checkString('SQLi')) {
            return {
                ext: 'sqlite',
                mime: 'application/x-sqlite3'
            };
        }
        if (this.check([
            0x4E,
            0x45,
            0x53,
            0x1A
        ])) {
            return {
                ext: 'nes',
                mime: 'application/x-nintendo-nes-rom'
            };
        }
        if (this.checkString('Cr24')) {
            return {
                ext: 'crx',
                mime: 'application/x-google-chrome-extension'
            };
        }
        if (this.checkString('MSCF') || this.checkString('ISc(')) {
            return {
                ext: 'cab',
                mime: 'application/vnd.ms-cab-compressed'
            };
        }
        if (this.check([
            0xED,
            0xAB,
            0xEE,
            0xDB
        ])) {
            return {
                ext: 'rpm',
                mime: 'application/x-rpm'
            };
        }
        if (this.check([
            0xC5,
            0xD0,
            0xD3,
            0xC6
        ])) {
            return {
                ext: 'eps',
                mime: 'application/eps'
            };
        }
        if (this.check([
            0x28,
            0xB5,
            0x2F,
            0xFD
        ])) {
            return {
                ext: 'zst',
                mime: 'application/zstd'
            };
        }
        if (this.check([
            0x7F,
            0x45,
            0x4C,
            0x46
        ])) {
            return {
                ext: 'elf',
                mime: 'application/x-elf'
            };
        }
        if (this.check([
            0x21,
            0x42,
            0x44,
            0x4E
        ])) {
            return {
                ext: 'pst',
                mime: 'application/vnd.ms-outlook'
            };
        }
        if (this.checkString('PAR1')) {
            return {
                ext: 'parquet',
                mime: 'application/x-parquet'
            };
        }
        if (this.check([
            0xCF,
            0xFA,
            0xED,
            0xFE
        ])) {
            return {
                ext: 'macho',
                mime: 'application/x-mach-binary'
            };
        }
        // -- 5-byte signatures --
        if (this.check([
            0x4F,
            0x54,
            0x54,
            0x4F,
            0x00
        ])) {
            return {
                ext: 'otf',
                mime: 'font/otf'
            };
        }
        if (this.checkString('#!AMR')) {
            return {
                ext: 'amr',
                mime: 'audio/amr'
            };
        }
        if (this.checkString('{\\rtf')) {
            return {
                ext: 'rtf',
                mime: 'application/rtf'
            };
        }
        if (this.check([
            0x46,
            0x4C,
            0x56,
            0x01
        ])) {
            return {
                ext: 'flv',
                mime: 'video/x-flv'
            };
        }
        if (this.checkString('IMPM')) {
            return {
                ext: 'it',
                mime: 'audio/x-it'
            };
        }
        if (this.checkString('-lh0-', {
            offset: 2
        }) || this.checkString('-lh1-', {
            offset: 2
        }) || this.checkString('-lh2-', {
            offset: 2
        }) || this.checkString('-lh3-', {
            offset: 2
        }) || this.checkString('-lh4-', {
            offset: 2
        }) || this.checkString('-lh5-', {
            offset: 2
        }) || this.checkString('-lh6-', {
            offset: 2
        }) || this.checkString('-lh7-', {
            offset: 2
        }) || this.checkString('-lzs-', {
            offset: 2
        }) || this.checkString('-lz4-', {
            offset: 2
        }) || this.checkString('-lz5-', {
            offset: 2
        }) || this.checkString('-lhd-', {
            offset: 2
        })) {
            return {
                ext: 'lzh',
                mime: 'application/x-lzh-compressed'
            };
        }
        // MPEG program stream (PS or MPEG-PS)
        if (this.check([
            0x00,
            0x00,
            0x01,
            0xBA
        ])) {
            //  MPEG-PS, MPEG-1 Part 1
            if (this.check([
                0x21
            ], {
                offset: 4,
                mask: [
                    0xF1
                ]
            })) {
                return {
                    ext: 'mpg',
                    mime: 'video/MP1S'
                };
            }
            // MPEG-PS, MPEG-2 Part 1
            if (this.check([
                0x44
            ], {
                offset: 4,
                mask: [
                    0xC4
                ]
            })) {
                return {
                    ext: 'mpg',
                    mime: 'video/MP2P'
                };
            }
        }
        if (this.checkString('ITSF')) {
            return {
                ext: 'chm',
                mime: 'application/vnd.ms-htmlhelp'
            };
        }
        if (this.check([
            0xCA,
            0xFE,
            0xBA,
            0xBE
        ])) {
            return {
                ext: 'class',
                mime: 'application/java-vm'
            };
        }
        // -- 6-byte signatures --
        if (this.check([
            0xFD,
            0x37,
            0x7A,
            0x58,
            0x5A,
            0x00
        ])) {
            return {
                ext: 'xz',
                mime: 'application/x-xz'
            };
        }
        if (this.checkString('<?xml ')) {
            return {
                ext: 'xml',
                mime: 'application/xml'
            };
        }
        if (this.check([
            0x37,
            0x7A,
            0xBC,
            0xAF,
            0x27,
            0x1C
        ])) {
            return {
                ext: '7z',
                mime: 'application/x-7z-compressed'
            };
        }
        if (this.check([
            0x52,
            0x61,
            0x72,
            0x21,
            0x1A,
            0x7
        ]) && (this.buffer[6] === 0x0 || this.buffer[6] === 0x1)) {
            return {
                ext: 'rar',
                mime: 'application/x-rar-compressed'
            };
        }
        if (this.checkString('solid ')) {
            return {
                ext: 'stl',
                mime: 'model/stl'
            };
        }
        if (this.checkString('AC')) {
            const version = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1').get(this.buffer, 2);
            if (version.match('^d*') && version >= 1000 && version <= 1050) {
                return {
                    ext: 'dwg',
                    mime: 'image/vnd.dwg'
                };
            }
        }
        if (this.checkString('070707')) {
            return {
                ext: 'cpio',
                mime: 'application/x-cpio'
            };
        }
        // -- 7-byte signatures --
        if (this.checkString('BLENDER')) {
            return {
                ext: 'blend',
                mime: 'application/x-blender'
            };
        }
        if (this.checkString('!<arch>')) {
            await tokenizer.ignore(8);
            const string = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](13, 'ascii'));
            if (string === 'debian-binary') {
                return {
                    ext: 'deb',
                    mime: 'application/x-deb'
                };
            }
            return {
                ext: 'ar',
                mime: 'application/x-unix-archive'
            };
        }
        if (this.checkString('**ACE', {
            offset: 7
        })) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 14,
                mayBeLess: true
            });
            if (this.checkString('**', {
                offset: 12
            })) {
                return {
                    ext: 'ace',
                    mime: 'application/x-ace-compressed'
                };
            }
        }
        // -- 8-byte signatures --
        if (this.check([
            0x89,
            0x50,
            0x4E,
            0x47,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) {
            // APNG format (https://wiki.mozilla.org/APNG_Specification)
            // 1. Find the first IDAT (image data) chunk (49 44 41 54)
            // 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)
            // Offset calculated as follows:
            // - 8 bytes: PNG signature
            // - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk
            await tokenizer.ignore(8); // ignore PNG signature
            async function readChunkHeader() {
                return {
                    length: await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INT32_BE"]),
                    type: await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1'))
                };
            }
            do {
                const chunk = await readChunkHeader();
                if (chunk.length < 0) {
                    return; // Invalid chunk length
                }
                switch(chunk.type){
                    case 'IDAT':
                        return {
                            ext: 'png',
                            mime: 'image/png'
                        };
                    case 'acTL':
                        return {
                            ext: 'apng',
                            mime: 'image/apng'
                        };
                    default:
                        await tokenizer.ignore(chunk.length + 4); // Ignore chunk-data + CRC
                }
            }while (tokenizer.position + 8 < tokenizer.fileInfo.size)
            return {
                ext: 'png',
                mime: 'image/png'
            };
        }
        if (this.check([
            0x41,
            0x52,
            0x52,
            0x4F,
            0x57,
            0x31,
            0x00,
            0x00
        ])) {
            return {
                ext: 'arrow',
                mime: 'application/x-apache-arrow'
            };
        }
        if (this.check([
            0x67,
            0x6C,
            0x54,
            0x46,
            0x02,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'glb',
                mime: 'model/gltf-binary'
            };
        }
        // `mov` format variants
        if (this.check([
            0x66,
            0x72,
            0x65,
            0x65
        ], {
            offset: 4
        }) // `free`
         || this.check([
            0x6D,
            0x64,
            0x61,
            0x74
        ], {
            offset: 4
        }) // `mdat` MJPEG
         || this.check([
            0x6D,
            0x6F,
            0x6F,
            0x76
        ], {
            offset: 4
        }) // `moov`
         || this.check([
            0x77,
            0x69,
            0x64,
            0x65
        ], {
            offset: 4
        }) // `wide`
        ) {
            return {
                ext: 'mov',
                mime: 'video/quicktime'
            };
        }
        // -- 9-byte signatures --
        if (this.check([
            0x49,
            0x49,
            0x52,
            0x4F,
            0x08,
            0x00,
            0x00,
            0x00,
            0x18
        ])) {
            return {
                ext: 'orf',
                mime: 'image/x-olympus-orf'
            };
        }
        if (this.checkString('gimp xcf ')) {
            return {
                ext: 'xcf',
                mime: 'image/x-xcf'
            };
        }
        // -- 12-byte signatures --
        if (this.check([
            0x49,
            0x49,
            0x55,
            0x00,
            0x18,
            0x00,
            0x00,
            0x00,
            0x88,
            0xE7,
            0x74,
            0xD8
        ])) {
            return {
                ext: 'rw2',
                mime: 'image/x-panasonic-rw2'
            };
        }
        // ASF_Header_Object first 80 bytes
        if (this.check([
            0x30,
            0x26,
            0xB2,
            0x75,
            0x8E,
            0x66,
            0xCF,
            0x11,
            0xA6,
            0xD9
        ])) {
            async function readHeader() {
                const guid = new Uint8Array(16);
                await tokenizer.readBuffer(guid);
                return {
                    id: guid,
                    size: Number(await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT64_LE"]))
                };
            }
            await tokenizer.ignore(30);
            // Search for header should be in first 1KB of file.
            while(tokenizer.position + 24 < tokenizer.fileInfo.size){
                const header = await readHeader();
                let payload = header.size - 24;
                if (_check(header.id, [
                    0x91,
                    0x07,
                    0xDC,
                    0xB7,
                    0xB7,
                    0xA9,
                    0xCF,
                    0x11,
                    0x8E,
                    0xE6,
                    0x00,
                    0xC0,
                    0x0C,
                    0x20,
                    0x53,
                    0x65
                ])) {
                    // Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)
                    const typeId = new Uint8Array(16);
                    payload -= await tokenizer.readBuffer(typeId);
                    if (_check(typeId, [
                        0x40,
                        0x9E,
                        0x69,
                        0xF8,
                        0x4D,
                        0x5B,
                        0xCF,
                        0x11,
                        0xA8,
                        0xFD,
                        0x00,
                        0x80,
                        0x5F,
                        0x5C,
                        0x44,
                        0x2B
                    ])) {
                        // Found audio:
                        return {
                            ext: 'asf',
                            mime: 'audio/x-ms-asf'
                        };
                    }
                    if (_check(typeId, [
                        0xC0,
                        0xEF,
                        0x19,
                        0xBC,
                        0x4D,
                        0x5B,
                        0xCF,
                        0x11,
                        0xA8,
                        0xFD,
                        0x00,
                        0x80,
                        0x5F,
                        0x5C,
                        0x44,
                        0x2B
                    ])) {
                        // Found video:
                        return {
                            ext: 'asf',
                            mime: 'video/x-ms-asf'
                        };
                    }
                    break;
                }
                await tokenizer.ignore(payload);
            }
            // Default to ASF generic extension
            return {
                ext: 'asf',
                mime: 'application/vnd.ms-asf'
            };
        }
        if (this.check([
            0xAB,
            0x4B,
            0x54,
            0x58,
            0x20,
            0x31,
            0x31,
            0xBB,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) {
            return {
                ext: 'ktx',
                mime: 'image/ktx'
            };
        }
        if ((this.check([
            0x7E,
            0x10,
            0x04
        ]) || this.check([
            0x7E,
            0x18,
            0x04
        ])) && this.check([
            0x30,
            0x4D,
            0x49,
            0x45
        ], {
            offset: 4
        })) {
            return {
                ext: 'mie',
                mime: 'application/x-mie'
            };
        }
        if (this.check([
            0x27,
            0x0A,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00
        ], {
            offset: 2
        })) {
            return {
                ext: 'shp',
                mime: 'application/x-esri-shape'
            };
        }
        if (this.check([
            0xFF,
            0x4F,
            0xFF,
            0x51
        ])) {
            return {
                ext: 'j2c',
                mime: 'image/j2c'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x6A,
            0x50,
            0x20,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) {
            // JPEG-2000 family
            await tokenizer.ignore(20);
            const type = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'ascii'));
            switch(type){
                case 'jp2 ':
                    return {
                        ext: 'jp2',
                        mime: 'image/jp2'
                    };
                case 'jpx ':
                    return {
                        ext: 'jpx',
                        mime: 'image/jpx'
                    };
                case 'jpm ':
                    return {
                        ext: 'jpm',
                        mime: 'image/jpm'
                    };
                case 'mjp2':
                    return {
                        ext: 'mj2',
                        mime: 'image/mj2'
                    };
                default:
                    return;
            }
        }
        if (this.check([
            0xFF,
            0x0A
        ]) || this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x4A,
            0x58,
            0x4C,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) {
            return {
                ext: 'jxl',
                mime: 'image/jxl'
            };
        }
        if (this.check([
            0xFE,
            0xFF
        ])) {
            if (this.check([
                0,
                60,
                0,
                63,
                0,
                120,
                0,
                109,
                0,
                108
            ], {
                offset: 2
            })) {
                return {
                    ext: 'xml',
                    mime: 'application/xml'
                };
            }
            return undefined; // Some unknown text based format
        }
        // -- Unsafe signatures --
        if (this.check([
            0x0,
            0x0,
            0x1,
            0xBA
        ]) || this.check([
            0x0,
            0x0,
            0x1,
            0xB3
        ])) {
            return {
                ext: 'mpg',
                mime: 'video/mpeg'
            };
        }
        if (this.check([
            0x00,
            0x01,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'ttf',
                mime: 'font/ttf'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x01,
            0x00
        ])) {
            return {
                ext: 'ico',
                mime: 'image/x-icon'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x02,
            0x00
        ])) {
            return {
                ext: 'cur',
                mime: 'image/x-icon'
            };
        }
        if (this.check([
            0xD0,
            0xCF,
            0x11,
            0xE0,
            0xA1,
            0xB1,
            0x1A,
            0xE1
        ])) {
            // Detected Microsoft Compound File Binary File (MS-CFB) Format.
            return {
                ext: 'cfb',
                mime: 'application/x-cfb'
            };
        }
        // Increase sample size from 12 to 256.
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(256, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        if (this.check([
            0x61,
            0x63,
            0x73,
            0x70
        ], {
            offset: 36
        })) {
            return {
                ext: 'icc',
                mime: 'application/vnd.iccprofile'
            };
        }
        // -- 15-byte signatures --
        if (this.checkString('BEGIN:')) {
            if (this.checkString('VCARD', {
                offset: 6
            })) {
                return {
                    ext: 'vcf',
                    mime: 'text/vcard'
                };
            }
            if (this.checkString('VCALENDAR', {
                offset: 6
            })) {
                return {
                    ext: 'ics',
                    mime: 'text/calendar'
                };
            }
        }
        // `raf` is here just to keep all the raw image detectors together.
        if (this.checkString('FUJIFILMCCD-RAW')) {
            return {
                ext: 'raf',
                mime: 'image/x-fujifilm-raf'
            };
        }
        if (this.checkString('Extended Module:')) {
            return {
                ext: 'xm',
                mime: 'audio/x-xm'
            };
        }
        if (this.checkString('Creative Voice File')) {
            return {
                ext: 'voc',
                mime: 'audio/x-voc'
            };
        }
        if (this.check([
            0x04,
            0x00,
            0x00,
            0x00
        ]) && this.buffer.length >= 16) {
            const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
            if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {
                try {
                    const header = new TextDecoder().decode(this.buffer.slice(16, jsonSize + 16));
                    const json = JSON.parse(header);
                    // Check if Pickle is ASAR
                    if (json.files) {
                        return {
                            ext: 'asar',
                            mime: 'application/x-asar'
                        };
                    }
                } catch  {}
            }
        }
        if (this.check([
            0x06,
            0x0E,
            0x2B,
            0x34,
            0x02,
            0x05,
            0x01,
            0x01,
            0x0D,
            0x01,
            0x02,
            0x01,
            0x01,
            0x02
        ])) {
            return {
                ext: 'mxf',
                mime: 'application/mxf'
            };
        }
        if (this.checkString('SCRM', {
            offset: 44
        })) {
            return {
                ext: 's3m',
                mime: 'audio/x-s3m'
            };
        }
        // Raw MPEG-2 transport stream (188-byte packets)
        if (this.check([
            0x47
        ]) && this.check([
            0x47
        ], {
            offset: 188
        })) {
            return {
                ext: 'mts',
                mime: 'video/mp2t'
            };
        }
        // Blu-ray Disc Audio-Video (BDAV) MPEG-2 transport stream has 4-byte TP_extra_header before each 188-byte packet
        if (this.check([
            0x47
        ], {
            offset: 4
        }) && this.check([
            0x47
        ], {
            offset: 196
        })) {
            return {
                ext: 'mts',
                mime: 'video/mp2t'
            };
        }
        if (this.check([
            0x42,
            0x4F,
            0x4F,
            0x4B,
            0x4D,
            0x4F,
            0x42,
            0x49
        ], {
            offset: 60
        })) {
            return {
                ext: 'mobi',
                mime: 'application/x-mobipocket-ebook'
            };
        }
        if (this.check([
            0x44,
            0x49,
            0x43,
            0x4D
        ], {
            offset: 128
        })) {
            return {
                ext: 'dcm',
                mime: 'application/dicom'
            };
        }
        if (this.check([
            0x4C,
            0x00,
            0x00,
            0x00,
            0x01,
            0x14,
            0x02,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0xC0,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x46
        ])) {
            return {
                ext: 'lnk',
                mime: 'application/x.ms.shortcut'
            };
        }
        if (this.check([
            0x62,
            0x6F,
            0x6F,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00,
            0x6D,
            0x61,
            0x72,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'alias',
                mime: 'application/x.apple.alias'
            };
        }
        if (this.checkString('Kaydara FBX Binary  \u0000')) {
            return {
                ext: 'fbx',
                mime: 'application/x.autodesk.fbx'
            };
        }
        if (this.check([
            0x4C,
            0x50
        ], {
            offset: 34
        }) && (this.check([
            0x00,
            0x00,
            0x01
        ], {
            offset: 8
        }) || this.check([
            0x01,
            0x00,
            0x02
        ], {
            offset: 8
        }) || this.check([
            0x02,
            0x00,
            0x02
        ], {
            offset: 8
        }))) {
            return {
                ext: 'eot',
                mime: 'application/vnd.ms-fontobject'
            };
        }
        if (this.check([
            0x06,
            0x06,
            0xED,
            0xF5,
            0xD8,
            0x1D,
            0x46,
            0xE5,
            0xBD,
            0x31,
            0xEF,
            0xE7,
            0xFE,
            0x74,
            0xB7,
            0x1D
        ])) {
            return {
                ext: 'indd',
                mime: 'application/x-indesign'
            };
        }
        // Increase sample size from 256 to 512
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(512, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        // Requires a buffer size of 512 bytes
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tarHeaderChecksumMatches"])(this.buffer)) {
            return {
                ext: 'tar',
                mime: 'application/x-tar'
            };
        }
        if (this.check([
            0xFF,
            0xFE
        ])) {
            if (this.check([
                60,
                0,
                63,
                0,
                120,
                0,
                109,
                0,
                108,
                0
            ], {
                offset: 2
            })) {
                return {
                    ext: 'xml',
                    mime: 'application/xml'
                };
            }
            if (this.check([
                0xFF,
                0x0E,
                0x53,
                0x00,
                0x6B,
                0x00,
                0x65,
                0x00,
                0x74,
                0x00,
                0x63,
                0x00,
                0x68,
                0x00,
                0x55,
                0x00,
                0x70,
                0x00,
                0x20,
                0x00,
                0x4D,
                0x00,
                0x6F,
                0x00,
                0x64,
                0x00,
                0x65,
                0x00,
                0x6C,
                0x00
            ], {
                offset: 2
            })) {
                return {
                    ext: 'skp',
                    mime: 'application/vnd.sketchup.skp'
                };
            }
            return undefined; // Some text based format
        }
        if (this.checkString('-----BEGIN PGP MESSAGE-----')) {
            return {
                ext: 'pgp',
                mime: 'application/pgp-encrypted'
            };
        }
        // Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)
        if (this.buffer.length >= 2 && this.check([
            0xFF,
            0xE0
        ], {
            offset: 0,
            mask: [
                0xFF,
                0xE0
            ]
        })) {
            if (this.check([
                0x10
            ], {
                offset: 1,
                mask: [
                    0x16
                ]
            })) {
                // Check for (ADTS) MPEG-2
                if (this.check([
                    0x08
                ], {
                    offset: 1,
                    mask: [
                        0x08
                    ]
                })) {
                    return {
                        ext: 'aac',
                        mime: 'audio/aac'
                    };
                }
                // Must be (ADTS) MPEG-4
                return {
                    ext: 'aac',
                    mime: 'audio/aac'
                };
            }
            // MPEG 1 or 2 Layer 3 header
            // Check for MPEG layer 3
            if (this.check([
                0x02
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp3',
                    mime: 'audio/mpeg'
                };
            }
            // Check for MPEG layer 2
            if (this.check([
                0x04
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp2',
                    mime: 'audio/mpeg'
                };
            }
            // Check for MPEG layer 1
            if (this.check([
                0x06
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp1',
                    mime: 'audio/mpeg'
                };
            }
        }
    }
    async readTiffTag(bigEndian) {
        const tagId = await this.tokenizer.readToken(bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]);
        this.tokenizer.ignore(10);
        switch(tagId){
            case 50_341:
                return {
                    ext: 'arw',
                    mime: 'image/x-sony-arw'
                };
            case 50_706:
                return {
                    ext: 'dng',
                    mime: 'image/x-adobe-dng'
                };
            default:
        }
    }
    async readTiffIFD(bigEndian) {
        const numberOfTags = await this.tokenizer.readToken(bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]);
        for(let n = 0; n < numberOfTags; ++n){
            const fileType = await this.readTiffTag(bigEndian);
            if (fileType) {
                return fileType;
            }
        }
    }
    async readTiffHeader(bigEndian) {
        const version = (bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]).get(this.buffer, 2);
        const ifdOffset = (bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT32_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT32_LE"]).get(this.buffer, 4);
        if (version === 42) {
            // TIFF file header
            if (ifdOffset >= 6) {
                if (this.checkString('CR', {
                    offset: 8
                })) {
                    return {
                        ext: 'cr2',
                        mime: 'image/x-canon-cr2'
                    };
                }
                if (ifdOffset >= 8 && (this.check([
                    0x1C,
                    0x00,
                    0xFE,
                    0x00
                ], {
                    offset: 8
                }) || this.check([
                    0x1F,
                    0x00,
                    0x0B,
                    0x00
                ], {
                    offset: 8
                }))) {
                    return {
                        ext: 'nef',
                        mime: 'image/x-nikon-nef'
                    };
                }
            }
            await this.tokenizer.ignore(ifdOffset);
            const fileType = await this.readTiffIFD(bigEndian);
            return fileType ?? {
                ext: 'tif',
                mime: 'image/tiff'
            };
        }
        if (version === 43) {
            return {
                ext: 'tif',
                mime: 'image/tiff'
            };
        }
    }
}
const supportedExtensions = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extensions"]);
const supportedMimeTypes = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mimeTypes"]);
}),
"[project]/node_modules/file-type/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeFileTypeParser",
    ()=>NodeFileTypeParser,
    "fileTypeFromFile",
    ()=>fileTypeFromFile,
    "fileTypeFromStream",
    ()=>fileTypeFromStream,
    "fileTypeStream",
    ()=>fileTypeStream
]);
/**
Node.js specific entry point.
*/ var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream$2f$web__$5b$external$5d$__$28$node$3a$stream$2f$web$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream/web [external] (node:stream/web, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/core.js [app-route] (ecmascript)");
;
;
;
class NodeFileTypeParser extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileTypeParser"] {
    async fromStream(stream) {
        const tokenizer = await (stream instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream$2f$web__$5b$external$5d$__$28$node$3a$stream$2f$web$2c$__cjs$29$__["ReadableStream"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromWebStream"](stream) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"](stream));
        try {
            return super.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    async fromFile(path) {
        const tokenizer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromFile"](path);
        try {
            return await super.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    async toDetectionStream(readableStream, options = {}) {
        const { default: stream } = await __turbopack_context__.A("[externals]/node:stream [external] (node:stream, cjs, async loader)");
        const { sampleSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reasonableDetectionSizeInBytes"] } = options;
        return new Promise((resolve, reject)=>{
            readableStream.on('error', reject);
            readableStream.once('readable', ()=>{
                (async ()=>{
                    try {
                        // Set up output stream
                        const pass = new stream.PassThrough();
                        const outputStream = stream.pipeline ? stream.pipeline(readableStream, pass, ()=>{}) : readableStream.pipe(pass);
                        // Read the input stream and detect the filetype
                        const chunk = readableStream.read(sampleSize) ?? readableStream.read() ?? new Uint8Array(0);
                        try {
                            pass.fileType = await this.fromBuffer(chunk);
                        } catch (error) {
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]) {
                                pass.fileType = undefined;
                            } else {
                                reject(error);
                            }
                        }
                        resolve(outputStream);
                    } catch (error) {
                        reject(error);
                    }
                })();
            });
        });
    }
}
async function fileTypeFromFile(path, fileTypeOptions) {
    return new NodeFileTypeParser(fileTypeOptions).fromFile(path, fileTypeOptions);
}
async function fileTypeFromStream(stream, fileTypeOptions) {
    return new NodeFileTypeParser(fileTypeOptions).fromStream(stream);
}
async function fileTypeStream(readableStream, options = {}) {
    return new NodeFileTypeParser().toDetectionStream(readableStream, options);
}
;
}),
"[project]/node_modules/deepmerge/dist/cjs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
"[project]/node_modules/truncate-utf8-bytes/lib/truncate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isHighSurrogate(codePoint) {
    return codePoint >= 0xd800 && codePoint <= 0xdbff;
}
function isLowSurrogate(codePoint) {
    return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}
// Truncate string by size in bytes
module.exports = function truncate(getLength, string, byteLength) {
    if (typeof string !== "string") {
        throw new Error("Input must be string");
    }
    var charLength = string.length;
    var curByteLength = 0;
    var codePoint;
    var segment;
    for(var i = 0; i < charLength; i += 1){
        codePoint = string.charCodeAt(i);
        segment = string[i];
        if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
            i += 1;
            segment += string[i];
        }
        curByteLength += getLength(segment);
        if (curByteLength === byteLength) {
            return string.slice(0, i + 1);
        } else if (curByteLength > byteLength) {
            return string.slice(0, i - segment.length + 1);
        }
    }
    return string;
};
}),
"[project]/node_modules/truncate-utf8-bytes/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var truncate = __turbopack_context__.r("[project]/node_modules/truncate-utf8-bytes/lib/truncate.js [app-route] (ecmascript)");
var getLength = Buffer.byteLength.bind(Buffer);
module.exports = truncate.bind(null, getLength);
}),
"[project]/node_modules/sanitize-filename/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*jshint node:true*/ /**
 * Replaces characters in strings that are illegal/unsafe for filenames.
 * Unsafe characters are either removed or replaced by a substitute set
 * in the optional `options` object.
 *
 * Illegal Characters on Various Operating Systems
 * / ? < > \ : * | "
 * https://kb.acronis.com/content/39790
 *
 * Unicode Control codes
 * C0 0x00-0x1f & C1 (0x80-0x9f)
 * http://en.wikipedia.org/wiki/C0_and_C1_control_codes
 *
 * Reserved filenames on Unix-based systems (".", "..")
 * Reserved filenames in Windows ("CON", "PRN", "AUX", "NUL", "COM1",
 * "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
 * "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", and
 * "LPT9") case-insesitively and with or without filename extensions.
 *
 * Capped at 255 characters in length.
 * http://unix.stackexchange.com/questions/32795/what-is-the-maximum-allowed-filename-and-folder-size-with-ecryptfs
 *
 * @param  {String} input   Original filename
 * @param  {Object} options {replacement: String | Function }
 * @return {String}         Sanitized filename
 */ var truncate = __turbopack_context__.r("[project]/node_modules/truncate-utf8-bytes/index.js [app-route] (ecmascript)");
var illegalRe = /[\/\?<>\\:\*\|"]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
var windowsTrailingRe = /[\. ]+$/;
function sanitize(input, replacement) {
    if (typeof input !== 'string') {
        throw new Error('Input must be string');
    }
    var sanitized = input.replace(illegalRe, replacement).replace(controlRe, replacement).replace(reservedRe, replacement).replace(windowsReservedRe, replacement).replace(windowsTrailingRe, replacement);
    return truncate(sanitized, 255);
}
module.exports = function(input, options) {
    var replacement = options && options.replacement || '';
    var output = sanitize(input, replacement);
    if (replacement === '') {
        return output;
    }
    return sanitize(output, '');
};
}),
"[project]/node_modules/payload/node_modules/ipaddr.js/lib/ipaddr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(root) {
    'use strict';
    // A list of regular expressions that match arbitrary IPv4 addresses,
    // for which a number of weird notations exist.
    // Note that an address like 0010.0xa5.1.1 is considered legal.
    const ipv4Part = '(0?\\d+|0x[a-f0-9]+)';
    const ipv4Regexes = {
        fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, 'i'),
        threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, 'i'),
        twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, 'i'),
        longValue: new RegExp(`^${ipv4Part}$`, 'i')
    };
    // Regular Expression for checking Octal numbers
    const octalRegex = new RegExp(`^0[0-7]+$`, 'i');
    const hexRegex = new RegExp(`^0x[a-f0-9]+$`, 'i');
    const zoneIndex = '%[0-9a-z]{1,}';
    // IPv6-matching regular expressions.
    // For IPv6, the task is simpler: it is enough to match the colon-delimited
    // hexadecimal IPv6 and a transitional variant with dotted-decimal IPv4 at
    // the end.
    const ipv6Part = '(?:[0-9a-f]+::?)+';
    const ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, 'i'),
        'native': new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, 'i'),
        deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, 'i'),
        transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, 'i')
    };
    // Expand :: in an IPv6 address or address part consisting of `parts` groups.
    function expandIPv6(string, parts) {
        // More than one '::' means invalid adddress
        if (string.indexOf('::') !== string.lastIndexOf('::')) {
            return null;
        }
        let colonCount = 0;
        let lastColon = -1;
        let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
        let replacement, replacementCount;
        // Remove zone index and save it for later
        if (zoneId) {
            zoneId = zoneId.substring(1);
            string = string.replace(/%.+$/, '');
        }
        // How many parts do we already have?
        while((lastColon = string.indexOf(':', lastColon + 1)) >= 0){
            colonCount++;
        }
        // 0::0 is two parts more than ::
        if (string.substr(0, 2) === '::') {
            colonCount--;
        }
        if (string.substr(-2, 2) === '::') {
            colonCount--;
        }
        // The following loop would hang if colonCount > parts
        if (colonCount > parts) {
            return null;
        }
        // replacement = ':' + '0:' * (parts - colonCount)
        replacementCount = parts - colonCount;
        replacement = ':';
        while(replacementCount--){
            replacement += '0:';
        }
        // Insert the missing zeroes
        string = string.replace('::', replacement);
        // Trim any garbage which may be hanging around if :: was at the edge in
        // the source strin
        if (string[0] === ':') {
            string = string.slice(1);
        }
        if (string[string.length - 1] === ':') {
            string = string.slice(0, -1);
        }
        parts = function() {
            const ref = string.split(':');
            const results = [];
            for(let i = 0; i < ref.length; i++){
                results.push(parseInt(ref[i], 16));
            }
            return results;
        }();
        return {
            parts: parts,
            zoneId: zoneId
        };
    }
    // A generic CIDR (Classless Inter-Domain Routing) RFC1518 range matcher.
    function matchCIDR(first, second, partSize, cidrBits) {
        if (first.length !== second.length) {
            throw new Error('ipaddr: cannot match CIDR for objects with different lengths');
        }
        let part = 0;
        let shift;
        while(cidrBits > 0){
            shift = partSize - cidrBits;
            if (shift < 0) {
                shift = 0;
            }
            if (first[part] >> shift !== second[part] >> shift) {
                return false;
            }
            cidrBits -= partSize;
            part += 1;
        }
        return true;
    }
    function parseIntAuto(string) {
        // Hexadedimal base 16 (0x#)
        if (hexRegex.test(string)) {
            return parseInt(string, 16);
        }
        // While octal representation is discouraged by ECMAScript 3
        // and forbidden by ECMAScript 5, we silently allow it to
        // work only if the rest of the string has numbers less than 8.
        if (string[0] === '0' && !isNaN(parseInt(string[1], 10))) {
            if (octalRegex.test(string)) {
                return parseInt(string, 8);
            }
            throw new Error(`ipaddr: cannot parse ${string} as octal`);
        }
        // Always include the base 10 radix!
        return parseInt(string, 10);
    }
    function padPart(part, length) {
        while(part.length < length){
            part = `0${part}`;
        }
        return part;
    }
    const ipaddr = {};
    // An IPv4 address (RFC791).
    ipaddr.IPv4 = function() {
        // Constructs a new IPv4 address from an array of four octets
        // in network order (MSB first)
        // Verifies the input.
        function IPv4(octets) {
            if (octets.length !== 4) {
                throw new Error('ipaddr: ipv4 octet count should be 4');
            }
            let i, octet;
            for(i = 0; i < octets.length; i++){
                octet = octets[i];
                if (!(0 <= octet && octet <= 255)) {
                    throw new Error('ipaddr: ipv4 octet should fit in 8 bits');
                }
            }
            this.octets = octets;
        }
        // Special IPv4 address ranges.
        // See also https://en.wikipedia.org/wiki/Reserved_IP_addresses
        IPv4.prototype.SpecialRanges = {
            unspecified: [
                [
                    new IPv4([
                        0,
                        0,
                        0,
                        0
                    ]),
                    8
                ]
            ],
            broadcast: [
                [
                    new IPv4([
                        255,
                        255,
                        255,
                        255
                    ]),
                    32
                ]
            ],
            // RFC3171
            multicast: [
                [
                    new IPv4([
                        224,
                        0,
                        0,
                        0
                    ]),
                    4
                ]
            ],
            // RFC3927
            linkLocal: [
                [
                    new IPv4([
                        169,
                        254,
                        0,
                        0
                    ]),
                    16
                ]
            ],
            // RFC5735
            loopback: [
                [
                    new IPv4([
                        127,
                        0,
                        0,
                        0
                    ]),
                    8
                ]
            ],
            // RFC6598
            carrierGradeNat: [
                [
                    new IPv4([
                        100,
                        64,
                        0,
                        0
                    ]),
                    10
                ]
            ],
            // RFC1918
            'private': [
                [
                    new IPv4([
                        10,
                        0,
                        0,
                        0
                    ]),
                    8
                ],
                [
                    new IPv4([
                        172,
                        16,
                        0,
                        0
                    ]),
                    12
                ],
                [
                    new IPv4([
                        192,
                        168,
                        0,
                        0
                    ]),
                    16
                ]
            ],
            // Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
            reserved: [
                [
                    new IPv4([
                        192,
                        0,
                        0,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        0,
                        2,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        88,
                        99,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        198,
                        18,
                        0,
                        0
                    ]),
                    15
                ],
                [
                    new IPv4([
                        198,
                        51,
                        100,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        203,
                        0,
                        113,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        240,
                        0,
                        0,
                        0
                    ]),
                    4
                ]
            ],
            // RFC7534, RFC7535
            as112: [
                [
                    new IPv4([
                        192,
                        175,
                        48,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        31,
                        196,
                        0
                    ]),
                    24
                ]
            ],
            // RFC7450
            amt: [
                [
                    new IPv4([
                        192,
                        52,
                        193,
                        0
                    ]),
                    24
                ]
            ]
        };
        // The 'kind' method exists on both IPv4 and IPv6 classes.
        IPv4.prototype.kind = function() {
            return 'ipv4';
        };
        // Checks if this address matches other one within given CIDR range.
        IPv4.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === undefined) {
                ref = other;
                other = ref[0];
                cidrRange = ref[1];
            }
            if (other.kind() !== 'ipv4') {
                throw new Error('ipaddr: cannot match ipv4 address with non-ipv4 one');
            }
            return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        // returns a number of leading ones in IPv4 address, making sure that
        // the rest is a solid sequence of 0's (valid netmask)
        // returns either the CIDR length or null if mask is not valid
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            // non-zero encountered stop scanning for zeroes
            let stop = false;
            // number of zeroes in octet
            const zerotable = {
                0: 8,
                128: 7,
                192: 6,
                224: 5,
                240: 4,
                248: 3,
                252: 2,
                254: 1,
                255: 0
            };
            let i, octet, zeros;
            for(i = 3; i >= 0; i -= 1){
                octet = this.octets[i];
                if (octet in zerotable) {
                    zeros = zerotable[octet];
                    if (stop && zeros !== 0) {
                        return null;
                    }
                    if (zeros !== 8) {
                        stop = true;
                    }
                    cidr += zeros;
                } else {
                    return null;
                }
            }
            return 32 - cidr;
        };
        // Checks if the address corresponds to one of the special ranges.
        IPv4.prototype.range = function() {
            return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        // Returns an array of byte-sized values in network order (MSB first)
        IPv4.prototype.toByteArray = function() {
            return this.octets.slice(0);
        };
        // Converts this IPv4 address to an IPv4-mapped IPv6 address.
        IPv4.prototype.toIPv4MappedAddress = function() {
            return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
        };
        // Symmetrical method strictly for aligning with the IPv6 methods.
        IPv4.prototype.toNormalizedString = function() {
            return this.toString();
        };
        // Returns the address in convenient, decimal-dotted format.
        IPv4.prototype.toString = function() {
            return this.octets.join('.');
        };
        return IPv4;
    }();
    // A utility function to return broadcast address given the IPv4 interface and prefix length in CIDR notation
    ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        try {
            const cidr = this.parseCIDR(string);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while(i < 4){
                // Broadcast address is bitwise OR between ip interface and inverted mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error('ipaddr: the address does not have IPv4 CIDR format');
        }
    };
    // Checks if a given string is formatted like IPv4 address.
    ipaddr.IPv4.isIPv4 = function(string) {
        return this.parser(string) !== null;
    };
    // Checks if a given string is a valid IPv4 address.
    ipaddr.IPv4.isValid = function(string) {
        try {
            new this(this.parser(string));
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a valid IPv4 address in CIDR notation.
    ipaddr.IPv4.isValidCIDR = function(string) {
        try {
            this.parseCIDR(string);
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a full four-part IPv4 Address.
    ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
            return true;
        } else {
            return false;
        }
    };
    // A utility function to return network address given the IPv4 interface and prefix length in CIDR notation
    ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
            cidr = this.parseCIDR(string);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while(i < 4){
                // Network address is bitwise AND between ip interface and mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error('ipaddr: the address does not have IPv4 CIDR format');
        }
    };
    // Tries to parse and validate a string with IPv4 address.
    // Throws an error if it fails.
    ipaddr.IPv4.parse = function(string) {
        const parts = this.parser(string);
        if (parts === null) {
            throw new Error('ipaddr: string is not formatted like an IPv4 Address');
        }
        return new this(parts);
    };
    // Parses the string as an IPv4 Address with CIDR Notation.
    ipaddr.IPv4.parseCIDR = function(string) {
        let match;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
            const maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 32) {
                const parsed = [
                    this.parse(match[1]),
                    maskLength
                ];
                Object.defineProperty(parsed, 'toString', {
                    value: function() {
                        return this.join('/');
                    }
                });
                return parsed;
            }
        }
        throw new Error('ipaddr: string is not formatted like an IPv4 CIDR range');
    };
    // Classful variants (like a.b, where a is an octet, and b is a 24-bit
    // value representing last three octets; this corresponds to a class C
    // address) are omitted due to classless nature of modern Internet.
    ipaddr.IPv4.parser = function(string) {
        let match, part, value;
        // parseInt recognizes all that octal & hexadecimal weirdness for us
        if (match = string.match(ipv4Regexes.fourOctet)) {
            return function() {
                const ref = match.slice(1, 6);
                const results = [];
                for(let i = 0; i < ref.length; i++){
                    part = ref[i];
                    results.push(parseIntAuto(part));
                }
                return results;
            }();
        } else if (match = string.match(ipv4Regexes.longValue)) {
            value = parseIntAuto(match[1]);
            if (value > 0xffffffff || value < 0) {
                throw new Error('ipaddr: address outside defined range');
            }
            return (function() {
                const results = [];
                let shift;
                for(shift = 0; shift <= 24; shift += 8){
                    results.push(value >> shift & 0xff);
                }
                return results;
            })().reverse();
        } else if (match = string.match(ipv4Regexes.twoOctet)) {
            return function() {
                const ref = match.slice(1, 4);
                const results = [];
                value = parseIntAuto(ref[1]);
                if (value > 0xffffff || value < 0) {
                    throw new Error('ipaddr: address outside defined range');
                }
                results.push(parseIntAuto(ref[0]));
                results.push(value >> 16 & 0xff);
                results.push(value >> 8 & 0xff);
                results.push(value & 0xff);
                return results;
            }();
        } else if (match = string.match(ipv4Regexes.threeOctet)) {
            return function() {
                const ref = match.slice(1, 5);
                const results = [];
                value = parseIntAuto(ref[2]);
                if (value > 0xffff || value < 0) {
                    throw new Error('ipaddr: address outside defined range');
                }
                results.push(parseIntAuto(ref[0]));
                results.push(parseIntAuto(ref[1]));
                results.push(value >> 8 & 0xff);
                results.push(value & 0xff);
                return results;
            }();
        } else {
            return null;
        }
    };
    // A utility function to return subnet mask in IPv4 format given the prefix length
    ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
            throw new Error('ipaddr: invalid IPv4 prefix length');
        }
        const octets = [
            0,
            0,
            0,
            0
        ];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while(j < filledOctetCount){
            octets[j] = 255;
            j++;
        }
        if (filledOctetCount < 4) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
    };
    // An IPv6 address (RFC2460)
    ipaddr.IPv6 = function() {
        // Constructs an IPv6 address from an array of eight 16 - bit parts
        // or sixteen 8 - bit parts in network order(MSB first).
        // Throws an error if the input is invalid.
        function IPv6(parts, zoneId) {
            let i, part;
            if (parts.length === 16) {
                this.parts = [];
                for(i = 0; i <= 14; i += 2){
                    this.parts.push(parts[i] << 8 | parts[i + 1]);
                }
            } else if (parts.length === 8) {
                this.parts = parts;
            } else {
                throw new Error('ipaddr: ipv6 part count should be 8 or 16');
            }
            for(i = 0; i < this.parts.length; i++){
                part = this.parts[i];
                if (!(0 <= part && part <= 0xffff)) {
                    throw new Error('ipaddr: ipv6 part should fit in 16 bits');
                }
            }
            if (zoneId) {
                this.zoneId = zoneId;
            }
        }
        // Special IPv6 ranges
        IPv6.prototype.SpecialRanges = {
            // RFC4291, here and after
            unspecified: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                128
            ],
            linkLocal: [
                new IPv6([
                    0xfe80,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                10
            ],
            multicast: [
                new IPv6([
                    0xff00,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                8
            ],
            loopback: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]),
                128
            ],
            uniqueLocal: [
                new IPv6([
                    0xfc00,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                7
            ],
            ipv4Mapped: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0xffff,
                    0,
                    0
                ]),
                96
            ],
            // RFC6666
            discard: [
                new IPv6([
                    0x100,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                64
            ],
            // RFC6145
            rfc6145: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0xffff,
                    0,
                    0,
                    0
                ]),
                96
            ],
            // RFC6052
            rfc6052: [
                new IPv6([
                    0x64,
                    0xff9b,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                96
            ],
            // RFC3056
            '6to4': [
                new IPv6([
                    0x2002,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                16
            ],
            // RFC6052, RFC6146
            teredo: [
                new IPv6([
                    0x2001,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                32
            ],
            // RFC5180
            benchmarking: [
                new IPv6([
                    0x2001,
                    0x2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                48
            ],
            // RFC7450
            amt: [
                new IPv6([
                    0x2001,
                    0x3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                32
            ],
            as112v6: [
                [
                    new IPv6([
                        0x2001,
                        0x4,
                        0x112,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    48
                ],
                [
                    new IPv6([
                        0x2620,
                        0x4f,
                        0x8000,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    48
                ]
            ],
            deprecated: [
                new IPv6([
                    0x2001,
                    0x10,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            orchid2: [
                new IPv6([
                    0x2001,
                    0x20,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            droneRemoteIdProtocolEntityTags: [
                new IPv6([
                    0x2001,
                    0x30,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            reserved: [
                // RFC3849
                [
                    new IPv6([
                        0x2001,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    23
                ],
                // RFC2928
                [
                    new IPv6([
                        0x2001,
                        0xdb8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    32
                ]
            ]
        };
        // Checks if this address is an IPv4-mapped IPv6 address.
        IPv6.prototype.isIPv4MappedAddress = function() {
            return this.range() === 'ipv4Mapped';
        };
        // The 'kind' method exists on both IPv4 and IPv6 classes.
        IPv6.prototype.kind = function() {
            return 'ipv6';
        };
        // Checks if this address matches other one within given CIDR range.
        IPv6.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === undefined) {
                ref = other;
                other = ref[0];
                cidrRange = ref[1];
            }
            if (other.kind() !== 'ipv6') {
                throw new Error('ipaddr: cannot match ipv6 address with non-ipv6 one');
            }
            return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        // returns a number of leading ones in IPv6 address, making sure that
        // the rest is a solid sequence of 0's (valid netmask)
        // returns either the CIDR length or null if mask is not valid
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            // non-zero encountered stop scanning for zeroes
            let stop = false;
            // number of zeroes in octet
            const zerotable = {
                0: 16,
                32768: 15,
                49152: 14,
                57344: 13,
                61440: 12,
                63488: 11,
                64512: 10,
                65024: 9,
                65280: 8,
                65408: 7,
                65472: 6,
                65504: 5,
                65520: 4,
                65528: 3,
                65532: 2,
                65534: 1,
                65535: 0
            };
            let part, zeros;
            for(let i = 7; i >= 0; i -= 1){
                part = this.parts[i];
                if (part in zerotable) {
                    zeros = zerotable[part];
                    if (stop && zeros !== 0) {
                        return null;
                    }
                    if (zeros !== 16) {
                        stop = true;
                    }
                    cidr += zeros;
                } else {
                    return null;
                }
            }
            return 128 - cidr;
        };
        // Checks if the address corresponds to one of the special ranges.
        IPv6.prototype.range = function() {
            return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        // Returns an array of byte-sized values in network order (MSB first)
        IPv6.prototype.toByteArray = function() {
            let part;
            const bytes = [];
            const ref = this.parts;
            for(let i = 0; i < ref.length; i++){
                part = ref[i];
                bytes.push(part >> 8);
                bytes.push(part & 0xff);
            }
            return bytes;
        };
        // Returns the address in expanded format with all zeroes included, like
        // 2001:0db8:0008:0066:0000:0000:0000:0001
        IPv6.prototype.toFixedLengthString = function() {
            const addr = (function() {
                const results = [];
                for(let i = 0; i < this.parts.length; i++){
                    results.push(padPart(this.parts[i].toString(16), 4));
                }
                return results;
            }).call(this).join(':');
            let suffix = '';
            if (this.zoneId) {
                suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
        };
        // Converts this address to IPv4 address if it is an IPv4-mapped IPv6 address.
        // Throws an error otherwise.
        IPv6.prototype.toIPv4Address = function() {
            if (!this.isIPv4MappedAddress()) {
                throw new Error('ipaddr: trying to convert a generic ipv6 address to ipv4');
            }
            const ref = this.parts.slice(-2);
            const high = ref[0];
            const low = ref[1];
            return new ipaddr.IPv4([
                high >> 8,
                high & 0xff,
                low >> 8,
                low & 0xff
            ]);
        };
        // Returns the address in expanded format with all zeroes included, like
        // 2001:db8:8:66:0:0:0:1
        //
        // Deprecated: use toFixedLengthString() instead.
        IPv6.prototype.toNormalizedString = function() {
            const addr = (function() {
                const results = [];
                for(let i = 0; i < this.parts.length; i++){
                    results.push(this.parts[i].toString(16));
                }
                return results;
            }).call(this).join(':');
            let suffix = '';
            if (this.zoneId) {
                suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
        };
        // Returns the address in compact, human-readable format like
        // 2001:db8:8:66::1
        // in line with RFC 5952 (see https://tools.ietf.org/html/rfc5952#section-4)
        IPv6.prototype.toRFC5952String = function() {
            const regex = /((^|:)(0(:|$)){2,})/g;
            const string = this.toNormalizedString();
            let bestMatchIndex = 0;
            let bestMatchLength = -1;
            let match;
            while(match = regex.exec(string)){
                if (match[0].length > bestMatchLength) {
                    bestMatchIndex = match.index;
                    bestMatchLength = match[0].length;
                }
            }
            if (bestMatchLength < 0) {
                return string;
            }
            return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
        };
        // Returns the address in compact, human-readable format like
        // 2001:db8:8:66::1
        // Calls toRFC5952String under the hood.
        IPv6.prototype.toString = function() {
            return this.toRFC5952String();
        };
        return IPv6;
    }();
    // A utility function to return broadcast address given the IPv6 interface and prefix length in CIDR notation
    ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
        try {
            const cidr = this.parseCIDR(string);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while(i < 16){
                // Broadcast address is bitwise OR between ip interface and inverted mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
        }
    };
    // Checks if a given string is formatted like IPv6 address.
    ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
    };
    // Checks to see if string is a valid IPv6 Address
    ipaddr.IPv6.isValid = function(string) {
        // Since IPv6.isValid is always called first, this shortcut
        // provides a substantial performance gain.
        if (typeof string === 'string' && string.indexOf(':') === -1) {
            return false;
        }
        try {
            const addr = this.parser(string);
            new this(addr.parts, addr.zoneId);
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a valid IPv6 address in CIDR notation.
    ipaddr.IPv6.isValidCIDR = function(string) {
        // See note in IPv6.isValid
        if (typeof string === 'string' && string.indexOf(':') === -1) {
            return false;
        }
        try {
            this.parseCIDR(string);
            return true;
        } catch (e) {
            return false;
        }
    };
    // A utility function to return network address given the IPv6 interface and prefix length in CIDR notation
    ipaddr.IPv6.networkAddressFromCIDR = function(string) {
        let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
            cidr = this.parseCIDR(string);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while(i < 16){
                // Network address is bitwise AND between ip interface and mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
        }
    };
    // Tries to parse and validate a string with IPv6 address.
    // Throws an error if it fails.
    ipaddr.IPv6.parse = function(string) {
        const addr = this.parser(string);
        if (addr.parts === null) {
            throw new Error('ipaddr: string is not formatted like an IPv6 Address');
        }
        return new this(addr.parts, addr.zoneId);
    };
    ipaddr.IPv6.parseCIDR = function(string) {
        let maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
            maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 128) {
                parsed = [
                    this.parse(match[1]),
                    maskLength
                ];
                Object.defineProperty(parsed, 'toString', {
                    value: function() {
                        return this.join('/');
                    }
                });
                return parsed;
            }
        }
        throw new Error('ipaddr: string is not formatted like an IPv6 CIDR range');
    };
    // Parse an IPv6 address.
    ipaddr.IPv6.parser = function(string) {
        let addr, i, match, octet, octets, zoneId;
        if (match = string.match(ipv6Regexes.deprecatedTransitional)) {
            return this.parser(`::ffff:${match[1]}`);
        }
        if (ipv6Regexes.native.test(string)) {
            return expandIPv6(string, 8);
        }
        if (match = string.match(ipv6Regexes.transitional)) {
            zoneId = match[6] || '';
            addr = match[1];
            if (!match[1].endsWith('::')) {
                addr = addr.slice(0, -1);
            }
            addr = expandIPv6(addr + zoneId, 6);
            if (addr.parts) {
                octets = [
                    parseInt(match[2]),
                    parseInt(match[3]),
                    parseInt(match[4]),
                    parseInt(match[5])
                ];
                for(i = 0; i < octets.length; i++){
                    octet = octets[i];
                    if (!(0 <= octet && octet <= 255)) {
                        return null;
                    }
                }
                addr.parts.push(octets[0] << 8 | octets[1]);
                addr.parts.push(octets[2] << 8 | octets[3]);
                return {
                    parts: addr.parts,
                    zoneId: addr.zoneId
                };
            }
        }
        return null;
    };
    // A utility function to return subnet mask in IPv6 format given the prefix length
    ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 128) {
            throw new Error('ipaddr: invalid IPv6 prefix length');
        }
        const octets = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while(j < filledOctetCount){
            octets[j] = 255;
            j++;
        }
        if (filledOctetCount < 16) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
    };
    // Try to parse an array in network order (MSB first) for IPv4 and IPv6
    ipaddr.fromByteArray = function(bytes) {
        const length = bytes.length;
        if (length === 4) {
            return new ipaddr.IPv4(bytes);
        } else if (length === 16) {
            return new ipaddr.IPv6(bytes);
        } else {
            throw new Error('ipaddr: the binary input is neither an IPv6 nor IPv4 address');
        }
    };
    // Checks if the address is valid IP address
    ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
    };
    // Checks if the address is valid IP address in CIDR notation
    ipaddr.isValidCIDR = function(string) {
        return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
    };
    // Attempts to parse an IP Address, first through IPv6 then IPv4.
    // Throws an error if it could not be parsed.
    ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
            return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
            return ipaddr.IPv4.parse(string);
        } else {
            throw new Error('ipaddr: the address has neither IPv6 nor IPv4 format');
        }
    };
    // Attempt to parse CIDR notation, first through IPv6 then IPv4.
    // Throws an error if it could not be parsed.
    ipaddr.parseCIDR = function(string) {
        try {
            return ipaddr.IPv6.parseCIDR(string);
        } catch (e) {
            try {
                return ipaddr.IPv4.parseCIDR(string);
            } catch (e2) {
                throw new Error('ipaddr: the address has neither IPv6 nor IPv4 CIDR format');
            }
        }
    };
    // Parse an address and return plain IPv4 address if it is an IPv4-mapped address
    ipaddr.process = function(string) {
        const addr = this.parse(string);
        if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
            return addr.toIPv4Address();
        } else {
            return addr;
        }
    };
    // An utility function to ease named range matching. See examples below.
    // rangeList can contain both IPv4 and IPv6 subnet entries and will not throw errors
    // on matching IPv4 addresses to IPv6 ranges or vice versa.
    ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        let i, rangeName, rangeSubnets, subnet;
        if (defaultName === undefined || defaultName === null) {
            defaultName = 'unicast';
        }
        for(rangeName in rangeList){
            if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
                rangeSubnets = rangeList[rangeName];
                // ECMA5 Array.isArray isn't available everywhere
                if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
                    rangeSubnets = [
                        rangeSubnets
                    ];
                }
                for(i = 0; i < rangeSubnets.length; i++){
                    subnet = rangeSubnets[i];
                    if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
                        return rangeName;
                    }
                }
            }
        }
        return defaultName;
    };
    // Export for both the CommonJS and browser-like environment
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = ipaddr;
    } else {
        root.ipaddr = ipaddr;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/node_modules/image-size/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>imageSize,
    "disableTypes",
    ()=>disableTypes,
    "imageSize",
    ()=>imageSize,
    "types",
    ()=>types
]);
// lib/types/utils.ts
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length)=>decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length)=>input.slice(start, end).reduce((memo, i)=>memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset)=>new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0)=>getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0)=>getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0)=>getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0)=>{
    const view = getView(input, offset);
    return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0)=>getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0)=>getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0)=>getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian)=>getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
    readUInt16BE,
    readUInt16LE,
    readUInt32BE,
    readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
    const endian = isBigEndian ? "BE" : "LE";
    const methodName = `readUInt${bits}${endian}`;
    return methods[methodName](input, offset);
}
function readBox(input, offset) {
    if (input.length - offset < 4) return;
    const boxSize = readUInt32BE(input, offset);
    if (input.length - offset < boxSize) return;
    return {
        name: toUTF8String(input, 4 + offset, 8 + offset),
        offset,
        size: boxSize
    };
}
function findBox(input, boxName, currentOffset) {
    while(currentOffset < input.length){
        const box = readBox(input, currentOffset);
        if (!box) break;
        if (box.name === boxName) return box;
        currentOffset += box.size > 0 ? box.size : 8;
    }
}
// lib/types/bmp.ts
var BMP = {
    validate: (input)=>toUTF8String(input, 0, 2) === "BM",
    calculate: (input)=>({
            height: Math.abs(readInt32LE(input, 22)),
            width: readUInt32LE(input, 18)
        })
};
// lib/types/ico.ts
var TYPE_ICON = 1;
var SIZE_HEADER = 2 + 2 + 2;
var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
    const value = input[offset];
    return value === 0 ? 256 : value;
}
function getImageSize(input, imageIndex) {
    const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        height: getSizeFromOffset(input, offset + 1),
        width: getSizeFromOffset(input, offset)
    };
}
var ICO = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
    },
    calculate (input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize2 = getImageSize(input, 0);
        if (nbImages === 1) return imageSize2;
        const images = [];
        for(let imageIndex = 0; imageIndex < nbImages; imageIndex += 1){
            images.push(getImageSize(input, imageIndex));
        }
        return {
            width: imageSize2.width,
            height: imageSize2.height,
            images
        };
    }
};
// lib/types/cur.ts
var TYPE_CURSOR = 2;
var CUR = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
    },
    calculate: (input)=>ICO.calculate(input)
};
// lib/types/dds.ts
var DDS = {
    validate: (input)=>readUInt32LE(input, 0) === 542327876,
    calculate: (input)=>({
            height: readUInt32LE(input, 12),
            width: readUInt32LE(input, 16)
        })
};
// lib/types/gif.ts
var gifRegexp = /^GIF8[79]a/;
var GIF = {
    validate: (input)=>gifRegexp.test(toUTF8String(input, 0, 6)),
    calculate: (input)=>({
            height: readUInt16LE(input, 8),
            width: readUInt16LE(input, 6)
        })
};
// lib/types/heif.ts
var brandMap = {
    avif: "avif",
    mif1: "heif",
    msf1: "heif",
    // heif-sequence
    heic: "heic",
    heix: "heic",
    hevc: "heic",
    // heic-sequence
    hevx: "heic"
};
var HEIF = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "ftyp") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand in brandMap;
    },
    calculate (input) {
        const metaBox = findBox(input, "meta", 0);
        const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
        if (!ipcoBox) {
            throw new TypeError("Invalid HEIF, no ipco box found");
        }
        const type = toUTF8String(input, 8, 12);
        const images = [];
        let currentOffset = ipcoBox.offset + 8;
        while(currentOffset < ipcoBox.offset + ipcoBox.size){
            const ispeBox = findBox(input, "ispe", currentOffset);
            if (!ispeBox) break;
            const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
            const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
            const clapBox = findBox(input, "clap", currentOffset);
            let width = rawWidth;
            let height = rawHeight;
            if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
                const cropRight = readUInt32BE(input, clapBox.offset + 12);
                width = rawWidth - cropRight;
            }
            images.push({
                height,
                width
            });
            currentOffset = ispeBox.offset + ispeBox.size;
        }
        if (images.length === 0) {
            throw new TypeError("Invalid HEIF, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            type,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/icns.ts
var SIZE_HEADER2 = 4 + 4;
var FILE_LENGTH_OFFSET = 4;
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
    ICON: 32,
    "ICN#": 32,
    // m => 16 x 16
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024
};
function readImageHeader(input, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        toUTF8String(input, imageOffset, imageLengthOffset),
        readUInt32BE(input, imageLengthOffset)
    ];
}
function getImageSize2(type) {
    const size = ICON_TYPE_SIZE[type];
    return {
        width: size,
        height: size,
        type
    };
}
var ICNS = {
    validate: (input)=>toUTF8String(input, 0, 4) === "icns",
    calculate (input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER2;
        const images = [];
        while(imageOffset < fileLength && imageOffset < inputLength){
            const imageHeader = readImageHeader(input, imageOffset);
            const imageSize2 = getImageSize2(imageHeader[0]);
            images.push(imageSize2);
            imageOffset += imageHeader[1];
        }
        if (images.length === 0) {
            throw new TypeError("Invalid ICNS, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/j2c.ts
var J2C = {
    // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
    validate: (input)=>readUInt32BE(input, 0) === 4283432785,
    calculate: (input)=>({
            height: readUInt32BE(input, 12),
            width: readUInt32BE(input, 8)
        })
};
// lib/types/jp2.ts
var JP2 = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "jP  ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jp2 ";
    },
    calculate (input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
            return {
                height: readUInt32BE(input, ihdrBox.offset + 8),
                width: readUInt32BE(input, ihdrBox.offset + 12)
            };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
    }
};
// lib/types/jpg.ts
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var TIFF_BYTE_ALIGN_BYTES = 2;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
var NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
    return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
    return {
        height: readUInt16BE(input, index),
        width: readUInt16BE(input, index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    const idfOffset = 8;
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
    for(let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++){
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
        const end = start + IDF_ENTRY_BYTES;
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = readUInt(block, 16, 0, isBigEndian);
        if (tagNumber === 274) {
            const dataFormat = readUInt(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return readUInt(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(input, index) {
    const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
    const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateInput(input, index) {
    if (index > input.length) {
        throw new TypeError("Corrupt JPG, exceeded buffer limits");
    }
}
var JPG = {
    validate: (input)=>toHexString(input, 0, 2) === "ffd8",
    calculate (_input) {
        let input = _input.slice(4);
        let orientation;
        let next;
        while(input.length){
            const i = readUInt16BE(input, 0);
            validateInput(input, i);
            if (input[i] !== 255) {
                input = input.slice(1);
                continue;
            }
            if (isEXIF(input)) {
                orientation = validateExifBlock(input, i);
            }
            next = input[i + 1];
            if (next === 192 || next === 193 || next === 194) {
                const size = extractSize(input, i + 5);
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
    }
};
// lib/utils/bit-reader.ts
var BitReader = class {
    constructor(input, endianness){
        this.input = input;
        this.endianness = endianness;
        // Skip the first 16 bits (2 bytes) of signature
        this.byteOffset = 2;
        this.bitOffset = 0;
    }
    /** Reads a specified number of bits, and move the offset */ getBits(length = 1) {
        let result = 0;
        let bitsRead = 0;
        while(bitsRead < length){
            if (this.byteOffset >= this.input.length) {
                throw new Error("Reached end of input");
            }
            const currentByte = this.input[this.byteOffset];
            const bitsLeft = 8 - this.bitOffset;
            const bitsToRead = Math.min(length - bitsRead, bitsLeft);
            if (this.endianness === "little-endian") {
                const mask = (1 << bitsToRead) - 1;
                const bits = currentByte >> this.bitOffset & mask;
                result |= bits << bitsRead;
            } else {
                const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
                const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
                result = result << bitsToRead | bits;
            }
            bitsRead += bitsToRead;
            this.bitOffset += bitsToRead;
            if (this.bitOffset === 8) {
                this.byteOffset++;
                this.bitOffset = 0;
            }
        }
        return result;
    }
};
// lib/types/jxl-stream.ts
function calculateImageDimension(reader, isSmallImage) {
    if (isSmallImage) {
        return 8 * (1 + reader.getBits(5));
    }
    const sizeClass = reader.getBits(2);
    const extraBits = [
        9,
        13,
        18,
        30
    ][sizeClass];
    return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
    if (isSmallImage && widthMode === 0) {
        return 8 * (1 + reader.getBits(5));
    }
    if (widthMode === 0) {
        return calculateImageDimension(reader, false);
    }
    const aspectRatios = [
        1,
        1.2,
        4 / 3,
        1.5,
        16 / 9,
        5 / 4,
        2
    ];
    return Math.floor(height * aspectRatios[widthMode - 1]);
}
var JXLStream = {
    validate: (input)=>{
        return toHexString(input, 0, 2) === "ff0a";
    },
    calculate (input) {
        const reader = new BitReader(input, "little-endian");
        const isSmallImage = reader.getBits(1) === 1;
        const height = calculateImageDimension(reader, isSmallImage);
        const widthMode = reader.getBits(3);
        const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
        return {
            width,
            height
        };
    }
};
// lib/types/jxl.ts
function extractCodestream(input) {
    const jxlcBox = findBox(input, "jxlc", 0);
    if (jxlcBox) {
        return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
    }
    const partialStreams = extractPartialStreams(input);
    if (partialStreams.length > 0) {
        return concatenateCodestreams(partialStreams);
    }
    return void 0;
}
function extractPartialStreams(input) {
    const partialStreams = [];
    let offset = 0;
    while(offset < input.length){
        const jxlpBox = findBox(input, "jxlp", offset);
        if (!jxlpBox) break;
        partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
        offset = jxlpBox.offset + jxlpBox.size;
    }
    return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
    const totalLength = partialCodestreams.reduce((acc, curr)=>acc + curr.length, 0);
    const codestream = new Uint8Array(totalLength);
    let position = 0;
    for (const partial of partialCodestreams){
        codestream.set(partial, position);
        position += partial.length;
    }
    return codestream;
}
var JXL = {
    validate: (input)=>{
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "JXL ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jxl ";
    },
    calculate (input) {
        const codestream = extractCodestream(input);
        if (codestream) return JXLStream.calculate(codestream);
        throw new Error("No codestream found in JXL container");
    }
};
// lib/types/ktx.ts
var KTX = {
    validate: (input)=>{
        const signature = toUTF8String(input, 1, 7);
        return [
            "KTX 11",
            "KTX 20"
        ].includes(signature);
    },
    calculate: (input)=>{
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
            height: readUInt32LE(input, offset + 4),
            width: readUInt32LE(input, offset),
            type
        };
    }
};
// lib/types/png.ts
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
    validate (input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
            let chunkName = toUTF8String(input, 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = toUTF8String(input, 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError("Invalid PNG");
            }
            return true;
        }
        return false;
    },
    calculate (input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
            return {
                height: readUInt32BE(input, 36),
                width: readUInt32BE(input, 32)
            };
        }
        return {
            height: readUInt32BE(input, 20),
            width: readUInt32BE(input, 16)
        };
    }
};
// lib/types/pnm.ts
var PNMTypes = {
    P1: "pbm/ascii",
    P2: "pgm/ascii",
    P3: "ppm/ascii",
    P4: "pbm",
    P5: "pgm",
    P6: "ppm",
    P7: "pam",
    PF: "pfm"
};
var handlers = {
    default: (lines)=>{
        let dimensions = [];
        while(lines.length > 0){
            const line = lines.shift();
            if (line[0] === "#") {
                continue;
            }
            dimensions = line.split(" ");
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: Number.parseInt(dimensions[1], 10),
                width: Number.parseInt(dimensions[0], 10)
            };
        }
        throw new TypeError("Invalid PNM");
    },
    pam: (lines)=>{
        const size = {};
        while(lines.length > 0){
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(" ");
            if (key && value) {
                size[key.toLowerCase()] = Number.parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        throw new TypeError("Invalid PAM");
    }
};
var PNM = {
    validate: (input)=>toUTF8String(input, 0, 2) in PNMTypes,
    calculate (input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};
// lib/types/psd.ts
var PSD = {
    validate: (input)=>toUTF8String(input, 0, 4) === "8BPS",
    calculate: (input)=>({
            height: readUInt32BE(input, 14),
            width: readUInt32BE(input, 18)
        })
};
// lib/types/svg.ts
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return void 0;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(" ");
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio)
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width
    };
}
var SVG = {
    // Scan only the first kilo-byte to speed up the check on larger files
    validate: (input)=>svgReg.test(toUTF8String(input, 0, 1e3)),
    calculate (input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError("Invalid SVG");
    }
};
// lib/types/tga.ts
var TGA = {
    validate (input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
    },
    calculate (input) {
        return {
            height: readUInt16LE(input, 14),
            width: readUInt16LE(input, 12)
        };
    }
};
// lib/types/tiff.ts
var CONSTANTS = {
    TAG: {
        WIDTH: 256,
        HEIGHT: 257,
        COMPRESSION: 259
    },
    TYPE: {
        SHORT: 3,
        LONG: 4,
        LONG8: 16
    },
    ENTRY_SIZE: {
        STANDARD: 12,
        BIG: 20
    },
    COUNT_SIZE: {
        STANDARD: 2,
        BIG: 8
    }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
    const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
    const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
    return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
    switch(type){
        case CONSTANTS.TYPE.SHORT:
            return readUInt(input, 16, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG:
            return readUInt(input, 32, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG8:
            {
                const value = Number(readUInt64(input, offset, isBigEndian));
                if (value > Number.MAX_SAFE_INTEGER) {
                    throw new TypeError("Value too large");
                }
                return value;
            }
        default:
            return 0;
    }
}
function nextTag(input, isBigTiff) {
    const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
    if (input.length > entrySize) {
        return input.slice(entrySize);
    }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
    const tags = {};
    let temp = input;
    while(temp?.length){
        const code = readUInt(temp, 16, 0, isBigEndian);
        const type = readUInt(temp, 16, 2, isBigEndian);
        const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
        if (code === 0) break;
        if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
            const valueOffset = isBigTiff ? 12 : 8;
            tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
        }
        temp = nextTag(temp, isBigTiff);
    }
    return tags;
}
function determineFormat(input) {
    const signature = toUTF8String(input, 0, 2);
    const version = readUInt(input, 16, 2, signature === "MM");
    return {
        isBigEndian: signature === "MM",
        isBigTiff: version === 43
    };
}
function validateBigTIFFHeader(input, isBigEndian) {
    const byteSize = readUInt(input, 16, 4, isBigEndian);
    const reserved = readUInt(input, 16, 6, isBigEndian);
    if (byteSize !== 8 || reserved !== 0) {
        throw new TypeError("Invalid BigTIFF header");
    }
}
var signatures = /* @__PURE__ */ new Set([
    "49492a00",
    // Little Endian
    "4d4d002a",
    // Big Endian
    "49492b00",
    // BigTIFF Little Endian
    "4d4d002b"
]);
var TIFF = {
    validate: (input)=>{
        const signature = toHexString(input, 0, 4);
        return signatures.has(signature);
    },
    calculate (input) {
        const format = determineFormat(input);
        if (format.isBigTiff) {
            validateBigTIFFHeader(input, format.isBigEndian);
        }
        const ifdBuffer = readIFD(input, format);
        const tags = extractTags(ifdBuffer, format);
        const info = {
            height: tags[CONSTANTS.TAG.HEIGHT],
            width: tags[CONSTANTS.TAG.WIDTH],
            type: format.isBigTiff ? "bigtiff" : "tiff"
        };
        if (tags[CONSTANTS.TAG.COMPRESSION]) {
            info.compression = tags[CONSTANTS.TAG.COMPRESSION];
        }
        if (!info.width || !info.height) {
            throw new TypeError("Invalid Tiff. Missing tags");
        }
        return info;
    }
};
// lib/types/webp.ts
function calculateExtended(input) {
    return {
        height: 1 + readUInt24LE(input, 7),
        width: 1 + readUInt24LE(input, 4)
    };
}
function calculateLossless(input) {
    return {
        height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
        width: 1 + ((input[2] & 63) << 8 | input[1])
    };
}
function calculateLossy(input) {
    return {
        height: readInt16LE(input, 8) & 16383,
        width: readInt16LE(input, 6) & 16383
    };
}
var WEBP = {
    validate (input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
    },
    calculate (_input) {
        const chunkHeader = toUTF8String(_input, 12, 16);
        const input = _input.slice(20, 30);
        if (chunkHeader === "VP8X") {
            const extendedHeader = input[0];
            const validStart = (extendedHeader & 192) === 0;
            const validEnd = (extendedHeader & 1) === 0;
            if (validStart && validEnd) {
                return calculateExtended(input);
            }
            throw new TypeError("Invalid WebP");
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
            return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
            return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
    }
};
// lib/types/index.ts
var typeHandlers = /* @__PURE__ */ new Map([
    [
        "bmp",
        BMP
    ],
    [
        "cur",
        CUR
    ],
    [
        "dds",
        DDS
    ],
    [
        "gif",
        GIF
    ],
    [
        "heif",
        HEIF
    ],
    [
        "icns",
        ICNS
    ],
    [
        "ico",
        ICO
    ],
    [
        "j2c",
        J2C
    ],
    [
        "jp2",
        JP2
    ],
    [
        "jpg",
        JPG
    ],
    [
        "jxl",
        JXL
    ],
    [
        "jxl-stream",
        JXLStream
    ],
    [
        "ktx",
        KTX
    ],
    [
        "png",
        PNG
    ],
    [
        "pnm",
        PNM
    ],
    [
        "psd",
        PSD
    ],
    [
        "svg",
        SVG
    ],
    [
        "tga",
        TGA
    ],
    [
        "tiff",
        TIFF
    ],
    [
        "webp",
        WEBP
    ]
]);
var types = Array.from(typeHandlers.keys());
// lib/detector.ts
var firstBytes = /* @__PURE__ */ new Map([
    [
        0,
        "heif"
    ],
    [
        56,
        "psd"
    ],
    [
        66,
        "bmp"
    ],
    [
        68,
        "dds"
    ],
    [
        71,
        "gif"
    ],
    [
        73,
        "tiff"
    ],
    [
        77,
        "tiff"
    ],
    [
        82,
        "webp"
    ],
    [
        105,
        "icns"
    ],
    [
        137,
        "png"
    ],
    [
        255,
        "jpg"
    ]
]);
function detector(input) {
    const byte = input[0];
    const type = firstBytes.get(byte);
    if (type && typeHandlers.get(type).validate(input)) {
        return type;
    }
    return types.find((type2)=>typeHandlers.get(type2).validate(input));
}
// lib/lookup.ts
var globalOptions = {
    disabledTypes: []
};
function imageSize(input) {
    const type = detector(input);
    if (typeof type !== "undefined") {
        if (globalOptions.disabledTypes.indexOf(type) > -1) {
            throw new TypeError(`disabled file type: ${type}`);
        }
        const size = typeHandlers.get(type).calculate(input);
        if (size !== void 0) {
            size.type = size.type ?? type;
            if (size.images && size.images.length > 1) {
                const largestImage = size.images.reduce((largest, current)=>{
                    return current.width * current.height > largest.width * largest.height ? current : largest;
                }, size.images[0]);
                size.width = largestImage.width;
                size.height = largestImage.height;
            }
            return size;
        }
    }
    throw new TypeError(`unsupported file type: ${type}`);
}
var disableTypes = (types2)=>{
    globalOptions.disabledTypes = types2;
};
;
}),
"[project]/node_modules/image-size/dist/fromFile.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageSizeFromFile",
    ()=>imageSizeFromFile,
    "setConcurrency",
    ()=>setConcurrency
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
// lib/fromFile.ts
// lib/types/utils.ts
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length)=>decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length)=>input.slice(start, end).reduce((memo, i)=>memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset)=>new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0)=>getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0)=>getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0)=>getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0)=>{
    const view = getView(input, offset);
    return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0)=>getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0)=>getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0)=>getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian)=>getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
    readUInt16BE,
    readUInt16LE,
    readUInt32BE,
    readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
    const endian = isBigEndian ? "BE" : "LE";
    const methodName = `readUInt${bits}${endian}`;
    return methods[methodName](input, offset);
}
function readBox(input, offset) {
    if (input.length - offset < 4) return;
    const boxSize = readUInt32BE(input, offset);
    if (input.length - offset < boxSize) return;
    return {
        name: toUTF8String(input, 4 + offset, 8 + offset),
        offset,
        size: boxSize
    };
}
function findBox(input, boxName, currentOffset) {
    while(currentOffset < input.length){
        const box = readBox(input, currentOffset);
        if (!box) break;
        if (box.name === boxName) return box;
        currentOffset += box.size > 0 ? box.size : 8;
    }
}
// lib/types/bmp.ts
var BMP = {
    validate: (input)=>toUTF8String(input, 0, 2) === "BM",
    calculate: (input)=>({
            height: Math.abs(readInt32LE(input, 22)),
            width: readUInt32LE(input, 18)
        })
};
// lib/types/ico.ts
var TYPE_ICON = 1;
var SIZE_HEADER = 2 + 2 + 2;
var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
    const value = input[offset];
    return value === 0 ? 256 : value;
}
function getImageSize(input, imageIndex) {
    const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        height: getSizeFromOffset(input, offset + 1),
        width: getSizeFromOffset(input, offset)
    };
}
var ICO = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
    },
    calculate (input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize2 = getImageSize(input, 0);
        if (nbImages === 1) return imageSize2;
        const images = [];
        for(let imageIndex = 0; imageIndex < nbImages; imageIndex += 1){
            images.push(getImageSize(input, imageIndex));
        }
        return {
            width: imageSize2.width,
            height: imageSize2.height,
            images
        };
    }
};
// lib/types/cur.ts
var TYPE_CURSOR = 2;
var CUR = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
    },
    calculate: (input)=>ICO.calculate(input)
};
// lib/types/dds.ts
var DDS = {
    validate: (input)=>readUInt32LE(input, 0) === 542327876,
    calculate: (input)=>({
            height: readUInt32LE(input, 12),
            width: readUInt32LE(input, 16)
        })
};
// lib/types/gif.ts
var gifRegexp = /^GIF8[79]a/;
var GIF = {
    validate: (input)=>gifRegexp.test(toUTF8String(input, 0, 6)),
    calculate: (input)=>({
            height: readUInt16LE(input, 8),
            width: readUInt16LE(input, 6)
        })
};
// lib/types/heif.ts
var brandMap = {
    avif: "avif",
    mif1: "heif",
    msf1: "heif",
    // heif-sequence
    heic: "heic",
    heix: "heic",
    hevc: "heic",
    // heic-sequence
    hevx: "heic"
};
var HEIF = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "ftyp") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand in brandMap;
    },
    calculate (input) {
        const metaBox = findBox(input, "meta", 0);
        const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
        if (!ipcoBox) {
            throw new TypeError("Invalid HEIF, no ipco box found");
        }
        const type = toUTF8String(input, 8, 12);
        const images = [];
        let currentOffset = ipcoBox.offset + 8;
        while(currentOffset < ipcoBox.offset + ipcoBox.size){
            const ispeBox = findBox(input, "ispe", currentOffset);
            if (!ispeBox) break;
            const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
            const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
            const clapBox = findBox(input, "clap", currentOffset);
            let width = rawWidth;
            let height = rawHeight;
            if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
                const cropRight = readUInt32BE(input, clapBox.offset + 12);
                width = rawWidth - cropRight;
            }
            images.push({
                height,
                width
            });
            currentOffset = ispeBox.offset + ispeBox.size;
        }
        if (images.length === 0) {
            throw new TypeError("Invalid HEIF, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            type,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/icns.ts
var SIZE_HEADER2 = 4 + 4;
var FILE_LENGTH_OFFSET = 4;
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
    ICON: 32,
    "ICN#": 32,
    // m => 16 x 16
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024
};
function readImageHeader(input, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        toUTF8String(input, imageOffset, imageLengthOffset),
        readUInt32BE(input, imageLengthOffset)
    ];
}
function getImageSize2(type) {
    const size = ICON_TYPE_SIZE[type];
    return {
        width: size,
        height: size,
        type
    };
}
var ICNS = {
    validate: (input)=>toUTF8String(input, 0, 4) === "icns",
    calculate (input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER2;
        const images = [];
        while(imageOffset < fileLength && imageOffset < inputLength){
            const imageHeader = readImageHeader(input, imageOffset);
            const imageSize2 = getImageSize2(imageHeader[0]);
            images.push(imageSize2);
            imageOffset += imageHeader[1];
        }
        if (images.length === 0) {
            throw new TypeError("Invalid ICNS, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/j2c.ts
var J2C = {
    // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
    validate: (input)=>readUInt32BE(input, 0) === 4283432785,
    calculate: (input)=>({
            height: readUInt32BE(input, 12),
            width: readUInt32BE(input, 8)
        })
};
// lib/types/jp2.ts
var JP2 = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "jP  ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jp2 ";
    },
    calculate (input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
            return {
                height: readUInt32BE(input, ihdrBox.offset + 8),
                width: readUInt32BE(input, ihdrBox.offset + 12)
            };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
    }
};
// lib/types/jpg.ts
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var TIFF_BYTE_ALIGN_BYTES = 2;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
var NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
    return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
    return {
        height: readUInt16BE(input, index),
        width: readUInt16BE(input, index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    const idfOffset = 8;
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
    for(let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++){
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
        const end = start + IDF_ENTRY_BYTES;
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = readUInt(block, 16, 0, isBigEndian);
        if (tagNumber === 274) {
            const dataFormat = readUInt(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return readUInt(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(input, index) {
    const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
    const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateInput(input, index) {
    if (index > input.length) {
        throw new TypeError("Corrupt JPG, exceeded buffer limits");
    }
}
var JPG = {
    validate: (input)=>toHexString(input, 0, 2) === "ffd8",
    calculate (_input) {
        let input = _input.slice(4);
        let orientation;
        let next;
        while(input.length){
            const i = readUInt16BE(input, 0);
            validateInput(input, i);
            if (input[i] !== 255) {
                input = input.slice(1);
                continue;
            }
            if (isEXIF(input)) {
                orientation = validateExifBlock(input, i);
            }
            next = input[i + 1];
            if (next === 192 || next === 193 || next === 194) {
                const size = extractSize(input, i + 5);
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
    }
};
// lib/utils/bit-reader.ts
var BitReader = class {
    constructor(input, endianness){
        this.input = input;
        this.endianness = endianness;
        // Skip the first 16 bits (2 bytes) of signature
        this.byteOffset = 2;
        this.bitOffset = 0;
    }
    /** Reads a specified number of bits, and move the offset */ getBits(length = 1) {
        let result = 0;
        let bitsRead = 0;
        while(bitsRead < length){
            if (this.byteOffset >= this.input.length) {
                throw new Error("Reached end of input");
            }
            const currentByte = this.input[this.byteOffset];
            const bitsLeft = 8 - this.bitOffset;
            const bitsToRead = Math.min(length - bitsRead, bitsLeft);
            if (this.endianness === "little-endian") {
                const mask = (1 << bitsToRead) - 1;
                const bits = currentByte >> this.bitOffset & mask;
                result |= bits << bitsRead;
            } else {
                const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
                const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
                result = result << bitsToRead | bits;
            }
            bitsRead += bitsToRead;
            this.bitOffset += bitsToRead;
            if (this.bitOffset === 8) {
                this.byteOffset++;
                this.bitOffset = 0;
            }
        }
        return result;
    }
};
// lib/types/jxl-stream.ts
function calculateImageDimension(reader, isSmallImage) {
    if (isSmallImage) {
        return 8 * (1 + reader.getBits(5));
    }
    const sizeClass = reader.getBits(2);
    const extraBits = [
        9,
        13,
        18,
        30
    ][sizeClass];
    return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
    if (isSmallImage && widthMode === 0) {
        return 8 * (1 + reader.getBits(5));
    }
    if (widthMode === 0) {
        return calculateImageDimension(reader, false);
    }
    const aspectRatios = [
        1,
        1.2,
        4 / 3,
        1.5,
        16 / 9,
        5 / 4,
        2
    ];
    return Math.floor(height * aspectRatios[widthMode - 1]);
}
var JXLStream = {
    validate: (input)=>{
        return toHexString(input, 0, 2) === "ff0a";
    },
    calculate (input) {
        const reader = new BitReader(input, "little-endian");
        const isSmallImage = reader.getBits(1) === 1;
        const height = calculateImageDimension(reader, isSmallImage);
        const widthMode = reader.getBits(3);
        const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
        return {
            width,
            height
        };
    }
};
// lib/types/jxl.ts
function extractCodestream(input) {
    const jxlcBox = findBox(input, "jxlc", 0);
    if (jxlcBox) {
        return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
    }
    const partialStreams = extractPartialStreams(input);
    if (partialStreams.length > 0) {
        return concatenateCodestreams(partialStreams);
    }
    return void 0;
}
function extractPartialStreams(input) {
    const partialStreams = [];
    let offset = 0;
    while(offset < input.length){
        const jxlpBox = findBox(input, "jxlp", offset);
        if (!jxlpBox) break;
        partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
        offset = jxlpBox.offset + jxlpBox.size;
    }
    return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
    const totalLength = partialCodestreams.reduce((acc, curr)=>acc + curr.length, 0);
    const codestream = new Uint8Array(totalLength);
    let position = 0;
    for (const partial of partialCodestreams){
        codestream.set(partial, position);
        position += partial.length;
    }
    return codestream;
}
var JXL = {
    validate: (input)=>{
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "JXL ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jxl ";
    },
    calculate (input) {
        const codestream = extractCodestream(input);
        if (codestream) return JXLStream.calculate(codestream);
        throw new Error("No codestream found in JXL container");
    }
};
// lib/types/ktx.ts
var KTX = {
    validate: (input)=>{
        const signature = toUTF8String(input, 1, 7);
        return [
            "KTX 11",
            "KTX 20"
        ].includes(signature);
    },
    calculate: (input)=>{
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
            height: readUInt32LE(input, offset + 4),
            width: readUInt32LE(input, offset),
            type
        };
    }
};
// lib/types/png.ts
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
    validate (input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
            let chunkName = toUTF8String(input, 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = toUTF8String(input, 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError("Invalid PNG");
            }
            return true;
        }
        return false;
    },
    calculate (input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
            return {
                height: readUInt32BE(input, 36),
                width: readUInt32BE(input, 32)
            };
        }
        return {
            height: readUInt32BE(input, 20),
            width: readUInt32BE(input, 16)
        };
    }
};
// lib/types/pnm.ts
var PNMTypes = {
    P1: "pbm/ascii",
    P2: "pgm/ascii",
    P3: "ppm/ascii",
    P4: "pbm",
    P5: "pgm",
    P6: "ppm",
    P7: "pam",
    PF: "pfm"
};
var handlers = {
    default: (lines)=>{
        let dimensions = [];
        while(lines.length > 0){
            const line = lines.shift();
            if (line[0] === "#") {
                continue;
            }
            dimensions = line.split(" ");
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: Number.parseInt(dimensions[1], 10),
                width: Number.parseInt(dimensions[0], 10)
            };
        }
        throw new TypeError("Invalid PNM");
    },
    pam: (lines)=>{
        const size = {};
        while(lines.length > 0){
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(" ");
            if (key && value) {
                size[key.toLowerCase()] = Number.parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        throw new TypeError("Invalid PAM");
    }
};
var PNM = {
    validate: (input)=>toUTF8String(input, 0, 2) in PNMTypes,
    calculate (input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};
// lib/types/psd.ts
var PSD = {
    validate: (input)=>toUTF8String(input, 0, 4) === "8BPS",
    calculate: (input)=>({
            height: readUInt32BE(input, 14),
            width: readUInt32BE(input, 18)
        })
};
// lib/types/svg.ts
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return void 0;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(" ");
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio)
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width
    };
}
var SVG = {
    // Scan only the first kilo-byte to speed up the check on larger files
    validate: (input)=>svgReg.test(toUTF8String(input, 0, 1e3)),
    calculate (input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError("Invalid SVG");
    }
};
// lib/types/tga.ts
var TGA = {
    validate (input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
    },
    calculate (input) {
        return {
            height: readUInt16LE(input, 14),
            width: readUInt16LE(input, 12)
        };
    }
};
// lib/types/tiff.ts
var CONSTANTS = {
    TAG: {
        WIDTH: 256,
        HEIGHT: 257,
        COMPRESSION: 259
    },
    TYPE: {
        SHORT: 3,
        LONG: 4,
        LONG8: 16
    },
    ENTRY_SIZE: {
        STANDARD: 12,
        BIG: 20
    },
    COUNT_SIZE: {
        STANDARD: 2,
        BIG: 8
    }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
    const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
    const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
    return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
    switch(type){
        case CONSTANTS.TYPE.SHORT:
            return readUInt(input, 16, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG:
            return readUInt(input, 32, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG8:
            {
                const value = Number(readUInt64(input, offset, isBigEndian));
                if (value > Number.MAX_SAFE_INTEGER) {
                    throw new TypeError("Value too large");
                }
                return value;
            }
        default:
            return 0;
    }
}
function nextTag(input, isBigTiff) {
    const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
    if (input.length > entrySize) {
        return input.slice(entrySize);
    }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
    const tags = {};
    let temp = input;
    while(temp?.length){
        const code = readUInt(temp, 16, 0, isBigEndian);
        const type = readUInt(temp, 16, 2, isBigEndian);
        const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
        if (code === 0) break;
        if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
            const valueOffset = isBigTiff ? 12 : 8;
            tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
        }
        temp = nextTag(temp, isBigTiff);
    }
    return tags;
}
function determineFormat(input) {
    const signature = toUTF8String(input, 0, 2);
    const version = readUInt(input, 16, 2, signature === "MM");
    return {
        isBigEndian: signature === "MM",
        isBigTiff: version === 43
    };
}
function validateBigTIFFHeader(input, isBigEndian) {
    const byteSize = readUInt(input, 16, 4, isBigEndian);
    const reserved = readUInt(input, 16, 6, isBigEndian);
    if (byteSize !== 8 || reserved !== 0) {
        throw new TypeError("Invalid BigTIFF header");
    }
}
var signatures = /* @__PURE__ */ new Set([
    "49492a00",
    // Little Endian
    "4d4d002a",
    // Big Endian
    "49492b00",
    // BigTIFF Little Endian
    "4d4d002b"
]);
var TIFF = {
    validate: (input)=>{
        const signature = toHexString(input, 0, 4);
        return signatures.has(signature);
    },
    calculate (input) {
        const format = determineFormat(input);
        if (format.isBigTiff) {
            validateBigTIFFHeader(input, format.isBigEndian);
        }
        const ifdBuffer = readIFD(input, format);
        const tags = extractTags(ifdBuffer, format);
        const info = {
            height: tags[CONSTANTS.TAG.HEIGHT],
            width: tags[CONSTANTS.TAG.WIDTH],
            type: format.isBigTiff ? "bigtiff" : "tiff"
        };
        if (tags[CONSTANTS.TAG.COMPRESSION]) {
            info.compression = tags[CONSTANTS.TAG.COMPRESSION];
        }
        if (!info.width || !info.height) {
            throw new TypeError("Invalid Tiff. Missing tags");
        }
        return info;
    }
};
// lib/types/webp.ts
function calculateExtended(input) {
    return {
        height: 1 + readUInt24LE(input, 7),
        width: 1 + readUInt24LE(input, 4)
    };
}
function calculateLossless(input) {
    return {
        height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
        width: 1 + ((input[2] & 63) << 8 | input[1])
    };
}
function calculateLossy(input) {
    return {
        height: readInt16LE(input, 8) & 16383,
        width: readInt16LE(input, 6) & 16383
    };
}
var WEBP = {
    validate (input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
    },
    calculate (_input) {
        const chunkHeader = toUTF8String(_input, 12, 16);
        const input = _input.slice(20, 30);
        if (chunkHeader === "VP8X") {
            const extendedHeader = input[0];
            const validStart = (extendedHeader & 192) === 0;
            const validEnd = (extendedHeader & 1) === 0;
            if (validStart && validEnd) {
                return calculateExtended(input);
            }
            throw new TypeError("Invalid WebP");
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
            return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
            return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
    }
};
// lib/types/index.ts
var typeHandlers = /* @__PURE__ */ new Map([
    [
        "bmp",
        BMP
    ],
    [
        "cur",
        CUR
    ],
    [
        "dds",
        DDS
    ],
    [
        "gif",
        GIF
    ],
    [
        "heif",
        HEIF
    ],
    [
        "icns",
        ICNS
    ],
    [
        "ico",
        ICO
    ],
    [
        "j2c",
        J2C
    ],
    [
        "jp2",
        JP2
    ],
    [
        "jpg",
        JPG
    ],
    [
        "jxl",
        JXL
    ],
    [
        "jxl-stream",
        JXLStream
    ],
    [
        "ktx",
        KTX
    ],
    [
        "png",
        PNG
    ],
    [
        "pnm",
        PNM
    ],
    [
        "psd",
        PSD
    ],
    [
        "svg",
        SVG
    ],
    [
        "tga",
        TGA
    ],
    [
        "tiff",
        TIFF
    ],
    [
        "webp",
        WEBP
    ]
]);
var types = Array.from(typeHandlers.keys());
// lib/detector.ts
var firstBytes = /* @__PURE__ */ new Map([
    [
        0,
        "heif"
    ],
    [
        56,
        "psd"
    ],
    [
        66,
        "bmp"
    ],
    [
        68,
        "dds"
    ],
    [
        71,
        "gif"
    ],
    [
        73,
        "tiff"
    ],
    [
        77,
        "tiff"
    ],
    [
        82,
        "webp"
    ],
    [
        105,
        "icns"
    ],
    [
        137,
        "png"
    ],
    [
        255,
        "jpg"
    ]
]);
function detector(input) {
    const byte = input[0];
    const type = firstBytes.get(byte);
    if (type && typeHandlers.get(type).validate(input)) {
        return type;
    }
    return types.find((type2)=>typeHandlers.get(type2).validate(input));
}
// lib/lookup.ts
var globalOptions = {
    disabledTypes: []
};
function imageSize(input) {
    const type = detector(input);
    if (typeof type !== "undefined") {
        if (globalOptions.disabledTypes.indexOf(type) > -1) {
            throw new TypeError(`disabled file type: ${type}`);
        }
        const size = typeHandlers.get(type).calculate(input);
        if (size !== void 0) {
            size.type = size.type ?? type;
            if (size.images && size.images.length > 1) {
                const largestImage = size.images.reduce((largest, current)=>{
                    return current.width * current.height > largest.width * largest.height ? current : largest;
                }, size.images[0]);
                size.width = largestImage.width;
                size.height = largestImage.height;
            }
            return size;
        }
    }
    throw new TypeError(`unsupported file type: ${type}`);
}
// lib/fromFile.ts
var MaxInputSize = 512 * 1024;
var queue = [];
var concurrency = 100;
var setConcurrency = (c)=>{
    concurrency = c;
};
var processQueue = async ()=>{
    const jobs = queue.splice(0, concurrency);
    const promises2 = jobs.map(async ({ filePath, resolve: resolve2, reject })=>{
        let handle;
        try {
            handle = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].open(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["resolve"](filePath), "r");
        } catch (err) {
            return reject(err);
        }
        try {
            const { size } = await handle.stat();
            if (size <= 0) {
                throw new Error("Empty file");
            }
            const inputSize = Math.min(size, MaxInputSize);
            const input = new Uint8Array(inputSize);
            await handle.read(input, 0, inputSize, 0);
            resolve2(imageSize(input));
        } catch (err) {
            reject(err);
        } finally{
            await handle.close();
        }
    });
    await Promise.allSettled(promises2);
    if (queue.length) setTimeout(processQueue, 100);
};
var imageSizeFromFile = async (filePath)=>new Promise((resolve2, reject)=>{
        queue.push({
            filePath,
            resolve: resolve2,
            reject
        });
        processQueue();
    });
;
}),
"[project]/node_modules/croner/dist/croner.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cron",
    ()=>R,
    "CronDate",
    ()=>f,
    "CronPattern",
    ()=>d,
    "scheduledJobs",
    ()=>y
]);
function h(n, t, e, r, s, i, a, l) {
    return h.fromTZ(h.tp(n, t, e, r, s, i, a), l);
}
h.fromTZISO = (n, t, e)=>h.fromTZ(k(n, t), e);
h.fromTZ = function(n, t) {
    let e = new Date(Date.UTC(n.y, n.m - 1, n.d, n.h, n.i, n.s)), r = D(n.tz, e), s = new Date(e.getTime() - r), i = D(n.tz, s);
    if (i - r === 0) return s;
    {
        let a = new Date(e.getTime() - i), l = D(n.tz, a);
        if (l - i === 0) return a;
        if (!t && l - i > 0) return a;
        if (t) throw new Error("Invalid date passed to fromTZ()");
        return s;
    }
};
h.toTZ = function(n, t) {
    let e = n.toLocaleString("en-US", {
        timeZone: t
    }).replace(/[\u202f]/, " "), r = new Date(e);
    return {
        y: r.getFullYear(),
        m: r.getMonth() + 1,
        d: r.getDate(),
        h: r.getHours(),
        i: r.getMinutes(),
        s: r.getSeconds(),
        tz: t
    };
};
h.tp = (n, t, e, r, s, i, a)=>({
        y: n,
        m: t,
        d: e,
        h: r,
        i: s,
        s: i,
        tz: a
    });
function D(n, t = new Date) {
    let e = t.toLocaleString("en-US", {
        timeZone: n,
        timeZoneName: "shortOffset"
    }).split(" ").slice(-1)[0], r = t.toLocaleString("en-US").replace(/[\u202f]/, " ");
    return Date.parse(`${r} GMT`) - Date.parse(`${r} ${e}`);
}
function k(n, t) {
    let e = new Date(Date.parse(n));
    if (isNaN(e)) throw new Error("minitz: Invalid ISO8601 passed to parser.");
    let r = n.substring(9);
    return n.includes("Z") || r.includes("-") || r.includes("+") ? h.tp(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), "Etc/UTC") : h.tp(e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), t);
}
h.minitz = h;
var b = 32, p = 31 | b, v = [
    1,
    2,
    4,
    8,
    16
], d = class {
    pattern;
    timezone;
    second;
    minute;
    hour;
    day;
    month;
    dayOfWeek;
    lastDayOfMonth;
    starDOM;
    starDOW;
    constructor(t, e){
        this.pattern = t, this.timezone = e, this.second = Array(60).fill(0), this.minute = Array(60).fill(0), this.hour = Array(24).fill(0), this.day = Array(31).fill(0), this.month = Array(12).fill(0), this.dayOfWeek = Array(7).fill(0), this.lastDayOfMonth = !1, this.starDOM = !1, this.starDOW = !1, this.parse();
    }
    parse() {
        if (!(typeof this.pattern == "string" || this.pattern instanceof String)) throw new TypeError("CronPattern: Pattern has to be of type string.");
        this.pattern.indexOf("@") >= 0 && (this.pattern = this.handleNicknames(this.pattern).trim());
        let t = this.pattern.replace(/\s+/g, " ").split(" ");
        if (t.length < 5 || t.length > 6) throw new TypeError("CronPattern: invalid configuration format ('" + this.pattern + "'), exactly five or six space separated parts are required.");
        if (t.length === 5 && t.unshift("0"), t[3].indexOf("L") >= 0 && (t[3] = t[3].replace("L", ""), this.lastDayOfMonth = !0), t[3] == "*" && (this.starDOM = !0), t[4].length >= 3 && (t[4] = this.replaceAlphaMonths(t[4])), t[5].length >= 3 && (t[5] = this.replaceAlphaDays(t[5])), t[5] == "*" && (this.starDOW = !0), this.pattern.indexOf("?") >= 0) {
            let e = new f(new Date, this.timezone).getDate(!0);
            t[0] = t[0].replace("?", e.getSeconds().toString()), t[1] = t[1].replace("?", e.getMinutes().toString()), t[2] = t[2].replace("?", e.getHours().toString()), this.starDOM || (t[3] = t[3].replace("?", e.getDate().toString())), t[4] = t[4].replace("?", (e.getMonth() + 1).toString()), this.starDOW || (t[5] = t[5].replace("?", e.getDay().toString()));
        }
        this.throwAtIllegalCharacters(t), this.partToArray("second", t[0], 0, 1), this.partToArray("minute", t[1], 0, 1), this.partToArray("hour", t[2], 0, 1), this.partToArray("day", t[3], -1, 1), this.partToArray("month", t[4], -1, 1), this.partToArray("dayOfWeek", t[5], 0, p), this.dayOfWeek[7] && (this.dayOfWeek[0] = this.dayOfWeek[7]);
    }
    partToArray(t, e, r, s) {
        let i = this[t], a = t === "day" && this.lastDayOfMonth;
        if (e === "" && !a) throw new TypeError("CronPattern: configuration entry " + t + " (" + e + ") is empty, check for trailing spaces.");
        if (e === "*") return i.fill(s);
        let l = e.split(",");
        if (l.length > 1) for(let o = 0; o < l.length; o++)this.partToArray(t, l[o], r, s);
        else e.indexOf("-") !== -1 && e.indexOf("/") !== -1 ? this.handleRangeWithStepping(e, t, r, s) : e.indexOf("-") !== -1 ? this.handleRange(e, t, r, s) : e.indexOf("/") !== -1 ? this.handleStepping(e, t, r, s) : e !== "" && this.handleNumber(e, t, r, s);
    }
    throwAtIllegalCharacters(t) {
        for(let e = 0; e < t.length; e++)if ((e === 5 ? /[^/*0-9,\-#L]+/ : /[^/*0-9,-]+/).test(t[e])) throw new TypeError("CronPattern: configuration entry " + e + " (" + t[e] + ") contains illegal characters.");
    }
    handleNumber(t, e, r, s) {
        let i = this.extractNth(t, e), a = parseInt(i[0], 10) + r;
        if (isNaN(a)) throw new TypeError("CronPattern: " + e + " is not a number: '" + t + "'");
        this.setPart(e, a, i[1] || s);
    }
    setPart(t, e, r) {
        if (!Object.prototype.hasOwnProperty.call(this, t)) throw new TypeError("CronPattern: Invalid part specified: " + t);
        if (t === "dayOfWeek") {
            if (e === 7 && (e = 0), e < 0 || e > 6) throw new RangeError("CronPattern: Invalid value for dayOfWeek: " + e);
            this.setNthWeekdayOfMonth(e, r);
            return;
        }
        if (t === "second" || t === "minute") {
            if (e < 0 || e >= 60) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "hour") {
            if (e < 0 || e >= 24) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "day") {
            if (e < 0 || e >= 31) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "month" && (e < 0 || e >= 12)) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        this[t][e] = r;
    }
    handleRangeWithStepping(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].match(/^(\d+)-(\d+)\/(\d+)$/);
        if (a === null) throw new TypeError("CronPattern: Syntax error, illegal range with stepping: '" + t + "'");
        let [, l, o, u] = a, c = parseInt(l, 10) + r, w = parseInt(o, 10) + r, C = parseInt(u, 10);
        if (isNaN(c)) throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
        if (isNaN(w)) throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
        if (isNaN(C)) throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
        if (C === 0) throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
        if (C > this[e].length) throw new TypeError("CronPattern: Syntax error, steps cannot be greater than maximum value of part (" + this[e].length + ")");
        if (c > w) throw new TypeError("CronPattern: From value is larger than to value: '" + t + "'");
        for(let T = c; T <= w; T += C)this.setPart(e, T, i[1] || s);
    }
    extractNth(t, e) {
        let r = t, s;
        if (r.includes("#")) {
            if (e !== "dayOfWeek") throw new Error("CronPattern: nth (#) only allowed in day-of-week field");
            s = r.split("#")[1], r = r.split("#")[0];
        }
        return [
            r,
            s
        ];
    }
    handleRange(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].split("-");
        if (a.length !== 2) throw new TypeError("CronPattern: Syntax error, illegal range: '" + t + "'");
        let l = parseInt(a[0], 10) + r, o = parseInt(a[1], 10) + r;
        if (isNaN(l)) throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
        if (isNaN(o)) throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
        if (l > o) throw new TypeError("CronPattern: From value is larger than to value: '" + t + "'");
        for(let u = l; u <= o; u++)this.setPart(e, u, i[1] || s);
    }
    handleStepping(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].split("/");
        if (a.length !== 2) throw new TypeError("CronPattern: Syntax error, illegal stepping: '" + t + "'");
        a[0] === "" && (a[0] = "*");
        let l = 0;
        a[0] !== "*" && (l = parseInt(a[0], 10) + r);
        let o = parseInt(a[1], 10);
        if (isNaN(o)) throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
        if (o === 0) throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
        if (o > this[e].length) throw new TypeError("CronPattern: Syntax error, max steps for part is (" + this[e].length + ")");
        for(let u = l; u < this[e].length; u += o)this.setPart(e, u, i[1] || s);
    }
    replaceAlphaDays(t) {
        return t.replace(/-sun/gi, "-7").replace(/sun/gi, "0").replace(/mon/gi, "1").replace(/tue/gi, "2").replace(/wed/gi, "3").replace(/thu/gi, "4").replace(/fri/gi, "5").replace(/sat/gi, "6");
    }
    replaceAlphaMonths(t) {
        return t.replace(/jan/gi, "1").replace(/feb/gi, "2").replace(/mar/gi, "3").replace(/apr/gi, "4").replace(/may/gi, "5").replace(/jun/gi, "6").replace(/jul/gi, "7").replace(/aug/gi, "8").replace(/sep/gi, "9").replace(/oct/gi, "10").replace(/nov/gi, "11").replace(/dec/gi, "12");
    }
    handleNicknames(t) {
        let e = t.trim().toLowerCase();
        return e === "@yearly" || e === "@annually" ? "0 0 1 1 *" : e === "@monthly" ? "0 0 1 * *" : e === "@weekly" ? "0 0 * * 0" : e === "@daily" ? "0 0 * * *" : e === "@hourly" ? "0 * * * *" : t;
    }
    setNthWeekdayOfMonth(t, e) {
        if (typeof e != "number" && e === "L") this.dayOfWeek[t] = this.dayOfWeek[t] | b;
        else if (e === p) this.dayOfWeek[t] = p;
        else if (e < 6 && e > 0) this.dayOfWeek[t] = this.dayOfWeek[t] | v[e - 1];
        else throw new TypeError(`CronPattern: nth weekday out of range, should be 1-5 or L. Value: ${e}, Type: ${typeof e}`);
    }
};
var O = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
], m = [
    [
        "month",
        "year",
        0
    ],
    [
        "day",
        "month",
        -1
    ],
    [
        "hour",
        "day",
        0
    ],
    [
        "minute",
        "hour",
        0
    ],
    [
        "second",
        "minute",
        0
    ]
], f = class n {
    tz;
    ms;
    second;
    minute;
    hour;
    day;
    month;
    year;
    constructor(t, e){
        if (this.tz = e, t && t instanceof Date) if (!isNaN(t)) this.fromDate(t);
        else throw new TypeError("CronDate: Invalid date passed to CronDate constructor");
        else if (t === void 0) this.fromDate(new Date);
        else if (t && typeof t == "string") this.fromString(t);
        else if (t instanceof n) this.fromCronDate(t);
        else throw new TypeError("CronDate: Invalid type (" + typeof t + ") passed to CronDate constructor");
    }
    isNthWeekdayOfMonth(t, e, r, s) {
        let a = new Date(Date.UTC(t, e, r)).getUTCDay(), l = 0;
        for(let o = 1; o <= r; o++)new Date(Date.UTC(t, e, o)).getUTCDay() === a && l++;
        if (s & p && v[l - 1] & s) return !0;
        if (s & b) {
            let o = new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
            for(let u = r + 1; u <= o; u++)if (new Date(Date.UTC(t, e, u)).getUTCDay() === a) return !1;
            return !0;
        }
        return !1;
    }
    fromDate(t) {
        if (this.tz !== void 0) if (typeof this.tz == "number") this.ms = t.getUTCMilliseconds(), this.second = t.getUTCSeconds(), this.minute = t.getUTCMinutes() + this.tz, this.hour = t.getUTCHours(), this.day = t.getUTCDate(), this.month = t.getUTCMonth(), this.year = t.getUTCFullYear(), this.apply();
        else {
            let e = h.toTZ(t, this.tz);
            this.ms = t.getMilliseconds(), this.second = e.s, this.minute = e.i, this.hour = e.h, this.day = e.d, this.month = e.m - 1, this.year = e.y;
        }
        else this.ms = t.getMilliseconds(), this.second = t.getSeconds(), this.minute = t.getMinutes(), this.hour = t.getHours(), this.day = t.getDate(), this.month = t.getMonth(), this.year = t.getFullYear();
    }
    fromCronDate(t) {
        this.tz = t.tz, this.year = t.year, this.month = t.month, this.day = t.day, this.hour = t.hour, this.minute = t.minute, this.second = t.second, this.ms = t.ms;
    }
    apply() {
        if (this.month > 11 || this.day > O[this.month] || this.hour > 59 || this.minute > 59 || this.second > 59 || this.hour < 0 || this.minute < 0 || this.second < 0) {
            let t = new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms));
            return this.ms = t.getUTCMilliseconds(), this.second = t.getUTCSeconds(), this.minute = t.getUTCMinutes(), this.hour = t.getUTCHours(), this.day = t.getUTCDate(), this.month = t.getUTCMonth(), this.year = t.getUTCFullYear(), !0;
        } else return !1;
    }
    fromString(t) {
        if (typeof this.tz == "number") {
            let e = h.fromTZISO(t);
            this.ms = e.getUTCMilliseconds(), this.second = e.getUTCSeconds(), this.minute = e.getUTCMinutes(), this.hour = e.getUTCHours(), this.day = e.getUTCDate(), this.month = e.getUTCMonth(), this.year = e.getUTCFullYear(), this.apply();
        } else return this.fromDate(h.fromTZISO(t, this.tz));
    }
    findNext(t, e, r, s) {
        let i = this[e], a;
        r.lastDayOfMonth && (this.month !== 1 ? a = O[this.month] : a = new Date(Date.UTC(this.year, this.month + 1, 0, 0, 0, 0, 0)).getUTCDate());
        let l = !r.starDOW && e == "day" ? new Date(Date.UTC(this.year, this.month, 1, 0, 0, 0, 0)).getUTCDay() : void 0;
        for(let o = this[e] + s; o < r[e].length; o++){
            let u = r[e][o];
            if (e === "day" && r.lastDayOfMonth && o - s == a && (u = 1), e === "day" && !r.starDOW) {
                let c = r.dayOfWeek[(l + (o - s - 1)) % 7];
                if (c && c & p) c = this.isNthWeekdayOfMonth(this.year, this.month, o - s, c) ? 1 : 0;
                else if (c) throw new Error(`CronDate: Invalid value for dayOfWeek encountered. ${c}`);
                t.legacyMode && !r.starDOM ? u = u || c : u = u && c;
            }
            if (u) return this[e] = o - s, i !== this[e] ? 2 : 1;
        }
        return 3;
    }
    recurse(t, e, r) {
        let s = this.findNext(e, m[r][0], t, m[r][2]);
        if (s > 1) {
            let i = r + 1;
            for(; i < m.length;)this[m[i][0]] = -m[i][2], i++;
            if (s === 3) return this[m[r][1]]++, this[m[r][0]] = -m[r][2], this.apply(), this.recurse(t, e, 0);
            if (this.apply()) return this.recurse(t, e, r - 1);
        }
        return r += 1, r >= m.length ? this : this.year >= 3e3 ? null : this.recurse(t, e, r);
    }
    increment(t, e, r) {
        return this.second += e.interval !== void 0 && e.interval > 1 && r ? e.interval : 1, this.ms = 0, this.apply(), this.recurse(t, e, 0);
    }
    getDate(t) {
        return t || this.tz === void 0 ? new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms) : typeof this.tz == "number" ? new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute - this.tz, this.second, this.ms)) : h.fromTZ(h.tp(this.year, this.month + 1, this.day, this.hour, this.minute, this.second, this.tz), !1);
    }
    getTime() {
        return this.getDate(!1).getTime();
    }
};
function N(n) {
    if (n === void 0 && (n = {}), delete n.name, n.legacyMode = n.legacyMode === void 0 ? !0 : n.legacyMode, n.paused = n.paused === void 0 ? !1 : n.paused, n.maxRuns = n.maxRuns === void 0 ? 1 / 0 : n.maxRuns, n.catch = n.catch === void 0 ? !1 : n.catch, n.interval = n.interval === void 0 ? 0 : parseInt(n.interval.toString(), 10), n.utcOffset = n.utcOffset === void 0 ? void 0 : parseInt(n.utcOffset.toString(), 10), n.unref = n.unref === void 0 ? !1 : n.unref, n.startAt && (n.startAt = new f(n.startAt, n.timezone)), n.stopAt && (n.stopAt = new f(n.stopAt, n.timezone)), n.interval !== null) {
        if (isNaN(n.interval)) throw new Error("CronOptions: Supplied value for interval is not a number");
        if (n.interval < 0) throw new Error("CronOptions: Supplied value for interval can not be negative");
    }
    if (n.utcOffset !== void 0) {
        if (isNaN(n.utcOffset)) throw new Error("CronOptions: Invalid value passed for utcOffset, should be number representing minutes offset from UTC.");
        if (n.utcOffset < -870 || n.utcOffset > 870) throw new Error("CronOptions: utcOffset out of bounds.");
        if (n.utcOffset !== void 0 && n.timezone) throw new Error("CronOptions: Combining 'utcOffset' with 'timezone' is not allowed.");
    }
    if (n.unref !== !0 && n.unref !== !1) throw new Error("CronOptions: Unref should be either true, false or undefined(false).");
    return n;
}
function g(n) {
    return Object.prototype.toString.call(n) === "[object Function]" || typeof n == "function" || n instanceof Function;
}
function S(n) {
    return g(n);
}
function P(n) {
    typeof Deno < "u" && typeof Deno.unrefTimer < "u" ? Deno.unrefTimer(n) : n && typeof n.unref < "u" && n.unref();
}
var _ = 30 * 1e3, y = [], R = class {
    name;
    options;
    _states;
    fn;
    constructor(t, e, r){
        let s, i;
        if (g(e)) i = e;
        else if (typeof e == "object") s = e;
        else if (e !== void 0) throw new Error("Cron: Invalid argument passed for optionsIn. Should be one of function, or object (options).");
        if (g(r)) i = r;
        else if (typeof r == "object") s = r;
        else if (r !== void 0) throw new Error("Cron: Invalid argument passed for funcIn. Should be one of function, or object (options).");
        if (this.name = s?.name, this.options = N(s), this._states = {
            kill: !1,
            blocking: !1,
            previousRun: void 0,
            currentRun: void 0,
            once: void 0,
            currentTimeout: void 0,
            maxRuns: s ? s.maxRuns : void 0,
            paused: s ? s.paused : !1,
            pattern: new d("* * * * *")
        }, t && (t instanceof Date || typeof t == "string" && t.indexOf(":") > 0) ? this._states.once = new f(t, this.options.timezone || this.options.utcOffset) : this._states.pattern = new d(t, this.options.timezone), this.name) {
            if (y.find((l)=>l.name === this.name)) throw new Error("Cron: Tried to initialize new named job '" + this.name + "', but name already taken.");
            y.push(this);
        }
        return i !== void 0 && S(i) && (this.fn = i, this.schedule()), this;
    }
    nextRun(t) {
        let e = this._next(t);
        return e ? e.getDate(!1) : null;
    }
    nextRuns(t, e) {
        this._states.maxRuns !== void 0 && t > this._states.maxRuns && (t = this._states.maxRuns);
        let r = [], s = e || this._states.currentRun || void 0;
        for(; t-- && (s = this.nextRun(s));)r.push(s);
        return r;
    }
    getPattern() {
        return this._states.pattern ? this._states.pattern.pattern : void 0;
    }
    isRunning() {
        let t = this.nextRun(this._states.currentRun), e = !this._states.paused, r = this.fn !== void 0, s = !this._states.kill;
        return e && r && s && t !== null;
    }
    isStopped() {
        return this._states.kill;
    }
    isBusy() {
        return this._states.blocking;
    }
    currentRun() {
        return this._states.currentRun ? this._states.currentRun.getDate() : null;
    }
    previousRun() {
        return this._states.previousRun ? this._states.previousRun.getDate() : null;
    }
    msToNext(t) {
        let e = this._next(t);
        return e ? t instanceof f || t instanceof Date ? e.getTime() - t.getTime() : e.getTime() - new f(t).getTime() : null;
    }
    stop() {
        this._states.kill = !0, this._states.currentTimeout && clearTimeout(this._states.currentTimeout);
        let t = y.indexOf(this);
        t >= 0 && y.splice(t, 1);
    }
    pause() {
        return this._states.paused = !0, !this._states.kill;
    }
    resume() {
        return this._states.paused = !1, !this._states.kill;
    }
    schedule(t) {
        if (t && this.fn) throw new Error("Cron: It is not allowed to schedule two functions using the same Croner instance.");
        t && (this.fn = t);
        let e = this.msToNext(), r = this.nextRun(this._states.currentRun);
        return e == null || isNaN(e) || r === null ? this : (e > _ && (e = _), this._states.currentTimeout = setTimeout(()=>this._checkTrigger(r), e), this._states.currentTimeout && this.options.unref && P(this._states.currentTimeout), this);
    }
    async _trigger(t) {
        if (this._states.blocking = !0, this._states.currentRun = new f(void 0, this.options.timezone || this.options.utcOffset), this.options.catch) try {
            this.fn !== void 0 && await this.fn(this, this.options.context);
        } catch (e) {
            g(this.options.catch) && this.options.catch(e, this);
        }
        else this.fn !== void 0 && await this.fn(this, this.options.context);
        this._states.previousRun = new f(t, this.options.timezone || this.options.utcOffset), this._states.blocking = !1;
    }
    async trigger() {
        await this._trigger();
    }
    runsLeft() {
        return this._states.maxRuns;
    }
    _checkTrigger(t) {
        let e = new Date, r = !this._states.paused && e.getTime() >= t.getTime(), s = this._states.blocking && this.options.protect;
        r && !s ? (this._states.maxRuns !== void 0 && this._states.maxRuns--, this._trigger()) : r && s && g(this.options.protect) && setTimeout(()=>this.options.protect(this), 0), this.schedule();
    }
    _next(t) {
        let e = !!(t || this._states.currentRun), r = !1;
        !t && this.options.startAt && this.options.interval && ([t, e] = this._calculatePreviousRun(t, e), r = !t), t = new f(t, this.options.timezone || this.options.utcOffset), this.options.startAt && t && t.getTime() < this.options.startAt.getTime() && (t = this.options.startAt);
        let s = this._states.once || new f(t, this.options.timezone || this.options.utcOffset);
        return !r && s !== this._states.once && (s = s.increment(this._states.pattern, this.options, e)), this._states.once && this._states.once.getTime() <= t.getTime() || s === null || this._states.maxRuns !== void 0 && this._states.maxRuns <= 0 || this._states.kill || this.options.stopAt && s.getTime() >= this.options.stopAt.getTime() ? null : s;
    }
    _calculatePreviousRun(t, e) {
        let r = new f(void 0, this.options.timezone || this.options.utcOffset), s = t;
        if (this.options.startAt.getTime() <= r.getTime()) {
            s = this.options.startAt;
            let i = s.getTime() + this.options.interval * 1e3;
            for(; i <= r.getTime();)s = new f(s, this.options.timezone || this.options.utcOffset).increment(this._states.pattern, this.options, !0), i = s.getTime() + this.options.interval * 1e3;
            e = !0;
        }
        return s === null && (s = void 0), [
            s,
            e
        ];
    }
};
;
}),
"[externals]/pino [external] (pino, cjs, [project]/node_modules/pino)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("pino-28069d5257187539", () => require("pino-28069d5257187539"));

module.exports = mod;
}),
"[externals]/pino-pretty [external] (pino-pretty, cjs, [project]/node_modules/pino-pretty)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("pino-pretty-c8f40b43d4a6ea57", () => require("pino-pretty-c8f40b43d4a6ea57"));

module.exports = mod;
}),
"[project]/node_modules/ci-info/vendors.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"name":"Agola CI","constant":"AGOLA","env":"AGOLA_GIT_REF","pr":"AGOLA_PULL_REQUEST_ID"},{"name":"Alpic","constant":"ALPIC","env":"ALPIC_HOST"},{"name":"Appcircle","constant":"APPCIRCLE","env":"AC_APPCIRCLE","pr":{"env":"AC_GIT_PR","ne":"false"}},{"name":"AppVeyor","constant":"APPVEYOR","env":"APPVEYOR","pr":"APPVEYOR_PULL_REQUEST_NUMBER"},{"name":"AWS CodeBuild","constant":"CODEBUILD","env":"CODEBUILD_BUILD_ARN","pr":{"env":"CODEBUILD_WEBHOOK_EVENT","any":["PULL_REQUEST_CREATED","PULL_REQUEST_UPDATED","PULL_REQUEST_REOPENED"]}},{"name":"Azure Pipelines","constant":"AZURE_PIPELINES","env":"TF_BUILD","pr":{"BUILD_REASON":"PullRequest"}},{"name":"Bamboo","constant":"BAMBOO","env":"bamboo_planKey"},{"name":"Bitbucket Pipelines","constant":"BITBUCKET","env":"BITBUCKET_COMMIT","pr":"BITBUCKET_PR_ID"},{"name":"Bitrise","constant":"BITRISE","env":"BITRISE_IO","pr":"BITRISE_PULL_REQUEST"},{"name":"Buddy","constant":"BUDDY","env":"BUDDY_WORKSPACE_ID","pr":"BUDDY_EXECUTION_PULL_REQUEST_ID"},{"name":"Buildkite","constant":"BUILDKITE","env":"BUILDKITE","pr":{"env":"BUILDKITE_PULL_REQUEST","ne":"false"}},{"name":"CircleCI","constant":"CIRCLE","env":"CIRCLECI","pr":"CIRCLE_PULL_REQUEST"},{"name":"Cirrus CI","constant":"CIRRUS","env":"CIRRUS_CI","pr":"CIRRUS_PR"},{"name":"Cloudflare Pages","constant":"CLOUDFLARE_PAGES","env":"CF_PAGES"},{"name":"Cloudflare Workers","constant":"CLOUDFLARE_WORKERS","env":"WORKERS_CI"},{"name":"Codefresh","constant":"CODEFRESH","env":"CF_BUILD_ID","pr":{"any":["CF_PULL_REQUEST_NUMBER","CF_PULL_REQUEST_ID"]}},{"name":"Codemagic","constant":"CODEMAGIC","env":"CM_BUILD_ID","pr":"CM_PULL_REQUEST"},{"name":"Codeship","constant":"CODESHIP","env":{"CI_NAME":"codeship"}},{"name":"Drone","constant":"DRONE","env":"DRONE","pr":{"DRONE_BUILD_EVENT":"pull_request"}},{"name":"dsari","constant":"DSARI","env":"DSARI"},{"name":"Earthly","constant":"EARTHLY","env":"EARTHLY_CI"},{"name":"Expo Application Services","constant":"EAS","env":"EAS_BUILD"},{"name":"Gerrit","constant":"GERRIT","env":"GERRIT_PROJECT"},{"name":"Gitea Actions","constant":"GITEA_ACTIONS","env":"GITEA_ACTIONS"},{"name":"GitHub Actions","constant":"GITHUB_ACTIONS","env":"GITHUB_ACTIONS","pr":{"GITHUB_EVENT_NAME":"pull_request"}},{"name":"GitLab CI","constant":"GITLAB","env":"GITLAB_CI","pr":"CI_MERGE_REQUEST_ID"},{"name":"GoCD","constant":"GOCD","env":"GO_PIPELINE_LABEL"},{"name":"Google Cloud Build","constant":"GOOGLE_CLOUD_BUILD","env":"BUILDER_OUTPUT"},{"name":"Harness CI","constant":"HARNESS","env":"HARNESS_BUILD_ID"},{"name":"Heroku","constant":"HEROKU","env":{"env":"NODE","includes":"/app/.heroku/node/bin/node"}},{"name":"Hudson","constant":"HUDSON","env":"HUDSON_URL"},{"name":"Jenkins","constant":"JENKINS","env":["JENKINS_URL","BUILD_ID"],"pr":{"any":["ghprbPullId","CHANGE_ID"]}},{"name":"LayerCI","constant":"LAYERCI","env":"LAYERCI","pr":"LAYERCI_PULL_REQUEST"},{"name":"Magnum CI","constant":"MAGNUM","env":"MAGNUM"},{"name":"Netlify CI","constant":"NETLIFY","env":"NETLIFY","pr":{"env":"PULL_REQUEST","ne":"false"}},{"name":"Nevercode","constant":"NEVERCODE","env":"NEVERCODE","pr":{"env":"NEVERCODE_PULL_REQUEST","ne":"false"}},{"name":"Prow","constant":"PROW","env":"PROW_JOB_ID"},{"name":"ReleaseHub","constant":"RELEASEHUB","env":"RELEASE_BUILD_ID"},{"name":"Render","constant":"RENDER","env":"RENDER","pr":{"IS_PULL_REQUEST":"true"}},{"name":"Sail CI","constant":"SAIL","env":"SAILCI","pr":"SAIL_PULL_REQUEST_NUMBER"},{"name":"Screwdriver","constant":"SCREWDRIVER","env":"SCREWDRIVER","pr":{"env":"SD_PULL_REQUEST","ne":"false"}},{"name":"Semaphore","constant":"SEMAPHORE","env":"SEMAPHORE","pr":"PULL_REQUEST_NUMBER"},{"name":"Sourcehut","constant":"SOURCEHUT","env":{"CI_NAME":"sourcehut"}},{"name":"Strider CD","constant":"STRIDER","env":"STRIDER"},{"name":"TaskCluster","constant":"TASKCLUSTER","env":["TASK_ID","RUN_ID"]},{"name":"TeamCity","constant":"TEAMCITY","env":"TEAMCITY_VERSION"},{"name":"Travis CI","constant":"TRAVIS","env":"TRAVIS","pr":{"env":"TRAVIS_PULL_REQUEST","ne":"false"}},{"name":"Vela","constant":"VELA","env":"VELA","pr":{"VELA_PULL_REQUEST":"1"}},{"name":"Vercel","constant":"VERCEL","env":{"any":["NOW_BUILDER","VERCEL"]},"pr":"VERCEL_GIT_PULL_REQUEST_ID"},{"name":"Visual Studio App Center","constant":"APPCENTER","env":"APPCENTER_BUILD_ID"},{"name":"Woodpecker","constant":"WOODPECKER","env":{"CI":"woodpecker"},"pr":{"CI_BUILD_EVENT":"pull_request"}},{"name":"Xcode Cloud","constant":"XCODE_CLOUD","env":"CI_XCODE_PROJECT","pr":"CI_PULL_REQUEST_NUMBER"},{"name":"Xcode Server","constant":"XCODE_SERVER","env":"XCS"}]);}),
"[project]/node_modules/ci-info/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const vendors = __turbopack_context__.r("[project]/node_modules/ci-info/vendors.json (json)");
const env = process.env;
// Used for testing only
Object.defineProperty(exports, '_vendors', {
    value: vendors.map(function(v) {
        return v.constant;
    })
});
exports.name = null;
exports.isPR = null;
exports.id = null;
if (env.CI !== 'false') {
    vendors.forEach(function(vendor) {
        const envs = Array.isArray(vendor.env) ? vendor.env : [
            vendor.env
        ];
        const isCI = envs.every(function(obj) {
            return checkEnv(obj);
        });
        exports[vendor.constant] = isCI;
        if (!isCI) {
            return;
        }
        exports.name = vendor.name;
        exports.isPR = checkPR(vendor);
        exports.id = vendor.constant;
    });
}
exports.isCI = !!(env.CI !== 'false' && // Bypass all checks if CI env is explicitly set to 'false'
(env.BUILD_ID || // Jenkins, Cloudbees
env.BUILD_NUMBER || // Jenkins, TeamCity
env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari, Cloudflare Pages/Workers
env.CI_APP_ID || // Appflow
env.CI_BUILD_ID || // Appflow
env.CI_BUILD_NUMBER || // Appflow
env.CI_NAME || // Codeship and others
env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
env.RUN_ID || // TaskCluster, dsari
exports.name || false));
function checkEnv(obj) {
    // "env": "CIRRUS"
    if (typeof obj === 'string') return !!env[obj];
    // "env": { "env": "NODE", "includes": "/app/.heroku/node/bin/node" }
    if ('env' in obj) {
        // Currently there are no other types, uncomment when there are
        // if ('includes' in obj) {
        return env[obj.env] && env[obj.env].includes(obj.includes);
    // }
    }
    if ('any' in obj) {
        return obj.any.some(function(k) {
            return !!env[k];
        });
    }
    return Object.keys(obj).every(function(k) {
        return env[k] === obj[k];
    });
}
function checkPR(vendor) {
    switch(typeof vendor.pr){
        case 'string':
            // "pr": "CIRRUS_PR"
            return !!env[vendor.pr];
        case 'object':
            if ('env' in vendor.pr) {
                if ('any' in vendor.pr) {
                    // "pr": { "env": "CODEBUILD_WEBHOOK_EVENT", "any": ["PULL_REQUEST_CREATED", "PULL_REQUEST_UPDATED"] }
                    return vendor.pr.any.some(function(key) {
                        return env[vendor.pr.env] === key;
                    });
                } else {
                    // "pr": { "env": "BUILDKITE_PULL_REQUEST", "ne": "false" }
                    return vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne;
                }
            } else if ('any' in vendor.pr) {
                // "pr": { "any": ["ghprbPullId", "CHANGE_ID"] }
                return vendor.pr.any.some(function(key) {
                    return !!env[key];
                });
            } else {
                // "pr": { "DRONE_BUILD_EVENT": "pull_request" }
                return checkEnv(vendor.pr);
            }
        default:
            // PR detection not supported for this vendor
            return null;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05f00f11._.js.map