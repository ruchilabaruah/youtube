export const getRandomChatMessage = () => {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Ethan",
    "Fiona",
    "George",
    "Hannah",
    "Isaac",
    "Jasmine",
    "Kevin",
    "Lily",
    "Marcus",
    "Nora",
    "Oscar",
    "Priya",
    "Quinn",
    "Ravi",
    "Sophie",
    "Tyler",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zane",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Lee",
    "Patel",
    "Kim",
    "Garcia",
    "Brown",
    "Nguyen",
    "Clark",
    "Turner",
    "Hall",
    "Scott",
    "Adams",
    "Baker",
    "Cooper",
    "Evans",
    "Foster",
    "Gomez",
    "Howard",
    "Jenkins",
    "Lopez",
    "Mitchell",
    "Perry",
    "Reed",
  ];

  const messages = [
    "Hey, how's everyone doing?",
    "That part was amazing!",
    "I didn’t expect that 😲",
    "Nice work on this video!",
    "Can someone explain what they meant at 2:35?",
    "Loved the pacing and tone 👌",
    "Thanks for this!",
    "I’m learning a lot from this series.",
    "Where can I find more on this topic?",
    "LOL that cracked me up",
    "Subscribed just because of this!",
    "I have a question…",
    "This reminds me of a similar case I studied.",
    "Wow, mind blown 🤯",
    "10/10 would recommend!",
    "Anyone else watching in 2025?",
    "What software did they use here?",
    "This needs way more views!",
    "Underrated content right here 🔥",
    "I had the same question too.",
    "Brilliant explanation!",
    "Felt like a live class, amazing.",
    "Bookmarked this one for later.",
    "Following you now!",
    "Can you do a follow-up video?",
    "My teacher recommended this to me!",
    "Just shared with my study group.",
    "Didn’t fully get this part, help?",
    "Why isn’t this viral already?",
    "Incredible breakdown!",
    "This deserves more likes.",
    "Watched this twice already.",
    "Saved my day, thanks!",
    "I think this topic is so underrated.",
    "Made it so simple to understand.",
    "Best comment section ever 😂",
    "Back again to watch it one more time.",
    "This needs to be in textbooks.",
    "First time I actually understood this!",
    "Anyone got notes for this?",
    "Taking screenshots of everything lol",
    "Finally someone explains it right.",
    "Pinned this in my group chat.",
    "Why can’t all videos be like this?",
    "Respect to the creator 🙌",
    "That animation was perfect.",
    "Just what I needed!",
    "How do I donate to this creator?",
    "Legendary content.",
    "Can’t thank you enough!",
  ];

  const authorName = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
  const avatar = `https://i.pravatar.cc/150?img=${
    Math.floor(Math.random() * 70) + 1
  }`;
  const message = getRandomItem(messages);
  const date = new Date().toISOString();

  return {
    id: Date.now() + Math.random().toString(16).slice(2),
    author: {
      name: authorName,
      avatar: avatar,
    },
    message: message,
    date: date,
    likes: getRandomInt(0, 20),
    dislikes: getRandomInt(0, 5),
    isHearted: Math.random() < 0.1,
  };
};

// 🔧 Helper functions
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
