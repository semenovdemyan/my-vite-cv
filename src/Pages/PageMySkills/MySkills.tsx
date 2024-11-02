import React, { useState } from 'react';
import styles from './MySkills.module.css';

const skills = [
  {
    skillName: 'HTML 5',
    description:
      'HTML 5 — это основа веб-разработки. Он предоставляет семантическую разметку, что улучшает доступность и SEO. Его новые теги <video> и <audio>, позволяют легко добавлять мультимедийный контент без плагинов. Также HTML 5 поддерживает хранение данных в браузере и работу в offline-режиме, что делает приложения более быстрыми и удобными. HTML 5 помогает создавать современные и функциональные сайты.',
    descriptionEng:
      'HTML 5 is the foundation of web development. It provides semantic markup, which improves accessibility and SEO. Its new <video> and <audio> tags, make it easy to add multimedia content without plugins. HTML 5 also supports in-browser storage and offline operation, making applications faster and more convenient. HTML 5 helps to create modern and functional websites.',
  },
  {
    skillName: 'CSS 3',
    description:
      'Знание CSS3 — это ключевой навык для любого веб-разработчика. Во-первых, он позволяет создавать привлекательные и адаптивные интерфейсы, улучшая пользовательский опыт. CSS3 включает новые возможности, такие как градиенты, тени, анимации и трансформации, что делает дизайн более современным и интерактивным. Кроме того, CSS3 поддерживает адаптивный дизайн, позволяя сайтам корректно отображаться на различных устройствах. Это не только повышает визуальную привлекательность, но и способствует лучшему SEO и производительности. В итоге, освоение CSS3 помогает создавать более качественные и конкурентоспособные веб-продукты.',
    descriptionEng:
      'Knowledge of CSS3 is a key skill for any web developer. Firstly, it allows you to create attractive and adaptive interfaces, improving the user experience. CSS3 includes new features such as gradients, shadows, animations and transformations, making the design more modern and interactive. In addition, CSS3 supports responsive design, allowing websites to display correctly on a variety of devices. This not only enhances visual appeal, but also contributes to better SEO and performance. In summary, mastering CSS3 helps you create better and more competitive web products.',
  },
  {
    skillName: 'JavaScript',
    description:
      'JavaScript — это "мускулы" интерактивных веб-сайтов, приводящие их в движение. JS добавляет динамику, позволяет работать с формами и анимациями, делает страницы более отзывчивыми, например, загружая данные без перезагрузки. Он также является основой для популярных библиотек и фреймворков, таких как React. В общем, JavaScript помогает делать веб-приложения более привлекательными и удобными для пользователей.',
    descriptionEng:
      'JavaScript is the “muscle” of interactive websites, setting them in motion. JS adds dynamics, allows you to work with forms and animations, and makes pages more responsive by, for example, loading data without reloading. It is also the basis for popular libraries and frameworks such as React. All in all, JavaScript helps make web applications more attractive and user-friendly.',
  },
  {
    skillName: 'TypeScript',
    description:
      'TypeScript полезен тем, что добавляет статическую типизацию к JavaScript. Это помогает находить ошибки на этапе разработки, делая код более надежным. С TypeScript легче работать в больших проектах, так как он улучшает читаемость и поддержку кода. Он также поддерживает современные функции JavaScript и предоставляет инструменты для автодополнения и рефакторинга. TypeScript помогает разработчикам создавать более качественные и структурированные приложения.',
    descriptionEng:
      'TypeScript is useful because it adds static typing to JavaScript. This helps to find errors at the development stage, making the code more reliable. TypeScript is easier to work with in large projects because it improves code readability and maintainability. It also supports modern JavaScript features and provides tools for autocomplete and refactoring. TypeScript helps developers create better and more structured applications.',
  },
  {
    skillName: 'React JS',
    description:
      'React предлагает ряд преимуществ: компонентный подход для удобства разработки, виртуальный DOM для повышения производительности, простое управление состоянием, широкая экосистема библиотек и активное сообщество, что делает его идеальным для создания быстрых и интерактивных веб-приложений.',
    descriptionEng:
      'React offers a number of advantages: a component-based approach for ease of development, a virtual DOM for improved performance, easy state management, a broad ecosystem of libraries, and an active community, making it ideal for building fast and interactive web applications.',
  },
  {
    skillName: 'Vite, Webpack',
    description:
      'Vite и Webpack — это инструменты для сборки проектов на JavaScript. Webpack помогает упаковывать все файлы вашего проекта (JavaScript, CSS, изображения) в один или несколько итоговых файлов. Он позволяет использовать плагины и загрузчики для обработки различных типов файлов и оптимизации кода. Vite делает то же самое, но работает быстрее, особенно в режиме разработки. Он использует современный подход с использованием ES-модулей, что позволяет обновлять страницы без перезагрузки. Vite проще настраивать и быстрее запускается.',
    descriptionEng:
      'Vite and Webpack are tools for building JavaScript projects. Webpack helps you package all your project files (JavaScript, CSS, images) into one or more final files. It allows you to use plugins and loaders to handle different file types and optimize your code. Vite does the same thing, but runs faster, especially in development mode. It takes a modern approach using ES modules, which allows you to update pages without reloading. Vite is easier to customize and faster to run.',
  },
  {
    skillName: 'Docker',
    description:
      'Docker полезен тем, что он изолирует проекты в контейнерах, упрощает настройку окружения, работает на любых системах, облегчает масштабирование и автоматизацию процессов тестирования и развертывания, позволяет быстро запускать окружения и управлять версиями.',
    descriptionEng:
      'Docker is useful because it isolates projects in containers, simplifies environment setup, works on any system, facilitates scaling and automation of testing and deployment processes, and allows for quick environment launches and version management.',
  },
  {
    skillName: 'Figma',
    description:
      'Знания Figma полезны фронтенд-разработчику, потому что помогают лучше понимать визуальные компоненты интерфейса, упрощают общение с дизайнерами и заказчиками. С Figma упрощается процесс экспорта изображений и компонентов, а ещё становится проще работать с адаптивностью.',
    descriptionEng:
      'Knowledge of Figma is useful for frontend developers because it helps to better understand the visual components of the interface, simplifies communication with designers and clients. Figma also makes the process of exporting images and components easier, and it becomes simpler to work with responsiveness.',
  },
  {
    skillName: 'Chat GPT',
    description:
      'ChatGPT - это определённо мастхэв для современного разработчика, ускоряет процесс разработки веб-приложений, снимая часть рутинных задач и предоставляя быстрое решение вопросов, помощь в написании кода и объяснения концепций. Он может генерировать идеи, создавать примеры кода и давать советы по оптимизации, что позволяет разработчикам сосредоточиться на более важных задачах и сократить время на поиски информации.',
    descriptionEng:
      'ChatGPT is definitely a must-have for modern developers. It speeds up the process of web application development by taking care of routine tasks and providing quick solutions to questions, assistance with coding, and explanations of concepts. It can generate ideas, create code examples, and give optimization tips, allowing developers to focus on more important tasks and reduce the time spent searching for information.',
  },
];

const renderSkills = (
  skills: { skillName: string; descriptionEng: string }[],
  onHover: (text: string) => void
) => {
  return (
    <ul className={styles['skillsList']}>
      {skills.map((skill) => (
        <li
          key={skill.skillName}
          onMouseEnter={() => onHover(skill.descriptionEng)}
          onMouseLeave={() => onHover('')}
        >
          <h2>{skill.skillName}</h2>
        </li>
      ))}
    </ul>
  );
};

export const MySkills: React.FC = () => {
  const [hoveredText, setHoveredText] = useState<string>('');

  return (
    <>
      <div style={{ fontSize: '30px' }} className={styles['skillsWrapper']}>
        {renderSkills(skills, setHoveredText)}
        <div className={styles['skillsBanner']}>
          {hoveredText ? (
            hoveredText
          ) : (
            <div>
              Right now, my site doesn’t look quite the way I envisioned it.
              <br />
              <br />
              While the site translation "by button" and the mobile version are
              still in development, you can hover over the skill to learn about
              its usefulness for a web developer.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
