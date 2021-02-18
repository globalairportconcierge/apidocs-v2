---
title: GAC API V1 v1.0
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
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h1 id="gac-api-v1">GAC API V1 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Your passenger services APIs of choice

Base URLs:

* <a href="http://baas.globalairportconcierge.com/v1">http://baas.globalairportconcierge.com/v1</a>

* <a href="http://127.0.0.1:4010">http://127.0.0.1:4010</a>

<a href="https://gac.com/terms-of-service.html">Terms of service</a>

License: <a href="https://gac.com/api-license.html">GAC</a>

# Authentication

* API Key (Authorization)
    - Parameter Name: **apiKey**, in: header. Bearer Token

<h1 id="gac-api-v1-bookings">Bookings</h1>

## GET-bookings

<a id="opIdGET-bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://baas.globalairportconcierge.com/v1/bookings \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://baas.globalairportconcierge.com/v1/bookings HTTP/1.1
Host: baas.globalairportconcierge.com
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

fetch('http://baas.globalairportconcierge.com/v1/bookings',
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

result = RestClient.get 'http://baas.globalairportconcierge.com/v1/bookings',
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

r = requests.get('http://baas.globalairportconcierge.com/v1/bookings', headers = headers)

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
    $response = $client->request('GET','http://baas.globalairportconcierge.com/v1/bookings', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings");
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
    req, err := http.NewRequest("GET", "http://baas.globalairportconcierge.com/v1/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings`

*/bookings*

GET a list of bookings and quotations

<h3 id="get-bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|reference_id|query|string|false|booking referece id|
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
      "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "Quote",
      "expires_on": "2019-08-24T14:15:22Z",
      "journeys": [
        {
          "flight": "BA281",
          "pax": {
            "meta": {
              "adult": 2,
              "child": 1,
              "infant": 0,
              "bags": {
                "small": 5,
                "medium": 5,
                "large": 5
              }
            },
            "passengers": {
              "adult": [
                {
                  "lead": true,
                  "pnr": "SJE34D",
                  "class": "First",
                  "details": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "type": "Adult",
                    "name": "[Object]",
                    "contacts": "[Object]",
                    "date_of_birth": "1989-02-14",
                    "passport_no": "N32343423",
                    "comments": "First time traveller.",
                    "signage": "John Doe"
                  }
                }
              ],
              "child": [
                {
                  "lead": true,
                  "pnr": "SJE34D",
                  "class": "First",
                  "details": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "type": "Adult",
                    "name": "[Object]",
                    "contacts": "[Object]",
                    "date_of_birth": "1989-02-14",
                    "passport_no": "N32343423",
                    "comments": "First time traveller.",
                    "signage": "John Doe"
                  }
                }
              ],
              "infant": [
                {
                  "lead": true,
                  "pnr": "SJE34D",
                  "class": "First",
                  "details": {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "type": "Adult",
                    "name": "[Object]",
                    "contacts": "[Object]",
                    "date_of_birth": "1989-02-14",
                    "passport_no": "N32343423",
                    "comments": "First time traveller.",
                    "signage": "John Doe"
                  }
                }
              ]
            }
          },
          "stops": {
            "departure": {
              "connection": true,
              "meeting_date": "2020-10-10T18:13:00.000Z",
              "departure_date": "2020-10-10T20:13:00.000Z",
              "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "terminal_name": "LHR Terminal 2",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "iata": "LHR",
                "icao": "EGLL",
                "name": "LHR London Heathrow Airport",
                "city": "London",
                "country": "United Kingdom"
              },
              "contact_point": {
                "name": "John",
                "contact": "+18666612345"
              },
              "special_notes": "Need translator",
              "additional_hour_charge": "100.00",
              "surcharge": "200.00",
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "service_name": "Meet & Assist",
                  "rate": "200.00",
                  "fields": [
                    "[Object]"
                  ]
                }
              ],
              "location_total": {
                "value": "200.00",
                "currency": "USD"
              }
            },
            "arrival": {
              "connection": true,
              "meeting_date": "2020-10-10T18:13:00.000Z",
              "date": "2020-10-10T18:13:00.000Z",
              "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "terminal_name": "LHR Terminal 2",
              "airport": {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "iata": "LHR",
                "icao": "EGLL",
                "name": "LHR London Heathrow Airport",
                "city": "London",
                "country": "United Kingdom"
              },
              "contact_point": {
                "name": "John",
                "contact": "+18666612345"
              },
              "special_notes": "Need translator",
              "additional_hour_charge": "100.00",
              "surcharge": "200.00",
              "services": [
                {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "service_name": "Meet & Assist",
                  "rate": "200.00",
                  "fields": [
                    "[Object]"
                  ]
                }
              ],
              "location_total": {
                "value": "200.00",
                "currency": "USD"
              }
            }
          }
        }
      ],
      "billing": {
        "currency": "USD",
        "total_service_cost": "336.38",
        "add_hrs_charge": "0.00",
        "surcharge": "0.00",
        "total_booking_cost": "336.38",
        "promo_code": "PROMO21",
        "total_discount": "33.63",
        "grand_total": "302.75",
        "total_paid": "302.75"
      },
      "comments": "First Time Traveller"
    }
  ]
}
```

<h3 id="get-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-bookings-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## POST-bookings

<a id="opIdPOST-bookings"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://baas.globalairportconcierge.com/v1/bookings \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
POST http://baas.globalairportconcierge.com/v1/bookings HTTP/1.1
Host: baas.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const inputBody = '{
  "comments": "First Time Traveller",
  "currency": "USD",
  "promo_code": "PROMO21",
  "journeys": [
    {
      "flight": "BA282",
      "pax": {
        "meta": {
          "adult": 2,
          "child": 1,
          "infant": 1,
          "bags": {
            "small": 5,
            "medium": 5,
            "large": 5
          }
        },
        "passengers": {
          "adult": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "child": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "infant": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ]
        }
      },
      "stops": {
        "departure": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "departure_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        },
        "arrival": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "arrival_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://baas.globalairportconcierge.com/v1/bookings',
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

result = RestClient.post 'http://baas.globalairportconcierge.com/v1/bookings',
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

r = requests.post('http://baas.globalairportconcierge.com/v1/bookings', headers = headers)

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
    $response = $client->request('POST','http://baas.globalairportconcierge.com/v1/bookings', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings");
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
    req, err := http.NewRequest("POST", "http://baas.globalairportconcierge.com/v1/bookings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bookings`

