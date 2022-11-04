import {
  ChangeOrdersOwnershipTransferred as ChangeOrdersOwnershipTransferredEvent,
  TeamsSwapped as TeamsSwappedEvent
} from "../generated/ChangeOrders/ChangeOrders"
import {
  ChangeOrdersOwnershipTransferred,
  TeamsSwapped
} from "../generated/schema"

export function handleChangeOrdersOwnershipTransferred(
  event: ChangeOrdersOwnershipTransferredEvent
): void {
  let entity = new ChangeOrdersOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTeamsSwapped(event: TeamsSwappedEvent): void {
  let entity = new TeamsSwapped(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.predictor = event.params.predictor
  entity.firstTeam = event.params.firstTeam
  entity.secondTeam = event.params.secondTeam
  entity.round = event.params.round
  entity.save()
}
