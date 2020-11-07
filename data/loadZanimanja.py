import pandas

path = "nkd2007.xlsx"
nkd2007Df = pandas.read_excel(path)

path = "PravilnikPovlaštena.xlsx"
povlastenaDf = pandas.read_excel(path)

path = "PravilnikVezana.xlsx"
vezanaDf = pandas.read_excel(path)

print(nkd2007Df.head(10))
print(povlastenaDf.head(10))
print(vezanaDf.head(10))


nkd2007Df = nkd2007Df.dropna(subset=['Razred'])
del nkd2007Df["Po-druč-je"]
del nkd2007Df["Odje-ljak"]
del nkd2007Df["Sku-pina"]

def search_df_by_djelatnost_string(nkd_list, search_string):
    pass
