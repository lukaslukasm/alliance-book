# Alliance Book

A small journal of all people in Star Wars movies.

- Data source: [SWAPI](https://swapi.py4e.com/)
- Image source: [https://github.com/vieraboschkova/swapi-gallery](https://github.com/vieraboschkova/swapi-gallery)

## Pinned Decisions

- **Wars not make one great.** [SWAPI](https://swapi.py4e.com/) supports search only and has paging hard-coded to 10 elms at a time. With our needs, (search, filters, different pagination offset) the capabilities of the API are simply not sufficient. In order to prevent another war story under my belt, a decision to aggregate all of the needed data at once and work with them in peace in the server memory was made.

- ~~**SSG for data aggregation + client-side for everything else.**~~ That was the plan, because given the close-to-immutable data and a quite small data set (~200 objects) this approach would bring zero latency and minimal server load. But mid-way through the implementation I've realized that that's probably not what you want to see. The point here is to show my skills with the tools.

- **Use The ~~Force~~ URL Luke.** URL-based state is in my opinion the best practice solution for search and filters on e-shops. Not only it enhances the UX for the user, it also allows for a better SSR utilization of Next.js.

- **May the Force (of Next.js) be with you.** Using `searchParams` puts us strictly into SSR teritory, which executes the heavy data aggregation request-time. That is not ideal. However, utilizing Next's force-cache on the `fetch()` and clever execution of the data aggregation inside `generateStaticProps` (even without utilizing the result), we get a warm server cache with all of the data at build-time and all of the fetches afterwards hit just the cache.

## Features

- **multi-select filters by attributes homeworld and gender.** In order to demonstate my capabilities I've decided to show one filtering implementation for hardcoded values, gender, and one for data objects fetched from the API.

- **Generalized implementation of filter application.** The filtering capabilities are (partly) prepared to be expanded to another attributes.

- **Meets 100% of the requirements.** Responsivity, accessibility, maintainablity, leveraging of Next's capabilities; SSG, SSR, force-fetching and more.

- **Ready for coop.** Tight typescript, TS-friendly JSDoc, components and funcitonality broken down to smaller, well defined functions.

- **Intentionally empty Prettier config.** I am completely flexible to you customs, I use it just to make the code uniformly formatted.

- **Decoupled.** Greenfield projects like this one tend to grow in features. Thus I prioritized decoupling functions and components from data-specific shapes where possible.

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
