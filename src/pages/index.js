import React, { useEffect }  from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import {useColorMode} from '@docusaurus/theme-common';
import { timePanelSharedProps } from 'element-plus/es/components/time-picker/src/props/shared.mjs';

const contactLinks = [
  {label: 'Github', href: 'https://github.com/JerryLinyx'},
  {label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuxuan0/'},
  {label: 'Email', href: 'mailto:yl6061@columbia.edu'},
];

const researchExperiences = [
    {
    image: 'index/isbi2026.png',
    title: 'Bayesian PET Reconstruction with Learned Normalizing Flow Priors',
    link: '',
    metaLeft: (
      <>
        <a href="">Hengjia Ran</a>,&nbsp; 
        <a href="">Yuxuan Lin</a>,&nbsp; 
        <a href="https://scholar.google.com/citations?user=JbkbGvEAAAAJ">Huafeng Liu</a>,&nbsp;
        <a href="https://scholar.google.com/citations?user=EA4ZKygAAAAJ">Bo Zhao</a>
        <br />
       Submitted to IEEE ISBI 2026
      </>
    ),
    date: '',
    bullets: [
    
    ],
  },
  {
    image: 'index/PET.png',
    title: 'Flow-based Deep Generative Model for PET Image Reconstruction - Senior Thesis',
    link: 'docs/Flow/',
    metaLeft: (
      <>
        Adviser: <a href="https://zjui.intl.zju.edu.cn/en/team/teacherinfo/2736">Bo Zhao</a> (ZJU CIIP Group)
      </>
    ),
    date: 'Dec. 2024 - Jun. 2025',
    bullets: [
      <>Formulated PET (Positron Emission Tomography) reconstruction as a Bayesian inference problem.
      </>,
      <>Applied Normalizing Flows (<strong>RealNVP</strong>, <strong>Glow</strong>) to model the posterior distribution of tracer activity.</>,
      <>
        Implemented a Deep Probabilistic Imaging pipeline, enhancing reconstruction accuracy and providing crucial uncertainty estimates for clinical diagnosis.
      </>,
      <>
        Scaled training with multi-GPU parallelization (3.7x speedup) while maintaining image quality.
      </>,
    ],
  },
  {
    image: 'index/officechair.png',
    title: 'Generative AI Based 3D Models Generation',
    link: '',
    metaLeft: (
      <>
        Adviser: <a href="https://person.zju.edu.cn/chenlq">Liuqing Chen</a>
        <a href="https://icilab.cn/"> (ZJU ICI Lab)</a>
      </>
    ),
    date: 'Jun. 2024 - Nov. 2024',
    bullets: [
      <>Created a Generative AI-powered Blender plugin in Python to automate the 3D design workflow, supporting 3D prototype management, segmentation, and Gaussian ↔ Mesh conversion.</>,
      <>Engineered text-to-3D model generation using Transformer/Diffusion-based Gaussian Splatting and mesh rendering pipelines, cutting average modeling time for artists by 50%.</>,
      <>Deployed a Flask-based backend to track user interactions and deliver 3D generation services.</>,
    ],
  },
];

const professionalExperiences = [
  {
    image: 'index/hikvision.jpeg',
    title: 'Software Development Intern',
    link: '',
    metaLeft: 'IoT Product Group 5, Ezviz',
    date: 'Jul. 2024 - Sep. 2024',
    bullets: [
      <>Developed and integrated key system modules for commercial cleaning robots on <strong>Linux</strong>, enabling autonomous navigation and improving cleaning path efficiency.</>,
      <>Built sensor logic on <strong>FreeRTOS</strong> for microcontroller, ensuring precise control and real-time operation.</>,
    ],
  },
  {
    image: 'index/zjui.png',
    title: 'Teaching Assistant - Math213 Discrete Mathematics',
    link: 'https://cs.illinois.edu/academics/courses/math213',
    metaLeft: (
      <>
        Supervisor: <a href="https://zjui.intl.zju.edu.cn/en/node/1651">Meng Zhang</a>
      </>
    ),
    date: 'Sep. 2024 - Jan. 2025',
    bullets: [
      <>Hold weekly office hours and discussion sessions to strengthen students&apos; grasp of core discrete mathematics concepts.</>,
      <>Designed and graded assignments and exams, ensuring alignment with learning objectives.</>,
    ],
  },
];

const projects = [
  {
    image: 'index/dashboard.png',
    title: 'FinGOAT: Financial Graph-Orchestrated Agentic Trading',
    link: 'https://github.com/JerryLinyx/FinGOAT',
    date: 'Nov. 2025 - Present',
    metaLeft: (
      <>
        Supervisor: <a href="https://www.linkedin.com/in/parijatdube/">Parijat Dube</a>,&nbsp;
        <a href='https://www.linkedin.com/in/chenw615/'>Chen Wang</a>
      </>
    ),
    bullets: [
      <>Implemented a Go backend <strong>(Gin + GORM + Viper + JWT)</strong> and <strong>TypeScript/React (Vite)</strong> frontend.</>,
      <>Containerized core services with <strong>Docker</strong>, enabling reproducible deployment of <strong>PostgreSQL</strong>, <strong>Redis</strong>, and backend APIs.</>,
    ],
  },
  {
    image: 'index/pvz.png',
    title: 'FPGA-based Plants vs. Zombies: An SoC Game Design',
    link: '',
    metaLeft: (
      <>  
        Supervisor: <a href="https://zjui.intl.zju.edu.cn/en/node/768">Chushan Li</a>
      </>
    ),
    date: 'Apr. 2025 - May. 2025',
    bullets: [
      <>In a team of 2, developed an <strong>FPGA</strong>-based Plants vs. Zombies game as a System-on-Chip (SoC), integrating <strong>SystemVerilog</strong> hardware modules with a Nios II soft-core processor.</>,
      <>Implemented VGA display, sprite rendering, collision detection, and USB keyboard input modules based on FSM control and ROM buffering, achieving responsive real-time interaction and smooth 60 FPS gameplay on a 640x480 monitor.</>,
      <>Integrated hardware-software co-design in Platform Designer, connecting VGA, USB, SDRAM, and logic modules via the Avalon bus and verifying timing through ModelSim simulation.</>,
    ],
  },
  {
    image: 'index/sfc.jpeg',
    title: 'Smart Fitness Coach: Full-stack CV-powered AIoT App',
    link: '',
    metaLeft: (
      <>  
        Supervisor: <a href="https://zjui.intl.zju.edu.cn/en/node/1652">Timothy Haw-Yu Lee</a>
      </>
    ),
    date: 'Jan. 2025 - May. 2025',
    bullets: [
      <>Led a team of 4 to engineer an ESP32-based hardware-software co-designed IoT system, enabling real-time video streaming and asynchronous control of lighting and motor modules.</>,
      <>Implemented a Flask backend with SQLite for local data storage, and deployed YOLO/MediaPipe inference service for real-time pose estimation and repetition counting.</>,
      <>Built a Vue3 (UniApp) frontend to visualize workout sessions and user history, and integrated DeepSeek API to provide personalized fitness insights.</>,
    ],
  },
  {
    image: 'index/lenet.png',
    title: 'CUDA-LeNet: GPU-Accelerated Convolution Kernel Optimization',
    link: 'https://github.com/JerryLinyx/LeNet-CUDA-ECE408/tree/main/Project',
    metaLeft: (
      <>
        Supervisor: <a href="https://ece.illinois.edu/about/directory/faculty/kindrtnk">Volodymyr Kindratenko</a>
      </>
    ),
    date: 'Sep. 2024 - Dec. 2024',
    bullets: [
      <>Optimized the forward-pass of a LeNet-5 convolutional layer using <strong>CUDA</strong> with an advanced GEMM kernel.</>,
      <>Applied techniques including streams, Tensor Cores, memory tiling, FP16 arithmetic, and loop unrolling to maximize throughput.</>,
      <>Achieved 27,909x speedup over the CPU implementation and 36% over the parallel baseline.</>,
    ],
  },
  {
    image: 'index/os.png',
    title: 'LOS - A Light Linux-Like Operating System',
    link: 'https://github.com/JerryLinyx/Linux-OS-Kernel-ECE391/tree/main/mp3',
    metaLeft: (
      <>
        Supervisor: <a href="https://cs.illinois.edu/about/people/affiliate-faculty/klevchen">Kirill Levchenko</a>,{' '}
        <a href="https://ece.illinois.edu/about/directory/faculty/dwang47">Dong Kai Wang</a>
      </>
    ),
    date: 'Mar. 2024 - May 2024',
    bullets: [
      <>Led a team of 4 to construct a Linux-like operating system kernel from scratch using <strong>C</strong> and <strong>x86 assembly</strong>.</>,
      <>Developed OS modules and services including virtual memory, file system, terminal display, interrupt / system calls / exception handling, and device drivers for keyboards, RTC, and PIT.</>,
      <>Completed kernel and user modes switching, multi-terminal switching, and multi-process scheduling.</>,
    ],
  },
  {
    image: 'index/fourlevels.png',
    title: 'Infinity Revelation: Demo of an Adventure Puzzle-Solving Game',
    link: 'https://github.com/JerryLinyx/CS415',
    metaLeft: (
      <>
        Supervisor: <a href="https://cs.illinois.edu/about/people/faculty/shaffer1">Eric Shaffer</a>
      </>
    ),
    date: 'Mar. 2024 - Apr. 2024',
    bullets: [
      <>In a team of 5, developed an adventure puzzle-solving game demo inspired by Infinity Blade, using <strong>Unreal Engine 5</strong> and Blueprints.</>,
      <>Implemented core gameplay mechanics including health and attack systems, collectible items, and AI enemies for 4 integrated levels (Lava Parkour, Laser Puzzle, Riddle Maze, and Traffic Jam), delivering varied gameplay.</>,
    ],
  },
];

const courseColumns = [
  [
    {label: 'ECE408/CS483 - Applied Parallel Programming', href: 'https://ece.illinois.edu/academics/courses/ece408'},
    {label: 'ECE449/CS446 - Machine Learning', href: 'https://cs.illinois.edu/academics/courses/cs446'},
    {label: 'ECE448/CS440 - Artificial Intelligence', href: 'https://cs.illinois.edu/academics/courses/cs440'},
    {label: 'ECE448/CS438 - Communication Networks', href: 'https://cs.illinois.edu/academics/courses/cs438'},
    {label: 'ECE391 - Computer Systems Engineering', href: 'https://ece.illinois.edu/academics/courses/ece391'},
  ],
  [
    {label: 'ECE470 - Introduction to Robotics', href: 'https://ece.illinois.edu/academics/courses/ece470'},
    {label: 'CS412 - Introduction to Data Mining', href: 'https://cs.illinois.edu/academics/courses/cs412'},
    {label: 'CS411 - Database Systems', href: 'https://cs.illinois.edu/academics/courses/cs411'},
    {label: 'CS415 - Game Development', href: 'https://cs.illinois.edu/academics/courses/cs415'},
    {label: 'CS225 - Data Structure', href: 'https://cs.illinois.edu/academics/courses/cs225'},
  ],
];

function ExperienceCard({item}) {
  const imageUrl = useBaseUrl(item.image);

  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={item.title} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        {item.link ? (
          <a href={item.link} className={styles.cardTitle} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ) : (
          <span className={styles.cardTitle}>{item.title}</span>
        )}
        <div className={styles.metaRow}>
          <span className={styles.metaLeft}>{item.metaLeft}</span>
          <span className={styles.metaRight}>{item.date}</span>
        </div>
        <ul className={styles.bulletList}>
          {item.bullets.map((bullet, bulletIndex) => (
            <li key={`${item.title}-bullet-${bulletIndex}`}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperienceSection({title, description, items}) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && <p className={styles.sectionDescription}>{description}</p>}
      </header>
      <div className={styles.cardList}>
        {items.map(item => (
          <ExperienceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}


function VisitorMap() {
  const {colorMode} = useColorMode(); // "light" | "dark"

  const src = colorMode === "dark"
    ? "https://mapmyvisitors.com/map.png?cl=0e1633&w=800&t=n&d=HgG0G9MPsyNUyxeSL4SQwMmobQkkAosnFPTAs8IgEyI&co=0b4975&ct=cdd4d9"
    : "https://mapmyvisitors.com/map.png?cl=ffffff&w=800&t=n&d=HgG0G9MPsyNUyxeSL4SQwMmobQkkAosnFPTAs8IgEyI&co=2d78ad&ct=ffffff";

  return (
    <a href="https://mapmyvisitors.com/web/1c0m6" target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt="Visitor Map"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />
    </a>
  );
}

export default function Home() {
  const avatarImage = useBaseUrl('index/self3.jpg');

  return (
    <Layout title="Yuxuan Lin" description="Personal site for Yuxuan Lin">
      <main className={styles.resumePage}>
        <div className={styles.pageContainer}>
          <section className={styles.introSection}>
            <div className={styles.introText}>
              <p className={styles.heroName}>林煜轩 Yuxuan Lin</p>
              <p className={styles.heroContact}>
                <a href="mailto:yl6061@columbia.edu">yl6061@columbia.edu</a>
                <span className={styles.divider}>|</span>
                <span>+1 (646) 705-7015</span>
                <span className={styles.divider}>|</span>
                <span>+86 19533230071</span>
              </p>
              <p className={styles.heroSummary}>
                Hi! I am currently pursuing a M.S. in Computer Engineering
                at <b>Columbia University</b>, expecting to graduate in December 2026. 
                <br />
                Prior to this, I earned a B.S. in Computer Engineering from <b>University of Illinois Urbana-Champaign</b> and a B.Eng. in Electronic & Computer Engineering from <b>Zhejiang University</b> at the same time.
              </p>
              <p className={styles.heroLinks}>
                {contactLinks.map((link, index) => (
                  <React.Fragment key={link.label}>
                    {index > 0 && <span className={styles.divider}>/</span>}
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className={styles.introAvatar}>
              {/* <a href={avatarImage} target="_blank" rel="noopener noreferrer">
                <img src={avatarImage} alt="Yuxuan Lin" className={styles.avatarImage} />
              </a> */}
              <img src={avatarImage} alt="Yuxuan Lin" className={styles.avatarImage} />
            </div>
          </section>

          <ExperienceSection
            title="Research Experiences"
            description="My research explores generative models and medical imaging."
            items={researchExperiences}
          />

          <ExperienceSection
            title="Professional Experiences"
            description="I had fun doing internships in software development."
            items={professionalExperiences}
          />

          <ExperienceSection
            title="Selected Projects"
            description={(
              <>
                I am familiar with C/C++ and Linux. Also, I have experience in CUDA, Golang (Gin, GORM), Python (PyTorch, Flask), SQL/NoSQL, x86 Assembly, and UE5.
              </>
            )}
            items={projects}
          />
          <section className={styles.section}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Relevant courses:</h2>
            </header>
            <div className={styles.coursesGrid}>
              {courseColumns.map((column, columnIndex) => (
                <ul key={`course-column-${columnIndex}`} className={styles.courseList}>
                  {column.map(course => (
                    <li key={course.label}>
                      <a href={course.href} target="_blank" rel="noopener noreferrer">
                        {course.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          
          <div className={styles.mapContainer}>
            <VisitorMap />
          </div>





          <p className={clsx(styles.sourceNote, 'text--center')}>
          Adapted design and styles from{' '}
            <a href="https://github.com/jonbarron/jonbarron_website" target="_blank" rel="noopener noreferrer">
            Jon Barron.
            </a>
            
          </p>
        </div>
      </main>
    </Layout>
  );
}
