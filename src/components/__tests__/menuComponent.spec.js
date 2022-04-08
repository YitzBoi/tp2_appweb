import { shallowMount } from '@vue/test-utils'
import MenuComponent from '@/components/MenuComponent.vue'
import { shipsService } from '@/services/shipsService'
import { shipsJsonFake } from '@/../tests/data/shipsJsonFake'
import flushPromises from 'flush-promises'
import { when, resetAllWhenMocks } from 'jest-when'

let ships

beforeEach(() => {
  ships = [...shipsJsonFake]
  jest.clearAllMocks()
  resetAllWhenMocks()
})

describe('MenuComponent.vue', () => {})
