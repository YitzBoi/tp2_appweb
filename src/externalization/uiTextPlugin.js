export const uiTextPlugin = {
  MissionInfos: {
    MAX_ROUNDS: 5,
    DEFAULT_ROUND: 1
  }
}

// Plugin pour VueJs
// https://coderethinked.com/3-different-ways-to-access-constants-in-a-vue-template/
uiTextPlugin.install = function (Vue) {
  Vue.prototype.$getUiText = key => {
    return uiTextPlugin[key]
  }
}

export default uiTextPlugin
