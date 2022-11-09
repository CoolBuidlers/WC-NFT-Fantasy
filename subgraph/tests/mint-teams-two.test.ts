import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { MintTeamsTwoLevelUp } from "../generated/schema"
import { MintTeamsTwoLevelUp as MintTeamsTwoLevelUpEvent } from "../generated/MintTeamsTwo/MintTeamsTwo"
import { handleMintTeamsTwoLevelUp } from "../src/mint-teams-two"
import { createMintTeamsTwoLevelUpEvent } from "./mint-teams-two-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let level = BigInt.fromI32(234)
    let newMintTeamsTwoLevelUpEvent = createMintTeamsTwoLevelUpEvent(
      account,
      tokenId,
      level
    )
    handleMintTeamsTwoLevelUp(newMintTeamsTwoLevelUpEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MintTeamsTwoLevelUp created and stored", () => {
    assert.entityCount("MintTeamsTwoLevelUp", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MintTeamsTwoLevelUp",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MintTeamsTwoLevelUp",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "MintTeamsTwoLevelUp",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "level",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
