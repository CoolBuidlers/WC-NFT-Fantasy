import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { FetchTeamsFourOwnershipTransferred } from "../generated/schema"
import { FetchTeamsFourOwnershipTransferred as FetchTeamsFourOwnershipTransferredEvent } from "../generated/FetchTeamsFour/FetchTeamsFour"
import { handleFetchTeamsFourOwnershipTransferred } from "../src/fetch-teams-four"
import { createFetchTeamsFourOwnershipTransferredEvent } from "./fetch-teams-four-utils"

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
    let newFetchTeamsFourOwnershipTransferredEvent = createFetchTeamsFourOwnershipTransferredEvent(
      previousOwner,
      newOwner
    )
    handleFetchTeamsFourOwnershipTransferred(
      newFetchTeamsFourOwnershipTransferredEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FetchTeamsFourOwnershipTransferred created and stored", () => {
    assert.entityCount("FetchTeamsFourOwnershipTransferred", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FetchTeamsFourOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "previousOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FetchTeamsFourOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
