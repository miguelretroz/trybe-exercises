import csv

with open("balneabilidade.csv", "r") as file:
    beach_status_reader = csv.DictReader(file, delimiter=",", quotechar="\"")
    bathing_by_campaign = {}
    for row in beach_status_reader:
        campaign = row["numero_boletim"]
        bathing = row["categoria"]
        if campaign not in bathing_by_campaign:
            bathing_by_campaign[campaign] = {
                "Própria": 0,
                "Imprópria": 0,
                "Muito Boa": 0,
                "Indisponível": 0,
                "Satisfatória": 0,
            }
        bathing_by_campaign[campaign][bathing] += 1

with open("report_por_campanha_dicionarios.csv", "w") as file:
    header = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]
    writer = csv.DictWriter(file, fieldnames=header)
    for campaign, bathing in bathing_by_campaign.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = {"campanha": campaign}
        # for name, value in bathing.items():
        #     row[name] = value
        row = {"Campanha": campaign, **bathing}
        writer.writerow(row)
