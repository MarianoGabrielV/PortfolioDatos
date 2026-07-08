export const translations = {
  es: {
    navbar: {
      brand: 'Mi Portfolio',
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Estudios',
      contact: 'Contacto',
      language: 'Idioma'
    },
    hero: {
      name: 'Mariano Gabriel',
      highlight: 'Vergniaud',
      subtitle: 'Analista de Datos con foco en SQL, Python, Excel y Power BI.',
      projectsBtn: 'Ver Proyectos',
      contactBtn: 'Contacto'
    },
    about: {
      title: 'Sobre',
      highlight: 'Mi',
      intro: 'Analista de Datos con formación técnica y universitaria en programación y ciencia de datos. Trabajo en entornos productivos, transformando datos en información accionable para la toma de decisiones.',
      details: 'Domino Excel Avanzado, SQL Avanzado, Python y Power BI para análisis exploratorio, modelado y automatización de reportes. Desarrollo dashboards orientados a KPIs, colaboro con negocio y tecnología asegurando calidad de datos, y también cuento con experiencia docente en Python y Ciencia de Datos.'
    },
    skills: {
      title: 'Skills',
      highlight: 'Técnicas',
      groups: [
        {
          title: 'Análisis y BI',
          skills: ['Excel Avanzado', 'Power BI', 'DAX', 'KPIs', 'Reporting Ejecutivo', 'Dashboards Interactivos', 'Power Query']
        },
        {
          title: 'Datos y Programación',
          skills: ['SQL Avanzado', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server', 'ETL', 'Data Cleaning', 'Transformación de datos']
        },
        {
          title: 'Librerías Python (Análisis y Grandes Volúmenes)',
          skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'PySpark', 'Dask', 'Polars']
        },
        {
          title: 'Entorno Productivo y Colaboración',
          skills: ['Git', 'GitHub', 'Netlify', 'APIs REST', 'CI/CD', 'Linux', 'Docker', 'Kubernetes', 'Azure', 'Monitoreo de Logs', 'CRM', 'Automatizaciones']
        }
      ]
    },
    projects: {
      title: 'Mis',
      highlight: 'Proyectos',
      buttonLabel: 'Ver Proyecto en GitHub',
      questionsLabel: 'Preguntas que responde:',
      items: [
        {
          title: 'Análisis RFM + Dashboard Ejecutivo (Power BI)',
          description: 'Segmentación de clientes con RFM (Recency, Frequency, Monetary) y dashboard en Power BI para identificar segmentos clave y orientar acciones comerciales (retención, reactivación y fidelización).',
          questions: [
            '¿Cómo se distribuyen los clientes por segmento (Lost, At Risk, Potential, Champions, Loyal)?',
            '¿Qué segmentos concentran la mayor parte de las ventas?',
            '¿Cómo cambia el ticket promedio según el segmento?',
            '¿Dónde están las oportunidades: reactivación vs fidelización?'
          ],
          tags: ['PowerBI', 'Excel-CSV', 'Python-Pandas']
        },
        {
          title: 'Análisis Exploratorio de Datos (EDA) + Dashboard',
          description: 'Análisis exploratorio de datos con Python para comprender el comportamiento del negocio, detectar patrones, outliers y generar insights accionables antes de cualquier etapa de modelado o visualización BI.',
          questions: [
            '¿Cómo se comportan las variables principales del dataset?',
            '¿Existen outliers o valores atípicos relevantes?',
            '¿Qué patrones y relaciones aparecen entre métricas clave?',
            '¿Qué insights se pueden extraer para el negocio antes de modelar?'
          ],
          tags: ['PowerBI', 'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Análisis Exploratorio de Datos (EDA) con Python.',
          description: 'Análisis exploratorio de un dataset de ventas para comprender el comportamiento del negocio, detectar patrones, outliers y relaciones entre variables clave antes de la etapa de visualización o modelado. El proyecto incluye limpieza de datos, análisis estadístico, visualizaciones y generación de insights accionables.',
          questions: [
            '¿Cómo evolucionan las ventas en el tiempo?',
            '¿Qué categorías y regiones concentran mayor volumen?',
            '¿Existe relación entre ventas y ganancia?',
            '¿Qué patrones o anomalías requieren atención del negocio?'
          ],
          tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Análisis Demográfico y Económico Global con MySQL y Power BI',
          description: 'Proyecto de análisis de datos utilizando MySQL para modelado y transformación de información, y Power BI para visualización ejecutiva. Se crearon vistas SQL para estructurar datos de países, ciudades, urbanización e idiomas, y posteriormente se diseñó un dashboard interactivo con KPIs globales, mapa geográfico y ranking de países por población.',
          questions: [
            '¿Cómo se distribuye la población mundial por continente?',
            '¿Qué países concentran mayor población?',
            '¿Cuál es la esperanza de vida promedio global?',
            '¿Qué relación existe entre población, GNP y urbanización?',
            '¿Qué regiones presentan mayor concentración demográfica?'
          ],
          tags: ['MySQL', 'SQL', 'Data Modeling', 'Power BI', 'Data Visualization', 'Dashboard Design', 'ETL', 'Business Intelligence']
        }
      ]
    },
    experience: {
      title: 'Experiencia',
      highlight: 'Laboral',
      items: [
        {
          role: 'Analista de Datos / Desarrollador',
          company: 'Workgroup',
          period: 'Febrero 2024 - Actualidad',
          description: 'Recolección, procesamiento y validación de datos de sistemas operativos y de negocio. Desarrollo dashboards en Power BI para seguimiento de KPIs, realizo consultas y análisis con SQL/Python, automatizo reportes para reducir tiempos y errores, y colaboro con negocio/tecnología en mejora continua. También participo en monitoreo y análisis de logs con Docker, Kubernetes y Azure en entornos productivos.'
        },
        {
          role: 'Docente de Python y Ciencia de Datos',
          company: 'Nivel Secundario',
          period: '2022 - Actualidad',
          description: 'Formación en programación, pensamiento lógico y análisis de datos para adolescentes. Diseño proyectos prácticos con Python, visualización y resolución de problemas reales para fortalecer habilidades analíticas.'
        }
      ]
    },
    education: {
      title: 'Mis',
      highlight: 'Estudios',
      items: [
        {
          degree: 'Tecnicatura Universitaria en Ciencia de Datos',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2024 - Actualidad',
          description: 'Formación en análisis de datos, estadística aplicada y herramientas para la toma de decisiones.'
        },
        {
          degree: 'Tecnicatura Universitaria en Programación',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2022 - 2024',
          description: 'Base sólida en desarrollo de software, lógica, estructuras de datos y resolución de problemas.'
        },
        {
          degree: 'Diplomatura en Python',
          institution: 'Universidad Tecnológica Nacional (UTN)',
          period: '2022',
          description: 'Python aplicado a desarrollo y análisis, con enfoque en buenas prácticas y automatización.'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      highlight: 'Directo',
      cards: [
        { title: 'Email', value: 'mariano.unla@gmail.com' },
        { title: 'Teléfono', value: '+54 9 11 6212 3307' },
        { title: 'LinkedIn', value: '/in/marianovergniaud' },
        { title: 'GitHub', value: '/MarianoGabrielV' }
      ]
    },
    footer: {
      rights: '© {year} Mariano Gabriel Vergniaud. Todos los derechos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email'
    }
  },
  en: {
    navbar: {
      brand: 'My Portfolio',
      home: 'Home',
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      language: 'Language'
    },
    hero: {
      name: 'Mariano Gabriel',
      highlight: 'Vergniaud',
      subtitle: 'Data Analyst focused on SQL, Python, Excel, and Power BI.',
      projectsBtn: 'View Projects',
      contactBtn: 'Contact'
    },
    about: {
      title: 'About',
      highlight: 'Me',
      intro: 'Data Analyst with technical and university training in programming and data science. I work in productive environments, turning data into actionable information for decision-making.',
      details: 'I master Advanced Excel, Advanced SQL, Python, and Power BI for exploratory analysis, modeling, and report automation. I develop KPI-oriented dashboards, collaborate with business and technology teams to ensure data quality, and also have teaching experience in Python and Data Science.'
    },
    skills: {
      title: 'Technical',
      highlight: 'Skills',
      groups: [
        {
          title: 'Analysis and BI',
          skills: ['Advanced Excel', 'Power BI', 'DAX', 'KPIs', 'Executive Reporting', 'Interactive Dashboards', 'Power Query']
        },
        {
          title: 'Data and Programming',
          skills: ['Advanced SQL', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server', 'ETL', 'Data Cleaning', 'Data Transformation']
        },
        {
          title: 'Python Libraries (Analysis and Large Volumes)',
          skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'PySpark', 'Dask', 'Polars']
        },
        {
          title: 'Productive Environment and Collaboration',
          skills: ['Git', 'GitHub', 'Netlify', 'REST APIs', 'CI/CD', 'Linux', 'Docker', 'Kubernetes', 'Azure', 'Log Monitoring', 'CRM', 'Automations']
        }
      ]
    },
    projects: {
      title: 'My',
      highlight: 'Projects',
      buttonLabel: 'View Project on GitHub',
      questionsLabel: 'Questions it answers:',
      items: [
        {
          title: 'RFM Analysis + Executive Dashboard (Power BI)',
          description: 'Customer segmentation with RFM (Recency, Frequency, Monetary) and a Power BI dashboard to identify key segments and guide commercial actions such as retention, reactivation, and loyalty.',
          questions: [
            'How are customers distributed by segment (Lost, At Risk, Potential, Champions, Loyal)?',
            'Which segments concentrate most sales?',
            'How does the average ticket change by segment?',
            'Where are the opportunities: reactivation vs loyalty?'
          ],
          tags: ['PowerBI', 'Excel-CSV', 'Python-Pandas']
        },
        {
          title: 'Exploratory Data Analysis (EDA) + Dashboard',
          description: 'Exploratory data analysis with Python to understand business behavior, detect patterns and outliers, and generate actionable insights before any BI modeling or visualization stage.',
          questions: [
            'How do the main variables in the dataset behave?',
            'Are there relevant outliers or atypical values?',
            'What patterns and relationships appear among key metrics?',
            'What insights can be extracted for the business before modeling?'
          ],
          tags: ['PowerBI', 'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Exploratory Data Analysis (EDA) with Python',
          description: 'Exploratory analysis of a sales dataset to understand business behavior, detect patterns, outliers, and relationships among key variables before the visualization or modeling stage. The project includes data cleaning, statistical analysis, visualizations, and actionable insights.',
          questions: [
            'How do sales evolve over time?',
            'Which categories and regions drive the highest volume?',
            'Is there a relationship between sales and profit?',
            'Which patterns or anomalies need attention from the business?'
          ],
          tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Global Demographic and Economic Analysis with MySQL and Power BI',
          description: 'Data analysis project using MySQL for information modeling and transformation, and Power BI for executive visualization. SQL views were created to structure data on countries, cities, urbanization, and languages, and an interactive dashboard was later designed with global KPIs, geographic map, and country ranking by population.',
          questions: [
            'How is the world population distributed by continent?',
            'Which countries concentrate the largest population?',
            'What is the average global life expectancy?',
            'What relationship exists between population, GNP, and urbanization?',
            'Which regions show the highest demographic concentration?'
          ],
          tags: ['MySQL', 'SQL', 'Data Modeling', 'Power BI', 'Data Visualization', 'Dashboard Design', 'ETL', 'Business Intelligence']
        }
      ]
    },
    experience: {
      title: 'Work',
      highlight: 'Experience',
      items: [
        {
          role: 'Data Analyst / Developer',
          company: 'Workgroup',
          period: 'February 2024 - Present',
          description: 'Collection, processing, and validation of data from operating and business systems. I develop Power BI dashboards to track KPIs, run SQL/Python queries and analysis, automate reports to reduce time and errors, and collaborate with business and technology teams on continuous improvement. I also participate in log monitoring and analysis with Docker, Kubernetes, and Azure in production environments.'
        },
        {
          role: 'Python and Data Science Instructor',
          company: 'Secondary Education',
          period: '2022 - Present',
          description: 'Training in programming, logical thinking, and data analysis for teenagers. I design practical projects with Python, visualization, and real problem solving to strengthen analytical skills.'
        }
      ]
    },
    education: {
      title: 'My',
      highlight: 'Education',
      items: [
        {
          degree: 'University Technical Degree in Data Science',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2024 - Present',
          description: 'Training in data analysis, applied statistics, and tools for decision-making.'
        },
        {
          degree: 'University Technical Degree in Programming',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2022 - 2024',
          description: 'Solid foundation in software development, logic, data structures, and problem solving.'
        },
        {
          degree: 'Diploma in Python',
          institution: 'Universidad Tecnológica Nacional (UTN)',
          period: '2022',
          description: 'Python applied to development and analysis, with an emphasis on good practices and automation.'
        }
      ]
    },
    contact: {
      title: 'Direct',
      highlight: 'Contact',
      cards: [
        { title: 'Email', value: 'mariano.unla@gmail.com' },
        { title: 'Phone', value: '+54 9 11 6212 3307' },
        { title: 'LinkedIn', value: '/in/marianovergniaud' },
        { title: 'GitHub', value: '/MarianoGabrielV' }
      ]
    },
    footer: {
      rights: '© {year} Mariano Gabriel Vergniaud. All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email'
    }
  },
  pt: {
    navbar: {
      brand: 'Meu Portfólio',
      home: 'Início',
      about: 'Sobre mim',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      education: 'Estudos',
      contact: 'Contato',
      language: 'Idioma'
    },
    hero: {
      name: 'Mariano Gabriel',
      highlight: 'Vergniaud',
      subtitle: 'Analista de Dados com foco em SQL, Python, Excel e Power BI.',
      projectsBtn: 'Ver Projetos',
      contactBtn: 'Contato'
    },
    about: {
      title: 'Sobre',
      highlight: 'Mim',
      intro: 'Analista de Dados com formação técnica e universitária em programação e ciência de dados. Trabalho em ambientes produtivos, transformando dados em informação acionável para a tomada de decisões.',
      details: 'Domino Excel Avançado, SQL Avançado, Python e Power BI para análise exploratória, modelagem e automação de relatórios. Desenvolvo dashboards orientados a KPIs, colaboro com negócios e tecnologia para garantir a qualidade dos dados e também possuo experiência docente em Python e Ciência de Dados.'
    },
    skills: {
      title: 'Habilidades',
      highlight: 'Técnicas',
      groups: [
        {
          title: 'Análise e BI',
          skills: ['Excel Avançado', 'Power BI', 'DAX', 'KPIs', 'Relatórios Executivos', 'Dashboards Interativos', 'Power Query']
        },
        {
          title: 'Dados e Programação',
          skills: ['SQL Avançado', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server', 'ETL', 'Limpeza de Dados', 'Transformação de Dados']
        },
        {
          title: 'Bibliotecas Python (Análise e Grandes Volumes)',
          skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'PySpark', 'Dask', 'Polars']
        },
        {
          title: 'Ambiente Produtivo e Colaboração',
          skills: ['Git', 'GitHub', 'Netlify', 'APIs REST', 'CI/CD', 'Linux', 'Docker', 'Kubernetes', 'Azure', 'Monitoramento de Logs', 'CRM', 'Automações']
        }
      ]
    },
    projects: {
      title: 'Meus',
      highlight: 'Projetos',
      buttonLabel: 'Ver Projeto no GitHub',
      questionsLabel: 'Perguntas que responde:',
      items: [
        {
          title: 'Análise RFM + Dashboard Executivo (Power BI)',
          description: 'Segmentação de clientes com RFM (Recency, Frequency, Monetary) e dashboard no Power BI para identificar segmentos-chave e orientar ações comerciais (retenção, reativação e fidelização).',
          questions: [
            'Como os clientes são distribuídos por segmento (Lost, At Risk, Potential, Champions, Loyal)?',
            'Quais segmentos concentram a maior parte das vendas?',
            'Como muda o ticket médio por segmento?',
            'Onde estão as oportunidades: reativação versus fidelização?'
          ],
          tags: ['PowerBI', 'Excel-CSV', 'Python-Pandas']
        },
        {
          title: 'Análise Exploratória de Dados (EDA) + Dashboard',
          description: 'Análise exploratória de dados com Python para compreender o comportamento do negócio, detectar padrões, outliers e gerar insights acionáveis antes de qualquer etapa de modelagem ou visualização de BI.',
          questions: [
            'Como se comportam as principais variáveis do dataset?',
            'Existem outliers ou valores atípicos relevantes?',
            'Quais padrões e relações aparecem entre métricas-chave?',
            'Quais insights podem ser extraídos para o negócio antes de modelar?'
          ],
          tags: ['PowerBI', 'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Análise Exploratória de Dados (EDA) com Python',
          description: 'Análise exploratória de um dataset de vendas para compreender o comportamento do negócio, detectar padrões, outliers e relações entre variáveis-chave antes da etapa de visualização ou modelagem. O projeto inclui limpeza de dados, análise estatística, visualizações e geração de insights acionáveis.',
          questions: [
            'Como as vendas evoluem ao longo do tempo?',
            'Quais categorias e regiões concentram maior volume?',
            'Existe relação entre vendas e lucro?',
            'Quais padrões ou anomalias exigem atenção do negócio?'
          ],
          tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },
        {
          title: 'Análise Demográfica e Econômica Global com MySQL e Power BI',
          description: 'Projeto de análise de dados utilizando MySQL para modelagem e transformação de informações, e Power BI para visualização executiva. Foram criadas views SQL para estruturar dados de países, cidades, urbanização e idiomas, e posteriormente foi desenhado um dashboard interativo com KPIs globais, mapa geográfico e ranking de países por população.',
          questions: [
            'Como a população mundial é distribuída por continente?',
            'Quais países concentram maior população?',
            'Qual é a expectativa de vida média global?',
            'Qual relação existe entre população, GNP e urbanização?',
            'Quais regiões apresentam maior concentração demográfica?'
          ],
          tags: ['MySQL', 'SQL', 'Data Modeling', 'Power BI', 'Data Visualization', 'Dashboard Design', 'ETL', 'Business Intelligence']
        }
      ]
    },
    experience: {
      title: 'Experiência',
      highlight: 'Profissional',
      items: [
        {
          role: 'Analista de Dados / Desenvolvedor',
          company: 'Workgroup',
          period: 'Fevereiro de 2024 - Atual',
          description: 'Coleta, processamento e validação de dados de sistemas operacionais e de negócio. Desenvolvo dashboards no Power BI para acompanhamento de KPIs, realizo consultas e análises com SQL/Python, automatizo relatórios para reduzir tempo e erros e colaboro com negócios/tecnologia em melhoria contínua. Também participo de monitoramento e análise de logs com Docker, Kubernetes e Azure em ambientes produtivos.'
        },
        {
          role: 'Professor de Python e Ciência de Dados',
          company: 'Ensino Médio',
          period: '2022 - Atual',
          description: 'Formação em programação, pensamento lógico e análise de dados para adolescentes. Designo projetos práticos com Python, visualização e resolução de problemas reais para fortalecer habilidades analíticas.'
        }
      ]
    },
    education: {
      title: 'Meus',
      highlight: 'Estudos',
      items: [
        {
          degree: 'Tecnicatura Universitária em Ciência de Dados',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2024 - Atual',
          description: 'Formação em análise de dados, estatística aplicada e ferramentas para a tomada de decisões.'
        },
        {
          degree: 'Tecnicatura Universitária em Programação',
          institution: 'Universidad Nacional de Guillermo Brown',
          period: '2022 - 2024',
          description: 'Base sólida em desenvolvimento de software, lógica, estruturas de dados e resolução de problemas.'
        },
        {
          degree: 'Diplomatura em Python',
          institution: 'Universidad Tecnológica Nacional (UTN)',
          period: '2022',
          description: 'Python aplicado ao desenvolvimento e à análise, com foco em boas práticas e automação.'
        }
      ]
    },
    contact: {
      title: 'Contato',
      highlight: 'Direto',
      cards: [
        { title: 'Email', value: 'mariano.unla@gmail.com' },
        { title: 'Telefone', value: '+54 9 11 6212 3307' },
        { title: 'LinkedIn', value: '/in/marianovergniaud' },
        { title: 'GitHub', value: '/MarianoGabrielV' }
      ]
    },
    footer: {
      rights: '© {year} Mariano Gabriel Vergniaud. Todos os direitos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email'
    }
  }
};
