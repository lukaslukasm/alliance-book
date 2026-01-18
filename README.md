# Alliance Book

A small journal of all people in Star Wars movies.

- Data source: [SWAPI](https://swapi.py4e.com/)
- Image source: [https://github.com/vieraboschkova/swapi-gallery](https://github.com/vieraboschkova/swapi-gallery)

## Pinned Decisions

- **May the SSG be with you.** The character list is ~99% immutable. This data likely only changes with a new Star Wars release, and even then, API updates are not guaranteed. By fetching at build-time, I’ve prioritized performance boost of SSG over the slim risk of stale data, which might happen years down the line. Given the velocity of the React ecosystem, it is far more likely that dependency maintenance will be required before the data itself becomes outdated.
- **Do Server Render, or do not. There is no try.** Due to low amount of characters, searching/filtering requirements (high interactivity with data) the app saves the data into a redux store and becomes client-side as high as it can in the component tree. Benefits include zero-latency and saved development hours on fighting the latency. (due to complicated nature of modern server-side react)

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
