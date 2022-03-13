import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com")
selector = Selector(text=response.text)

title = selector.css(".product_pod h3 a::attr(title)").getall()

price = selector.css(
    ".product_pod .product_price .price_color::text").getall()

for product in selector.css('.product_pod'):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".product_price .price_color::text").get()
    print(title, price)
