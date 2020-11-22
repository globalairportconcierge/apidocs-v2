---
title: GAC API V1.1.0 v1.0
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

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="gac-api-v1-1-0">GAC API V1.1.0 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Your passenger services APIs of choice

Base URLs:

* <a href="http://online.globalairportconcierge.com">http://online.globalairportconcierge.com</a>

* <a href="http://127.0.0.1:4010">http://127.0.0.1:4010</a>

<a href="https://gac.com/terms-of-service.html">Terms of service</a>

License: <a href="https://gac.com/api-license.html">GAC</a>

# Authentication

* API Key (Authorization)
    - Parameter Name: **apiKey**, in: header. Bearer Token

<h1 id="gac-api-v1-1-0-airports">Airports</h1>

## GET-airports

<a id="opIdGET-airports"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/airports \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/airports HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/airports',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/airports',
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

r = requests.get('http://online.globalairportconcierge.com/airports', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/airports', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/airports");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/airports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /airports`

*/airports*

Get list of operating Airports.

<h3 id="get-airports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|name|query|string|false|airport name|
|city|query|string|false|airport city|
|country|query|string|false|airport country|
|code|query|string|false|airport code|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|sort|query|string|false|will sort objects returned from the request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "code": "LHR",
      "name": "LHR London Heahrow Airport",
      "country": "United Kingdom",
      "city": "London",
      "booking_window": 48,
      "terminals": [
        {
          "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "terminal_name": "LHR Terminal 2",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "service_name": "string",
              "fields": [
                {
                  "field_name": "string",
                  "field_type": "string",
                  "validation": [
                    {
                      "required": true
                    }
                  ]
                }
              ],
              "validataion": [
                {
                  "rule": "string",
                  "service_id": "string"
                }
              ],
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "username": "Resil"
              },
              "updated_by": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "username": "Anna"
              },
              "created_at": "2019-08-24T14:15:22Z",
              "updated_at": "2019-08-24T14:15:22Z",
              "deleted_at": "2019-08-24T14:15:22Z"
            }
          ]
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
      }
    }
  ]
}
```

<h3 id="get-airports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-airports-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization ( Scopes: 1234 )
</aside>

## GET-airports-id

<a id="opIdGET-airports-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/airports/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/airports/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/airports/{id}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/airports/{id}',
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

r = requests.get('http://online.globalairportconcierge.com/airports/{id}', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/airports/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/airports/{id}");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/airports/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /airports/{id}`

*/airports/{id}*

GET Airport details.

<h3 id="get-airports-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|an airport id |

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "code": "LHR",
      "name": "LHR London Heahrow Airport",
      "country": "United Kingdom",
      "city": "London",
      "booking_window": 48,
      "terminals": [
        {
          "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "terminal_name": "LHR Terminal 2",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "service_name": "string",
              "fields": [
                {
                  "field_name": "string",
                  "field_type": "string",
                  "validation": [
                    {
                      "required": true
                    }
                  ]
                }
              ],
              "validataion": [
                {
                  "rule": "string",
                  "service_id": "string"
                }
              ],
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "username": "Resil"
              },
              "updated_by": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "username": "Anna"
              },
              "created_at": "2019-08-24T14:15:22Z",
              "updated_at": "2019-08-24T14:15:22Z",
              "deleted_at": "2019-08-24T14:15:22Z"
            }
          ]
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
      }
    }
  ]
}
```

<h3 id="get-airports-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-airports-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## GET-airports-id-terminals

<a id="opIdGET-airports-id-terminals"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/airports/{id}/terminals \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/airports/{id}/terminals HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/airports/{id}/terminals',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/airports/{id}/terminals',
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

r = requests.get('http://online.globalairportconcierge.com/airports/{id}/terminals', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/airports/{id}/terminals', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/airports/{id}/terminals");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/airports/{id}/terminals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /airports/{id}/terminals`

*/airports/{id}/terminals*

Get a list of terminals at an airport

<h3 id="get-airports-id-terminals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|name|query|string|false|a terminal name|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|sort|query|string|false|will sort objects returned from the request|
|id|path|string|true|an airport id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "service_name": "string",
          "fields": [
            {
              "field_name": "string",
              "field_type": "string",
              "validation": [
                {
                  "required": true
                }
              ]
            }
          ],
          "validataion": [
            {
              "rule": "string",
              "service_id": "string"
            }
          ],
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
  ]
}
```

<h3 id="get-airports-id-terminals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-airports-id-terminals-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-1-0-bookings">Bookings</h1>

## GET-bookings

<a id="opIdGET-bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/bookings \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/bookings HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/bookings',
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

r = requests.get('http://online.globalairportconcierge.com/bookings', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/bookings', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings`

*/bookings*

GET a list of bookings

<h3 id="get-bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|reference_id|query|string|false|booking referece id|
|type|query|string|false|booking type|
|booker_id|query|string|false|booker id|
|airport_id|query|string|false|an airport id|
|country|query|string|false|country|
|stop_status|query|string|false|stop status|
|payment_status|query|string|false|payment status|
|lead_passenger|query|string|false|lead passenger|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|sort|query|string|false|will sort objects returned from the request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|GAC|
|type|USS|
|type|MCS|
|stop_status|all|
|stop_status|waiting|
|stop_status|cancelled|
|stop_status|no show|
|stop_status|job faliure|
|payment_status|all|
|payment_status|pending|
|payment_status|paid|
|payment_status|refunded|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "image": "passenger_image.png",
                  "pas_stat": true
                }
              }
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20:00",
              "location": "United Kingdom",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15:00",
                  "origin": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15:00",
                  "destination": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                        "details": {
                          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                          "image": "passenger_image.png",
                          "pas_stat": true
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "special_notes": "string"
        }
      ],
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": 336.38,
        "add_hrs_charge": 0,
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true
    }
  ]
}
```

<h3 id="get-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-bookings-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## POST _bookings

<a id="opIdPOST /bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://online.globalairportconcierge.com/bookings \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
POST http://online.globalairportconcierge.com/bookings HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const inputBody = '{
  "type": "GAC",
  "booker": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "company": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": 336,
    "add_hrs_charge": 0,
    "surcharge": 0,
    "total_booking_cost": 336,
    "promo_code": "PROMO10",
    "total_discount": 33,
    "grand_total": 302,
    "total_paid": 302
  },
  "commets": "First Time Traveller"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://online.globalairportconcierge.com/bookings',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.post('http://online.globalairportconcierge.com/bookings', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://online.globalairportconcierge.com/bookings', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://online.globalairportconcierge.com/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bookings`