*/bookings*

Create a quotation

> Body parameter

```json
{
  "comments": "First Time Traveller",
  "currency": "USD",
  "promo_code": "PROMO21",
  "journeys": [
    {
      "flight": "BA282",
      "pax": {
        "meta": {
          "adult": 2,
          "child": 1,
          "infant": 1,
          "bags": {
            "small": 5,
            "medium": 5,
            "large": 5
          }
        },
        "passengers": {
          "adult": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "child": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "infant": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ]
        }
      },
      "stops": {
        "departure": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "departure_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        },
        "arrival": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "arrival_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
```

<h3 id="post-bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|body|body|object|false|booking request body|
|» *anonymous*|body|object|false|none|
|»» comments|body|string|false|Special comments of the booking|
|»» currency|body|string|true|Currency of the booking|
|»» promo_code|body|string|false|Promocode for the booking|
|» *anonymous*|body|object|false|none|
|»» journeys|body|[object]|true|List of journeys in the booking|
|»»» flight|body|string|true|A flight number|
|»»» pax|body|object|true|Passenger object|
|»»»» meta|body|object|true|Pax meta data|
|»»»»» adult|body|integer|true|Number of Adult passengers|
|»»»»» child|body|integer|true|Number of Child passengers|
|»»»»» infant|body|integer|true|Number of Infant passengers|
|»»»»» bags|body|object|true|Number of bags|
|»»»»»» small|body|integer|true|Number of small bags|
|»»»»»» medium|body|integer|true|Number of medium bags|
|»»»»»» large|body|integer|true|mNumber of large bags|
|»»»» passengers|body|object|true|Passenger details|
|»»»»» adult|body|[object]|false|Adult passengers' information|
|»»»»»» passenger.v1|body|object|false|Passenger model|
|»»»»»»» lead|body|boolean|true|Is lead passenger|
|»»»»»»» pnr|body|string|true|Passenger PNR|
|»»»»»»» class|body|string|true|Passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|Title|
|»»»»»»»»» forename|body|string|true|Forname|
|»»»»»»»»» surname|body|string|true|Surname|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|Address streets|
|»»»»»»»»»» city|body|string|false|City|
|»»»»»»»»»» state|body|string|false|State|
|»»»»»»»»»» postal_code|body|string|false|Postal/zip Code|
|»»»»»»»»»» country|body|string|false|Country|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|Email type|
|»»»»»»»»»» email|body|string(email)|false|Email|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|Type of phone|
|»»»»»»»»»» name|body|string|false|Contact nme of the phone|
|»»»»»»»»»» phone|body|string|false|Phone number|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»»»» child|body|[object]|false|Child passengers' information|
|»»»»»» passenger.v1|body|object|false|passenger model|
|»»»»»»» lead|body|boolean|true|is lead passenger|
|»»»»»»» pnr|body|string|true|passenger PNR|
|»»»»»»» class|body|string|true|passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|Tilte|
|»»»»»»»»» forename|body|string|true|Forname|
|»»»»»»»»» surname|body|string|true|Surname|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|Address streets|
|»»»»»»»»»» city|body|string|false|City|
|»»»»»»»»»» state|body|string|false|State|
|»»»»»»»»»» postal_code|body|string|false|Postal/Zip Code|
|»»»»»»»»»» country|body|string|false|Country|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|Type of email|
|»»»»»»»»»» email|body|string(email)|false|Email|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|Type of phone|
|»»»»»»»»»» name|body|string|false|Contact person of the phone|
|»»»»»»»»»» phone|body|string|false|Phone number|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»»»» infant|body|[object]|false|Infant passengers' information|
|»»»»»» passenger.v1|body|object|false|passenger model|
|»»»»»»» lead|body|boolean|true|is lead passenger|
|»»»»»»» pnr|body|string|true|passenger PNR|
|»»»»»»» class|body|string|true|passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|Title|
|»»»»»»»»» forename|body|string|true|Forname|
|»»»»»»»»» surname|body|string|true|Surname|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|Address streets|
|»»»»»»»»»» city|body|string|false|City|
|»»»»»»»»»» state|body|string|false|State|
|»»»»»»»»»» postal_code|body|string|false|Postal/Zip Code|
|»»»»»»»»»» country|body|string|false|Country|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|Type of email|
|»»»»»»»»»» email|body|string(email)|false|Email|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|Type of phone|
|»»»»»»»»»» name|body|string|false|Contact person of the phone|
|»»»»»»»»»» phone|body|string|false|Phone number|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»» stops|body|object|true|stops object|
|»»»» departure|body|object|true|Departure location informaion|
|»»»»» connection|body|boolean|true|If it is a connection location (should combine and match with previous flight arrival location)|
|»»»»» meeting_date|body|string(date-time)|true|Departure meeting date. Will differ as meeting time is prior flight departure time. Ex: If the departure date of a flight is 21st at 00:10hrs, the meeting date will be 20th at 10:10hrs.|
|»»»»» departure_date|body|string(date-time)|true|Flight departure date|
|»»»»» terminal_id|body|string(uuid)|true|Terminal id|
|»»»»» contact_point|body|object|true|Contact point at ground during the operation. Could be passenger's or driver/PA contact.|
|»»»»»» name|body|string|true|Name of the contact person|
|»»»»»» contact|body|string|true|Contact number of the contact point|
|»»»»» special_notes|body|string|true|Special notes or instructions regarding the passengers during the operation (Ex: Need Hindi speaking greeter)|
|»»»»» services|body|[allOf]|true|Services to be quoted at departing location|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» id|body|string(uuid)|true|Service id|
|»»»»»» *anonymous*|body|object|false|service field request model|
|»»»»»»» fields|body|[object]|true|Fields of the service|
|»»»»»»»» name|body|string|true|Field name|
|»»»»»»»» value|body|string|true|Field value|
|»»»» arrival|body|object|true|Arrival location informaion|
|»»»»» connection|body|boolean|true|If it is a connection location (should combine and match with next flight departure location)|
|»»»»» meeting_date|body|string(date-time)|true|Meeting date. (Should be same as the flight's arrival time)|
|»»»»» arrival_date|body|string(date-time)|true|Flight arrival date|
|»»»»» terminal_id|body|string(uuid)|true|Terminal id|
|»»»»» contact_point|body|object|true|Contact point at ground during the operation. Could be passenger's or driver/PA contact.|
|»»»»»» name|body|string|true|Name of the contact person|
|»»»»»» contact|body|string|true|Contact number of the contact point|
|»»»»» special_notes|body|string|true|Special notes or instructions regarding the passengers during the operation (Ex: Need Hindi speaking greeter)|
|»»»»» services|body|[allOf]|true|Services to be quoted at arrival location|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» id|body|string(uuid)|true|Service id|
|»»»»»» *anonymous*|body|object|false|service field request model|
|»»»»»»» fields|body|[object]|true|Fields of the service|
|»»»»»»»» name|body|string|true|Field name|
|»»»»»»»» value|body|string|true|Field value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» currency|USD|
|»» currency|GBP|
|»» currency|EUR|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|

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
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "Quote",
    "expires_on": "2019-08-24T14:15:22Z",
    "journeys": [
      {
        "flight": "BA281",
        "pax": {
          "meta": {
            "adult": 2,
            "child": 1,
            "infant": 0,
            "bags": {
              "small": 5,
              "medium": 5,
              "large": 5
            }
          },
          "passengers": {
            "adult": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "child": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "infant": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ]
          }
        },
        "stops": {
          "departure": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "departure_date": "2020-10-10T20:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          },
          "arrival": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "date": "2020-10-10T18:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          }
        }
      }
    ],
    "billing": {
      "currency": "USD",
      "total_service_cost": "336.38",
      "add_hrs_charge": "0.00",
      "surcharge": "0.00",
      "total_booking_cost": "336.38",
      "promo_code": "PROMO21",
      "total_discount": "33.63",
      "grand_total": "302.75",
      "total_paid": "302.75"
    },
    "comments": "First Time Traveller"
  }
}
```

<h3 id="post-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="post-bookings-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## GET-bookings-id

<a id="opIdGET-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://baas.globalairportconcierge.com/v1/bookings/{id} \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://baas.globalairportconcierge.com/v1/bookings/{id} HTTP/1.1
Host: baas.globalairportconcierge.com
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

fetch('http://baas.globalairportconcierge.com/v1/bookings/{id}',
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

result = RestClient.get 'http://baas.globalairportconcierge.com/v1/bookings/{id}',
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

r = requests.get('http://baas.globalairportconcierge.com/v1/bookings/{id}', headers = headers)

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
    $response = $client->request('GET','http://baas.globalairportconcierge.com/v1/bookings/{id}', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings/{id}");
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
    req, err := http.NewRequest("GET", "http://baas.globalairportconcierge.com/v1/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /bookings/{id}`

