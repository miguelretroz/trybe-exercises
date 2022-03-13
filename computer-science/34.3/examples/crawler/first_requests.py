import requests

response = requests.get("https://www.betrybe.com/")
print(response.status_code)
print(response.headers["Content-Type"])

print(response.text)

print(response.content)

response = requests.post("https://httpbin.org/post", data="some content")
print(response.text)

response = requests.get(
    "http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

response = requests.get("http://httpbin.org/image/png")
print(response.content)

response = requests.get("http://httpbin.org/get")
print(response.json())

response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
