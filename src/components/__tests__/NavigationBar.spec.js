import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavigationBar from '@/components/NavigationBar.vue'

jest.mock('@/views/Home.vue')

describe('NavigationBar.vue', () => {
  test('Doit contenir un lien sur la page accueil et sur la page de pointage', async () => {
    const wrapper = shallowMount(NavigationBar, {
      // Stubs permet de modifier un comportement. Ici on remplace RouterLink par un RouterLinkStub.
      // Ainsi, avec RouterLinkStub on peut tester notre composant sans dépendre d'une instance du routeur.
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const routerLinks = wrapper
      .findAllComponents(RouterLinkStub)
      .wrappers.map(routerLink => routerLink.props().to)

    expect(routerLinks).toContainEqual(
      { name: 'Home' },
      { name: 'Leaderboard' }
    )
  })
})
