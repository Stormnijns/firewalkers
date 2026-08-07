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
        description: 'INTO THE UNKNOWN',
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
        height: 66.3,
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
            top: 46,
            scale: 49.2,
            border: '.15rem solid black',
          },
          {
            src: 'ch1_pg1_nr5.png',
            left: 0,
            top: 46,
            scale: 49.2,
            border: '.15rem solid black',
          },
        ],
      },
      {
        page: 2,
        height: 71,
        panels: [
          {
            src: 'ch1_pg2_nr3.png',
            right: 0,
            top: 40,
            scale: 67.8,
            border: '0 solid black',
          },
          {
            src: 'ch1_pg2_nr2.png',
            left: 0,
            top: 11,
            scale: 67,
            border: '.15rem solid black',
          },
          {
            src: 'ch1_pg2_nr1.png',
            right: 0,
            top: 0,
            scale: 50,
            border: '.15rem solid black',
          },
        ],
      },
      {
        page: 3,
        height: 77,
        panels: [
          {
            src: 'ch1_pg3_nr1.png',
            right: 0,
            top: 0,
            scale: 100,
            border: '.15rem solid black',
          },
        ],
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
