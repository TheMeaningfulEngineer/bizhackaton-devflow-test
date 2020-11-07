import pandas

mainPath = "D:\\preuzimanje\\Hackaton\\bizhackaton-devflow-test-main\\bizhackaton-devflow-test-main\\data\\"
path = mainPath + "nkd2007.xlsx"
nkd2007Df = pandas.read_excel(path)

path = mainPath + "PravilnikPovlaštena.xlsx"
povlastenaDf = pandas.read_excel(path)

path = mainPath + "PravilnikVezana.xlsx"
vezanaDf = pandas.read_excel(path)

#print(nkd2007Df.head(10))
#print(povlastenaDf.head(10))
#print(vezanaDf.head(10))


nkd2007Df = nkd2007Df.dropna(subset=['Razred'])
del nkd2007Df["Po-druč-je"]
del nkd2007Df["Odje-ljak"]
del nkd2007Df["Sku-pina"]

# Za dev potrebe samo da prikazuje dio
mali_nkd = nkd2007Df.iloc[400:420]


def search_df_by_djelatnost_string(nkd_list, search_string):
    regex = f".*{search_string}.*"
    match_series = nkd_list.Naziv.str.contains(regex, case=False)
    return nkd_list[match_series]

# Primjer
import json
resultDf = search_df_by_djelatnost_string(mali_nkd, "prij")
resultJson = resultDf.to_json(orient="records")
parsed = json.loads(resultJson)
print(json.dumps(parsed, indent=4))