*/bookings*

Create a booking

> Body parameter

```json
{
  "type": "GAC",
  "booker": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "company": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": 336,
    "add_hrs_charge": 0,
    "surcharge": 0,
    "total_booking_cost": 336,
    "promo_code": "PROMO10",
    "total_discount": 33,
    "grand_total": 302,
    "total_paid": 302
  },
  "commets": "First Time Traveller"
}
```

<h3 id="post-_bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "image": "passenger_image.png",
                  "pas_stat": true,
                  "created_by": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "username": "Resil"
                  },
                  "updated_by": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "username": "Anna"
                  },
                  "created_at": "2019-08-24T14:15:22Z",
                  "updated_at": "2019-08-24T14:15:22Z",
                  "deleted_at": "2019-08-24T14:15:22Z"
                }
              }
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20:00",
              "location": "United Kingdom",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15:00",
                  "origin": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15:00",
                  "destination": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "service_providers": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "name": "This is a Company PVT Ltd",
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
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                      "name": "Company LHR OPS Team",
                      "email_contacts": [
                        {
                          "type": "Main",
                          "email": "email@email.com"
                        }
                      ]
                    }
                  ],
                  "greeter": [
                    {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                      "name": "Jane Doe",
                      "email_contacts": [
                        {
                          "type": "Main",
                          "email": "email@email.com"
                        }
                      ]
                    }
                  ],
                  "created_by": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "username": "Resil"
                  },
                  "updated_by": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "username": "Anna"
                  },
                  "created_at": "2019-08-24T14:15:22Z",
                  "updated_at": "2019-08-24T14:15:22Z",
                  "deleted_at": "2019-08-24T14:15:22Z"
                }
              ],
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                        "details": {
                          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                          "image": "passenger_image.png",
                          "pas_stat": true,
                          "created_by": {
                            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                            "username": "Resil"
                          },
                          "updated_by": {
                            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                            "username": "Anna"
                          },
                          "created_at": "2019-08-24T14:15:22Z",
                          "updated_at": "2019-08-24T14:15:22Z",
                          "deleted_at": "2019-08-24T14:15:22Z"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "special_notes": "string",
          "created_by": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "username": "Resil"
          },
          "updated_by": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "username": "Anna"
          },
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z",
          "deleted_at": "2019-08-24T14:15:22Z"
        }
      ],
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": 336.38,
        "add_hrs_charge": 0,
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
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "username": "Resil"
      },
      "updated_by": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "username": "Anna"
      },
      "created_at": "2019-08-24T14:15:22Z",
      "updated_at": "2019-08-24T14:15:22Z",
      "deleted_at": "2019-08-24T14:15:22Z"
    }
  ]
}
```

<h3 id="post-_bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="post-_bookings-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## GET-bookings-id

<a id="opIdGET-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/bookings/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/bookings/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings/{id}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/bookings/{id}',
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

r = requests.get('http://online.globalairportconcierge.com/bookings/{id}', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/bookings/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings/{id}");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings/{id}`

*/bookings/{id}*

GET a booking by id

<h3 id="get-bookings-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a booking id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "image": "passenger_image.png",
                  "pas_stat": true
                }
              }
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20:00",
              "location": "United Kingdom",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15:00",
                  "origin": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15:00",
                  "destination": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                        "details": {
                          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                          "image": "passenger_image.png",
                          "pas_stat": true
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "special_notes": "string"
        }
      ],
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": 336.38,
        "add_hrs_charge": 0,
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true
    }
  ]
}
```

<h3 id="get-bookings-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## PUT-bookings-id

<a id="opIdPUT-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://online.globalairportconcierge.com/bookings/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://online.globalairportconcierge.com/bookings/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const inputBody = '{
  "type": "GAC",
  "booker": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "company": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": 336,
    "add_hrs_charge": 0,
    "surcharge": 0,
    "total_booking_cost": 336,
    "promo_code": "PROMO10",
    "total_discount": 33,
    "grand_total": 302,
    "total_paid": 302
  },
  "commets": "First Time Traveller"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings/{id}',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://online.globalairportconcierge.com/bookings/{id}',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.put('http://online.globalairportconcierge.com/bookings/{id}', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://online.globalairportconcierge.com/bookings/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://online.globalairportconcierge.com/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /bookings/{id}`

*/bookings/{id}*

Update a booking

> Body parameter

```json
{
  "type": "GAC",
  "booker": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "company": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": 336,
    "add_hrs_charge": 0,
    "surcharge": 0,
    "total_booking_cost": 336,
    "promo_code": "PROMO10",
    "total_discount": 33,
    "grand_total": 302,
    "total_paid": 302
  },
  "commets": "First Time Traveller"
}
```

