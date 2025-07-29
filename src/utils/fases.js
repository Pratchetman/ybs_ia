export const fases = [
  {
    "id": 1,
    "name": "Etapa 1: Acogida y Diagnóstico Inicial",
    "description": "Objetivo: Evaluar la adecuación del perfil del emprendedor y su entorno antes de iniciar el itinerario.",
    "apps": [
      {
        "id": 1,
        "name": "Análisis de Adecuación Persona-Proyecto",
        "summary": "La IA puede evaluar la coherencia entre el perfil de la persona emprendedora y las exigencias de su proyecto empresarial, detectando posibles desajustes.",
        "template": "Actúa como asesor de emprendimiento especializado en análisis de competencias. A partir de este perfil: {{edad}}, {{formacion}}, {{experiencia}}, {{habilidades}} y esta idea de negocio: {{idea}}, identifica:\n1. Fortalezas de la persona que potencian el proyecto\n2. Debilidades que podrían comprometer el éxito\n3. Competencias críticas a desarrollar\n4. Recorrido formativo sugerido para adquirirlas\nEstructura tu respuesta por apartados y utiliza ejemplos concretos.",
        "fields": [
          {"name": "edad", "label": "Edad"},
          {"name": "formacion", "label": "Formación"},
          {"name": "experiencia", "label": "Experiencia"},
          {"name": "habilidades", "label": "Habilidades"},
          {"name": "idea", "label": "Idea de negocio (describir brevemente)"}
        ]
      },
      {
        "id": 2,
        "name": "Estudios de Mercado Localizados",
        "summary": "La IA puede realizar análisis preliminares de mercado adaptados al contexto local, identificando tendencias, competidores y oportunidades específicas.",
        "template": "Necesito un estudio de mercado preliminar para un negocio de {{tipo_negocio}} en {{barrio}} de {{ciudad}}. Incluye:\n1. Perfil demográfico y socioeconómico de la zona\n2. Principales competidores (directos e indirectos)\n3. Tendencias relevantes del sector en esta área geográfica\n4. Oportunidades detectadas y nichos potenciales\n5. Riesgos específicos del mercado local\nUtiliza datos contrastables y menciona las limitaciones de tu análisis.",
        "fields": [
          {"name": "tipo_negocio", "label": "Tipo de negocio"},
          {"name": "barrio", "label": "Localidad/Barrio específico"},
          {"name": "ciudad", "label": "Ciudad"}
        ]
      },
      {
        "id": 3,
        "name": "Evaluación de Barreras para Colectivos Específicos",
        "summary": "La IA puede identificar barreras y recursos de apoyo específicos para colectivos vulnerables al emprender.",
        "template": "Como asesor especializado en emprendimiento inclusivo, ayúdame a identificar:\n1. Barreras específicas que puede enfrentar una persona {{situacion}} al emprender un negocio de {{sector}}\n2. Recursos y apoyos específicos disponibles (legales, formativos, financieros)\n3. Estrategias para superar cada barrera identificada\n4. Casos de éxito de emprendedores similares\nEnfócate en soluciones prácticas y accesibles en el contexto español.",
        "fields": [
          {"name": "situacion", "label": "Situación (migrante, discapacidad, mujer rural, etc.)"},
          {"name": "sector", "label": "Sector"}
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Etapa 2: Formación y Preparación",
    "description": "Objetivo: Desarrollar conocimientos y habilidades necesarios antes de formalizar la empresa.",
    "apps": [
      {"id":1,"name":"Adaptación de Contenidos Complejos","summary":"Las IA permiten transformar conceptos empresariales complejos en materiales accesibles según el nivel educativo y background cultural de cada persona.","template":"Actúa como formador experto en adaptación pedagógica. Necesito explicar el concepto de {{concepto}} a una persona con {{nivel}}. Crea:\n1. Una explicación de 200 palabras en lenguaje accesible\n2. Un ejemplo práctico basado en la vida cotidiana\n3. Una infografía o esquema sencillo (descríbelo)\n4. Un ejercicio práctico para comprobar la comprensión\nEvita tecnicismos innecesarios y utiliza metáforas familiares para el contexto cultural español.","fields":[{"name":"concepto","label":"Concepto empresarial"},{"name":"nivel","label":"Nivel educativo / Background"}]},
      {"id":2,"name":"Simuladores de Decisiones Empresariales","summary":"Las IA pueden crear escenarios hipotéticos que permitan a los emprendedores ejercitar la toma de decisiones en entornos seguros.","template":"Genera una simulación de toma de decisiones para un pequeño negocio de {{sector}}. El escenario es el siguiente: {{escenario}}. Presenta tres posibles decisiones, cada una con descripción, recursos, resultados positivos y negativos, y factores críticos.","fields":[{"name":"sector","label":"Sector"},{"name":"escenario","label":"Descripción del escenario problemático"}]},
      {"id":3,"name":"Diagnóstico de Competencias Digitales","summary":"Identificar las habilidades digitales del emprendedor permite diseñar un plan formativo que cierre brechas específicas.","template":"Crea un cuestionario de autoevaluación para diagnosticar competencias digitales relevantes para emprender, incluyendo:\n1. 10 preguntas múltiples sobre uso básico, presencia online, e-commerce, ofimática, datos y ciberseguridad\n2. Sistema de puntuación\n3. Recomendaciones formativas según resultados\nEl cuestionario debe ser comprensible para nivel digital básico y completarse en 15 minutos.","fields":[]},
      {"id":4,"name":"Metodología de Microlearning","summary":"La fragmentación del aprendizaje en unidades pequeñas y digeribles mejora la retención y se adapta mejor a las limitaciones de tiempo de los emprendedores.","template":"Diseña un programa de microlearning sobre {{tema}} para emprendedores con tiempo limitado. Incluye 5 microlecciones, objetivos, ejercicio breve y recursos complementarios.","fields":[{"name":"tema","label":"Tema específico"}]},
      {"id":5,"name":"Formación para Mentores y Técnicos","summary":"Las IA también pueden asistir en la preparación continua del personal técnico que acompaña a los emprendedores.","template":"Como experto en innovación educativa, genera una guía actualizada sobre {{tema}} orientada a personal técnico de entidades sociales que acompañan emprendedores. Incluye actualizaciones, implicaciones prácticas, recursos gratuitos y FAQs.","fields":[{"name":"tema","label":"Tema específico"}]}
    ]
  },
  {
    "id":3,
    "name":"Etapa 3: Elaboración del Plan de Empresa",
    "description":"Objetivo: Ayudar a estructurar y validar el plan de negocio con apoyo de IA.",
    "apps":[
      {"id":1,"name":"Generación de Modelos Canvas Interactivos","summary":"Las IA pueden ayudar a conceptualizar modelos de negocio utilizando metodologías ágiles como el Business Model Canvas.","template":"Actúa como consultor Canvas. Para una idea {{idea}} dirigida a {{publico}} en {{ubicacion}}:\n1. Desarrolla los 9 bloques del Canvas\n2. Propón 3 preguntas críticas por bloque\n3. Sugiere fuentes de verificación\n4. Identifica interrelaciones críticas entre bloques.","fields":[{"name":"idea","label":"Idea de negocio"},{"name":"publico","label":"Público objetivo"},{"name":"ubicacion","label":"Ubicación"}]},
      {"id":2,"name":"Análisis de Competencia Estratégico","summary":"Las IA pueden generar análisis comparativos que identifiquen competidores y oportunidades de diferenciación.","template":"Como analista de mercado, realiza análisis competitivo para un negocio de {{sector}} en {{ubicacion}} incluyendo competidores, tabla comparativa, mapa de posicionamiento, oportunidades y amenazas.","fields":[{"name":"sector","label":"Sector"},{"name":"ubicacion","label":"Ubicación"}]},
      {"id":3,"name":"Proyecciones Financieras Fundamentadas","summary":"Generar estimaciones financieras realistas es uno de los mayores desafíos para emprendedores sin formación específica.","template":"Como asesor financiero, desarrolla proyecciones básicas para un negocio de {{tipo}} con inversión inicial de {{inversion}} €. Incluye costes, gastos, ingresos en 3 escenarios, punto de equilibrio y KPIs.","fields":[{"name":"tipo","label":"Tipo de negocio"},{"name":"inversion","label":"Inversión inicial (€)"}]},
      {"id":4,"name":"Validación de Coherencia del Plan","summary":"Las IA pueden actuar como revisores críticos que identifiquen inconsistencias o áreas mejorables en el plan.","template":"Actúa como evaluador experto. Mi plan:\nPropuesta de valor: {{propuesta}}\nMercado objetivo: {{mercado}}\nEstrategia de precios: {{precio}}\nCanales de distribución: {{canales}}\nEstructura de costes: {{costes}}\nGenera revisión con inconsistencias, elementos faltantes, supuestos cuestionables y sugerencias.","fields":[{"name":"propuesta","label":"Propuesta de valor"},{"name":"mercado","label":"Mercado objetivo"},{"name":"precio","label":"Estrategia de precios"},{"name":"canales","label":"Canales de distribución"},{"name":"costes","label":"Estructura de costes"}]},
      {"id":5,"name":"Metodología de Validación Iterativa","summary":"El plan debe entenderse como un documento vivo que se contrasta continuamente con la realidad del mercado.","template":"Como experto Lean Startup, diseña 3 experimentos de bajo coste para validar hipótesis críticas de un negocio de {{sector}} (necesidad, propuesta de valor, precio).","fields":[{"name":"sector","label":"Sector"}]}
    ]
  },
  {
    "id":4,
    "name":"Etapa 4: Acceso a Financiación",
    "description":"Objetivo: Facilitar la obtención de recursos financieros adecuados.",
    "apps":[
      {"id":1,"name":"Mapa Personalizado de Recursos Financieros","summary":"Las IA pueden identificar fuentes de financiación adaptadas al perfil específico del emprendedor y su proyecto.","template":"Como asesor especializado, necesito un mapa de recursos para una persona de {{edad}} años, {{genero}}, {{nacionalidad}}, situación laboral {{situacion}}, proyecto en el sector {{sector}}, ubicado en {{ubicacion}}, fase {{fase}}, necesita {{cantidad}} €. Detalla subvenciones, microcréditos, ayudas, crowdfunding, premios y calendario.","fields":[{"name":"edad","label":"Edad"},{"name":"genero","label":"Género"},{"name":"nacionalidad","label":"Nacionalidad"},{"name":"situacion","label":"Situación laboral"},{"name":"sector","label":"Sector"},{"name":"ubicacion","label":"Comunidad Autónoma / Provincia"},{"name":"fase","label":"Fase del proyecto"},{"name":"cantidad","label":"Necesidad financiera (€)"}]},
      {"id":2,"name":"Optimización de Solicitudes y Documentación","summary":"La preparación de documentación para solicitar financiación suele ser compleja y técnica. Las IA pueden facilitar esta tarea.","template":"Como consultor de financiación, ayuda a desarrollar una memoria técnica para solicitar {{ayuda}} incluyendo estructura, ejemplos, indicadores y errores a evitar.","fields":[{"name":"ayuda","label":"Tipo de ayuda / subvención"}]},
      {"id":3,"name":"Simulación de Presentaciones a Inversores","summary":"La preparación para defender un proyecto ante entidades financieras puede entrenarse con IA.","template":"Actúa como panel de inversores para un proyecto de {{sector}}. Este es mi pitch: {{pitch}}. Formula preguntas críticas, identifica puntos débiles y sugiere mejoras.","fields":[{"name":"sector","label":"Sector"},{"name":"pitch","label":"Descripción breve del pitch"}]},
      {"id":4,"name":"Análisis de Convocatorias Complejas","summary":"Las IA pueden ayudar a interpretar bases de convocatorias complejas.","template":"Analiza las siguientes bases de convocatoria: {{texto}} y proporciona resumen, elegibilidad, criterios, documentación, calendario y recomendaciones.","fields":[{"name":"texto","label":"Texto o enlace de la convocatoria"}]},
      {"id":5,"name":"Narrativa de Impacto para Proyectos Sociales","summary":"Los proyectos con componente social requieren una narrativa específica que destaque su valor diferencial.","template":"Como experto en comunicación de impacto, desarrolla narrativa convincente para {{descripcion}} que busca financiación de {{entidad}} incluyendo relato, indicadores, viaje del beneficiario, argumentos ODS.","fields":[{"name":"descripcion","label":"Descripción del proyecto"},{"name":"entidad","label":"Entidad / programa"}]}
    ]
  },
  {
    "id":5,
    "name":"Etapa 5: Constitución del Negocio",
    "description":"Objetivo: Ayudar en la constitución legal y administrativa del negocio.",
    "apps":[
      {"id":1,"name":"Análisis Comparativo de Formas Jurídicas","summary":"Las IA pueden proporcionar análisis adaptados al proyecto específico y perfil del emprendedor.","template":"Como asesor legal, compara formas jurídicas para actividad {{actividad}}, {{num}} promotores, inversión {{inversion}} €, facturación prevista {{facturacion}} €, perfil fiscal {{perfil}}, objetivos {{objetivos}}.","fields":[{"name":"actividad","label":"Actividad"},{"name":"num","label":"Número de promotores"},{"name":"inversion","label":"Inversión inicial (€)"},{"name":"facturacion","label":"Facturación prevista primer año (€)"},{"name":"perfil","label":"Perfil fiscal de los promotores"},{"name":"objetivos","label":"Objetivos a medio plazo"}]},
      {"id":2,"name":"Mapas de Procedimientos Administrativos","summary":"Representaciones visuales de los procesos pueden facilitar la navegación administrativa.","template":"Crea un mapa de procedimientos para constituir {{forma}} en {{comunidad}} incluyendo flujo, trámites, plazos y recursos.","fields":[{"name":"forma","label":"Forma jurídica"},{"name":"comunidad","label":"Comunidad Autónoma"}]},
      {"id":3,"name":"Intérprete de Normativa Sectorial","summary":"Las IA pueden traducir normativas complejas a lenguaje accesible y requisitos concretos.","template":"Explica requisitos legales para abrir un negocio de {{sector}} en {{ubicacion}} incluyendo licencias, normativas, inspecciones y checklist.","fields":[{"name":"sector","label":"Sector"},{"name":"ubicacion","label":"Municipio / CCAA"}]},
      {"id":4,"name":"Gestión Documental Inteligente","summary":"Las IA pueden ayudar a organizar y preparar la documentación administrativa necesaria.","template":"Diseña un sistema de gestión documental para negocio {{forma}} de {{sector}} con estructura de carpetas, lista de documentos, plantilla de seguimiento y calendario.","fields":[{"name":"forma","label":"Forma jurídica"},{"name":"sector","label":"Sector"}]},
      {"id":5,"name":"Consideraciones para Colectivos Vulnerables","summary":"Algunos colectivos enfrentan barreras adicionales en los procesos administrativos que deben abordarse específicamente.","template":"Identifica recursos específicos para un emprendedor {{perfil}} que quiere constituir un negocio de {{sector}} en {{ubicacion}} incluyendo programas, exenciones y redes de apoyo.","fields":[{"name":"perfil","label":"Perfil (migrante, discapacidad, etc.)"},{"name":"sector","label":"Sector"},{"name":"ubicacion","label":"Ubicación"}]}
    ]
  },
  {
    "id":6,
    "name":"Etapa 6: Mentoring y Seguimiento",
    "description":"Objetivo: Acompañar al emprendedor durante la fase inicial de operaciones.",
    "apps":[
      {"id":1,"name":"Diseño de Sesiones Estructuradas","summary":"Las IA pueden ayudar a planificar sesiones de mentoring más efectivas y enfocadas.","template":"Diseña una sesión de 60 minutos con un emprendedor en fase {{fase}} que enfrenta desafíos en {{area}} incluyendo estructura temporal, preguntas y herramientas.","fields":[{"name":"fase","label":"Fase del negocio"},{"name":"area","label":"Área problemática"}]},
      {"id":2,"name":"Análisis de Progreso Multidimensional","summary":"Las IA pueden ayudar a evaluar el avance del proyecto emprendedor desde múltiples dimensiones.","template":"Crea un sistema integral para evaluar el progreso de un negocio de {{sector}} que lleva {{tiempo}} en funcionamiento con cuadro de mando e indicadores.","fields":[{"name":"sector","label":"Sector"},{"name":"tiempo","label":"Tiempo de funcionamiento"}]},
      {"id":3,"name":"Biblioteca de Recursos Contextualizada","summary":"Las IA pueden sugerir recursos formativos y herramientas específicas según las necesidades detectadas.","template":"Crea una biblioteca de recursos para un negocio de {{sector}} que necesita fortalecer {{area}} incluyendo recursos formativos, herramientas, comunidades y lecturas.","fields":[{"name":"sector","label":"Sector"},{"name":"area","label":"Área específica"}]},
      {"id":4,"name":"Simulador de Escenarios Críticos","summary":"Las IA pueden ayudar a preparar al emprendedor para situaciones complejas a través de simulaciones.","template":"Crea una simulación para un negocio de {{sector}} que se enfrenta a {{situacion}} con opciones estratégicas y métricas.","fields":[{"name":"sector","label":"Sector"},{"name":"situacion","label":"Situación crítica"}]},
      {"id":5,"name":"Metodología de Peer Learning Facilitado","summary":"El aprendizaje entre pares puede potenciarse mediante facilitación asistida por IA.","template":"Diseña una sesión grupal de aprendizaje entre emprendedores de {{perfil}} incluyendo estructura, dinámicas y sistema de compromisos.","fields":[{"name":"perfil","label":"Sector / perfil"}]}
    ]
  },
  {
    "id":7,
    "name":"Etapa 7: Consolidación y Crecimiento",
    "description":"Objetivo: Facilitar el crecimiento sostenible y la autonomía del emprendedor.",
    "apps":[
      {"id":1,"name":"Auditoría Integral de Procesos","summary":"Las IA pueden ayudar a realizar evaluaciones sistemáticas de los procesos internos para identificar mejoras.","template":"Realiza una auditoría integral para un negocio de {{sector}} con {{tiempo}} de funcionamiento y {{empleados}} empleados, incluyendo indicadores y plan de acción.","fields":[{"name":"sector","label":"Sector"},{"name":"tiempo","label":"Tiempo de funcionamiento"},{"name":"empleados","label":"Número de empleados"}]},
      {"id":2,"name":"Estrategia de Diversificación","summary":"Las IA pueden ayudar a analizar oportunidades de crecimiento y diversificación.","template":"Analiza opciones de diversificación para un negocio de {{sector}} ya consolidado en {{ubicacion}} con fortalezas {{fortalezas}}.","fields":[{"name":"sector","label":"Sector"},{"name":"ubicacion","label":"Ubicación"},{"name":"fortalezas","label":"Fortalezas"}]},
      {"id":3,"name":"Modelo de Escalabilidad Adaptado","summary":"Las IA pueden proponer modelos de crecimiento adaptados a la realidad del emprendedor social.","template":"Desarrolla un modelo para escalar un negocio de {{sector}} con impacto social en {{ambito_actual}} que quiere expandirse a {{ambito_mayor}} incluyendo modelos, gobernanza e indicadores.","fields":[{"name":"sector","label":"Sector"},{"name":"ambito_actual","label":"Ámbito actual"},{"name":"ambito_mayor","label":"Ámbito de expansión"}]},
      {"id":4,"name":"Automatización Progresiva de Procesos","summary":"Identificar processes automatizables puede liberar tiempo para tareas de mayor valor.","template":"Desarrolla un plan de automatización para un negocio de {{sector}} incluyendo metodología, procesos prioritarios, recursos y fases.","fields":[{"name":"sector","label":"Sector"}]},
      {"id":5,"name":"Transición hacia la Independencia","summary":"Esta fase implica preparar al emprendedor para continuar su desarrollo sin dependencia de la entidad de apoyo.","template":"Diseña un plan de transición para un emprendedor acompañado durante {{tiempo}} detallando fases, red de seguridad y seguimiento.","fields":[{"name":"tiempo","label":"Tiempo de acompañamiento"}]}
    ]
  }
];