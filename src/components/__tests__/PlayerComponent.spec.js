import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import PlayerComponent from '@/components/PlayerStatsComponent.vue'
import flushPromises from 'flush-promises'

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

    let lifeBar = wrapper.vm.currentHealth
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

    let lifeBar = wrapper.vm.currentHealth
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

    let lifeBar = wrapper.vm.currentHealth
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
      reward: 100
    })

    await flushPromises()

    // credit
    expect(wrapper.text()).toContain('100 CG')
  })

  //emits

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
    let value = wrapper.emitted('player-attack')[0]

    expect(wrapper.emitted('player-attack')).toBeTruthy()
    expect(value[0]).toBeGreaterThanOrEqual(0)
    expect(value[0]).toBeLessThanOrEqual(6)
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
    let value = wrapper.emitted('reset-vars')[0]

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
    let value = wrapper.emitted('died')[0]

    expect(wrapper.emitted('died')).toBeTruthy()
    expect(value[0]).toBeTruthy()
  })
})
