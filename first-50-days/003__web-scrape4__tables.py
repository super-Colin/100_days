# 12/13/2019
# Learning Python

import bs4 as bs
import urllib.request

source = urllib.request.urlopen('https://pythonprogramming.net/parsememcparseface/').read()
soup = bs.BeautifulSoup(source, 'lxml')


# table = soup.table
table = soup.find('table')
table_rows = table.find_all('tr')

# get and print all table data cells from a table
for tr in table_rows:
    td = tr.find_all('td')
    row = [i.text for i in td]
    print(row)

