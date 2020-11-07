import pandas

path = "D:\\preuzimanje\\Hackaton\\bizhackaton-devflow-test-main\\bizhackaton-devflow-test-main\\data\\nkd2007.xlsx"
nkd2007Df = pandas.read_excel (path)

path = "D:\\preuzimanje\\Hackaton\\bizhackaton-devflow-test-main\\bizhackaton-devflow-test-main\\data\\PravilnikPovlaštena.xlsx"
povlastenaDf = pandas.read_excel (path)

path = "D:\\preuzimanje\\Hackaton\\bizhackaton-devflow-test-main\\bizhackaton-devflow-test-main\\data\\PravilnikVezana.xlsx"
vezanaDf = pandas.read_excel (path)

print(nkd2007Df.head(10))
print(povlastenaDf.head(10))
print(vezanaDf.head(10))