---
title: GAC API V1.1.0
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
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
code_clipboard: true
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="gac-api-v1-1-0">GAC API V1.1.0</h1>

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

# Run in Insomnia

> We provide you with this button so you can take our API's for spin in a matter of minutes.

Insomnia like Postman allows developers to iteract with API's beyound the capabilites of cURL in CLI. It is a great tool for testing and getting familiar instantily with all the API's endpoints

<h1 id="gac-api-v2-0-0-default">Default</h1>

## delete-airports-id-terminals-id

<a id="opIddelete-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://3.89.112.137:4010/terminals/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://3.89.112.137:4010/terminals/{id} HTTP/1.1
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

fetch("http://3.89.112.137:4010/terminals/{id}", {
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

result = RestClient.delete 'http://3.89.112.137:4010/terminals/{id}',
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

r = requests.delete('http://3.89.112.137:4010/terminals/{id}', headers = headers)

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
    $response = $client->request('DELETE','http://3.89.112.137:4010/terminals/{id}', array(
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
URL obj = new URL("http://3.89.112.137:4010/terminals/{id}");
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
    req, err := http.NewRequest("DELETE", "http://3.89.112.137:4010/terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /terminals/{id}`

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-terminals-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-bookings-id-journeys-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/airports HTTP/1.1
Host: 3.89.112.137:4010
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const headers = {
  Accept: "application/json",
  "X-Trace-Id": "1061b7fe-e742-47e2-a41c-1f8cb3c58d9f",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip",
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
  'Accept-Encoding' => 'gzip',
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
  'Accept-Encoding': 'gzip',
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
    'Accept-Encoding' => 'gzip',
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
        "Accept-Encoding": []string{"gzip"},
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

| Name            | In     | Type         | Required | Description                                                  |
| --------------- | ------ | ------------ | -------- | ------------------------------------------------------------ |
| X-Trace-Id      | header | string(uuid) | false    | Please provide your UUID for tracing                         |
| Content-Type    | header | string       | true     | application/json                                             |
| name            | query  | string       | false    | airport name                                                 |
| city            | query  | string       | false    | airport city                                                 |
| country         | query  | string       | false    | airport country                                              |
| code            | query  | string       | false    | airport code                                                 |
| limit           | query  | string       | false    | list limit                                                   |
| starting_from   | query  | string       | false    | limit starting number                                        |
| Accept-Encoding | header | sring        | true     | add a req. header for payload to be compressed by the server |
| sort            | query  | string       | false    | will sort objects returned from the request                  |

#### Enumerated Values

| Parameter | Value |
| --------- | ----- |
| sort      | asc   |
| sort      | desc  |

> Example responses

<h3 id="get-airports-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-responseschema">Response Schema</h3>

#### Enumerated Values

| Property       | Value |
| -------------- | ----- |
| booking_window | 6     |
| booking_window | 12    |
| booking_window | 24    |
| booking_window | 48    |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currancy       | USD   |
| currancy       | GBP   |
| currancy       | EUR   |
| status         | 200   |
| status         | 201   |
| status         | 204   |

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
const inputBody = '{
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
        "streets": [
          "No 221/1, Baker's Street"
        ],
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
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/airports',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
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
        "streets": ["No 221/1, Baker's Street"],
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
  }
}
```

<h3 id="post-airports-parameters">Parameters</h3>

| Name                      | In     | Type           | Required | Description                                                       |
| ------------------------- | ------ | -------------- | -------- | ----------------------------------------------------------------- |
| X-Trace-Id                | header | string         | false    | Please provide your UUID for tracing                              |
| Content-Type              | header | string         | true     | application/json                                                  |
| body                      | body   | object         | false    | Request body for creating an airport.                             |
| » code                    | body   | string         | true     | Airport code                                                      |
| » name                    | body   | string         | true     | Airport name                                                      |
| » country                 | body   | string         | true     | Airport country                                                   |
| » city                    | body   | string         | true     | Airport city                                                      |
| » time_zone               | body   | string         | false    | Airport time zone                                                 |
| » booking_window          | body   | number         | false    | Minimal time allowed to make a booking pior serivce date and time |
| » currency                | body   | string         | false    | Preffered currency of the airport                                 |
| » comments                | body   | string         | false    | Special comments regarding the airport                            |
| » image                   | body   | string         | false    | Image url of the airport                                          |
| » location                | body   | object         | false    | Exact geo location of the airport                                 |
| »» lat                    | body   | number(double) | false    | none                                                              |
| »» long                   | body   | number(double) | false    | none                                                              |
| » contacts                | body   | [object]       | false    | Contact details of the airport                                    |
| »» address                | body   | object         | false    | Addres information                                                |
| »»» streets               | body   | [string]       | false    | none                                                              |
| »»» city                  | body   | string         | false    | none                                                              |
| »»» state                 | body   | string         | false    | none                                                              |
| »»» postal_code           | body   | string         | false    | none                                                              |
| »»» country               | body   | string         | false    | none                                                              |
| »» emails                 | body   | [object]       | false    | Email information                                                 |
| »»» type                  | body   | string         | false    | none                                                              |
| »»» email                 | body   | string(email)  | false    | none                                                              |
| »» phones                 | body   | [object]       | false    | Phone numbers                                                     |
| »»» type                  | body   | string         | false    | none                                                              |
| »»» name                  | body   | string         | false    | none                                                              |
| »»» phone                 | body   | string         | false    | none                                                              |
| » operational             | body   | boolean        | false    | If the airport is operatable                                      |
| » charges                 | body   | object         | false    | harges assosiated with the airport                                |
| »» surcharge              | body   | [object]       | false    | none                                                              |
| »»» below                 | body   | number         | false    | none                                                              |
| »»» percentage            | body   | number         | false    | none                                                              |
| »» additional_hour_charge | body   | [object]       | false    | none                                                              |
| »»» currancy              | body   | string         | false    | none                                                              |
| »»» rate                  | body   | number         | false    | none                                                              |
| » air_side_meetup         | body   | object         | false    | Passenger meet up point is at the air side or land side           |
| »» international          | body   | object         | false    | none                                                              |
| »»» arrival               | body   | boolean        | false    | none                                                              |
| »»» depature              | body   | boolean        | false    | none                                                              |
| »»» transit               | body   | boolean        | false    | none                                                              |
| »» domestic               | body   | object         | false    | none                                                              |
| »»» arrival               | body   | boolean        | false    | none                                                              |
| »»» depature              | body   | boolean        | false    | none                                                              |
| »»» transit               | body   | boolean        | false    | none                                                              |

#### Enumerated Values

| Parameter        | Value |
| ---------------- | ----- |
| » booking_window | 6     |
| » booking_window | 12    |
| » booking_window | 24    |
| » booking_window | 48    |
| » currency       | USD   |
| » currency       | GBP   |
| » currency       | EUR   |
| »»» currancy     | USD   |
| »»» currancy     | GBP   |
| »»» currancy     | EUR   |

> Example responses

> 201 Response

```json
{
  "Data": {
    "id": "47cc67093475061e3d95369d",
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
      "latitude": 40.690252,
      "longitude": -74.172314
    },
    "contacts": [
      {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
                "currency": "USD",
                "packages": [
                  {
                    "pax": 0,
                    "value": 0
                  }
                ]
              }
            ],
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
        "service_providers": {
          "id": "47cc67093475061e3d95369d",
          "company_name": "string",
          "image": "company_image.png",
          "default": true,
          "contacts": {
            "address": {
              "streets": ["No 221/1, Baker's Street"],
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
                  "currency": "USD",
                  "packages": [{}]
                }
              ],
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
  },
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-responseschema">Response Schema</h3>

#### Enumerated Values

| Property       | Value |
| -------------- | ----- |
| booking_window | 6     |
| booking_window | 12    |
| booking_window | 24    |
| booking_window | 48    |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currancy       | USD   |
| currancy       | GBP   |
| currancy       | EUR   |
| status         | 200   |
| status         | 201   |
| status         | 204   |

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

#### Enumerated Values

| Property       | Value |
| -------------- | ----- |
| booking_window | 6     |
| booking_window | 12    |
| booking_window | 24    |
| booking_window | 48    |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currancy       | USD   |
| currancy       | GBP   |
| currancy       | EUR   |
| status         | 200   |
| status         | 201   |
| status         | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-airports-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
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
        "streets": [
          "No 221/1, Baker's Street"
        ],
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
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/airports/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
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
        "streets": ["No 221/1, Baker's Street"],
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
  }
}
```

<h3 id="post-airports-id-parameters">Parameters</h3>

| Name                      | In     | Type           | Required | Description                                                       |
| ------------------------- | ------ | -------------- | -------- | ----------------------------------------------------------------- |
| X-Trace-Id                | header | string         | false    | Please provide your UUID for tracing                              |
| Content-Type              | header | string         | true     | application/json                                                  |
| body                      | body   | object         | false    | PUT airport request body                                          |
| » code                    | body   | string         | true     | Airport code                                                      |
| » name                    | body   | string         | true     | Airport name                                                      |
| » country                 | body   | string         | true     | Airport country                                                   |
| » city                    | body   | string         | true     | Airport city                                                      |
| » time_zone               | body   | string         | false    | Airport time zone                                                 |
| » booking_window          | body   | number         | false    | Minimal time allowed to make a booking pior serivce date and time |
| » currency                | body   | string         | false    | Preffered currency of the airport                                 |
| » comments                | body   | string         | false    | Special comments regarding the airport                            |
| » image                   | body   | string         | false    | Image url of the airport                                          |
| » location                | body   | object         | false    | Exact geo location of the airport                                 |
| »» lat                    | body   | number(double) | false    | none                                                              |
| »» long                   | body   | number(double) | false    | none                                                              |
| » contacts                | body   | [object]       | false    | Contact details of the airport                                    |
| »» address                | body   | object         | false    | Addres information                                                |
| »»» streets               | body   | [string]       | false    | none                                                              |
| »»» city                  | body   | string         | false    | none                                                              |
| »»» state                 | body   | string         | false    | none                                                              |
| »»» postal_code           | body   | string         | false    | none                                                              |
| »»» country               | body   | string         | false    | none                                                              |
| »» emails                 | body   | [object]       | false    | Email information                                                 |
| »»» type                  | body   | string         | false    | none                                                              |
| »»» email                 | body   | string(email)  | false    | none                                                              |
| »» phones                 | body   | [object]       | false    | Phone numbers                                                     |
| »»» type                  | body   | string         | false    | none                                                              |
| »»» name                  | body   | string         | false    | none                                                              |
| »»» phone                 | body   | string         | false    | none                                                              |
| » operational             | body   | boolean        | false    | If the airport is operatable                                      |
| » charges                 | body   | object         | false    | harges assosiated with the airport                                |
| »» surcharge              | body   | [object]       | false    | none                                                              |
| »»» below                 | body   | number         | false    | none                                                              |
| »»» percentage            | body   | number         | false    | none                                                              |
| »» additional_hour_charge | body   | [object]       | false    | none                                                              |
| »»» currancy              | body   | string         | false    | none                                                              |
| »»» rate                  | body   | number         | false    | none                                                              |
| » air_side_meetup         | body   | object         | false    | Passenger meet up point is at the air side or land side           |
| »» international          | body   | object         | false    | none                                                              |
| »»» arrival               | body   | boolean        | false    | none                                                              |
| »»» depature              | body   | boolean        | false    | none                                                              |
| »»» transit               | body   | boolean        | false    | none                                                              |
| »» domestic               | body   | object         | false    | none                                                              |
| »»» arrival               | body   | boolean        | false    | none                                                              |
| »»» depature              | body   | boolean        | false    | none                                                              |
| »»» transit               | body   | boolean        | false    | none                                                              |
| id                        | path   | string         | true     | an airport id                                                     |

#### Enumerated Values

| Parameter        | Value |
| ---------------- | ----- |
| » booking_window | 6     |
| » booking_window | 12    |
| » booking_window | 24    |
| » booking_window | 48    |
| » currency       | USD   |
| » currency       | GBP   |
| » currency       | EUR   |
| »»» currancy     | USD   |
| »»» currancy     | GBP   |
| »»» currancy     | EUR   |

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

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "47cc67093475061e3d95369d",
        "email": "email@email.com",
        "email_contacts": [
          {
            "type": "Main",
            "email": "email@email.com"
          }
        ],
        "name": {
          "title": "Mr.",
          "forename": "John",
          "surname": "Doe"
        },
        "company": {
          "id": "47cc67093475061e3d95369d",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "47cc67093475061e3d95369d",
          "reference_id": 1,
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "pnr": "JHS3ES",
                "class": "First",
                "details": {
                  "id": "47cc67093475061e3d95369d",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": {},
                    "emails": [],
                    "phones": []
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe",
                  "sig_image": "signage_image.png",
                  "image": "passenger_image.jpg",
                  "pas_stat": true,
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
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20",
              "location": "United Kingdom",
              "airport": {
                "id": "47cc67093475061e3d95369d",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15",
                  "origin": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15",
                  "destination": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "service_providers": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "This is a Company PVT Ltd",
                  "services": ["47cc67093475061e3d95369d"],
                  "status": 0,
                  "email_status": {
                    "sup_email_sent": true,
                    "sup_sent_date": "2019-08-24T14:15:22Z",
                    "sup_action_date": "2019-08-24T14:15:22Z",
                    "grt_info_sent": true,
                    "grt_sent_date": "2019-08-24T14:15:22Z"
                  },
                  "agent": [{}],
                  "greeter": [{}],
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
              "services": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "service_name": "Meet & Assist Service",
                  "passengers": {
                    "meta": {},
                    "pax": []
                  }
                }
              ]
            }
          ],
          "special_notes": "string",
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
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": "336.38",
        "add_hrs_charge": "0.00",
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-bookings-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | GAC        |
| type     | USS        |
| type     | MCS        |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Online     |
| type     | RES Online |
| type     | Invoice    |
| type     | Quotation  |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| status   | 3          |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
const inputBody = '{
  "type": "GAC",
  "booker": {
    "id": "47cc67093475061e3d95369d",
    "company": {
      "id": "47cc67093475061e3d95369d"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": "336.38",
    "add_hrs_charge": "0.00",
    "surcharge": 0,
    "total_booking_cost": 336.38,
    "promo_code": "PROMO10",
    "total_discount": 33.63,
    "grand_total": 302.75,
    "total_paid": 302.75
  },
  "commets": "First Time Traveller"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/bookings',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "type": "GAC",
  "booker": {
    "id": "47cc67093475061e3d95369d",
    "company": {
      "id": "47cc67093475061e3d95369d"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": "336.38",
    "add_hrs_charge": "0.00",
    "surcharge": 0,
    "total_booking_cost": 336.38,
    "promo_code": "PROMO10",
    "total_discount": 33.63,
    "grand_total": 302.75,
    "total_paid": 302.75
  },
  "commets": "First Time Traveller"
}
```

<h3 id="post-bookings-parameters">Parameters</h3>

| Name                  | In     | Type           | Required | Description                          |
| --------------------- | ------ | -------------- | -------- | ------------------------------------ |
| X-Trace-Id            | header | string         | false    | Please provide your UUID for tracing |
| Content-Type          | header | string         | true     | application/json                     |
| body                  | body   | object         | false    | booking request body                 |
| » type                | body   | string         | true     | Booking type                         |
| » booker              | body   | object         | true     | Booker details                       |
| »» id                 | body   | string         | true     | none                                 |
| »» company            | body   | object         | true     | none                                 |
| »»» id                | body   | string         | true     | none                                 |
| » billing             | body   | object         | true     | Billing details                      |
| »» type               | body   | string         | true     | none                                 |
| »» status             | body   | number         | true     | none                                 |
| »» ref_id             | body   | string         | false    | none                                 |
| »» card               | body   | string         | false    | none                                 |
| »» total_service_cost | body   | number(double) | true     | none                                 |
| »» add_hrs_charge     | body   | number         | true     | none                                 |
| »» surcharge          | body   | number(double) | true     | none                                 |
| »» total_booking_cost | body   | number(double) | true     | none                                 |
| »» promo_code         | body   | string         | true     | none                                 |
| »» total_discount     | body   | number         | true     | none                                 |
| »» grand_total        | body   | number         | true     | none                                 |
| »» total_paid         | body   | number         | true     | none                                 |
| » commets             | body   | string         | false    | Special comments of the booking      |

#### Enumerated Values

| Parameter | Value      |
| --------- | ---------- |
| » type    | GAC        |
| » type    | USS        |
| » type    | MCS        |
| »» type   | Online     |
| »» type   | RES Online |
| »» type   | Invoice    |
| »» type   | Quotation  |
| »» status | 0          |
| »» status | 1          |
| »» status | 2          |
| »» status | 3          |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "47cc67093475061e3d95369d",
        "email": "email@email.com",
        "email_contacts": [
          {
            "type": "Main",
            "email": "email@email.com"
          }
        ],
        "name": {
          "title": "Mr.",
          "forename": "John",
          "surname": "Doe"
        },
        "company": {
          "id": "47cc67093475061e3d95369d",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "47cc67093475061e3d95369d",
          "reference_id": 1,
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "pnr": "JHS3ES",
                "class": "First",
                "details": {
                  "id": "47cc67093475061e3d95369d",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": {},
                    "emails": [],
                    "phones": []
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe",
                  "sig_image": "signage_image.png",
                  "image": "passenger_image.jpg",
                  "pas_stat": true,
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
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20",
              "location": "United Kingdom",
              "airport": {
                "id": "47cc67093475061e3d95369d",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15",
                  "origin": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15",
                  "destination": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "service_providers": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "This is a Company PVT Ltd",
                  "services": ["47cc67093475061e3d95369d"],
                  "status": 0,
                  "email_status": {
                    "sup_email_sent": true,
                    "sup_sent_date": "2019-08-24T14:15:22Z",
                    "sup_action_date": "2019-08-24T14:15:22Z",
                    "grt_info_sent": true,
                    "grt_sent_date": "2019-08-24T14:15:22Z"
                  },
                  "agent": [{}],
                  "greeter": [{}],
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
              "services": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "service_name": "Meet & Assist Service",
                  "passengers": {
                    "meta": {},
                    "pax": []
                  }
                }
              ]
            }
          ],
          "special_notes": "string",
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
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": "336.38",
        "add_hrs_charge": "0.00",
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-bookings-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | GAC        |
| type     | USS        |
| type     | MCS        |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Online     |
| type     | RES Online |
| type     | Invoice    |
| type     | Quotation  |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| status   | 3          |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "47cc67093475061e3d95369d",
        "email": "email@email.com",
        "email_contacts": [
          {
            "type": "Main",
            "email": "email@email.com"
          }
        ],
        "name": {
          "title": "Mr.",
          "forename": "John",
          "surname": "Doe"
        },
        "company": {
          "id": "47cc67093475061e3d95369d",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "47cc67093475061e3d95369d",
          "reference_id": 1,
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "pnr": "JHS3ES",
                "class": "First",
                "details": {
                  "id": "47cc67093475061e3d95369d",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": {},
                    "emails": [],
                    "phones": []
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe",
                  "sig_image": "signage_image.png",
                  "image": "passenger_image.jpg",
                  "pas_stat": true,
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
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20",
              "location": "United Kingdom",
              "airport": {
                "id": "47cc67093475061e3d95369d",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15",
                  "origin": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15",
                  "destination": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "service_providers": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "This is a Company PVT Ltd",
                  "services": ["47cc67093475061e3d95369d"],
                  "status": 0,
                  "email_status": {
                    "sup_email_sent": true,
                    "sup_sent_date": "2019-08-24T14:15:22Z",
                    "sup_action_date": "2019-08-24T14:15:22Z",
                    "grt_info_sent": true,
                    "grt_sent_date": "2019-08-24T14:15:22Z"
                  },
                  "agent": [{}],
                  "greeter": [{}],
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
              "services": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "service_name": "Meet & Assist Service",
                  "passengers": {
                    "meta": {},
                    "pax": []
                  }
                }
              ]
            }
          ],
          "special_notes": "string",
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
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": "336.38",
        "add_hrs_charge": "0.00",
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-bookings-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | GAC        |
| type     | USS        |
| type     | MCS        |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Online     |
| type     | RES Online |
| type     | Invoice    |
| type     | Quotation  |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| status   | 3          |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
const inputBody = '{
  "type": "GAC",
  "booker": {
    "id": "47cc67093475061e3d95369d",
    "company": {
      "id": "47cc67093475061e3d95369d"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": "336.38",
    "add_hrs_charge": "0.00",
    "surcharge": 0,
    "total_booking_cost": 336.38,
    "promo_code": "PROMO10",
    "total_discount": 33.63,
    "grand_total": 302.75,
    "total_paid": 302.75
  },
  "commets": "First Time Traveller"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/bookings/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "type": "GAC",
  "booker": {
    "id": "47cc67093475061e3d95369d",
    "company": {
      "id": "47cc67093475061e3d95369d"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": "336.38",
    "add_hrs_charge": "0.00",
    "surcharge": 0,
    "total_booking_cost": 336.38,
    "promo_code": "PROMO10",
    "total_discount": 33.63,
    "grand_total": 302.75,
    "total_paid": 302.75
  },
  "commets": "First Time Traveller"
}
```

<h3 id="post-bookings-id-parameters">Parameters</h3>

| Name                  | In     | Type           | Required | Description                          |
| --------------------- | ------ | -------------- | -------- | ------------------------------------ |
| X-Trace-Id            | header | string         | false    | Please provide your UUID for tracing |
| Content-Type          | header | string         | true     | application/json                     |
| body                  | body   | object         | false    | update booking request body          |
| » type                | body   | string         | true     | Booking type                         |
| » booker              | body   | object         | true     | Booker details                       |
| »» id                 | body   | string         | true     | none                                 |
| »» company            | body   | object         | true     | none                                 |
| »»» id                | body   | string         | true     | none                                 |
| » billing             | body   | object         | true     | Billing details                      |
| »» type               | body   | string         | true     | none                                 |
| »» status             | body   | number         | true     | none                                 |
| »» ref_id             | body   | string         | false    | none                                 |
| »» card               | body   | string         | false    | none                                 |
| »» total_service_cost | body   | number(double) | true     | none                                 |
| »» add_hrs_charge     | body   | number         | true     | none                                 |
| »» surcharge          | body   | number(double) | true     | none                                 |
| »» total_booking_cost | body   | number(double) | true     | none                                 |
| »» promo_code         | body   | string         | true     | none                                 |
| »» total_discount     | body   | number         | true     | none                                 |
| »» grand_total        | body   | number         | true     | none                                 |
| »» total_paid         | body   | number         | true     | none                                 |
| » commets             | body   | string         | false    | Special comments of the booking      |
| id                    | path   | string         | true     | a booking id                         |

#### Enumerated Values

| Parameter | Value      |
| --------- | ---------- |
| » type    | GAC        |
| » type    | USS        |
| » type    | MCS        |
| »» type   | Online     |
| »» type   | RES Online |
| »» type   | Invoice    |
| »» type   | Quotation  |
| »» status | 0          |
| »» status | 1          |
| »» status | 2          |
| »» status | 3          |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "47cc67093475061e3d95369d",
        "email": "email@email.com",
        "email_contacts": [
          {
            "type": "Main",
            "email": "email@email.com"
          }
        ],
        "name": {
          "title": "Mr.",
          "forename": "John",
          "surname": "Doe"
        },
        "company": {
          "id": "47cc67093475061e3d95369d",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "47cc67093475061e3d95369d",
          "reference_id": 1,
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "pnr": "JHS3ES",
                "class": "First",
                "details": {
                  "id": "47cc67093475061e3d95369d",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": {},
                    "emails": [],
                    "phones": []
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe",
                  "sig_image": "signage_image.png",
                  "image": "passenger_image.jpg",
                  "pas_stat": true,
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
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20",
              "location": "United Kingdom",
              "airport": {
                "id": "47cc67093475061e3d95369d",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15",
                  "origin": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15",
                  "destination": {
                    "id": "47cc67093475061e3d95369d",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "service_providers": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "This is a Company PVT Ltd",
                  "services": ["47cc67093475061e3d95369d"],
                  "status": 0,
                  "email_status": {
                    "sup_email_sent": true,
                    "sup_sent_date": "2019-08-24T14:15:22Z",
                    "sup_action_date": "2019-08-24T14:15:22Z",
                    "grt_info_sent": true,
                    "grt_sent_date": "2019-08-24T14:15:22Z"
                  },
                  "agent": [{}],
                  "greeter": [{}],
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
              "services": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "service_name": "Meet & Assist Service",
                  "passengers": {
                    "meta": {},
                    "pax": []
                  }
                }
              ]
            }
          ],
          "special_notes": "string",
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
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": "336.38",
        "add_hrs_charge": "0.00",
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-bookings-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | GAC        |
| type     | USS        |
| type     | MCS        |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Online     |
| type     | RES Online |
| type     | Invoice    |
| type     | Quotation  |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| status   | 3          |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-bookings-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-bookings-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "This is a Company PVT Ltd",
      "roles": ["cc"],
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "company_image.jpg",
      "num_of_bookings": 1,
      "tot_spent": 1000,
      "lead_passengers": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": {
            "title": "Mr.",
            "forename": "John",
            "surname": "Doe"
          },
          "contacts": {
            "address": {
              "streets": ["No 221/1, Baker's Street"],
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
          "date_of_birth": "1989-02-14",
          "passport_no": "N32343423",
          "comments": "First time traveller.",
          "signage": "John Doe",
          "sig_image": "signage_image.png",
          "image": "passenger_image.jpg",
          "pas_stat": true,
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
      "bank_details": [
        {
          "id": "47cc67093475061e3d95369d",
          "account_name": "This is an Account Name",
          "account_number": "1001-2589-2224-5975",
          "bank_name": "Standard Charted Bank",
          "swift_code": "LSKDJFHEE",
          "iban_num": "dfsd34sdds23",
          "address": {
            "streests": ["222/1, Baker's Street"],
            "city": "London",
            "state": "London",
            "postal_code": "LN234 2321",
            "country": "United Kingdom"
          },
          "default": true,
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
      "global_discount": [
        {
          "id": "47cc67093475061e3d95369d",
          "airport_id": "47cc67093475061e3d95369d",
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "discount_precentage": 0,
              "rates": [
                {
                  "currency": "USD",
                  "packages": [{}]
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-companies-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-companies-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| currency | USD    |
| currency | GBP    |
| currency | EUR    |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "name": "This is a Company PVT Ltd",
  "roles": [
    "cc"
  ],
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "image": "company_image.jpg",
  "bank_details": [
    {
      "id": "47cc67093475061e3d95369d",
      "account_name": "This is an Account Name",
      "account_number": "1001-2589-2224-5975",
      "bank_name": "Standard Charted Bank",
      "swift_code": "LSKDJFHEE",
      "iban_num": "dfsd34sdds23",
      "address": {
        "streets": [
          "No 221/A, Baker's Street"
        ],
        "city": "London",
        "state": "London",
        "postal_code": "LN234 2321",
        "country": "United Kingdom"
      },
      "default": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/companies',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "name": "This is a Company PVT Ltd",
  "roles": ["cc"],
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "image": "company_image.jpg",
  "bank_details": [
    {
      "id": "47cc67093475061e3d95369d",
      "account_name": "This is an Account Name",
      "account_number": "1001-2589-2224-5975",
      "bank_name": "Standard Charted Bank",
      "swift_code": "LSKDJFHEE",
      "iban_num": "dfsd34sdds23",
      "address": {
        "streets": ["No 221/A, Baker's Street"],
        "city": "London",
        "state": "London",
        "postal_code": "LN234 2321",
        "country": "United Kingdom"
      },
      "default": true
    }
  ]
}
```

<h3 id="post-companies-parameters">Parameters</h3>

| Name              | In     | Type          | Required | Description                                                                                   |
| ----------------- | ------ | ------------- | -------- | --------------------------------------------------------------------------------------------- |
| X-Trace-Id        | header | string        | false    | Please provide your UUID for tracing                                                          |
| Content-Type      | header | string        | true     | application/json                                                                              |
| body              | body   | object        | false    | company request body                                                                          |
| » name            | body   | string        | true     | Company name                                                                                  |
| » roles           | body   | [string]      | true     | Company roles                                                                                 |
| » contacts        | body   | object        | false    | Contact model                                                                                 |
| »» address        | body   | object        | false    | Addres information                                                                            |
| »»» streets       | body   | [string]      | false    | none                                                                                          |
| »»» city          | body   | string        | false    | none                                                                                          |
| »»» state         | body   | string        | false    | none                                                                                          |
| »»» postal_code   | body   | string        | false    | none                                                                                          |
| »»» country       | body   | string        | false    | none                                                                                          |
| »» emails         | body   | [object]      | false    | Email information                                                                             |
| »»» type          | body   | string        | false    | none                                                                                          |
| »»» email         | body   | string(email) | false    | none                                                                                          |
| »» phones         | body   | [object]      | false    | Phone numbers                                                                                 |
| »»» type          | body   | string        | false    | none                                                                                          |
| »»» name          | body   | string        | false    | none                                                                                          |
| »»» phone         | body   | string        | false    | none                                                                                          |
| » image           | body   | string        | false    | COmpany image URL                                                                             |
| » bank_details    | body   | [allOf]       | false    | Bank Details of the bank                                                                      |
| »» id             | body   | string        | false    | none                                                                                          |
| »» account_name   | body   | string        | false    | none                                                                                          |
| »» account_number | body   | string        | false    | none                                                                                          |
| »» bank_name      | body   | string        | false    | none                                                                                          |
| »» swift_code     | body   | string        | false    | none                                                                                          |
| »» iban_num       | body   | string        | false    | none                                                                                          |
| »» address        | body   | object        | false    | none                                                                                          |
| »»» streets       | body   | [string]      | false    | !!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!! |
| »»» city          | body   | string        | false    | none                                                                                          |
| »»» state         | body   | string        | false    | none                                                                                          |
| »»» postal_code   | body   | string        | false    | none                                                                                          |
| »»» country       | body   | string        | false    | none                                                                                          |
| »» default        | body   | boolean       | false    | none                                                                                          |

#### Detailed descriptions

**» roles**: Company roles
!!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!!

**» bank_details**: Bank Details of the bank
!!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!!

#### Enumerated Values

| Parameter | Value |
| --------- | ----- |
| » roles   | cc    |
| » roles   | sp    |
| » roles   | rc    |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "This is a Company PVT Ltd",
      "roles": ["cc"],
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "company_image.jpg",
      "num_of_bookings": 1,
      "tot_spent": 1000,
      "lead_passengers": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": {
            "title": "Mr.",
            "forename": "John",
            "surname": "Doe"
          },
          "contacts": {
            "address": {
              "streets": ["No 221/1, Baker's Street"],
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
          "date_of_birth": "1989-02-14",
          "passport_no": "N32343423",
          "comments": "First time traveller.",
          "signage": "John Doe",
          "sig_image": "signage_image.png",
          "image": "passenger_image.jpg",
          "pas_stat": true,
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
      "bank_details": [
        {
          "id": "47cc67093475061e3d95369d",
          "account_name": "This is an Account Name",
          "account_number": "1001-2589-2224-5975",
          "bank_name": "Standard Charted Bank",
          "swift_code": "LSKDJFHEE",
          "iban_num": "dfsd34sdds23",
          "address": {
            "streests": ["222/1, Baker's Street"],
            "city": "London",
            "state": "London",
            "postal_code": "LN234 2321",
            "country": "United Kingdom"
          },
          "default": true,
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
      "global_discount": [
        {
          "id": "47cc67093475061e3d95369d",
          "airport_id": "47cc67093475061e3d95369d",
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "discount_precentage": 0,
              "rates": [
                {
                  "currency": "USD",
                  "packages": [{}]
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-companies-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-companies-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| currency | USD    |
| currency | GBP    |
| currency | EUR    |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "This is a Company PVT Ltd",
      "roles": ["cc"],
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "company_image.jpg",
      "num_of_bookings": 1,
      "tot_spent": 1000,
      "lead_passengers": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": {
            "title": "Mr.",
            "forename": "John",
            "surname": "Doe"
          },
          "contacts": {
            "address": {
              "streets": ["No 221/1, Baker's Street"],
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
          "date_of_birth": "1989-02-14",
          "passport_no": "N32343423",
          "comments": "First time traveller.",
          "signage": "John Doe",
          "sig_image": "signage_image.png",
          "image": "passenger_image.jpg",
          "pas_stat": true,
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
      "bank_details": [
        {
          "id": "47cc67093475061e3d95369d",
          "account_name": "This is an Account Name",
          "account_number": "1001-2589-2224-5975",
          "bank_name": "Standard Charted Bank",
          "swift_code": "LSKDJFHEE",
          "iban_num": "dfsd34sdds23",
          "address": {
            "streests": ["222/1, Baker's Street"],
            "city": "London",
            "state": "London",
            "postal_code": "LN234 2321",
            "country": "United Kingdom"
          },
          "default": true,
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
      "global_discount": [
        {
          "id": "47cc67093475061e3d95369d",
          "airport_id": "47cc67093475061e3d95369d",
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "discount_precentage": 0,
              "rates": [
                {
                  "currency": "USD",
                  "packages": [{}]
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-companies-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-companies-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| currency | USD    |
| currency | GBP    |
| currency | EUR    |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "id": "47cc67093475061e3d95369d",
  "name": "This is a Company PVT Ltd",
  "roles": [
    "cc"
  ],
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "image": "company_image.jpg",
  "num_of_bookings": 1,
  "tot_spent": 1000,
  "lead_passengers": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": [
            "No 221/1, Baker's Street"
          ],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "bank_details": [
    {
      "id": "47cc67093475061e3d95369d",
      "account_name": "This is an Account Name",
      "account_number": "1001-2589-2224-5975",
      "bank_name": "Standard Charted Bank",
      "swift_code": "LSKDJFHEE",
      "iban_num": "dfsd34sdds23",
      "address": {
        "streests": [
          "222/1, Baker's Street"
        ],
        "city": "London",
        "state": "London",
        "postal_code": "LN234 2321",
        "country": "United Kingdom"
      },
      "default": true,
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
  "global_discount": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
}';
const headers = {
  'Content-Type':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/companies/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "47cc67093475061e3d95369d",
  "name": "This is a Company PVT Ltd",
  "roles": ["cc"],
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "image": "company_image.jpg",
  "num_of_bookings": 1,
  "tot_spent": 1000,
  "lead_passengers": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "bank_details": [
    {
      "id": "47cc67093475061e3d95369d",
      "account_name": "This is an Account Name",
      "account_number": "1001-2589-2224-5975",
      "bank_name": "Standard Charted Bank",
      "swift_code": "LSKDJFHEE",
      "iban_num": "dfsd34sdds23",
      "address": {
        "streests": ["222/1, Baker's Street"],
        "city": "London",
        "state": "London",
        "postal_code": "LN234 2321",
        "country": "United Kingdom"
      },
      "default": true,
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
  "global_discount": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
```

<h3 id="post-companies-id-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| body         | body   | any    | false    | con=mpany request body               |
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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-companies-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-companies-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-discounts-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-discounts-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "id": "47cc67093475061e3d95369d",
  "airport_id": "47cc67093475061e3d95369d",
  "services": [
    {
      "id": "47cc67093475061e3d95369d",
      "discount_precentage": 0,
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ]
    }
  ],
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/discounts?company_id=47cc67093475061e3d95369d',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "47cc67093475061e3d95369d",
  "airport_id": "47cc67093475061e3d95369d",
  "services": [
    {
      "id": "47cc67093475061e3d95369d",
      "discount_precentage": 0,
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ]
    }
  ],
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
```

<h3 id="post-discounts-parameters">Parameters</h3>

| Name         | In     | Type   | Required | Description                          |
| ------------ | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id   | header | string | false    | Please provide your UUID for tracing |
| Content-Type | header | string | true     | application/json                     |
| company_id   | query  | string | true     | a company id                         |
| body         | body   | any    | false    | discount request body                |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-discounts-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-discounts-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-discounts-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-discounts-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "airport_id": "string",
  "services": [
    {
      "id": "string",
      "discount_precentage": 0,
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/discounts/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "airport_id": "string",
  "services": [
    {
      "id": "string",
      "discount_precentage": 0,
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="put-discounts-id-parameters">Parameters</h3>

| Name                   | In     | Type     | Required | Description                                                                                   |
| ---------------------- | ------ | -------- | -------- | --------------------------------------------------------------------------------------------- |
| X-Trace-Id             | header | string   | false    | Please provide your UUID for tracing                                                          |
| Content-Type           | header | string   | true     | application/json                                                                              |
| body                   | body   | object   | false    | discount request body                                                                         |
| » airport_id           | body   | string   | true     | Airport id                                                                                    |
| » services             | body   | [object] | true     | Services which the discount is applicable                                                     |
| »» id                  | body   | string   | true     | none                                                                                          |
| »» discount_precentage | body   | number   | true     | none                                                                                          |
| »» rates               | body   | [object] | false    | !!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!! |
| »»» currency           | body   | string   | true     | none                                                                                          |
| »»» packages           | body   | [object] | false    | !!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!! |
| »»»» pax               | body   | number   | true     | none                                                                                          |
| »»»» value             | body   | number   | true     | none                                                                                          |
| id                     | path   | string   | true     | a discount id                                                                                 |

#### Detailed descriptions

**» services**: Services which the discount is applicable
!!! Please note the MAX value is set for Prism Mock to return a limited number of objects !!!

#### Enumerated Values

| Parameter    | Value |
| ------------ | ----- |
| »»» currency | USD   |
| »»» currency | GBP   |
| »»» currency | UER   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "airport_id": "47cc67093475061e3d95369d",
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "discount_precentage": 0,
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="put-discounts-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-discounts-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-discounts-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-discounts-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "journey_id": "47cc67093475061e3d95369d",
      "reference_id": 1,
      "passengers": {
        "meta": {
          "adult": 2,
          "child": 2,
          "infant": 0,
          "bags": 5
        },
        "pax": [
          {
            "type": "Lead",
            "pnr": "JHS3ES",
            "class": "First",
            "details": {
              "id": "47cc67093475061e3d95369d",
              "name": {
                "title": "Mr.",
                "forename": "John",
                "surname": "Doe"
              },
              "contacts": {
                "address": {
                  "streets": ["No 221/1, Baker's Street"],
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
              "date_of_birth": "1989-02-14",
              "passport_no": "N32343423",
              "comments": "First time traveller.",
              "signage": "John Doe",
              "sig_image": "signage_image.png",
              "image": "passenger_image.jpg",
              "pas_stat": true,
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
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20",
          "location": "United Kingdom",
          "airport": {
            "id": "47cc67093475061e3d95369d",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15",
              "origin": {
                "id": "47cc67093475061e3d95369d",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15",
              "destination": {
                "id": "47cc67093475061e3d95369d",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "service_providers": [
            {
              "id": "47cc67093475061e3d95369d",
              "name": "This is a Company PVT Ltd",
              "services": ["47cc67093475061e3d95369d"],
              "status": 0,
              "email_status": {
                "sup_email_sent": true,
                "sup_sent_date": "2019-08-24T14:15:22Z",
                "sup_action_date": "2019-08-24T14:15:22Z",
                "grt_info_sent": true,
                "grt_sent_date": "2019-08-24T14:15:22Z"
              },
              "agent": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Company LHR OPS Team",
                  "email_contacts": [{}]
                }
              ],
              "greeter": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Jane Doe",
                  "email_contacts": [{}]
                }
              ],
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
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "service_name": "Meet & Assist Service",
              "passengers": {
                "meta": {
                  "adult": 2,
                  "child": 2,
                  "infant": 0,
                  "bags": 5
                },
                "pax": [
                  {
                    "type": "Lead",
                    "details": {}
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-bookings-id-journeys-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-journeys-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
const inputBody = '{
  "passengers": {
    "meta": {
      "adult": 2,
      "child": 2,
      "infant": 0,
      "bags": 5
    },
    "pax": [
      {
        "type": "Lead",
        "pnr": "JHS3ES",
        "class": "First",
        "id": "string"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20",
      "location": "United Kingdom",
      "airport": {
        "id": "47cc67093475061e3d95369d"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15",
          "origin": {
            "id": "47cc67093475061e3d95369d",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15",
          "destination": {
            "id": "47cc67093475061e3d95369d",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "service_providers": [
        {
          "id": "47cc67093475061e3d95369d",
          "services": [
            "47cc67093475061e3d95369d"
          ],
          "status": 0,
          "email_status": {
            "sup_email_sent": true,
            "sup_sent_date": "2019-08-24T14:15:22Z",
            "sup_action_date": "2019-08-24T14:15:22Z",
            "grt_info_sent": true,
            "grt_sent_date": "2019-08-24T14:15:22Z"
          },
          "agent": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ],
          "greeter": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ]
        }
      ],
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "id": "string"
              }
            ]
          }
        }
      ]
    }
  ],
  "special_notes": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/journeys?booking_id=47cc67093475061e3d95369d',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "passengers": {
    "meta": {
      "adult": 2,
      "child": 2,
      "infant": 0,
      "bags": 5
    },
    "pax": [
      {
        "type": "Lead",
        "pnr": "JHS3ES",
        "class": "First",
        "id": "string"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20",
      "location": "United Kingdom",
      "airport": {
        "id": "47cc67093475061e3d95369d"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15",
          "origin": {
            "id": "47cc67093475061e3d95369d",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15",
          "destination": {
            "id": "47cc67093475061e3d95369d",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "service_providers": [
        {
          "id": "47cc67093475061e3d95369d",
          "services": ["47cc67093475061e3d95369d"],
          "status": 0,
          "email_status": {
            "sup_email_sent": true,
            "sup_sent_date": "2019-08-24T14:15:22Z",
            "sup_action_date": "2019-08-24T14:15:22Z",
            "grt_info_sent": true,
            "grt_sent_date": "2019-08-24T14:15:22Z"
          },
          "agent": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ],
          "greeter": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ]
        }
      ],
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "id": "string"
              }
            ]
          }
        }
      ]
    }
  ],
  "special_notes": "string"
}
```

<h3 id="post-bookings-id-journeys-parameters">Parameters</h3>

| Name                 | In     | Type              | Required | Description                          |
| -------------------- | ------ | ----------------- | -------- | ------------------------------------ |
| X-Trace-Id           | header | string            | false    | Please provide your UUID for tracing |
| Content-Type         | header | string            | true     | application/json                     |
| booking_id           | query  | string            | true     | a booking id                         |
| body                 | body   | object            | false    | journey request body                 |
| » passengers         | body   | object            | true     | none                                 |
| »» meta              | body   | object            | true     | none                                 |
| »»» adult            | body   | number            | true     | none                                 |
| »»» child            | body   | number            | true     | none                                 |
| »»» infant           | body   | number            | true     | none                                 |
| »»» bags             | body   | number            | true     | none                                 |
| »» pax               | body   | [object]          | true     | none                                 |
| »»» type             | body   | string            | false    | none                                 |
| »»» pnr              | body   | string            | false    | none                                 |
| »»» class            | body   | string            | false    | none                                 |
| »»» id               | body   | string            | false    | none                                 |
| » stops              | body   | [object]          | true     | none                                 |
| »» type              | body   | string            | true     | none                                 |
| »» meeting_date      | body   | string(date)      | true     | none                                 |
| »» meeting_time      | body   | string(time)      | true     | none                                 |
| »» location          | body   | string            | true     | none                                 |
| »» airport           | body   | object            | false    | none                                 |
| »»» id               | body   | string            | true     | none                                 |
| »» flights           | body   | object            | false    | none                                 |
| »»» arrival          | body   | object            | true     | none                                 |
| »»»» flight_no       | body   | string            | true     | none                                 |
| »»»» terminal        | body   | string            | true     | none                                 |
| »»»» date            | body   | string(date)      | true     | none                                 |
| »»»» time            | body   | string(time)      | true     | none                                 |
| »»»» origin          | body   | object            | true     | none                                 |
| »»»»» id             | body   | string            | true     | none                                 |
| »»»»» name           | body   | string            | true     | none                                 |
| »»» departure        | body   | object            | true     | none                                 |
| »»»» flight_no       | body   | string            | true     | none                                 |
| »»»» terminal        | body   | string            | true     | none                                 |
| »»»» date            | body   | string(date)      | true     | none                                 |
| »»»» time            | body   | string(time)      | true     | none                                 |
| »»»» destination     | body   | object            | true     | none                                 |
| »»»»» id             | body   | string            | true     | none                                 |
| »»»»» name           | body   | string            | true     | none                                 |
| »» service_providers | body   | [allOf]           | true     | none                                 |
| »»» id               | body   | string            | true     | none                                 |
| »»» services         | body   | [string]          | false    | none                                 |
| »»» status           | body   | number            | true     | none                                 |
| »»» email_status     | body   | object            | false    | none                                 |
| »»»» sup_email_sent  | body   | boolean           | true     | none                                 |
| »»»» sup_sent_date   | body   | string(date-time) | false    | none                                 |
| »»»» sup_action_date | body   | string(date-time) | false    | none                                 |
| »»»» grt_info_sent   | body   | boolean           | true     | none                                 |
| »»»» grt_sent_date   | body   | string(date-time) | false    | none                                 |
| »»» agent            | body   | [object]          | false    | none                                 |
| »»»» id              | body   | string            | false    | none                                 |
| »»» greeter          | body   | [object]          | false    | none                                 |
| »»»» id              | body   | string            | false    | none                                 |
| »» services          | body   | [object]          | true     | none                                 |
| »»» id               | body   | string            | false    | none                                 |
| »»» passengers       | body   | object            | false    | none                                 |
| »»»» meta            | body   | object            | false    | none                                 |
| »»»»» adult          | body   | number            | false    | none                                 |
| »»»»» child          | body   | number            | false    | none                                 |
| »»»»» infant         | body   | number            | false    | none                                 |
| »»»»» bags           | body   | number            | false    | none                                 |
| »»»» pax             | body   | [object]          | false    | none                                 |
| »»»»» type           | body   | string            | false    | none                                 |
| »»»»» id             | body   | string            | false    | none                                 |
| » special_notes      | body   | string            | false    | none                                 |

#### Enumerated Values

| Parameter  | Value      |
| ---------- | ---------- |
| »»» type   | Lead       |
| »» type    | Arrival    |
| »» type    | Departure  |
| »» type    | Connection |
| »»» status | 0          |
| »»» status | 1          |
| »»» status | 2          |
| »»»»» type | Lead       |
| »»»»» type | Additional |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "journey_id": "47cc67093475061e3d95369d",
      "reference_id": 1,
      "passengers": {
        "meta": {
          "adult": 2,
          "child": 2,
          "infant": 0,
          "bags": 5
        },
        "pax": [
          {
            "type": "Lead",
            "pnr": "JHS3ES",
            "class": "First",
            "details": {
              "id": "47cc67093475061e3d95369d",
              "name": {
                "title": "Mr.",
                "forename": "John",
                "surname": "Doe"
              },
              "contacts": {
                "address": {
                  "streets": ["No 221/1, Baker's Street"],
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
              "date_of_birth": "1989-02-14",
              "passport_no": "N32343423",
              "comments": "First time traveller.",
              "signage": "John Doe",
              "sig_image": "signage_image.png",
              "image": "passenger_image.jpg",
              "pas_stat": true,
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
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20",
          "location": "United Kingdom",
          "airport": {
            "id": "47cc67093475061e3d95369d",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15",
              "origin": {
                "id": "47cc67093475061e3d95369d",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15",
              "destination": {
                "id": "47cc67093475061e3d95369d",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "service_providers": [
            {
              "id": "47cc67093475061e3d95369d",
              "name": "This is a Company PVT Ltd",
              "services": ["47cc67093475061e3d95369d"],
              "status": 0,
              "email_status": {
                "sup_email_sent": true,
                "sup_sent_date": "2019-08-24T14:15:22Z",
                "sup_action_date": "2019-08-24T14:15:22Z",
                "grt_info_sent": true,
                "grt_sent_date": "2019-08-24T14:15:22Z"
              },
              "agent": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Company LHR OPS Team",
                  "email_contacts": [{}]
                }
              ],
              "greeter": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Jane Doe",
                  "email_contacts": [{}]
                }
              ],
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
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "service_name": "Meet & Assist Service",
              "passengers": {
                "meta": {
                  "adult": 2,
                  "child": 2,
                  "infant": 0,
                  "bags": 5
                },
                "pax": [
                  {
                    "type": "Lead",
                    "details": {}
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-bookings-id-journeys-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-journeys-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
  "Data": [
    {
      "journey_id": "47cc67093475061e3d95369d",
      "reference_id": 1,
      "passengers": {
        "meta": {
          "adult": 2,
          "child": 2,
          "infant": 0,
          "bags": 5
        },
        "pax": [
          {
            "type": "Lead",
            "pnr": "JHS3ES",
            "class": "First",
            "details": {
              "id": "47cc67093475061e3d95369d",
              "name": {
                "title": "Mr.",
                "forename": "John",
                "surname": "Doe"
              },
              "contacts": {
                "address": {
                  "streets": ["No 221/1, Baker's Street"],
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
              "date_of_birth": "1989-02-14",
              "passport_no": "N32343423",
              "comments": "First time traveller.",
              "signage": "John Doe",
              "sig_image": "signage_image.png",
              "image": "passenger_image.jpg",
              "pas_stat": true,
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
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20",
          "location": "United Kingdom",
          "airport": {
            "id": "47cc67093475061e3d95369d",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15",
              "origin": {
                "id": "47cc67093475061e3d95369d",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15",
              "destination": {
                "id": "47cc67093475061e3d95369d",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "service_providers": [
            {
              "id": "47cc67093475061e3d95369d",
              "name": "This is a Company PVT Ltd",
              "services": ["47cc67093475061e3d95369d"],
              "status": 0,
              "email_status": {
                "sup_email_sent": true,
                "sup_sent_date": "2019-08-24T14:15:22Z",
                "sup_action_date": "2019-08-24T14:15:22Z",
                "grt_info_sent": true,
                "grt_sent_date": "2019-08-24T14:15:22Z"
              },
              "agent": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Company LHR OPS Team",
                  "email_contacts": [{}]
                }
              ],
              "greeter": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Jane Doe",
                  "email_contacts": [{}]
                }
              ],
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
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "service_name": "Meet & Assist Service",
              "passengers": {
                "meta": {
                  "adult": 2,
                  "child": 2,
                  "infant": 0,
                  "bags": 5
                },
                "pax": [
                  {
                    "type": "Lead",
                    "details": {}
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-bookings-id-journeys-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
const inputBody = '{
  "passengers": {
    "meta": {
      "adult": 2,
      "child": 2,
      "infant": 0,
      "bags": 5
    },
    "pax": [
      {
        "type": "Lead",
        "pnr": "JHS3ES",
        "class": "First",
        "id": "string"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20",
      "location": "United Kingdom",
      "airport": {
        "id": "47cc67093475061e3d95369d"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15",
          "origin": {
            "id": "47cc67093475061e3d95369d",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15",
          "destination": {
            "id": "47cc67093475061e3d95369d",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "service_providers": [
        {
          "id": "47cc67093475061e3d95369d",
          "services": [
            "47cc67093475061e3d95369d"
          ],
          "status": 0,
          "email_status": {
            "sup_email_sent": true,
            "sup_sent_date": "2019-08-24T14:15:22Z",
            "sup_action_date": "2019-08-24T14:15:22Z",
            "grt_info_sent": true,
            "grt_sent_date": "2019-08-24T14:15:22Z"
          },
          "agent": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ],
          "greeter": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ]
        }
      ],
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "id": "string"
              }
            ]
          }
        }
      ]
    }
  ],
  "special_notes": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/journeys/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "passengers": {
    "meta": {
      "adult": 2,
      "child": 2,
      "infant": 0,
      "bags": 5
    },
    "pax": [
      {
        "type": "Lead",
        "pnr": "JHS3ES",
        "class": "First",
        "id": "string"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20",
      "location": "United Kingdom",
      "airport": {
        "id": "47cc67093475061e3d95369d"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15",
          "origin": {
            "id": "47cc67093475061e3d95369d",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15",
          "destination": {
            "id": "47cc67093475061e3d95369d",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "service_providers": [
        {
          "id": "47cc67093475061e3d95369d",
          "services": ["47cc67093475061e3d95369d"],
          "status": 0,
          "email_status": {
            "sup_email_sent": true,
            "sup_sent_date": "2019-08-24T14:15:22Z",
            "sup_action_date": "2019-08-24T14:15:22Z",
            "grt_info_sent": true,
            "grt_sent_date": "2019-08-24T14:15:22Z"
          },
          "agent": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ],
          "greeter": [
            {
              "id": "47cc67093475061e3d95369d"
            }
          ]
        }
      ],
      "services": [
        {
          "id": "47cc67093475061e3d95369d",
          "passengers": {
            "meta": {
              "adult": 2,
              "child": 2,
              "infant": 0,
              "bags": 5
            },
            "pax": [
              {
                "type": "Lead",
                "id": "string"
              }
            ]
          }
        }
      ]
    }
  ],
  "special_notes": "string"
}
```

<h3 id="post-bookings-id-journeys-id-parameters">Parameters</h3>

| Name                 | In     | Type              | Required | Description                          |
| -------------------- | ------ | ----------------- | -------- | ------------------------------------ |
| X-Trace-Id           | header | string            | false    | Please provide your UUID for tracing |
| Content-Type         | header | string            | true     | application/json                     |
| body                 | body   | object            | false    | update journey request body          |
| » passengers         | body   | object            | true     | none                                 |
| »» meta              | body   | object            | true     | none                                 |
| »»» adult            | body   | number            | true     | none                                 |
| »»» child            | body   | number            | true     | none                                 |
| »»» infant           | body   | number            | true     | none                                 |
| »»» bags             | body   | number            | true     | none                                 |
| »» pax               | body   | [object]          | true     | none                                 |
| »»» type             | body   | string            | false    | none                                 |
| »»» pnr              | body   | string            | false    | none                                 |
| »»» class            | body   | string            | false    | none                                 |
| »»» id               | body   | string            | false    | none                                 |
| » stops              | body   | [object]          | true     | none                                 |
| »» type              | body   | string            | true     | none                                 |
| »» meeting_date      | body   | string(date)      | true     | none                                 |
| »» meeting_time      | body   | string(time)      | true     | none                                 |
| »» location          | body   | string            | true     | none                                 |
| »» airport           | body   | object            | false    | none                                 |
| »»» id               | body   | string            | true     | none                                 |
| »» flights           | body   | object            | false    | none                                 |
| »»» arrival          | body   | object            | true     | none                                 |
| »»»» flight_no       | body   | string            | true     | none                                 |
| »»»» terminal        | body   | string            | true     | none                                 |
| »»»» date            | body   | string(date)      | true     | none                                 |
| »»»» time            | body   | string(time)      | true     | none                                 |
| »»»» origin          | body   | object            | true     | none                                 |
| »»»»» id             | body   | string            | true     | none                                 |
| »»»»» name           | body   | string            | true     | none                                 |
| »»» departure        | body   | object            | true     | none                                 |
| »»»» flight_no       | body   | string            | true     | none                                 |
| »»»» terminal        | body   | string            | true     | none                                 |
| »»»» date            | body   | string(date)      | true     | none                                 |
| »»»» time            | body   | string(time)      | true     | none                                 |
| »»»» destination     | body   | object            | true     | none                                 |
| »»»»» id             | body   | string            | true     | none                                 |
| »»»»» name           | body   | string            | true     | none                                 |
| »» service_providers | body   | [allOf]           | true     | none                                 |
| »»» id               | body   | string            | true     | none                                 |
| »»» services         | body   | [string]          | false    | none                                 |
| »»» status           | body   | number            | true     | none                                 |
| »»» email_status     | body   | object            | false    | none                                 |
| »»»» sup_email_sent  | body   | boolean           | true     | none                                 |
| »»»» sup_sent_date   | body   | string(date-time) | false    | none                                 |
| »»»» sup_action_date | body   | string(date-time) | false    | none                                 |
| »»»» grt_info_sent   | body   | boolean           | true     | none                                 |
| »»»» grt_sent_date   | body   | string(date-time) | false    | none                                 |
| »»» agent            | body   | [object]          | false    | none                                 |
| »»»» id              | body   | string            | false    | none                                 |
| »»» greeter          | body   | [object]          | false    | none                                 |
| »»»» id              | body   | string            | false    | none                                 |
| »» services          | body   | [object]          | true     | none                                 |
| »»» id               | body   | string            | false    | none                                 |
| »»» passengers       | body   | object            | false    | none                                 |
| »»»» meta            | body   | object            | false    | none                                 |
| »»»»» adult          | body   | number            | false    | none                                 |
| »»»»» child          | body   | number            | false    | none                                 |
| »»»»» infant         | body   | number            | false    | none                                 |
| »»»»» bags           | body   | number            | false    | none                                 |
| »»»» pax             | body   | [object]          | false    | none                                 |
| »»»»» type           | body   | string            | false    | none                                 |
| »»»»» id             | body   | string            | false    | none                                 |
| » special_notes      | body   | string            | false    | none                                 |
| id                   | path   | string            | true     | a journey id                         |

#### Enumerated Values

| Parameter  | Value      |
| ---------- | ---------- |
| »»» type   | Lead       |
| »» type    | Arrival    |
| »» type    | Departure  |
| »» type    | Connection |
| »»» status | 0          |
| »»» status | 1          |
| »»» status | 2          |
| »»»»» type | Lead       |
| »»»»» type | Additional |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "journey_id": "47cc67093475061e3d95369d",
      "reference_id": 1,
      "passengers": {
        "meta": {
          "adult": 2,
          "child": 2,
          "infant": 0,
          "bags": 5
        },
        "pax": [
          {
            "type": "Lead",
            "pnr": "JHS3ES",
            "class": "First",
            "details": {
              "id": "47cc67093475061e3d95369d",
              "name": {
                "title": "Mr.",
                "forename": "John",
                "surname": "Doe"
              },
              "contacts": {
                "address": {
                  "streets": ["No 221/1, Baker's Street"],
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
              "date_of_birth": "1989-02-14",
              "passport_no": "N32343423",
              "comments": "First time traveller.",
              "signage": "John Doe",
              "sig_image": "signage_image.png",
              "image": "passenger_image.jpg",
              "pas_stat": true,
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
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20",
          "location": "United Kingdom",
          "airport": {
            "id": "47cc67093475061e3d95369d",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15",
              "origin": {
                "id": "47cc67093475061e3d95369d",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15",
              "destination": {
                "id": "47cc67093475061e3d95369d",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "service_providers": [
            {
              "id": "47cc67093475061e3d95369d",
              "name": "This is a Company PVT Ltd",
              "services": ["47cc67093475061e3d95369d"],
              "status": 0,
              "email_status": {
                "sup_email_sent": true,
                "sup_sent_date": "2019-08-24T14:15:22Z",
                "sup_action_date": "2019-08-24T14:15:22Z",
                "grt_info_sent": true,
                "grt_sent_date": "2019-08-24T14:15:22Z"
              },
              "agent": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Company LHR OPS Team",
                  "email_contacts": [{}]
                }
              ],
              "greeter": [
                {
                  "id": "47cc67093475061e3d95369d",
                  "name": "Jane Doe",
                  "email_contacts": [{}]
                }
              ],
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
          "services": [
            {
              "id": "47cc67093475061e3d95369d",
              "service_name": "Meet & Assist Service",
              "passengers": {
                "meta": {
                  "adult": 2,
                  "child": 2,
                  "infant": 0,
                  "bags": 5
                },
                "pax": [
                  {
                    "type": "Lead",
                    "details": {}
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-bookings-id-journeys-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-bookings-id-journeys-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value      |
| -------- | ---------- |
| type     | Lead       |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| type     | Arrival    |
| type     | Departure  |
| type     | Connection |
| status   | 0          |
| status   | 1          |
| status   | 2          |
| type     | Lead       |
| type     | Additional |
| title    | Mr.        |
| title    | Mrs.       |
| title    | Ms.        |
| title    | Dr.        |
| title    | Mstr.      |
| title    | Miss       |
| title    | Mx.        |
| title    | Prof.      |
| title    | Rev.       |
| title    | Sir        |
| title    | Sister     |
| title    | Team       |
| status   | 200        |
| status   | 201        |
| status   | 204        |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-lpassengers-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-lpassengers-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "date_of_birth": "1989-02-14",
  "passport_no": "N32343423",
  "comments": "First time traveller.",
  "signage": "John Doe",
  "sig_image": "signage_image.png",
  "image": "passenger_image.jpg",
  "pas_stat": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/passengers?company_id=47cc67093475061e3d95369d',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "date_of_birth": "1989-02-14",
  "passport_no": "N32343423",
  "comments": "First time traveller.",
  "signage": "John Doe",
  "sig_image": "signage_image.png",
  "image": "passenger_image.jpg",
  "pas_stat": true
}
```

<h3 id="post-passengers-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| company_id      | query  | string        | true     | a company id                         |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | passenger request body               |
| » name          | body   | object        | true     | none                                 |
| »» title        | body   | string        | true     | none                                 |
| »» forename     | body   | string        | true     | none                                 |
| »» surname      | body   | string        | true     | none                                 |
| » contacts      | body   | object        | true     | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » date_of_birth | body   | string(date)  | false    | none                                 |
| » passport_no   | body   | string        | false    | none                                 |
| » comments      | body   | string        | false    | none                                 |
| » signage       | body   | string        | false    | none                                 |
| » sig_image     | body   | string        | false    | none                                 |
| » image         | body   | string        | false    | none                                 |
| » pas_stat      | body   | boolean       | false    | none                                 |

#### Enumerated Values

| Parameter | Value  |
| --------- | ------ |
| »» title  | Mr.    |
| »» title  | Mrs.   |
| »» title  | Ms.    |
| »» title  | Dr.    |
| »» title  | Mstr.  |
| »» title  | Miss   |
| »» title  | Mx.    |
| »» title  | Prof.  |
| »» title  | Rev.   |
| »» title  | Sir    |
| »» title  | Sister |
| »» title  | Team   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-passengers-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-passengers-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-passengers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-passengers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "date_of_birth": "1989-02-14",
  "passport_no": "N32343423",
  "comments": "First time traveller.",
  "signage": "John Doe",
  "sig_image": "signage_image.png",
  "image": "passenger_image.jpg",
  "pas_stat": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/passengers/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "date_of_birth": "1989-02-14",
  "passport_no": "N32343423",
  "comments": "First time traveller.",
  "signage": "John Doe",
  "sig_image": "signage_image.png",
  "image": "passenger_image.jpg",
  "pas_stat": true
}
```

<h3 id="put-passengers-id-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | passenger request body               |
| » name          | body   | object        | true     | none                                 |
| »» title        | body   | string        | true     | none                                 |
| »» forename     | body   | string        | true     | none                                 |
| »» surname      | body   | string        | true     | none                                 |
| » contacts      | body   | object        | true     | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » date_of_birth | body   | string(date)  | false    | none                                 |
| » passport_no   | body   | string        | false    | none                                 |
| » comments      | body   | string        | false    | none                                 |
| » signage       | body   | string        | false    | none                                 |
| » sig_image     | body   | string        | false    | none                                 |
| » image         | body   | string        | false    | none                                 |
| » pas_stat      | body   | boolean       | false    | none                                 |
| id              | path   | string        | true     | passenger_id                         |

#### Enumerated Values

| Parameter | Value  |
| --------- | ------ |
| »» title  | Mr.    |
| »» title  | Mrs.   |
| »» title  | Ms.    |
| »» title  | Dr.    |
| »» title  | Mstr.  |
| »» title  | Miss   |
| »» title  | Mx.    |
| »» title  | Prof.  |
| »» title  | Rev.   |
| »» title  | Sir    |
| »» title  | Sister |
| »» title  | Team   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "date_of_birth": "1989-02-14",
      "passport_no": "N32343423",
      "comments": "First time traveller.",
      "signage": "John Doe",
      "sig_image": "signage_image.png",
      "image": "passenger_image.jpg",
      "pas_stat": true,
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="put-passengers-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-passengers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-passengers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-passengers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "string",
      "service_name": "Meet & Assist Service",
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airports-id-services-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-services-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "id": "string",
  "service_name": "Meet & Assist Service",
  "rates": [
    {
      "currency": "USD",
      "packages": [
        {
          "pax": 0,
          "value": 0
        }
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/services?terminal_id=47cc67093475061e3d95369d',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "string",
  "service_name": "Meet & Assist Service",
  "rates": [
    {
      "currency": "USD",
      "packages": [
        {
          "pax": 0,
          "value": 0
        }
      ]
    }
  ]
}
```

<h3 id="post-airports-id-services-parameters">Parameters</h3>

| Name           | In     | Type     | Required | Description                          |
| -------------- | ------ | -------- | -------- | ------------------------------------ |
| X-Trace-Id     | header | string   | false    | Please provide your UUID for tracing |
| Content-Type   | header | string   | true     | application/json                     |
| terminal_id    | query  | string   | true     | none                                 |
| body           | body   | object   | false    | services request body                |
| » id           | body   | string   | true     | none                                 |
| » service_name | body   | string   | true     | none                                 |
| » rates        | body   | [object] | true     | none                                 |
| »» currency    | body   | string   | true     | none                                 |
| »» packages    | body   | [object] | false    | none                                 |
| »»» pax        | body   | number   | true     | none                                 |
| »»» value      | body   | number   | true     | none                                 |

#### Enumerated Values

| Parameter   | Value |
| ----------- | ----- |
| »» currency | USD   |
| »» currency | GBP   |
| »» currency | EUR   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "string",
      "service_name": "Meet & Assist Service",
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-id-services-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-services-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "string",
      "service_name": "Meet & Assist Service",
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airpoots-id-service-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "id": "string",
  "service_name": "Meet & Assist Service",
  "rates": [
    {
      "currency": "USD",
      "packages": [
        {
          "pax": 0,
          "value": 0
        }
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/services/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "string",
  "service_name": "Meet & Assist Service",
  "rates": [
    {
      "currency": "USD",
      "packages": [
        {
          "pax": 0,
          "value": 0
        }
      ]
    }
  ]
}
```

<h3 id="post-airpoots-id-service-id-parameters">Parameters</h3>

| Name           | In     | Type     | Required | Description                          |
| -------------- | ------ | -------- | -------- | ------------------------------------ |
| X-Trace-Id     | header | string   | false    | Please provide your UUID for tracing |
| Content-Type   | header | string   | true     | none                                 |
| body           | body   | object   | false    | update airport request body          |
| » id           | body   | string   | true     | none                                 |
| » service_name | body   | string   | true     | none                                 |
| » rates        | body   | [object] | true     | none                                 |
| »» currency    | body   | string   | true     | none                                 |
| »» packages    | body   | [object] | false    | none                                 |
| »»» pax        | body   | number   | true     | none                                 |
| »»» value      | body   | number   | true     | none                                 |
| id             | path   | string   | true     | a service id                         |

#### Enumerated Values

| Parameter   | Value |
| ----------- | ----- |
| »» currency | USD   |
| »» currency | GBP   |
| »» currency | EUR   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "string",
      "service_name": "Meet & Assist Service",
      "rates": [
        {
          "currency": "USD",
          "packages": [
            {
              "pax": 0,
              "value": 0
            }
          ]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airpoots-id-service-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-airpoots-id-service-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airpoots-id-service-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "company_name": "string",
      "image": "company_image.png",
      "default": true,
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airports-id-service-provicders-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-service-provicders-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "id": "47cc67093475061e3d95369d",
  "default": true,
  "agents": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ],
  "greeters": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/service_providers?terminal_id=47cc67093475061e3d95369d',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "47cc67093475061e3d95369d",
  "default": true,
  "agents": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ],
  "greeters": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ]
}
```

<h3 id="post-airports-id-service-provicders-parameters">Parameters</h3>

| Name         | In     | Type     | Required | Description                          |
| ------------ | ------ | -------- | -------- | ------------------------------------ |
| X-Trace-Id   | header | string   | false    | Please provide your UUID for tracing |
| terminal_id  | query  | string   | true     | terminal id                          |
| Content-Type | header | string   | true     | application/json                     |
| body         | body   | object   | false    | Assign service provider request body |
| » id         | body   | string   | true     | none                                 |
| » default    | body   | boolean  | true     | none                                 |
| » agents     | body   | [object] | false    | none                                 |
| »» id        | body   | string   | false    | none                                 |
| » greeters   | body   | [object] | false    | none                                 |
| »» id        | body   | string   | false    | none                                 |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "company_name": "string",
      "image": "company_image.png",
      "default": true,
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-id-service-provicders-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-service-provicders-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "company_name": "string",
      "image": "company_image.png",
      "default": true,
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-service-providers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "id": "47cc67093475061e3d95369d",
  "default": true,
  "agents": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ],
  "greeters": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/service_providers/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "id": "47cc67093475061e3d95369d",
  "default": true,
  "agents": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ],
  "greeters": [
    {
      "id": "47cc67093475061e3d95369d"
    }
  ]
}
```

<h3 id="post-airports-id-service-providers-id-parameters">Parameters</h3>

| Name         | In     | Type     | Required | Description                          |
| ------------ | ------ | -------- | -------- | ------------------------------------ |
| X-Trace-Id   | header | string   | false    | Please provide your UUID for tracing |
| Content-Type | header | string   | true     | application/json                     |
| body         | body   | object   | false    | Update service provider request body |
| » id         | body   | string   | true     | none                                 |
| » default    | body   | boolean  | true     | none                                 |
| » agents     | body   | [object] | false    | none                                 |
| »» id        | body   | string   | false    | none                                 |
| » greeters   | body   | [object] | false    | none                                 |
| »» id        | body   | string   | false    | none                                 |
| id           | path   | string   | true     | a service provider id                |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "company_name": "string",
      "image": "company_image.png",
      "default": true,
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-service-providers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-airports-id-service-providers-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-airports-id-service-providers-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "string",
          "service_name": "Meet & Assist Service",
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
      "service_providers": {
        "id": "47cc67093475061e3d95369d",
        "company_name": "string",
        "image": "company_image.png",
        "default": true,
        "contacts": {
          "address": {
            "streets": ["No 221/1, Baker's Street"],
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
                "currency": "USD",
                "packages": [
                  {
                    "pax": 0,
                    "value": 0
                  }
                ]
              }
            ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airports-id-terminals-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-terminals-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "terminal_name": "LHR Terminal 2"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/terminals',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "terminal_name": "LHR Terminal 2"
}
```

<h3 id="post-airports-id-terminals-parameters">Parameters</h3>

| Name            | In     | Type   | Required | Description                          |
| --------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id      | header | string | false    | Please provide your UUID for tracing |
| Content-Type    | header | string | true     | application/json                     |
| body            | body   | object | false    | POST terminal request body           |
| » terminal_name | body   | string | true     | none                                 |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "string",
          "service_name": "Meet & Assist Service",
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
      "service_providers": {
        "id": "47cc67093475061e3d95369d",
        "company_name": "string",
        "image": "company_image.png",
        "default": true,
        "contacts": {
          "address": {
            "streets": ["No 221/1, Baker's Street"],
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
                "currency": "USD",
                "packages": [
                  {
                    "pax": 0,
                    "value": 0
                  }
                ]
              }
            ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-id-terminals-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-terminals-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "Global Airport Concierge",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "tenant_image.png",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-tenants-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-tenants-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "name": "Global Airport Concierge",
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "image": "tenant_image.png"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/tenants',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "name": "Global Airport Concierge",
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "image": "tenant_image.png"
}
```

<h3 id="post-tenants-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | tenant request body                  |
| » name          | body   | string        | true     | none                                 |
| » contacts      | body   | object        | false    | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » image         | body   | string        | false    | none                                 |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "Global Airport Concierge",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "tenant_image.png",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-tenants-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-tenants-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "name": "Global Airport Concierge",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "image": "tenant_image.png",
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-tenants-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-tenants-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "name": "Global Airport Concierge",
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "image": "tenant_image.png"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/tenants/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "name": "Global Airport Concierge",
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "image": "tenant_image.png"
}
```

<h3 id="put-tenants-id-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | tenant request body                  |
| » name          | body   | string        | true     | none                                 |
| » contacts      | body   | object        | false    | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » image         | body   | string        | false    | none                                 |
| id              | path   | string        | true     | a tenant id                          |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "success": true,
      "status": 200,
      "message": "string"
    }
  ],
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="put-tenants-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-tenants-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-tenants-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-tenants-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "email": "johndoe@email.com",
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "image": "your_image.png",
  "company": [
    {
      "id": "47cc67093475061e3d95369d",
      "roles": [
        "string"
      ],
      "permission": [
        "string"
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "email": "johndoe@email.com",
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "image": "your_image.png",
  "company": [
    {
      "id": "47cc67093475061e3d95369d",
      "roles": ["string"],
      "permission": ["string"]
    }
  ]
}
```

<h3 id="post-users-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | user request form                    |
| » email         | body   | string(email) | true     | none                                 |
| » contacts      | body   | object        | true     | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » name          | body   | object        | true     | none                                 |
| »» title        | body   | string        | true     | none                                 |
| »» forename     | body   | string        | true     | none                                 |
| »» surname      | body   | string        | true     | none                                 |
| » image         | body   | string        | true     | none                                 |
| » company       | body   | [object]      | true     | none                                 |
| »» id           | body   | string        | true     | none                                 |
| »» roles        | body   | [string]      | false    | none                                 |
| »» permission   | body   | [string]      | false    | none                                 |

#### Enumerated Values

| Parameter | Value  |
| --------- | ------ |
| »» title  | Mr.    |
| »» title  | Mrs.   |
| »» title  | Ms.    |
| »» title  | Dr.    |
| »» title  | Mstr.  |
| »» title  | Miss   |
| »» title  | Mx.    |
| »» title  | Prof.  |
| »» title  | Rev.   |
| »» title  | Sir    |
| »» title  | Sister |
| »» title  | Team   |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "email": "johndoe@email.com",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "image": "your_image.png",
      "company": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": "The Company PVT Ltd",
          "roles": ["string"],
          "permission": ["string"]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-users-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-users-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "email": "johndoe@email.com",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "image": "your_image.png",
      "company": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": "The Company PVT Ltd",
          "roles": ["string"],
          "permission": ["string"]
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-users-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |
| status   | 200    |
| status   | 201    |
| status   | 204    |

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
const inputBody = '{
  "email": "johndoe@email.com",
  "contacts": {
    "address": {
      "streets": [
        "No 221/1, Baker's Street"
      ],
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
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "image": "your_image.png",
  "company": [
    {
      "id": "47cc67093475061e3d95369d",
      "roles": [
        "string"
      ],
      "permission": [
        "string"
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/users/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "email": "johndoe@email.com",
  "contacts": {
    "address": {
      "streets": ["No 221/1, Baker's Street"],
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
  "name": {
    "title": "Mr.",
    "forename": "John",
    "surname": "Doe"
  },
  "image": "your_image.png",
  "company": [
    {
      "id": "47cc67093475061e3d95369d",
      "roles": ["string"],
      "permission": ["string"]
    }
  ]
}
```

<h3 id="put-users-id-parameters">Parameters</h3>

| Name            | In     | Type          | Required | Description                          |
| --------------- | ------ | ------------- | -------- | ------------------------------------ |
| X-Trace-Id      | header | string        | false    | Please provide your UUID for tracing |
| Content-Type    | header | string        | true     | application/json                     |
| body            | body   | object        | false    | user request body                    |
| » email         | body   | string(email) | true     | none                                 |
| » contacts      | body   | object        | true     | Contact model                        |
| »» address      | body   | object        | false    | Addres information                   |
| »»» streets     | body   | [string]      | false    | none                                 |
| »»» city        | body   | string        | false    | none                                 |
| »»» state       | body   | string        | false    | none                                 |
| »»» postal_code | body   | string        | false    | none                                 |
| »»» country     | body   | string        | false    | none                                 |
| »» emails       | body   | [object]      | false    | Email information                    |
| »»» type        | body   | string        | false    | none                                 |
| »»» email       | body   | string(email) | false    | none                                 |
| »» phones       | body   | [object]      | false    | Phone numbers                        |
| »»» type        | body   | string        | false    | none                                 |
| »»» name        | body   | string        | false    | none                                 |
| »»» phone       | body   | string        | false    | none                                 |
| » name          | body   | object        | true     | none                                 |
| »» title        | body   | string        | true     | none                                 |
| »» forename     | body   | string        | true     | none                                 |
| »» surname      | body   | string        | true     | none                                 |
| » image         | body   | string        | true     | none                                 |
| » company       | body   | [object]      | true     | none                                 |
| »» id           | body   | string        | true     | none                                 |
| »» roles        | body   | [string]      | false    | none                                 |
| »» permission   | body   | [string]      | false    | none                                 |
| id              | path   | string        | true     | a user id                            |

#### Enumerated Values

| Parameter | Value  |
| --------- | ------ |
| »» title  | Mr.    |
| »» title  | Mrs.   |
| »» title  | Ms.    |
| »» title  | Dr.    |
| »» title  | Mstr.  |
| »» title  | Miss   |
| »» title  | Mx.    |
| »» title  | Prof.  |
| »» title  | Rev.   |
| »» title  | Sir    |
| »» title  | Sister |
| »» title  | Team   |

> Example responses

> 200 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "email": "johndoe@email.com",
      "contacts": {
        "address": {
          "streets": ["No 221/1, Baker's Street"],
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
      "name": {
        "title": "Mr.",
        "forename": "John",
        "surname": "Doe"
      },
      "image": "your_image.png",
      "company": [
        {
          "id": "47cc67093475061e3d95369d",
          "name": "The Company PVT Ltd",
          "roles": ["string"],
          "permission": ["string"]
        }
      ],
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
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="put-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="put-users-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| title    | Mr.    |
| title    | Mrs.   |
| title    | Ms.    |
| title    | Dr.    |
| title    | Mstr.  |
| title    | Miss   |
| title    | Mx.    |
| title    | Prof.  |
| title    | Rev.   |
| title    | Sir    |
| title    | Sister |
| title    | Team   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-users-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-users-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "code": "USS",
      "name": "United Signature Service",
      "url": "https://united.globalairportconcierge.com",
      "email_templates": [
        {
          "type": "confirmation",
          "background-color": "#fff022",
          "logo": "logo.jpg"
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-websites-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-websites-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "code": "USS",
  "name": "United Signature Service",
  "url": "https://united.globalairportconcierge.com",
  "email_templates": [
    {
      "type": "confirmation",
      "background-color": "#fff022",
      "logo": "logo.jpg"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/websites',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "code": "USS",
  "name": "United Signature Service",
  "url": "https://united.globalairportconcierge.com",
  "email_templates": [
    {
      "type": "confirmation",
      "background-color": "#fff022",
      "logo": "logo.jpg"
    }
  ]
}
```

<h3 id="post-websites-parameters">Parameters</h3>

| Name                | In     | Type        | Required | Description                          |
| ------------------- | ------ | ----------- | -------- | ------------------------------------ |
| X-Trace-Id          | header | string      | false    | Please provide your UUID for tracing |
| Content-Type        | header | string      | true     | application/json                     |
| body                | body   | object      | false    | website request body                 |
| » code              | body   | string      | true     | none                                 |
| » name              | body   | string      | true     | none                                 |
| » url               | body   | string(uri) | true     | none                                 |
| » email_templates   | body   | [object]    | false    | none                                 |
| »» type             | body   | string      | false    | none                                 |
| »» background-color | body   | string      | false    | none                                 |
| »» logo             | body   | string      | false    | none                                 |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "code": "USS",
      "name": "United Signature Service",
      "url": "https://united.globalairportconcierge.com",
      "email_templates": [
        {
          "type": "confirmation",
          "background-color": "#fff022",
          "logo": "logo.jpg"
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-websites-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-websites-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "code": "USS",
      "name": "United Signature Service",
      "url": "https://united.globalairportconcierge.com",
      "email_templates": [
        {
          "type": "confirmation",
          "background-color": "#fff022",
          "logo": "logo.jpg"
        }
      ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-websites-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-websites-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
const inputBody = '{
  "code": "USS",
  "name": "United Signature Service",
  "url": "https://united.globalairportconcierge.com",
  "email_templates": [
    {
      "type": "confirmation",
      "background-color": "#fff022",
      "logo": "logo.jpg"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/websites/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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
{
  "code": "USS",
  "name": "United Signature Service",
  "url": "https://united.globalairportconcierge.com",
  "email_templates": [
    {
      "type": "confirmation",
      "background-color": "#fff022",
      "logo": "logo.jpg"
    }
  ]
}
```

<h3 id="put-websites-id-parameters">Parameters</h3>

| Name                | In     | Type        | Required | Description                          |
| ------------------- | ------ | ----------- | -------- | ------------------------------------ |
| X-Trace-Id          | header | string      | false    | Please provide your UUID for tracing |
| Content-Type        | header | string      | true     | application/json                     |
| body                | body   | object      | false    | website request body                 |
| » code              | body   | string      | true     | none                                 |
| » name              | body   | string      | true     | none                                 |
| » url               | body   | string(uri) | true     | none                                 |
| » email_templates   | body   | [object]    | false    | none                                 |
| »» type             | body   | string      | false    | none                                 |
| »» background-color | body   | string      | false    | none                                 |
| »» logo             | body   | string      | false    | none                                 |
| id                  | path   | string      | true     | a website id                         |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "success": true,
      "status": 200,
      "message": "string"
    }
  ],
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="put-websites-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="put-websites-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

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
{
  "success": true,
  "status": 200,
  "message": "string",
  "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="delete-websites-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="delete-websites-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| status   | 200   |
| status   | 201   |
| status   | 204   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v2-0-0--terminals-id-">/terminals/{id}</h1>

## get-airports-id-terminals-id

<a id="opIdget-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://3.89.112.137:4010/terminals/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
GET http://3.89.112.137:4010/terminals/{id} HTTP/1.1
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

fetch("http://3.89.112.137:4010/terminals/{id}", {
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

result = RestClient.get 'http://3.89.112.137:4010/terminals/{id}',
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

r = requests.get('http://3.89.112.137:4010/terminals/{id}', headers = headers)

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
    $response = $client->request('GET','http://3.89.112.137:4010/terminals/{id}', array(
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
URL obj = new URL("http://3.89.112.137:4010/terminals/{id}");
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
    req, err := http.NewRequest("GET", "http://3.89.112.137:4010/terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /terminals/{id}`

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
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "string",
          "service_name": "Meet & Assist Service",
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
      "service_providers": {
        "id": "47cc67093475061e3d95369d",
        "company_name": "string",
        "image": "company_image.png",
        "default": true,
        "contacts": {
          "address": {
            "streets": ["No 221/1, Baker's Street"],
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
                "currency": "USD",
                "packages": [
                  {
                    "pax": 0,
                    "value": 0
                  }
                ]
              }
            ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="get-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline |

<h3 id="get-airports-id-terminals-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## post-airports-id-terminals-id

<a id="opIdpost-airports-id-terminals-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://3.89.112.137:4010/terminals/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://3.89.112.137:4010/terminals/{id} HTTP/1.1
Host: 3.89.112.137:4010
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json

```

```javascript
const inputBody = '{
  "terminal_name": "LHR Terminal 2"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'apiKey':'API_KEY'
};

fetch('http://3.89.112.137:4010/terminals/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
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

result = RestClient.put 'http://3.89.112.137:4010/terminals/{id}',
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

r = requests.put('http://3.89.112.137:4010/terminals/{id}', headers = headers)

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
    $response = $client->request('PUT','http://3.89.112.137:4010/terminals/{id}', array(
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
URL obj = new URL("http://3.89.112.137:4010/terminals/{id}");
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
    req, err := http.NewRequest("PUT", "http://3.89.112.137:4010/terminals/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /terminals/{id}`

_POST_

Update an exsisting terminal of an Airport.

> Body parameter

```json
{
  "terminal_name": "LHR Terminal 2"
}
```

<h3 id="post-airports-id-terminals-id-parameters">Parameters</h3>

| Name            | In     | Type   | Required | Description                          |
| --------------- | ------ | ------ | -------- | ------------------------------------ |
| X-Trace-Id      | header | string | false    | Please provide your UUID for tracing |
| Content-Type    | header | string | true     | application/json                     |
| body            | body   | object | false    | POST terminal request body           |
| » terminal_name | body   | string | true     | none                                 |
| id              | path   | string | true     | a terminal id                        |

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "id": "47cc67093475061e3d95369d",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "string",
          "service_name": "Meet & Assist Service",
          "rates": [
            {
              "currency": "USD",
              "packages": [
                {
                  "pax": 0,
                  "value": 0
                }
              ]
            }
          ],
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
      "service_providers": {
        "id": "47cc67093475061e3d95369d",
        "company_name": "string",
        "image": "company_image.png",
        "default": true,
        "contacts": {
          "address": {
            "streets": ["No 221/1, Baker's Street"],
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
                "currency": "USD",
                "packages": [
                  {
                    "pax": 0,
                    "value": 0
                  }
                ]
              }
            ],
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
  "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
  "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
}
```

<h3 id="post-airports-id-terminals-id-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created     | Inline |

<h3 id="post-airports-id-terminals-id-responseschema">Response Schema</h3>

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| currency | USD   |
| currency | GBP   |
| currency | EUR   |
| status   | 200   |
| status   | 201   |
| status   | 204   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_airport">airport</h2>
<!-- backwards compatibility -->
<a id="schemaairport"></a>
<a id="schema_airport"></a>
<a id="tocSairport"></a>
<a id="tocsairport"></a>

```json
{
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
        "streets": ["No 221/1, Baker's Street"],
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
  }
}
```

airport.json

### Properties

| Name                     | Type           | Required | Restrictions | Description                                                       |
| ------------------------ | -------------- | -------- | ------------ | ----------------------------------------------------------------- |
| code                     | string         | true     | none         | Airport code                                                      |
| name                     | string         | true     | none         | Airport name                                                      |
| country                  | string         | true     | none         | Airport country                                                   |
| city                     | string         | true     | none         | Airport city                                                      |
| time_zone                | string         | false    | none         | Airport time zone                                                 |
| booking_window           | number         | false    | none         | Minimal time allowed to make a booking pior serivce date and time |
| currency                 | string         | false    | none         | Preffered currency of the airport                                 |
| comments                 | string         | false    | none         | Special comments regarding the airport                            |
| image                    | string         | false    | none         | Image url of the airport                                          |
| location                 | object         | false    | none         | Exact geo location of the airport                                 |
| » lat                    | number(double) | false    | none         | none                                                              |
| » long                   | number(double) | false    | none         | none                                                              |
| contacts                 | [object]       | false    | none         | Contact details of the airport                                    |
| » address                | object         | false    | none         | Addres information                                                |
| »» streets               | [string]       | false    | none         | none                                                              |
| »» city                  | string         | false    | none         | none                                                              |
| »» state                 | string         | false    | none         | none                                                              |
| »» postal_code           | string         | false    | none         | none                                                              |
| »» country               | string         | false    | none         | none                                                              |
| » emails                 | [object]       | false    | none         | Email information                                                 |
| »» type                  | string         | false    | none         | none                                                              |
| »» email                 | string(email)  | false    | none         | none                                                              |
| » phones                 | [object]       | false    | none         | Phone numbers                                                     |
| »» type                  | string         | false    | none         | none                                                              |
| »» name                  | string         | false    | none         | none                                                              |
| »» phone                 | string         | false    | none         | none                                                              |
| operational              | boolean        | false    | none         | If the airport is operatable                                      |
| charges                  | object         | false    | none         | harges assosiated with the airport                                |
| » surcharge              | [object]       | false    | none         | none                                                              |
| »» below                 | number         | false    | none         | none                                                              |
| »» percentage            | number         | false    | none         | none                                                              |
| » additional_hour_charge | [object]       | false    | none         | none                                                              |
| »» currancy              | string         | false    | none         | none                                                              |
| »» rate                  | number         | false    | none         | none                                                              |
| air_side_meetup          | object         | false    | none         | Passenger meet up point is at the air side or land side           |
| » international          | object         | false    | none         | none                                                              |
| »» arrival               | boolean        | false    | none         | none                                                              |
| »» depature              | boolean        | false    | none         | none                                                              |
| »» transit               | boolean        | false    | none         | none                                                              |
| » domestic               | object         | false    | none         | none                                                              |
| »» arrival               | boolean        | false    | none         | none                                                              |
| »» depature              | boolean        | false    | none         | none                                                              |
| »» transit               | boolean        | false    | none         | none                                                              |

#### Enumerated Values

| Property       | Value |
| -------------- | ----- |
| booking_window | 6     |
| booking_window | 12    |
| booking_window | 24    |
| booking_window | 48    |
| currency       | USD   |
| currency       | GBP   |
| currency       | EUR   |
| currancy       | USD   |
| currancy       | GBP   |
| currancy       | EUR   |
