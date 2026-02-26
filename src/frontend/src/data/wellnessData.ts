export type WellnessTopic = 'anxiety' | 'depression' | 'stress';

export interface ScriptureCard {
  reference: string;
  text: string;
  context: string;
}

export interface WellnessSection {
  topic: WellnessTopic;
  heading: string;
  intro: string;
  devotional: string;
  scriptures: ScriptureCard[];
}

export const WELLNESS_DATA: WellnessSection[] = [
  {
    topic: 'anxiety',
    heading: 'Peace Over Anxiety',
    intro: 'Anxiety is real, and God meets you in the middle of it.',
    devotional: `Anxiety tells us that the future is uncertain and that we must control everything to stay safe. But God\'s Word invites us to a different way of living — one rooted in trust rather than control.\n\nWhen Jesus said "Do not worry about tomorrow," He was not dismissing our concerns. He was redirecting our attention from an unknowable future to a faithful Father who holds both the sparrows and us. Worry is not solved by willpower alone; it is overcome by surrender — releasing what we cannot carry into hands that can bear it all.\n\nToday, take one worry and place it consciously before God. Name it. Pray over it. Then receive His peace — which is not the absence of problems, but the presence of One who is greater than every problem.`,
    scriptures: [
      {
        reference: 'Philippians 4:6-7',
        text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
        context: 'Paul writes from prison, teaching us to exchange anxiety for prayer — and receive peace in return.',
      },
      {
        reference: 'Matthew 6:34',
        text: 'Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself.',
        context: 'Jesus invites us to live fully present, trusting God with tomorrow.',
      },
      {
        reference: '1 Peter 5:7',
        text: 'Casting all your care upon him; for he careth for you.',
        context: 'A tender reminder that God is personally invested in every care that weighs on you.',
      },
    ],
  },
  {
    topic: 'depression',
    heading: 'Light in the Darkness',
    intro: 'Depression is not a sign of weak faith. God is close to the brokenhearted.',
    devotional: `The psalms are full of cries from the pit — voices crying out in anguish, wondering where God is. Psalm 88 ends without resolution. Elijah asked God to take his life. Jeremiah cursed the day of his birth. These were not faithless people — they were human, and they struggled deeply.\n\nIf you are in a season of depression, know this: God is not repelled by your darkness. He is drawn toward it. "He heals the brokenhearted and binds up their wounds." His compassion is not a distant concept — it is a present, active force moving toward you right now.\n\nSeek help — from God, from community, from professionals. Depression is not weakness; reaching out is courage. You are not alone, and this darkness does not have the final word. Light is coming.`,
    scriptures: [
      {
        reference: 'Psalm 34:18',
        text: 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
        context: 'A promise of nearness — God does not pull away when we fall; He draws closer.',
      },
      {
        reference: 'Isaiah 43:2',
        text: 'When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned.',
        context: 'God does not always remove the trial, but He promises to be present through it.',
      },
      {
        reference: 'Lamentations 3:22-23',
        text: 'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
        context: 'Written in the midst of deep grief — a declaration of hope that echoes across centuries.',
      },
    ],
  },
  {
    topic: 'stress',
    heading: 'Rest for the Weary',
    intro: 'God designed rest. Busyness is not the same as fruitfulness.',
    devotional: `In a culture that celebrates overwork, God commanded rest. The Sabbath was not an afterthought — it was built into the rhythm of creation. Even the land was given years of rest in the Old Testament. Rest is not laziness; it is wisdom.\n\nStress often signals that we have taken on more than we were designed to carry. We were not made to be omnipresent, omnipotent, or omniscient. Only God is those things. When we try to carry it all, we are — however unintentionally — trying to play God.\n\nJesus invites the weary and burdened to come to Him. His yoke is easy; His burden is light. That is not because following Him is effortless, but because we are yoking ourselves to One who carries the weight with us. You don\'t have to carry this alone. Come to Him today.`,
    scriptures: [
      {
        reference: 'Matthew 11:28-29',
        text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.',
        context: 'A direct invitation from Jesus to trade the weight of stress for the rest of his presence.',
      },
      {
        reference: 'Psalm 55:22',
        text: 'Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.',
        context: 'A practical instruction — release what you carry to the One who can actually sustain it.',
      },
      {
        reference: 'Isaiah 26:3',
        text: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.',
        context: 'The antidote to a stressed mind is a mind anchored in God — not in circumstances.',
      },
    ],
  },
];

export const DAILY_MOOD_DEVOTIONALS: Record<string, { verse: string; reference: string; encouragement: string }> = {
  hopeful: {
    verse: 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.',
    reference: 'Romans 15:13',
    encouragement: 'Hope is not wishful thinking — it is a confident trust in God\'s character. Your hope today is well-placed. Keep your eyes on the One who never disappoints, and let that hope overflow into every corner of your day.',
  },
  grateful: {
    verse: 'Give thanks to the LORD, for he is good; his love endures forever.',
    reference: 'Psalm 107:1',
    encouragement: 'A grateful heart is a fortress against discouragement. Today, let every "thank you" you offer remind you that you are surrounded by gifts — some wrapped in difficulty, but gifts nonetheless. Gratitude transforms ordinary moments into sacred ones.',
  },
  anxious: {
    verse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    reference: 'Philippians 4:6',
    encouragement: 'Your anxiety is real, and God sees it. You don\'t have to pretend everything is fine. But you don\'t have to carry it alone either. Right now, name what worries you and hand it to the Father. His peace is not a feeling — it is a guard that stands watch over your heart. Breathe. You are held.',
  },
  sad: {
    verse: 'The LORD is close to the brokenhearted and saves those who are crushed in spirit.',
    reference: 'Psalm 34:18',
    encouragement: 'Sadness is not a lack of faith — the Psalms are full of tears. Let your tears be prayers. God is not distant in your sorrow; He is drawn closer. Weeping may endure for a night, but joy is coming. Today, rest in His nearness. That is enough.',
  },
  stressed: {
    verse: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    encouragement: 'The load feels heavy, but you were never meant to carry it all. Jesus is not asking you to figure it out — He is asking you to come. Lay the weight down at His feet. His yoke is easy and His burden is light. Today, do one thing: let go of something you\'ve been gripping tightly. He\'s got it.',
  },
};
