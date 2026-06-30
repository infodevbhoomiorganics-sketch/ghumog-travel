export const WHATSAPP = 'https://wa.me/917018939901?text=' + encodeURIComponent('Hello GhumoG Team,\nI would like to know more about your hotel stays and travel packages.');
export const PHONE = '+91 7018939901';
export const PHONE_TEL = 'tel:+917018939901';
export const EMAIL = 'ghomogbharke@gmail.com';
export const MAP_LINK = 'https://maps.app.goo.gl/CM7wio4ofyCaGKY36';
export const MAP_EMBED = 'https://www.google.com/maps?q=Shoghi,Shimla,Himachal+Pradesh&output=embed';

export const SOCIALS = [
  { name: 'YouTube', url: 'https://www.youtube.com/@ghumog', icon: 'youtube' },
  { name: 'Facebook', url: 'https://www.facebook.com/ghumogbharke', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/aviral9913', icon: 'instagram' },
];

export const HOTEL_CATEGORIES = [
  { slug: 'himachal-pradesh', name: 'Himachal Pradesh', tagline: 'Misty mountains & pine forests' },
  { slug: 'uttarakhand', name: 'Uttarakhand', tagline: 'Sacred rivers & Himalayan peaks' },
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh', tagline: 'Heritage & spiritual heartland' },
  { slug: 'top-temples', name: 'Top Temples', tagline: 'Divine journeys & pilgrimages' },
];

export type Hotel = {
  slug: string;
  name: string;
  category: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
};

export const HOTELS: Hotel[] = [
  {
    slug: 'rashal-homes-shimla',
    name: 'Rashal Homes Shimla',
    category: 'himachal-pradesh',
    location: 'Shimla, Himachal Pradesh',
    price: 3200,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1579186/pexels-photo-1579186.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A serene homestay nestled amid cedar forests offering panoramic valley views, warm hospitality, and authentic Himachali cuisine.',
    amenities: ['Free WiFi', 'Mountain View', 'Breakfast', 'Parking', 'Heater', 'Pet Friendly'],
  },
  {
    slug: 'ghumog-stay-sukhmani-kasauli',
    name: 'GhumoG Stay – Sukhmani Kasauli',
    category: 'himachal-pradesh',
    location: 'Kasauli, Himachal Pradesh',
    price: 2800,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Our signature stay in Kasauli — cozy rooms, misty mornings, and a tranquil garden perfect for unwinding in the hills.',
    amenities: ['Free WiFi', 'Garden', 'Breakfast', 'Bonfire', 'Parking', 'Heater'],
  },
  {
    slug: 'shimla-regency',
    name: 'Shimla Regency',
    category: 'himachal-pradesh',
    location: 'Shimla, Himachal Pradesh',
    price: 4500,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A regal boutique property blending colonial charm with modern luxury on Shimla\'s quiet ridge.',
    amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Spa', 'Parking', 'Room Service'],
  },
  {
    slug: 'vatika-resort-cottages-shoghi',
    name: 'Vatika Resort Cottages Shoghi',
    category: 'himachal-pradesh',
    location: 'Shoghi, Shimla, Himachal Pradesh',
    price: 3800,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Private wooden cottages surrounded by oak forests — your own slice of Himalayan wilderness near Shimla.',
    amenities: ['Free WiFi', 'Cottages', 'Bonfire', 'Breakfast', 'Parking', 'Trekking'],
  },
  {
    slug: 'riverside-retreat-rishikesh',
    name: 'Riverside Retreat Rishikesh',
    category: 'uttarakhand',
    location: 'Rishikesh, Uttarakhand',
    price: 3500,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Wake to the sound of the Ganges at this peaceful riverside retreat, steps from yoga ashrams and cafes.',
    amenities: ['Free WiFi', 'River View', 'Yoga', 'Breakfast', 'Parking', 'Cafe'],
  },
  {
    slug: 'naini-lake-villa',
    name: 'Naini Lake Villa',
    category: 'uttarakhand',
    location: 'Nainital, Uttarakhand',
    price: 4200,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A charming villa overlooking Naini Lake with private balcony and boating access.',
    amenities: ['Free WiFi', 'Lake View', 'Breakfast', 'Parking', 'Heater', 'Balcony'],
  },
  {
    slug: 'heritage-haveli-varanasi',
    name: 'Heritage Haveli Varanasi',
    category: 'uttar-pradesh',
    location: 'Varanasi, Uttar Pradesh',
    price: 3900,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A restored heritage haveli steps from the ghats, offering rooftop Ganga aarti views.',
    amenities: ['Free WiFi', 'Rooftop', 'Breakfast', 'Aarti View', 'Parking', 'Cafe'],
  },
  {
    slug: 'taj-view-agra-stay',
    name: 'Taj View Agra Stay',
    category: 'uttar-pradesh',
    location: 'Agra, Uttar Pradesh',
    price: 4800,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Wake up to the Taj Mahal from your window at this elegant heritage property.',
    amenities: ['Free WiFi', 'Taj View', 'Breakfast', 'Rooftop', 'Parking', 'Room Service'],
  },
  {
    slug: 'kedarnath-base-camp',
    name: 'Kedarnath Base Camp',
    category: 'top-temples',
    location: 'Gaurikund, Uttarakhand',
    price: 2500,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Comfortable base camp accommodation for pilgrims undertaking the sacred Kedarnath Yatra.',
    amenities: ['Meals', 'Heater', 'Hot Water', 'Trek Support', 'Parking', 'Prayer Room'],
  },
  {
    slug: 'badrinath-dharamshala',
    name: 'Badrinath Dharamshala',
    category: 'top-temples',
    location: 'Badrinath, Uttarakhand',
    price: 2200,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Clean, peaceful lodging for devotees visiting the sacred Badrinath shrine.',
    amenities: ['Meals', 'Heater', 'Hot Water', 'Parking', 'Prayer Room'],
  },
];

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};

