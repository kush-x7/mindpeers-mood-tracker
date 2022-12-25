import Angry from "./Angry";
import Annoyed from "./Annoyed";
import Excited from "./Excited";
import InLove from "./InLove";
import Nauseated from "./Nauseated";
import Relaxed from "./Relaxed";
import UnHappy from "./UnHappy";
import Worried from "./Worried";

const myEmojiListData = [
  {
    id: 2,
    icon: Relaxed,
    name: "Relaxed",
    feelingsList: [
      { id: 1, name: "Content" },
      { id: 2, name: "At peace" },
      { id: 3, name: "Laid-back" },

      { id: 4, name: "Unhurried" },
      { id: 5, name: "Comfortable" },
      { id: 6, name: "Relaxed" },

      { id: 7, name: "Easygoing" },
      { id: 8, name: "Unstressed" },
      { id: 9, name: "Chill" },
    ],
  },

  {
    id: 9,
    icon: Annoyed,
    name: "In Love",
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
    id: 1,
    icon: Excited,
    name: "Anxious and worried",
    feelingsList: [
      { id: 1, name: "Nervous" },
      { id: 2, name: "Anxious" },
      { id: 3, name: "Tense" },

      { id: 4, name: "Stressed" },
      { id: 5, name: "Worried" },
      { id: 6, name: "Apprehensive" },

      { id: 7, name: "Panicked" },
      { id: 8, name: "Agitated" },
      { id: 9, name: "Fretful" },
    ],
  },
  {
    id: 3,
    icon: InLove,
    name: "Unhappy",
    feelingsList: [
      { id: 1, name: "Sad" },
      { id: 2, name: "Unhappy" },
      { id: 3, name: "Depressed" },

      { id: 4, name: "Down" },
      { id: 5, name: "Glum" },
      { id: 6, name: "Despondent" },

      { id: 7, name: "Disheartened" },
      { id: 8, name: "Miserable" },
      { id: 9, name: "Melancholic" },
    ],
  },

  {
    id: 4,
    icon: Nauseated,
    name: "Angry",
    feelingsList: [
      { id: 1, name: "Furious" },
      { id: 2, name: "Angry" },
      { id: 3, name: "Irritated" },

      { id: 4, name: "Annoyed" },
      { id: 5, name: "Frustrated" },
      { id: 6, name: "Mad" },

      { id: 7, name: "Infuriated" },
      { id: 8, name: "Exasperated" },
      { id: 9, name: "Enraged" },
    ],
  },
  {
    id: 5,
    icon: Relaxed,
    name: "Annoyed",
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
    id: 6,
    icon: UnHappy,
    name: "Very Excited",
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
    id: 8,
    icon: Worried,
    name: "Nauseated",
    feelingsList: [
      { id: 1, name: "Queasy" },
      { id: 2, name: "Nauseated" },
      { id: 3, name: "Sick" },

      { id: 4, name: "Ill" },
      { id: 5, name: "Nauseated" },
      { id: 6, name: "Faint" },

      { id: 7, name: "Dizzy" },
      { id: 8, name: "Unwell" },
      { id: 9, name: "Grim" },
    ],
  },
];

export default myEmojiListData;
