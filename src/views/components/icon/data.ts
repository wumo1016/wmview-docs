export const fontClassCode = `
  <i class="wm-icon-plus"></i>
  <i class="wm-icon-edit"></i>
  <i class="wm-icon-delete"></i>
  `
export const wmIconCode = `
  <wm-icon class="plus" size="20"></wm-icon>
  <wm-icon class="edit" color="#1890ff" size="20"></wm-icon>
  <wm-icon class="delete" tag="span" size="20"></wm-icon>
  <wm-icon class="loading" size="20" spin></wm-icon>
  `

export const columnConfig = [
  {
    label: '参数',
    value: 'params',
    width: 150
  },
  {
    label: '说明',
    value: 'desc'
  },
  {
    label: '类型',
    value: 'type'
  },
  {
    label: '必选/默认值',
    value: 'default',
    width: 150
  }
]

export const tableData = [
  {
    params: 'class',
    desc: '图标class类名',
    type: 'String',
    default: '必选'
  },
  {
    params: 'color',
    desc: '图标颜色',
    type: 'String',
    default: 'inherit'
  },
  {
    params: 'size',
    desc: '图标尺寸 单位px可有可无',
    type: 'String',
    default: 'inherit'
  },
  {
    params: 'tag',
    desc: '组件渲染的标签',
    type: 'String',
    default: 'i'
  },
  {
    params: 'spin',
    desc: '图标是否旋转',
    type: 'Boolean',
    default: false
  }
]
