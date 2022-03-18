/* eslint-env jest */
import { corpApi } from '../config'
import fs from 'fs'

test('Test ApiMedia', async () => {
  const image = await corpApi.uploadImage(
    fs.readFileSync('./__tests__/resource/1.png'),
    '1.png'
  )
  expect(image.url != null).toBeTruthy()

  const media = await corpApi.uploadMedia(
    fs.readFileSync('./__tests__/resource/1.png'),
    'image',
    '1.png'
  )
  expect(media.type === 'image').toBeTruthy()
  expect(media.mediaId != null).toBeTruthy()
  expect(media.createdAt != null).toBeTruthy()

  const mediaFile = await corpApi.getMedia(media.mediaId)
  expect(mediaFile != null).toBeTruthy()
})