*/bookings/{id}*

GET a booking or a quotation by id

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
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "Quote",
    "expires_on": "2019-08-24T14:15:22Z",
    "journeys": [
      {
        "flight": "BA281",
        "pax": {
          "meta": {
            "adult": 2,
            "child": 1,
            "infant": 0,
            "bags": {
              "small": 5,
              "medium": 5,
              "large": 5
            }
          },
          "passengers": {
            "adult": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "child": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "infant": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ]
          }
        },
        "stops": {
          "departure": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "departure_date": "2020-10-10T20:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          },
          "arrival": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "date": "2020-10-10T18:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          }
        }
      }
    ],
    "billing": {
      "currency": "USD",
      "total_service_cost": "336.38",
      "add_hrs_charge": "0.00",
      "surcharge": "0.00",
      "total_booking_cost": "336.38",
      "promo_code": "PROMO21",
      "total_discount": "33.63",
      "grand_total": "302.75",
      "total_paid": "302.75"
    },
    "comments": "First Time Traveller"
  }
}
```

<h3 id="get-bookings-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-bookings-id-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## PUT-bookings-id

<a id="opIdPUT-bookings-id"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://baas.globalairportconcierge.com/v1/bookings/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://baas.globalairportconcierge.com/v1/bookings/{id} HTTP/1.1
Host: baas.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const inputBody = '{
  "comments": "First Time Traveller",
  "currency": "USD",
  "promo_code": "PROMO21",
  "journeys": [
    {
      "flight": "BA282",
      "pax": {
        "meta": {
          "adult": 2,
          "child": 1,
          "infant": 1,
          "bags": {
            "small": 5,
            "medium": 5,
            "large": 5
          }
        },
        "passengers": {
          "adult": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "child": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "infant": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ]
        }
      },
      "stops": {
        "departure": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "departure_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        },
        "arrival": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "arrival_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://baas.globalairportconcierge.com/v1/bookings/{id}',
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

result = RestClient.put 'http://baas.globalairportconcierge.com/v1/bookings/{id}',
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

r = requests.put('http://baas.globalairportconcierge.com/v1/bookings/{id}', headers = headers)

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
    $response = $client->request('PUT','http://baas.globalairportconcierge.com/v1/bookings/{id}', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings/{id}");
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
    req, err := http.NewRequest("PUT", "http://baas.globalairportconcierge.com/v1/bookings/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /bookings/{id}`

