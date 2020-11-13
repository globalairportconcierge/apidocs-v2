---
title: GAC API V2.0.0 v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: [errors]
search: true
highlight_theme: darkula
headingLevel: 2
code_clipboard: true
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="gac-api-v2-0-0">GAC API V2.0.0 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The best passenger services APIs on the market.

Base URLs:

- <a href="http://3.89.112.137:4010">http://3.89.112.137:4010</a>

- <a href="http://127.0.0.1:4010">http://127.0.0.1:4010</a>

<a href="https://gac.com/terms-of-service.html">Terms of service</a>

License: <a href="https://gac.com/api-license.html">Apache 2.0</a>

# Authentication

- API Key (Authorization)
  - Parameter Name: **apiKey**, in: header. Bearer Token

<h1 id="gac-api-v2-0-0-default">Default</h1>

## delete-airports-id-terminals-id

<a id="opIddelete-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010terminals/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010terminals/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010terminals/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010terminals/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010terminals/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010terminals/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010terminals/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE terminals/{id}`

_DELETE_

DELETE a terminal of an airport

<h3 id="delete-airports-id-terminals-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a terminal id                        |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-terminals-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-bookings-id-journeys-id

<a id="opIddelete-bookings-id-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/journeys/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/journeys/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/journeys/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/journeys/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/journeys/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/journeys/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/journeys/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /journeys/{id}`

_DELETE_

Delete a journey of a booking

<h3 id="delete-bookings-id-journeys-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a journey id                         |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-bookings-id-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--airports">/airports</h1>

## get-airports

<a id="opIdget-airports"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/airports \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip,compress' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/airports HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip,compress

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip,compress",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/airports", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip,compress',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/airports',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'Accept-Encoding': 'gzip,compress',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/airports', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'Accept-Encoding' => 'gzip,compress',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/airports', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/airports");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "Accept-Encoding": []string{"gzip,compress"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/airports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /airports`

_GET_

Get list of operating Airports.

<h3 id="get-airports-parameters">Parameters</h3>

| Name            | In     | Type         | Required | Description                          |
| --------------- | ------ | ------------ | -------- | ------------------------------------ |
| X-Trace-Id      | header | string(uuid) | false    | Please provide your UUID for tracing |
| Content-Type    | header | string       | true     | application/json                     |
| name            | query  | string       | false    | airport name                         |
| city            | query  | string       | false    | airport city                         |
| country         | query  | string       | false    | airport country                      |
| code            | query  | string       | false    | airport code                         |
| limit           | query  | string       | false    | list limit                           |
| starting_from   | query  | string       | false    | limit starting number                |
| Accept-Encoding | header | string       | true     | Gzip compression                     |

> Example responses

<h3 id="get-airports-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports

<a id="opIdpost-airports"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/airports \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/airports HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/airports", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/airports',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/airports', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/airports', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/airports");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/airports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /airports`

_POST_

Endpoint to create a new airport.

> Body parameter

```json
false
```

<h3 id="post-airports-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": null
}
```

<h3 id="post-airports-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--airports-id-">/airports/{id}</h1>

## get-airports-id

<a id="opIdget-airports-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/airports/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/airports/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/airports/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/airports/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/airports/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/airports/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/airports/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/airports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /airports/{id}`

_GET_

GET Airport details.

<h3 id="get-airports-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | an airport id                        |

> Example responses

<h3 id="get-airports-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-airports-id

<a id="opIddelete-airports-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/airports/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/airports/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/airports/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/airports/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/airports/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/airports/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/airports/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/airports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /airports/{id}`

_DELETE_

Delete Airport.

<h3 id="delete-airports-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | an airport id                        |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-airports-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id

<a id="opIdpost-airports-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/airports/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/airports/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/airports/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/airports/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/airports/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/airports/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/airports/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/airports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /airports/{id}`

_POST_

Update an exsisting airport main details

> Body parameter

```json
false
```

<h3 id="post-airports-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | an airport id                        |

> Example responses

> Created

