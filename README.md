# Alliance Book

A small journal of all people in Star Wars movies.

- Data source: [SWAPI](https://swapi.py4e.com/)
- Image source: [https://github.com/vieraboschkova/swapi-gallery](https://github.com/vieraboschkova/swapi-gallery)

## Pinned Decisions

- **May the Force of SSG be with you.** The character list is ~99% immutable. This data likely only changes with a new Star Wars release, and even then, API updates are not guaranteed. By fetching at build-time, I’ve prioritized performance boost of SSG over the slim risk of stale data, which might happen years down the line. Given the velocity of the React ecosystem, it is far more likely that dependency maintenance will be required before the data itself becomes outdated.

## Run it locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.