export const BLOGS: Blog[] = [
  {
    slug: 'shikari-devi-mandir',
    title: 'Shikari Devi Mandir — The Highest Temple in Shimla Hills',
    excerpt: 'A mystical temple perched at 3357m, offering 360° views of snow peaks and endless meadows.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'March 12, 2025',
    readTime: '6 min read',
    content: [
      'Shikari Devi Mandir is one of the most sacred and least-commercialised temples in the Shimla hills. At an altitude of 3357 metres, it is the highest peak in the Shimla district and offers breathtaking 360-degree views of the Himalayan ranges.',
      'The temple is dedicated to Goddess Shikari Devi, and the journey itself is a pilgrimage through dense deodar forests, alpine meadows, and winding mountain trails. The route from Karsog is the most popular, passing through apple orchards and tiny hamlets.',
      'Best time to visit is between April and November. Monsoon months bring lush green carpets across the meadows, while autumn paints the landscape gold. Carry warm clothing even in summer — the wind at the summit is fierce.',
      'There is a forest rest house near the temple for overnight stays. Watching the sunrise from the peak, with clouds floating below you, is an experience that stays with you forever.',
    ],
  },
  {
    slug: 'hatu-peak',
    title: 'Hatu Peak — A Day Trip from Narkanda',
    excerpt: 'The highest point near Shimla with a pagoda-style temple and sweeping valley views.',
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'February 28, 2025',
    readTime: '5 min read',
    content: [
      'Hatu Peak, at 3400 metres, is the highest peak in the Shimla district and a popular day trip from Narkanda. A narrow motorable road winds through dense coniferous forests to the summit.',
      'Atop the peak sits the Hatu Mata temple, built in traditional pagoda style with intricate wood carvings. The temple is believed to be where the Pandavas stayed during their exile.',
      'The 360° views from the top stretch from the Pir Panjal to the Dhauladhar ranges. On a clear day, you can see snow-capped peaks stretching endlessly. The meadows around the temple are perfect for a quiet picnic.',
      'Combine your visit with a stop at Tani Jubbar Lake, a serene spot 8km from Narkanda, ideal for a peaceful afternoon.',
    ],
  },
  {
    slug: 'khajjiar',
    title: 'Khajjiar — The Mini Switzerland of India',
    excerpt: 'A emerald meadow cradled by deodar forests, floating between Dalhousie and Chamba.',
    image: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'January 15, 2025',
    readTime: '7 min read',
    content: [
      'Khajjiar is often called the "Mini Switzerland of India" — and for good reason. A vast green meadow, surrounded by thick deodar forests, with a small lake at its centre, it looks straight out of a postcard.',
      'Located 24km from Dalhousie, Khajjiar is perfect for a day of leisure. You can horse-ride across the meadow, try zorbing in season, or simply lie back and watch the clouds drift over the surrounding peaks.',
      'The 12th-century Khajji Nag temple, with its golden dome and wooden carvings, sits at the edge of the meadow. It is one of the few temples where snakes are worshipped alongside the main deity.',
      'Visit between March and June for pleasant weather, or in winter (December-February) when the meadow is blanketed in snow — a completely different, magical experience.',
    ],
  },
  {
    slug: 'chail-palace',
    title: 'Chail Palace — A Royal Retreat in the Hills',
    excerpt: 'The summer capital of the Maharaja of Patiala, now a heritage hotel surrounded by forests.',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'December 20, 2024',
    readTime: '5 min read',
    content: [
      'Chail Palace was built in 1891 by Maharaja Bhupinder Singh of Patiala after he was banished from Shimla for his dalliance with a British lady. He decided to build his own summer capital — higher, grander, and more private than Shimla.',
      'The palace, set amid 75 acres of forests and gardens, is now a heritage hotel run by Himachal Tourism. Its architecture blends colonial and Indian styles, with sprawling lawns, vintage furniture, and a quiet, regal atmosphere.',
      'Chail is also home to the world\'s highest cricket ground (2444m) and a wildlife sanctuary. The town is far quieter than Shimla, making it ideal for those seeking genuine peace.',
      'Stay in the palace itself, or in one of the charming cottages on the property. The log huts, set deep in the forest, are particularly magical.',
    ],
  },
  {
    slug: 'hateshwari-mata',
    title: 'Hateshwari Mata — The Hidden Hill Temple',
    excerpt: 'A revered goddess temple near Rohru, surrounded by apple orchards and mountain streams.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'November 8, 2024',
    readTime: '4 min read',
    content: [
      'Hateshwari Mata temple, located near Rohru in the Shimla district, is one of the most revered goddess temples in the region. The temple sits amid apple orchards and offers stunning views of the Pabbar valley.',
      'The temple is especially vibrant during Navratri, when devotees from across Himachal come to seek blessings. The architecture is traditional Himachali, with intricate woodwork and a sloping slate roof.',
      'The drive to the temple itself is beautiful, winding through some of the most productive apple country in India. Stop at the orchards along the way to buy fresh apples and local produce.',
      'Combine your visit with a trip to the nearby Chirgaon and the Pabbar river, known for trout fishing.',
    ],
  },
  {
    slug: 'spiti-valley',
    title: 'Spiti Valley — A Journey to the Middle Land',
    excerpt: 'A cold desert mountain valley with ancient monasteries, fossil villages, and stark beauty.',
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'October 2, 2024',
    readTime: '8 min read',
    content: [
      'Spiti, meaning "the middle land", sits between Tibet and India at an average altitude of 12,500 feet. It is a cold desert — stark, dramatic, and profoundly beautiful. The landscape is all bare mountains, deep gorges, and tiny white-washed villages clinging to cliffs.',
      'Key Monastery, perched at 4112m, is the spiritual heart of Spiti. It is over 1000 years old and home to around 300 monks. The views from the monastery roof are otherworldly.',
      'Other must-visit spots include Chandratal Lake (a crescent of turquoise at 4300m), the fossil village of Langza, the world\'s highest post office in Hikkim, and the mummy of Giu.',
      'The best time to visit is between May and September. In winter, Spiti is largely cut off by snow. Carry cash — ATMs are rare and often empty. And acclimatise slowly to avoid altitude sickness.',
    ],
  },
  {
    slug: 'bijli-mahadev',
    title: 'Bijli Mahadev — Where Lightning Blesses the Shiva Linga',
    excerpt: 'A 20m tall temple staff and a Shiva linga that shatters and is rebuilt with butter.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'September 14, 2024',
    readTime: '4 min read',
    content: [
      'Bijli Mahadev is one of the most fascinating Shiva temples in Kullu. Perched at 2460m, it offers panoramic views of the Kullu and Parvati valleys.',
      'The temple is famous for its 20-metre tall wooden staff, which draws lightning during storms. The lightning strikes the Shiva linga, shattering it into pieces. The priest then reassembles the linga using pure butter, which hardens over time — until the next strike.',
      'The name "Bijli" means lightning, and the phenomenon has been occurring for centuries. Devotees believe the lightning is Shiva\'s blessing.',
      'A short trek through pine forests leads to the temple. The meadows around it are perfect for camping and watching spectacular sunsets over the valley.',
    ],
  },
];

