import { useState, useEffect } from "react";

// Lector de dos libros de Juan Eslava Galán. Cada libro tiene secciones y cada sección,
// artículos con el texto íntegro. Los títulos de los bloques de «Los años del miedo» son de
// navegación, no del libro.
// Marcas de párrafo: "@foto " = pie de foto, "@anuncio " = anuncio de época, "@grito " = línea
// de diálogo corta, "@fecha " = fecha de escena, "@firma " = firma, "@cita " = documento o
// canción citados, "@sep" = separador;
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
      {
        title: "La hora de las pistolas",
        kicker: "Capítulo 3",
        subtitle: "12 y 13 de julio de 1936: asesinan al teniente Castillo y, en represalia, guardias de asalto secuestran y matan a Calvo Sotelo.",
        pages: "14–16",
        content: "@fecha Domingo, 12 de julio\n\nEl Dragón Rapide aterriza en el aeródromo militar de Espinho, Lisboa. Bolín se entrevista con José Sanjurjo, el general que capitaneará la sublevación. El militar ha madurado un programa político con el que piensa regenerar la patria: «Desaparición de los partidos políticos, barrer de las esferas nacionales todo tinglado liberal y destruir su sistema».\n\nEl avión despega para su último vuelo del día.\n\nEl general Alfredo Kindelán recibe la respuesta de Franco a su último telegrama en el que lo instaba, una vez más, a comprometerse con el alzamiento: «Geografía poco extensa», dice el texto. O sea, que el Franquito sigue dando largas y no se compromete con la rebelión. Hay que comunicárselo al Director. Kindelán le entrega el telegrama a Elena Medina, joven enlace de los conspiradores. Ella se lo cose en el forro del cinturón y parte para Pamplona.\n\nMientras el Dragón Rapide aterriza en el aeródromo de Casablanca anochece en Madrid. Los madrileños se reúnen en las terrazas de los puestos de agua de cebada a charlar y tomar el fresco. En la calle de Augusto Figueroa, el teniente de la Guardia de Asalto José Castillo se despide de su mujer, Consuelo Morales, y sale de su domicilio para dirigirse al cuartel de Pontejos, junto a la Puerta del Sol, donde instruye a las jóvenes milicias socialistas. Cuando Castillo alcanza la esquina de la calle de Fuencarral alguien dice a su espalda: «¡Ése es…!». El pistolero falangista Alfonso Gómez Cobián dispara sobre el teniente su pistola ametralladora. Herido de muerte, Castillo se agarra al transeúnte Fernando Cruz y lo arrastra en su caída. Mientras Cruz busca a tientas las gafas que ha perdido escucha murmurar a Castillo: «¡Mi mujer! ¡Llevadme con mi mujer!». En un taxi trasladan a Castillo al equipo quirúrgico de la calle de la Ternera, donde certifican su muerte. Una de las balas se le ha alojado en el corazón.\n\nLa capilla ardiente del teniente se instala en la Dirección General de Seguridad. Al pie de féretro, la joven viuda llora desconsoladamente. No hacía ni dos meses que se habían casado.\n\nA escasos metros, en el cuarto de banderas del cuartel de Pontejos, algunos compañeros y correligionarios del finado se conjuran para asesinar a algún significado derechista esa misma noche. A las órdenes de Fernando Condés, capitán de la Guardia Civil que viste de paisano, sacan del garaje la camioneta número 17. El guardia Orencio Bayo la conduce a través de las calles animadas de paseantes.\n\nLa víctima designada es el líder monárquico Goicoechea, pero no lo encuentran en su casa. Entonces se dirigen al domicilio del líder derechista Gil-Robles. También está ausente.\n\nCuando transitan por la calle de Velázquez, uno de los guardias recuerda que allí cerca vive Calvo Sotelo. Aparcan la camioneta junto a la acera, en el número 89. En el portal, una pareja de policías monta guardia.\n\nEn el cuarto piso viven Calvo Sotelo, su mujer, Enriqueta Grondona, sus hijos, dos chicos y dos chicas de edades comprendidas entre los nueve y los catorce años, la institutriz francesa Renée Pelus, la cocinera, la doncella y un mandadero. Después de escuchar la retransmisión radiofónica de La Boheme, Calvo Sotelo y su esposa se han retirado a su alcoba.\n\nEl capitán Condés se identifica ante los guardias del portal.\n\n—Sin novedad en el servicio, mi capitán —saluda el guardia más viejo.\n\nCondés y sus acompañantes, los guardias José del Rey, Victoriano Cuenca y otros dos de uniforme, suben al piso del político. Condés pulsa el timbre. La doncella abre la puerta.\n\n—¿El diputado Calvo Sotelo?\n\n—El señor está durmiendo.\n\n—Pues despiértele. Venimos a hacer un registro de parte de la Dirección General de Seguridad.\n\nLas criadas lo despiertan. Calvo Sotelo se pone un batín negro sobre el pijama y sale al recibidor.\n\nEl capitán Condés le muestra el carnet que lo acredita como capitán de la Guardia Civil.\n\n—¿Un registro a estas horas? —se extraña el político—. En fin, permítanme que prevenga a mi mujer para que no se alarme.\n\nCalvo Sotelo se asoma al balcón del comedor y pregunta a los guardias de la calle si realmente es la policía la que está a su puerta. Los guardias se lo confirman. Ve, además, la camioneta de la Guardia de Asalto.\n\nLos guardias registran someramente el piso.\n\n—Tiene que acompañarnos a la Dirección General de Seguridad —le advierte Condés.\n\n—Eso ya no —se resiste Calvo Sotelo—. Ningún ciudadano puede ser detenido sin una orden de la autoridad competente; pero yo, además, gozo de inmunidad parlamentaria como diputado. Para detenerme es necesario que un juez pida un suplicatorio a las Cortes y que éstas lo concedan.\n\nCalvo Sotelo intenta utilizar el teléfono, pero un guardia arranca el cable de un tirón.\n\nSe terminaron las contemplaciones. Calvo Sotelo comprende. Se deja conducir al dormitorio y se pone ropa de calle. A todo trance quiere alejar a aquella gente de su familia.\n\nEscoltado por los guardias, el diputado sale a la calle. Antes de subir a la camioneta dice adiós con la mano a su esposa, que presencia la escena desde un balcón. Después se sienta donde le indican, en el tercer banco del vehículo, entre dos guardias.\n\nCondés se acomoda junto al conductor y le ordena:\n\n—¡A la Dirección General de Seguridad!\n\nEn el cruce de la calle de Ayala, el pistolero Victoriano Cuenca, que se ha situado detrás de Calvo Sotelo, empuña su pistola Astra del 9 largo y le descerraja un tiro en la nuca. Cae Calvo Sotelo hacia la derecha. El pistolero se inclina sobre él y le dispara una segunda bala.\n\n—¿Eso ha sido un tiro? —inquiere el conductor.\n\nLos otros guardan silencio.\n\n—Ahora, al cementerio del Este —ordena Condés.\n\nEn el camposanto, los asesinos entregan el cadáver a dos vigilantes del cementerio.\n\n—Lo hemos encontrado en la calle.\n\nMientras tanto, la familia del secuestrado está telefoneando a amigos y correligionarios para denunciar la detención del líder. En la Dirección General de Seguridad niegan haber enviado a un piquete de guardias para detenerlo.\n\nPasan todavía unas horas antes de que se esclarezca lo ocurrido. Finalmente se divulga la noticia: han asesinado a Calvo Sotelo.\n\n—Este atentado significa la guerra —comenta desolado Martínez Barrio.\n\nSigue un largo y tenso día de conciliábulos y reuniones. El general Mola envía mensajes cifrados fijando el alzamiento para el día 17 en Marruecos y el 18 y el 19 en la Península.",
      },
      {
        title: "Alea jacta est",
        kicker: "Capítulo 4",
        subtitle: "Del 14 al 19 de julio: Franco vuela a Tetuán, Queipo toma Sevilla, el gobierno se hunde y reparte armas al pueblo.",
        pages: "17–25",
        content: "@fecha Martes, 14 de julio\n\nEl general Franco asiste a su clase de inglés, como todos los días, pero esta vez la profesora lo nota «diez años más viejo. Me pareció otro hombre. Era evidente que no había dormido en toda la noche».\n\nEn Madrid hace calor y no corre una brizna de aire que refresque el ambiente. A media mañana entierran al teniente Castillo en el cementerio civil. Decenas de camaradas rodean el féretro puño en alto, en medio de un impresionante silencio roto solamente por los lamentos de la viuda. Por la tarde entierran a Calvo Sotelo en el cementerio católico, al otro lado de la tapia, entre gritos indignados de sus correligionarios, que abuchean a los parlamentarios presentes.\n\nDos Españas separadas por una tapia.\n\n@fecha Miércoles, 15 de julio\n\nEn las Cortes se celebra un tenso debate parlamentario. «Los portavoces de las derechas declaran la guerra a las izquierdas» (R. de la Cierva).\n\nAntes de que acabe esa guerra, setenta parlamentarios de distinto signo habrán muerto frente a los pelotones de fusilamiento.\n\nEl diputado socialista Indalecio Prieto interroga al capitán Condés sobre su participación en el asesinato de Calvo Sotelo. Condés la admite, «abrumado por la vergüenza, la desesperación y el deshonor», y se confiesa al borde del suicidio. Prieto le aconseja que reserve su vida para ofrecerla en la guerra civil que se avecina. Un mes más tarde, Condés moriría defendiendo los pasos de Somosierra en compañía de Victoriano Cuenca, el pistolero que disparó contra Calvo Sotelo.\n\n@fecha Jueves, 16 de julio\nSanta Cruz de Tenerife. Diez de la mañana\n\nEl comandante Hugh Pollard, el amigo de Bolín llegado en el Dragón Rapide, visita al doctor Luis Gabarda en la clínica Costa.\n\n—Galicia saluda a Francia —le dice.\n\nEs la consigna que indica que el avión de Franco ha llegado.\n\nA la misma hora, el general Amadeo Balmes, comandante militar de Gran Canaria, muere de un balazo en el estómago al cargar su pistola durante un ejercicio de tiro. Ésa es la explicación oficial. ¿Se ha suicidado? ¿Lo han suicidado los golpistas porque se resistía a rebelarse? «Hoy es virtualmente imposible afirmar si su muerte fue un accidente, un suicidio o un asesinato» (Paul Preston).\n\nAnochece. El Tercer Tabor (batallón) del Quinto Grupo de Regulares de Alhucemas camina silenciosamente por el desierto. Pernoctarán en la alcazaba de Snada y en cuanto claree el día marcharán sobre Melilla y ocuparán la estación telegráfica y telefónica de Villa Sanjurjo. Es el primer acto de guerra.\n\nMola medita en un despacho del Gobierno Militar de Pamplona adornado con tallas, que representan antiguos soldados de los tercios de Flandes, con barba y morrión. La sublevación está en marcha. El alzamiento es ya irreversible.\n\n@fecha Alea jacta est.\n\nSin embargo, las noticias procedentes de las guarniciones de Madrid y Barcelona son descorazonadoras. Se confirma su sospecha: el alzamiento fracasará en las dos ciudades más importantes del país.\n\n@fecha Viernes, 17 de julio\n\nMola madruga. Confirma el alzamiento mediante telegramas cifrados a Franco, a Sanjurjo y al teniente coronel Seguí, su enlace en Melilla.\n\nLa asistencia a los funerales y entierro del general Amadeo Balmes suministra a Francisco Franco un pretexto excelente para trasladarse de Santa Cruz de Tenerife a Las Palmas, donde lo aguarda el Dragón Rapide en el aeropuerto de Gando.\n\nLa noche anterior Franco ha enviado a su familia a Las Palmas a bordo del barco correo Viera y Clavijo. Integran la expedición doña Carmen, su hija; el primo y ayudante de Franco, teniente coronel Franco Salgado-Araujo; el comandante Martínez Fuset, y cinco escoltas.\n\nDespués del entierro del general Balmes, música y crespones negros, féretro cubierto con la bandera que juró servir, Franco invierte la tarde en pasear con su esposa, doña Carmen Polo. Mientras tanto, en Melilla, los sublevados arrestan al delegado gubernativo y destituyen a los jefes leales al gobierno. Unidades rebeldes ocupan Capitanía y el resto de los edificios oficiales. Cuadrillas falangistas detienen a dirigentes del Frente Popular.\n\n@fecha Madrid\n\nA las seis y media de la tarde, el coronel Hernández Saravia penetra en el despacho del secretario del presidente de la República, Santos Martínez Saura, en el palacio de Oriente.\n\n—¡Santos, los militares se han sublevado en Melilla! ¡Hay que comunicárselo al presidente!\n\nManuel Azaña está en la quinta de El Pardo, su palacete de veraneo en la Casa de Campo. De pronto, al secretario lo asalta la sospecha de que puedan secuestrarlo allí. Hace días, unos cuantos militares sospechosos estuvieron comprobando una hipotética avería de la radio. Quizá espiaban el funcionamiento de los servicios de seguridad en el entorno presidencial. Azaña comprende que debe trasladarse cuanto antes a Madrid. La quinta ha dejado de ser un lugar seguro para él y para su familia. Recogen a su esposa, doña Dolores, que visitaba a unos sobrinos en el Paular de Guadarrama.\n\nAtropelladamente, la familia del presidente y el servicio se trasladan a Madrid, al Palacio Real o de Oriente, que ahora se llama Palacio Nacional.\n\nDos horas después, en el palacio, bajo los techos decorados con pinturas venecianas de Giambattista Tiepolo, el presidente Azaña se reúne con el jefe de Gobierno, Casares Quiroga, y con los líderes de los partidos políticos fieles a la República, Prieto, Largo Caballero, Martínez Barrio y otros.\n\n—¡Te advertí del cuartelazo! —espeta Azaña a Casares—. ¡Ya lo tenemos!\n\nCasares Quiroga calla. Quizá recuerde ahora la salida que tuvo con unos periodistas que, ya de noche, le preguntaban sobre las posibilidades de un golpe de Estado:\n\n—¡Ustedes me aseguran que se van a levantar los militares! Muy bien, señores, que se levanten. Yo, en cambio, me voy a acostar.\n\nEl pobre Casares Quiroga no sabe qué decir. Le viene ancho aquello al personaje «torpe y a veces ciego por su timidez».\n\nEn el Campo del Moro se detienen unos autobuses municipales de los que desciende un destacamento de la Guardia Civil enviado para proteger al presidente. Cunde el nerviosismo entre algunos colaboradores de Azaña. Hay motivos para sospechar que el oficial al mando, el capitán Bermúdez de Castro, esté comprometido con la insurrección.\n\nEl gobierno discute la situación sin llegar a ningún acuerdo. Las tropas de Madrid quedan acuarteladas, en tensa espera.\n\nLa noche del 17 de julio de 1936 Juan Castro, de veintiún años, labrador, duerme al raso en una era del cortijo «Macarena», a veinte kilómetros de Jaén. A eso de las tres de la madrugada se despierta, abre los ojos y ve el espectáculo increíblemente hermoso de una lluvia de estrellas. Piensa en despertar a sus hermanos que duermen al lado, pero cuando se dispone a hacerlo las estrellas se sosiegan. Les echa un pienso a los mulos y se vuelve a dormir.\n\nMuchos años después, ya anciano, pensará que aquella lluvia de estrellas fue premonitoria.\n\nFranco se hospeda en el hotel Madrid de Las Palmas. A las tres y pico de la madrugada, un oficial de la vecina Comandancia le entrega el radiograma del general Mola. Es la señal. Franco se ha afeitado el bigote. Viajará de incógnito con el pasaporte diplomático de José Antonio Sangróniz, que no tiene bigote. Abandona el hotel (olvida pagar la factura) y se hace cargo del mando. Los rebeldes han ocupado los puestos clave del archipiélago. Se recibe una llamada del subsecretario de la Guerra, que Franco ignora. Cuando amanece, Franco envía a Melilla un radiograma: «Gloria al heroico Ejército de África. España sobre todo. Recibid saludo entusiasta de estas guarniciones que se unen a vosotros y demás compañeros Península en estos momentos heroicos. Fe ciega en el triunfo. Viva España con honor. General Franco».\n\nA media mañana, Franco deja a su familia y acompañantes a bordo del barco que los trasladará a Francia. Después, de paisano, embarca en un remolcador que lo lleva al aeródromo de Gando, donde aguarda el Dragón Rapide. El mecánico acaba de revisar y engrasar el motor. Listos para partir. Acompaña a Franco el general Luis Orgaz.\n\nEl piloto Bebb, halagado por su papel en esta historia, sucumbirá a la tentación de adornarla con detalles románticos que no corresponden a la realidad.\n\n«Vi llegar a grandes pasos decididos a un hombre joven que llevaba anudado a la cintura el fajín de jefe y cuyo rostro imberbe iba muy pronto a propalarse en millones y millones de ejemplares por los diarios del mundo entero.\n\n»—General Franco —me dijo tendiéndome la mano.\n\n»Sus cabellos negros muy ensortijados, entre los cuales se mezclaban algunos hilos de plata, desbordaban el gorro tradicional sobre el que estaban bordados los dos bastones, insignia de su grado.\n\n»—En marcha para Casablanca.\n\n»Alguien dijo:\n\n»—¿Y el uniforme, mi General?\n\n»—Ya lo he dicho. En marcha. No hay que perder ni un minuto.\n\n»“Su uniforme”… ¿Qué había querido decir este hombre? No tuve tiempo para preguntármelo, pues, en efecto, mientras volábamos sobre las olas del Atlántico, el general se quitó el uniforme, encerró sus efectos en una maleta y, después de meter en ella también los papeles que llevaba sobre sí, la arrojó al mar. Inmediatamente le vi ponerse un jaique y un albornoz y arrollarse a la cabeza un turbante. Se le hubiera creído un verdadero árabe salido de los zocos de Marrakech.\n\nEl Dragón Rapide reposta en Agadir y desde allí se dirige a Casablanca, donde pernocta la noche del día 18. Antes de que amanezca, en medio de una niebla algodonosa, el aeroplano despega (como en la última escena de la película Casablanca), para aterrizar, ya de mañana, en el aeródromo de Tetuán. Franco le ordena al piloto que efectúe una pasada volando bajo. Sobre la pista reconoce al coronel Sáenz de Buruaga, sonriente y relajado, rodeado de legionarios. Sí, parece que el aeródromo está en manos de los rebeldes. Franco le ordena a Bebb que aterrice.\n\nUnas horas después el general se reúne en Ceuta con el consejo de jefes para discutir la situación. A escasa distancia, en una sala del hospital O’Donell se apilan los cadáveres de los capitanes y tenientes fusilados por mantenerse fieles a la República. Un cabo sanitario les va arrancando con un bisturí las estrellas de los uniformes.\n\nFranco y sus conmilitones coinciden en que lo más urgente es arbitrar los medios para transportar las tropas africanas a la Península, el paso del Estrecho.\n\nEn alta mar, cinco petroleros de la Texaco norteamericana, que traen gasolina para la CAMPSA, reciben la orden de alterar el rumbo y dirigirse a puertos dominados por los sublevados. La orden ha partido del dirigente de la compañía Torkid Rieber, noruego nacionalizado estadounidense que mantiene contactos con el millonario Juan March. Algunos directivos de la compañía objetan sobre la solvencia de los rebeldes, pero Rieber los tranquiliza: «Don’t worry about payment». (No se preocupen del pago).\n\nEn total, la Texaco enviará a Franco, a lo largo de la guerra, dos millones de toneladas de gasolina valoradas en seis millones de dólares.\n\nUna guerra moderna se hace con acero y gasolina. Ya tienen la gasolina.\n\n@fecha Sábado, 18 de julio\nSevilla\n\nDos de la madrugada. Un telegrama cifrado de Madrid anuncia la llegada de tres aviones que repostarán y cargarán bombas en la base aérea de Tablada. La escuadrilla va a bombardear a los rebeldes de África.\n\nUno de los oficiales de la base, partidario de los rebeldes, el capitán Carlos Martínez Vara del Rey, entretiene la espera en el bar de oficiales. Cuando aterriza el primer avión, un DC-2 civil requisado por la República, y comienza a cargar las bombas, Vara del Rey se acerca en su coche particular, le arrebata el mosquetón a uno de los centinelas y, apoyado en el capó del automóvil, la emprende a tiros con los motores del avión. Los tripulantes desenfundan sus pistolas y repelen la agresión. Vara del Rey, herido, se refugia en el bar de suboficiales. El comandante de la base, Martínez Estévez, lo rescata y lo arresta.\n\nA media mañana, el general Villa Abrile, jefe de la Segunda División con sede en Sevilla, se reúne con sus jefes en el cuartel de la división para discutir los últimos acontecimientos. Villa Abrile se manifiesta leal a la República. Antes, los conspiradores, dirigidos por el comandante José Cuesta Monereo, han introducido al general golpista Queipo de Llano en el cuartel sin que nadie lo advierta, y lo han ocultado en la habitación de soltero del capitán Manuel González Flórez, falangista.\n\nEn la reunión, el comandante Cuesta y otros oficiales se insubordinan contra el general Villa Abrile y se manifiestan partidarios de la rebelión militar. Mientras discuten con el general, el capitán González Flórez avisa a Queipo de Llano que es el momento de intervenir. Queipo acude ante Villa Abrile, quien, al verlo, pregunta airado:\n\n—Tú, ¿qué haces aquí?\n\nQueipo, pistola en mano, destituye al general Villa Abrile y a los oficiales fieles al gobierno, decreta la ley marcial y toma el mando de las tropas.\n\nEl capitán Alfonso Ortí Meléndez-Valdés, falangista, ocupa la Maestranza de Artillería, donde se almacenan más de veinticinco mil fusiles y decenas de ametralladoras. Cuando los obreros y milicianos de Triana acuden en busca de las armas, los reciben a tiros: once muertos y docenas de heridos.\n\nPor la tarde, las tropas sublevadas se enfrentan a la Guardia de Asalto que custodia el edificio de la Telefónica y el hotel Inglaterra, junto al Gobierno Civil, en el centro de la ciudad. Tras cinco horas de tiroteo, en las que los rebeldes cañonean la Telefónica y el hotel Inglaterra, el gobernador republicano se rinde.\n\nAnochece. Queipo de Llano, ya dueño de la situación, se dirige por radio al pueblo de Sevilla. El general golpista exagera las fuerzas de las que dispone para amedrentar a los miles de milicianos que pululan por los barrios obreros de la capital, mucho pico y pala, muchas barricadas, pero pocos fusiles.\n\nQueipo de Llano telefonea a la base de Tablada e insta a su jefe, Martínez Estévez, a sumarse a la rebelión. El jefe de la base, comprendiendo que Sevilla está en manos de los sublevados, opta por arrestarse él mismo y cede el mando de Tablada a su inmediato inferior, Azaola, que está con los rebeldes.\n\nAl día siguiente comienzan a llegar legionarios de África en el primer puente aéreo de la historia, inaugurado con dos aviones Fokker y un Dornier españoles. No son muchos, pero los suficientes para reducir, en los días que siguen, a los milicianos de Triana y los barrios obreros del norte de la ciudad.\n\nEn toda España se preguntan: ¿qué hace el gobierno?\n\nEl gobierno lleva meses esperando la cuartelada, pero, a pesar de ello, se queda paralizado como el gazapo enfrentado a la fría mirada de la serpiente un segundo antes de que lo engulla.\n\n«El Gobierno, aterrado, gira sobre sí mismo» (Martínez Barrio). Las noticias de las sucesivas sublevaciones de las guarniciones de las provincias caen como mazazos en Madrid.\n\nAños más tarde Azaña recordará: «El Estado se derrumbó el 17 de julio, el ejército desapareció, las armas, o no las había o fueron a donde no deberían estar; la autoridad gubernativa era por todas partes trabada y combatida y desobedecida (…) el que más y el que menos engrasaba el coche para fugarse».\n\nLos sublevados dominan algunas capitales andaluzas (Cádiz, Jerez, Granada, Huelva y Córdoba). Las bases navales de Cádiz y El Ferrol están en manos de los rebeldes, pero Cartagena permanece fiel al gobierno, así como la mayor parte de la escuadra.\n\nUn guardia de la prisión de Alicante observa que el interno José Antonio Primo de Rivera, el líder falangista, ha hecho la maleta y recogido sus papeles.\n\nA media tarde, los representantes de los partidos del Frente Popular se reúnen en un despacho del Ministerio de la Guerra, tomado por oficiales de la UMRA. Se discute la conveniencia de armar a las milicias del pueblo.\n\nEl jefe del ejecutivo, Santiago Casares Quiroga, dimite aquella noche. Lo abruma la responsabilidad de no haber tomado medidas más severas para evitar la insurrección. Se une a las tropas que marchan al Alto del León para cortar el paso a los sublevados que previsiblemente marcharán contra Madrid.\n\nAzaña inicia las consultas para formar un nuevo gobierno. Va a ser una noche muy larga. Prieto rechaza el ofrecimiento de Azaña. Su aceptación complicaría la política interna del partido socialista, escindido en dos tendencias.\n\nAzaña encarga al moderado Diego Martínez Barrio la formación de un gobierno centrista que atempere los ánimos de las izquierdas y de las derechas, un gobierno que integre a cuantos partidos respetan la Constitución «desde las derechas republicanas a los comunistas». Con este gobierno ideado para amansar a la derecha, Martínez Barrio se dirige a los sediciosos para que reconsideren su actitud. Telefonea al general Mola.\n\n—General, me han encargado que forme gobierno y he aceptado. Solamente me mueve una consideración: la de evitar los horrores de una guerra civil. Usted, por su historial y por su posición, puede contribuir a esa tarea. (…)\n\n—Con el Frente Popular vigente, con los partidos activos, con las Cortes abiertas, no hay, no puede haber, gobierno alguno capaz de restablecer la paz social, de garantizar el orden público y de reintegrar a España a su tranquilidad —responde el general.\n\n—Con las Cortes abiertas y el funcionamiento normal de todas las instituciones de la República estoy yo dispuesto a conseguir lo que usted cree imposible. Pero el intento necesita de la obediencia de los cuerpos armados (…) espero que en este camino no me falte su concurso.\n\n—No, no es posible, señor Martínez Barrio.\n\n—¿Mide usted bien la responsabilidad que contrae?\n\n—Sí, pero ya no me puedo volver atrás (…) es tarde, muy tarde.\n\n—No insisto más. Lamento su conducta que tantos males acarrea a la patria y tan pocos laureles a su fama.\n\n—¡Qué le vamos a hacer! Es tarde, muy tarde…\n\nY cuelgan.\n\nMartínez Barrio telefonea a Largo Caballero, que le manifiesta también que ya es tarde para componendas. Ha llegado el momento de dirimir las diferencias por las armas.\n\nEl general Cabanellas, al que Martínez Barrio ruega que no se una a los sublevados, le responde: «No hay nada que hacer».\n\nMientras tanto se producen manifestaciones callejeras contra el gobierno propuesto por Martínez Barrio, al que motejan de «traidor, vendido y fascista enmascarado». Martínez Barrio, desolado, dimite. Azaña, después de una noche de intensas consultas y componendas, nombra nuevo jefe de gobierno a su amigo y correligionario José Giral, prestigioso químico que ha sido diputado y ministro de Marina.\n\nBernardo Afán Martínez, escribiente del Ministerio de la Guerra y socialista, mecanografía un decreto en su máquina Underwood, grande, negra y brillante. En medio del texto se queda parado. Llama a su primo Anselmo, que es ujier, y le lee:\n\n—«Quedan licenciadas las tropas cuyos cuadros de mando se han colocado frente a la legalidad republicana».\n\nBernardo observa:\n\n—Eso equivale a liquidar al ejército. ¿Quién defenderá a la República?\n\n—¡Nosotros, los republicanos, echándole cojones! —asevera el primo.\n\nBernardo mira con aprensión la alta puerta del despacho presidencial tras la que se cuece el futuro.\n\nLa situación se le ha escapado de las manos al gobierno. Una rebelión militar requiere una solución militar, pero el gobierno no se fía de la parte del ejército que permanece fiel. ¿Fiel por cuánto tiempo? Disuelve las unidades en las que algún oficial se haya puesto de parte de los rebeldes, que son casi todas, y reparte armas al pueblo para que forme sus propias milicias y defienda el orden constitucional.\n\nEl gobierno confía la defensa del orden constitucional a las milicias sindicales e izquierdistas. Sólo en Madrid setenta y dos mil fusiles van a parar a las manos del pueblo, sin control del gobierno. Además de milicianos idealistas, comprometidos en la construcción de una sociedad más justa, se arman delincuentes y marginados sociales a los que sólo mueve el afán de venganza y la codicia de los bienes de los ricos. De pronto, miles de milicianos exaltados, sin formación militar, tienen a su disposición los medios para dirimir a lo vivo la lucha de clases.\n\nGiral no sólo fía en el heroísmo del pueblo en armas. La misma noche del 19 de julio envía un telegrama a Léon Blum, presidente francés:\n\n@cita Hemos sido sorprendidos por un golpe militar peligroso. Os pedimos que nos ayudéis inmediatamente con armas y aviones.\nFraternalmente vuestro,\n→ GIRAL",
      },
      {
        title: "Tanta violencia como sea menester",
        kicker: "Capítulo 5",
        subtitle: "El golpe fracasa en Madrid y Barcelona y triunfa en media España. Franco pide aviones a Italia y Alemania.",
        pages: "26–30",
        content: "@fecha Madrid\n\nLas instrucciones del Director, el general Mola, son ocupar los centros de gobierno usando «tanta violencia como sea menester», pero los sublevados de Madrid, que no las tienen todas consigo, se limitan a concentrarse en el cuartel de la Montaña y en el campamento de Carabanchel, en una modosa actitud más cercana a la desobediencia civil que a la rebelión militar.\n\nMientras tanto, los oficiales leales al gobierno, más decididos, ocupan las dependencias del Ministerio de la Guerra y otros edificios oficiales, entre ellos la estación de radio de la Marina, sita en la Ciudad Lineal. Desde allí, el oficial radiotelegrafista Benjamín Balboa cursa un comunicado a la flota denunciando las intenciones golpistas de gran parte de los jefes. La marinería, que está muy infiltrada de células anarquistas y comunistas, se amotina, se declara fiel a la República, detiene a los oficiales y a muchos los asesina. En el acorazado Jaime I se forma un comité de la Compañía de Navío que se amotina cuando navegan a la altura del cabo de Montego. En el intercambio de disparos entre los oficiales y los amotinados mueren dos oficiales. El comité, ya dueño del barco, informa al Ministerio de Marina y pide instrucciones: «¿Qué hacemos con los cadáveres?».\n\nLa respuesta no tarda en llegar: «Con respetuosa solemnidad den fondo a los cadáveres anotando situación».\n\nEn los otros barcos ocurre algo parecido. En su mayoría quedan en el lado republicano, pero desprovistos de mandos y técnicos. Esta carencia de oficiales afectará al funcionamiento de la escuadra republicana durante la guerra.\n\nMientras tanto, en Madrid, los milicianos estrenan sus flamantes fusiles tiroteando el cuartel de la Montaña. Los derechistas sitiados en el edificio devuelven el fuego desde las ventanas. El paqueo no cesa por la noche. Mientras un altavoz insta a los rebeldes a la rendición, un avión sobrevuela el cuartel y arroja octavillas con el mismo mensaje. Cuando amanece, los sitiadores cañonean el edificio con tres piezas que manejan diestramente los artilleros Antonio y Gabriel Vidal, padre e hijo. Un obús penetra en el centro de mando y hiere al general Fanjul, cabeza de la rebelión. En las calles adyacentes, la gente vitorea a tres carros de combate que aparecen para reforzar a los sitiadores. La resistencia continúa, pero la moral de los sublevados decae. Se producen enconadas discusiones entre los que quieren rendirse y los que se obstinan en resistir persuadidos de la inminente llegada de las columnas de Mola. Después de otra noche de paqueos, al amanecer, los partidarios de la rendición agitan banderas blancas en algunas ventanas.\n\nLos milicianos prorrumpen en vivas. Los más entusiastas abandonan sus parapetos y corren a ocupar el cuartel, pero son abatidos a tiros desde las ventanas. Los partidarios de prolongar la resistencia no han advertido las banderas blancas o acaso han preferido ignorarlas. Los milicianos se creen víctimas de una innoble celada. Cunde la ira. Horas más tarde se rinde el cuartel, esta vez definitivamente. Los sitiadores irrumpen furiosos y vengan a sus muertos asesinando a unos doscientos cincuenta sublevados. Una de las fotografías más impresionantes de la guerra es la del patio del cuartel sembrado de cadáveres en la mañana del día 21 de julio.\n\nEl capitán republicano Orad de la Torre recorre el cuartel tomado. En una de las dependencias encuentra a varios oficiales sentados. «A la cabecera, un comandante con el corazón atravesado por un balazo. Los otros, desplomados sobre sus sillas con heridas parecidas. Supuse que al ver el cuartel perdido se habían sentado y se habían suicidado. Conocía a algunos, compañeros míos de armas…».\n\nVítores en el patio. En una de las dependencias de la Montaña, los milicianos han encontrado un depósito de cuarenta y cinco mil cerrojos, los que faltaban a los fusiles almacenados en el parque. Cunde la euforia y la fe en el triunfo.\n\nEn cuanto al otro cuartel sublevado, el campamento de Carabanchel, los militares leales se rebelan contra los rebeldes y los reducen.\n\n«Mi hermana y su marido llegan aterrados al piso familiar —recuerda Felicidad Blanc—. Unas mujeres se han parado ante ellos gritando: “Hay que acabar con los señoritos”. Mi madre les dice que se queden en casa. Todos reunidos estaremos más seguros. El portero de enfrente, el de Radio España, nos trae noticias: “Franco se ha sublevado en África”. Tenemos la radio puesta todo el día, se oye tocar la música de La Verbena de la Paloma y partes constantes con noticias contradictorias. La doncella nos sirve la mesa igual que siempre, con su uniforme impecable, cofia y delantal almidonado. Oigo decirle a la cocinera, que es de izquierdas: “Ganas tienes de vestirte de mamarracho”. Mi padre ha llamado desde el hospital: no puede venir, no sale del quirófano, no cesan de entrar heridos.»\n\nEn Barcelona, la Guardia de Asalto y la Guardia Civil, fieles a la República, aplastan la rebelión con ayuda de las milicias de la CNT. Los líderes anarquistas Durruti, Sanz y García Oliver, vencedores de la jornada, irrumpen con sus ropas sudadas, sus botas polvorientas y sus armas aún calientes en el lujoso despacho del presidente de la Generalitat, Lluís Companys, líder de un partido republicano burgués.\n\nCompanys les ofrece asiento y va directo al grano en un calculado golpe de efecto:\n\n—Sois los dueños de Barcelona y de Cataluña… la habéis conquistado y todo es vuestro. Si no me necesitáis o no me queréis como presidente de Cataluña decídmelo en seguida. Si creéis que en mi puesto, con los hombres de mi partido, mi nombre y mi prestigio, puedo ser útil en la lucha… podéis contar conmigo y con mi lealtad como hombre y como político.\n\nLos anarquistas, que esperaban que el político burgués se aferrara a la poltrona, se miran sorprendidos. No sabrían qué hacer con el poder que han conquistado. Llevan toda la vida despotricando contra los gobiernos, ¿cómo van a formar ellos un gobierno? Mejor dejar al que hay, que administre.\n\nConfirmado en su puesto, Companys les imparte un cursillo acelerado de alta política. Lo que ahora interesa a la revolución es que los anarquistas se unan al Frente Popular (al que nunca antes pertenecieron) y creen todos juntos un Comité de Milicias Antifascistas para encauzar la revolución al tiempo que se defiende a la República. Los anarquistas dicen amén.\n\nEn Galicia triunfa el alzamiento. En la base naval de El Ferrol, los marineros izquierdistas que intentan impedir la rebelión terminan colgados de las vergas.\n\nEn Oviedo, el comandante Aranda, un gordito de aspecto insignificante, se finge leal a la República y persuade a los mineros concentrados en la capital para que se embarquen en un tren que saldrá inmediatamente en ayuda de Madrid. Cuando el tren traspone, arroja la careta bonachona y se une a la rebelión militar.\n\nEn San Sebastián, los militares y derechistas sublevados se refugian en el hotel María Cristina, rodeado por fuerzas leales.\n\nEn Pamplona, los requetés se concentran con sus uniformes y sus boinas rojas en la plaza del Castillo. Suenan los compases del Oriamendi coreado por los voluntarios:\n\n@cita Por Dios, la Patria y el Rey\nCarlistas con banderas,\nPor Dios por la Patria y el Rey\nCarlistas aurrerá\nLucharemos todos juntos,\nTodos juntos en unión,\nDefendiendo la Bandera\nDe la Santa Tradición.\nCueste lo que cueste\nSe ha de conseguir\nQue venga el rey muy pronto\nA la corte de Madrid…\n\nEl rey al que se refieren no es Alfonso XIII, sino el pretendiente carlista, la otra rama de la familia desposeída del trono hace cien años.\n\nEn Aragón se subleva Cabanellas, el general de la barba blanca, decano del ejército.\n\nLa costa mediterránea, desde Francia hasta Málaga, se mantiene leal a la República.\n\nEn Andalucía, una columna de diez o doce camiones de milicianos procedentes de Huelva, en su mayoría mineros y campesinos, se dispone a recuperar Sevilla. A las puertas de la ciudad, en la Pañoleta, los mineros caen en una celada que les tienden los rebeldes. Alcanzada por los disparos estalla la dinamita que transportan. Un camión vuela por los aires. Los milicianos huyen aturdidos, dejando muchos muertos en el campo. Los rebeldes hacen setenta prisioneros, que fusilarán días después tras Consejo de Guerra sumarísimo.\n\nEn el resto de España, el golpe militar ha fracasado. Los sublevados mantienen algunas posiciones, pero su situación es apurada. Las principales ciudades, Madrid, Barcelona, Valencia, Bilbao, se mantienen fieles al gobierno. La única esperanza de los golpistas reside en las tropas de África, la élite del ejército español, cuarenta mil soldados curtidos en las guerras de Marruecos. Pero con la mar por medio y la escuadra en manos de la República, el transporte de esas tropas a la Península no parece factible.\n\nFranco no pierde el tiempo. Hay que solicitar ayuda a los países que pueden simpatizar con la causa rebelde. El 19 de julio Luis Bolín regresa a la Península en el Dragón Rapide con un mensaje autógrafo de Franco. La lista de la compra, escrita en un folio con el membrete del aeródromo de Tetuán, expresa por sí misma la urgencia de la petición:\n\n@cita Autorizo a don Luis Antonio Bolín para gestionar en Inglaterra, Alemania o Italia la compra urgente para el Ejército español no marxista de aviones y material.\nTetuán, 19 de julio de 1936.\n→ El General Jefe, FRANCISCO FRANCO\nInteresados en 12 bombarderos y tres cazas con abundante provisión de bombas de 50, 100 y 500 kilos.\n\nBolín hace escala en Lisboa y se entrevista con el general Sanjurjo en Estoril. El general, que está haciendo las maletas para volar a España a encabezar la rebelión, añade de su puño y letra en la misiva de Franco:\n\n@cita Conforme con lo que autoriza el general Franco.\n→ JOSÉ SANJURJO\n\nAl día siguiente, Bolín aterriza en Biarritz, donde lo esperan Luca de Tena y el financiero Juan March. Desde allí vuela hasta Marsella para proseguir, en vuelo comercial, hasta Roma. La entrevista con el conde Galeazzo Ciano, ministro de Exteriores y yerno de Mussolini, se salda con un fracaso. El día 23 el funcionario de Exteriores Filippo Infuso comunica que Italia no ayudará a los rebeldes españoles.",
      },
      {
        title: "El maletón de Sanjurjo",
        kicker: "Capítulo 6",
        subtitle: "Sanjurjo muere al despegar con su equipaje de gala, Hitler decide ayudar a Franco y Mussolini envía los Savoia.",
        pages: "31–35",
        content: "En el aeropuerto de Santa Cruz, cercano a Lisboa, aterriza la avioneta Puss Moth del piloto y activista monárquico Juan Antonio Ansaldo, que debe conducir a Sanjurjo a España. La mañana siguiente amanece neblinosa. Ansaldo despega de nuevo y aterriza en un llano herboso de Cascaes, próximo a la famosa Boca do Inferno, donde lo espera el general rodeado de amigos y correligionarios que quieren asistir al histórico momento. Ansaldo observa la abultada maleta que a duras penas arrastra el asistente del general.\n\n—Va a ser demasiado peso para la avioneta —objeta—. Llevamos el depósito a tope de gasolina y la pista es corta y acaba en árboles.\n\n—La maleta tiene que ir —replica el ayudante de Sanjurjo—. Contiene los uniformes de gala del general y sus condecoraciones. ¡No va a llegar a Burgos, en vísperas de la entrada triunfal en Madrid, sin los uniformes!\n\nAnsaldo se resigna. Acomodan el maletón en el espacio de carga y suben al aparato. Lastrada con ese fardo, y con el general, que también pesa lo suyo, la aeronave se desliza por el prado herboso. El piloto acelera el motor al máximo mientras retiene el aparato en tierra, la palanca adelantada, para que, al tirar de ella bruscamente hacia atrás, la potencia acumulada lo catapulte en el aire y le permita ganar altura en pocos segundos. Casi lo consigue: la avioneta se eleva sobre la pista, pero las ruedas tropiezan en la copa de un árbol.\n\nUna de las distinguidas señoras del comité de despedida grita. Los caballeros se adelantan. La avioneta pierde altura. El piloto intenta un aterrizaje forzoso en el campo vecino, pero se estrella contra una cerca de piedra. Sanjurjo muere en el acto al golpearse la cabeza contra una barra de la carlinga. Ansaldo sobrevive.\n\nEsa noche, en Lisboa, el marqués de Quintanar acude a la capilla ardiente en la que se vela el cadáver del general golpista: «¡Sanjurjo ha muerto! —exclama—. ¡Viva Franco!».\n\nPalabras proféticas.\n\nSanjurjo ha muerto, pero Franco, más vivo que nunca, mueve los hilos del golpe de Estado con prudencia y diligencia. El ABC de Sevilla denomina a la rebelión militar «Cruzada en defensa de España», y unos días más tarde llamará a Franco «Caudillo».\n\nFranco, mientras tanto, se afana en acrecentar sus medios y llama a la puerta de Alemania. El teniente coronel español Beigbeder, conocido en Berlín porque ha sido agregado militar en aquella embajada, remite un telegrama urgente al agregado militar alemán en París que es amigo suyo:\n\n@cita El general Franco y el coronel Beigbeder presentan sus respetos a su amigo el ilustrísimo general Kühlenthal, le informan del nuevo Gobierno Nacional de España y le ruegan envíe diez aviones de transporte de tropas de máxima capacidad por mediación de empresas privadas alemanas. Los aviones pueden venir pilotados por tripulación alemana a cualquier aeródromo del Marruecos Español. El contrato se firmará más tarde. ¡Muy urgente! Bajo palabra del general Franco y de España.\n\nTambién Queipo de Llano y Mola solicitan ayuda alemana. Mola envía a Berlín al marqués de Portago con una carta avalada por el general Cabanellas, presidente del Comité de Defensa, en la que solicita treinta aviones que, sugiere, podría recibir a través de Portugal. Queipo, por su parte, cursa su petición con ayuda de Fiessler, delegado de la Luft Hansa en Sevilla. Necesita veinte aparatos que podrían llegar a Sevilla como aviones comerciales de la Luft Hansa.\n\nA las tres peticiones responde negativamente el ministro de Exteriores alemán Neurath. A Alemania no le interesa apoyar una rebelión militar contra un gobierno legítimo en cuyo territorio viven más de quince mil súbditos germanos y negocian más de mil empresas del mismo origen. Por otra parte resulta sospechosa la falta de coordinación de esos tres generales rebeldes que ni siquiera se ponen de acuerdo para cursar una única demanda de ayuda. Es muy posible que una rebelión tan descoordinada no llegue a ninguna parte.\n\nPero uno de los generales, Franco, es más precavido que los otros y cursa una segunda petición a Hitler por otro conducto, más directo, el partido nazi, sin pasar por el Ministerio de Exteriores alemán.\n\nEntre las personas que esperaban a Franco en el aeródromo de Tetuán cuando aterrizó el Dragón Rapide figuraba un joven y ambicioso hombre de negocios alemán establecido en Marruecos, Johannes Bernhardt, nazi fervoroso y Gauleiter o delegado del partido de Hitler para el norte de África. Bernhardt, que es muy amigo de algunos falangistas y militares derechistas de la zona y está en buenas relaciones con los mandos de la compañía aérea Luft Hansa y con el propio ministro del Aire Goering, se ofrece para gestionar la compra de armas en Alemania. Franco le encomienda la misión de volar a Alemania en el Ju-52 matrícula D-APOK de la Luft Hansa, Max von Müller, que los rebeldes han requisado en Canarias, y entregarle al Führer una carta personal suya en la que solicita ayuda.\n\nParte el avión con su piloto Alfred Henke, capitán del arma aérea alemana, que no está contrariado en absoluto por la aventura militar en la que lo han metido. Detrás, en la cabina de pasaje, acomodados en los asientos de mimbre, van Bernhardt y un oficial de aviación española, el capitán Francisco Arranz, que ha realizado un curso en Alemania y chapurrea el idioma de Goethe (y de Hitler). Arranz intenta conversar con su compañero de viaje, pero el fragor de los motores es tal que al rato permanecen mudos, cada cual sumido en sus pensamientos. Son conscientes de estar viviendo un histórico momento.\n\nEl aparato hace escala en Sevilla, donde una avería mecánica lo retiene un par de días. Cuando por fin despega, en la madrugada del 24 de julio, al sobrevolar Albacete, un caza republicano se le aproxima y vuela en paralelo con el consiguiente acojono de los viajeros (¿y si nos obliga a aterrizar en un aeródromo republicano?). Tras unos momentos de indecisión, que les parecen eternos, el piloto del caza advierte la matrícula alemana, levanta la mano para saludar y se retira. El Ju-52 Max von Müller prosigue su vuelo sin más contratiempos y llega a su destino, Berlín, después de dos escalas técnicas en Marsella y Stuttgart. Ernst Bohle, jefe del Partido Nazi Exterior, conduce a los enviados de Franco ante Goering, al que el almirante (y espía) Canaris ha elogiado la figura del general Franco.\n\nHitler está en la localidad de Bayreuth, donde cada año por estas fechas asiste al festival en el que se representan las óperas de Wagner. Allá van los emisarios con la carta del general rebelde. El día 26, finalizada la representación de la ópera La Valkiria, en la que aparece una rubia gorda vestida de armadura, con un lanzón en la mano, lo que eleva al Führer a una especie de trance heroico, Goering y Canaris le exponen el caso.\n\n«¿Quién es ese Franco?», inquiere el Führer.\n\nCanaris, buen conocedor de España, se lo explica.\n\nGoering señala que, a cambio de la ayuda solicitada, se podría obtener de España el hierro de Vizcaya y sobre todo el wolframio que la industria alemana de guerra precisa desesperadamente. En Galicia, una de las regiones de España, abunda tanto el wolframio que hasta las cercas de los campos y las chozas de los indígenas se construyen con ese mineral. Por su parte, Canaris señala que el gobierno francés está ayudando a la República.\n\nEl Führer, furibundo antibolchevique, decide ayudar a los militares españoles rebelados contra el gobierno marxista. Enviará los aviones que Franco solicita, unos directamente por aire y otros por mar, desmontados. Además, añade a la lista seis cazas He-51 que escolten a los lentos trimotores durante las operaciones. El ministro de Exteriores, Neurath (que ya había rechazado las peticiones de Franco, Queipo y Mola llegadas a su despacho), acata sin rechistar la voluntad del Führer. Si acaso, procura que la intervención alemana en ese conflicto pase lo más desapercibida posible. Se crea una compañía comercial HISMA (Hispano-Marroquí) para encauzar las ayudas bajo cobertura civil. El ministro de Propaganda Goebbels cursa instrucciones a la prensa: a partir de hoy, los españoles rebelados contra el gobierno no se denominarán rebeldes sino nacionalistas.\n\nEl 28 de julio a la una de la tarde el Ju-52 Max von Müller aterriza en Tetuán después de once horas de vuelo sin escalas (le han adosado depósitos suplementarios en Berlín). Los viajeros descienden la escalerilla, molidos pero exultantes. Buenas noticias: el Führer ayudará a los rebeldes españoles, perdón, a los nacionalistas. Franco, que no cabe en sí de gozo, invita al piloto Henke a desayunar café con leche, tostadas con mantequilla y pastela marroquí.\n\n—¿Qué tal el vuelo? —se interesa Franco.\n\n—Sin novedad, usía —responde el teutón—. Excelente avión. Técnica alemana.\n\nAños más tarde, Hitler comentará, en una de sus conversaciones de sobremesa: «Franco tiene que levantar un monumento a la gloria del Ju-52. A este avión es al que tiene que agradecer su victoria la revolución española. Fue una suerte que nuestro avión pudiera volar directamente de Stuttgart a España.»\n\nEl Max von Müller, ya con los distintivos de la aviación nacionalista, se incorpora al puente aéreo que está trasladando moros y legionarios a Sevilla.\n\nMientras tanto, Luis Bolín ha mantenido una segunda entrevista con Ciano en Roma. Sea por sus gestiones, sea por las de los monárquicos, reforzadas por una llamada telefónica del exrey Alfonso XIII al Duce, o porque lo informan de que el gobierno francés está suministrando aviones a la República española, Mussolini cambia de idea y decide facilitar a Franco los aviones que solicitaba, doce trimotores de transporte Savoia-Marchetti 81. Los aparatos, con los distintivos militares burdamente borrados y las tripulaciones vestidas de paisano y provistas de documentación española, con las fotos aún frescas, despegan de su base de Cagliari, Cerdeña, y sobrevuelan el Mediterráneo rumbo a Marruecos, en vuelo sin escalas. Nueve consiguen alcanzar Tetuán, donde aterrizan con los depósitos casi vacíos, pero los tres restantes se quedan en el camino: uno aterriza de emergencia en la base francesa marroquí de Bekrane, otro cae al mar y el tercero se estrella en la orilla derecha del río Muluya, en Zaida, Marruecos francés, cerca de la frontera española. El capitán Criado, de la aviación española, localiza sus restos desde el aire.\n\n«¡Vaya hostia que se dieron!».\n\nAl día siguiente, la noticia aparece destacada en L’Echo de París.\n\nSe descubrió el pastel. Una pequeña contrariedad que revela la implicación italiana en el conflicto.\n\nLos nueve Savoia comienzan inmediatamente a transportar tropas al otro lado del Estrecho.\n\nA los Savoia siguen, por vía marítima, doce aviones de caza Fiat CR-32, superiores a los republicanos, más doce cañones, cinco tanquetas Ansaldo CV-3 y cuarenta ametralladoras.\n\nFranco está llenando de acero su cesta de la compra. Ahora sólo le falta llevar la guerra a la Península.",
      },
      {
        title: "Mobiliario-mudanzas",
        kicker: "Capítulo 7",
        subtitle: "Alemania envía aviones en cajas; Francia duda, Inglaterra se declara neutral y la República busca armas y pilotos.",
        pages: "36–37",
        content: "El mismo día que Mussolini aprueba sus envíos, Alemania inicia la Operación Fuego Mágico (Operation Feuerzauber). Franco recibirá diverso equipo de guerra: veinte aviones Ju-52, seis cazas H-51, veinte cañones antiaéreos, equipos de transmisiones y repuestos.\n\nEn distintas bases aéreas de la Luftwaffe se seleccionan pilotos y se les explica que van a intervenir en una operación secreta en España. Se les lee un comunicado de Hitler: «El Führer ha decidido socorrer pueblo español en situación desesperada y rescatarlo del bolchevismo mediante ayuda alemana. Compromisos internacionales imposibilitan asistencia declarada. Por tanto será una acción de apoyo encubierta».\n\nLos aviadores comparecen de paisano, sin documentos identificativos. Nadie debe conocer su paradero, ni siquiera la familia. Las cartas que escriban las remitirán a una dirección de Berlín y desde allí se reexpedirán a los destinatarios, con franqueo alemán.\n\nNueve aeroplanos despegan de Dessau y, después de repostar cerca de la frontera, realizan un vuelo de once horas hasta Tetuán. Los aviones restantes, desmontados y embalados, embarcan en el carguero Usaramo, de 22 000 toneladas, perteneciente a la compañía Woermann, que aguarda en el puerto de Hamburgo.\n\nUna larga fila de camiones acerca a las grúas del Usaramo un cargamento de cajas de distinto tamaño, todas muy pesadas. En algunos rótulos se lee «mobiliario-mudanzas». Entre los estibadores del puerto hay muchos militantes comunistas. Cuando observan que los pasajeros son todos jóvenes y militares (aunque visten de paisano) sospechan de la naturaleza de la carga. Para comprobarlo dejan caer, como por accidente, una de las cajas. Se rompe y revela su contenido: bombas y munición.\n\nLos comunistas están organizados en toda Europa en células pertenecientes a la Internacional. La noticia de la ayuda alemana a los rebeldes españoles llega rápidamente al gobierno de Madrid. Cuando el Usaramo alcanza aguas del Estrecho, una semana después, el 6 de agosto, el acorazado gubernamental Jaime I lo está aguardando y le da el alto, pero el carguero alemán, que parecía navegar hacia el Mediterráneo, altera bruscamente su derrota y se dirige a toda máquina a Cádiz. El Jaime I abre fuego contra el fugitivo, pero los disparos caen bastante lejos del blanco. (Recordemos que la tripulación amotinada había asesinado a los oficiales que sabían disparar con precisión).\n\nEl Usaramo atraca en el puerto de Cádiz en medio de músicas y fanfarrias.\n\nEn los días que siguen al levantamiento, el gobierno de la República acepta la eventualidad de una guerra. El ejército español, que no tiene más experiencia bélica que el conflicto colonial contra los irregulares rifeños, dista mucho de poseer un equipamiento moderno. La guerra que se avecina va a ser diferente, va a requerir aviación, carros de combate, artillería.\n\nFrancia tiene ya dos potencias fascistas en sus fronteras norte y éste (Alemania e Italia). Lo que menos le interesa es que se instale otra en el Sur, que es lo que ocurrirá si triunfan los militares rebeldes. Acoge con simpatía al enviado especial de Madrid que lleva la lista de la compra. El gobierno español solicita veinte bombarderos, ametralladoras, fusiles y cartuchos. Los franceses aumentan la cifra a treinta bombarderos.\n\nCuando el secretario del Ministerio de Asuntos Exteriores británico, Anthony Edén, conoce la ayuda francesa, llama a la prudencia a su colega Léon Blum: «Los ingleses odiamos el fascismo, pero odiamos en igual medida al bolchevismo. Si en un país fascistas y bolcheviques se matan entre ellos, será un gran bien para la humanidad».\n\nO sea, neutralidad.\n\nA Francia no le interesa contrariar a los ingleses. Por otra parte, la oposición derechista francesa protesta por la implicación en el conflicto. Blum, acobardado, da marcha atrás, aunque permite la venta de material militar a terceros países (México), que se lo cederán a la República española.\n\nPara facilitar el trámite, la República española envía más de cien mil libras en oro. Francia suministra media docena de su flojo caza Dewoitine D. 372 y algunos bombarderos Potez 540 y 542, mal armados con lentas ametralladoras Lewis, que merecerán el sobrenombre de «fabricantes de viudas». La República padece también escasez de pilotos y decide contratar aviadores mercenarios de distinto origen, a los que se unen algunos voluntarios desinteresados.",
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

const MARKERS = ["@foto ", "@anuncio ", "@grito ", "@fecha ", "@firma ", "@cita ", "@sep"];
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
  if (para.startsWith("@cita ")) {
    // Documento o canción citados: se conservan los saltos de línea; "→ " alinea a la derecha (firmas).
    const rows = para.slice(6).split("\n");
    return (
      <blockquote style={{ margin: "1.4em 0 1.6em", padding: "4px 0 4px 20px", borderLeft: `2px solid ${t.border}`,
                           fontSize: "0.98rem", lineHeight: 1.6, color: t.caption, fontStyle: "italic" }}>
        {rows.map((r, i) => r.startsWith("→ ") ? (
          <div key={i} style={{ textAlign: "right", fontStyle: "normal", fontVariant: "small-caps",
                                letterSpacing: "0.04em", marginTop: 6 }}>{r.slice(2)}</div>
        ) : <div key={i}>{r}</div>)}
      </blockquote>
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
