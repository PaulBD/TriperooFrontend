import React from "react";

export default class WorldCities extends React.Component {
	render(){
	return (
<div className="container text-xs-center cityList">
          <h3>Cities Around The World</h3>
          <hr />
          <div className="gap gap-small"></div>
          <div className="col-md-4 left">
            <h4>Afica</h4>
            <ul>
              <li><a href="/place/africa/cape-town">Cape Town</a></li>
              <li><a href="/place/africa/cairo">Cairo</a></li>
              <li><a href="/place/africa/casablanca">Casablanca</a></li>
              <li><a href="/place/africa/fes">Fes</a></li>
              <li><a href="/place/africa/johannesburg">Johannesburg</a></li>
              <li><a href="/place/africa/luxor">Luxor</a></li>
              <li><a href="/place/africa/marrakech">Marrakech</a></li>
              <li><a href="/place/africa/nairobi">Nairobi</a></li>
              <li><a href="/place/africa/sharm-el-sheikh">Sharm El Sheikh</a></li>
              <li><a href="/place/africa/tunis">Tunis</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>Asia</h4>
            <ul>
              <li><a href="/place/asia/bangkok">Bangkok</a></li>
              <li><a href="/place/asia/beijing">Beijing</a></li>
              <li><a href="/place/asia/hong-kong">Hong Kong</a></li>
              <li><a href="/place/asia/jakarta">Jakarta</a></li>
              <li><a href="/place/asia/kuala-lumpur">Kuala Lumpur</a></li>
              <li><a href="/place/asia/seoul">Seoul</a></li>
              <li><a href="/place/asia/singapore">Singapore</a></li>
              <li><a href="/place/asia/shanghai">Shanghai</a></li>
              <li><a href="/place/asia/taipei">Taipei</a></li>
              <li><a href="/place/asia/tokyo">Tokyo</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>Australia & Pacific Islands</h4>
            <ul>
              <li><a href="/place/australia-pacific-islands/adelaide">Adelaide</a></li>
              <li><a href="/place/australia-pacific-islands/auckland">Auckland</a></li>
              <li><a href="/place/australia-pacific-islands/bisbane">Brisbane</a></li>
              <li><a href="/place/australia-pacific-islands/christchurch">Christchurch</a></li>
              <li><a href="/place/australia-pacific-islands/melbourne">Melbourne</a></li>
              <li><a href="/place/australia-pacific-islands/perth">Perth</a></li>
              <li><a href="/place/australia-pacific-islands/queenstown">Queenstown</a></li>
              <li><a href="/place/australia-pacific-islands/rotorua">Rotorua</a></li>
              <li><a href="/place/australia-pacific-islands/sydney">Sydney</a></li>
              <li><a href="/place/australia-pacific-islands/wellington">Wellington</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>Canada</h4>
            <ul>
              <li><a href="/place/canada/calgary">Calgary</a></li>
              <li><a href="/place/canada/edmonton">Edmonton</a></li>
              <li><a href="/place/canada/lake-louise">Lake Louise</a></li>
              <li><a href="/place/canada/montreal">Montreal</a></li>
              <li><a href="/place/canada/ottawa">Ottawa</a></li>
              <li><a href="/place/canada/quebec">Quebec</a></li>
              <li><a href="/place/canada/toronto">Toronto</a></li>
              <li><a href="/place/canada/vancouver">Vancouver</a></li>
              <li><a href="/place/canada/victoria">Victoria</a></li>
              <li><a href="/place/canada/whistler">Whistler</a></li>
            </ul>
          </div>
          <div className="col-md-4 left">
            <h4>Carribean</h4>
            <ul>
              <li><a href="/place/carribean/frederiksted">Frederiksted</a></li>
              <li><a href="/place/carribean/charlotte-amalie">Charlotte Amalie</a></li>
              <li><a href="/place/carribean/chistiansted">Christiansted</a></li>
              <li><a href="/place/carribean/cruz-bay">Cruz Bay</a></li>
              <li><a href="/place/carribean/havana">Havana</a></li>
              <li><a href="/place/carribean/nassau">Nassau</a></li>
              <li><a href="/place/carribean/providenciales">Providenciales</a></li>
              <li><a href="/place/carribean/punta-cana">Punta Cana</a></li>
              <li><a href="/place/carribean/san-juan">San Juan</a></li>
              <li><a href="/place/carribean/willemstad">Willemstad</a></li>
            </ul>            
            <div className="gap gap-small"></div>
            <h4>Central America</h4>
            <ul>
              <li><a href="/place/central-america/panama-city">Panama City</a></li>
              <li><a href="/place/central-america/san-jose">San Jose</a></li>
              <li><a href="/place/central-america/tamarindo">Tamarindo</a></li>
              <li><a href="/place/central-america/jaca">Jaco</a></li>
              <li><a href="/place/central-america/manuel-antonio">Manuel Antonio</a></li>
              <li><a href="/place/central-america/la-fortuna">La Fortuna</a></li>
              <li><a href="/place/central-america/granada">Granada</a></li>
              <li><a href="/place/central-america/quepos">Quepos</a></li>
              <li><a href="/place/central-america/antigua">Antigua</a></li>
              <li><a href="/place/central-america/san-pedro">San Pedro</a></li>
            </ul>
            <div className="gap gap-small"></div>
             <h4>Europe</h4>
            <ul>
              <li><a href="/place/europe/amsterdam">Amsterdam</a></li>
              <li><a href="/place/europe/barcelona">Barcelona</a></li>
              <li><a href="/place/europe/berlin">Berlin</a></li>
              <li><a href="/place/europe/istanbul">Istanbul</a></li>
              <li><a href="/place/europe/london">London</a></li>
              <li><a href="/place/europe/madrid">Madrid</a></li>
              <li><a href="/place/europe/paris">Paris</a></li>
              <li><a href="/place/europe/prague">Prague</a></li>
              <li><a href="/place/europe/rome">Rome</a></li>
              <li><a href="/place/europe/venice">Venice</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>North America</h4>
            <ul>
              <li><a href="/place/north-america/atlanta">Atlanta</a></li>
              <li><a href="/place/north-america/boston">Boston</a></li>
              <li><a href="/place/north-america/chicargo">Chicargo</a></li>
              <li><a href="/place/north-america/denver">Denver</a></li>
              <li><a href="/place/north-america/houston">Houston</a></li>
              <li><a href="/place/north-america/miami">Miami</a></li>
              <li><a href="/place/north-america/los-angeles">Los Angeles</a></li>
              <li><a href="/place/north-america/los-vegas">Los Vegas</a></li>
              <li><a href="/place/north-america/new-york">New York</a></li>
              <li><a href="/place/north-america/new-orleans">New Orleans</a></li>
              <li><a href="/place/north-america/orlando">Orlando</a></li>
              <li><a href="/place/north-america/pheonix">Pheonix</a></li>
              <li><a href="/place/north-america/philidelphia">Philidelphia</a></li>
              <li><a href="/place/north-america/san-diego">San Diego</a></li>
              <li><a href="/place/north-america/san-francisco">San Francisco</a></li>
              <li><a href="/place/north-america/washington-d-c">Washington D.C</a></li>
            </ul>
            <div className="gap gap-small"></div>
 
          </div>
          <div className="col-md-4 left">
            <h4>Mexico</h4>
            <ul>
              <li><a href="/place/mexico/cabo-san-lucas">Cabo San Lucas</a></li>
              <li><a href="/place/mexico/cancun">Cancun</a></li>
              <li><a href="/place/mexico/tulum">Tulum</a></li>
              <li><a href="/place/mexico/cozumel">Cozumel</a></li>
              <li><a href="/place/mexico/guadalajra">Guadalajara</a></li>
              <li><a href="/place/mexico/isla-mujeres">Isla Mujeres</a></li>
              <li><a href="/place/mexico/merida">Merida</a></li>
              <li><a href="/place/mexico/mexico-city">Mexico City</a></li>
              <li><a href="/place/mexico/monterrey">Monterrey</a></li>
              <li><a href="/place/mexico/nuevo-vallarta">Nuevo Vallarta</a></li>
              <li><a href="/place/mexico/ooaxaca-de-juarez">Oaxaca de Juarez</a></li>
              <li><a href="/place/mexico/playa-del-carmen">Playa del Carmen</a></li>
              <li><a href="/place/mexico/puerto-aventuras">Puerto Aventuras</a></li>
              <li><a href="/place/mexico/puerto-morelos">Puerto Morelos</a></li>
              <li><a href="/place/mexico/puerto-penasco">Puerto Penasco</a></li>
              <li><a href="/place/mexico/puerto-vallarta">Puerto Vallarta</a></li>
              <li><a href="/place/mexico/san-jose-del-cabo">San Jose del Cabo</a></li>
              <li><a href="/place/mexico/san-miguel-de-allende">San Miguel de Allende</a></li>
              <li><a href="/place/mexico/sayulita">Sayulita</a></li>
              <li><a href="/place/mexico/zihuatanejo">Zihuatanejo</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>Middle East</h4>
            <ul>
              <li><a href="/place/middle-east/dubai">Dubai</a></li>
              <li><a href="/place/middle-east/tel-aviv">Tel Aviv</a></li>
              <li><a href="/place/middle-east/jerusalem">Jerusalem</a></li>
              <li><a href="/place/middle-east/tehran">Tehran</a></li>
              <li><a href="/place/middle-east/abu-dhabi">Abu Dhabi</a></li>
              <li><a href="/place/middle-east/doha">Doha</a></li>
              <li><a href="/place/middle-east/beirut">Beirut</a></li>
              <li><a href="/place/middle-east/riyad">Riyadh</a></li>
              <li><a href="/place/middle-east/manama">Manama</a></li>
              <li><a href="/place/middle-east/amman">Amman</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>South America</h4>
            <ul>
              <li><a href="/place/south-america/buenos-aires">Buenos Aires</a></li>
              <li><a href="/place/south-america/rio">Rio</a></li>
              <li><a href="/place/south-america/sao-paulo">São Paulo</a></li>
              <li><a href="/place/south-america/lima">Lima</a></li>
              <li><a href="/place/south-america/santiago">Santiago</a></li>
              <li><a href="/place/south-america/porto-alegre">Porto Alegre</a></li>
              <li><a href="/place/south-america/cusco">Cusco</a></li>
              <li><a href="/place/south-america/bogota">Bogota</a></li>
              <li><a href="/place/south-america/cartagena">Cartagena</a></li>
              <li><a href="/place/south-america/quito">Quito</a></li>
            </ul>


          </div>
        </div>
       	);
	}
}