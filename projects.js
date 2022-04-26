const projects = [
  {
    title: "westchestercovidtracker.com",
    description:
      "westchestercovidtracker.com is an interactive tool to view COVID-19 case trends within municipalities of Westchester County, NY." +
      " It began tracking data since November 2020, a few months into the pandemic, and continues to publish new data daily." +
      " The site itself was built using Next.js and features serverless API routing. A Python 3 script fetches new data and publishes them to a MongoDB Atlas database as soon as they are available.",
    imageUrl:
      "https://camo.githubusercontent.com/a32a834663d026aaa4c6d9b540425d1463f6b02e6ba3848a1d5b5a809f50684f/68747470733a2f2f692e696d6775722e636f6d2f7830736e3662552e706e67",
    repoUrl: "https://github.com/leonrode/westchestercovidtracker.com",
    demoUrl: "https://westchestercovidtracker.com",
    tags: [
      "next.js",
      "react.js",
      "node.js",
      "mongodb",
      "python 3",
      "html",
      "javascript",
      "css",
    ],
  },
  {
    title: "Mazzle",
    description:
      "Mazzle is WIP math studying practice website, whose focus is on free, unlimited, and fast-paced practice." +
      " Users can search through a number of topics to practice, which spans the entire US high-school mathematics curriculum." +
      " They can then accumulate these topics into a playlist and use multiple studying methods to master them." +
      " The site is built using Next.js and TailwindCSS. The data is hosted in a MongoDB Atlas database.",
    imageUrl: "https://i.imgur.com/luBHY0e.png",
    repoUrl: "https://github.com/leonrode/mazzle",
    demoUrl: "https://mazzle.vercel.app/",
    tags: [
      "next.js",
      "tailwindcss",
      "node.js",
      "react.js",
      "mongodb",
      "javascript",
      "html",
    ],
  },
  {
    title: "Sports Photo Gallery",
    description:
      "This site was built for a friend looking to dive into sports photography." +
      " It showcases hundreds of photos in an event-by-event basis, allowing users to filter and sort the events in a given year." +
      " The photos are stored in an AWS S3 Bucket and uploaded using a custom Python 3 uploader client." +
      " The site was built using Next.js and TailwindCSS, with data being stored in a MongoDB Atlas database.",
    imageUrl: "https://i.imgur.com/dW4BQy4.png",
    repoUrl: "https://github.com/leonrode/sports-photo-app",
    demoUrl: "https://elliottzphoto.us/",
    tags: [
      "next.js",
      "tailwindcss",
      "node.js",
      "react.js",
      "mongodb",
      "javascript",
      "aws s3",
      "python 3",
      "html",
    ],
  },
  {
    title: "Procedural Skylines",
    description:
      "This is a creative coding project where I used various techniques to generate procedural skylines." +
      " It is entirely built with Javascript and the p5.js canvas library.",
    imageUrl:
      "https://camo.githubusercontent.com/7282ee3790229667da1c885c8c8f4b02e003033bad1d753a6e54aeba80f7706b/68747470733a2f2f692e696d6775722e636f6d2f74446f6c7a576a2e706e67",
    repoUrl: "https://github.com/leonrode/procedural-skyline",
    demoUrl: "https://editor.p5js.org/leonrode/sketches/-gDtuWeYS",
    tags: ["javascript", "p5.js"],
  },
  {
    title: "Chaotic Sierpinski Triangles",
    description:
      "This creative project generates classic Sierpinski Triangles, in other words, triangles infinitely composed of smaller triangles " +
      " It implements the Chaos game algorithm that builds the triangle with hints of randomness" +
      " After 15 seconds, a representation of the triangle becomes clear to the viewer." +
      " It is built using p5.js and Javascript",
    imageUrl:
      "https://camo.githubusercontent.com/f7e8023e3fd4a92a9f6819f1ea2a222b7be5e91c781cd0f5a7e20d3d6678df5c/68747470733a2f2f692e696d6775722e636f6d2f656d5a723448552e706e67",
    repoUrl: "https://github.com/leonrode/chaotic-sierpinski-triangle",
    demoUrl: "https://editor.p5js.org/leonrode/sketches/Em7nY-9eW",
    tags: ["javascript", "p5.js"],
  },
  {
    title: "Solo Chess Solver",
    description:
      "This original project is a successful attempt at solving Chess.com's SoloChess game mode." +
      " It recursively builds a solution to the puzzles by reading the board and displaying a list of moves to successfully solve the puzzles." +
      " It solves most problems in under a tenth of a second, and can solve the most challenging ones in within a few seconds." +
      " The entire script is written in JavaScript.",
    imageUrl:
      "https://camo.githubusercontent.com/626d5bf854160f7d65ea51a79aea1f60b3fe173ffba40967dfe8adf967f23b48/68747470733a2f2f696d6775722e636f6d2f773763376831532e706e67",
    repoUrl: "https://github.com/leonrode/solo-chess-solver-js",
    tags: ["javascript"],
  },
];

export default projects;
