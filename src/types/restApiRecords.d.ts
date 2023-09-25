import type { KintoneRecordField } from '@kintone/rest-api-client'
declare global {
  namespace kintoneRest {
    type GoodListAppRecord = {
      $id: KintoneRecordField.ID
      $revision: KintoneRecordField.Revision
      thumb: KintoneRecordField.SingleLineText
      num: KintoneRecordField.Number
      title: KintoneRecordField.SingleLineText
      price: KintoneRecordField.Number
      desc: KintoneRecordField.SingleLineText
      更新人: KintoneRecordField.Modifier
      创建人: KintoneRecordField.Creator
      更新时间: KintoneRecordField.UpdatedTime
      记录编号: KintoneRecordField.RecordNumber
      创建时间: KintoneRecordField.CreatedTime
    }
  }
}
