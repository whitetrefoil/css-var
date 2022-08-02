import { describe, expect, test } from '@jest/globals'
import { cssDurationToMs } from './main.js'


describe('cssDurationToMs()', () => {
  test('100ms => 100', () => {
    expect(cssDurationToMs('100ms')).toBe(100)
  })

  test('1s => 1000', () => {
    expect(cssDurationToMs('1s')).toBe(1000)
  })

  test('1.5s => 1500', () => {
    expect(cssDurationToMs('1.5s')).toBe(1500)
  })

  test('.5s => 500', () => {
    expect(cssDurationToMs('.5s')).toBe(500)
  })

  test('1.ms => Error', () => {
    expect(() => cssDurationToMs('1.ms')).toThrow()
  })

  test('1mx => Error', () => {
    expect(() => cssDurationToMs('1mx')).toThrow()
  })
})
