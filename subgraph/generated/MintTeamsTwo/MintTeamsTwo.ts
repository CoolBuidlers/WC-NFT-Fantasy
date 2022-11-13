// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MintTeamsTwoLevelUp extends ethereum.Event {
  get params(): MintTeamsTwoLevelUp__Params {
    return new MintTeamsTwoLevelUp__Params(this);
  }
}

export class MintTeamsTwoLevelUp__Params {
  _event: MintTeamsTwoLevelUp;

  constructor(event: MintTeamsTwoLevelUp) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get level(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MintTeamsTwoOwnershipTransferred extends ethereum.Event {
  get params(): MintTeamsTwoOwnershipTransferred__Params {
    return new MintTeamsTwoOwnershipTransferred__Params(this);
  }
}

export class MintTeamsTwoOwnershipTransferred__Params {
  _event: MintTeamsTwoOwnershipTransferred;

  constructor(event: MintTeamsTwoOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MintTeamsTwo extends ethereum.SmartContract {
  static bind(address: Address): MintTeamsTwo {
    return new MintTeamsTwo("MintTeamsTwo", address);
  }

  evolveAddress(): Address {
    let result = super.call("evolveAddress", "evolveAddress():(address)", []);

    return result[0].toAddress();
  }

  try_evolveAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "evolveAddress",
      "evolveAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mintTeamsOneAddress(): Address {
    let result = super.call(
      "mintTeamsOneAddress",
      "mintTeamsOneAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_mintTeamsOneAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "mintTeamsOneAddress",
      "mintTeamsOneAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  predictionAddress(): Address {
    let result = super.call(
      "predictionAddress",
      "predictionAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_predictionAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "predictionAddress",
      "predictionAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setAddress(): Address {
    let result = super.call("setAddress", "setAddress():(address)", []);

    return result[0].toAddress();
  }

  try_setAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("setAddress", "setAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _setAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimLevel3NftCall extends ethereum.Call {
  get inputs(): ClaimLevel3NftCall__Inputs {
    return new ClaimLevel3NftCall__Inputs(this);
  }

  get outputs(): ClaimLevel3NftCall__Outputs {
    return new ClaimLevel3NftCall__Outputs(this);
  }
}

export class ClaimLevel3NftCall__Inputs {
  _call: ClaimLevel3NftCall;

  constructor(call: ClaimLevel3NftCall) {
    this._call = call;
  }

  get _predictor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamName(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ClaimLevel3NftCall__Outputs {
  _call: ClaimLevel3NftCall;

  constructor(call: ClaimLevel3NftCall) {
    this._call = call;
  }
}

export class ClaimLevel4NftCall extends ethereum.Call {
  get inputs(): ClaimLevel4NftCall__Inputs {
    return new ClaimLevel4NftCall__Inputs(this);
  }

  get outputs(): ClaimLevel4NftCall__Outputs {
    return new ClaimLevel4NftCall__Outputs(this);
  }
}

export class ClaimLevel4NftCall__Inputs {
  _call: ClaimLevel4NftCall;

  constructor(call: ClaimLevel4NftCall) {
    this._call = call;
  }

  get _predictor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamName(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ClaimLevel4NftCall__Outputs {
  _call: ClaimLevel4NftCall;

  constructor(call: ClaimLevel4NftCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetEvolveAddressCall extends ethereum.Call {
  get inputs(): SetEvolveAddressCall__Inputs {
    return new SetEvolveAddressCall__Inputs(this);
  }

  get outputs(): SetEvolveAddressCall__Outputs {
    return new SetEvolveAddressCall__Outputs(this);
  }
}

export class SetEvolveAddressCall__Inputs {
  _call: SetEvolveAddressCall;

  constructor(call: SetEvolveAddressCall) {
    this._call = call;
  }

  get _evolveAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetEvolveAddressCall__Outputs {
  _call: SetEvolveAddressCall;

  constructor(call: SetEvolveAddressCall) {
    this._call = call;
  }
}

export class SetMintTeamOneAddressCall extends ethereum.Call {
  get inputs(): SetMintTeamOneAddressCall__Inputs {
    return new SetMintTeamOneAddressCall__Inputs(this);
  }

  get outputs(): SetMintTeamOneAddressCall__Outputs {
    return new SetMintTeamOneAddressCall__Outputs(this);
  }
}

export class SetMintTeamOneAddressCall__Inputs {
  _call: SetMintTeamOneAddressCall;

  constructor(call: SetMintTeamOneAddressCall) {
    this._call = call;
  }

  get _mintTeamsOneAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMintTeamOneAddressCall__Outputs {
  _call: SetMintTeamOneAddressCall;

  constructor(call: SetMintTeamOneAddressCall) {
    this._call = call;
  }
}

export class SetPredictionAddressCall extends ethereum.Call {
  get inputs(): SetPredictionAddressCall__Inputs {
    return new SetPredictionAddressCall__Inputs(this);
  }

  get outputs(): SetPredictionAddressCall__Outputs {
    return new SetPredictionAddressCall__Outputs(this);
  }
}

export class SetPredictionAddressCall__Inputs {
  _call: SetPredictionAddressCall;

  constructor(call: SetPredictionAddressCall) {
    this._call = call;
  }

  get _predictionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPredictionAddressCall__Outputs {
  _call: SetPredictionAddressCall;

  constructor(call: SetPredictionAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}