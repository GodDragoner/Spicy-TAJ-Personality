const Thread = java.lang.Thread;
const ServerSocket = java.net.ServerSocket;
const PrintWriter = java.io.PrintWriter;
const InputStreamReader = java.io.InputStreamReader;
const BufferedReader = java.io.BufferedReader;
const FileInputStream = java.io.FileInputStream;
const ByteArray = Java.type("byte[]");
let STATUS_OK = 200;
let CHARSET = java.nio.charset.StandardCharsets.UTF_8;


function createHTTPServer(port, saveFilePath) {
    let server = com.sun.net.httpserver.HttpServer.create(new java.net.InetSocketAddress('0.0.0.0', port), 1);

    let MyHandler = Java.type("com.sun.net.httpserver.HttpHandler");

    let MyHandlerInstace = Java.extend(MyHandler, {
        handle: function (HttpExchange) {
            try {
                let headers = HttpExchange.getResponseHeaders();
                let requestMethod = HttpExchange.getRequestMethod().toUpperCase();
                let url = HttpExchange.getRequestURI();

                let respond = false;
                let close = false;

                sendDebugMessage('Received ' + requestMethod + " on " + url.getPath());

                if (requestMethod.indexOf('GET') !== -1) {
                    //let requestParameters = getRequestParameters(he.getRequestURI());
                    respond = true;
                } else if (requestMethod.indexOf('POST') !== -1) {
                    let inputStream = HttpExchange.getRequestBody();
                    let stringBuilder = new java.lang.StringBuilder();
                    let bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                    let lines = bufferedReader.lines().toArray();

                    for (let x = 0; x < lines.length; x++) {
                        stringBuilder.append(lines[x]);
                    }

                    let object = JSON.parse(stringBuilder.toString());

                    let filePath = saveFilePath + object.fileName;

                    let data = java.util.Base64.getMimeDecoder().decode(object.image.split('base64,')[1]);
                    let stream = new java.io.FileOutputStream(filePath);
                    stream.write(data);
                    stream.close();
                    respond = true;
                    close = true;
                }

                if (respond) {
                    let path = getPersonalityPath() + PATH_SEPARATOR + "Utils" + PATH_SEPARATOR + "Web" + PATH_SEPARATOR + "Pages" + PATH_SEPARATOR + url.getPath().replace('/', '');
                    sendDebugMessage('Returning ' + path);

                    let responseBody = java.nio.file.Files.readString(java.nio.file.Path.of(path));

                    headers.set("Content-Type", java.lang.String.format("text/html; charset=%s", CHARSET));
                    let rawResponseBody = responseBody.getBytes(CHARSET);
                    HttpExchange.sendResponseHeaders(STATUS_OK, rawResponseBody.length);
                    HttpExchange.getResponseBody().write(rawResponseBody);
                }

                if (close) {
                    server.stop(0);
                }
            } catch (e) {
                e.printStackTrace();
                server.stop(0);
            }
        }
    });

    server.createContext("/", new MyHandlerInstace());
    server.setExecutor(null); // creates a default executor
    server.start();

    return server;
}