*/bookings/{id}*

Update a quotation

> Body parameter

```json
{
  "comments": "First Time Traveller",
  "currency": "USD",
  "promo_code": "PROMO21",
  "journeys": [
    {
      "flight": "BA282",
      "pax": {
        "meta": {
          "adult": 2,
          "child": 1,
          "infant": 1,
          "bags": {
            "small": 5,
            "medium": 5,
            "large": 5
          }
        },
        "passengers": {
          "adult": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "child": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ],
          "infant": [
            {
              "lead": true,
              "pnr": "SJE34D",
              "class": "First",
              "details": {
                "type": "Adult",
                "name": {
                  "title": "Mr.",
                  "forename": "John",
                  "surname": "Doe"
                },
                "contacts": {
                  "address": {
                    "streets": "[Object]",
                    "city": "Hethrow",
                    "state": "London",
                    "postal_code": "LN223 2323",
                    "country": "United Kingdom"
                  },
                  "emails": [
                    "[Object]"
                  ],
                  "phones": [
                    "[Object]"
                  ]
                },
                "date_of_birth": "1989-02-14",
                "passport_no": "N32343423",
                "comments": "First time traveller.",
                "signage": "John Doe"
              }
            }
          ]
        }
      },
      "stops": {
        "departure": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "departure_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        },
        "arrival": {
          "connection": true,
          "meeting_date": "2020-10-10T18:13:00.000Z",
          "arrival_date": "2020-10-10T20:13:00.000Z",
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact_point": {
            "name": "John",
            "contact": "+18666612345"
          },
          "special_notes": "Need translator",
          "services": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "fields": [
                {
                  "name": "pax_count",
                  "value": "1"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
```

