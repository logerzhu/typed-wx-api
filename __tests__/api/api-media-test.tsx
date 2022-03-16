/* eslint-env jest */
import { corpAPI } from '../config'
import fs from 'fs'

test('Test APIMedia', async () => {
  const image = await corpAPI.uploadImage(
    fs.readFileSync('./__tests__/resource/1.png'),
    '1.png'
  )
  expect(image.url != null).toBeTruthy()

  const media = await corpAPI.uploadMedia(
    fs.readFileSync('./__tests__/resource/1.png'),
    'image',
    '1.png'
  )
  expect(media.type === 'image').toBeTruthy()
  expect(media.mediaId != null).toBeTruthy()
  expect(media.createdAt != null).toBeTruthy()

  const mediaFile = await corpAPI.getMedia(media.mediaId)
  expect(mediaFile != null).toBeTruthy()
})
