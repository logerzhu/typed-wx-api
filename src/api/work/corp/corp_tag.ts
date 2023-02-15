import { CorpBase } from './corp_base'

/**
 * @internal
 */
export abstract class CorpTag extends CorpBase {
  /**
   * 获取企业标签库
   * @group 标签
   */
  async getCorpTagList(
    args?:
      | { tag_id: string[]; group_id?: undefined }
      | { tag_id?: undefined; group_id: string[] }
  ) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/get_corp_tag_list',
      data: {
        tag_id: args?.tag_id,
        group_id: args?.group_id
      }
    })
    return result as {
      tag_group: {
        group_id: string
        group_name: string
        create_time: number
        //标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)
        order: number
        //标签组是否已经被删除，只在指定tag_id进行查询时返回
        deleted?: boolean
        tag: {
          id: string
          name: string
          create_time: number
          //标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)
          order: number
          //标签是否已经被删除，只在指定tag_id/group_id进行查询时返回
          deleted?: boolean
        }[]
      }[]
    }
  }

  /**
   * 添加企业客户标签
   *
   * 如果要向指定的标签组下添加标签，需要填写group_id参数；如果要创建一个全新的标签组以及标签，则需要通过group_name参数指定新标签组名称，如果填写的groupname已经存在，则会在此标签组下新建标签。
   * 如果填写了group_id参数，则group_name和标签组的order参数会被忽略。
   * 不支持创建空标签组。
   * 标签组内的标签不可同名，如果传入多个同名标签，则只会创建一个。
   * @group 标签
   */
  async addCorpTag(
    args?: (
      | {
          group_id: string
          group_name?: undefined
        }
      | {
          group_id?: undefined
          //标签组名称，最长为30个字符
          group_name: string
        }
    ) & {
      //标签组次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
      order?: number
      tag: {
        name: string
        //标签次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
        order?: number
      }[]
    }
  ) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/add_corp_tag',
      data: args
    })
    return result as {
      tag_group: {
        group_id: string
        group_name: string
        create_time: number
        //标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)
        order: number
        tag: {
          id: string
          name: string
          create_time: number
          //标签排序的次序值，order值大的排序靠前。有效的值范围是[0, 2^32)
          order: number
        }[]
      }[]
    }
  }

  /**
   * 编辑企业客户标签
   * @group 标签
   */
  async editCorpTag(args?: {
    //标签或标签组的id
    id: string
    //新的标签或标签组名称，最长为30个字符
    name?: string
    //标签/标签组的次序值。order值大的排序靠前。有效的值范围是[0, 2^32)
    order?: number
  }) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/edit_corp_tag',
      data: args
    })
    return result as {}
  }

  /**
   * 删除企业客户标签
   *
   * tag_id和group_id不可同时为空。
   * 如果一个标签组下所有的标签均被删除，则标签组会被自动删除。
   * @group 标签
   */
  async delCorpTag(
    args:
      | { tag_id: string[]; group_id?: undefined }
      | { tag_id?: undefined; group_id: string[] }
  ) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/del_corp_tag',
      data: args
    })
    return result as {}
  }

  /**
   * 编辑客户企业标签
   * @group 标签
   */
  async markTag(
    args: {
      //添加外部联系人的userid
      userid: string
      //外部联系人userid
      external_userid: string
    } & ({ add_tag: string[] } | { remove_tag: string[] })
  ) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/mark_tag',
      data: args
    })
    return result as {}
  }
}
