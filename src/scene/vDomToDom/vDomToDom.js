// 虚拟dom转真实dom
const vnode = {
  tag: 'div',
  attrs: {
    id: 'app',
  },
  children: [{
    tag: 'span',
    children: [{
      tag: 'a',
      children: [],
    }],
  },
  {
    tag: 'span',
    children: [{
      tag: 'a',
      children: [],
    },
    {
      tag: 'a',
      children: [],
    },
    ],
  },
  ],
}
render(vnode, document.querySelector('#root'))

/**
 * @description: 创建节点，添加到容器中
 * @param {type} vnode
 * @param {type} container
 */
function render(vnode, container) {
  const newDom = createDom(vnode)
  container.appendChild(newDom)
}

/**
 * @description: 生成节点、渲染props
 * @param {type} vnode
 * @return {element} dom
 */
function createDom(vnode) {
  const { tag, attrs, children } = vnode
  let dom = document.createElement(tag)
  if (typeof attrs === 'object') {
    updateProps(dom, {}, attrs)
  }
  if (children.length > 0) {
    reconcileChildren(children, dom)
  }
  return dom
}

/**
 * @description: 递归渲染子节点
 * @param {type} childrenVdom
 * @param {type} parentDOM
 */
function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    render(childrenVdom[i], parentDOM)
  }
}

/**
 * 把新的属性同步到真实DOM上
 * @param {*} dom
 * @param {*} oldProps
 * @param {*} newProps
 */
function updateProps(dom, oldProps = {}, newProps = {}) {
  // 处理新增和修改属性
  for (const key in newProps) { // style={} className id
    if (key === 'style') {
      let styleObj = newProps[key]
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr]
      }
    } else {
      // id className
      dom[key] = newProps[key]
    }
  }
  // 处理删除属性
  for (const key in oldProps) {
    if (!newProps.hasOwnProperty(key)) {
      delete dom[key]
    }
  }
}
