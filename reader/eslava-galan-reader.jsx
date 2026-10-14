import { useState, useEffect } from "react";

// Lector de dos libros de Juan Eslava Galán. Cada libro tiene secciones y cada sección,
// artículos con el texto íntegro. Los títulos de los bloques de «Los años del miedo» son de
// navegación, no del libro.
// Marcas de párrafo: "@foto " = pie de foto, "@anuncio " = anuncio de época, "@grito " = línea
// de diálogo corta, "@fecha " = fecha de escena, "@firma " = firma, "@sep" = separador;
// [n] = llamada a nota (solo en libros con sección "Notas").

const GUERRA_SECTIONS = [
  {
    name: "Prólogo",
    kicker: "Prólogo",
    color: "#7A4E8C",
    articles: [
      {
        title: "Prólogo",
        subtitle: "Arturo Pérez-Reverte presenta el libro: la sombra de Caín, sin buenos ni malos.",
        pages: "5–6",
        content: `El viejo Goya lo pintó mejor que nadie: dos gañanes enterrados hasta las corvas, matándose a garrotazos. La sombra de Caín es alargada, en España. Lo fue siempre, y la guerra civil que se narra en este libro es cumplida prueba de ello. Juan Eslava Galán nos cuenta —en realidad nunca ha dejado de hacerlo— una historia trágica, violenta, retorcida en ocasiones hasta el esperpento con esos trágicos quiebros de humor negro que también, inevitablemente, son ingredientes de nuestra ibérica olla. Una república desventurada en manos de irresponsables, de timoratos y de asesinos, un ejército en manos de brutos y de matarifes, un pueblo despojado e inculto, estaban condenados a empapar de sangre esta tierra. Luego, prendida la llama, la arrogancia de los privilegiados, el rencor de los humildes, la desvergüenza de los políticos, el ansia de revancha de los fuertes, la ignorancia y el odio hicieron el resto. No bastaba vencer; era necesario perseguir al adversario hasta el exterminio. Murió más gente en la represión que en los combates; en ambos lados, analfabetos presidiendo tribunales gozaron de más poder que magistrados del Supremo. Hubo valor, por supuesto. Y decencia. Y lecciones de humanidad e inteligencia. Pero todo eso quedó sepultado por las pavorosas dimensiones de una tragedia que todavía hoy necesita reflexión y explicaciones. Este libro se aventura a ello, y lo consigue con amenidad y con una extraordinaria, abundante y rigurosa documentación que —ésa es quizá su principal virtud— ni siquiera se nota. Juan lo ha escrito a su manera, como suele. Como quien no quiere la cosa. Sin darle importancia y casi sin pretenderlo. Y por supuesto, sin buenos ni malos. Las dos Españas mamaron la misma leche. Estas páginas lo ponen de manifiesto de forma apasionante y estremecedora. Por eso se trata de una historia de la guerra civil que no le va a gustar a nadie. Ya era hora.

@firma ARTURO PÉREZ-REVERTE
De la Real Academia Española

@sep

En la taberna de El Gorrión, a la sombra de la catedral de Jaén, Arturo Pérez-Reverte, Fito de Cózar y yo tomábamos vino añejo y queso con rosquillas.

—¿En qué andas metido ahora? —me preguntó Arturo.

—Todavía no tiene título. Es una historia de la guerra civil que no va a gustar a nadie.

—Ése es el título —dijo Arturo.

Gracias, maestro.`
      },
    ]
  },
  {
    name: "Capítulos",
    color: "#2F5D7C",
    articles: [
      {
        title: "Tambores de guerra",
        kicker: "Capítulo 1",
        subtitle: "Julio de 1936: un biplano inglés con turistas fingidos despega de Croydon para llevar a Franco a África.",
        pages: "7–9",
        content: `@fecha 11 de julio de 1936

El periodista español Luis Bolín, cabello fino peinado hacia atrás con brillantina, ofrece gentilmente su mano a la estudiante inglesa de Artes Dorothy Watson para ayudarla a subir al avión. Al tiempo que la aúpa, tasa, con ojo perito, los encantos de la joven. La falda sport de la británica enfunda un trasero de, al menos, ocho palmos de latitud. Imagina Bolín los pechos valentones y grávidos que se adivinan tras la blusa marinera.

—Parece que empezamos con buen pie —murmura como para sí mientras se acomoda en su asiento.

—¿Decía? —pregunta el piloto.

—No, nada, que ya podemos despegar.

El avión, un biplano Dragón Rapide, matrícula G-ACYR, de la compañía Olley Air Services, impulsado por dos motores Gipsy Six de seis cilindros y doscientos caballos de potencia, despega del aeropuerto de Croydon, cercano a Londres.

Muchos años después, el historiador británico, católico, Douglas Jerold recordará las circunstancias de aquel vuelo que «contribuyó a salvar el alma de una nación».

«Luis Bolín y el ingeniero De la Cierva me citaron para almorzar en Simpson’s.

»—Necesito un hombre y dos rubias platino para volar mañana a África —dijo Bolín.

»—¿Tienen que ser realmente dos? —pregunté, y al oírlo, Bolín se volvió triunfante hacia De la Cierva.

»—Te dije que lo haría.

»Telefoneé a mi amigo Hugh Pollard, comandante retirado:

»—¿Podrás volar mañana a África con dos chicas? —le pregunté.

»Y escuché la respuesta que esperaba oír:

»—Depende de las chicas».

Con su potente rugido de motores, el avión se interna entre las nieblas del canal de la Mancha. Lo pilota Cecil W. H. Bebb, aviador veterano de la primera guerra mundial, con un mecánico y un telegrafista. En los asientos traseros toman té de un termo Luis Bolín, Hugh Pollard, su hija Diana y la amiga de ésta, Dorothy Watson, una chica liberada y moderna que no usa bolso y guarda la pitillera y el mechero en las bragas.

Se supone que es un grupo de turistas ingleses que van a realizar un viaje de placer por las islas Canarias. Bolín, amigo de Pollard, actuará como cicerone.

En realidad, el vuelo encubre una misión secreta: suministrar al general Franco un medio de transporte rápido para trasladarse desde Las Palmas de Gran Canaria al protectorado de Marruecos. El general va a capitanear el ejército de África sublevado contra la República Española.

Aterrizan en el aeropuerto de Burdeos, donde los espera el marqués de Luca de Tena. Mientras el resto de la tripulación y los pasajeros toman café en la cantina (el radiotelegrafista una copa de coñac), Luca de Tena, Bolín y el piloto trazan el plan de vuelo.

Atardece. El Dragón Rapide despega de nuevo rumbo al sur.

Desde la cabina acristalada, Bebb contempla la sucesión de valles y cerros achicharrados por el sol, pardos eriales y alguna que otra mancha verde que contornea los escasos riachuelos, pueblos que parecen esparcidos por el manotazo de un gigante en la atormentada orografía. Bebb, acostumbrado a la verde Inglaterra, encuentra una belleza bravía en este desierto de tierra seca y dura que se extiende hasta los montes azules.

Así que eso es España.

«No sabía que aquello era un volcán y que yo, con aquel vuelo, iba a encenderlo —recordaría años después—. Un volcán de fuego y de sangre».

España. Poco más de medio millón de kilómetros cuadrados. Veinticuatro millones de habitantes, en su mayoría ignorantes de que se les viene encima una cruenta guerra civil.

El piloto del Dragón Rapide que sobrevuela los rastrojos recién segados de las llanuras castellanas no está muy enterado de los asuntos de los españoles. El hace su trabajo, le pagan y en paz. Años después, quizá halagado por el papel que le cupo en aquellos hechos, se interesará por la historia reciente de España y no perderá ocasión de ilustrar sobre el tema a los periodistas que lo entrevistan: «En 1931, los republicanos ganaron las elecciones municipales en las principales ciudades de España y el rey Alfonso XIII tiró la toalla y abandonó el país. Los republicanos se echaron a la calle alborozados para proclamar la Segunda República».

La huida del rey dejaba un vacío de poder. El nuevo gobierno se impuso la tarea de modernizar España. Quería transformarla en una nación progresista y adelantada, como sus vecinas de Europa. Para conseguirlo urgía abolir los privilegios de la aristocracia y de los grandes terratenientes y limitar el poder del ejército y de la Iglesia. En primer lugar intentaron la reforma agraria, esencial en un país eminentemente agrícola: modificar la propiedad de la tierra para cultivarla racionalmente y atender a su función social empleando a cientos de miles de braceros analfabetos; en segundo lugar, la reforma de un ejército anquilosado y sobrado de mandos que había cosechado estrepitosos fracasos en la guerra de Marruecos; en tercer lugar, la reforma de la Iglesia, que monopolizaba la educación, acumulaba demasiado poder social y se inmiscuía en los asuntos del Estado. En cuarto lugar debían atender a las regiones históricas que reclamaban descentralización y autonomía.

El plan era bueno y los avances sociales de la República no se hicieron esperar: jornadas de ocho horas, la igualdad de la mujer, educación y sanidad para todos, laboreo de tierras improductivas…

Estas medidas toparon con la oposición de los colectivos afectados: la Iglesia, el ejército, los partidos monárquicos y las clases privilegiadas. Además, la República tuvo que afrontar la crítica de los anarquistas y los comunistas, que la tildaban de burguesa y aspiraban a una revolución social más radical. Los comunistas eran pocos, pero los anarquistas eran muy numerosos (especialmente los del sindicato CNT y los de la combativa FAI). Unos y otros promovieron huelgas y desórdenes que debilitaron a la República.

En enero de 1936, los partidos de izquierda (excepto la anarquista CNT) se unen en una coalición electoral, el Frente Popular, con un programa bastante moderado. La derecha, por su parte, se agrupa en torno a la CEDA (excepto el pequeño partido Falange Española). Las elecciones se celebran el 16 de febrero. Gana el Frente Popular por escaso margen (4 654 116 votos frente a los 4 503 524 de las derechas). Sin embargo, una Ley Electoral que favorece a las mayorías otorga al Frente Popular 278 escaños del Parlamento y a las derechas sólo 130.

Manuel Azaña, nuevo presidente de la República, designa primer ministro a Casares Quiroga, un hombre demasiado débil que no estará a la altura de las circunstancias.

Los acontecimientos se precipitan. La derecha, que tiene mal perder y desprecia la democracia —«un principio que consideraban la antítesis política del racionalismo» (Gil Robles)— comienza a conspirar contra el gobierno. Los sindicatos de izquierda tampoco ayudan mucho con su actitud revoltosa y malhumorada: quieren acelerar el proceso económico social con una revolución. La confrontación se radicaliza. Menudean los enfrentamientos armados con palos o con pistolas entre militantes jóvenes de uno u otro signo, especialmente en Madrid.

En el seno del PSOE, las posturas están divididas entre el moderado Prieto y el más radical Largo Caballero, que aunque en su día colaboró con la Dictadura de Primo de Rivera, ahora, quizá como expiación, se niega a cooperar con un gobierno que le parece excesivamente moderado.

Todo eso ocurre en España, mientras el Dragón Rapide sobrevuela una zona montañosa, cerros grises, pelados, entre los que a veces se divisa una aldea miserable de casas de adobe y el espejeo de un río que culebrea entre las peñas.`
      },
      {
        title: "Ruido de sables",
        kicker: "Capítulo 2",
        subtitle: "Primavera y verano de 1936: Mola teje la conspiración, Franco juega con dos barajas y Juan March paga el avión.",
        pages: "10–13",
        content: `Allá abajo el campo duerme en el sopor de su ignorancia y de su atraso, pero en las ciudades es un secreto a voces que se está preparando una insurrección militar capitaneada por una Junta de Generales y secundada por los militares derechistas de la Unión Militar Española (UME): «un movimiento militar que evitará la ruina y la desmembración de la patria», crecido a la sombra del líder derechista Gil-Robles.

Consciente del peligro golpista, el presidente de la República, Manuel Azaña, ha alejado de Madrid a los generales más peligrosos: Franco, a Canarias; Goded, a las Baleares; Mola, a Pamplona. Pero esa medida no impide que la conspiración militar crezca como una tela de araña tejida diestramente por Mola.

Mola, el Director, como firma los comunicados que envía a los conspiradores.

Nadie espera la guerra, pero todos aguardan un golpe de Estado del ejército contra el gobierno. Es el tema de conversación favorito en las tertulias de sobremesa, en los cafés y en las reboticas.

En la céntrica calle de Larios de Málaga, Antonio Villa saluda de acera a acera a su amigo y convecino el escritor británico Gerard Brenan:

—¡Buenos días, don Gerardo! —grita para que media calle pueda oírlo—. ¡Buenas noticias! ¡Dentro de dos días Calvo Sotelo será rey de España!

Calvo Sotelo, el más prestigioso y combativo líder derechista del momento.

Tiempo después, Gerard Brenan reflexiona: «Desde mediados de junio, todo el mundo, excepto el gobierno, parecía enterado de que los militares planeaban una sublevación».

Los militares africanos están soliviantados con las reformas de la «ley Azaña», que amenazan sus ascensos, sus condecoraciones, sus bandas, sus fajines adornados de borlas cortineras, sus pagas y sus privilegios.

Azaña está empeñado en reformar al ejército gendarme, que no sirve para defender al país sino para meter en cintura a los obreros, y que ha ganado sus privilegios en la desastrosa guerra de Marruecos, un matadero que sólo sirvió para enriquecer, aún más, a la oligarquía financiera y para colmar el ardor guerrero del rey y de los militares codiciosos de ascensos.

Azaña pone al ejército patas arriba: los veintiún mil oficiales se reducen a ocho mil; las dieciséis divisiones, a ocho.

La remodelación de Azaña anula muchos ascensos irregularmente otorgados a militares africanistas durante la Dictadura de Primo de Rivera que precedió a la República. Azaña no se atreve a aplicar la reforma con todas sus consecuencias, pero, en cualquier caso, los militares africanistas se sienten ultrajados. El general Franco escapa a la degradación hasta teniente coronel (como habría exigido la aplicación estricta de la ley), pero desciende quince puestos en la escala de los generales de brigada (43 generales en total).

Aliada natural de los militares golpistas es una derecha ultraconservadora formada por monárquicos, terratenientes, oligarquía financiera e industrial y caciques. Y aliada de todos ellos, la Iglesia, que ve amenazados sus seculares privilegios.

Los militares conjurados se reúnen en marzo para decidir quién ostentará el mando supremo. Los idóneos parecen Franco o Goded, pero es evidente que ninguno de los dos aceptará subordinarse al otro. Por otra parte, Franco se muestra bastante tibio y elusivo. El general gallego evita comprometerse francamente. En esta tesitura, los generales designan a Sanjurjo, «el héroe del Rif», un general que fracasó dos años antes en un golpe de Estado y desde entonces vive exiliado en Lisboa.

Los conspiradores cuentan, además, con importantes apoyos civiles provenientes de grupos de extrema derecha: los tradicionalistas, algunos católicos y el joven partido fascista Falange Española, cuyo líder, José Antonio Primo de Rivera, está encarcelado en Alicante por tenencia ilícita de armas.

En abril, Mola envía a los conspiradores la Instrucción Reservada Número Uno: «las circunstancias gravísimas que atraviesa la nación (…) el gobierno prisionero de las organizaciones revolucionarias (…) situación caótica (…) sólo se puede evitar mediante acción violenta». La acción debe ser «en extremo violenta (…) conquistado el poder se instaurará la dictadura militar».

Tres semanas después, Mola envía la Instrucción Reservada Número Dos: la rebelión podría fracasar en Madrid; por lo tanto, será esencial que las divisiones del Norte (Zaragoza, Burgos-Pamplona y Valladolid) envíen refuerzos lo antes posible a la capital de España para socorrer a las guarniciones sublevadas. Las milicias de la trama civil se apoderarán de los pasos de Somosierra y los mantendrán abiertos para que las columnas de auxilio puedan llegar sin contratiempos a Madrid y la ocupen como Mussolini ocupó Roma unos años antes en su célebre marcha.

Cuando falta un mes para el golpe de Estado, las voluntades de los golpistas distan mucho de ser unánimes. Algunos titubean ante la perspectiva de comprometerse en un viaje sin retorno que pondrá en peligro sus carreras y sus vidas. Si el golpe fracasa pueden acabar como Sanjurjo, malviviendo en el exilio o, peor aún, ante un pelotón de fusilamiento. Además, no están seguros de lo que harán con el poder una vez que se lo arrebaten al gobierno. ¿Acaso volver a la monarquía? Tres de los generales golpistas, Mola, Queipo y Goded, son más republicanos que monárquicos. En realidad no piensan acabar con la República sino imponer un gobierno militar provisional que reconduzca al país por la senda conservadora. Pero otros generales golpistas son monárquicos y aspiran a restaurar a Alfonso XIII en el trono.

Por esas fechas, el diputado derechista Calvo Sotelo pregunta a su correligionario Serrano Suñer, cuñado de Franco:

—¿En qué piensa tu cuñado? ¿Qué hace? ¿No se da cuenta de cuáles son las cartas?

Franco, que es (moderadamente) aficionado al naipe, sabe perfectamente cuáles son las cartas. Tanto, que está jugando con dos barajas mientras se aclara el panorama y decide de qué lado quedarse. El 23 de junio le escribe al presidente del Gobierno. Con calculada ambigüedad, el gallego se ofrece para calmar «el grave estado de inquietud» del ejército, que crece día a día debido a malentendidos y desencuentros con el gobierno.

Serrano Suñer, buen conocedor de Franco, le responde a Calvo Sotelo:

—Mi cuñado no hará nada que lo comprometa, estará siempre en la sombra porque es un cuco. Pero el alzamiento seguirá adelante con o sin Franquito.

@fecha Domingo, 5 de julio
Retama, Marruecos

Maniobras del ejército de África en el Llano Amarillo. En el banquete de clausura, algunos oficiales achispados van de mesa en mesa proclamando en voz alta: «¡Café! ¡Café!». Las autoridades republicanas presentes no saben cómo interpretar las sonrisas cómplices que la palabra provoca en los militares. Para los conspiradores que están en el ajo, Café encierra las iniciales de Camaradas Arriba Falange Española.

En las salas de banderas de los cuarteles se propalan rumores. La sublevación es inminente: Navarra se rebelará el 12 de julio y África el 14. Finalmente, la sublevación se aplaza al día 17 a las cero horas.

Unos días antes uno de los conjurados, el general Kindelán, le preguntó a Franco si estaba dispuesto a participar en el alzamiento y sólo recibió una respuesta ambigua, sí pero no. No obstante, Mola está convencido de que Franco se sumará a última hora, cuando compruebe que la cosa va en serio y no se queda en la patochada de Sanjurjo, dos años atrás. Hay que proporcionarle los medios para que se traslade rápidamente de las Canarias a Tetuán, donde deberá capitanear el ejército de África. El marqués de Luca de Tena, conspicuo derechista y dueño del diario ABC, telefonea a Luis Bolín, su corresponsal en Londres, y le encomienda que se procure un avión. Bolín, tras consultar el caso con el ingeniero aeronáutico De la Cierva, alquila un Dragón Rapide aparentemente para un viaje de placer por Casablanca, Canarias y Marruecos. Financia la operación el multimillonario Juan March, que desde hace tiempo sufraga a los golpistas desde su exilio de Biarritz. Alguien había profetizado: «O la República acaba con March, o March acabará con la República».`
      },
    ]
  },
];

