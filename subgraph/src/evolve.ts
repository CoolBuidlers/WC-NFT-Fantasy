import { EvolveOwnershipTransferred as EvolveOwnershipTransferredEvent } from "../generated/Evolve/Evolve"
import { EvolveOwnershipTransferred } from "../generated/schema"

export function handleEvolveOwnershipTransferred(
  event: EvolveOwnershipTransferredEvent
): void {
  let entity = new EvolveOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