<h3 id="put-bookings-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a booking id|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference_id": 1001,
      "type": "GAC",
      "booker": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "This is a Company PVT Ltd"
        }
      },
      "journeys": [
        {
          "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "image": "passenger_image.png",
                  "pas_stat": true
                }
              }
            ]
          },
          "stops": [
            {
              "type": "Connection",
              "meeting_date": "2020-10-31",
              "meeting_time": "18:20:00",
              "location": "United Kingdom",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LHR London Hethrow Airport"
              },
              "flights": {
                "arrival": {
                  "flight_no": "BA281",
                  "terminal": "LHR Terminal 2",
                  "date": "2020-11-05",
                  "time": "20:15:00",
                  "origin": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "LAX Los Angeles Airport"
                  }
                },
                "departure": {
                  "flight_no": "BA282",
                  "terminal": "LHR Terminal 4",
                  "date": "2020-11-05",
                  "time": "22:15:00",
                  "destination": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "name": "DXB Dubai International Airport"
                  }
                }
              },
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                        "details": {
                          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                          "image": "passenger_image.png",
                          "pas_stat": true
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "special_notes": "string"
        }
      ],
      "billing": {
        "type": "Online",
        "status": 1,
        "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
        "card": "Visa 4242",
        "total_service_cost": 336.38,
        "add_hrs_charge": 0,
        "surcharge": 0,
        "total_booking_cost": 336.38,
        "promo_code": "PROMO10",
        "total_discount": 33.63,
        "grand_total": 302.75,
        "total_paid": 302.75
      },
      "commets": "First Time Traveller",
      "status": true
    }
  ]
}
```

<h3 id="put-bookings-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="put-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## DELETE-bookings-id

<a id="opIdDELETE-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://online.globalairportconcierge.com/bookings/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://online.globalairportconcierge.com/bookings/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings/{id}',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://online.globalairportconcierge.com/bookings/{id}',
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

r = requests.delete('http://online.globalairportconcierge.com/bookings/{id}', headers = headers)

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
    $response = $client->request('DELETE','http://online.globalairportconcierge.com/bookings/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://online.globalairportconcierge.com/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /bookings/{id}`

*/bookings/{id}*

delete a booking

<h3 id="delete-bookings-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a booking id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  }
}
```

<h3 id="delete-bookings-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="delete-bookings-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## GET-bookings-id-journeys

<a id="opIdGET-bookings-id-journeys"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/bookings/{id}/journeys \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/bookings/{id}/journeys HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings/{id}/journeys',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/bookings/{id}/journeys',
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

r = requests.get('http://online.globalairportconcierge.com/bookings/{id}/journeys', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/bookings/{id}/journeys', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings/{id}/journeys");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/bookings/{id}/journeys", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings/{id}/journeys`

*/bookings/{id}/journeys*

GET a list of journeys for a single booking

<h3 id="get-bookings-id-journeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|sort|query|string|false|will sort objects returned from the request|
|id|path|string|true|a booking Id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "image": "passenger_image.png",
              "pas_stat": true
            }
          }
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20:00",
          "location": "United Kingdom",
          "airport": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15:00",
              "origin": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15:00",
              "destination": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                    "details": {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                      "image": "passenger_image.png",
                      "pas_stat": true
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string"
    }
  ]
}
```

<h3 id="get-bookings-id-journeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-bookings-id-journeys-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## POST-bookings-id-journeys

<a id="opIdPOST-bookings-id-journeys"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://online.globalairportconcierge.com/bookings/{id}/journeys \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
POST http://online.globalairportconcierge.com/bookings/{id}/journeys HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

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
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20:00",
      "location": "United Kingdom",
      "airport": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15:00",
          "origin": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15:00",
          "destination": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/bookings/{id}/journeys',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://online.globalairportconcierge.com/bookings/{id}/journeys',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.post('http://online.globalairportconcierge.com/bookings/{id}/journeys', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://online.globalairportconcierge.com/bookings/{id}/journeys', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/bookings/{id}/journeys");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://online.globalairportconcierge.com/bookings/{id}/journeys", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bookings/{id}/journeys`

*/bookings/{id}/journeys*

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
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20:00",
      "location": "United Kingdom",
      "airport": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15:00",
          "origin": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15:00",
          "destination": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a booking Id|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "image": "passenger_image.png",
              "pas_stat": true
            }
          }
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20:00",
          "location": "United Kingdom",
          "airport": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15:00",
              "origin": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15:00",
              "destination": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                    "details": {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                      "image": "passenger_image.png",
                      "pas_stat": true
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string"
    }
  ]
}
```

<h3 id="post-bookings-id-journeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="post-bookings-id-journeys-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-1-0-companies">Companies</h1>

## GET-companies-id-passengers

<a id="opIdGET-companies-id-passengers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/companies/{id}/passengers \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/companies/{id}/passengers HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/companies/{id}/passengers',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/companies/{id}/passengers',
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

r = requests.get('http://online.globalairportconcierge.com/companies/{id}/passengers', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/companies/{id}/passengers', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/companies/{id}/passengers");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/companies/{id}/passengers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/passengers`

*/companies/{id}/passengers*

GET a list of passengers of a company

<h3 id="get-companies-id-passengers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|name|query|string|false|a passenger name|
|city|query|string|false|a passenger city|
|country|query|string|false|a passenger country|
|email|query|string|false|a passenger email|
|phone|query|string|false|a passenger phone|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|sort|query|string|false|will sort objects returned from the request|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a company id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "image": "passenger_image.png",
      "pas_stat": true
    }
  ]
}
```

<h3 id="get-companies-id-passengers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-companies-id-passengers-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## POST-companies-id-passengers

<a id="opIdPOST-companies-id-passengers"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://online.globalairportconcierge.com/companies/{id}/passengers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
POST http://online.globalairportconcierge.com/companies/{id}/passengers HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

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
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/companies/{id}/passengers',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.post 'http://online.globalairportconcierge.com/companies/{id}/passengers',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.post('http://online.globalairportconcierge.com/companies/{id}/passengers', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://online.globalairportconcierge.com/companies/{id}/passengers', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/companies/{id}/passengers");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://online.globalairportconcierge.com/companies/{id}/passengers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{id}/passengers`

*/companies/{id}/passengers*

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
}
```

<h3 id="post-companies-id-passengers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a company id|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "image": "passenger_image.png",
      "pas_stat": true
    }
  ]
}
```

