/* eslint-env jest */
import { testWxApi } from '../config'
import { WxMenu } from '../../../src/weixin/api/weixin_menu'

test('Test Weixin Menu', async () => {
  const menu: WxMenu = {
    button: [
      {
        name: 'Menu1',
        type: 'click',
        key: 'clink1',
        sub_button: []
      },
      {
        name: 'SubBtn1',
        sub_button: [
          {
            name: 'Btn2',
            type: 'view',
            url: 'http://www.baidu.com',
            sub_button: []
          },
          {
            name: 'Btn3',
            type: 'scancode_push',
            key: 'scancode_push',
            sub_button: []
          },
          {
            name: 'Btn4',
            type: 'scancode_waitmsg',
            key: 'scancode_waitmsg',
            sub_button: []
          },
          {
            name: 'Btn5',
            type: 'pic_sysphoto',
            key: 'pic_sysphoto',
            sub_button: []
          },
          {
            name: 'Btn6',
            type: 'pic_photo_or_album',
            key: 'pic_photo_or_album',
            sub_button: []
          }
        ]
      },
      {
        name: 'SubBtn2',
        sub_button: [
          {
            name: 'Btn7',
            type: 'pic_weixin',
            key: 'pic_weixin',
            sub_button: []
          },
          {
            name: 'Btn8',
            type: 'location_select',
            key: 'scancode_waitmsg',
            sub_button: []
          }
        ]
      }
    ]
  }
  await testWxApi.createMenu(menu)
  const menuInfo = await testWxApi.getMenu()
  expect(menuInfo.menu).toEqual(menu)
  await testWxApi.removeMenu()
})
