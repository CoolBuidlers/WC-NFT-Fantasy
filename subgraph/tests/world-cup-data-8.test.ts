import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { WorldCupData8ChainlinkCancelled } from "../generated/schema"
import { WorldCupData8ChainlinkCancelled as WorldCupData8ChainlinkCancelledEvent } from "../generated/WorldCupData8/WorldCupData8"
import { handleWorldCupData8ChainlinkCancelled } from "../src/world-cup-data-8"
import { createWorldCupData8ChainlinkCancelledEvent } from "./world-cup-data-8-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = Bytes.fromI32(1234567890)
    let newWorldCupData8ChainlinkCancelledEvent = createWorldCupData8ChainlinkCancelledEvent(
      id
    )
    handleWorldCupData8ChainlinkCancelled(
      newWorldCupData8ChainlinkCancelledEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("WorldCupData8ChainlinkCancelled created and stored", () => {
    assert.entityCount("WorldCupData8ChainlinkCancelled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
