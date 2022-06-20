import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(f"{URL_BASE}{next_page_url}")
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re_first(r"£\d+\.\d{2}")
        print(title, price)

        detail_href = product.css(".product_pod h3 a::attr(href)").get()
        detail_page_url = f"{URL_BASE}{detail_href}"

        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        detail_description = detail_selector.css(
            '#product_description ~ p::text').get()

        description_suffix = "...more"

        if detail_description.endswith(description_suffix):
            detail_description = detail_description[:-len(description_suffix)]
        print(detail_description)

    next_page_url = selector.css(".next a::attr(href)").get()
