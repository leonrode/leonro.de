import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-6 h-6 cursor-pointer">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180.17 286.58"
        >
          <defs>
            <linearGradient
              id="gradient-fill"
              x1="0"
              y1="0"
              x2="800"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ff00cc" />

              <stop offset="0.14285714285714285" stopColor="#e21ecb" />

              <stop offset="0.2857142857142857" stopColor="#c52ac7" />

              <stop offset="0.42857142857142855" stopColor="#a931c2" />

              <stop offset="0.5714285714285714" stopColor="#8c34ba" />

              <stop offset="0.7142857142857142" stopColor="#6f36b1" />

              <stop offset="0.8571428571428571" stopColor="#5235a6" />

              <stop offset="1" stopColor="#333399" />
            </linearGradient>
          </defs>

          <path
            fill="url(#gradient-fill)"
            d="M36.35,304.19V17.61H45.3V295.23H188.59v9Z"
            transform="translate(-36.35 -17.61)"
          />
          <path
            fill="url(#gradient-fill)"
            d="M36.85,304.19V17.61h84q24.06,0,42.61,10.22a74.41,74.41,0,0,1,29.1,28.54q10.56,18.33,10.57,43,0,24.35-10.57,42.61a74.06,74.06,0,0,1-29.1,28.4q-18.55,10.16-42.61,10.15H41.33v-9h79.48q21.54,0,38.06-8.95a65.34,65.34,0,0,0,25.89-25.19q9.36-16.23,9.37-38.06T184.76,61a65.53,65.53,0,0,0-25.89-25.4q-16.51-9-38.06-9h-75V304.19ZM146,173.77l70.52,130.42H206.45L135.92,173.77Z"
            transform="translate(-36.35 -17.61)"
          />
          <rect
            fill="url(#gradient-fill)"
            x="151.65"
            y="277.56"
            width="20"
            height="9"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
