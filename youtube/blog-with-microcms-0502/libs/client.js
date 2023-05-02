import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'n2zr08c83j',
  apiKey: process.env.API_KEY,
})