const MIEDO_SECTIONS = [
  {
    name: "Capítulo 1",
    kicker: "Capítulo 1 · En España empieza a amanecer",
    color: "#B03A2E",
    articles: [
      {
        title: "Descargas al amanecer",
        subtitle: "Jaén, 22 de mayo de 1939. Teófilo González despierta con hambre mientras la ciudad escucha al pelotón de fusilamiento.",
        pages: "13–16",
        content: `Jaén, 22 de mayo de 1939. Los retortijones del hambre despiertan a Teófilo González en su buhardilla de la calle Hurtado, número uno. Está amaneciendo. Por la ventana, apenas un tragaluz, los patriarcas de piedra que adornan la cornisa de la iglesia del Sagrario se recortan en la claridad difusa del cielo. La campana de San Ildefonso da las seis. A esta hora hay en la ciudad muchos oídos atentos en espera de la primera descarga del pelotón que cumple las sentencias en las tapias del cementerio. Algunos días resuenan dos o tres descargas; otros, hasta media docena, con intervalos de unos minutos. Los que viven cerca del cementerio oyen después los tiros de gracia.

@foto Españoles aguardan a que comience la capea en las fiestas patronales de un pueblo, mientras un aguador ofrece su mercancía.

Es un sonido familiar en las capitales de provincia y ciudades importantes. Los vencedores pasan factura a los vencidos.[1]

Con las manos trenzadas bajo la nuca, Teófilo González remolonea en espera de que el sol dore los muros de la catedral y el tejado de la mercería La Verdadera. En la sábana que lo cubre puede leerse todavía SALUDO A FRANCO, ARRIBA ESPAÑA. Sirvió de pancarta en un acto patriótico y aunque su madre la ha lavado dos veces, la pintura no acaba de irse.

Con la Victoria ha llegado la hora de la revancha, del ajuste de cuentas.

@foto Españolas laboriosas sonríen a la cámara con un montón de ladrillos reutilizables al fondo. En España empieza a amanecer.

La mitad de los españoles, los que apoyaron a la República, viven en continua zozobra, angustiados cada vez que escuchan el frenazo de un coche, cada vez que perciben pasos en la escalera, cada vez que unos nudillos golpean la puerta. «El miedo a la denuncia resultó en muchos casos obsesivo. Podían hacerse anónimas y no requerían ningún fundamento ni someterse al peso de la prueba. Bastaba con acusar a cualquiera de “masón” o de “rojo” para verle expulsado del trabajo o marginado en las relaciones sociales.»[2]

Teófilo tiene diecisiete años. Se libró de ir a la guerra por los pelos, pero no se va a librar de la posguerra. Su padre, empleado de ferrocarriles y afiliado a Izquierda Republicana, está en la cárcel. Le han caído veinte años y un día por dirigir el tránsito de trenes, muchos de ellos militares, en la estación de Espeluy.

Teófilo presta atención a la radio del vecino, perfectamente audible a través del débil tabique de cañizo y yeso que lo separa de la buhardilla paredaña. Radio Nacional emite varias veces al día la consigna oficial, que ya se sabe de memoria: «¡Españoles, alerta! —avisa la voz vibrante del speaker Fernando Fernández de Córdoba—. ¡La paz no es un reposo cómodo y cobarde frente a la Historia! ¡La sangre de los que cayeron por la Patria no consiente el olvido, la esterilidad ni la traición! ¡Españoles, alerta! ¡España sigue en pie de guerra contra todo enemigo del interior o del exterior!»

Tras la proclama patriótica suena el Cara al Sol, el bello himno de Falange que la media España derrotada ha tenido que aprender porque es obligatorio. Antes de un discurso, conferencia, reparto de diplomas, sesión de cine o de circo, corrida de toros o partido de fútbol los asistentes entonan el Cara al Sol en posición de firmes, brazo en alto, mano extendida, en saludo fascista.[3] Después del himno, la persona de más calidad vocea los gritos de rigor que los espectadores deben corear con viril entusiasmo:

@grito —¡España!
@grito —¡Una!
@grito —¡España!
@grito —¡Grande!
@grito —¡España!
@grito —¡Libre!
@grito —¡Arriba España!
@grito —¡Arriba España!
@grito —¡Viva Franco!
@grito —¡Viva Franco![4]

Algunos españoles visten camisa azul para hacerse perdonar pasadas tibiezas; otros, para rentabilizar su contribución a la Victoria. El abuso adquiere tales proporciones que la propia Falange prohibirá la venta del tejido azul marino y el uso de la camisa salvo en los actos oficiales.

Desde el término de la guerra, un carnet de Falange es el mejor pasaporte para gozar de los privilegios de los vencedores. Casi un millón de personas de toda clase y condición ha solicitado su ingreso en el partido de José Antonio. Las delegaciones provinciales nombran comisiones para cribar la avalancha de arribistas que aspiran al carnet.`
      },
      {
        title: "Tan mala como la guerra",
        subtitle: "Precios, salarios y privilegios: quién paga la posguerra y quién la cobra. Desde su ventana, Teófilo ve despertar la plaza.",
        pages: "16–20",
        content: `A Teófilo González le da la impresión de que la posguerra puede ser tan mala como la guerra. No hace falta ser economista para advertir que la capacidad adquisitiva de los españoles está por los suelos. El coste de la vida ha crecido un 247 % respecto a los niveles anteriores a la guerra, mientras que los salarios sólo han aumentado un 150 %.[5] Por el contrario, en el periodo comprendido entre 1936 y 1946 la rentabilidad de las empresas crece un 13,79 %; los beneficios de la banca, en un 29,9 %.[6] En ese decenio los salarios reales descenderán un 25 %.

Los sueldos de los militares se mantienen en la misma tónica de moderación que el resto, pero Franco compensa a sus conmilitones con otras ventajas: a los jefes de alta graduación les distribuye el 40 % de cargos de la alta administración del Estado; a todos les construye colonias de viviendas y economatos donde puedan adquirir bienes de consumo más asequibles que en el comercio. Especialmente baratos les resultan al oficial de cocinas encargado de comprar las vituallas para la alimentación de la tropa, un puesto ambicionado por todos y que, por tanto, rota en riguroso turno mensual. El oficial de cocinas adquiere productos en grandes cantidades, lo que le asegura altas comisiones de los proveedores. No contento con eso, suele enviar a su casa garbanzos, harina, chacinas, paños de tocino, bacalao, latas de conservas y de aceite y otros consumibles detraídos de la despensa castrense calculando para que le dure hasta que le toque de nuevo el turno.

@foto Tienda decorada. Madrid, 1939.

A ello hay que sumar los servicios que los militares reciben graciosamente, no sólo el transporte público gratuito, chollo que sólo duró los tres meses siguientes a la Victoria, sino ventajas más perdurables que mantendrán durante decenios. Cuando necesitan a un fontanero, un carpintero, un albañil, un electricista, un relojero, un cocinero, un mozo de cuerda, un recadero, un peluquero, un limpiabotas, un mecánico del automóvil, un técnico que repare la radio, un chófer, una niñera o un profesor particular para los hijos, le encomiendan el trabajo a un soldado que tenga como oficio la profesión requerida. El soldado lo cumple con diligencia por la cuenta que le trae. Al final, si tiene mucha suerte, recibe una propinilla o un permiso de fin de semana. Así son las cosas. El tiempo que dura el servicio militar, dos años completos (incluso si ya se había servido anteriormente con la República) el soldado es rehén de sus superiores.[7]

Acodado en el ventanuco de su buhardilla, con el pijama raído y remendado, Teófilo González fuma un cigarrillo de los que confecciona con las colillas recogidas en el café Lion d'Or. El muchacho contempla la plaza de San Francisco mientras se pregunta por su incierto futuro.

El burro del lechero, con sus cuatro cántaras, cruza la calle haciendo el reparto de los clientes fijos.

Dos taxis esperan en la parada, frente al Gobierno Civil. Los taxistas charlan sentados en el estribo, con sus gorras de visera de hule, sus chaquetas de un azul marino desvaído y sus bolsillos desfondados.

Pasan camino del mercado algunas viejas friolentas envueltas en sus tocas negras de lana, el cenacho de la compra bajo el brazo. Madrugan para hurgar en el montón de los desperdicios del mercado en busca de una fruta agusanada pero todavía aprovechable, de un troncho de lechuga, de unas hojas de espinaca desechadas por mustias.

@foto La señora cubierta de tocas negras se aferra a su pan. Acaba de terminar la guerra y todavía no ha empezado el racionamiento.

La puerta principal del edificio de Correos, vecino de la Catedral, está adornado con un escudo republicano, con su corona mural, que pasará inadvertido durante todo el franquismo. En la escalinata charlan un militar, un cura gordo, ataviado con teja y manteo, y un paisano que viste pantalón caqui, botas de montar y camisa azul de Falange con la boina roja enrollada en la hombrera izquierda: Ejército, Iglesia y Falange, las tres columnas en las que se sostiene la Nueva España, como llaman al Régimen nacido de la Victoria.`
      },
      {
        title: "La calle se va animando",
        subtitle: "Cuerpos flacos, trajes vueltos del revés y lutos por todas partes. Y una conversación entre viejos conocidos.",
        pages: "20–21",
        content: `La calle se va animando. Dos novedades llaman la atención del observador: el adelgazamiento de la población, que sale de la guerra con déficit alimentario, y el torpe aliño indumentario de los transeúntes, al menos de los pertenecientes al bando de los vencidos: pantalones con parches de tela de diferente color en la culera y en las rodillas, chaquetas con parches en los codos, trajes dados la vuelta que se delatan porque llevan en el lado derecho los ojales y el bolsillo superior de la chaqueta.

@anuncio En Madrid encontraréis débiles a vuestros familiares. Llevadle el reconstituyente Iaso.

Como consecuencia de la guerra abundan los lutos: un botón de abrigo forrado de tela negra en el ojal de la solapa, un brazalete negro cosido en la manga derecha, un pico negro en la solapa, corbata negra, gorra y blusa negra en los obreros (ahora llamados productores para evitar las connotaciones izquierdistas de «obrero»), luto completo, terno y sombrero en los señores acomodados, mujeres de negro, de la cabeza a los pies, y distintos alivios de luto o medio luto, primero prendas grises y, transcurrido un tiempo prudencial, otras blancas con lunares negros...

@anuncio Tinte de ropa sin planchar a mitad de precio. LUTOS en 24 horas. Tintorería La Esmerada, Plaza del General Mola, 6, Madrid.

Ambrosio Doblado Anguita arrea su borriquilla cargada de verduras calle Bernabé Soriano arriba, camino del mercado. Se cruza con un antiguo conocido al que lleva años sin ver. Se saludan. El forastero le formula la pregunta normal en estos casos:

@foto En los años del hambre aparecen en corrales, patios y azoteas jaulones de alambre en los que un par de gallinas y una coneja paridora suministran el mínimo de proteínas necesario para mantener a la familia humilde. Gordas como las de esta foto eran excepción.

—¿Cómo se ha pasado la guerra, Ambrosio?

—¡Pues no se ha pasado mal! —responde el interpelado—. Mi Luis murió en el 37 en el frente de Aragón, a mi Ambrosio le tuvieron que cortar una pierna en Guadalajara, a mi Felisa la dejó preñada un sargento y luego no quiso saber nada. Ahí la tengo con dos mellizos, uno de ellos cieguecito, el pobre, y yo me quedé viudo el año pasado, pero, aparte de eso, no se ha pasado mal.`
      },
    ]
  },
  {
    name: "Notas",
    kicker: "Notas",
    color: "#8A6D1F",
    articles: [
      {
        title: "Notas del capítulo",
        subtitle: "Las siete notas a pie de página de la edición impresa.",
        pages: "14–18",
        content: `[1] «Entre 1939 y 1942 las auditorías de guerra no dieron abasto y los juicios sumarísimos se sucedieron a velocidad de vértigo. El número de fusilados en Jaén a principios de 1941, con sacas de hasta cincuenta ejecutados por día, supuso el mayor nivel de represión» (Luis Miguel Sánchez Tostado, La guerra civil en Jaén, Gráficas Catena, Jaén, 2006, p. 455.)

[2] Reig Tapia, Alberto, Franco: el césar superlativo, Ed. Tecnos, Madrid, 2005, p. 276.

[3] Obligatorio desde el 4 de agosto de 1937. En Madrid recién liberado al término de la guerra, la Asociación de Sordomudos informó a sus afiliados de la conveniencia de cambiar el saludo anterior, del brazo izquierdo flexionado y puño en alto, por el del brazo derecho en ángulo de 45 grados y mano extendida. Debido al aislamiento al que los condenaba su defecto físico muchos no se habían enterado del cambio de régimen.

[4] Los gritos de rigor se oficializan por sugerencia del jefe de Prensa de Madrid, don Manuel Aznar, famoso periodista, abuelo de un presidente de Gobierno de la democracia posfranquista.

[5] Cifras de 1942.

[6] «Entre 1940 y 1952 nacieron las grandes entidades bancarias del franquismo: Banesto, Central, Bilbao, Vizcaya... que absorbieron a los cuarenta y siete bancos existentes en España, para vivir una década de vacas gordas sobre ruinas» (Mariano Sánchez Soler, Los Franco, S.A., Ed. Oberón, Madrid, 2003, p. 29).

[7] Resulta paradójico que estas prácticas abusivas provengan de personas que introducen a menudo en sus arengas patrióticas conceptos como Honor, Patria y Justicia.`
      },
    ]
  },
];


