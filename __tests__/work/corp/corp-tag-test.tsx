/* eslint-env jest */
import { corpApi } from '../config'

test('Test CorpTag Api', async () => {
  const tags = await corpApi.getCorpTagList()
  expect(tags.tag_group != null).toBeTruthy()
})
