import { shallowMount, mount } from '@vue/test-utils'
import PlayerComponent from '@/components/PlayerStatsComponent.vue'
import flushPromises from 'flush-promises'
import BootstrapVue from 'bootstrap-vue'
import { resetAllWhenMocks } from 'jest-when'
import Vue from 'vue'
Vue.use(BootstrapVue)

beforeEach(() => {
  jest.clearAllMocks()
  resetAllWhenMocks()
})

describe('PlayerStatsComponent.vue', () => {
  test('Le informations du joueur doivent apparaitre', async () => {
    const wrapper = await shallowMount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setData({
      experience: 4,
      rank: 'master'
    })

    await wrapper.setProps({
      credit: 0
    })

    await flushPromises()

    // nom
    expect(wrapper.text()).toContain('nom')
    // rank
    expect(wrapper.text()).toContain('master')
    // credit
    expect(wrapper.text()).toContain('0 CG')
    // nom vaisseau
    expect(wrapper.text()).toContain('Executor')
  })

  test('La vie du joueur doit exister et etre a 100% au debut', async () => {
    Vue.use(BootstrapVue)
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(100)
  })

  // shits qui update et methode
  test('La vie du joueur doit pouvoir changer en fonction de degat recus', async () => {
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    wrapper.vm.was_attacked(10)
    wrapper.vm.was_attacked(10)

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(80)
  })

  test('La vie du joueur doit pouvoir changer plusieur fois en fonction des degats recus', async () => {
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    wrapper.vm.was_attacked(10)

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(90)
  })

  test('Les credits du joueur doit pouvoir changer en fonction des credit recus', async () => {
    const wrapper = await shallowMount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      credit: 100
    })

    await flushPromises()

    // credit
    expect(wrapper.text()).toContain('100 CG')
  })

  // emits

  test('Le joueur doit pouvoir partager son attaque au parent', async () => {
    const wrapper = await shallowMount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      doAttack: true
    })

    await flushPromises()
    const value = wrapper.emitted('player-attack')[0]

    expect(wrapper.emitted('player-attack')).toBeTruthy()
    expect(value[0]).toBeGreaterThanOrEqual(10)
    expect(value[0]).toBeLessThanOrEqual(20)
  })

  test('Le joueur doit pouvoir partager son intention de reset ses props (et finir son tour) au parent', async () => {
    const wrapper = await shallowMount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      damage: 1
    })

    await flushPromises()
    const value = wrapper.emitted('reset-vars')[0]

    expect(wrapper.emitted('reset-vars')).toBeTruthy()
    expect(value[0]).toBeTruthy()
  })

  test("Le joueur doit pouvoir partager qu'il est mort au parent", async () => {
    const wrapper = await shallowMount(PlayerComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      damage: 1000
    })

    await flushPromises()
    const value = wrapper.emitted('died')[0]

    expect(wrapper.emitted('died')).toBeTruthy()
    expect(value[0]).toBeTruthy()
  })

  test('Le vaisseau doit se réparer lorsque la méthode repair est appelée', async () => {
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      credit: 1000
    })

    await flushPromises()

    wrapper.vm.was_attacked(10)
    await wrapper.vm.repair()

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(100)
  })

  test('Le vaisseau ne doit pas se réparer lorsque la méthode repair est appelée avec un nombre de credits trop bas', async () => {
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    await wrapper.setProps({
      credit: 0
    })

    wrapper.vm.was_attacked(10)
    wrapper.vm.repair()

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(90)
  })

  test('Le vaisseau ne doit pas se réparer lorsque la méthode repair est appelée avec avec des points de vie au maximum', async () => {
    const wrapper = await mount(PlayerComponent, {
      mocks: {
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    await wrapper.setProps({
      credit: 500
    })

    wrapper.vm.repair()

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(100)
    expect(wrapper.vm.credit).toBe(500)
  })
})
