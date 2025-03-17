import {createClient} from '@sanity/client'

const sanityClient  = createClient ({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: '2025-02-06',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN
})

export default sanityClient;