<h3 id="post-companies-id-passengers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="post-companies-id-passengers-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-1-0-passengers">Passengers</h1>

## GET-passengers-id

<a id="opIdGET-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/passengers/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/passengers/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/passengers/{id}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/passengers/{id}',
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

r = requests.get('http://online.globalairportconcierge.com/passengers/{id}', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/passengers/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/passengers/{id}");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /passengers/{id}`

*/passengers/{id}*

GET a single passenger of a company

<h3 id="get-passengers-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|passenger_id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "image": "passenger_image.png",
      "pas_stat": true
    }
  ]
}
```

<h3 id="get-passengers-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## PUT-passengers-id

<a id="opIdPUT-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://online.globalairportconcierge.com/passengers/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://online.globalairportconcierge.com/passengers/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

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
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/passengers/{id}',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://online.globalairportconcierge.com/passengers/{id}',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.put('http://online.globalairportconcierge.com/passengers/{id}', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://online.globalairportconcierge.com/passengers/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/passengers/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://online.globalairportconcierge.com/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /passengers/{id}`

*/passengers/{id}*

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
}
```

<h3 id="put-passengers-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|passenger_id|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "image": "passenger_image.png",
      "pas_stat": true
    }
  ]
}
```

<h3 id="put-passengers-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="put-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## DELETE-passengers-id

<a id="opIdDELETE-passengers-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://online.globalairportconcierge.com/passengers/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://online.globalairportconcierge.com/passengers/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/passengers/{id}',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://online.globalairportconcierge.com/passengers/{id}',
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

r = requests.delete('http://online.globalairportconcierge.com/passengers/{id}', headers = headers)

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
    $response = $client->request('DELETE','http://online.globalairportconcierge.com/passengers/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/passengers/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://online.globalairportconcierge.com/passengers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /passengers/{id}`

*/passengers/{id}*

DELETE a passenger of a company

<h3 id="delete-passengers-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|passenger_id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  }
}
```

<h3 id="delete-passengers-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="delete-passengers-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-1-0-terminals">Terminals</h1>

## GETterminals-id-services

<a id="opIdGETterminals-id-services"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/terminals/{id}/services \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/terminals/{id}/services HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/terminals/{id}/services',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/terminals/{id}/services',
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

r = requests.get('http://online.globalairportconcierge.com/terminals/{id}/services', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/terminals/{id}/services', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/terminals/{id}/services");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/terminals/{id}/services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /terminals/{id}/services`

*/terminals/{id}/services*

GET a list of services in a terminal

<h3 id="getterminals-id-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|name|query|string|false|a service name|
|limit|query|integer(int32)|false|specify the number of results returned from the request|
|starting_from|query|integer(int32)|false|specify the number of results returned from the request|
|sort|query|string|false|will sort objects returned from the request|
|id|path|string|true|a terminal id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "pagination": {
    "total_count": 100,
    "total_pages": 20,
    "current_page": 3,
    "limit": 10
  },
  "data": [
    {
      "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "service_name": "string",
          "fields": [
            {
              "field_name": "string",
              "field_type": "string",
              "validation": [
                {
                  "required": true
                }
              ]
            }
          ],
          "validataion": [
            {
              "rule": "string",
              "service_id": "string"
            }
          ],
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
  ]
}
```

<h3 id="getterminals-id-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="getterminals-id-services-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-1-0-journeys">Journeys</h1>

## GET-journeys-id

<a id="opIdGET-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://online.globalairportconcierge.com/journeys/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://online.globalairportconcierge.com/journeys/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/journeys/{id}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.get 'http://online.globalairportconcierge.com/journeys/{id}',
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

r = requests.get('http://online.globalairportconcierge.com/journeys/{id}', headers = headers)

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
    $response = $client->request('GET','http://online.globalairportconcierge.com/journeys/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/journeys/{id}");
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
    req, err := http.NewRequest("GET", "http://online.globalairportconcierge.com/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /journeys/{id}`

*/journeys/{id}*

GET a single journey of a booking

<h3 id="get-journeys-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a journey id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "image": "passenger_image.png",
              "pas_stat": true
            }
          }
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20:00",
          "location": "United Kingdom",
          "airport": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15:00",
              "origin": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15:00",
              "destination": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                    "details": {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                      "image": "passenger_image.png",
                      "pas_stat": true
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string"
    }
  ]
}
```

<h3 id="get-journeys-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## PUT-journeys-id

<a id="opIdPUT-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://online.globalairportconcierge.com/journeys/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://online.globalairportconcierge.com/journeys/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

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
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20:00",
      "location": "United Kingdom",
      "airport": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15:00",
          "origin": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15:00",
          "destination": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/journeys/{id}',
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
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.put 'http://online.globalairportconcierge.com/journeys/{id}',
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
  'Accept-Encoding': 'gzip',
  'apiKey': 'API_KEY'
}

r = requests.put('http://online.globalairportconcierge.com/journeys/{id}', headers = headers)

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
    'Accept-Encoding' => 'gzip',
    'apiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://online.globalairportconcierge.com/journeys/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/journeys/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://online.globalairportconcierge.com/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /journeys/{id}`

*/journeys/{id}*

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
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20:00",
      "location": "United Kingdom",
      "airport": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15:00",
          "origin": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15:00",
          "destination": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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

<h3 id="put-journeys-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a journey id|

> Example responses

