import pandas


#mainPath = "D:\\preuzimanje\\Hackaton\\bizhackaton-devflow-test-main\\bizhackaton-devflow-test-main\\data\\"
mainPath = ""

path = mainPath + "nkd2007.xlsx"
nkd2007Df = pandas.read_excel(path)

path = mainPath + "PravilnikPovlaštena.xlsx"
povlastenaDf = pandas.read_excel(path)

path = mainPath + "PravilnikVezana.xlsx"
vezanaDf = pandas.read_excel(path)


nkd2007Df = nkd2007Df.dropna(subset=['Razred'])
del nkd2007Df["Po-druč-je"]
del nkd2007Df["Odje-ljak"]
del nkd2007Df["Sku-pina"]

# Za dev potrebe samo da prikazuje dio
# vise ne koristimo mali_nkd, vidi return funkcije fetch_nkd
#mali_nkd = nkd2007Df.iloc[400:420]



def df_to_json(nkd_list, search_string):

    def search_df_by_djelatnost_string(nkd_list, search_string):
        '''Parameter nkd_list : DataFrame
           Returns DataFrame'''
        regex = f".*{search_string}.*"
        match_series = nkd_list.Naziv.str.contains(regex, case=False)
        return nkd_list[match_series]

    resultDf = search_df_by_djelatnost_string(nkd_list, search_string)
    resultJson = resultDf.to_json(orient="records")
    return resultJson


def fetch_nkd():
    # funkcija mijenja globalnu varijablu nkd koja mijenja bazu; 
    # kasnije sve to zamijeniti bazom
    # Vraca nkd dataframe koji se parsira ga svaki put. Boze moj :)
    return nkd2007Df #vratio puni nkd, a ne mali_nkd
    



# Testiranje
#import json
#resultJson = df_to_json(mali_nkd, "prij")
#parsed = json.loads(resultJson)
#print(json.dumps(parsed, indent=4))
