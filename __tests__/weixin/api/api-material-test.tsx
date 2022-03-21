/* eslint-env jest */
import { testWxApi } from '../config'
import fs from 'fs'

test('Test Weixin Material', async () => {
  // 测试图片永久素材
  const media = await testWxApi.uploadMaterial(
    fs.readFileSync('./__tests__/resource/1.png'),
    'image',
    '1.png'
  )
  expect(media.media_id != null).toBeTruthy()
  expect(media.url != null).toBeTruthy()

  const mediaFile = await testWxApi.getMaterial(media.media_id)
  expect(mediaFile != null).toBeTruthy()
  await testWxApi.removeMaterial(media.media_id)

  // 测试视频永久素材
  const video = await testWxApi.uploadVideoMaterial(
    fs.readFileSync('./__tests__/resource/test.mp4'),
    'test.mp4',
    '测试',
    '测试视频'
  )
  expect(video.media_id != null).toBeTruthy()
  const videoInfo = await testWxApi.getVideoMaterial(video.media_id)
  expect(videoInfo.title != null).toBeTruthy()
  expect(videoInfo.description != null).toBeTruthy()
  expect(videoInfo.down_url != null).toBeTruthy()
  await testWxApi.removeMaterial(video.media_id)

  //测试图文永久素材
})
