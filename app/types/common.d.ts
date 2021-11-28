interface ObjectType {
  [key: string]: boolean | string | number | ObjectType
}

interface ActionType {
  type: string
  data: ObjectType
}