<h3 id="put-bookings-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|body|body|object|false|update booking request body|
|» *anonymous*|body|object|false|none|
|»» comments|body|string|false|Special comments of the booking|
|»» currency|body|string|true|currency of the booking|
|»» promo_code|body|string|false|promocode for the booking|
|» *anonymous*|body|object|false|none|
|»» journeys|body|[object]|true|list of journeys in the booking|
|»»» flight|body|string|true|a flight number|
|»»» pax|body|object|true|passenger object|
|»»»» meta|body|object|true|none|
|»»»»» adult|body|integer|true|none|
|»»»»» child|body|integer|true|none|
|»»»»» infant|body|integer|true|none|
|»»»»» bags|body|object|true|none|
|»»»»»» small|body|integer|true|none|
|»»»»»» medium|body|integer|true|none|
|»»»»»» large|body|integer|true|none|
|»»»» passengers|body|object|true|none|
|»»»»» adult|body|[object]|false|none|
|»»»»»» passenger.v1|body|object|false|passenger model|
|»»»»»»» lead|body|boolean|true|is lead passenger|
|»»»»»»» pnr|body|string|true|passenger PNR|
|»»»»»»» class|body|string|true|passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|none|
|»»»»»»»»» forename|body|string|true|none|
|»»»»»»»»» surname|body|string|true|none|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|none|
|»»»»»»»»»» city|body|string|false|none|
|»»»»»»»»»» state|body|string|false|none|
|»»»»»»»»»» postal_code|body|string|false|none|
|»»»»»»»»»» country|body|string|false|none|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» email|body|string(email)|false|none|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» name|body|string|false|none|
|»»»»»»»»»» phone|body|string|false|none|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»»»» child|body|[object]|false|none|
|»»»»»» passenger.v1|body|object|false|passenger model|
|»»»»»»» lead|body|boolean|true|is lead passenger|
|»»»»»»» pnr|body|string|true|passenger PNR|
|»»»»»»» class|body|string|true|passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|none|
|»»»»»»»»» forename|body|string|true|none|
|»»»»»»»»» surname|body|string|true|none|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|none|
|»»»»»»»»»» city|body|string|false|none|
|»»»»»»»»»» state|body|string|false|none|
|»»»»»»»»»» postal_code|body|string|false|none|
|»»»»»»»»»» country|body|string|false|none|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» email|body|string(email)|false|none|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» name|body|string|false|none|
|»»»»»»»»»» phone|body|string|false|none|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»»»» infant|body|[object]|false|none|
|»»»»»» passenger.v1|body|object|false|passenger model|
|»»»»»»» lead|body|boolean|true|is lead passenger|
|»»»»»»» pnr|body|string|true|passenger PNR|
|»»»»»»» class|body|string|true|passenger class|
|»»»»»»» details|body|object|false|Passenger model|
|»»»»»»»» type|body|string|true|passenger type|
|»»»»»»»» name|body|object|true|Details of the passenger|
|»»»»»»»»» title|body|string|true|none|
|»»»»»»»»» forename|body|string|true|none|
|»»»»»»»»» surname|body|string|true|none|
|»»»»»»»» contacts|body|object|true|Contact model|
|»»»»»»»»» address|body|object|false|Addres information|
|»»»»»»»»»» streets|body|[string]|false|none|
|»»»»»»»»»» city|body|string|false|none|
|»»»»»»»»»» state|body|string|false|none|
|»»»»»»»»»» postal_code|body|string|false|none|
|»»»»»»»»»» country|body|string|false|none|
|»»»»»»»»» emails|body|[object]|false|Email information|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» email|body|string(email)|false|none|
|»»»»»»»»» phones|body|[object]|false|Phone numbers|
|»»»»»»»»»» type|body|string|false|none|
|»»»»»»»»»» name|body|string|false|none|
|»»»»»»»»»» phone|body|string|false|none|
|»»»»»»»» date_of_birth|body|string(date)|false|Date of birth of the passenger|
|»»»»»»»» passport_no|body|string|false|Passport number of the passenger|
|»»»»»»»» comments|body|string|false|Special comments of the passenger|
|»»»»»»»» signage|body|string|false|Signage of the passenger|
|»»» stops|body|object|true|stops object|
|»»»» departure|body|object|true|none|
|»»»»» connection|body|boolean|true|none|
|»»»»» meeting_date|body|string(date-time)|true|none|
|»»»»» departure_date|body|string(date-time)|true|flight departure date|
|»»»»» terminal_id|body|string(uuid)|true|none|
|»»»»» contact_point|body|object|true|none|
|»»»»»» name|body|string|true|none|
|»»»»»» contact|body|string|true|none|
|»»»»» special_notes|body|string|true|none|
|»»»»» services|body|[allOf]|true|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» id|body|string(uuid)|true|none|
|»»»»»» *anonymous*|body|object|false|service field request model|
|»»»»»»» fields|body|[object]|true|Fields of the service|
|»»»»»»»» name|body|string|true|none|
|»»»»»»»» value|body|string|true|none|
|»»»» arrival|body|object|true|none|
|»»»»» connection|body|boolean|true|none|
|»»»»» meeting_date|body|string(date-time)|true|none|
|»»»»» arrival_date|body|string(date-time)|true|flight arrival date|
|»»»»» terminal_id|body|string(uuid)|true|none|
|»»»»» contact_point|body|object|true|none|
|»»»»»» name|body|string|true|none|
|»»»»»» contact|body|string|true|none|
|»»»»» special_notes|body|string|true|none|
|»»»»» services|body|[allOf]|true|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» id|body|string(uuid)|true|none|
|»»»»»» *anonymous*|body|object|false|service field request model|
|»»»»»»» fields|body|[object]|true|Fields of the service|
|»»»»»»»» name|body|string|true|none|
|»»»»»»»» value|body|string|true|none|
|id|path|string|true|a booking id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»» currency|USD|
|»» currency|GBP|
|»» currency|EUR|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|
|»»»»»»»» type|Adult|
|»»»»»»»» type|Child|
|»»»»»»»» type|Infant|
|»»»»»»»»» title|Mr.|
|»»»»»»»»» title|Mrs.|
|»»»»»»»»» title|Ms.|
|»»»»»»»»» title|Dr.|
|»»»»»»»»» title|Mstr.|
|»»»»»»»»» title|Miss|
|»»»»»»»»» title|Mx.|
|»»»»»»»»» title|Prof.|
|»»»»»»»»» title|Rev.|
|»»»»»»»»» title|Sir|
|»»»»»»»»» title|Sister|
|»»»»»»»»» title|Team|

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
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "Quote",
    "expires_on": "2019-08-24T14:15:22Z",
    "journeys": [
      {
        "flight": "BA281",
        "pax": {
          "meta": {
            "adult": 2,
            "child": 1,
            "infant": 0,
            "bags": {
              "small": 5,
              "medium": 5,
              "large": 5
            }
          },
          "passengers": {
            "adult": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "child": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "infant": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ]
          }
        },
        "stops": {
          "departure": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "departure_date": "2020-10-10T20:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          },
          "arrival": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "date": "2020-10-10T18:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          }
        }
      }
    ],
    "billing": {
      "currency": "USD",
      "total_service_cost": "336.38",
      "add_hrs_charge": "0.00",
      "surcharge": "0.00",
      "total_booking_cost": "336.38",
      "promo_code": "PROMO21",
      "total_discount": "33.63",
      "grand_total": "302.75",
      "total_paid": "302.75"
    },
    "comments": "First Time Traveller"
  }
}
```

<h3 id="put-bookings-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="put-bookings-id-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## POST-bookings-bookingId-checkout

<a id="opIdPOST-bookings-bookingId-checkout"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
POST http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout HTTP/1.1
Host: baas.globalairportconcierge.com
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

fetch('http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout',
{
  method: 'POST',

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

result = RestClient.post 'http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout',
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

r = requests.post('http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout', headers = headers)

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
    $response = $client->request('POST','http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout");
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
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/checkout", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bookings/{bookingId}/checkout`