```json
{
  "Data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "code": "LHR",
      "name": "LHR London Heahrow Airport",
      "country": "United Kingdom",
      "city": "London",
      "time_zone": "Europe/London",
      "booking_window": 48,
      "currency": "GBP",
      "comments": "Use Hethrow VIP for ABI",
      "image": "airport_image.png",
      "location": {
        "lat": 40.690252,
        "long": -74.172314
      },
      "contacts": [
        {
          "address": {
            "line1": "No. 221/B",
            "line2": "Bakers Street",
            "city": "Hethrow",
            "state": "London",
            "postal_code": "LN223 2323",
            "country": "United Kingdom"
          },
          "emails": [
            {
              "type": "Main",
              "email": "email@email.com"
            }
          ],
          "phones": [
            {
              "type": "Office",
              "name": "Head Office",
              "phone": "+44 7799 473 140"
            }
          ]
        }
      ],
      "operational": true,
      "terminals": [
        {
          "id": "47cc67093475061e3d95369d",
          "terminal_name": "LHR Terminal 2",
          "services": [
            {
              "id": "string",
              "service_name": "Meet & Assist Service",
              "rates": [
                {
                  "currency": "string",
                  "packages": [
                    {
                      "pax": 0,
                      "value": 0
                    }
                  ]
                }
              ],
              "updates": {
                "created_by": {
                  "id": "47cc67093475061e3d95369d",
                  "username": "Resil"
                },
                "updated_by": {
                  "id": "47cc67093475061e3d95369d",
                  "username": "Anna"
                },
                "created_at": "2020-04-23 13:34:45",
                "updated_at": "2020-05-25 16:45:23",
                "deleted_at": "2020-06-13 14:23:42"
              }
            }
          ],
          "service_providers": {
            "id": "47cc67093475061e3d95369d",
            "company_name": "string",
            "image": "company_image.png",
            "default": true,
            "contacts": {
              "address": {
                "line1": "No. 221/B",
                "line2": "Bakers Street",
                "city": "Hethrow",
                "state": "London",
                "postal_code": "LN223 2323",
                "country": "United Kingdom"
              },
              "emails": [
                {
                  "type": "Main",
                  "email": "email@email.com"
                }
              ],
              "phones": [
                {
                  "type": "Office",
                  "name": "Head Office",
                  "phone": "+44 7799 473 140"
                }
              ]
            },
            "agents": [
              {
                "id": "47cc67093475061e3d95369d",
                "name": "This Company LHR OPS Team",
                "emails": [
                  {
                    "type": "Main",
                    "email": "email@email.com"
                  }
                ],
                "phones": [
                  {
                    "type": "Main",
                    "name": "Head Office",
                    "phone": "+44 772 2323 2323"
                  }
                ]
              }
            ],
            "greeters": [
              {
                "id": "47cc67093475061e3d95369d",
                "name": "Jone Doe",
                "emails": [
                  {
                    "type": "Main",
                    "email": "email@email.com"
                  }
                ],
                "phones": [
                  {
                    "type": "Office",
                    "name": "Head Office",
                    "phone": "+44 779 3232 2323"
                  }
                ]
              }
            ],
            "services": [
              {
                "id": "string",
                "service_name": "Meet & Assist Service",
                "rates": [
                  {
                    "currency": "string",
                    "packages": [
                      {
                        "pax": 0,
                        "value": 0
                      }
                    ]
                  }
                ],
                "updates": {
                  "created_by": {
                    "id": "47cc67093475061e3d95369d",
                    "username": "Resil"
                  },
                  "updated_by": {
                    "id": "47cc67093475061e3d95369d",
                    "username": "Anna"
                  },
                  "created_at": "2020-04-23 13:34:45",
                  "updated_at": "2020-05-25 16:45:23",
                  "deleted_at": "2020-06-13 14:23:42"
                }
              }
            ],
            "logs": {
              "created_by": {
                "id": "47cc67093475061e3d95369d",
                "username": "Resil"
              },
              "updated_by": {
                "id": "47cc67093475061e3d95369d",
                "username": "Anna"
              },
              "created_at": "2020-04-23 13:34:45",
              "updated_at": "2020-05-25 16:45:23",
              "deleted_at": "2020-06-13 14:23:42"
            }
          },
          "logs": {
            "created_by": {
              "id": "47cc67093475061e3d95369d",
              "username": "Resil"
            },
            "updated_by": {
              "id": "47cc67093475061e3d95369d",
              "username": "Anna"
            },
            "created_at": "2020-04-23 13:34:45",
            "updated_at": "2020-05-25 16:45:23",
            "deleted_at": "2020-06-13 14:23:42"
          }
        }
      ],
      "charges": {
        "surcharge": [
          {
            "below": 48,
            "percentage": 50
          }
        ],
        "additional_hour_charge": [
          {
            "currancy": "GBP",
            "rate": 50
          }
        ]
      },
      "air_side_meetup": {
        "international": {
          "arrival": true,
          "depature": true,
          "transit": true
        },
        "domestic": {
          "arrival": true,
          "depature": true,
          "transit": true
        }
      },
      "created_by": {
        "id": "47cc67093475061e3d95369d",
        "username": "Resil"
      },
      "updated_by": {
        "id": "47cc67093475061e3d95369d",
        "username": "Anna"
      },
      "created_at": "2020-04-23 13:34:45",
      "updated_at": "2020-05-25 16:45:23",
      "deleted_at": "2020-06-13 14:23:42"
    }
  ],
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37"
}
```

