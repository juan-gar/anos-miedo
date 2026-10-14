import { useState, useEffect } from "react";

// Texto íntegro del capítulo 1, dividido en sus tres bloques originales (separados por
// un blanco en la edición impresa). Los títulos de cada bloque son de navegación, no del libro.
// Marcas de párrafo: "@foto " = pie de foto, "@anuncio " = anuncio de época (cursiva en el
// original), "@grito " = línea de diálogo corta; [n] = llamada a nota.

const BOOK = {
  title: "Los años del miedo",
  chapter: "Capítulo 1",
  chapterTitle: "En España empieza a amanecer",
};

const SECTIONS = [
  {
    name: "Capítulo 1",
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

const ALL = SECTIONS.flatMap(s => s.articles.map(a => ({ section: s, article: a })));

// Convierte las llamadas [n] en superíndices que saltan a la sección de notas.
function renderInline(text, onNote, color) {
  return text.split(/(\[\d+\])/g).map((part, i) => {
    const m = part.match(/^\[(\d+)\]$/);
    if (!m) return part;
    return (
      <sup key={i}>
        <a href="#" onClick={e => { e.preventDefault(); onNote(m[1]); }}
           style={{ color, textDecoration: "none", fontWeight: 700, padding: "0 1px" }}
           title={`Nota ${m[1]}`}>{m[1]}</a>
      </sup>
    );
  });
}

function Paragraph({ para, index, isNotes, color, t, onNote }) {
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
  if (isNotes) {
    const m = para.match(/^\[(\d+)\]\s*(.*)$/s);
    return (
      <p id={`nota-${m[1]}`} style={{ display: "flex", gap: 12, fontSize: "0.98rem", lineHeight: 1.65,
                                      marginBottom: "1.1em" }}>
        <span style={{ color, fontWeight: 700, minWidth: 18 }}>{m[1]}.</span>
        <span>{m[2]}</span>
      </p>
    );
  }
  const dropCap = index === 0;
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

export default function ChapterReader() {
  const [idx, setIdx] = useState(0);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fontScale, setFontScale] = useState(1);
  const [expanded, setExpanded] = useState(Object.fromEntries(SECTIONS.map(s => [s.name, true])));
  const [pendingNote, setPendingNote] = useState(null);

  const t = dark ? THEMES.dark : THEMES.light;
  const { section, article } = ALL[idx];

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
    if (pendingNote) {
      const el = document.getElementById(`nota-${pendingNote}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.transition = "background 1.2s";
        el.style.background = t.hover;
        setTimeout(() => { el.style.background = "transparent"; }, 1400);
      }
      setPendingNote(null);
    } else if (pane) {
      pane.scrollTop = 0;
    }
  }, [idx, pendingNote]);

  const select = (i) => { setIdx(i); if (isMobile) setSidebarOpen(false); };
  const goToNote = (n) => {
    const notesIdx = ALL.findIndex(x => x.section.name === "Notas");
    setIdx(notesIdx);
    setPendingNote(n);
  };

  const isNotes = section.name === "Notas";
  const paras = article.content.split("\n\n");
  const words = article.content.replace(/@\w+ /g, "").split(/\s+/).length;
  const btn = {
    background: "none", border: `1px solid ${t.border}`, color: t.muted, borderRadius: 4,
    padding: "4px 10px", cursor: "pointer", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif",
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Georgia, 'Libre Baskerville', serif",
                  background: t.bg, color: t.text, position: "relative" }}>
      {sidebarOpen && (
        <nav style={{
          width: 270, flex: "none", background: t.side, borderRight: `1px solid ${t.border}`,
          overflowY: "auto", padding: "20px 0",
          ...(isMobile ? { position: "absolute", top: 0, bottom: 0, left: 0, zIndex: 20,
                           boxShadow: "0 0 24px rgba(0,0,0,0.25)" } : {}),
        }}>
          <div style={{ padding: "0 18px 18px", borderBottom: `1px solid ${t.border}`, marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.2 }}>{BOOK.title}</div>
            <div style={{ fontSize: "0.85rem", color: t.muted, marginTop: 6, fontStyle: "italic" }}>
              {BOOK.chapter}: {BOOK.chapterTitle}
            </div>
          </div>
          {SECTIONS.map(s => (
            <div key={s.name} style={{ marginBottom: 8 }}>
              <div onClick={() => setExpanded(p => ({ ...p, [s.name]: !p[s.name] }))}
                   style={{ padding: "8px 18px", cursor: "pointer", color: s.color, fontWeight: 700,
                            fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em",
                            fontFamily: "system-ui, sans-serif", display: "flex", justifyContent: "space-between" }}>
                {s.name}<span>{expanded[s.name] ? "−" : "+"}</span>
              </div>
              {expanded[s.name] && s.articles.map(a => {
                const i = ALL.findIndex(x => x.article === a);
                const active = i === idx;
                return (
                  <div key={a.title} onClick={() => select(i)}
                       style={{ padding: "9px 18px 9px 22px", cursor: "pointer", fontSize: "0.9rem", lineHeight: 1.35,
                                background: active ? t.hover : "transparent",
                                borderLeft: `3px solid ${active ? s.color : "transparent"}` }}>
                    {a.title}
                    <div style={{ fontSize: "0.72rem", color: t.muted, marginTop: 3,
                                  fontFamily: "system-ui, sans-serif" }}>págs. {a.pages}</div>
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      )}

      <main id="reading-pane" style={{ flex: 1, overflowY: "auto" }}
            onClick={() => isMobile && sidebarOpen && setSidebarOpen(false)}>
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: t.bg, borderBottom: `1px solid ${t.border}`,
                      display: "flex", alignItems: "center", gap: 8, padding: "10px 16px" }}>
          <button style={btn} onClick={e => { e.stopPropagation(); setSidebarOpen(o => !o); }}
                  aria-label="Índice">☰</button>
          <div style={{ flex: 1, fontSize: "0.8rem", color: t.muted, fontFamily: "system-ui, sans-serif",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {article.title}
          </div>
          <button style={btn} onClick={() => setFontScale(f => Math.max(0.85, f - 0.1))} aria-label="Reducir texto">A−</button>
          <button style={btn} onClick={() => setFontScale(f => Math.min(1.4, f + 0.1))} aria-label="Aumentar texto">A+</button>
          <button style={btn} onClick={() => setDark(d => !d)}>{dark ? "☀ Claro" : "☾ Oscuro"}</button>
        </div>

        <article style={{ maxWidth: 680, margin: "0 auto", padding: "40px 22px 80px", fontSize: `${fontScale}rem` }}>
          <div style={{ color: section.color, fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase",
                        letterSpacing: "0.12em", marginBottom: 14, fontFamily: "system-ui, sans-serif" }}>
            {section.name === "Notas" ? "Notas" : `${BOOK.chapter} · ${BOOK.chapterTitle}`}
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
            <Paragraph key={`${idx}-${i}`} para={p} index={isNotes ? -1 : i} isNotes={isNotes}
                       color={section.color} t={t} onNote={goToNote} />
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 48,
                        paddingTop: 20, borderTop: `1px solid ${t.border}` }}>
            <button style={{ ...btn, visibility: idx > 0 ? "visible" : "hidden" }} onClick={() => select(idx - 1)}>
              ← {idx > 0 ? ALL[idx - 1].article.title : ""}
            </button>
            <button style={{ ...btn, visibility: idx < ALL.length - 1 ? "visible" : "hidden" }}
                    onClick={() => select(idx + 1)}>
              {idx < ALL.length - 1 ? ALL[idx + 1].article.title : ""} →
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