*/bookings/{bookingId}/checkout*

Save a quotation as a booking

<h3 id="post-bookings-bookingid-checkout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|bookingId|path|string|true|a booking id|

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
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "Quote",
    "expires_on": "2019-08-24T14:15:22Z",
    "journeys": [
      {
        "flight": "BA281",
        "pax": {
          "meta": {
            "adult": 2,
            "child": 1,
            "infant": 0,
            "bags": {
              "small": 5,
              "medium": 5,
              "large": 5
            }
          },
          "passengers": {
            "adult": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "child": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "infant": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ]
          }
        },
        "stops": {
          "departure": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "departure_date": "2020-10-10T20:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "USD"
            }
          },
          "arrival": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "date": "2020-10-10T18:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "USD"
            }
          }
        }
      }
    ],
    "billing": {
      "currency": "USD",
      "total_service_cost": "336.38",
      "add_hrs_charge": "0.00",
      "surcharge": "0.00",
      "total_booking_cost": "336.38",
      "promo_code": "PROMO21",
      "total_discount": "33.63",
      "grand_total": "302.75",
      "total_paid": "302.75"
    },
    "comments": "First Time Traveller"
  }
}
```

> Unprocessable Entity (WebDAV)

```json
{
  "error": {
    "code": 0,
    "message": "string",
    "moreInfo": "string",
    "errors": [
      {
        "code": "string",
        "message": "string",
        "description": "string"
      }
    ]
  },
  "trace": {
    "X-GAC-Trace-Id": "a949eea7-56d5-4864-a5e6-0f15b6897960",
    "X-Trace-Id": "56d9e9d0-08d6-481e-94e7-e2667423cf37",
    "Idempotency-Key": "687d997b-391e-4906-94c5-a24c2fc12ba0"
  }
}
```

<h3 id="post-bookings-bookingid-checkout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity (WebDAV)|Inline|

<h3 id="post-bookings-bookingid-checkout-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## PUT-bookings-bookingId-recalculate

<a id="opIdPUT-bookings-bookingId-recalculate"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
PUT http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate HTTP/1.1
Host: baas.globalairportconcierge.com
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

fetch('http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate',
{
  method: 'PUT',

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

result = RestClient.put 'http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate',
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

r = requests.put('http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate', headers = headers)

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
    $response = $client->request('PUT','http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate");
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
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://baas.globalairportconcierge.com/v1/bookings/{bookingId}/recalculate", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /bookings/{bookingId}/recalculate`

