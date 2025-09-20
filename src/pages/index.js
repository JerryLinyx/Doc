import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const contactLinks = [
  {label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuxuan0/'},
  {label: 'Github', href: 'https://github.com/JerryLinyx'},
];

const researchExperiences = [
  {
    image: 'index/PET.png',
    title: 'Flow-based Deep Generative Model for PET Image Reconstruction - Senior Thesis',
    link: '',
    metaLeft: (
      <>
        Adviser: <a href="https://zjui.intl.zju.edu.cn/en/team/teacherinfo/2736">Bo Zhao</a> (ZJU CIIP Group)
      </>
    ),
    date: 'Dec. 2024 - Jun. 2025',
    bullets: [
      <>
        Formulated PET (Positron Emission Tomography) reconstruction as a Bayesian inference problem, using conditional normalizing flows (<strong>RealNVP</strong>, <strong>Glow</strong>) to model the posterior distribution of tracer activity.
      </>,
      <>
        Implemented a Deep Probabilistic Imaging (DPI) pipeline that outputs both posterior mean reconstructions and uncertainty estimates.
      </>,
      <>
        Scaled training with multi-GPU parallelization (3.7x speedup) while keeping image quality stable ({'<'}1% drop).
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
      <>Built a GenAI powered Blender plugin with Python, supporting 3D prototype management, segmentation, and Gaussian ↔ Mesh conversion.</>,
      <>Enabled text-to-3D model generation using Transformer-based Gaussian Splatting and mesh rendering pipelines.</>,
      <>Deployed a Flask-based backend to track user interactions and support 3D generation services.</>,
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
      <>Developed control system modules for commercial cleaning robots on <strong>FreeRTOS</strong> and <strong>Linux OS</strong>.</>,
      <>Designed and implemented sensor logic for GD32 microcontroller using the Keil environment, ensuring precise control and real-time operation.</>,
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
      <>Led bi-weekly discussion sessions to strengthen students&apos; grasp of core discrete mathematics concepts.</>,
      <>Contributed to the design of course materials, including homework and exam samples, ensuring alignment with learning objectives.</>,
      <>Graded assignments and exams with accuracy and provided constructive feedback; supported students through office hours.</>,
    ],
  },
];

const projects = [
  {
    image: 'index/Lenet.png',
    title: 'GPU Convolution Kernel Optimizations',
    link: 'https://github.com/JerryLinyx/LeNet-CUDA-ECE408/tree/main/Project',
    metaLeft: (
      <>
        Supervisor: <a href="https://ece.illinois.edu/about/directory/faculty/kindrtnk">Volodymyr Kindratenko</a>
      </>
    ),
    date: 'Sep. 2024 - Dec. 2024',
    bullets: [
      <>Implemented and optimized the forward-pass of a convolutional layer of the modified LeNet-5 using <strong>CUDA</strong>.</>,
      <>Used Streams to overlap computation with data transfer.</>,
      <>Used Tensor Cores and shared memory tiling to speed up matrix multiplication with an advanced GEMM kernel.</>,
      <>Further optimizations included loop unrolling, constant memory, and mixed-precision (FP16) arithmetic.</>,
    ],
  },
  {
    image: 'index/fish.png',
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
      <>Developed a Linux-like operating system kernel from scratch using <strong>C</strong> and <strong>x86 assembly</strong>.</>,
      <>Implemented interrupts, system calls, and exception handling managed by the 8259 PIC, including kernel/user state switching with TSS.</>,
      <>Completed the virtual memory system, file system, and terminal support; integrated devices including keyboard, RTC, and PIT.</>,
      <>Delivered multi-process scheduling with per-terminal buffers and process control blocks; led a four-person team using Git and GDB.</>,
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
      <>Developed an adventure puzzle-solving game demo in a team of five, themed after Infinity Blade using <strong>Unreal Engine</strong> Blueprints.</>,
      <>Implemented core gameplay mechanics including health system, collectible items, and multiple enemy archetypes.</>,
      <>Built four integrated levels—Lava Parkour, Laser Puzzle, Riddle Maze, and Traffic Jam—to deliver varied gameplay.</>,
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
                Prior to this, I earned a B.S. in Computer Engineering from <b>University of Illinois Urbana-Champaign</b> and a B.Eng. in Electronic & Computer Engineering from <b>Zhejiang University</b>.
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
              <a href={avatarImage} target="_blank" rel="noopener noreferrer">
                <img src={avatarImage} alt="Yuxuan Lin" className={styles.avatarImage} />
              </a>
            </div>
          </section>

          <ExperienceSection
            title="Research Experiences"
            description="My research explores generative models for medical imaging and 3D content creation."
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
