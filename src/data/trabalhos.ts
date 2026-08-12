import type { ImageMetadata } from 'astro';

import img1 from '../assets/trabalhos/trabalho-1.png';
import img2 from '../assets/trabalhos/trabalho-2.png';
import img3 from '../assets/trabalhos/trabalho-3.png';
import img4 from '../assets/trabalhos/trabalho-4.png';
import img5 from '../assets/trabalhos/trabalho-5.png';
import img6 from '../assets/trabalhos/trabalho-6.png';
import img7 from '../assets/trabalhos/trabalho-7.png';
import img8 from '../assets/trabalhos/trabalho-8.png';
import img9 from '../assets/trabalhos/trabalho-9.png';
import img10 from '../assets/trabalhos/trabalho-10.png';
import img11 from '../assets/trabalhos/trabalho-11.png';
import img12 from '../assets/trabalhos/trabalho-12.png';
import img13 from '../assets/trabalhos/trabalho-13.png';

export type Estilo = 'realismo' | 'fine-line' | 'old-school';

export interface Trabalho {
  id: string;
  imagem: ImageMetadata;
  estilo: Estilo;
  destaque: boolean;
  ordem: number;
  legenda: { pt: string; en: string };
  aspecto: 'retrato' | 'paisagem';
}

export const trabalhos: Trabalho[] = [
  {
    id: 'leao-relogio',
    imagem: img1,
    estilo: 'realismo',
    destaque: true,
    ordem: 1,
    aspecto: 'retrato',
    legenda: {
      pt: 'Retrato de leão em realismo black & grey, com relógio de bolso costurado à anatomia do antebraço.',
      en: "Lion portrait in black & grey realism, a pocket watch worked into the forearm's own anatomy.",
    },
  },
  {
    id: 'madona-crianca',
    imagem: img12,
    estilo: 'realismo',
    destaque: true,
    ordem: 2,
    aspecto: 'retrato',
    legenda: {
      pt: 'Madona com o filho nos braços, em realismo suave — parte de uma manga que segue até o pulso.',
      en: 'A Madonna cradling her child, in soft realism — part of a sleeve that runs all the way to the wrist.',
    },
  },
  {
    id: 'cruz-leao',
    imagem: img8,
    estilo: 'realismo',
    destaque: true,
    ordem: 3,
    aspecto: 'paisagem',
    legenda: {
      pt: 'Uma cruz divide rosto e leão no mesmo antebraço — fé e força lidas em dois tempos.',
      en: "A cross splits a man's face and a lion across the same forearm — faith and strength read in two beats.",
    },
  },
  {
    id: 'espartano-aguia',
    imagem: img11,
    estilo: 'realismo',
    destaque: true,
    ordem: 4,
    aspecto: 'paisagem',
    legenda: {
      pt: 'Um espartano de lança em riste sobre o olhar de uma águia — dois guardiões, um braço só.',
      en: 'A spartan with spear raised, above the stare of an eagle — two guardians sharing one arm.',
    },
  },
  {
    id: 'palmeiras',
    imagem: img3,
    estilo: 'old-school',
    destaque: true,
    ordem: 5,
    aspecto: 'paisagem',
    legenda: {
      pt: 'Old school a cores: escudo, taça e a linha do tempo de um torcedor, do jeito que ele queria carregar.',
      en: "Old school in color: crest, trophy, and a supporter's own timeline, carried exactly the way he wanted.",
    },
  },
  {
    id: 'koi',
    imagem: img6,
    estilo: 'fine-line',
    destaque: true,
    ordem: 6,
    aspecto: 'retrato',
    legenda: {
      pt: 'Dois koi em fine line ilustrativo, escama e nadadeira desenhadas fio a fio.',
      en: 'Two koi in illustrative fine line, scale and fin drawn stroke by stroke.',
    },
  },
  {
    id: 'leao-elmo',
    imagem: img2,
    estilo: 'realismo',
    destaque: false,
    ordem: 10,
    aspecto: 'retrato',
    legenda: {
      pt: 'Leão coroado por um elmo espartano — força e nobreza no mesmo traço.',
      en: 'A lion crowned with a Spartan helm — strength and nobility in the same line.',
    },
  },
  {
    id: 'pomo-de-ouro',
    imagem: img4,
    estilo: 'fine-line',
    destaque: false,
    ordem: 11,
    aspecto: 'retrato',
    legenda: {
      pt: 'Fine line com esqueleto geométrico por trás — o pomo de ouro em traço solto e preciso.',
      en: 'Fine line built on a geometric skeleton — the golden snitch in loose, precise strokes.',
    },
  },
  {
    id: 'bussola',
    imagem: img5,
    estilo: 'fine-line',
    destaque: false,
    ordem: 12,
    aspecto: 'retrato',
    legenda: {
      pt: 'Bússola e relógio de bolso, nomes que orientam quem carrega — fine line em letra cursiva.',
      en: 'A compass and pocket watch, names that steer whoever wears them — fine line with a cursive hand.',
    },
  },
  {
    id: 'odin',
    imagem: img7,
    estilo: 'realismo',
    destaque: false,
    ordem: 13,
    aspecto: 'retrato',
    legenda: {
      pt: 'Odin alado, barba e elmo em realismo denso — uma perna inteira de mitologia nórdica.',
      en: 'A winged Odin, beard and helm in dense realism — a full calf given over to Norse myth.',
    },
  },
  {
    id: 'onca-flores',
    imagem: img9,
    estilo: 'realismo',
    destaque: false,
    ordem: 14,
    aspecto: 'retrato',
    legenda: {
      pt: 'Onça-pintada emergindo de uma coroa de flores em fine line — metade retrato, metade botânica.',
      en: 'A jaguar emerging from a fine-line flower crown — half portrait, half botanical study.',
    },
  },
  {
    id: 'egipcio-horus',
    imagem: img10,
    estilo: 'realismo',
    destaque: false,
    ordem: 15,
    aspecto: 'retrato',
    legenda: {
      pt: 'Caveira sobre colar egípcio e o olho de Hórus alado — realismo em camadas ao longo do braço.',
      en: 'A skull over an Egyptian collar, winged eye of Horus below — layered realism running the length of the arm.',
    },
  },
  {
    id: 'itachi',
    imagem: img13,
    estilo: 'old-school',
    destaque: false,
    ordem: 16,
    aspecto: 'retrato',
    legenda: {
      pt: 'Um clássico do anime em cor cheia e linha firme — old school aplicado à cultura pop.',
      en: 'An anime classic in full color and confident line — old school technique applied to pop culture.',
    },
  },
];

export const trabalhosDestaque = trabalhos
  .filter((t) => t.destaque)
  .sort((a, b) => a.ordem - b.ordem);

export const trabalhosPorOrdem = [...trabalhos].sort((a, b) => a.ordem - b.ordem);