const BOOKS = [
  {
    id: "guerra",
    part: "Primera parte",
    title: "Una historia de la guerra civil que no va a gustar a nadie",
    shortTitle: "Una historia de la guerra civil…",
    sections: GUERRA_SECTIONS,
  },
  {
    id: "miedo",
    part: "Segunda parte",
    title: "Los años del miedo",
    shortTitle: "Los años del miedo",
    sections: MIEDO_SECTIONS,
  },
].map(book => {
  const all = book.sections.flatMap(s => s.articles.map(a => ({ section: s, article: a })));
  const notesSection = book.sections.find(s => s.name === "Notas");
  const notes = notesSection
    ? Object.fromEntries(notesSection.articles[0].content.split("\n\n").map(p => {
        const m = p.match(/^\[(\d+)\]\s*(.*)$/s);
        return [m[1], m[2]];
      }))
    : {};
  return { ...book, all, notesSection, notes };
});

const THEMES = {
  light: {
    bg: "#FBF8F2", side: "#F2EDE3", border: "#E2DACB", text: "#22201C",
    muted: "#6B645A", hover: "#E9E2D4", caption: "#5E574C", captionBg: "#F2EDE3",
  },
  dark: {
    bg: "#16140F", side: "#1E1B16", border: "#332E26", text: "#ECE6DA",
    muted: "#A39B8D", hover: "#2A261F", caption: "#B9B1A3", captionBg: "#211E18",
  },
};

