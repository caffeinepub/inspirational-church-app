export type SermonTopic = 'faith' | 'hope' | 'healing' | 'prayer' | 'family' | 'purpose';

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  topic: SermonTopic;
  scripture: string;
  description: string;
  duration: string;
  thumbnail: string; // gradient class
}

export const SERMON_TOPICS: Array<{ value: SermonTopic | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'faith', label: 'Faith' },
  { value: 'hope', label: 'Hope' },
  { value: 'healing', label: 'Healing' },
  { value: 'prayer', label: 'Prayer' },
  { value: 'family', label: 'Family' },
  { value: 'purpose', label: 'Purpose' },
];

export const SERMONS: Sermon[] = [
  {
    id: 's1',
    title: 'Anchored in the Storm',
    speaker: 'Pastor David Osei',
    date: 'Jan 12, 2026',
    topic: 'faith',
    scripture: 'Hebrews 6:19',
    description: 'Life will bring storms. But our faith is an anchor for the soul — firm and secure. Discover how to hold fast when the winds of uncertainty rage around you.',
    duration: '42 min',
    thumbnail: 'from-blue-700 to-indigo-900',
  },
  {
    id: 's2',
    title: 'The Healing You\'ve Been Waiting For',
    speaker: 'Rev. Grace Afolabi',
    date: 'Jan 19, 2026',
    topic: 'healing',
    scripture: 'Jeremiah 17:14',
    description: 'God\'s healing is not always immediate, but it is always certain. This message brings hope to those who have prayed and waited for breakthrough in their bodies and hearts.',
    duration: '38 min',
    thumbnail: 'from-teal-600 to-emerald-800',
  },
  {
    id: 's3',
    title: 'When Hope Seems Lost',
    speaker: 'Bishop Samuel Tunde',
    date: 'Jan 26, 2026',
    topic: 'hope',
    scripture: 'Romans 15:13',
    description: 'Hope is not wishful thinking — it is a confident expectation rooted in who God is. Even in your darkest night, the dawn is coming. Let this word reignite your hope.',
    duration: '45 min',
    thumbnail: 'from-purple-700 to-violet-900',
  },
  {
    id: 's4',
    title: 'The Power of Persistent Prayer',
    speaker: 'Pastor David Osei',
    date: 'Feb 2, 2026',
    topic: 'prayer',
    scripture: 'Luke 18:1-8',
    description: 'Jesus told a parable about a widow who would not give up — and her persistence moved the hand of an unjust judge. How much more will your Father respond to persistent faith?',
    duration: '40 min',
    thumbnail: 'from-amber-600 to-orange-800',
  },
  {
    id: 's5',
    title: 'Building a Legacy',
    speaker: 'Dr. Miriam Essien',
    date: 'Feb 9, 2026',
    topic: 'family',
    scripture: 'Proverbs 22:6',
    description: 'What we build in our families echoes across generations. A message for parents, spouses, and young people about intentional faith-formation in the home.',
    duration: '36 min',
    thumbnail: 'from-rose-600 to-pink-800',
  },
  {
    id: 's6',
    title: 'You Are Called for This',
    speaker: 'Rev. Grace Afolabi',
    date: 'Feb 16, 2026',
    topic: 'purpose',
    scripture: 'Ephesians 2:10',
    description: 'Before the world began, God had good works prepared for you to walk in. This is not an accident — you are called for such a time as this. Discover your kingdom assignment.',
    duration: '44 min',
    thumbnail: 'from-sky-600 to-blue-900',
  },
  {
    id: 's7',
    title: 'Mountain-Moving Faith',
    speaker: 'Bishop Samuel Tunde',
    date: 'Feb 23, 2026',
    topic: 'faith',
    scripture: 'Matthew 17:20',
    description: 'Faith the size of a mustard seed can move mountains — not because of the size of your faith, but the size of your God. A practical message on activating your faith.',
    duration: '48 min',
    thumbnail: 'from-slate-600 to-gray-800',
  },
  {
    id: 's8',
    title: 'Hope as an Anchor',
    speaker: 'Dr. Miriam Essien',
    date: 'Mar 2, 2026',
    topic: 'hope',
    scripture: 'Hebrews 6:18-19',
    description: 'In a world shaken by uncertainty, hope in Christ is the anchor of the soul. Learn to lay hold of the hope set before you and let it steady your heart.',
    duration: '37 min',
    thumbnail: 'from-cyan-600 to-teal-900',
  },
  {
    id: 's9',
    title: 'Wholeness from the Inside Out',
    speaker: 'Pastor David Osei',
    date: 'Mar 9, 2026',
    topic: 'healing',
    scripture: '3 John 1:2',
    description: 'God desires for you to prosper and be in health, even as your soul prospers. True healing begins in the inner man. A transformative message on spiritual and emotional wholeness.',
    duration: '43 min',
    thumbnail: 'from-lime-600 to-green-800',
  },
  {
    id: 's10',
    title: 'Praying in the Dark',
    speaker: 'Rev. Grace Afolabi',
    date: 'Mar 16, 2026',
    topic: 'prayer',
    scripture: 'Acts 16:25',
    description: 'Paul and Silas sang at midnight in prison, and chains fell off. What happens when you choose to pray and worship in the darkest moments? A powerful testimony-driven message.',
    duration: '41 min',
    thumbnail: 'from-indigo-700 to-slate-900',
  },
  {
    id: 's11',
    title: 'The Father\'s Heart',
    speaker: 'Bishop Samuel Tunde',
    date: 'Mar 23, 2026',
    topic: 'family',
    scripture: 'Luke 15:11-32',
    description: 'The parable of the prodigal son reveals the heartbeat of our Father in heaven — always watching, always ready to run toward the returning child. Come home.',
    duration: '52 min',
    thumbnail: 'from-yellow-600 to-amber-800',
  },
  {
    id: 's12',
    title: 'Created on Purpose, for Purpose',
    speaker: 'Dr. Miriam Essien',
    date: 'Mar 30, 2026',
    topic: 'purpose',
    scripture: 'Jeremiah 29:11',
    description: '"For I know the plans I have for you..." God\'s plans are for welfare and not evil, to give you a future and a hope. Stop drifting and start walking in your divine design.',
    duration: '39 min',
    thumbnail: 'from-fuchsia-600 to-purple-900',
  },
];
