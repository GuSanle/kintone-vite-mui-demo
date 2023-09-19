declare namespace kintone.types {
  interface Fields {
    thumb: kintone.fieldTypes.SingleLineText;
    num: kintone.fieldTypes.Number;
    title: kintone.fieldTypes.SingleLineText;
    price: kintone.fieldTypes.Number;
    desc: kintone.fieldTypes.SingleLineText;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新人: kintone.fieldTypes.Modifier;
    创建人: kintone.fieldTypes.Creator;
    更新时间: kintone.fieldTypes.UpdatedTime;
    记录编号: kintone.fieldTypes.RecordNumber;
    创建时间: kintone.fieldTypes.CreatedTime;
  }
}
