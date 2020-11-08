from flask import Flask
from flask import request
from flask_cors import CORS
import time
# from data import loadZanimanja

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# TODO: search_string mora doci kao poziv sa frontenda
# Treba modificirati endpoint tako da ima taj search string u svom scope-u
# @app.route('/activities', methods = ['POST'])
# def get_activities():
#     data = request.get_json(force=True)
#     print(request)
#     print(data)
#     return data
    # return {   
    # 1: {
    #     "sifra": "10.11",
    #     "ime": "Prerada i konzerviranje mesa",
    #     "vezanost": "vezana"
    # },
    # 2: {
    #     "sifra": "10.51.01",
    #     "ime": "Prerada mlijeka i proizvodnja sira",
    #     "vezanost": "vezana"
    # }}

@app.route('/activities', methods = ['GET'])
def get_activities():
    return {
    "djelatnosti": [
        {
            "sifra": "14.19",
            "ime": "Proizvodnja ostale odjeće i pribora za odjeću",
            "naziv_zanimanja": null,
            "potrebna_kvalifikacija": null,
            "vezanost": "slobodan",
            "objasnjenje": "Ovaj razred uključuje:\n-proizvodnju odjeće za dojenčad i malu djecu, trenirki, skijaške odjeće, kupaćih kostima itd.\n- proizvodnju šešira i kapa\n- proizvodnju ostalog pribora za odjeću: rukavica, remenja, šalova, kravata, mrežica za kosu itd.\nOvaj razred također uključuje:\n- proizvodnju krznenih pokrivala za glavu\n- proizvodnju obuće od tekstilnog materijala bez pričvršćenih potpetica\n- proizvodnju dijelova za gore spomenute proizvode\nOvaj razred isključuje:\n- proizvodnju sportskih pokrivala za glavu, vidi 32.30\n- proizvodnju sigurnosnih pokrivala za glavu (osim sportskih pokrivala), vidi 32.99\n- proizvodnju protupožarne i zaštitne sigurnosne odjeće, vidi 32.99\n- popravak odjevnih predmeta, vidi 95.29",
            "linkovi":{
                "ODLUKA O DONOŠENJU STANDARDA ZANIMANJA ZA STJECANJE KVALIFIKACIJE MODNI TEHNIČAR U OBRAZOVNOM SEKTORU TEKSTIL I KOŽA": "http://www.propisi.hr/print.php?id=14769",
                "O odjelu za prerađivačku industriju": "https://www.hgk.hr/s-industriju/o-odjelu-za-preradivacku-industriju",
                "Vodič za poslovanje u obrtu": "https://plaviured.hr/wp-content/uploads/2015/05/Vodic-za-poslovanje-u-obrtu1.pdf"
            }
        },
        {
            "sifra": "14.19.01",
            "ime": "Proizvodnja šešira i kapa",
            "naziv_zanimanja": "Klobučar",
            "potrebna_kvalifikacija": "srednja stručna sprema u trogodišnjem trajanju",
            "vezanost": "vezana",
            "objasnjenje": "isto kao za 14.19? jer 14.19.01 valjda spada pod 14.19",
            "linkovi":{
                "ODLUKA O DONOŠENJU STANDARDA ZANIMANJA ZA STJECANJE KVALIFIKACIJE MODNI TEHNIČAR U OBRAZOVNOM SEKTORU TEKSTIL I KOŽA": "http://www.propisi.hr/print.php?id=14769",
                "PROGRAM POMOĆNIČKOG ISPITA": "https://zakon.poslovna.hr/public/--klobucar/496895/zakoni.aspx",
                "PROGRAM MAJSTORSKOG ISPITA ZA ZVANJE MAJSTOR KLOBUČAR": "https://narodne-novine.nn.hr/clanci/sluzbeni/2004_01_5_153.html",
                "Vodič za poslovanje u obrtu": "https://plaviured.hr/wp-content/uploads/2015/05/Vodic-za-poslovanje-u-obrtu1.pdf"
            }
        },
        {
            "sifra": "14.19.02",
            "ime": "Proizvodnja – šivanje kaputa i jakni od krzna, po mjeri",
            "naziv_zanimanja": "Krznar",
            "potrebna_kvalifikacija": "majstorski ispit",
            "vezanost": "vezana",
            "objasnjenje": "isto kao za 14.19? jer 14.19.02 valjda spada pod 14.19",
            "linkovi":{
                "ODLUKA O DONOŠENJU STANDARDA ZANIMANJA ZA STJECANJE KVALIFIKACIJE MODNI TEHNIČAR U OBRAZOVNOM SEKTORU TEKSTIL I KOŽA": "http://www.propisi.hr/print.php?id=14769",
                "JEDINSTVENI NASTAVNI PLAN I OKVIRNI OBRAZOVNI PROGRAM ZA ZANIMANJE KRZNAR": "https://zakon.poslovna.hr/public/--krznar/366744/zakoni.aspx",
                "PROGRAM POMOĆNIČKOG ISPITA": "https://narodne-novine.nn.hr/clanci/sluzbeni/2010_01_12_244.html",
                "PRAVILNIK O SAMOSTALNIM DJELATNOSTIMA KOJE SE MOGU PAUŠALNO OPOREZIVATI TE NAČINU UTVRĐIVANJA I OPOREZIVANJA PAUŠALNOG DOHOTKA": "https://narodne-novine.nn.hr/clanci/sluzbeni/full/2003_05_90_1144.html",
                "Vodič za poslovanje u obrtu": "https://plaviured.hr/wp-content/uploads/2015/05/Vodic-za-poslovanje-u-obrtu1.pdf"
            }
        },
        {
            "sifra": "47.19",
            "ime": "Ostala trgovina na malo u nespecijaliziranim prodavaonicama",
            "naziv_zanimanja": null,
            "potrebna kvalifikacija": null,
            "vezanost": "slobodna",
            "objasnjenje": "Ovaj razred uključuje:\n– trgovinu na malo razvnovrsnom robom, u kojoj ne prevladavaju hrana, pića i duhanski proizvodi\n– djelatnosti robnih kuća koje se bave prodajom raznovrsne robe, uključujući odjeću, namještaj, aparate, željeznu robu, kozmetiku, nakit, igračke, sportsku opremu itd.",
            "linkovi":{
                "ZAKON O TRGOVINI": "https://narodne-novine.nn.hr/clanci/sluzbeni/2008_07_87_2790.html",
                "Minimalni tehnički uvjeti": "https://narodne-novine.nn.hr/clanci/sluzbeni/2009_06_66_1534.html"
            }
        },
        {
            "sifra": "03.11",
            "ime": "Morski ribolov",
            "naziv_zanimanja": "Morski ribar",
            "potrebna kvalifikacija": "stručna osposobljenost određena posebnim propisom",
            "vezanost": "povlaštena",
            "objasnjenje": "Ovaj razred uključuje:\n– ribolov na komercijalnoj osnovi u oceanima i obalnim vodama\n– ulov morskih rakova i školjaka\n– ulov kitova\n– ulov morskih vodenih životinja: morskih kornjača, mješičnica, mahovnjaka, morskih ježinaca, itd.\nOvaj razred također uključuje:\n– djelatnosti brodova koji se bave morskim ribolovom i preradom te konzerviranjem morske ribe\n– vađenje ostalih morskih organizama: prirodnih bisera, spužvi, koralja i algi\nOvaj razred isključuje:\n– ulov morskih sisavaca, osim kitova, npr. morževa, tuljana, vidi 01.70\n– preradu kitova na brodovima tvornicama, vidi 10.11\n– preradu ribe, rakova i školjaka na brodovima koji se bave preradom i konzerviranjem ribe ili u tvornicama na kopnu, vidi 10.20\n– iznajmljivanje čamaca za razonodu s posadom za prijevoz morem i priobaljem (npr. za ribolov), vidi 50.10\n– usluge nadzora, zaštite i ophodnje u vezi s ribolovom, vidi 84.24\n– sportsko-rekreativni ribolov i usluge povezane s njim, vidi 93.19\n– rad rezervata za sportski ribolov, vidi 93.19",
            "linkovi":{
                "Zakon o morskom ribarstvu": "https://www.zakon.hr/z/303/Zakon-o-morskom-ribarstvu",
                "PROGRAM ISPITA O STRUČNOJ OSPOSOBLJENOSTI": "https://zakon.poslovna.hr/public/program-ispita-o-strucnoj-osposobljenosti/10920/zakoni.aspx"
            }
        }  
    ]
}
    
    
    # {   
    # 1: {
    #     "sifra": "10.11",
    #     "ime": "Prerada i konzerviranje mesa",
    #     "vezanost": "vezana"
    # },
    # 2: {
    #     "sifra": "10.51.01",
    #     "ime": "Prerada mlijeka i proizvodnja sira",
    #     "vezanost": "slobodna"
    # },
    #  3: {
    #     "sifra": "34.51",
    #     "ime": "Uvezivanje knjiga",
    #     "vezanost": "povlaštena",
    #     "opis": "blablablabalablahjsahfdazfdtzasfduk",
    #     "kvalifikacije": "SSS"
    
    # },
    #  4: {
    #     "sifra": "51.01",
    #     "ime": "Izdavanje knjiga",
    #     "vezanost": "vezana",
    #     "opis" : "ukljucuje iskljucuje",
    #     "kvalifikacije": "VSS"
    # },
    #  5: {
    #     "sifra": "78.45",
    #     "ime": "Proizvodnja obuće",
    #     "vezanost": "slobodna"
    # },
    #  6: {
    #     "sifra": "10.01",
    #     "ime": "Prerada proizvoda od kože",
    #     "vezanost": "povlaštena"
    # },
    # }