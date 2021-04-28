function httpGet(theUrl) {
    let con = new java.net.URL(theUrl).openConnection();
    con.requestMethod = "GET";

    return asResponse(con);
}

function httpPost(theUrl, data, contentType) {
    contentType = contentType || "application/json";
    let con = new java.net.URL(theUrl).openConnection();

    con.requestMethod = "POST";
    con.setRequestProperty("Content-Type", contentType);

    // Send post request
    con.doOutput = true;
    write(con.outputStream, data);

    return asResponse(con);
}

function asResponse(con) {
    try {
        let d = read(con.inputStream);
        return {data: d, statusCode: con.responseCode};
    } catch (exception) {
        sendDebugMessage('Failed to fetch response from ' + con);
        return null;
    }
}

function write(outputStream, data) {
    let wr = new java.io.DataOutputStream(outputStream);
    wr.writeBytes(data);
    wr.flush();
    wr.close();
}

function read(inputStream) {
    let inReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
    let inputLine;
    let response = new java.lang.StringBuffer();

    while ((inputLine = inReader.readLine()) != null) {
        response.append(inputLine);
    }

    inReader.close();
    return response.toString();
}

