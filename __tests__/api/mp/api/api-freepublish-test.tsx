/* eslint-env jest */
import { testWxApi } from '../config'
import fs from 'fs'

test('Test WxMp FreePublish', async () => {
  const cover = await testWxApi.uploadMaterial(
    fs.readFileSync('./__tests__/resource/1.png'),
    'image',
    '1.png'
  )
  //新建草稿
  const addDraftResult = await testWxApi.addDraft([
    {
      title: '测试',
      thumb_media_id: cover.media_id,
      author: 'Loger',
      digest: '摘要',
      content: '测试',
      content_source_url: 'https://www.163.com',
      need_open_comment: 0,
      only_fans_can_comment: 0
    }
  ])
  expect(addDraftResult.media_id != null).toBeTruthy()

  const publishInf = await testWxApi.submitFreePublish(addDraftResult.media_id)

  expect(publishInf.publish_id != null).toBeTruthy()
  const publish = await testWxApi.getFreePublish(publishInf.publish_id)

  if (publish.publish_status === 0) {
    const publishes = await testWxApi.getFreePublishes({
      offset: 0,
      count: 10,
      no_content: 1
    })
    expect(publishes.total_count > 0).toBeTruthy()
    expect(publishes.item[0].article_id != null).toBeTruthy()
    expect(publishes.item[0].content != null).toBeTruthy()
    await testWxApi.deleteFreePublish({ article_id: publish.article_id })
  }
})