const MARKERS = ["@foto ", "@anuncio ", "@grito ", "@fecha ", "@firma ", "@sep"];
const isPlain = (para) => !MARKERS.some(m => para.startsWith(m));

// Posición guardada en la URL (#libro/articulo) para poder enlazar y recargar sin perderla.
function readHash() {
  try {
    const [b, a] = window.location.hash.slice(1).split("/");
    const bookIdx = BOOKS.findIndex(x => x.id === b);
    if (bookIdx < 0) return { bookIdx: 0, idx: 0 };
    const idx = Math.min(Math.max(parseInt(a, 10) || 0, 0), BOOKS[bookIdx].all.length - 1);
    return { bookIdx, idx };
  } catch (e) {
    return { bookIdx: 0, idx: 0 };
  }
}

const SHEET_CSS = `
@keyframes nota-sube { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes nota-fondo { from { opacity: 0; } to { opacity: 1; } }
`;

// Hoja inferior con el texto de una nota: ocupa la mitad baja del lector.
// Se cierra con ✕, pulsando fuera (mitad superior) o con Escape.
function NoteSheet({ n, text, color, t, onClose }) {
  return (
    <>
      <style>{SHEET_CSS}</style>
      <div onClick={onClose} aria-hidden="true"
           style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(0,0,0,0.18)",
                    animation: "nota-fondo 0.2s ease" }} />
      <section role="dialog" aria-modal="true" aria-label={`Nota ${n}`}
               style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "50%", zIndex: 31,
                        background: t.bg, borderTop: `3px solid ${color}`,
                        boxShadow: "0 -8px 28px rgba(0,0,0,0.22)", display: "flex", flexDirection: "column",
                        animation: "nota-sube 0.25s ease-out" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                         padding: "12px 16px", borderBottom: `1px solid ${t.border}`, flex: "none" }}>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", fontWeight: 700,
                         letterSpacing: "0.12em", textTransform: "uppercase", color }}>
            Nota {n}
          </span>
          <button onClick={onClose} autoFocus aria-label="Cerrar nota"
                  style={{ background: "none", border: `1px solid ${t.border}`, color: t.muted, borderRadius: 4,
                           width: 32, height: 32, cursor: "pointer", fontSize: "1rem", lineHeight: 1 }}>✕</button>
        </header>
        <div style={{ overflowY: "auto", padding: "20px 22px 28px" }}>
          <p style={{ maxWidth: 680, margin: "0 auto", fontSize: "1.02rem", lineHeight: 1.7, color: t.text }}>
            {text}
          </p>
        </div>
      </section>
    </>
  );
}

