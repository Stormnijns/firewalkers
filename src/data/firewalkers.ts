export interface MangaPanel {
  src: string;
  top: number;
  scale: number;

  right?: number;
  left?: number;
  rotation?: number;
  zIndex?: number;
  border?: string;
  opacity?: number;
}

export interface MangaPage {
  page: number;
  height: number; // vh
  panels: MangaPanel[];
}

export const firewalkers: any = {
  chapters: {
    1: [
      {
        description: "INTO THE UNKNOWN",
      },
      {
        page: 0,
        height: 102.2,
        panels: [
          {
            src: 'ch0_title.png',
            right: 0,
            top: 0,
            scale: 100,
            border: '.15rem solid black',
          },
          {
            src: 'ch0_thumbnail.png',
            right: 0,
            top: 18.4,
            scale: 100,
          },
        ],
      },
      {
        page: 1,
        height: 71,
        panels: [
          {
            src: 'ch1_pg1_nr1.png',
            right: 0,
            top: 0,
            scale: 40,
            border: '.15rem solid black',
          },
          {
            src: 'ch1_pg1_nr2.png',
            right: 0,
            left: 0,
            top: 1,
            scale: 58,
            border: '.15rem solid black',
          },
          {
            src: 'ch1_pg1_nr3.png',
            left: 0,
            top: 22,
            scale: 100,
            border: '.15rem solid black',
          },
          {
            src: 'ch1_pg1_nr4.png',
            right: 0,
            top: 49,
            scale: 40.2,
            border: '.15rem solid black',
          },
        ],
      },
      {
        page: 2,
        height: 71,
        panels: [],
      },
      {
        page: 3,
        height: 71,
        panels: [],
      },
      {
        page: 4,
        height: 71,
        panels: [],
      },
      {
        page: 5,
        height: 71,
        panels: [],
      },
      {
        page: 6,
        height: 71,
        panels: [],
      },
    ],
    2: [
      {
        locked: true,
      },
    ],
    3: [
      {
        locked: true,
      },
    ],
    4: [
      {
        locked: true,
      },
    ],
    5: [
      {
        locked: true,
      },
    ],
    6: [
      {
        locked: true,
      },
    ],
    7: [
      {
        locked: true,
      },
    ],
    8: [
      {
        locked: true,
      },
    ],
  },
}