<h3 id="post-airports-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--bookings">/bookings</h1>

## get-bookings

<a id="opIdget-bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/bookings \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/bookings HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/bookings", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/bookings',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/bookings', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/bookings', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/bookings");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings`

_GET_

GET a list of bookings

<h3 id="get-bookings-parameters">Parameters</h3>

| Name           | In     | Type   | Required | Description                          |
| -------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id     | header | string | false    | Please provide your UUID for tracing |
| Content-Type   | header | string | true     | application/json                     |
| reference_id   | query  | string | false    | booking referece id                  |
| type           | query  | string | false    | booking type                         |
| booker_id      | query  | string | false    | booker id                            |
| airport_id     | query  | string | false    | an airport id                        |
| country        | query  | string | false    | country                              |
| stop_status    | query  | string | false    | stop status                          |
| payment_status | query  | string | false    | payment status                       |
| lead_passenger | query  | string | false    | lead passenger                       |

#### Enumerated Values

| Parameter      | Value       |
| -------------- | ----------- |
| type           | GAC         |
| type           | USS         |
| type           | MCS         |
| stop_status    | all         |
| stop_status    | waiting     |
| stop_status    | cancelled   |
| stop_status    | no show     |
| stop_status    | job faliure |
| payment_status | all         |
| payment_status | pending     |
| payment_status | paid        |
| payment_status | refunded    |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-bookings-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-bookings

<a id="opIdpost-bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/bookings \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/bookings HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/bookings", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/bookings',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/bookings', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/bookings', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/bookings");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bookings`

_POST_

Create a booking

> Body parameter

```json
false
```

<h3 id="post-bookings-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-bookings-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--bookings-id-">/bookings/{id}</h1>

## get-bookings-id

<a id="opIdget-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/bookings/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/bookings/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/bookings/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/bookings/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/bookings/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/bookings/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/bookings/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings/{id}`

_GET_

GET a booking by id

<h3 id="get-bookings-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a booking id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-bookings-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-bookings-id

<a id="opIdpost-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/bookings/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/bookings/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/bookings/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/bookings/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/bookings/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/bookings/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/bookings/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /bookings/{id}`

_POST_

Update a booking

> Body parameter

```json
false
```

<h3 id="post-bookings-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a booking id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-bookings-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-bookings-id

<a id="opIddelete-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/bookings/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/bookings/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/bookings/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/bookings/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/bookings/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/bookings/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/bookings/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /bookings/{id}`

_DELETE_

delete a booking

<h3 id="delete-bookings-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a booking id                         |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-bookings-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--companies">/companies</h1>

## get-companies

<a id="opIdget-companies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/companies \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/companies HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/companies", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/companies',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/companies', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/companies', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/companies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies`

_GET_

GET a list of companies