// Convierte las llamadas [n] en superíndices que abren la nota.
function renderInline(text, onNote, color) {
  return text.split(/(\[\d+\])/g).map((part, i) => {
    const m = part.match(/^\[(\d+)\]$/);
    if (!m) return part;
    return (
      <sup key={i}>
        <a href="#" onClick={e => { e.preventDefault(); onNote(m[1], e.currentTarget); }}
           style={{ color, textDecoration: "none", fontWeight: 700, padding: "0 1px" }}
           title={`Nota ${m[1]}`}>{m[1]}</a>
      </sup>
    );
  });
}

function Paragraph({ para, dropCap, isNotes, color, t, onNote }) {
  if (para.startsWith("@foto ")) {
    return (
      <figure style={{ margin: "2em 0", padding: "14px 18px", background: t.captionBg,
                       borderLeft: `3px solid ${color}`, borderRadius: 2 }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em",
                      textTransform: "uppercase", color, marginBottom: 6 }}>Fotografía</div>
        <figcaption style={{ fontSize: "0.92rem", lineHeight: 1.55, color: t.caption }}>
          {para.slice(6)}
        </figcaption>
      </figure>
    );
  }
  if (para.startsWith("@anuncio ")) {
    return (
      <aside style={{ margin: "2em 0", padding: "16px 20px", border: `1px dashed ${t.border}`,
                      textAlign: "center", fontStyle: "italic", color: t.caption, lineHeight: 1.6 }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontStyle: "normal", fontSize: "0.65rem",
                      letterSpacing: "0.12em", textTransform: "uppercase", color: t.muted, marginBottom: 6 }}>
          Anuncio de la época
        </div>
        {para.slice(9)}
      </aside>
    );
  }
  if (para.startsWith("@grito ")) {
    const lines = para.split("\n").map(l => l.replace(/^@grito /, ""));
    return (
      <div style={{ margin: "0 0 1.2em 1.5em", fontSize: "1.05rem", lineHeight: 1.6 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontStyle: i % 2 ? "italic" : "normal" }}>{renderInline(l, onNote, color)}</div>
        ))}
      </div>
    );
  }
  if (para.startsWith("@fecha ")) {
    const [first, ...more] = para.slice(7).split("\n");
    return (
      <div style={{ margin: "2.2em 0 1.4em", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color }}>
          {first}
        </div>
        {more.map((l, i) => (
          <div key={i} style={{ fontSize: "0.8rem", color: t.muted, marginTop: 3 }}>{l}</div>
        ))}
      </div>
    );
  }
  if (para.startsWith("@firma ")) {
    const [name, ...more] = para.slice(7).split("\n");
    return (
      <div style={{ textAlign: "right", margin: "1.6em 0 0" }}>
        <div style={{ fontVariant: "small-caps", letterSpacing: "0.06em", fontWeight: 700 }}>{name.toLowerCase()}</div>
        {more.map((l, i) => (
          <div key={i} style={{ fontSize: "0.85rem", color: t.muted, fontStyle: "italic" }}>{l}</div>
        ))}
      </div>
    );
  }
  if (para.startsWith("@sep")) {
    return <div aria-hidden="true" style={{ textAlign: "center", color: t.muted, letterSpacing: "1em", margin: "2.6em 0" }}>* * *</div>;
  }
  if (isNotes) {
    const m = para.match(/^\[(\d+)\]\s*(.*)$/s);
    return (
      <p style={{ display: "flex", gap: 12, fontSize: "0.98rem", lineHeight: 1.65, marginBottom: "1.1em" }}>
        <span style={{ color, fontWeight: 700, minWidth: 18 }}>{m[1]}.</span>
        <span>{m[2]}</span>
      </p>
    );
  }
  return (
    <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.2em", textIndent: dropCap ? 0 : "1.2em" }}>
      {dropCap ? (
        <>
          <span style={{ float: "left", fontSize: "3.6em", lineHeight: 0.85, padding: "6px 8px 0 0",
                         color, fontWeight: 700 }}>{para[0]}</span>
          {renderInline(para.slice(1), onNote, color)}
        </>
      ) : renderInline(para, onNote, color)}
    </p>
  );
}

