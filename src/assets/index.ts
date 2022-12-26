import emoji1 from "./Artboard 1.svg";
import emoji2 from "./Artboard 2.svg";
import emoji3 from "./Artboard 3.svg";
import emoji4 from "./Artboard 4.svg";
import emoji5 from "./Artboard 5.svg";
import emoji6 from "./Artboard 6.svg";
import emoji8 from "./Artboard 8.svg";
import emoji9 from "./Artboard 9.svg";

const emojisListOfObjects = [
  {
    id: 1,
    icon: emoji2,
    name: "Relaxed",
    bgColor: "#ffc35a",
    feelingsList: [
      { id: 1, name: "Content" },
      { id: 2, name: "Relaxed" },
      { id: 3, name: "Comfortable" },
      { id: 4, name: "At peace" },

      { id: 5, name: "Unhurried" },
      { id: 6, name: "Laid-back" },
      { id: 7, name: "Easygoing" },
    ],
  },

  {
    id: 2,
    icon: emoji3,
    name: "Unhappy",
    bgColor: "#82AAE3",
    feelingsList: [
      { id: 1, name: "Melancholic" },
      { id: 2, name: "Unhappy" },
      { id: 3, name: "Mixserable" },
      { id: 4, name: "Despondent" },
      { id: 5, name: "Depressed" },

      { id: 6, name: "Down" },
      { id: 7, name: "Glum" },
    ],
  },

  {
    id: 3,
    icon: emoji4,
    name: "Angry",
    bgColor: "#DC0000",
    feelingsList: [
      { id: 1, name: "Furious" },
      { id: 2, name: "Irritated" },

      { id: 3, name: "Annoyed" },
      { id: 4, name: "Frustrated" },

      { id: 5, name: "Infuriated" },
      { id: 6, name: "Enraged" },
      { id: 7, name: "Exasperated" },
    ],
  },

  {
    id: 4,
    icon: emoji9,
    name: "In Love",
    bgColor: "#F49D1A",
    feelingsList: [
      { id: 1, name: "Loved" },
      { id: 2, name: "Adored" },
      { id: 3, name: "Enamored" },

      { id: 4, name: "Admired" },
      { id: 5, name: "Cherished" },
      { id: 6, name: "Devoted" },

      { id: 7, name: "Affectionate" },
      { id: 8, name: "Passionate" },
      { id: 9, name: "Fond" },
    ],
  },
  {
    id: 5,
    icon: emoji6,
    name: "Very Excited",
    bgColor: "#FFE15D",
    feelingsList: [
      { id: 1, name: "Thrilled" },
      { id: 2, name: "Excited" },
      { id: 3, name: "Eager" },

      { id: 4, name: "Enthusiastic" },
      { id: 5, name: "Delighted" },
      { id: 6, name: "Overjoyed" },

      { id: 7, name: "Elated" },
      { id: 8, name: "Gleeful" },
      { id: 9, name: "Jubilant" },
    ],
  },
  {
    id: 6,
    icon: emoji1,
    name: "Anxious and worried",
    bgColor: "#FFB100",
    feelingsList: [
      { id: 1, name: "Nervous" },
      { id: 2, name: "Anxious" },
      { id: 3, name: "Tense" },

      { id: 4, name: "Stressed" },
      { id: 5, name: "Worried" },

      { id: 6, name: "Fretful" },
      { id: 7, name: "Agitated" },
      { id: 8, name: "Panicked" },
    ],
  },

  {
    id: 7,
    icon: emoji5,
    name: "Annoyed",
    bgColor: "#810CA8",
    feelingsList: [
      { id: 1, name: "Irritated" },
      { id: 2, name: "Annoyed" },
      { id: 3, name: "Frustrated" },

      { id: 4, name: "Exasperated" },
      { id: 5, name: "Infuriated" },
      { id: 6, name: "Irked" },

      { id: 7, name: "Bored" },
      { id: 8, name: "Peeved" },
      { id: 9, name: "Resentful" },
    ],
  },

  {
    id: 8,
    icon: emoji8,
    name: "Nauseated",
    bgColor: "#54B435",
    feelingsList: [
      { id: 2, name: "Nauseated" },
      { id: 1, name: "Queasy" },
      { id: 8, name: "Unwell" },
      { id: 3, name: "Sick" },
      { id: 5, name: "Nauseated" },

      { id: 6, name: "Faint" },

      { id: 7, name: "Dizzy" },
      { id: 9, name: "Grim" },
    ],
  },
];

export default emojisListOfObjects;
