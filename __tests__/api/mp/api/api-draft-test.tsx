/* eslint-env jest */
import { testWxApi } from '../config'
import fs from 'fs'

test('Test WxMp Draft', async () => {
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

  //更新草稿
  await testWxApi.updateDraft({
    media_id: addDraftResult.media_id,
    index: 0,
    articles: {
      title: '测试2',
      thumb_media_id: cover.media_id,
      author: 'Loger2',
      digest: '摘要2',
      content: '测试2',
      content_source_url: 'https://www.163.com'
    }
  })

  //获取草稿
  const draft = await testWxApi.getDraft(addDraftResult.media_id)
  expect(draft.news_item.length > 0).toBeTruthy()
  expect(draft.news_item[0].title).toEqual('测试2')
  expect(draft.news_item[0].author).toEqual('Loger2')
  expect(draft.news_item[0].digest).toEqual('摘要2')
  expect(draft.news_item[0].content).toEqual('测试2')
  expect(draft.news_item[0].content_source_url).toEqual('https://www.163.com')
  expect(draft.news_item[0].url != null).toBeTruthy()

  //获取草稿总数
  const draftCount = await testWxApi.getDraftCount()
  expect(draftCount.total_count > 0).toBeTruthy()

  //批量获取草稿
  const drafts = await testWxApi.getDrafts({
    offset: 0,
    count: 10,
    no_content: 0
  })
  expect(drafts.total_count > 0).toBeTruthy()
  expect(drafts.item_count > 0).toBeTruthy()
  expect(drafts.item[0].content?.news_item[0].title != null).toBeTruthy()

  //删除草稿
  await testWxApi.deleteDraft(addDraftResult.media_id)
  await testWxApi.deleteMaterial(cover.media_id)
})