> Created

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  },
  "data": [
    {
      "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "image": "passenger_image.png",
              "pas_stat": true
            }
          }
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20:00",
          "location": "United Kingdom",
          "airport": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15:00",
              "origin": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15:00",
              "destination": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                    "details": {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                      "image": "passenger_image.png",
                      "pas_stat": true
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "special_notes": "string"
    }
  ]
}
```

<h3 id="put-journeys-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="put-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## DELETE-journeys-id

<a id="opIdDELETE-journeys-id"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://online.globalairportconcierge.com/journeys/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://online.globalairportconcierge.com/journeys/{id} HTTP/1.1
Host: online.globalairportconcierge.com
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://online.globalairportconcierge.com/journeys/{id}',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Trace-Id' => '1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type' => 'application/json',
  'Accept-Encoding' => 'gzip',
  'apiKey' => 'API_KEY'
}

result = RestClient.delete 'http://online.globalairportconcierge.com/journeys/{id}',
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

r = requests.delete('http://online.globalairportconcierge.com/journeys/{id}', headers = headers)

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
    $response = $client->request('DELETE','http://online.globalairportconcierge.com/journeys/{id}', array(
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
URL obj = new URL("http://online.globalairportconcierge.com/journeys/{id}");
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
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://online.globalairportconcierge.com/journeys/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /journeys/{id}`

*/journeys/{id}*

Delete a journey of a booking

<h3 id="delete-journeys-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|a journey id|

> Example responses

> OK

```json
{
  "status": {
    "success": true,
    "status": 200,
    "message": "Data retreived successfully"
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  }
}
```

<h3 id="delete-journeys-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="delete-journeys-id-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_Airport">Airport</h2>
<!-- backwards compatibility -->
<a id="schemaairport"></a>
<a id="schema_Airport"></a>
<a id="tocSairport"></a>
<a id="tocsairport"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "code": "LHR",
  "name": "LHR London Heahrow Airport",
  "country": "United Kingdom",
  "city": "London",
  "booking_window": 48,
  "terminals": [
    {
      "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "terminal_name": "LHR Terminal 2",
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "service_name": "string",
          "fields": [
            {
              "field_name": "string",
              "field_type": "string",
              "validation": [
                {
                  "required": true
                }
              ]
            }
          ],
          "validataion": [
            {
              "rule": "string",
              "service_id": "string"
            }
          ],
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
  }
}

```

/airports response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Airport ID|
|code|string|true|none|Airport code|
|name|string|true|none|Airport name|
|country|string|true|none|Airport country|
|city|string|true|none|Airport city|
|booking_window|number|false|none|Minimal time allowed to book at the airport prior service date and time|
|terminals|[allOf]|false|none|List of terminals at the airport|
|» /terminals response body|object|false|none|Terminal Model|
|»» airport_id|string(uuid)|true|none|Airport object ID|
|»» id|string(uuid)|true|none|Terminal object ID|
|»» terminal_name|string|true|none|Name of the terminal|
|»» services|[allOf]|false|none|Services provided at the terminal|
|»»» /services full response body|object|false|none|Create new service in an airport|
|»»»» id|string(uuid)|true|none|Service object ID|
|»»»» service_name|string|true|none|Name of the service|
|»»»» fields|[object]|true|none|Fields of the service|
|»»»»» field_name|string|true|none|none|
|»»»»» field_type|string|true|none|none|
|»»»»» validation|[object]|false|none|none|
|»»»»»» required|boolean|true|none|none|
|»»»» validataion|[object]|true|none|Validation of the service|
|»»»»» rule|string|true|none|none|
|»»»»» service_id|string|true|none|none|
|»»»» rates|[object]|true|none|rates of the service|
|»»»»» currency|string|true|none|none|
|»»»»» packages|[object]|false|none|none|
|»»»»»» pax|number|true|none|none|
|»»»»»» value|number|true|none|none|
|charges|object|false|none|Charges assosiated with the airport|
|» surcharge|[object]|false|none|none|
|»» below|number|false|none|none|
|»» percentage|number|false|none|none|
|» additional_hour_charge|[object]|false|none|none|
|»» currancy|string|false|none|none|
|»» rate|number|false|none|none|
|air_side_meetup|object|false|none|Passenger meet up point is at the air side or land side|
|» international|object|false|none|none|
|»» arrival|boolean|false|none|none|
|»» depature|boolean|false|none|none|
|»» transit|boolean|false|none|none|
|» domestic|object|false|none|none|
|»» arrival|boolean|false|none|none|
|»» depature|boolean|false|none|none|
|»» transit|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|booking_window|6|
|booking_window|12|
|booking_window|24|
|booking_window|48|
|below|6|
|below|12|
|below|24|
|below|48|

<h2 id="tocS_Booking">Booking</h2>
<!-- backwards compatibility -->
<a id="schemabooking"></a>
<a id="schema_Booking"></a>
<a id="tocSbooking"></a>
<a id="tocsbooking"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reference_id": 1001,
  "type": "GAC",
  "booker": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "This is a Company PVT Ltd"
    }
  },
  "journeys": [
    {
      "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
              "image": "passenger_image.png",
              "pas_stat": true
            }
          }
        ]
      },
      "stops": [
        {
          "type": "Connection",
          "meeting_date": "2020-10-31",
          "meeting_time": "18:20:00",
          "location": "United Kingdom",
          "airport": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LHR London Hethrow Airport"
          },
          "flights": {
            "arrival": {
              "flight_no": "BA281",
              "terminal": "LHR Terminal 2",
              "date": "2020-11-05",
              "time": "20:15:00",
              "origin": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "LAX Los Angeles Airport"
              }
            },
            "departure": {
              "flight_no": "BA282",
              "terminal": "LHR Terminal 4",
              "date": "2020-11-05",
              "time": "22:15:00",
              "destination": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "name": "DXB Dubai International Airport"
              }
            }
          },
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
      "special_notes": "string"
    }
  ],
  "billing": {
    "type": "Online",
    "status": 1,
    "ref_id": "txn_1Hgdg0KqcoAJEUrOcr6pMaw4",
    "card": "Visa 4242",
    "total_service_cost": 336.38,
    "add_hrs_charge": 0,
    "surcharge": 0,
    "total_booking_cost": 336.38,
    "promo_code": "PROMO10",
    "total_discount": 33.63,
    "grand_total": 302.75,
    "total_paid": 302.75
  },
  "commets": "First Time Traveller",
  "status": true
}

```

