import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "micro-cms-blog-tutorial",
  apiKey: process.env.API_KEY
});

export default client;