export const VIDEOS = [
  { id: 'G8RmZvEOlbE', si: 'f4calo2O1VKZJYxt', title: 'Shimla Heritage Walk' },
  { id: 'K4N9ixgboSo', si: 'LyYhD-DxX-Hm1XK1', title: 'Kasauli Hidden Trails' },
  { id: 'AC5WZAM1mkA', si: 'MlmJnBxbeBoakbUT', title: 'Kedarnath Yatra Guide' },
  { id: 'upuNmW-I8yA', si: 'E5BW9pGAUExLe5bY', title: 'Spiti Valley Road Trip' },
  { id: 'FsWjQf8YQ8o', si: '2rUw2MdmDQ0KjTK2', title: 'Himachal Cottages Tour' },
];

export const FAQS = [
  { q: 'How do I book a hotel with GhumoG?', a: 'You can book directly through our website by selecting a hotel and clicking "Book Now", or message us on WhatsApp at +91 7018939901 for instant booking assistance.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 7 days before check-in. Cancellations within 7 days are subject to a one-night charge. No-shows are charged in full.' },
  { q: 'Do you offer taxi and bike rentals?', a: 'Yes. We provide taxi services for local sightseeing and intercity travel, plus bike and scooty rentals for self-guided exploration. Visit our Online Transport page for details.' },
  { q: 'Can you customise holiday packages?', a: 'Absolutely. Every package can be tailored to your dates, budget, and interests. Message us on WhatsApp and our travel experts will craft a personalised itinerary.' },
  { q: 'Are your temple tour packages safe for elderly pilgrims?', a: 'Yes. We design temple tours with comfortable transport, manageable trekking options, and rest stops. Let us know your needs and we will plan accordingly.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfers, and major credit/debit cards. A 25% advance confirms your booking, with the balance payable on arrival.' },
];

export const TESTIMONIALS = [
  { name: 'Rahul Sharma', location: 'Delhi', text: 'GhumoG made our Shimla trip effortless. The cottage in Shoghi was magical — misty mornings, bonfire nights, and the most helpful hosts.', rating: 5 },
  { name: 'Priya Nair', location: 'Bangalore', text: 'Booked the Kedarnath package and everything was flawless — transport, stay, guides. Felt safe and cared for throughout the yatra.', rating: 5 },
  { name: 'Aman Verma', location: 'Chandigarh', text: 'Rented a bike from GhumoG for a Spiti trip. Well-maintained bike, fair pricing, and great local tips. Highly recommend.', rating: 5 },
  { name: 'Sneha Kapoor', location: 'Mumbai', text: 'The Kasauli stay was exactly what we needed — peaceful, beautiful, and away from crowds. Will book again for sure.', rating: 5 },
];
