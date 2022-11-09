import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { FetchTeamsTwoOwnershipTransferred } from "../generated/schema"
import { FetchTeamsTwoOwnershipTransferred as FetchTeamsTwoOwnershipTransferredEvent } from "../generated/FetchTeamsTwo/FetchTeamsTwo"
import { handleFetchTeamsTwoOwnershipTransferred } from "../src/fetch-teams-two"
import { createFetchTeamsTwoOwnershipTransferredEvent } from "./fetch-teams-two-utils"

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
    let newFetchTeamsTwoOwnershipTransferredEvent = createFetchTeamsTwoOwnershipTransferredEvent(
      previousOwner,
      newOwner
    )
    handleFetchTeamsTwoOwnershipTransferred(
      newFetchTeamsTwoOwnershipTransferredEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FetchTeamsTwoOwnershipTransferred created and stored", () => {
    assert.entityCount("FetchTeamsTwoOwnershipTransferred", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FetchTeamsTwoOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "previousOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FetchTeamsTwoOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