<h3 id="get-companies-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| company_name  | query  | string | false    | company name                         |
| user_name     | query  | string | false    | user name                            |
| role          | query  | string | false    | company role                         |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-companies-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-companies-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-companies

<a id="opIdpost-companies"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/companies \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/companies HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/companies", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/companies',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/companies', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/companies', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/companies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies`

_POST_

Creat a new company

> Body parameter

```json
false
```

<h3 id="post-companies-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-companies-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-companies-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--companies-id-">/companies/{id}</h1>

## get-companies-id

<a id="opIdget-companies-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/companies/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/companies/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/companies/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/companies/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/companies/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/companies/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/companies/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/companies/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}`

_GET_

GET a single company

<h3 id="get-companies-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a company id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-companies-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-companies-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-companies-id

<a id="opIdpost-companies-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/companies/{id} \
  -H 'Content-Type: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/companies/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json

X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/companies/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/companies/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/companies/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/companies/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/companies/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/companies/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies/{id}`

_POST_

Update a company

> Body parameter

```json
false
```

<h3 id="post-companies-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a company id                         |

<h3 id="post-companies-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | None   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-companies-id

<a id="opIddelete-companies-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/companies/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/companies/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/companies/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/companies/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/companies/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/companies/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/companies/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/companies/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /companies/{id}`

_DELETE_

DELETE a company

<h3 id="delete-companies-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a company id                         |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-companies-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-companies-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--discounts">/discounts</h1>

## get-discounts

