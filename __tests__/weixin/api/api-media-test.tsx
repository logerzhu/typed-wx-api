/* eslint-env jest */
import { testWxApi } from '../config'
import fs from 'fs'

test('Test Weixin Media', async () => {
  const image = await testWxApi.uploadImage(
    fs.readFileSync('./__tests__/resource/1.png'),
    '1.png'
  )
  expect(image.url != null).toBeTruthy()

  const media = await testWxApi.uploadMedia(
    fs.readFileSync('./__tests__/resource/1.png'),
    'image',
    '1.png'
  )
  expect(media.type === 'image').toBeTruthy()
  expect(media.media_id != null).toBeTruthy()
  expect(media.created_at != null).toBeTruthy()

  const mediaFile = await testWxApi.getMedia(media.media_id)
  expect(mediaFile != null).toBeTruthy()

  const video = await testWxApi.uploadMedia(
    fs.readFileSync('./__tests__/resource/test.mp4'),
    'video',
    'test.mp4'
  )
  expect(video.media_id != null).toBeTruthy()
  const videoInfo = await testWxApi.getVideoMedia(video.media_id)
  expect(videoInfo.video_url != null).toBeTruthy()
})