/bookings response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Object id of the booking|
|reference_id|number|true|none|Booking reference id|
|type|string|true|none|Booking type|
|booker|object|true|none|Booker details of he booking|
|» id|string(uuid)|true|none|none|
|» email|string(email)|true|none|none|
|» email_contacts|[object]|false|none|none|
|»» type|string|true|none|none|
|»» email|string(email)|true|none|none|
|» name|object|true|none|none|
|»» title|string|true|none|none|
|»» forename|string|true|none|none|
|»» surname|string|true|none|none|
|» company|object|true|none|none|
|»» id|string(uuid)|true|none|none|
|»» name|string|true|none|none|
|journeys|[allOf]|true|none|Booking journeys|
|» /journeys response body|object|false|none|Journey model|
|»» journey_id|string(uuid)|true|none|Journey ID|
|»» reference_id|integer|true|none|Journey reference ID|
|»» passengers|object|true|none|Passengeres included in the journey|
|»»» meta|object|true|none|none|
|»»»» adult|integer|true|none|none|
|»»»» child|integer|true|none|none|
|»»»» infant|integer|true|none|none|
|»»»» bags|integer|true|none|none|
|»»» pax|[object]|true|none|none|
|»»»» type|string|false|none|none|
|»»»» pnr|string|false|none|none|
|»»»» class|string|false|none|none|
|»»»» details|object|false|none|Passenger model|
|»»»»» id|string(uuid)|true|none|Passenger object ID|
|»»»»» name|object|true|none|Personal information of the passenger|
|»»»»»» title|string|true|none|none|
|»»»»»» forename|string|true|none|none|
|»»»»»» surname|string|true|none|none|
|»»»»» contacts|object|true|none|Contact model|
|»»»»»» address|object|false|none|Addres information|
|»»»»»»» streets|[string]|false|none|none|
|»»»»»»» city|string|false|none|none|
|»»»»»»» state|string|false|none|none|
|»»»»»»» postal_code|string|false|none|none|
|»»»»»»» country|string|false|none|none|
|»»»»»» emails|[object]|false|none|Email information|
|»»»»»»» type|string|false|none|none|
|»»»»»»» email|string(email)|false|none|none|
|»»»»»» phones|[object]|false|none|Phone numbers|
|»»»»»»» type|string|false|none|none|
|»»»»»»» name|string|false|none|none|
|»»»»»»» phone|string|false|none|none|
|»»»»» date_of_birth|string(date)|false|none|Date of birth of the passenger|
|»»»»» passport_no|string|false|none|Passport number of the passenger|
|»»»»» comments|string|false|none|Special comments aboout the passenger|
|»»»»» signage|string|false|none|Signage of the passenger|
|»»»»» sig_image|string|false|none|Sge image|
|»»»»» image|string|false|none|Sge image|
|»»»»» pas_stat|boolean|false|none|Status of the passenger|
|»» stops|[object]|true|none|No of stops on the journey|
|»»» type|string|true|none|none|
|»»» meeting_date|string(date)|true|none|none|
|»»» meeting_time|string(time)|true|none|none|
|»»» location|string|true|none|none|
|»»» airport|object|false|none|none|
|»»»» id|string(uuid)|true|none|none|
|»»»» name|string|true|none|none|
|»»» flights|object|false|none|none|
|»»»» arrival|object|true|none|none|
|»»»»» flight_no|string|true|none|none|
|»»»»» terminal|string|true|none|none|
|»»»»» date|string(date)|true|none|none|
|»»»»» time|string(time)|true|none|none|
|»»»»» origin|object|true|none|none|
|»»»»»» id|string(uuid)|true|none|none|
|»»»»»» name|string|true|none|none|
|»»»» departure|object|true|none|none|
|»»»»» flight_no|string|true|none|none|
|»»»»» terminal|string|true|none|none|
|»»»»» date|string(date)|true|none|none|
|»»»»» time|string(time)|true|none|none|
|»»»»» destination|object|true|none|none|
|»»»»»» id|string(uuid)|true|none|none|
|»»»»»» name|string|true|none|none|
|»»» services|[object]|true|none|none|
|»»»» id|string(uuid)|false|none|none|
|»»»» service_name|string|false|none|none|
|»»»» passengers|object|false|none|none|
|»»»»» meta|object|false|none|none|
|»»»»»» adult|integer|false|none|none|
|»»»»»» child|integer|false|none|none|
|»»»»»» infant|integer|false|none|none|
|»»»»»» bags|integer|false|none|none|
|»»»»» pax|[object]|false|none|none|
|»»»»»» type|string|false|none|none|
|»»»»»» details|object|false|none|Passenger model|
|»»»»»»» id|string(uuid)|true|none|Passenger object ID|
|»»»»»»» name|object|true|none|Personal information of the passenger|
|»»»»»»»» title|string|true|none|none|
|»»»»»»»» forename|string|true|none|none|
|»»»»»»»» surname|string|true|none|none|
|»»»»»»» contacts|object|true|none|Contact model|
|»»»»»»»» address|object|false|none|Addres information|
|»»»»»»»»» streets|[string]|false|none|none|
|»»»»»»»»» city|string|false|none|none|
|»»»»»»»»» state|string|false|none|none|
|»»»»»»»»» postal_code|string|false|none|none|
|»»»»»»»»» country|string|false|none|none|
|»»»»»»»» emails|[object]|false|none|Email information|
|»»»»»»»»» type|string|false|none|none|
|»»»»»»»»» email|string(email)|false|none|none|
|»»»»»»»» phones|[object]|false|none|Phone numbers|
|»»»»»»»»» type|string|false|none|none|
|»»»»»»»»» name|string|false|none|none|
|»»»»»»»»» phone|string|false|none|none|
|»»»»»»» date_of_birth|string(date)|false|none|Date of birth of the passenger|
|»»»»»»» passport_no|string|false|none|Passport number of the passenger|
|»»»»»»» comments|string|false|none|Special comments aboout the passenger|
|»»»»»»» signage|string|false|none|Signage of the passenger|
|»»»»»»» sig_image|string|false|none|Sge image|
|»»»»»»» image|string|false|none|Sge image|
|»»»»»»» pas_stat|boolean|false|none|Status of the passenger|
|»» special_notes|string|false|none|Special notes of the journey|
|billing|object|true|none|Billing details of the booking|
|» type|string|true|none|none|
|» status|number|true|none|none|
|» ref_id|string|false|none|none|
|» card|string|false|none|none|
|» total_service_cost|number(double)|true|none|none|
|» add_hrs_charge|number|true|none|none|
|» surcharge|number(double)|true|none|none|
|» total_booking_cost|number(double)|true|none|none|
|» promo_code|string|true|none|none|
|» total_discount|number|true|none|none|
|» grand_total|number|true|none|none|
|» total_paid|number|true|none|none|
|commets|string|false|none|Special comments of the booking|
|status|boolean|true|none|Booking staus|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GAC|
|type|USS|
|type|MCS|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|
|type|Lead|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|
|type|Arrival|
|type|Departure|
|type|Connection|
|type|Lead|
|type|Additional|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|
|type|Online|
|type|RES Online|
|type|Invoice|
|type|Quotation|
|status|0|
|status|1|
|status|2|
|status|3|

