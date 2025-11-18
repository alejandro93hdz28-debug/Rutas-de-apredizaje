import { LearningPath } from './types';

export const LEARNING_PATHS_DATA: LearningPath[] = [
  {
    id: 'learning-path-1',
    title: 'Metodologías Activas',
    subtitle: 'y Tecnologías para la Educación',
    objective: 'Desarrolla competencias docentes a través de estrategias innovadoras y participativas para transformar el aprendizaje en el aula.',
    imageUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763061142/5_isp8ud.png',
    courses: [
      {
        id: 'c1-1',
        title: 'Medición del Aprendizaje y el Modelo Educativo Anáhuac',
        sessions: [
          { type: 'Sesión original', day: 'Lunes 24 de noviembre', time: '10:00–12:00', room: '701 (SAVI)' },
          { type: 'Réplica', day: 'Lunes 24 de noviembre', time: '16:00–18:00', room: '105' },
        ],
        objective: 'Explorar estrategias e instrumentos para evaluar competencias con enfoque formativo, integral y humano, coherentes con el Modelo Educativo Anáhuac.',
        learnings: [
          'A vincular competencias, actividades y evidencias de aprendizaje.',
          'A seleccionar y diseñar instrumentos de evaluación con sentido formativo.',
          'A integrar la visión humanista del MEA en tus decisiones de evaluación.',
        ],
      },
      {
        id: 'c1-2',
        title: 'Aprendizaje Basado en Proyectos: del diseño a la acción',
        sessions: [
          { type: 'Sesión original', day: 'Martes 25 de noviembre', time: '11:00–13:00', room: '105' },
          { type: 'Réplica', day: 'Miércoles 17 de diciembre', time: '16:00–18:00', room: '103' },
        ],
        objective: 'Diseñar proyectos interdisciplinarios centrados en la resolución de problemas reales, alineados a competencias y resultados de aprendizaje.',
        learnings: [
          'A estructurar un ABP completo (problema, fases, productos, cierre).',
          'A definir roles, tiempos y criterios de desempeño para los proyectos.',
          'A utilizar rúbricas y evidencias auténticas para evaluar el proyecto.',
        ],
      },
      {
        id: 'c1-3',
        title: 'Aprendizaje Colaborativo: estrategias para potenciar el trabajo en equipo',
        sessions: [
          { type: 'Sesión original', day: 'Miércoles 26 de noviembre', time: '10:00–12:00', room: '512' },
          { type: 'Réplica', day: 'Miércoles 26 de noviembre', time: '16:00–18:00', room: '512' },
        ],
        objective: 'Aplicar estructuras colaborativas que fomenten cooperación, corresponsabilidad y liderazgo académico entre estudiantes.',
        learnings: [
          'A diseñar actividades colaborativas con roles claros y metas compartidas.',
          'A implementar técnicas para equilibrar participación y responsabilidad.',
          'A evaluar tanto el resultado del equipo como el aporte individual.',
        ],
      },
      {
        id: 'c1-4',
        title: 'Aprendizaje Basado en Casos: del aula a la realidad profesional',
        sessions: [
          { type: 'Sesión original', day: 'Jueves 27 de noviembre', time: '10:00–12:00', room: '227' },
          { type: 'Réplica', day: 'Viernes 28 de noviembre', time: '16:00–18:00', room: '110' },
        ],
        objective: 'Implementar casos reales como herramienta para la toma de decisiones, el análisis crítico y el aprendizaje reflexivo.',
        learnings: [
          'A diseñar casos contextualizados en la realidad profesional de tus disciplinas.',
          'A guiar discusiones estructuradas que generen reflexión profunda.',
          'A evaluar la argumentación, el juicio crítico y la propuesta de soluciones.',
        ],
      },
      {
        id: 'c1-5',
        title: 'Flipped Classroom: transforma tu clase a un modelo invertido',
        sessions: [
          { type: 'Sesión original', day: 'Viernes 28 de noviembre', time: '11:00–13:00', room: '512' },
          { type: 'Réplica', day: 'Lunes 1 de diciembre', time: '16:00–18:00', room: '512' },
        ],
        objective: 'Crear experiencias formativas que combinen recursos digitales previos y aprendizaje activo en el aula bajo el modelo de clase invertida.',
        learnings: [
          'A seleccionar y producir materiales previos (videos, lecturas, guías) con propósito.',
          'A diseñar sesiones presenciales centradas en la aplicación y el análisis.',
          'A organizar la secuencia pre-clase, clase y post-clase de forma coherente.',
        ],
      },
       {
        id: 'c1-6',
        title: 'Gamificación en el aula universitaria: fundamentos y estrategias prácticas',
        sessions: [
          { type: 'Sesión original', day: 'Viernes 5 de diciembre', time: '11:00–13:00', room: '8' },
          { type: 'Réplica', day: 'Viernes 5 de diciembre', time: '16:00–18:00', room: '8' },
        ],
        objective: 'Diseñar estrategias lúdicas que incrementen la motivación, el compromiso y la participación del estudiante universitario.',
        learnings: [
          'A identificar mecánicas y dinámicas de juego aplicables al aula.',
          'A construir sistemas de puntos, niveles, retos y recompensas con sentido pedagógico.',
          'A integrar gamificación sin perder el foco en el logro de competencias.',
        ],
      },
      {
        id: 'c1-7',
        title: 'Evaluación auténtica y portafolios: evidencias reales del aprendizaje',
        sessions: [
          { type: 'Sesión original', day: 'Lunes 8 de diciembre', time: '09:00–11:00', room: '227' },
          { type: 'Réplica', day: 'Lunes 8 de diciembre', time: '16:30–18:30', room: '105' },
        ],
        objective: 'Desarrollar instrumentos basados en desempeño y portafolios (preferentemente digitales) alineados a competencias y resultados de aprendizaje.',
        learnings: [
            'A definir criterios de desempeño observables y evaluables.',
            'A estructurar portafolios que muestren progreso y logros del estudiante.',
            'A utilizar rúbricas para valorar evidencias reales de aprendizaje.',
        ],
      },
    ],
    totalHours: 14,
    purpose: 'Promover el diseño de experiencias de aprendizaje activas e innovadoras que integren la tecnología educativa como medio para el pensamiento crítico, la colaboración y la evaluación con sentido.  Obtendrás una visión integral de la persona en la educación hasta la planeación, gestión y evaluación de procesos de enseñanza-aprendizaje.',
    targetAudience: [
      'Profesionales interesados en el área educativa',
      'Docentes de cualquier nivel educativo',
      'Docentes con amplia experiencia que deseen actualizarse.',
    ],
    capabilities: [
      'Diseñar  situaciones de aprendizaje por medio de metodologías activas y estrategias de evaluación de acuerdo con las necesidades de sus estudiantes.',
      'Promover  acciones para favorecer el desarrollo docente  como un proceso continuo y una carrera de vida, que tenga un impacto en su formación y en la de sus estudiantes.',
      'Medir  resultados  con base en los objetivos y competencias de un programa académico actual',
    ],
    modality: 'Presencial',
    durationPerCourse: 2,
  },
    {
    id: 'learning-path-2',
    title: 'Herramientas Digitales',
    subtitle: 'y Estrategias Docentes',
    objective: 'Integra tecnología de vanguardia en tu práctica educativa para crear experiencias de aprendizaje dinámicas, interactivas y eficientes.',
    imageUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763061142/4_tvg4fy.png',
    courses: [
      {
        id: 'c2-1',
        title: 'Visual Thinking para docentes: mapas visuales como recursos de aprendizaje',
        sessions: [
          { type: 'Sesión original', day: 'Miércoles 10 de diciembre', time: '11:00–13:00', room: '105' },
          { type: 'Réplica', day: 'Martes 9 de diciembre', time: '16:30–18:30', room: '105' },
        ],
        objective: 'Representar ideas y contenidos de forma visual para fomentar la comprensión, la organización de información y la creatividad del estudiante.',
        learnings: [
          'A transformar contenidos complejos en mapas y estructuras visuales claras.',
          'A utilizar esquemas, íconos y relaciones visuales para apoyar la explicación.',
          'A integrar mapas visuales en tus clases, proyectos y evaluaciones.',
        ],
      },
      {
        id: 'c2-2',
        title: 'Storytelling en la docencia: enseñar a través de narrativas poderosas',
        sessions: [
          { type: 'Sesión original', day: 'Miércoles 10 de diciembre', time: '11:00–13:00', room: '222' },
          { type: 'Réplica', day: 'Miércoles 10 de diciembre', time: '16:30–18:30', room: '222' },
        ],
        objective: 'Integrar el poder de las historias en la docencia para generar experiencias de aprendizaje significativas y memorables.',
        learnings: [
          'A estructurar narrativas con inicio, conflicto y resolución aplicadas a tus temas.',
          'A convertir conceptos abstractos en relatos cercanos al contexto del estudiante.',
          'A utilizar storytelling para introducir temas, ejemplificar y cerrar sesiones.',
        ],
      },
      {
        id: 'c2-3',
        title: 'Automatiza y crea presentaciones didácticas con Gamma',
        sessions: [
          { type: 'Sesión original', day: 'Viernes 12 de diciembre', time: '11:00–13:00', room: '105' },
          { type: 'Réplica', day: 'Viernes 12 de diciembre', time: '16:30–18:30', room: '105' },
        ],
        objective: 'Crear presentaciones interactivas y visualmente atractivas con apoyo de inteligencia artificial para optimizar el tiempo de preparación docente.',
        learnings: [
          'A usar Gamma para generar presentaciones desde cero o a partir de texto.',
          'A incorporar elementos visuales, estructura y narrativa en tus diapositivas.',
          'A adaptar las presentaciones a diferentes tipos de clase y audiencia.',
        ],
      },
      {
        id: 'c2-4',
        title: 'Crea recursos de aprendizaje con Gemini Canvas',
        sessions: [
          { type: 'Sesión original', day: 'Lunes 15 de diciembre', time: '11:00–12:00', room: '105' },
          { type: 'Réplica', day: 'Lunes 15 de diciembre', time: '16:30–18:30', room: '105' },
        ],
        objective: 'Diseñar materiales personalizados de aprendizaje utilizando herramientas de IA generativa para enriquecer tus clases.',
        learnings: [
          'A crear recursos visuales, guías y materiales de apoyo con Gemini Canvas.',
          'A adaptar los recursos a diferentes niveles y perfiles de estudiantes.',
          'A organizar tus materiales en un portafolio digital para reutilización futura.',
        ],
      },
      {
        id: 'c2-5',
        title: 'Conoce WayGround: crea y comparte cuestionarios interactivos',
        sessions: [
          { type: 'Sesión original', day: 'Martes 16 de diciembre', time: '11:00–13:00', room: '103' },
          { type: 'Réplica', day: 'Miércoles 17 de diciembre', time: '16:30–18:30', room: '103' },
        ],
        objective: 'Desarrollar evaluaciones digitales participativas con retroalimentación inmediata a través de cuestionarios interactivos.',
        learnings: [
          'A crear cuestionarios y bancos de ítems en WayGround.',
          'A configurar retroalimentación automática y visualización de resultados.',
          'A integrar los cuestionarios en tus clases presenciales o virtuales.',
        ],
      },
    ],
    totalHours: 10,
    purpose: 'Desarrollar habilidades digitales para la docencia, enriqueces significativamente tu práctica educativa al integrar herramientas avanzadas de evaluación y tecnología como las TIC. Diseña estrategias que mejoren el aprendizaje y fomenten la excelencia académica.',
    targetAudience: [
        'Docentes que buscan innovar con tecnología.',
        'Educadores que desean crear materiales didácticos atractivos.',
        'Profesionales que quieren mejorar la interacción en el aula virtual o presencial.',
    ],
    capabilities: [
        'Utilizar herramientas de IA para generar presentaciones y recursos visuales de alto impacto.',
        'Aplicar técnicas de Storytelling y Visual Thinking para comunicar ideas complejas de forma efectiva.',
        'Diseñar y gestionar evaluaciones interactivas que proporcionen retroalimentación inmediata.',
    ],
    modality: 'Presencial',
    durationPerCourse: 2,
  },
];