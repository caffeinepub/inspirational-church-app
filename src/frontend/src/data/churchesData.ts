export type Denomination = 'Baptist' | 'Methodist' | 'Catholic' | 'Pentecostal' | 'Non-denominational' | 'Anglican' | 'Presbyterian' | 'Lutheran';

export interface Church {
  id: string;
  name: string;
  denomination: Denomination;
  address: string;
  city: string;
  state: string;
  serviceTimes: string[];
  description: string;
  phone?: string;
  website?: string;
}

export const CHURCHES: Church[] = [
  {
    id: 'c1',
    name: 'Grace Community Church',
    denomination: 'Non-denominational',
    address: '1428 Cornerstone Blvd',
    city: 'Atlanta',
    state: 'GA',
    serviceTimes: ['Sunday 9:00 AM', 'Sunday 11:30 AM', 'Wednesday 7:00 PM'],
    description: 'A vibrant, multicultural church where faith meets real life. We are passionate about community, worship, and equipping believers to impact their world for Christ.',
    phone: '(404) 555-0182',
    website: 'gracecommunitychurch.org',
  },
  {
    id: 'c2',
    name: 'St. Augustine\'s Catholic Parish',
    denomination: 'Catholic',
    address: '55 Sacred Heart Lane',
    city: 'Nashville',
    state: 'TN',
    serviceTimes: ['Saturday 5:00 PM', 'Sunday 8:00 AM', 'Sunday 10:30 AM', 'Sunday 12:30 PM'],
    description: 'A welcoming Catholic community rooted in the sacramental life of the Church. Our parish family gathers for Mass, service, and fellowship in the heart of Nashville.',
    phone: '(615) 555-0245',
    website: 'staugustinesnashville.org',
  },
  {
    id: 'c3',
    name: 'First Baptist Church',
    denomination: 'Baptist',
    address: '220 Main Street',
    city: 'Dallas',
    state: 'TX',
    serviceTimes: ['Sunday 8:30 AM', 'Sunday 11:00 AM', 'Sunday 6:00 PM'],
    description: 'Standing on the Word for over 100 years, First Baptist Dallas is committed to preaching the gospel, discipling believers, and serving our city with the love of Christ.',
    phone: '(214) 555-0317',
    website: 'firstbaptistdallas.org',
  },
  {
    id: 'c4',
    name: 'Harvest Fire Pentecostal',
    denomination: 'Pentecostal',
    address: '889 Revival Drive',
    city: 'Charlotte',
    state: 'NC',
    serviceTimes: ['Sunday 10:00 AM', 'Tuesday 7:30 PM', 'Friday 7:30 PM'],
    description: 'A Spirit-filled church that believes in the supernatural power of God for today. Expect dynamic worship, prayer ministry, and prophetic preaching that stirs your faith.',
    phone: '(704) 555-0426',
  },
  {
    id: 'c5',
    name: 'Wesley Memorial Methodist',
    denomination: 'Methodist',
    address: '150 Wesley Way',
    city: 'Chicago',
    state: 'IL',
    serviceTimes: ['Sunday 9:00 AM', 'Sunday 11:00 AM'],
    description: 'Inspired by John Wesley\'s transformational legacy, we are a church committed to holiness, social justice, and making disciples of Jesus Christ for the transformation of the world.',
    phone: '(312) 555-0538',
    website: 'wesleymemorial.org',
  },
  {
    id: 'c6',
    name: 'All Saints Anglican Church',
    denomination: 'Anglican',
    address: '702 Canterbury Court',
    city: 'Boston',
    state: 'MA',
    serviceTimes: ['Sunday 8:00 AM (Traditional)', 'Sunday 10:30 AM (Contemporary)'],
    description: 'Rooted in the ancient faith and reaching toward the future. We hold together reverent liturgy and vibrant community in a historic setting near the heart of Boston.',
    phone: '(617) 555-0651',
    website: 'allsaintsboston.org',
  },
  {
    id: 'c7',
    name: 'Crossroads Presbyterian',
    denomination: 'Presbyterian',
    address: '414 Reformation Rd',
    city: 'Seattle',
    state: 'WA',
    serviceTimes: ['Sunday 10:00 AM'],
    description: 'A Reformed church committed to God-centered worship, expository preaching, and building a community where the gospel transforms every area of life.',
    phone: '(206) 555-0774',
  },
  {
    id: 'c8',
    name: 'Calvary Lutheran Church',
    denomination: 'Lutheran',
    address: '333 Grace Avenue',
    city: 'Minneapolis',
    state: 'MN',
    serviceTimes: ['Saturday 5:30 PM', 'Sunday 9:00 AM', 'Sunday 11:00 AM'],
    description: 'Proclaiming Christ crucified and risen — the center of our faith, life, and worship. Our community is grounded in scripture, sacraments, and genuine fellowship.',
    phone: '(612) 555-0893',
    website: 'calvarylutherankpls.org',
  },
];