<h2 id="tocS_journey">journey</h2>
<!-- backwards compatibility -->
<a id="schemajourney"></a>
<a id="schema_journey"></a>
<a id="tocSjourney"></a>
<a id="tocsjourney"></a>

```json
{
  "journey_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
          "image": "passenger_image.png",
          "pas_stat": true
        }
      }
    ]
  },
  "stops": [
    {
      "type": "Connection",
      "meeting_date": "2020-10-31",
      "meeting_time": "18:20:00",
      "location": "United Kingdom",
      "airport": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "LHR London Hethrow Airport"
      },
      "flights": {
        "arrival": {
          "flight_no": "BA281",
          "terminal": "LHR Terminal 2",
          "date": "2020-11-05",
          "time": "20:15:00",
          "origin": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "LAX Los Angeles Airport"
          }
        },
        "departure": {
          "flight_no": "BA282",
          "terminal": "LHR Terminal 4",
          "date": "2020-11-05",
          "time": "22:15:00",
          "destination": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "DXB Dubai International Airport"
          }
        }
      },
      "services": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
                  "image": "passenger_image.png",
                  "pas_stat": true
                }
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

/journeys response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|journey_id|string(uuid)|true|none|Journey ID|
|reference_id|integer|true|none|Journey reference ID|
|passengers|object|true|none|Passengeres included in the journey|
|» meta|object|true|none|none|
|»» adult|integer|true|none|none|
|»» child|integer|true|none|none|
|»» infant|integer|true|none|none|
|»» bags|integer|true|none|none|
|» pax|[object]|true|none|none|
|»» type|string|false|none|none|
|»» pnr|string|false|none|none|
|»» class|string|false|none|none|
|»» details|object|false|none|Passenger model|
|»»» id|string(uuid)|true|none|Passenger object ID|
|»»» name|object|true|none|Personal information of the passenger|
|»»»» title|string|true|none|none|
|»»»» forename|string|true|none|none|
|»»»» surname|string|true|none|none|
|»»» contacts|object|true|none|Contact model|
|»»»» address|object|false|none|Addres information|
|»»»»» streets|[string]|false|none|none|
|»»»»» city|string|false|none|none|
|»»»»» state|string|false|none|none|
|»»»»» postal_code|string|false|none|none|
|»»»»» country|string|false|none|none|
|»»»» emails|[object]|false|none|Email information|
|»»»»» type|string|false|none|none|
|»»»»» email|string(email)|false|none|none|
|»»»» phones|[object]|false|none|Phone numbers|
|»»»»» type|string|false|none|none|
|»»»»» name|string|false|none|none|
|»»»»» phone|string|false|none|none|
|»»» date_of_birth|string(date)|false|none|Date of birth of the passenger|
|»»» passport_no|string|false|none|Passport number of the passenger|
|»»» comments|string|false|none|Special comments aboout the passenger|
|»»» signage|string|false|none|Signage of the passenger|
|»»» sig_image|string|false|none|Sge image|
|»»» image|string|false|none|Sge image|
|»»» pas_stat|boolean|false|none|Status of the passenger|
|stops|[object]|true|none|No of stops on the journey|
|» type|string|true|none|none|
|» meeting_date|string(date)|true|none|none|
|» meeting_time|string(time)|true|none|none|
|» location|string|true|none|none|
|» airport|object|false|none|none|
|»» id|string(uuid)|true|none|none|
|»» name|string|true|none|none|
|» flights|object|false|none|none|
|»» arrival|object|true|none|none|
|»»» flight_no|string|true|none|none|
|»»» terminal|string|true|none|none|
|»»» date|string(date)|true|none|none|
|»»» time|string(time)|true|none|none|
|»»» origin|object|true|none|none|
|»»»» id|string(uuid)|true|none|none|
|»»»» name|string|true|none|none|
|»» departure|object|true|none|none|
|»»» flight_no|string|true|none|none|
|»»» terminal|string|true|none|none|
|»»» date|string(date)|true|none|none|
|»»» time|string(time)|true|none|none|
|»»» destination|object|true|none|none|
|»»»» id|string(uuid)|true|none|none|
|»»»» name|string|true|none|none|
|» services|[object]|true|none|none|
|»» id|string(uuid)|false|none|none|
|»» service_name|string|false|none|none|
|»» passengers|object|false|none|none|
|»»» meta|object|false|none|none|
|»»»» adult|integer|false|none|none|
|»»»» child|integer|false|none|none|
|»»»» infant|integer|false|none|none|
|»»»» bags|integer|false|none|none|
|»»» pax|[object]|false|none|none|
|»»»» type|string|false|none|none|
|»»»» details|object|false|none|Passenger model|
|»»»»» id|string(uuid)|true|none|Passenger object ID|
|»»»»» name|object|true|none|Personal information of the passenger|
|»»»»»» title|string|true|none|none|
|»»»»»» forename|string|true|none|none|
|»»»»»» surname|string|true|none|none|
|»»»»» contacts|object|true|none|Contact model|
|»»»»»» address|object|false|none|Addres information|
|»»»»»»» streets|[string]|false|none|none|
|»»»»»»» city|string|false|none|none|
|»»»»»»» state|string|false|none|none|
|»»»»»»» postal_code|string|false|none|none|
|»»»»»»» country|string|false|none|none|
|»»»»»» emails|[object]|false|none|Email information|
|»»»»»»» type|string|false|none|none|
|»»»»»»» email|string(email)|false|none|none|
|»»»»»» phones|[object]|false|none|Phone numbers|
|»»»»»»» type|string|false|none|none|
|»»»»»»» name|string|false|none|none|
|»»»»»»» phone|string|false|none|none|
|»»»»» date_of_birth|string(date)|false|none|Date of birth of the passenger|
|»»»»» passport_no|string|false|none|Passport number of the passenger|
|»»»»» comments|string|false|none|Special comments aboout the passenger|
|»»»»» signage|string|false|none|Signage of the passenger|
|»»»»» sig_image|string|false|none|Sge image|
|»»»»» image|string|false|none|Sge image|
|»»»»» pas_stat|boolean|false|none|Status of the passenger|
|special_notes|string|false|none|Special notes of the journey|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Lead|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|
|type|Arrival|
|type|Departure|
|type|Connection|
|type|Lead|
|type|Additional|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|

<h2 id="tocS_passenger">passenger</h2>
<!-- backwards compatibility -->
<a id="schemapassenger"></a>
<a id="schema_passenger"></a>
<a id="tocSpassenger"></a>
<a id="tocspassenger"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
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
  "image": "passenger_image.png",
  "pas_stat": true
}

```

