export const db = {
  profile: {
    id: 1,
    name: "Skipper",
    picture: "https://image.ibb.co/k0wVTm/profile_pic.jpg",
    status: "Available",
    friends: [
      {
        id: 2,
        name: "Alex",
        picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
        latest_timestamp: "10:00 AM",
      },
      {
        id: 3,
        name: "Bob",
        picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
        latest_timestamp: "12:30 AM",
      },
      {
        id: 4,
        name: "Luke",
        picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
        latest_timestamp: "4:12 PM",
      },
      {
        id: 5,
        name: "Bane",
        picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
        latest_timestamp: "7:53 PM",
      },
      {
        id: 6,
        name: "Darth Vader",
        picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
        latest_timestamp: "1:09 PM",
      },
      {
        id: 7,
        name: "Zach",
        picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
        latest_timestamp: "Yesterday",
      },
      {
        id: 8,
        name: "Katie",
        picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
        latest_timestamp: "Yesterday",
        lastChat: "nothing",
      },
      {
        id: 9,
        name: "Chloe",
        picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        latest_timestamp: "Wednesday",
      },
      {
        id: 10,
        name: "Kennith",
        picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
        latest_timestamp: "Wednesday",
      },
      {
        id: 11,
        name: "Tara",
        picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
        latest_timestamp: "Monday",
      },
      {
        id: 12,
        name: "Gary",
        picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        latest_timestamp: "Sunday",
      },
      {
        id: 13,
        name: "Zoey",
        picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        latest_timestamp: "8/12/2017",
      },
      {
        id: 14,
        name: "Ash",
        picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
        latest_timestamp: "6/12/2017",
      },
      {
        id: 15,
        name: "Zen",
        picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
        latest_timestamp: "19/11/2017",
      },
    ],
  },
  friends: [
    {
      id: 2,
      name: "Alex",
      picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
      chatlog: [
        {
          text: "whats up",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Good",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "What are you upto",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "just watching movie right now",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Which movie",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 3,
      name: "Bob",
      picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
      chatlog: [
        {
          text: "hey how are you",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Good",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "lets play cricket today",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "no i m busy right now , we will play later",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "OKK",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 4,
      name: "Luke",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      chatlog: [
        {
          text: "Hi , how are you? ",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Fine, how are you doing?",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "What do you want to do?",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "I’m hungry. I’d like to eat something.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Where do you want to go?",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 5,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      chatlog: [
        {
          text: "Hi,! How’s it going?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Fine, thanks — and you?",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "Just fine. Where are you off to?",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "I’ve got a history exam next weekend need to start studying. Ugh.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Oh, no. Well, I’ll see you later then. Good luck!",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 6,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      chatlog: [
        {
          text: " Hey, did you catch the football game last night?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Absolutely! It was an intense match. What did you think about it?",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "I thought it was incredible! The teams showed some amazing skills and strategies. That last-minute goal was a game-changer.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "Oh yeah, that goal had everyone on the edge of their seats. ",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Did you have a favorite player from the match?",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 7,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      chatlog: [
        {
          text: "Hey, did you hear about the big transfer deal that happened yesterday?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Yeah, it was all over the news! The club broke the bank to sign that superstar player.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "I can't believe the transfer fee they paid. It's insane!",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: " I know, right? They must have seen something truly special in that player to invest that much.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "I'm excited to see how they'll perform with the new team. The pressure will be on, that's for sure.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 8,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      chatlog: [
        {
          text: " Hey, have you seen any good movies lately?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Actually, yes! I watched this amazing sci-fi film last night. The special effects were mind-blowing.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "Oh, that sounds intriguing! What's the name of the movie? I'm always up for a good sci-fi flick.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "It's called Interstellar. The story is captivating, and the visuals are stunning. You should definitely check it out.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Thanks for the recommendation! I'll add it to my watchlist. I'm always on the lookout for thought-provoking sci-fi films.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 9,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      chatlog: [
        {
          text: " Hey, did you hear about the new restaurant that opened downtown?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Yes, I did! I actually went there last weekend. The food was amazing.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: " Really? What kind of cuisine do they serve?",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: " It's a fusion restaurant, blending flavors from different cultures. The menu is diverse and offers a unique dining experience.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: " That sounds interesting! I'll have to check it out. Thanks for the recommendation!",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 10,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      chatlog: [
        {
          text: "Hey, have you seen the latest episode of our favorite TV show?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Yes, I just finished watching it! It was so intense, I couldn't look away.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "Oh, tell me about it! I was on the edge of my seat the whole time. The plot twists were unbelievable.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "I know, right? The writers really know how to keep us hooked. I can't wait to see what happens next.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Same here! The suspense is killing me. We'll have to discuss it once the next episode airs.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 11,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      chatlog: [
        {
          text: "Hey, how's it going?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Hi! I'm doing well, thanks. How about you?",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: " I'm good too, thanks for asking. Did you watch the game last night?",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "Yes, it was incredible! Our team won in overtime.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "That's amazing! They played so well. Let's celebrate their victory soon.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 12,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      chatlog: [
        {
          text: "Hey, have you ever wondered about the mysteries of the cosmos?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Absolutely! The universe is so vast and full of wonders. It's mind-boggling.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "I completely agree. Did you know there are billions of galaxies out there, each with countless stars?",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "It's mind-blowing to think about the sheer scale of it all. Makes you realize how small we are in the grand scheme of things.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Indeed. Exploring space and uncovering its secrets is a lifelong journey. The more we discover, the more questions arise.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 13,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      chatlog: [
        {
          text: "Have you ever dreamt of visiting Antarctica?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Absolutely! It's a place of pristine beauty and untouched wilderness.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "I've heard it's one of the coldest and windiest places on Earth. The landscapes must be breathtaking.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "It's also an important scientific research hub. The studies conducted there provide valuable insights into climate change.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "It's fascinating how Antarctica holds so many secrets and plays a crucial role in understanding our planet.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 14,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      chatlog: [
        {
          text: "Penguins are such fascinating creatures, don't you think?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "Absolutely! I love their adorable waddling and their unique way of life.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "Did you know that penguins are excellent swimmers? They can dive deep and stay underwater for several minutes.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "That's incredible! And their sleek, waterproof feathers help them stay warm in the frigid Antarctic waters.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: " Definitely! Watching them interact and care for their chicks is heartwarming. Penguins are truly incredible animals.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
    {
      id: 15,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      chatlog: [
        {
          text: "Have you ever been to the Himalayas?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
        {
          text: "No, but I've always dreamt of visiting. The Himalayas are known for their breathtaking landscapes.",
          timestamp: "10:02 AM",
          side: "right",
          message_id: 2,
        },
        {
          text: "Absolutely! The towering snow-capped peaks, deep valleys, and ancient monasteries create a mesmerizing atmosphere.",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "I've heard that trekking in the Himalayas is a once-in-a-lifetime experience. The views must be absolutely stunning.",
          timestamp: "10:04 AM",
          side: "right",
          message_id: 4,
        },
        {
          text: "Indeed, it's a paradise for adventure enthusiasts. The Himalayas offer a range of trekking routes, from moderate to challenging.",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
      ],
    },
  ],
};

// const cloneDb = {...db}