export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BibleChapter {
  book: string;
  chapter: number;
  verses: BibleVerse[];
}

export const BIBLE_BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
  "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
  "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
  "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
  "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
  "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
  "Zephaniah", "Haggai", "Zechariah", "Malachi",
  "Matthew", "Mark", "Luke", "John", "Acts",
  "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
  "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews",
  "James", "1 Peter", "2 Peter", "1 John", "2 John",
  "3 John", "Jude", "Revelation"
];

export const BIBLE_CHAPTERS: Record<string, number> = {
  "Genesis": 50, "Exodus": 40, "Leviticus": 27, "Numbers": 36, "Deuteronomy": 34,
  "Psalms": 150, "Proverbs": 31, "Isaiah": 66, "Jeremiah": 52,
  "Matthew": 28, "Mark": 16, "Luke": 24, "John": 21, "Acts": 28,
  "Romans": 16, "1 Corinthians": 16, "2 Corinthians": 13,
  "Galatians": 6, "Ephesians": 6, "Philippians": 4, "Colossians": 4,
  "Revelation": 22,
};

export const BIBLE_DATA: BibleChapter[] = [
  {
    book: "Genesis",
    chapter: 1,
    verses: [
      { book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heaven and the earth." },
      { book: "Genesis", chapter: 1, verse: 2, text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." },
      { book: "Genesis", chapter: 1, verse: 3, text: "And God said, Let there be light: and there was light." },
      { book: "Genesis", chapter: 1, verse: 4, text: "And God saw the light, that it was good: and God divided the light from the darkness." },
      { book: "Genesis", chapter: 1, verse: 5, text: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day." },
      { book: "Genesis", chapter: 1, verse: 6, text: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters." },
      { book: "Genesis", chapter: 1, verse: 7, text: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so." },
      { book: "Genesis", chapter: 1, verse: 8, text: "And God called the firmament Heaven. And the evening and the morning were the second day." },
      { book: "Genesis", chapter: 1, verse: 9, text: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so." },
      { book: "Genesis", chapter: 1, verse: 10, text: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good." },
      { book: "Genesis", chapter: 1, verse: 11, text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so." },
      { book: "Genesis", chapter: 1, verse: 26, text: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth." },
      { book: "Genesis", chapter: 1, verse: 27, text: "So God created man in his own image, in the image of God created he him; male and female created he them." },
      { book: "Genesis", chapter: 1, verse: 28, text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it." },
      { book: "Genesis", chapter: 1, verse: 31, text: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day." },
    ]
  },
  {
    book: "Psalms",
    chapter: 23,
    verses: [
      { book: "Psalms", chapter: 23, verse: 1, text: "The LORD is my shepherd; I shall not want." },
      { book: "Psalms", chapter: 23, verse: 2, text: "He maketh me to lie down in green pastures: he leadeth me beside the still waters." },
      { book: "Psalms", chapter: 23, verse: 3, text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake." },
      { book: "Psalms", chapter: 23, verse: 4, text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
      { book: "Psalms", chapter: 23, verse: 5, text: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over." },
      { book: "Psalms", chapter: 23, verse: 6, text: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever." },
    ]
  },
  {
    book: "Psalms",
    chapter: 91,
    verses: [
      { book: "Psalms", chapter: 91, verse: 1, text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty." },
      { book: "Psalms", chapter: 91, verse: 2, text: "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust." },
      { book: "Psalms", chapter: 91, verse: 3, text: "Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence." },
      { book: "Psalms", chapter: 91, verse: 4, text: "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler." },
      { book: "Psalms", chapter: 91, verse: 11, text: "For he shall give his angels charge over thee, to keep thee in all thy ways." },
      { book: "Psalms", chapter: 91, verse: 14, text: "Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name." },
      { book: "Psalms", chapter: 91, verse: 15, text: "He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him." },
    ]
  },
  {
    book: "John",
    chapter: 3,
    verses: [
      { book: "John", chapter: 3, verse: 1, text: "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:" },
      { book: "John", chapter: 3, verse: 3, text: "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God." },
      { book: "John", chapter: 3, verse: 5, text: "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God." },
      { book: "John", chapter: 3, verse: 14, text: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:" },
      { book: "John", chapter: 3, verse: 15, text: "That whosoever believeth in him should not perish, but have eternal life." },
      { book: "John", chapter: 3, verse: 16, text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
      { book: "John", chapter: 3, verse: 17, text: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved." },
      { book: "John", chapter: 3, verse: 18, text: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God." },
      { book: "John", chapter: 3, verse: 36, text: "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him." },
    ]
  },
  {
    book: "Romans",
    chapter: 8,
    verses: [
      { book: "Romans", chapter: 8, verse: 1, text: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit." },
      { book: "Romans", chapter: 8, verse: 2, text: "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death." },
      { book: "Romans", chapter: 8, verse: 14, text: "For as many as are led by the Spirit of God, they are the sons of God." },
      { book: "Romans", chapter: 8, verse: 15, text: "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father." },
      { book: "Romans", chapter: 8, verse: 18, text: "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us." },
      { book: "Romans", chapter: 8, verse: 26, text: "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered." },
      { book: "Romans", chapter: 8, verse: 28, text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
      { book: "Romans", chapter: 8, verse: 31, text: "What shall we then say to these things? If God be for us, who can be against us?" },
      { book: "Romans", chapter: 8, verse: 35, text: "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?" },
      { book: "Romans", chapter: 8, verse: 37, text: "Nay, in all these things we are more than conquerors through him that loved us." },
      { book: "Romans", chapter: 8, verse: 38, text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come," },
      { book: "Romans", chapter: 8, verse: 39, text: "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord." },
    ]
  },
  {
    book: "Philippians",
    chapter: 4,
    verses: [
      { book: "Philippians", chapter: 4, verse: 4, text: "Rejoice in the Lord always: and again I say, Rejoice." },
      { book: "Philippians", chapter: 4, verse: 5, text: "Let your moderation be known unto all men. The Lord is at hand." },
      { book: "Philippians", chapter: 4, verse: 6, text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
      { book: "Philippians", chapter: 4, verse: 7, text: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." },
      { book: "Philippians", chapter: 4, verse: 8, text: "Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things." },
      { book: "Philippians", chapter: 4, verse: 13, text: "I can do all things through Christ which strengtheneth me." },
      { book: "Philippians", chapter: 4, verse: 19, text: "But my God shall supply all your need according to his riches in glory by Christ Jesus." },
    ]
  },
  {
    book: "Isaiah",
    chapter: 40,
    verses: [
      { book: "Isaiah", chapter: 40, verse: 28, text: "Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding." },
      { book: "Isaiah", chapter: 40, verse: 29, text: "He giveth power to the faint; and to them that have no might he increaseth strength." },
      { book: "Isaiah", chapter: 40, verse: 30, text: "Even the youths shall faint and be weary, and the young men shall utterly fall:" },
      { book: "Isaiah", chapter: 40, verse: 31, text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
    ]
  },
  {
    book: "Matthew",
    chapter: 11,
    verses: [
      { book: "Matthew", chapter: 11, verse: 28, text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
      { book: "Matthew", chapter: 11, verse: 29, text: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls." },
      { book: "Matthew", chapter: 11, verse: 30, text: "For my yoke is easy, and my burden is light." },
    ]
  },
];

export function getBibleChapter(book: string, chapter: number): BibleChapter | null {
  return BIBLE_DATA.find(c => c.book === book && c.chapter === chapter) || null;
}

export function searchBible(query: string): BibleVerse[] {
  if (!query.trim()) return [];
  const lower = query.toLowerCase();
  const results: BibleVerse[] = [];
  for (const chapter of BIBLE_DATA) {
    for (const verse of chapter.verses) {
      if (verse.text.toLowerCase().includes(lower) || 
          `${verse.book} ${verse.chapter}:${verse.verse}`.toLowerCase().includes(lower)) {
        results.push(verse);
      }
    }
  }
  return results.slice(0, 20);
}

export const AVAILABLE_CHAPTERS: Array<{ book: string; chapter: number }> = BIBLE_DATA.map(c => ({ book: c.book, chapter: c.chapter }));
