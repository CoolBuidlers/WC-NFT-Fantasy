import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { FetchTeamsThreeOwnershipTransferred } from "../generated/schema"
import { FetchTeamsThreeOwnershipTransferred as FetchTeamsThreeOwnershipTransferredEvent } from "../generated/FetchTeamsThree/FetchTeamsThree"
import { handleFetchTeamsThreeOwnershipTransferred } from "../src/fetch-teams-three"
import { createFetchTeamsThreeOwnershipTransferredEvent } from "./fetch-teams-three-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let previousOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFetchTeamsThreeOwnershipTransferredEvent = createFetchTeamsThreeOwnershipTransferredEvent(
      previousOwner,
      newOwner
    )
    handleFetchTeamsThreeOwnershipTransferred(
      newFetchTeamsThreeOwnershipTransferredEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FetchTeamsThreeOwnershipTransferred created and stored", () => {
    assert.entityCount("FetchTeamsThreeOwnershipTransferred", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FetchTeamsThreeOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "previousOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FetchTeamsThreeOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