*/bookings/{bookingId}/recalculate*

Recalculate a quotation

<h3 id="put-bookings-bookingid-recalculate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|bookingId|path|string|true|a booking id|

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
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ref_no": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "Quote",
    "expires_on": "2019-08-24T14:15:22Z",
    "journeys": [
      {
        "flight": "BA281",
        "pax": {
          "meta": {
            "adult": 2,
            "child": 1,
            "infant": 0,
            "bags": {
              "small": 5,
              "medium": 5,
              "large": 5
            }
          },
          "passengers": {
            "adult": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "child": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ],
            "infant": [
              {
                "lead": true,
                "pnr": "SJE34D",
                "class": "First",
                "details": {
                  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "type": "Adult",
                  "name": {
                    "title": "Mr.",
                    "forename": "John",
                    "surname": "Doe"
                  },
                  "contacts": {
                    "address": "[Object]",
                    "emails": "[Object]",
                    "phones": "[Object]"
                  },
                  "date_of_birth": "1989-02-14",
                  "passport_no": "N32343423",
                  "comments": "First time traveller.",
                  "signage": "John Doe"
                }
              }
            ]
          }
        },
        "stops": {
          "departure": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "departure_date": "2020-10-10T20:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          },
          "arrival": {
            "connection": true,
            "meeting_date": "2020-10-10T18:13:00.000Z",
            "date": "2020-10-10T18:13:00.000Z",
            "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "terminal_name": "LHR Terminal 2",
            "airport": {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "iata": "LHR",
              "icao": "EGLL",
              "name": "LHR London Heathrow Airport",
              "city": "London",
              "country": "United Kingdom"
            },
            "contact_point": {
              "name": "John",
              "contact": "+18666612345"
            },
            "special_notes": "Need translator",
            "additional_hour_charge": "100.00",
            "surcharge": "200.00",
            "services": [
              {
                "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "service_name": "Meet & Assist",
                "rate": "200.00",
                "fields": [
                  {
                    "name": "pax_count",
                    "value": "1"
                  }
                ]
              }
            ],
            "location_total": {
              "value": "200.00",
              "currency": "string"
            }
          }
        }
      }
    ],
    "billing": {
      "currency": "USD",
      "total_service_cost": "336.38",
      "add_hrs_charge": "0.00",
      "surcharge": "0.00",
      "total_booking_cost": "336.38",
      "promo_code": "PROMO21",
      "total_discount": "33.63",
      "grand_total": "302.75",
      "total_paid": "302.75"
    },
    "comments": "First Time Traveller"
  }
}
```

<h3 id="put-bookings-bookingid-recalculate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|

<h3 id="put-bookings-bookingid-recalculate-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|type|Adult|
|type|Child|
|type|Infant|
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
|currency|USD|
|currency|GBP|
|currency|EUR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## DELETE-bookings-bookingId-cancel

<a id="opIdDELETE-bookings-bookingId-cancel"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
DELETE http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel HTTP/1.1
Host: baas.globalairportconcierge.com
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

fetch('http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel',
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

result = RestClient.delete 'http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel',
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

r = requests.delete('http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel', headers = headers)

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
    $response = $client->request('DELETE','http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel");
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
    req, err := http.NewRequest("DELETE", "http://baas.globalairportconcierge.com/v1/bookings/{id}/cancel", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /bookings/{id}/cancel`

*/bookings/{id}/cancel*

Cancel a booking

<h3 id="delete-bookings-bookingid-cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|id|path|string|true|booking id|

> Example responses

> No Content

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

<h3 id="delete-bookings-bookingid-cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|Inline|

<h3 id="delete-bookings-bookingid-cancel-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="gac-api-v1-services">Services</h1>

## get-services

<a id="opIdget-services"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://baas.globalairportconcierge.com/v1/services \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Encoding: gzip' \
  -H 'apiKey: API_KEY'

```

```http
GET http://baas.globalairportconcierge.com/v1/services HTTP/1.1
Host: baas.globalairportconcierge.com
Content-Type: application/json
Accept: application/json
X-Trace-Id: 1061b7fe-e742-47e2-a41c-1f8cb3c58d9f
Content-Type: application/json
Accept-Encoding: gzip

