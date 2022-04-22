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
    tags: ["next.js", "react.js", "mongodb", "python3", "javascript", "css"],
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
    tags: ["next.js", "tailwindcss", "react.js", "mongodb", "javascript"],
  },
];

export default projects;
