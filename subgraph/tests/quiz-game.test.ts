import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { currentGame } from "../generated/schema"
import { currentGame as currentGameEvent } from "../generated/QuizGame/QuizGame"
import { handlecurrentGame } from "../src/quiz-game"
import { createcurrentGameEvent } from "./quiz-game-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let currentGameId = BigInt.fromI32(234)
    let newcurrentGameEvent = createcurrentGameEvent(caller, currentGameId)
    handlecurrentGame(newcurrentGameEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("currentGame created and stored", () => {
    assert.entityCount("currentGame", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "currentGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "currentGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentGameId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