/passengers response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Passenger object ID|
|name|object|true|none|Personal information of the passenger|
|» title|string|true|none|none|
|» forename|string|true|none|none|
|» surname|string|true|none|none|
|contacts|object|true|none|Contact model|
|» address|object|false|none|Addres information|
|»» streets|[string]|false|none|none|
|»» city|string|false|none|none|
|»» state|string|false|none|none|
|»» postal_code|string|false|none|none|
|»» country|string|false|none|none|
|» emails|[object]|false|none|Email information|
|»» type|string|false|none|none|
|»» email|string(email)|false|none|none|
|» phones|[object]|false|none|Phone numbers|
|»» type|string|false|none|none|
|»» name|string|false|none|none|
|»» phone|string|false|none|none|
|date_of_birth|string(date)|false|none|Date of birth of the passenger|
|passport_no|string|false|none|Passport number of the passenger|
|comments|string|false|none|Special comments aboout the passenger|
|signage|string|false|none|Signage of the passenger|
|sig_image|string|false|none|Sge image|
|image|string|false|none|Sge image|
|pas_stat|boolean|false|none|Status of the passenger|

#### Enumerated Values

|Property|Value|
|---|---|
|title|Mr.|
|title|Mrs.|
|title|Ms.|
|title|Dr.|
|title|Mstr.|
|title|Miss|
|title|Mx.|
|title|Prof.|
|title|Rev.|
|title|Sir|
|title|Sister|
|title|Team|

<h2 id="tocS_service">service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "service_name": "string",
  "fields": [
    {
      "field_name": "string",
      "field_type": "string",
      "validation": [
        {
          "required": true
        }
      ]
    }
  ],
  "validataion": [
    {
      "rule": "string",
      "service_id": "string"
    }
  ],
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

/services full response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Service object ID|
|service_name|string|true|none|Name of the service|
|fields|[object]|true|none|Fields of the service|
|» field_name|string|true|none|none|
|» field_type|string|true|none|none|
|» validation|[object]|false|none|none|
|»» required|boolean|true|none|none|
|validataion|[object]|true|none|Validation of the service|
|» rule|string|true|none|none|
|» service_id|string|true|none|none|
|rates|[object]|true|none|rates of the service|
|» currency|string|true|none|none|
|» packages|[object]|false|none|none|
|»» pax|number|true|none|none|
|»» value|number|true|none|none|

<h2 id="tocS_terminal">terminal</h2>
<!-- backwards compatibility -->
<a id="schematerminal"></a>
<a id="schema_terminal"></a>
<a id="tocSterminal"></a>
<a id="tocsterminal"></a>

```json
{
  "airport_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "terminal_name": "LHR Terminal 2",
  "services": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "service_name": "string",
      "fields": [
        {
          "field_name": "string",
          "field_type": "string",
          "validation": [
            {
              "required": true
            }
          ]
        }
      ],
      "validataion": [
        {
          "rule": "string",
          "service_id": "string"
        }
      ],
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

/terminals response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airport_id|string(uuid)|true|none|Airport object ID|
|id|string(uuid)|true|none|Terminal object ID|
|terminal_name|string|true|none|Name of the terminal|
|services|[allOf]|false|none|Services provided at the terminal|
|» /services full response body|object|false|none|Create new service in an airport|
|»» id|string(uuid)|true|none|Service object ID|
|»» service_name|string|true|none|Name of the service|
|»» fields|[object]|true|none|Fields of the service|
|»»» field_name|string|true|none|none|
|»»» field_type|string|true|none|none|
|»»» validation|[object]|false|none|none|
|»»»» required|boolean|true|none|none|
|»» validataion|[object]|true|none|Validation of the service|
|»»» rule|string|true|none|none|
|»»» service_id|string|true|none|none|
|»» rates|[object]|true|none|rates of the service|
|»»» currency|string|true|none|none|
|»»» packages|[object]|false|none|none|
|»»»» pax|number|true|none|none|
|»»»» value|number|true|none|none|