export default function BookReader() {
  const [pos, setPos] = useState(readHash);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fontScale, setFontScale] = useState(1);
  const [collapsed, setCollapsed] = useState({});
  const [openNote, setOpenNote] = useState(null);

  const t = dark ? THEMES.dark : THEMES.light;
  const book = BOOKS[pos.bookIdx];
  const idx = pos.idx;
  const { section, article } = book.all[idx];

  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 800;
      setIsMobile(m);
      setSidebarOpen(!m);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const pane = document.getElementById("reading-pane");
    if (pane) pane.scrollTop = 0;
    setOpenNote(null);
    try { history.replaceState(null, "", `#${book.id}/${idx}`); } catch (e) { /* sin historial */ }
  }, [pos]);

  useEffect(() => {
    const onHash = () => setPos(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!openNote) return;
    const onKey = (e) => { if (e.key === "Escape") setOpenNote(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openNote]);

  const select = (i) => { setPos({ bookIdx: pos.bookIdx, idx: i }); if (isMobile) setSidebarOpen(false); };
  const selectBook = (b) => { if (b !== pos.bookIdx) setPos({ bookIdx: b, idx: 0 }); };

  // Abre la nota y, si la llamada quedaría tapada por la hoja, desplaza el texto
  // para dejarla en la mitad superior del lector.
  const goToNote = (n, marker) => {
    if (!book.notes[n]) return;
    setOpenNote(n);
    const pane = document.getElementById("reading-pane");
    if (!pane || !marker) return;
    const paneBox = pane.getBoundingClientRect();
    const y = marker.getBoundingClientRect().top - paneBox.top;
    if (y > paneBox.height * 0.4) {
      pane.scrollBy({ top: y - paneBox.height * 0.25, behavior: "smooth" });
    }
  };

  const isNotes = section === book.notesSection;
  const paras = article.content.split("\n\n");
  const firstPlain = isNotes ? -1 : paras.findIndex(isPlain);
  const words = article.content.replace(/@\w+ ?/g, "").split(/\s+/).length;
  const kicker = article.kicker || section.kicker;
  const btn = {
    background: "none", border: `1px solid ${t.border}`, color: t.muted, borderRadius: 4,
    padding: "4px 10px", cursor: "pointer", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif",
  };
  const sectionKey = (s) => `${book.id}:${s.name}`;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Georgia, 'Libre Baskerville', serif",
                  background: t.bg, color: t.text, position: "relative" }}>
      {sidebarOpen && (
        <nav style={{
          width: 280, flex: "none", background: t.side, borderRight: `1px solid ${t.border}`,
          overflowY: "auto", padding: "16px 0 20px",
          ...(isMobile ? { position: "absolute", top: 0, bottom: 0, left: 0, zIndex: 20,
                           boxShadow: "0 0 24px rgba(0,0,0,0.25)" } : {}),
        }}>
          <div style={{ padding: "0 18px 6px", fontFamily: "system-ui, sans-serif", fontSize: "0.68rem",
                        letterSpacing: "0.12em", textTransform: "uppercase", color: t.muted }}>
            Juan Eslava Galán
          </div>
          <div role="tablist" aria-label="Libros" style={{ padding: "6px 12px 14px", display: "grid", gap: 6,
                                                           borderBottom: `1px solid ${t.border}`, marginBottom: 12 }}>
            {BOOKS.map((b, i) => {
              const active = i === pos.bookIdx;
              return (
                <button key={b.id} role="tab" aria-selected={active} onClick={() => selectBook(i)}
                        style={{ textAlign: "left", cursor: "pointer", padding: "10px 12px", borderRadius: 6,
                                 border: `1px solid ${active ? t.text : t.border}`,
                                 background: active ? t.bg : "transparent", color: t.text,
                                 fontFamily: "inherit" }}>
                  <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em",
                                textTransform: "uppercase", color: t.muted, marginBottom: 3 }}>{b.part}</div>
                  <div style={{ fontWeight: active ? 700 : 400, fontSize: "0.95rem", lineHeight: 1.25 }}>{b.title}</div>
                </button>
              );
            })}
          </div>
          {book.sections.map(s => {
            const open = !collapsed[sectionKey(s)];
            return (
              <div key={sectionKey(s)} style={{ marginBottom: 8 }}>
                <div onClick={() => setCollapsed(p => ({ ...p, [sectionKey(s)]: open }))}
                     style={{ padding: "8px 18px", cursor: "pointer", color: s.color, fontWeight: 700,
                              fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em",
                              fontFamily: "system-ui, sans-serif", display: "flex", justifyContent: "space-between" }}>
                  {s.name}<span>{open ? "−" : "+"}</span>
                </div>
                {open && s.articles.map(a => {
                  const i = book.all.findIndex(x => x.article === a);
                  const active = i === idx;
                  return (
                    <div key={a.title} onClick={() => select(i)}
                         style={{ padding: "9px 18px 9px 22px", cursor: "pointer", fontSize: "0.9rem", lineHeight: 1.35,
                                  background: active ? t.hover : "transparent",
                                  borderLeft: `3px solid ${active ? s.color : "transparent"}` }}>
                      {a.kicker ? <span style={{ color: t.muted }}>{a.kicker.replace("Capítulo ", "")}. </span> : null}
                      {a.title}
                      <div style={{ fontSize: "0.72rem", color: t.muted, marginTop: 3,
                                    fontFamily: "system-ui, sans-serif" }}>págs. {a.pages}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </nav>
      )}

      <div style={{ flex: 1, position: "relative", minWidth: 0, display: "flex" }}>
      <main id="reading-pane" style={{ flex: 1, overflowY: "auto" }}
            onClick={() => isMobile && sidebarOpen && setSidebarOpen(false)}>
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: t.bg, borderBottom: `1px solid ${t.border}`,
                      display: "flex", alignItems: "center", gap: 8, padding: "10px 16px" }}>
          <button style={btn} onClick={e => { e.stopPropagation(); setSidebarOpen(o => !o); }}
                  aria-label="Índice">☰</button>
          <div style={{ flex: 1, fontSize: "0.8rem", color: t.muted, fontFamily: "system-ui, sans-serif",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {book.shortTitle} · {article.title}
          </div>
          <button style={btn} onClick={() => setFontScale(f => Math.max(0.85, f - 0.1))} aria-label="Reducir texto">A−</button>
          <button style={btn} onClick={() => setFontScale(f => Math.min(1.4, f + 0.1))} aria-label="Aumentar texto">A+</button>
          <button style={btn} onClick={() => setDark(d => !d)}>{dark ? "☀ Claro" : "☾ Oscuro"}</button>
        </div>

        <article style={{ maxWidth: 680, margin: "0 auto", padding: "40px 22px 80px", fontSize: `${fontScale}rem` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: t.muted,
                        marginBottom: 6, fontStyle: "italic" }}>
            {book.title}
          </div>
          <div style={{ color: section.color, fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase",
                        letterSpacing: "0.12em", marginBottom: 14, fontFamily: "system-ui, sans-serif" }}>
            {kicker}
          </div>
          <h1 style={{ fontSize: "2.2em", fontWeight: 700, lineHeight: 1.15, margin: "0 0 14px" }}>{article.title}</h1>
          <p style={{ fontSize: "1.1em", color: t.muted, margin: "0 0 18px", lineHeight: 1.5, fontStyle: "italic" }}>
            {article.subtitle}
          </p>
          <div style={{ fontSize: "0.75rem", color: t.muted, fontFamily: "system-ui, sans-serif", marginBottom: 22 }}>
            Págs. {article.pages} · {Math.max(1, Math.round(words / 220))} min de lectura
          </div>
          <div style={{ borderTop: `3px solid ${section.color}`, marginBottom: 32 }} />

          {paras.map((p, i) => (
            <Paragraph key={`${book.id}-${idx}-${i}`} para={p} dropCap={i === firstPlain} isNotes={isNotes}
                       color={section.color} t={t} onNote={goToNote} />
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 48,
                        paddingTop: 20, borderTop: `1px solid ${t.border}` }}>
            <button style={{ ...btn, visibility: idx > 0 ? "visible" : "hidden" }} onClick={() => select(idx - 1)}>
              ← {idx > 0 ? book.all[idx - 1].article.title : ""}
            </button>
            {idx < book.all.length - 1 ? (
              <button style={btn} onClick={() => select(idx + 1)}>{book.all[idx + 1].article.title} →</button>
            ) : pos.bookIdx < BOOKS.length - 1 ? (
              <button style={btn} onClick={() => selectBook(pos.bookIdx + 1)}>{BOOKS[pos.bookIdx + 1].shortTitle} →</button>
            ) : <span />}
          </div>
        </article>
      </main>
      {openNote && book.notesSection && (
        <NoteSheet n={openNote} text={book.notes[openNote]} color={book.notesSection.color}
                   t={t} onClose={() => setOpenNote(null)} />
      )}
      </div>
    </div>
  );
}
