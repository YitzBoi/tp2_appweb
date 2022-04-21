export const uiTextPlugin = {
  MissionInfos: {
    MAX_ROUNDS: 5,
    DEFAULT_ROUND: 1
  },
  Menu: {
    DEFAULT_IS_LOADING: true
  },
  Ship: {
    DEFAULT_CHANCE: 0,
    DEFAULT_RANK: '1',
    DEFAULT_HEALTH: 100,
    DEFAULT_NAME: 'Default'
  },
  Rank: {
    RANK_1_NAME: 'Beginner',
    RANK_1_CHANCE: 20,
    RANK_2_NAME: 'Novice',
    RANK_2_CHANCE: 35,
    RANK_3_NAME: 'Experienced',
    RANK_3_CHANCE: 50,
    RANK_4_NAME: 'Master',
    RANK_4_CHANCE: 70
  },
  Actions: {
    ACTIONS_LABEL: 'Actions',
    FIGHT_BUTTON_LABEL: 'Combattre',
    END_FIGHT_BUTTON_LABEL: 'Terminer la mission',
    END_FIGHT_AND_REPAIR_BUTTON_LABEL:
      'Terminer la mission et réparer le vaisseau'
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