<a id="opIdget-discounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d",
  {
    method: "GET",

    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/discounts',
  params: {
  'company_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/discounts', params={
  'company_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/discounts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/discounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /discounts`

_GET_

GET list of global discounts for a company

<h3 id="get-discounts-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| company_id    | query  | string | true     | a company id                         |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-discounts-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-discounts-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-discounts

<a id="opIdpost-discounts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d",
  {
    method: "POST",
    body: inputBody,
    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/discounts',
  params: {
  'company_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/discounts', params={
  'company_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/discounts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/discounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /discounts`

_POST_

Create a new global discount for a company

> Body parameter

```json
false
```

<h3 id="post-discounts-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| company_id   | query  | string | true     | a company id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-discounts-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-discounts-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--discounts-id-">/discounts/{id}</h1>

## get-discounts-id

<a id="opIdget-discounts-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/discounts/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/discounts/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/discounts/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/discounts/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/discounts/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/discounts/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/discounts/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/discounts/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /discounts/{id}`

_GET_

GET a single global discount of a commpany

<h3 id="get-discounts-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a discount id                        |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-discounts-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-discounts-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## put-discounts-id

<a id="opIdput-discounts-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/discounts/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/discounts/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/discounts/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/discounts/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/discounts/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/discounts/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/discounts/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/discounts/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /discounts/{id}`

_PUT_

Update a global discount of a company

> Body parameter

```json
false
```

<h3 id="put-discounts-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a discount id                        |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="put-discounts-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-discounts-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-discounts-id

<a id="opIddelete-discounts-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/discounts/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/discounts/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/discounts/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/discounts/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/discounts/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/discounts/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/discounts/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/discounts/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /discounts/{id}`

_DELETE_

DELET a global doiscount of a company

<h3 id="delete-discounts-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a discount id                        |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-discounts-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-discounts-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0-terminals-id-">terminals/{id}</h1>

## get-airports-id-terminals-id

<a id="opIdget-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010terminals/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010terminals/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010terminals/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010terminals/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010terminals/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010terminals/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010terminals/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET terminals/{id}`

_GET_

GET a single terminal by id

<h3 id="get-airports-id-terminals-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a terminal id                        |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-terminals-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-terminals-id

<a id="opIdpost-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010terminals/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010terminals/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010terminals/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010terminals/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010terminals/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010terminals/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010terminals/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT terminals/{id}`

_POST_

Update an exsisting terminal of an Airport.

> Body parameter

```json
false
```

<h3 id="post-airports-id-terminals-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a terminal id                        |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-terminals-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--journeys">/journeys</h1>

## get-bookings-id-journeys

<a id="opIdget-bookings-id-journeys"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/journeys \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/journeys HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/journeys", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/journeys',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/journeys', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/journeys', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/journeys");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/journeys", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /journeys`

_GET_

GET a list of journeys in a booking

<h3 id="get-bookings-id-journeys-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| booking_id   | query  | string | false    | a booking id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-bookings-id-journeys-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-journeys-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-bookings-id-journeys

<a id="opIdpost-bookings-id-journeys"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/journeys?booking_id=47cc67093475061e3d95369d \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/journeys?booking_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/journeys?booking_id=47cc67093475061e3d95369d", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/journeys',
  params: {
  'booking_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/journeys', params={
  'booking_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/journeys', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/journeys?booking_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/journeys", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /journeys`

_POST_

Create a new journey in a booking

> Body parameter

```json
false
```

<h3 id="post-bookings-id-journeys-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| booking_id   | query  | string | true     | a booking id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-bookings-id-journeys-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-journeys-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--journeys-id-">/journeys/{id}</h1>

## get-bookings-id-journeys-id

<a id="opIdget-bookings-id-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/journeys/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/journeys/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/journeys/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/journeys/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/journeys/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/journeys/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/journeys/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /journeys/{id}`

_GET_

GET a single journey of a booking

<h3 id="get-bookings-id-journeys-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a journey id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-bookings-id-journeys-id

<a id="opIdpost-bookings-id-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/journeys/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/journeys/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/journeys/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/journeys/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/journeys/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/journeys/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/journeys/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /journeys/{id}`

_POST_

update a jounry of a booking

> Body parameter

```json
false
```

<h3 id="post-bookings-id-journeys-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a journey id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--passengers">/passengers</h1>

## get-lpassengers

<a id="opIdget-lpassengers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/passengers \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/passengers HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/passengers", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/passengers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/passengers', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/passengers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/passengers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/passengers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /passengers`

_GET_

GET a list of saved passengers in companies

<h3 id="get-lpassengers-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| company_id    | query  | string | false    | a company id                         |
| name          | query  | string | false    | a passenger name                     |
| city          | query  | string | false    | a passenger city                     |
| country       | query  | string | false    | a passenger country                  |
| email         | query  | string | false    | a passenger email                    |
| phone         | query  | string | false    | a passenger phone                    |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-lpassengers-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-lpassengers-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-passengers

<a id="opIdpost-passengers"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/passengers?company_id=47cc67093475061e3d95369d \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/passengers?company_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/passengers?company_id=47cc67093475061e3d95369d",
  {
    method: "POST",
    body: inputBody,
    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/passengers',
  params: {
  'company_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/passengers', params={
  'company_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/passengers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/passengers?company_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/passengers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /passengers`

_POST_

Create a new passenger of a company

> Body parameter

```json
false
```

<h3 id="post-passengers-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| company_id   | query  | string | true     | a company id                         |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-passengers-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-passengers-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--passengers-id-">/passengers/{id}</h1>

## get-passengers-id

<a id="opIdget-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/passengers/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/passengers/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/passengers/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/passengers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/passengers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/passengers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/passengers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /passengers/{id}`

_GET_

GET a single passenger of a company

<h3 id="get-passengers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | passenger_id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-passengers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## put-passengers-id

<a id="opIdput-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/passengers/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/passengers/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/passengers/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/passengers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/passengers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/passengers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/passengers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /passengers/{id}`

_PUT_

Update an exsisting passenger of a company

> Body parameter

```json
false
```

<h3 id="put-passengers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | passenger_id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="put-passengers-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-passengers-id

<a id="opIddelete-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/passengers/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/passengers/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/passengers/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/passengers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/passengers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/passengers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/passengers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /passengers/{id}`

_DELETE_

DELETE a passenger of a company

<h3 id="delete-passengers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description      |
| ------------ | ------ | ------ | -------- | ---------------- |
| X-Trace-Id   | header | string | false    | X-Trace-Id       |
| Content-Type | header | string | true     | application/json |
| id           | path   | string | true     | passenger_id     |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-passengers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--services">/services</h1>

## get-airports-id-services

<a id="opIdget-airports-id-services"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/services \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/services HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/services", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/services',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/services', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/services', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/services");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /services`

_GET_

GET a list of services in an airport

<h3 id="get-airports-id-services-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| terminal_id   | query  | string | false    | terminal id                          |
| name          | query  | string | false    | name of the service                  |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |
| airport_id    | query  | string | false    | an airport id                        |
| sp_id         | query  | string | false    | a service provider id                |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airports-id-services-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-services-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-services

<a id="opIdpost-airports-id-services"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/services?terminal_id=47cc67093475061e3d95369d \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/services?terminal_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/services?terminal_id=47cc67093475061e3d95369d",
  {
    method: "POST",
    body: inputBody,
    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/services',
  params: {
  'terminal_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/services', params={
  'terminal_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/services', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/services?terminal_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /services`

_POST_

Add a new service to a terminal of an airport

> Body parameter

```json
false
```

<h3 id="post-airports-id-services-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| terminal_id  | query  | string | true     | none                                 |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airports-id-services-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-services-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--services-id-">/services/{id}</h1>

## get-airpoots-id-service-id

<a id="opIdget-airpoots-id-service-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/services/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/services/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/services/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/services/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/services/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/services/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/services/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/services/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /services/{id}`

_GET_

GET a single service of an airport by id

<h3 id="get-airpoots-id-service-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| airport_id   | query  | string | false    | an airport id                        |
| sp_id        | query  | string | false    | a service provider id                |
| id           | path   | string | true     | a service id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airpoots-id-service-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airpoots-id-service-id

<a id="opIdpost-airpoots-id-service-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/services/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/services/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/services/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/services/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/services/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/services/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/services/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/services/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /services/{id}`

_POST_

Update a sirvice in an airport

> Body parameter

```json
false
```

<h3 id="post-airpoots-id-service-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | none                                 |
| id           | path   | string | true     | a service id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airpoots-id-service-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-airpoots-id-service-id

<a id="opIddelete-airpoots-id-service-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/services/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/services/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/services/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/services/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/services/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/services/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/services/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/services/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /services/{id}`

_DELETE_

DELETE a serveice in an airport

<h3 id="delete-airpoots-id-service-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a service id                         |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airpoots-id-service-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--service_providers">/service_providers</h1>

## get-airports-id-service-provicders

<a id="opIdget-airports-id-service-provicders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/service_providers?airport_id=47cc67093475061e3d95369d \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/service_providers?airport_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/service_providers?airport_id=47cc67093475061e3d95369d",
  {
    method: "GET",

    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/service_providers',
  params: {
  'airport_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/service_providers', params={
  'airport_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/service_providers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/service_providers?airport_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/service_providers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /service_providers`

_GET_

Get a lis of service providers of an airport

<h3 id="get-airports-id-service-provicders-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| terminal_id   | query  | string | false    | terminal id                          |
| name          | query  | string | false    | service provider name                |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |
| airport_id    | query  | string | true     | an airport id                        |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airports-id-service-provicders-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-service-provicders-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-service-provicders

<a id="opIdpost-airports-id-service-provicders"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/service_providers?terminal_id=47cc67093475061e3d95369d \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/service_providers?terminal_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/service_providers?terminal_id=47cc67093475061e3d95369d",
  {
    method: "POST",
    body: inputBody,
    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/service_providers',
  params: {
  'terminal_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/service_providers', params={
  'terminal_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/service_providers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/service_providers?terminal_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/service_providers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /service_providers`

_POST_

Asign a new service provider to an airport

> Body parameter

```json
false
```

<h3 id="post-airports-id-service-provicders-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| terminal_id  | query  | string | true     | terminal id                          |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airports-id-service-provicders-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-service-provicders-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--service_providers-id-">/service_providers/{id}</h1>

## get-airports-id-service-providers-id

<a id="opIdget-airports-id-service-providers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/service_providers/{id}?airport_id=47cc67093475061e3d95369d \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/service_providers/{id}?airport_id=47cc67093475061e3d95369d HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch(
  "http://3.89.112.137:4010/service_providers/{id}?airport_id=47cc67093475061e3d95369d",
  {
    method: "GET",

    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/service_providers/{id}',
  params: {
  'airport_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/service_providers/{id}', params={
  'airport_id': '47cc67093475061e3d95369d'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/service_providers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/service_providers/{id}?airport_id=47cc67093475061e3d95369d");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/service_providers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /service_providers/{id}`

_GET_

GET service provider of an airport by id

<h3 id="get-airports-id-service-providers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| airport_id   | query  | string | true     | an airport id                        |
| id           | path   | string | true     | a service provider id                |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-service-providers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-service-providers-id

<a id="opIdpost-airports-id-service-providers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/service_providers/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/service_providers/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/service_providers/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/service_providers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/service_providers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/service_providers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/service_providers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/service_providers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /service_providers/{id}`

_POST_

Updating an exsisting service provider of an airport

> Body parameter

```json
false
```

<h3 id="post-airports-id-service-providers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a service provider id                |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-service-providers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-airports-id-service-providers-id

<a id="opIddelete-airports-id-service-providers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/service_providers/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/service_providers/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/service_providers/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/service_providers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/service_providers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/service_providers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/service_providers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/service_providers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /service_providers/{id}`

_DELETE_

Remove service rpovider from an airport

<h3 id="delete-airports-id-service-providers-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a service provider id                |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-service-providers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--terminals">/terminals</h1>

## get-airports-id-terminals

<a id="opIdget-airports-id-terminals"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/terminals \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/terminals HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/terminals", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/terminals',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/terminals', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/terminals', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/terminals");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/terminals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /terminals`

_GET_

GET list of terminals at an airport

<h3 id="get-airports-id-terminals-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| name          | query  | string | false    | terminal name                        |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |
| airport_id    | query  | string | false    | an airport Id                        |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-airports-id-terminals-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-terminals-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-terminals

<a id="opIdpost-airports-id-terminals"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/terminals \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/terminals HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/terminals", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/terminals',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/terminals', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/terminals', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/terminals");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/terminals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /terminals`

_POST_

Create a new terminal in an ariport

> Body parameter

```json
false
```

<h3 id="post-airports-id-terminals-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-airports-id-terminals-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-terminals-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--tenants">/tenants</h1>

## get-tenants

<a id="opIdget-tenants"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/tenants \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/tenants HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/tenants", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/tenants',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/tenants', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/tenants', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/tenants");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/tenants", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tenants`

_GET_

Get a list of teants

<h3 id="get-tenants-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-tenants-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-tenants-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-tenants

<a id="opIdpost-tenants"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/tenants \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/tenants HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/tenants", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/tenants',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/tenants', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/tenants', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/tenants");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/tenants", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tenants`

_POST_

Create a new tenant

> Body parameter

```json
false
```

<h3 id="post-tenants-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-tenants-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-tenants-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--tenants-id-">/tenants/{id}</h1>

## get-tenants-id

<a id="opIdget-tenants-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/tenants/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/tenants/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/tenants/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/tenants/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/tenants/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/tenants/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/tenants/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/tenants/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tenants/{id}`

_GET_

GET a single tenant

<h3 id="get-tenants-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | none                                 |
| id           | path   | string | true     | a tenant id                          |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-tenants-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-tenants-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## put-tenants-id

<a id="opIdput-tenants-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/tenants/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/tenants/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/tenants/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/tenants/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/tenants/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/tenants/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/tenants/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/tenants/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /tenants/{id}`

_PUT_

Update an exsisting tenant

> Body parameter

```json
false
```

<h3 id="put-tenants-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a tenant id                          |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="put-tenants-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-tenants-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-tenants-id

<a id="opIddelete-tenants-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/tenants/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/tenants/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/tenants/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/tenants/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/tenants/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/tenants/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/tenants/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/tenants/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /tenants/{id}`

_DELETE_

DELETE a tenant

<h3 id="delete-tenants-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a tenant id                          |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-tenants-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-tenants-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--users">/users</h1>

## get-users

<a id="opIdget-users"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/users \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/users HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/users", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users`

_GET_

GET a list of users

<h3 id="get-users-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| name         | query  | string | false    | an user name                         |
| email        | query  | string | false    | an user email                        |
| phone        | query  | string | false    | an user phone                        |

> Example responses

<h3 id="get-users-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-users-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-users

<a id="opIdpost-users"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/users HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/users", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /users`

_POST_

Create a new user

> Body parameter

```json
false
```

<h3 id="post-users-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-users-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-users-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--users-id-">/users/{id}</h1>

## get-users-id

<a id="opIdget-users-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/users/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/users/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/users/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/users/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/users/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/users/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/users/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}`

_GET_

GET a single user by id

<h3 id="get-users-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a user id                            |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-users-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## put-users-id

<a id="opIdput-users-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/users/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/users/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/users/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/users/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/users/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/users/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/users/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /users/{id}`

_PUT_

Update an exsisting user

> Body parameter

```json
false
```

<h3 id="put-users-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a user id                            |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="put-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="put-users-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-users-id

<a id="opIddelete-users-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/users/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/users/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/users/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/users/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/users/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/users/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/users/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /users/{id}`

_DELETE_

DELET a user

<h3 id="delete-users-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a user id                            |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-users-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--websites">/websites</h1>

## get-websites

<a id="opIdget-websites"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/websites \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/websites HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/websites", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/websites',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/websites', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/websites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/websites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/websites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /websites`

_GET_

GET a list of white label websites

<h3 id="get-websites-parameters">Parameters</h3>

| Name          | In     | Type   | Required | Description                          |
| ------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id    | header | string | false    | Please provide your UUID for tracing |
| Content-Type  | header | string | true     | application/json                     |
| name          | query  | string | false    | name of the website                  |
| code          | query  | string | false    | website code                         |
| limit         | query  | string | false    | list limit                           |
| starting_from | query  | string | false    | list starting number                 |
| url           | query  | string | false    | website url                          |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-websites-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-websites-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-websites

<a id="opIdpost-websites"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://3.89.112.137:4010/websites \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
POST http://3.89.112.137:4010/websites HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/websites", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://3.89.112.137:4010/websites',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.post('http://3.89.112.137:4010/websites', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://3.89.112.137:4010/websites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/websites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://3.89.112.137:4010/websites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /websites`

_POST_

Create a new white label website

> Body parameter

```json
false
```

<h3 id="post-websites-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="post-websites-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-websites-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--websites-id-">/websites/{id}</h1>

## get-websites-id

<a id="opIdget-websites-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/websites/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/websites/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/websites/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://3.89.112.137:4010/websites/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.get('http://3.89.112.137:4010/websites/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://3.89.112.137:4010/websites/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/websites/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/websites/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /websites/{id}`

_GET_

GET a single white label website

<h3 id="get-websites-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a website id                         |

> Example responses

> 200 Response

```json
{
  "Data": []
}
```

<h3 id="get-websites-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-websites-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## put-websites-id

<a id="opIdput-websites-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/websites/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/websites/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = "false";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/websites/{id}", {
  method: "PUT",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://3.89.112.137:4010/websites/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.put('http://3.89.112.137:4010/websites/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://3.89.112.137:4010/websites/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/websites/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/websites/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /websites/{id}`

_PUT_

Update an exsisting white label website

> Body parameter

```json
false
```

<h3 id="put-websites-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a website id                         |

> Example responses

> 201 Response

```json
{
  "Data": []
}
```

<h3 id="put-websites-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-websites-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## delete-websites-id

<a id="opIddelete-websites-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/websites/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/websites/{id} HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  apiKey: "API_KEY",
};

fetch("http://3.89.112.137:4010/websites/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://3.89.112.137:4010/websites/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Trace-Id': '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type': 'application/json',
  'apiKey': 'API_KEY'
}

r = requests.delete('http://3.89.112.137:4010/websites/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
    'Content-Type' => 'application/json',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://3.89.112.137:4010/websites/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://3.89.112.137:4010/websites/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/websites/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /websites/{id}`

_DELETE_

DELET a white label website

<h3 id="delete-websites-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| id           | path   | string | true     | a website id                         |

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-websites-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-websites-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas
