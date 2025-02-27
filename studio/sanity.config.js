import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '.',

  projectId: '62vfb30n',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      {
        name: 'users',
        title: 'Users',
        type: 'document',
        fields: [
          {
            name: 'userName',
            title: 'User Name',
            type: 'string',
          },
          {
            name: 'walletAddress',
            title: 'Wallet Address',
            type: 'string',
          },
          {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
          },
          {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
          },
          {
            name: 'twitterHandle',
            title: 'Twitter Handle',
            type: 'string',
          },
          {
            name: 'igHandle',
            title: 'Instagram Handle',
            type: 'string',
          },
        ],
      },
      {
        name: 'marketItems',
        title: 'Market Items',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'contractAddress',
            title: 'Contract Address',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          {
            name: 'createdBy',
            title: 'Created By',
            type: 'reference',
            to: [{type: 'users'}],
          },
          {
            name: 'volumeTraded',
            title: 'Volume Traded',
            type: 'number',
          },
          {
            name: 'floorPrice',
            title: 'Floor Price',
            type: 'number',
          },
          {
            name: 'owners',
            title: 'Owners',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'users'}]}],
          },
          {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
          },
          {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
          },
        ],
      },
    ],
  },
})