```

```javascript
const inputBody = '{
  "flights": [
    {
      "arrival_airport": {
        "icao": "EGLL",
        "gac": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "departure_airport": {
        "icao": "EGLL",
        "gac": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "iata": "EWR"
      },
      "flight_no": "UA452",
      "departure_date": "2019-08-24T14:15:22Z"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Trace-Id':'1061b7fe-e742-47e2-a41c-1f8cb3c58d9f',
  'Content-Type':'application/json',
  'Accept-Encoding':'gzip',
  'apiKey':'API_KEY'
};

fetch('http://baas.globalairportconcierge.com/v1/services',
{
  method: 'GET',
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

result = RestClient.get 'http://baas.globalairportconcierge.com/v1/services',
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

r = requests.get('http://baas.globalairportconcierge.com/v1/services', headers = headers)

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
    $response = $client->request('GET','http://baas.globalairportconcierge.com/v1/services', array(
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
URL obj = new URL("http://baas.globalairportconcierge.com/v1/services");
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
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Trace-Id": []string{"1061b7fe-e742-47e2-a41c-1f8cb3c58d9f"},
        "Content-Type": []string{"application/json"},
        "Accept-Encoding": []string{"gzip"},
        "apiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://baas.globalairportconcierge.com/v1/services", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /services`

*/services*

GET services at departure and arival for a flight

> Body parameter

```json
{
  "flights": [
    {
      "arrival_airport": {
        "icao": "EGLL",
        "gac": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "departure_airport": {
        "icao": "EGLL",
        "gac": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "iata": "EWR"
      },
      "flight_no": "UA452",
      "departure_date": "2019-08-24T14:15:22Z"
    }
  ]
}
```

<h3 id="get-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Trace-Id|header|string|false|Please provide your UUID for tracing|
|Content-Type|header|string|true|application/json|
|Accept-Encoding|header|string|true|add a req. header for payload to be compressed by the server|
|body|body|object|false|get services request body|
|» flights|body|[object]|true|none|
|»» arrival_airport|body|object|true|none|
|»»» icao|body|string|false|Arrival Airport ICAO code|
|»»» gac|body|string(uuid)|false|Arrival Airport GAC ID|
|»» departure_airport|body|object|true|none|
|»»» icao|body|string|false|Departure Airport ICAO code|
|»»» gac|body|string(uuid)|false|Departure Airport GAC ID|
|»»» iata|body|string|false|none|
|»» flight_no|body|string|true|Flight number: Airline code "UA" + Flignt No. "452"|
|»» departure_date|body|string(date-time)|true|none|

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
      "iata": "LHR",
      "icao": "EGLL",
      "name": "LHR London Heahrow Airport",
      "country": "United Kingdom",
      "city": "London",
      "booking_window": 48,
      "terminals": [
        {
          "terminal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "terminal_name": "LHR Terminal 2",
          "services": [
            {
              "service_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "service_name": "Meet & Assist Service",
              "fields": [
                {
                  "type": "integer",
                  "name": "paxCount",
                  "label": "Pax Count",
                  "validation": [
                    "[Object]"
                  ]
                }
              ]
            }
          ]
        }
      ],
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

<h3 id="get-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h3 id="get-services-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|status|200|
|status|201|
|status|204|
|booking_window|6|
|booking_window|12|
|booking_window|24|
|booking_window|48|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_service">service</h2>

<a id="schemaservice"></a>
<a id="schema_service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "lead": true,
  "pnr": "SJE34D",
  "class": "First",
  "details": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "type": "Adult",
    "name": {
      "title": "Mr.",
      "forename": "John",
      "surname": "Doe"
    },
    "contacts": {
      "address": {
        "streets": null,
        "city": null,
        "state": null,
        "postal_code": null,
        "country": null
      },
      "emails": [
        {}
      ],
      "phones": [
        {}
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

```

/services Response Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lead|boolean|true|none|is lead passenger|
|pnr|string|true|none|passenger PNR|
|class|string|true|none|passenger class|
|details|object|false|none|Passenger model|
|» id|string(uuid)|true|none|Passenger object ID|
|» type|string|true|none|passenger type|
|» name|object|true|none|Personal information of the passenger|
|»» title|string|true|none|none|
|»» forename|string|true|none|none|
|»» surname|string|true|none|none|
|» contacts|object|true|none|Contact model|
|»» address|object|false|none|Addres information|
|»»» streets|[string]|false|none|none|
|»»» city|string|false|none|none|
|»»» state|string|false|none|none|
|»»» postal_code|string|false|none|none|
|»»» country|string|false|none|none|
|»» emails|[object]|false|none|Email information|
|»»» type|string|false|none|none|
|»»» email|string(email)|false|none|none|
|»» phones|[object]|false|none|Phone numbers|
|»»» type|string|false|none|none|
|»»» name|string|false|none|none|
|»»» phone|string|false|none|none|
|» date_of_birth|string(date)|false|none|Date of birth of the passenger|
|» passport_no|string|false|none|Passport number of the passenger|
|» comments|string|false|none|Special comments aboout the passenger|
|» signage|string|false|none|Signage of the passenger|
|» sig_image|string|false|none|Sge image|
|» image|string|false|none|Sge image|
|» pas_stat|boolean|false|none|Status of the passenger|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Adult|
|type|Child|
|type|Infant|
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

