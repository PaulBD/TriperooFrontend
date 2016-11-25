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
              <li><a href="/africa/cape-town">Cape Town</a></li>
              <li><a href="/africa/cairo">Cairo</a></li>
              <li><a href="/africa/casablanca">Casablanca</a></li>
              <li><a href="/africa/fes">Fes</a></li>
              <li><a href="/africa/johannesburg">Johannesburg</a></li>
              <li><a href="/africa/luxor">Luxor</a></li>
              <li><a href="/africa/marrakech">Marrakech</a></li>
              <li><a href="/africa/nairobi">Nairobi</a></li>
              <li><a href="/africa/sharm-el-sheikh">Sharm El Sheikh</a></li>
              <li><a href="/africa/tunis">Tunis</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>Asia</h4>
            <ul>
              <li><a href="/asia/bangkok">Bangkok</a></li>
              <li><a href="/asia/beijing">Beijing</a></li>
              <li><a href="/asia/hong-kong">Hong Kong</a></li>
              <li><a href="/asia/jakarta">Jakarta</a></li>
              <li><a href="/asia/kuala-lumpur">Kuala Lumpur</a></li>
              <li><a href="/asia/seoul">Seoul</a></li>
              <li><a href="/asia/singapore">Singapore</a></li>
              <li><a href="/asia/shanghai">Shanghai</a></li>
              <li><a href="/asia/taipei">Taipei</a></li>
              <li><a href="/asia/tokyo">Tokyo</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>Australia & Pacific Islands</h4>
            <ul>
              <li><a href="/australia-pacific-islands/adelaide">Adelaide</a></li>
              <li><a href="/australia-pacific-islands/auckland">Auckland</a></li>
              <li><a href="/australia-pacific-islands/bisbane">Brisbane</a></li>
              <li><a href="/australia-pacific-islands/christchurch">Christchurch</a></li>
              <li><a href="/australia-pacific-islands/melbourne">Melbourne</a></li>
              <li><a href="/australia-pacific-islands/perth">Perth</a></li>
              <li><a href="/australia-pacific-islands/queenstown">Queenstown</a></li>
              <li><a href="/australia-pacific-islands/rotorua">Rotorua</a></li>
              <li><a href="/australia-pacific-islands/sydney">Sydney</a></li>
              <li><a href="/australia-pacific-islands/wellington">Wellington</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>Canada</h4>
            <ul>
              <li><a href="/canada/calgary">Calgary</a></li>
              <li><a href="/canada/edmonton">Edmonton</a></li>
              <li><a href="/canada/lake-louise">Lake Louise</a></li>
              <li><a href="/canada/montreal">Montreal</a></li>
              <li><a href="/canada/ottawa">Ottawa</a></li>
              <li><a href="/canada/quebec">Quebec</a></li>
              <li><a href="/canada/toronto">Toronto</a></li>
              <li><a href="/canada/vancouver">Vancouver</a></li>
              <li><a href="/canada/victoria">Victoria</a></li>
              <li><a href="/canada/whistler">Whistler</a></li>
            </ul>
          </div>
          <div className="col-md-4 left">
            <h4>Carribean</h4>
            <ul>
              <li><a href="/carribean/frederiksted">Frederiksted</a></li>
              <li><a href="/carribean/charlotte-amalie">Charlotte Amalie</a></li>
              <li><a href="/carribean/chistiansted">Christiansted</a></li>
              <li><a href="/carribean/cruz-bay">Cruz Bay</a></li>
              <li><a href="/carribean/havana">Havana</a></li>
              <li><a href="/carribean/nassau">Nassau</a></li>
              <li><a href="/carribean/providenciales">Providenciales</a></li>
              <li><a href="/carribean/punta-cana">Punta Cana</a></li>
              <li><a href="/carribean/san-juan">San Juan</a></li>
              <li><a href="/carribean/willemstad">Willemstad</a></li>
            </ul>            
            <div className="gap gap-small"></div>
            <h4>Central America</h4>
            <ul>
              <li><a href="/central-america/panama-city">Panama City</a></li>
              <li><a href="/central-america/san-jose">San Jose</a></li>
              <li><a href="/central-america/tamarindo">Tamarindo</a></li>
              <li><a href="/central-america/jaca">Jaco</a></li>
              <li><a href="/central-america/manuel-antonio">Manuel Antonio</a></li>
              <li><a href="/central-america/la-fortuna">La Fortuna</a></li>
              <li><a href="/central-america/granada">Granada</a></li>
              <li><a href="/central-america/quepos">Quepos</a></li>
              <li><a href="/central-america/antigua">Antigua</a></li>
              <li><a href="/central-america/san-pedro">San Pedro</a></li>
            </ul>
            <div className="gap gap-small"></div>
             <h4>Europe</h4>
            <ul>
              <li><a href="/europe/amsterdam">Amsterdam</a></li>
              <li><a href="/europe/barcelona">Barcelona</a></li>
              <li><a href="/europe/berlin">Berlin</a></li>
              <li><a href="/europe/istanbul">Istanbul</a></li>
              <li><a href="/europe/london">London</a></li>
              <li><a href="/europe/madrid">Madrid</a></li>
              <li><a href="/europe/paris">Paris</a></li>
              <li><a href="/europe/prague">Prague</a></li>
              <li><a href="/europe/rome">Rome</a></li>
              <li><a href="/europe/venice">Venice</a></li>
            </ul>

            <div className="gap gap-small"></div>
            <h4>North America</h4>
            <ul>
              <li><a href="/north-america/atlanta">Atlanta</a></li>
              <li><a href="/north-america/boston">Boston</a></li>
              <li><a href="/north-america/chicargo">Chicargo</a></li>
              <li><a href="/north-america/denver">Denver</a></li>
              <li><a href="/north-america/houston">Houston</a></li>
              <li><a href="/north-america/miami">Miami</a></li>
              <li><a href="/north-america/los-angeles">Los Angeles</a></li>
              <li><a href="/north-america/los-vegas">Los Vegas</a></li>
              <li><a href="/north-america/new-york">New York</a></li>
              <li><a href="/north-america/new-orleans">New Orleans</a></li>
              <li><a href="/north-america/orlando">Orlando</a></li>
              <li><a href="/north-america/pheonix">Pheonix</a></li>
              <li><a href="/north-america/philidelphia">Philidelphia</a></li>
              <li><a href="/north-america/san-diego">San Diego</a></li>
              <li><a href="/north-america/san-francisco">San Francisco</a></li>
              <li><a href="/north-america/washington-d-c">Washington D.C</a></li>
            </ul>
            <div className="gap gap-small"></div>
 
          </div>
          <div className="col-md-4 left">
            <h4>Mexico</h4>
            <ul>
              <li><a href="/mexico/cabo-san-lucas">Cabo San Lucas</a></li>
              <li><a href="/mexico/cancun">Cancun</a></li>
              <li><a href="/mexico/tulum">Tulum</a></li>
              <li><a href="/mexico/cozumel">Cozumel</a></li>
              <li><a href="/mexico/guadalajra">Guadalajara</a></li>
              <li><a href="/mexico/isla-mujeres">Isla Mujeres</a></li>
              <li><a href="/mexico/merida">Merida</a></li>
              <li><a href="/mexico/mexico-city">Mexico City</a></li>
              <li><a href="/mexico/monterrey">Monterrey</a></li>
              <li><a href="/mexico/nuevo-vallarta">Nuevo Vallarta</a></li>
              <li><a href="/mexico/ooaxaca-de-juarez">Oaxaca de Juarez</a></li>
              <li><a href="/mexico/playa-del-carmen">Playa del Carmen</a></li>
              <li><a href="/mexico/puerto-aventuras">Puerto Aventuras</a></li>
              <li><a href="/mexico/puerto-morelos">Puerto Morelos</a></li>
              <li><a href="/mexico/puerto-penasco">Puerto Penasco</a></li>
              <li><a href="/mexico/puerto-vallarta">Puerto Vallarta</a></li>
              <li><a href="/mexico/san-jose-del-cabo">San Jose del Cabo</a></li>
              <li><a href="/mexico/san-miguel-de-allende">San Miguel de Allende</a></li>
              <li><a href="/mexico/sayulita">Sayulita</a></li>
              <li><a href="/mexico/zihuatanejo">Zihuatanejo</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>Middle East</h4>
            <ul>
              <li><a href="/middle-east/dubai">Dubai</a></li>
              <li><a href="/middle-east/tel-aviv">Tel Aviv</a></li>
              <li><a href="/middle-east/jerusalem">Jerusalem</a></li>
              <li><a href="/middle-east/tehran">Tehran</a></li>
              <li><a href="/middle-east/abu-dhabi">Abu Dhabi</a></li>
              <li><a href="/middle-east/doha">Doha</a></li>
              <li><a href="/middle-east/beirut">Beirut</a></li>
              <li><a href="/middle-east/riyad">Riyadh</a></li>
              <li><a href="/middle-east/manama">Manama</a></li>
              <li><a href="/middle-east/amman">Amman</a></li>
            </ul>
            <div className="gap gap-small"></div>
            <h4>South America</h4>
            <ul>
              <li><a href="/south-america/buenos-aires">Buenos Aires</a></li>
              <li><a href="/south-america/rio">Rio</a></li>
              <li><a href="/south-america/sao-paulo">São Paulo</a></li>
              <li><a href="/south-america/lima">Lima</a></li>
              <li><a href="/south-america/santiago">Santiago</a></li>
              <li><a href="/south-america/porto-alegre">Porto Alegre</a></li>
              <li><a href="/south-america/cusco">Cusco</a></li>
              <li><a href="/south-america/bogota">Bogota</a></li>
              <li><a href="/south-america/cartagena">Cartagena</a></li>
              <li><a href="/south-america/quito">Quito</a></li>
            </ul>


          </div>
        </div>
       	);
	}
}