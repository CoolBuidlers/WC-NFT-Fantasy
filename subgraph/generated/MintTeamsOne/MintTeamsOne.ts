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

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class LevelUp extends ethereum.Event {
  get params(): LevelUp__Params {
    return new LevelUp__Params(this);
  }
}

export class LevelUp__Params {
  _event: LevelUp;

  constructor(event: LevelUp) {
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

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
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

  get teamName(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get firstFourMinted(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class MintTeamsOneOwnershipTransferred extends ethereum.Event {
  get params(): MintTeamsOneOwnershipTransferred__Params {
    return new MintTeamsOneOwnershipTransferred__Params(this);
  }
}

export class MintTeamsOneOwnershipTransferred__Params {
  _event: MintTeamsOneOwnershipTransferred;

  constructor(event: MintTeamsOneOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintTeamsOne extends ethereum.SmartContract {
  static bind(address: Address): MintTeamsOne {
    return new MintTeamsOne("MintTeamsOne", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
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

  guessingGameAddress(): Address {
    let result = super.call(
      "guessingGameAddress",
      "guessingGameAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_guessingGameAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "guessingGameAddress",
      "guessingGameAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintTeamsTwoAddress(): Address {
    let result = super.call(
      "mintTeamsTwoAddress",
      "mintTeamsTwoAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_mintTeamsTwoAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "mintTeamsTwoAddress",
      "mintTeamsTwoAddress():(address)",
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

  quizGameAddress(): Address {
    let result = super.call(
      "quizGameAddress",
      "quizGameAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_quizGameAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "quizGameAddress",
      "quizGameAddress():(address)",
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

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class ClaimLevel1NftCall extends ethereum.Call {
  get inputs(): ClaimLevel1NftCall__Inputs {
    return new ClaimLevel1NftCall__Inputs(this);
  }

  get outputs(): ClaimLevel1NftCall__Outputs {
    return new ClaimLevel1NftCall__Outputs(this);
  }
}

export class ClaimLevel1NftCall__Inputs {
  _call: ClaimLevel1NftCall;

  constructor(call: ClaimLevel1NftCall) {
    this._call = call;
  }

  get _predictor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get firstFourMinted(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class ClaimLevel1NftCall__Outputs {
  _call: ClaimLevel1NftCall;

  constructor(call: ClaimLevel1NftCall) {
    this._call = call;
  }
}

export class ClaimLevel2NftCall extends ethereum.Call {
  get inputs(): ClaimLevel2NftCall__Inputs {
    return new ClaimLevel2NftCall__Inputs(this);
  }

  get outputs(): ClaimLevel2NftCall__Outputs {
    return new ClaimLevel2NftCall__Outputs(this);
  }
}

export class ClaimLevel2NftCall__Inputs {
  _call: ClaimLevel2NftCall;

  constructor(call: ClaimLevel2NftCall) {
    this._call = call;
  }

  get _predictor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamName(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ClaimLevel2NftCall__Outputs {
  _call: ClaimLevel2NftCall;

  constructor(call: ClaimLevel2NftCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
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

export class SetGuessingGameAddressCall extends ethereum.Call {
  get inputs(): SetGuessingGameAddressCall__Inputs {
    return new SetGuessingGameAddressCall__Inputs(this);
  }

  get outputs(): SetGuessingGameAddressCall__Outputs {
    return new SetGuessingGameAddressCall__Outputs(this);
  }
}

export class SetGuessingGameAddressCall__Inputs {
  _call: SetGuessingGameAddressCall;

  constructor(call: SetGuessingGameAddressCall) {
    this._call = call;
  }

  get _guessingGameAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGuessingGameAddressCall__Outputs {
  _call: SetGuessingGameAddressCall;

  constructor(call: SetGuessingGameAddressCall) {
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

  get _mintTeamsTwoAddress(): Address {
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

export class SetQuizGameAddressCall extends ethereum.Call {
  get inputs(): SetQuizGameAddressCall__Inputs {
    return new SetQuizGameAddressCall__Inputs(this);
  }

  get outputs(): SetQuizGameAddressCall__Outputs {
    return new SetQuizGameAddressCall__Outputs(this);
  }
}

export class SetQuizGameAddressCall__Inputs {
  _call: SetQuizGameAddressCall;

  constructor(call: SetQuizGameAddressCall) {
    this._call = call;
  }

  get _quizGameAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetQuizGameAddressCall__Outputs {
  _call: SetQuizGameAddressCall;

  constructor(call: SetQuizGameAddressCall) {
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