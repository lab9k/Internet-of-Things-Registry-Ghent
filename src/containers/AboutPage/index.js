/* eslint-disable */
import React from 'react'
import logo from '../../icons/logo--cyan.svg'

export default function AboutPage() {
  return (

    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <img alt="logo stad gent" src={logo} />
        </div>
        <div className="col-8">
          <h1 className="pt-3">Slimme apparaten register</h1>
          <h4>
            Toegankelijke en transparante informatie voor burgers,
            bezoekers en ondernemers over alle smart city sensoren en hun data.
            Een open source basissysteem met alle nodige tools om te starten.
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-2" />
        <div className="col-8 mt-5">
          <h2>In 't kort</h2>
          <p>
            Slimme camera's, beacons, een zitbank of een vuilnisbak met een internetconnectie,
            laadpalen, straatverlichting uitgerust met sensoren, enz. Op openbare plaatsen
            in de stad vind je steeds meer Internet of Things (IoT) apparaten verschijnen. Als er
            op een dag in jouw buurt zo'n apparaat wordt geïnstalleerd, is het niet altijd even
            transparant en duidelijk waarom, of is de informatie over het apparaat niet altijd even
            toegankelijk. Terecht stel je je dan direct vragen. Daar biedt deze oplossing een
            antwoord op. De tool is gemaakt binnen het SCORE project. Dat wil onder andere zeggen
            dat de tool open source beschikbaar is en dat er vanaf de start rekening is gehouden met
            herbruikbaarheid tussen steden. Zo kan elke stad het platform gemakkelijk opzetten en
            eigen (open) databronnen en andere bronnen van informatie
            aansluiten. Tegelijk wil het ook bedrijven bewust maken van de beschikbaarbeid van
            plaatsgebonden
            open data in de stad.
          </p>
          <h2>Register van IOT apparaten</h2>
          <p>
            Het slimme apparaten register (IoT Registry) een van de open source tools die het Foresight team hielp ontwikkelen binnen het SCORE project (Smart Cities on Open data REuse). Dat deden we samen met de dienst Data & Informatie van Stad Gent en met de innovatieteams van enkele Europese partnersteden als Amsterdam, Aarhus, Gothenburg en Hamburg.
          </p>
          <p>
            IoT apparaten die in het straatbeeld, in parken of andere openbare plaatsen verschijnen zonder uitleg, brengen ons in de war. De aanwezigheid van slimme apparaten in buurten verhoogt onzekerheid en leidt tot negatieve gevoelens, bvb. het gevoel van onder toezicht te staan en voortdurend gecontroleerd te worden. Het werpt enkele eenvoudige vragen op die vaak onbeantwoord blijven, of waarbij de antwoorden niet erg toegankelijk zijn. Bijvoorbeeld:
          </p>
          <ul>
            <li>Wat is het apparaat?</li>
            <li>Waarom hangt het hier?</li>
            <li>Welke data verzamelt het, wie is verantwoordelijk voor de verwerking ervan?</li>
            <li>Wie is de eigenaar van de data? Hoe lang wordt de data bewaard?</li>
            <li>Welk soort data verwerkt het?</li>
            <li>Slaat het data op of verzendt het data? Persoonlijke data, visuele data, video, foto's, ...?</li>
            <li>Kan die data misschien ook voor mij bruikbaar zijn, als burger, vereniging, bedrijf of stadsdienst?</li>
          </ul>
          <p>
            De GDPR wetgeving vereist dat steden een publiek "register" onderhouden over alle verwerkingen van persoonlijke data. Dergelijke registers focussen echter vooral op de (ontastbare, onzichtbare) processen van dataverwerking, bijvoorbeeld persoonlijke data die je in een online formulier achterlaat. Het slimme apparaten register bouwt hierop verder en heeft als focus de (tastbare, zichtbare) individuele slimme apparaten die je op publieke plaatsen terugvindt. Een verwerkingsregister alleen is namelijk niet voldoende om gemakkelijk te weten te komen of een slim apparaat al dan niet persoonlijke data verzamelt.
          </p>
          <h2>De oplossing</h2>
          <p>
            Het slimme apparaten register adresseert deze stedelijke uitdagingen en wil burgers, bezoekers, verenigingen, bedrijven en stadsdiensten zelf meer transparantie geven, door een online register aan te bieden met de locatie en gegevens van zoveel mogelijk Internet of Things-apparaten in de stad.
          </p>
          <p>
            De steden die er mee aan de slag gingen, gebruiken het ook als tussenschakel naar andere bronnen van informatie hierover, bijvoorbeeld informatie voorzien door hun eigenaars over een specifiek smart city project, informatie door de projecten-diensten-bedrijven die de apparaten plaatsen, of informatie over de "ketting" van dataverwerkingen waarbij je te weten komt door welke systemen van welke partijen de data vloeit.
          </p>
          <h2>Amsterdam naar Gent</h2>
          <p>
            De eerste versie van het slimme apparaten register is ontwikkeld in Amsterdam.
            Je vind een screenshot hieronder en je kan het ook
            {' '}
            <a href="https://slimmeapparaten.amsterdam.nl/">online raadplegen</a>. 
            Je vindt er de locatie van camera's, camera toezichtsgebieden, sensoren,
            beacons en slimme verkeersinformatie in Amsterdam.
          </p>
          <img alt="iot van antwerpen" className="img-fluid mt-4 mb-4" src="https://static.wixstatic.com/media/8ab344_9ff02fcfc27a4c57bd51c4b1d6fac717~mv2.png/v1/fill/w_688,h_524,al_c,q_90,usm_0.66_1.00_0.01/IOTRegistryAmsterdam.webp" />
          <p>
            Zowel de steden Gent als Aarhus (Denemarken) werkten aan een zogenaamde "replicatie" van de programmeercode hiervan op basis van de software die Amsterdam open source deelt. Dit wil zeggen dat deze steden dezelfde tool in de eigen stad opzetten. Daarvoor was een eerste stap nodig: het verder generiek maken van de software die in Amsterdam was ontwikkeld. De software moest worden klaargemaakt om het project te kunnen herhalen in andere steden. Over dit traject lees je alles in het <a href="https://8ab344e0-bce9-44b0-b7e7-fbc2f2ef4a0e.usrfiles.com/ugd/8ab344_3afdd5a07b4e46058557e321a69c938a.pdf">verslag van de SCORE Developer Sprint</a> dat we samen met de collega's in Amsterdam maakten. In de zomer van 2019 werkten twee Foresight teamleden gedurende enkele dagen hieraan mee.
          </p>
          <h3>Meer informatie</h3>
          <ul>
            <li>Periode: 2018-2022</li>
            <li>Status: Bezig</li>
            <li>Subsidiecall: Project medegefinancierd door het Europees Fonds voor Regionale Ontwikkeling (EFRO) via het Interreg Noordzeeregio-programma</li>
            <li>Partners:</li>
            <ul>
              <li>Steden: Amsterdam, Aarhus, Aberdeen, Bergen, Bradford, Dordrecht, Gent, Göteborg, Hamburg</li>
              <li>Onderzoekscentra: Amsterdam Data Science, Johanneberg Science Park, Universiteit van Aarhus, University of Bradford</li>
              <li>Technologische partners: Digipolis</li>
            </ul>
            <li>Meer info:</li>
            <ul>
              <li><a href="https://foresight.gent/score">Meer informatie over SCORE</a> (Nederlands)</li>
              <li><a href="https://northsearegion.eu/score">Project website SCORE</a> (English)</li>
            </ul>
          </ul>
          <div className="row">
            <div className="col">
              <img alt="score" className="img-fluid" src="https://northsearegion.eu/media/5193/score-02a-colour.png" />
            </div>
            <div className="col">
              <p>
                <i>
                  SCORE is a project co-funded by the Interreg North Sea Region Programme 2014-2020.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
