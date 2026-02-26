export type PrayerCategory = 'morning' | 'evening' | 'gratitude' | 'healing' | 'strength' | 'protection' | 'peace';

export interface Prayer {
  id: string;
  title: string;
  category: PrayerCategory;
  scripture?: string;
  text: string;
}

export const PRAYER_CATEGORIES: Array<{ value: PrayerCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'morning', label: 'Morning' },
  { value: 'evening', label: 'Evening' },
  { value: 'gratitude', label: 'Gratitude' },
  { value: 'healing', label: 'Healing' },
  { value: 'strength', label: 'Strength' },
  { value: 'protection', label: 'Protection' },
  { value: 'peace', label: 'Peace' },
];

export const PRAYERS: Prayer[] = [
  {
    id: 'morning-1',
    title: 'A New Day\'s Blessing',
    category: 'morning',
    scripture: 'Lamentations 3:22-23',
    text: `Heavenly Father, thank you for the gift of this new morning. Your mercies are new every day, and I receive today as a fresh start filled with your grace and purpose.\n\nAs I rise, fill me with your Holy Spirit. Guide my thoughts, words, and actions. May every step I take today be ordered by You. Help me to see the beauty you have placed around me and to reflect your love to everyone I encounter.\n\nGrant me wisdom for the challenges ahead and courage to face them with faith rather than fear. I commit this day into your hands, knowing that You hold all things together. In Jesus' name, Amen.`
  },
  {
    id: 'morning-2',
    title: 'Morning Dedication',
    category: 'morning',
    scripture: 'Psalm 5:3',
    text: `Lord, before the day unfolds and demands press in, I bring this moment to You. You are my first thought, my anchor before the world speaks.\n\nDedicate my hands to your work today. May what I build serve others and honor You. Guard my tongue from careless words and my mind from anxious thoughts. When distractions come, bring me back to what truly matters.\n\nThank you that I am not walking this day alone. You are with me — in the meeting rooms, in the quiet moments, in the conversations that shape lives. Lead me, Lord. I trust You. Amen.`
  },
  {
    id: 'evening-1',
    title: 'Prayer of Evening Rest',
    category: 'evening',
    scripture: 'Psalm 4:8',
    text: `Lord, as the day fades and the quiet of evening settles, I come to You with a grateful heart. Thank you for carrying me through this day — through its joys and its trials.\n\nForgive me for the moments I fell short, where I chose my way over Yours. Wash me clean as the night draws near. I lay down the burdens I've been carrying — the worries, the unresolved tensions, the fears about tomorrow. They are Yours now.\n\nGrant me restful sleep, guarded by your angels. May my heart be still, knowing that You never sleep and You watch over those You love. Good night, Father. I am at peace in You. Amen.`
  },
  {
    id: 'evening-2',
    title: 'End of Day Reflection',
    category: 'evening',
    scripture: 'Psalm 63:6',
    text: `Father, I meditate on You as the day comes to a close. In the hush of evening I remember your faithfulness — the small mercies I may have overlooked in the rush of the day.\n\nThank you for the breath in my lungs, the warmth of shelter, the people you have placed in my life. Help me to number my blessings rather than my burdens as I rest.\n\nSpeak to me in the night season. Plant seeds of wisdom in my spirit while I sleep. Tomorrow I will rise again with new opportunities to love and serve. Until then, I rest in You, the God who holds the stars in place. Amen.`
  },
  {
    id: 'gratitude-1',
    title: 'Overflowing Gratitude',
    category: 'gratitude',
    scripture: '1 Thessalonians 5:18',
    text: `Lord, how can I count all your mercies? They are more than the grains of sand. Today I simply want to say thank You — not for what You might do, but for what You have already done.\n\nThank you for salvation, for love that found me when I was lost. Thank you for family, for friendship, for food on the table. Thank you for the morning sunrise and the sound of rain. These are your fingerprints on my life.\n\nMay gratitude be my default posture. When troubles come, may thankfulness be my shield. You are a good Father, and I am blessed beyond measure to call You mine. Amen.`
  },
  {
    id: 'gratitude-2',
    title: 'For Every Gift',
    category: 'gratitude',
    scripture: 'James 1:17',
    text: `Every good gift, every perfect gift — they come from You, Father of lights. Today I pause the striving and simply receive with open hands what You have given.\n\nThank you for the gift of life, for consciousness, for the ability to feel joy, love, and wonder. Thank you for scripture that illuminates my path. Thank you for the community of believers who walk alongside me.\n\nMake me a vessel of gratitude in a world that forgets to give thanks. Let my life be a living prayer of thanks — not in what I say only, but in how I treat others, how I steward my blessings, how I point others toward You. Amen.`
  },
  {
    id: 'healing-1',
    title: 'Prayer for Physical Healing',
    category: 'healing',
    scripture: 'Jeremiah 17:14',
    text: `Healer of all healers, I come to You in my weakness and pain. You are Jehovah Rapha — the Lord who heals. I believe in your power to restore what is broken in my body.\n\nTouch me now with your healing hand. Strengthen what is weak, restore what is damaged, and grant peace to the parts of me that ache. Where medicine is at work, bless it. Where doctors serve, guide their hands with wisdom.\n\nI will not be defined by this affliction. You are greater than any diagnosis, any prognosis, any limitation. My hope is in You, the God who can do what no physician can. Heal me, Lord, according to your perfect will. Amen.`
  },
  {
    id: 'healing-2',
    title: 'Healing for a Broken Heart',
    category: 'healing',
    scripture: 'Psalm 147:3',
    text: `Lord, this grief is heavier than I expected. The wound in my heart is real, and I bring it to You — the One who heals the brokenhearted and binds up their wounds.\n\nI don't pretend to be okay. I come as I am — fractured, uncertain, and in pain. But I come with faith that You are near to the brokenhearted. You have not abandoned me in my sorrow.\n\nDay by day, Lord, heal what aches. Restore joy where sadness has settled in. Help me to grieve without losing hope, to mourn while trusting in your resurrection power. You are making all things new, and that includes me. Amen.`
  },
  {
    id: 'healing-3',
    title: 'Inner Healing and Wholeness',
    category: 'healing',
    scripture: '3 John 1:2',
    text: `God of wholeness, I pray not just for my body but for my entire being — mind, soul, and spirit. Heal the wounds I carry from the past. Free me from the prison of old hurts, unforgiveness, and shame.\n\nWhere trauma has carved grooves in my thinking, replace those patterns with your truth. Where rejection has whispered lies about my worth, speak your affirmation over me. I am your beloved. I am made in your image. I am enough.\n\nBring me to a place of wholeness that the world cannot manufacture — the shalom that only You can give. I receive your healing today, from the inside out. Amen.`
  },
  {
    id: 'strength-1',
    title: 'When I Need Strength',
    category: 'strength',
    scripture: 'Isaiah 40:31',
    text: `Lord, my strength is spent. I come to You not with anything to offer, but simply with my need. You have promised that those who wait on You will renew their strength.\n\nRenew mine. Fill the places that are empty. Where fatigue has settled, pour in your divine energy. Where discouragement has whispered "give up," let your Spirit say "press on."\n\nI am not strong in myself, but I am strong in You. I mount up with wings today — not because my circumstances have changed, but because I trust the One who holds them. Strengthen me for the journey ahead. In your name I rise. Amen.`
  },
  {
    id: 'strength-2',
    title: 'Courage for the Battle',
    category: 'strength',
    scripture: 'Joshua 1:9',
    text: `Mighty God, I face what feels like an impossible situation. The odds seem stacked against me, and fear knocks at my door. But You are the Lord of hosts — the God of every battle.\n\nBe strong in me today. You said "be strong and courageous, do not be afraid." I receive that command as a promise — that You are with me wherever I go. Your presence is my advantage.\n\nI will not shrink back. I will stand firm in the faith you have given me. The enemy has overestimated his power and underestimated my God. Go before me today, Lord. Be my rear guard. Fight this battle for me while I hold my ground in faith. Amen.`
  },
  {
    id: 'protection-1',
    title: 'Shield of Protection',
    category: 'protection',
    scripture: 'Psalm 91:1-2',
    text: `Lord, I take my position under the shadow of the Almighty. You are my refuge and fortress. In You I trust.\n\nCover me today with your protection. Let no weapon formed against me prosper. Guard my mind from schemes of the enemy, my heart from deception, my body from harm.\n\nProtect those I love. May your angels have charge over my household. May no darkness find a foothold where your light dwells. I declare that I am hidden in Christ, shielded by the Most High, and nothing can touch me apart from your permission. I rest in your protection. Amen.`
  },
  {
    id: 'protection-2',
    title: 'Protection Over My Family',
    category: 'protection',
    scripture: 'Proverbs 18:10',
    text: `Father, I lift my family to You today. You are a strong tower — the righteous run into You and are safe. I bring each one by name before your throne.\n\nProtect them in their going out and their coming in. Guard them from accidents, from manipulation, from spiritual attack. Build a hedge of protection around each one that no enemy can penetrate.\n\nBless our home with peace. Let it be a dwelling place for your Spirit — a safe haven where grace is given freely and love grows strong. We are Yours, Lord. Keep us. Amen.`
  },
  {
    id: 'peace-1',
    title: 'The Peace That Passes Understanding',
    category: 'peace',
    scripture: 'Philippians 4:6-7',
    text: `Lord Jesus, you promised to leave your peace with us — a peace the world cannot give. I come to receive that peace today.\n\nIn the midst of uncertainty, still my anxious mind. In the noise of the world, create an interior quiet within me. Teach me to cast my cares on You and then leave them there — not pick them back up.\n\nBe the anchor of my soul in the storms of life. Let your peace stand guard over my heart and mind. No matter what swirls around me, I will return to this: You are in control, You are good, and You have never failed. That is enough. Amen.`
  },
  {
    id: 'peace-2',
    title: 'Finding Rest in God',
    category: 'peace',
    scripture: 'Matthew 11:28-29',
    text: `Jesus, you said, "Come to me, all who are weary and burdened, and I will give you rest." I come. I am weary. I need rest.\n\nNot just physical rest, but the deep rest of a soul that has stopped striving — the rest of knowing I am loved not for what I do but for who I am in You. Take the heavy yoke I've been carrying. Your yoke is easy; your burden is light.\n\nTeach me your pace, Lord. You moved through life without rushing, without panic, without fear. Model that for me. Help me live from a place of rest rather than labor, from a place of grace rather than performance. I lay it all down. I receive your rest. Amen.`
  },
  {
    id: 'morning-3',
    title: 'Seeking God First',
    category: 'morning',
    scripture: 'Matthew 6:33',
    text: `Father, before I check my phone, before I review my schedule, before the world makes its first demand — I seek You first. You promised that when I seek your kingdom first, everything else would be added.\n\nAlign my priorities today. Keep the main thing the main thing. Help me not be so busy doing good things that I miss the best thing — time with You, listening for your voice, following your leading.\n\nMay seeking You be my greatest daily habit. In return, meet my needs as You promised. Guide my steps. Open the right doors. Close the wrong ones. I trust your provision and your leading. Amen.`
  },
  {
    id: 'strength-3',
    title: 'Overcoming Doubt',
    category: 'strength',
    scripture: 'Mark 9:24',
    text: `Lord, like the father in scripture, I cry out: I believe — help my unbelief. There are moments when doubt creeps in and my faith feels small. I bring that honesty to You.\n\nYou are not frightened by my questions. You are patient with my wavering. Strengthen my faith not through circumstances changing, but through your Word taking deeper root in me.\n\nRemind me of your faithfulness in the past — every prayer answered, every valley you carried me through, every time you showed up just in time. Faith comes by hearing, and I am listening. Speak, Lord. Let my faith grow strong. Amen.`
  },
  {
    id: 'peace-3',
    title: 'Peace in the Storm',
    category: 'peace',
    scripture: 'Mark 4:39',
    text: `Lord who calmed the storm with a word — speak "peace" over my life today. The winds are high. The waves are crashing. My little boat feels like it cannot hold.\n\nRemind me that you are in the boat with me. You are not unaware of the storm — you are present in it, and you have the authority to still it. I don't need to understand everything; I need to trust the One who does.\n\nLet your peace rise up within me like a deep, undisturbed ocean beneath storm-tossed surface waters. Peace, be still — in my mind, in my heart, in my circumstances. I trust You, Captain of my soul. Amen.`
  },
  {
    id: 'gratitude-3',
    title: 'Thankful for Salvation',
    category: 'gratitude',
    scripture: 'John 3:16',
    text: `Father, above all other blessings, I thank You for the gift of salvation. You loved the world — You loved me — so much that You gave your only Son. That is love beyond comprehension.\n\nI should never grow numb to the cross. Let the weight of grace stay fresh in my heart. I was lost, and You found me. I was broken, and You mended me. I was guilty, and You declared me righteous through Christ.\n\nMay this gratitude shape how I live — with generosity, compassion, and humility. I have received much; may I give freely. Thank You, Jesus. Your sacrifice is everything to me. Amen.`
  },
  {
    id: 'healing-4',
    title: 'Healing from Addiction',
    category: 'healing',
    scripture: 'John 8:36',
    text: `Liberating Lord, You said if the Son sets you free, you are free indeed. I claim that freedom today. I am not defined by what has had hold of me. Greater is He who is in me than he who is in the world.\n\nBreak every chain. Where willpower has failed, let your Spirit succeed. Where shame has kept me in silence, let grace create the courage to reach out for help. Surround me with people who will walk alongside me without judgment.\n\nI am not fighting this battle alone. You are my strength, my deliverer, my constant help. I will not give up. Moment by moment, day by day, You are making me free. Thank You, Lord. Amen.`
  },
  {
    id: 'protection-3',
    title: 'Guard My Mind',
    category: 'protection',
    scripture: '2 Corinthians 10:5',
    text: `Lord, the battleground is my mind. Thoughts that tear down, fears that paralyze, comparisons that diminish — I bring them all to You. Help me take every thought captive to the obedience of Christ.\n\nGuard the gates of my mind. What I allow in shapes who I become. Help me to be intentional about what I watch, read, and listen to. Fill the spaces with your Word, with worship, with truth.\n\nI put on the helmet of salvation today — protection for my thought life. I refuse to meditate on what You have not promised. I choose to fix my mind on things that are true, noble, right, pure, lovely, and admirable. Guard my mind, Lord. Amen.`
  },
];
