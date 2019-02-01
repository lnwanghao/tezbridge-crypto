// @flow

import TezBridgeCrypto from './../src/index'
import { assert } from './util'

const TBC = TezBridgeCrypto

const fn_tests = async () => {
  {
    assert(
      TBC.codec.encodeZarithUInt('127') === '7f' &&
      TBC.codec.encodeZarithUInt('128') === '8001' &&
      TBC.codec.encodeZarithUInt('13311') === 'ff67'
    , 'FN: encodeZarithUInt')

    assert(
      TBC.codec.encodeZarithInt('5311') === 'bf52',
      'FN: encodeZarithInt')
  }

  {
    const json_storage = {"prim":"Pair","args":[{"bytes":"01B2A4F12006B191111B11FAA0A126BCDDDED861DE00"},{"prim":"Pair","args":[{"bytes":"0000F9A61EEFD5D12786E70433B1EDC846AC9EB5FCD6"},{"prim":"Pair","args":[{"prim":"True"},{"prim":"Pair","args":[{"int":"213"},{"prim":"Pair","args":[{"int":"1242851"},{"int":"0"}]}]}]}]}]}
    const encoded_storage = TBC.codec.encodeRawBytes(json_storage)
    const decoded_storage = TBC.codec.decodeRawBytes(encoded_storage)
    assert(JSON.stringify(decoded_storage) === JSON.stringify(json_storage), 
      'FN: encodeRawBytes and decodeRawBytes for contract storage')

    const json_code = [{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"address","annots":["%_Liq_entry_buy_for"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":["%buyer"]},{"prim":"option","args":[{"prim":"mutez"}],"annots":["%tokens"]}],"annots":[":sell_request","%_Liq_entry_sell_for"]},{"prim":"or","args":[{"prim":"mutez","annots":["%_Liq_entry_set_target_supply"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":["%buyer"]},{"prim":"option","args":[{"prim":"mutez"}],"annots":["%tokens"]}],"annots":[":sell_request","%_Liq_entry_finalize_sale"]},{"prim":"address","annots":["%_Liq_entry_set_sell_adapter"]}]}]}]}],"annots":[":_entries"]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"map","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"mutez","annots":["%balance"]},{"prim":"mutez","annots":["%to_sell"]}],"annots":[":account"]}],"annots":["%accounts"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%held_supply"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%target_supply"]},{"prim":"pair","args":[{"prim":"option","args":[{"prim":"address"}],"annots":["%sell_adapter"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%min_tx"]},{"prim":"pair","args":[{"prim":"key_hash","annots":["%destination"]},{"prim":"pair","args":[{"prim":"address","annots":["%admin"]},{"prim":"pair","args":[{"prim":"string","annots":["%name"]},{"prim":"string","annots":["%symbol"]}]}]}]}]}]}]}]}],"annots":[":storage"]}]},{"prim":"code","args":[[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"CDR","annots":["@storage_slash_1"]}]]},{"prim":"CAR","annots":["@parameter_slash_2"]},{"prim":"DUP","annots":["@parameter"]},{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@buyer_slash_50"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%min_tx"]}],{"prim":"AMOUNT","annots":["@amount"]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["@target","%target_supply"]}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@held","%held_supply"]}],{"prim":"DUP","annots":["@held"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@target"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GT"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@held"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@target"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"SUB","annots":["@available"]},{"prim":"AMOUNT","annots":["@amount"]},{"prim":"COMPARE"},{"prim":"LE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"AMOUNT","annots":["@amount"]},{"prim":"PAIR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@buyer"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@tokens"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR","annots":["@storage"]}],{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["%held_supply"]}],{"prim":"ADD"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"DUP","annots":["@storage"]},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"ADD"},{"prim":"PAIR","annots":["@account","%balance","%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DIP","args":[[{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR","annots":["%accounts"]},{"prim":"DUP"},{"prim":"NIL","args":[{"prim":"operation"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}],[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%destination"]}],{"prim":"IMPLICIT_ACCOUNT"},{"prim":"AMOUNT","annots":["@amount"]},{"prim":"UNIT"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@request_slash_52"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%sell_adapter"]}],{"prim":"IF_NONE","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"OR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"OR"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@request"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["@storage"]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DUP","annots":["@account"]},{"prim":"CDR","annots":["%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"SUB","annots":["@remaining"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%tokens"]},{"prim":"IF_NONE","args":[[{"prim":"DUP","annots":["@remaining"]}],[]]},{"prim":"RENAME","annots":["@tokens"]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@remaining"]}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"LE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@remaining"]}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GT"},{"prim":"AND"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%min_tx"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GE"},{"prim":"OR"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"PAIR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@buyer"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR","annots":["@storage"]}],{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@tokens"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},{"prim":"ADD"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"PAIR","annots":["@account","%balance","%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DIP","args":[[{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR","annots":["%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@new_target_supply_slash_54"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"PAIR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@request_slash_57"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%tokens"]},{"prim":"IF_NONE","args":[[{"prim":"DUP","annots":["@account"]},{"prim":"CDR","annots":["%to_sell"]}],[]]},{"prim":"RENAME","annots":["@tokens"]},{"prim":"DUP","annots":["@tokens"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"SUB","annots":["@balance"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["%held_supply"]}],{"prim":"SUB"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"DUP","annots":["@storage"]},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@balance"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"mutez","annots":["%balance"]},{"prim":"mutez","annots":["%to_sell"]}],"annots":[":account"]}]}],[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},{"prim":"SUB","annots":["@to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@balance"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR","annots":["%balance","%to_sell"]},{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}],{"prim":"RENAME","annots":["@account"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"CAR","annots":["%buyer"]},{"prim":"UPDATE"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"RENAME","annots":["@sell_adapter_slash_67"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}]]}],{"prim":"SOME"},{"prim":"PAIR","annots":["%sell_adapter"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}]]}]]}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]}]]}]
    const encoded_code = TBC.codec.encodeRawBytes(json_code)
    const decoded_code = TBC.codec.decodeRawBytes(encoded_code)
    assert(JSON.stringify(json_code) === JSON.stringify(decoded_code), 
      'FN: encodeRawBytes and decodeRawBytes for contract code')
  }

  {
    const sample1 = {address: 'tz1hgWvYdzLECdrq5zndGHwCGnUCJq1KFe3r'}
    const sample2 = {address: 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'}
    const sample3 = {address: 'tz3Vrs3r11Tu9fZvu4mHFcuNt9FK9QuCw83X'}
    const sample4 = {contract: 'KT1AthoYG1RnR9wDrsk4euuXh22SteYmvoUC'}
    const sample5 = {key: 'edpkunm1aRnRtHwVsBGSFgKmw5EhBn4gR6NC5JqVoAi57viSgAN3t5'}
    const sample6 = {key_hash: 'tz1hgWvYdzLECdrq5zndGHwCGnUCJq1KFe3r'}
    const sample7 = {key_hash: 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'}
    const sample8 = {key_hash: 'tz3Vrs3r11Tu9fZvu4mHFcuNt9FK9QuCw83X'}
    const sample9 = {signature: 'edsigu6FNEzqHPAbQAUjjKtcAFkiW4The5BQbCj53bCyV9st32aHrcZhqnzLWw74HiwMScMh1SiTgY8juYUAUsJ3JG2DvGeCFjd'}
    const sample10 = {signature: 'spsig1VP6h6zPvriDguRw1QShFXsQz2LXMQrMNMBtwq6XRZmVC8SEmkqmtKMDoDLt44pR3JzeEjZ2BNZHZ2p3NP9u1RiS1kHoPy'}
    const sample11 = {signature: 'p2sigsVk2Ld4ob7qmmfMhbkM79MH8xwXMgWP28kjMLnoRQ7aijRjWot7f9XP74GKGdCd7DKDKKjPDJaSsLi6fdf12nm4fqE2mG'}
    const sample12 = {prim: 'Pair', args: [
      sample3,
      {prim: 'Pair', args: [
        sample4,
        {prim: 'Pair', args: [
          sample5,
          {prim: 'Pair', args: [
            sample7,
            sample10
          ]}
        ]}
      ]}
    ]}
    
    assert(TBC.codec.encodeRawBytes(sample1) === '0a000000160000f1cb2a6739025bf5008c4e8f610ba0f0f496f3fc'.toUpperCase(), 
      'FN: pack data sample1')
    assert(TBC.codec.encodeRawBytes(sample2) === '0a000000160001806d2628efefae710659f622a5d667b12d379024'.toUpperCase(), 
      'FN: pack data sample2')
    assert(TBC.codec.encodeRawBytes(sample3) === '0a000000160002688d34fccfa4a854b18dbbbd1b369f1b7f0e56d9'.toUpperCase(), 
      'FN: pack data sample3')
    assert(TBC.codec.encodeRawBytes(sample4) === '0a00000016011954991caa46dee50c6c501cf962514ba43f71a800'.toUpperCase(), 
      'FN: pack data sample4')
    assert(TBC.codec.encodeRawBytes(sample5) === '0a00000021009713dbe6f994d372a8c9a32bc4b3c249e6c6438f42eca1db2a0b342608a965ec'.toUpperCase(), 
      'FN: pack data sample5')
    assert(TBC.codec.encodeRawBytes(sample6) === '0a0000001500f1cb2a6739025bf5008c4e8f610ba0f0f496f3fc'.toUpperCase(), 
      'FN: pack data sample6')
    assert(TBC.codec.encodeRawBytes(sample7) === '0a0000001501806d2628efefae710659f622a5d667b12d379024'.toUpperCase(), 
      'FN: pack data sample7')
    assert(TBC.codec.encodeRawBytes(sample8) === '0a0000001502688d34fccfa4a854b18dbbbd1b369f1b7f0e56d9'.toUpperCase(), 
      'FN: pack data sample8')
    assert(TBC.codec.encodeRawBytes(sample9) === '0a00000040f7f82a9502877aa72afd1f4d08cd7261c1c806737f87007162a1848b78d268c9c4d6c3f7e46469c1227f51a4423202b9c70025a20353a00d961d1aae0f68e008'.toUpperCase(), 
      'FN: pack data sample9')
    assert(TBC.codec.encodeRawBytes(sample10) === '0a00000040b42b12c51e07aad7aa451da4bca41161b97759211ecf758d826e4b3a81b3af491c6804507e3962618d2caf3af5f5d669ee92f2dc935f02cdc62a4e699d25eb7a'.toUpperCase(), 
      'FN: pack data sample10')
    assert(TBC.codec.encodeRawBytes(sample11) === '0a00000040e6c98f54c10204ffa727118b68295d44b99dbe31ebc73a4ed05319baecda517229f67b1225a814b6b568478b3809432148e9ce932946ba8161ab62db73022afd'.toUpperCase(), 
      'FN: pack data sample11')
    assert(TBC.codec.encodeRawBytes(sample12) === '07070a000000160002688d34fccfa4a854b18dbbbd1b369f1b7f0e56d907070a00000016011954991caa46dee50c6c501cf962514ba43f71a80007070a00000021009713dbe6f994d372a8c9a32bc4b3c249e6c6438f42eca1db2a0b342608a965ec07070a0000001501806d2628efefae710659f622a5d667b12d3790240a00000040b42b12c51e07aad7aa451da4bca41161b97759211ecf758d826e4b3a81b3af491c6804507e3962618d2caf3af5f5d669ee92f2dc935f02cdc62a4e699d25eb7a'.toUpperCase(), 
      'FN: pack data sample12')
  }

  {
    const a1 = new Uint8Array([])
    const a2 = new Uint8Array([1])
    const a3 = new Uint8Array([2, 255])
    {
      const r = TBC.codec.bytesConcat(a1, a1)
      assert(r.length === 0, 'FN: bytesConcat empty with empty')
    }
    {
      const r = TBC.codec.bytesConcat(a1, a2)
      assert(r.length === 1 && r[0] === 1, 'FN: bytesConcat empty with non-empty')
    }
    {
      const r = TBC.codec.bytesConcat(a2, a3)
      assert(r.length === 3 && r[0] === 1 && r[1] === 2 && r[2] === 255, 
             'FN: bytesConcat non-empty with non-empty')
    }
  }

  {
    const source = 'tz1TUswtLE1cTBgoBC2JAtQ5Jsz2crp1tZvJ'
    const prefix = TBC.codec.prefix.ed25519_public_key_hash
    const bytes = TBC.codec.bs58checkDecode(source, prefix)
    const bytes_auto = TBC.codec.bs58checkDecode(source)
    assert(bytes.length === 20 && bytes.toString() === bytes_auto.toString(), 'FN: bs58checkDecode')
    const str = TBC.codec.bs58checkEncode(bytes, prefix)
    assert(str === source, 'FN: bs58checkEncode')
  }

  {
    const words12 = TBC.crypto.getMnemonic(128)
    assert(words12.split(' ').length === 12, 'FN: getMnemonic 128')

    const words18 = TBC.crypto.getMnemonic(192)
    assert(words18.split(' ').length === 18, 'FN: getMnemonic 192')

    const words24 = TBC.crypto.getMnemonic(256)
    assert(words24.split(' ').length === 24, 'FN: getMnemonic 256')

    const key = TBC.crypto.getKeyFromWords(words24, 'abcdefg')
    const secret_key = key.getSecretKey()
    assert(secret_key.slice(0,4) === 'edsk' && secret_key.length === 98, 'FN: getKeyFromWords')
  }

  {
    const hex_key = TBC.codec.getContractHexKey('KT1UynVe2zgSht3QHFUDpWkKvonFrcE1PZ8q')
    assert(hex_key === 'df/bc/db/b1/14/77863511f6ada9978be77b690be14a', 'FN: getContractHexKey')
  }

  {
    const edsig = TBC.crypto.signOperation(new Uint8Array([1]), 'edskS68LAmi2nQHCEzvMs9CAJaCpWWtkFTavc2DBnxLaNvFerXBgjggKNu9QFPTyT5BuE1ttNbkHj7c3Q4AuPtjaFzfyj4t9un')
    const spsig1 = TBC.crypto.signOperation(new Uint8Array([1,2,3,4,5,6]), 'spsk2nG1XBRvSJmh6BiwcBxox5DpMn4NcRzJakgACsrydqXRhXfBej')
    const p2sig = TBC.crypto.signOperation(new Uint8Array([1,2,3,4,5,6]), 'p2sk2ucp48wneFz9rwDvd4vsoqxNWHe5QTKcfnJ1JAyVJ3y77PgPSr')

    const edsig_prefix = TBC.codec.bs58checkPrefixPick(edsig)
    const spsig1_prefix = TBC.codec.bs58checkPrefixPick(spsig1)
    const p2sig_prefix = TBC.codec.bs58checkPrefixPick(p2sig)

    assert(edsig.length === 99 && edsig_prefix.name === 'ed25519_signature', 'FN: signOperation edsig')
    assert(spsig1.length === 99 && spsig1_prefix.name === 'secp256k1_signature', 'FN: signOperation spsig1')
    assert(p2sig.length === 98 && p2sig_prefix.name === 'p256_signature', 'FN: signOperation p2sig')
  }

  {
    const edesk = TBC.crypto.decryptKey('edesk1TgH1sGSQ2rwM1Sk475ikTLqeYrSH2a6tvUuZdzkox8C91n55pVGo7QpxbFhT1KAe3zpPFWPvrusrBY9fnc', 'a')
    const spesk = TBC.crypto.decryptKey('spesk29FVwwKJ4FXpJtGKraxS4QcDeaoBL1JPsnqnofUSAf9yFioRbfRq5eJEoXpcUBPKnFjj8WEfj7cQjZkRxAs', 'a')
    const p2esk = TBC.crypto.decryptKey('p2esk1qLhMDUemxyMkfjAjmKw5QQSp7FhGadvBgthrehjWwJSofUtcd56HpEv8GqutoA3hC8wMAqeU2sX5p4XHjX', 'a')

    assert(
      edesk.address === 'tz1hgWvYdzLECdrq5zndGHwCGnUCJq1KFe3r'
      && edesk.getPublicKey() === 'edpkunm1aRnRtHwVsBGSFgKmw5EhBn4gR6NC5JqVoAi57viSgAN3t5'
      && edesk.getSecretKey() === 'edskRjuxz9sYkZLsmyt5U2oLCsqJMLytt8ndke2jTEKHM8zneFSj8pZ8F4BQW3wQFWFkenBvSfzraBMHSoJWzMsnaq1oP1QQUU',
      'FN: decryptKey edesk')

    assert(
      spesk.address === 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'
      && spesk.getPublicKey() === 'sppk7aLxNrEXqt52YTEXmVwKQSu2phVrjnSQmF7V31xSAFXEq9PSETE'
      && spesk.getSecretKey() === 'spsk25jYUuHr7PF4yd1w4bc7XKcp8dDmR8y7mwc8b4c3F7UXYn7vxJ', 
      'FN: decryptKey spesk')

    assert(
      p2esk.address === 'tz3Vrs3r11Tu9fZvu4mHFcuNt9FK9QuCw83X'
      && p2esk.getPublicKey() === 'p2pk67SFY4XDMaACBrbJfvhmfLVx3wNfNt4inWHRsCdZc13b7CASxbm'
      && p2esk.getSecretKey() === 'p2sk33568Eg2DXkg4aLQxQG2nQkL8yr4F3tR5xfqttMgkDQZzgb6RW', 
      'FN: decryptKey p2esk')

  }

  {
    const key = TBC.crypto.getKeyFromSecretKey('edskS68LAmi2nQHCEzvMs9CAJaCpWWtkFTavc2DBnxLaNvFerXBgjggKNu9QFPTyT5BuE1ttNbkHj7c3Q4AuPtjaFzfyj4t9un')
    assert(key.address === 'tz1XErrAm8vFBzu69UU74JUSbvsmvXiQBy6e', 'FN: get key from secret key')
    assert(key.getPublicKey() === 'edpkv2FiD8nFLXC4XfAr33pqt7KfKxx9oH2tJdwqza2fjhGVYC8f31', 'FN: get key from secret key')
  }

  {
    const contents = [{"kind":"transaction","source":"tz1XErrAm8vFBzu69UU74JUSbvsmvXiQBy6e","fee":"9455","gas_limit":"10100","storage_limit":"0","amount":"10","counter":"5790","destination":"tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB"},{"kind":"transaction","source":"tz1XErrAm8vFBzu69UU74JUSbvsmvXiQBy6e","fee":"0","gas_limit":"67891","storage_limit":"0","amount":"0","counter":"5791","destination":"KT1AthoYG1RnR9wDrsk4euuXh22SteYmvoUC","parameters":{"prim":"Right","args":[{"prim":"Left","args":[{"prim":"Pair","args":[{"string":"tz1bfQHTZv1oM78fA1MXreBHua7wvKvS5uCe"},{"prim":"Pair","args":[{"int":"1"},{"prim":"None"}]}]}]}]}},{"kind":"origination","source":"tz1XErrAm8vFBzu69UU74JUSbvsmvXiQBy6e","fee":"0","counter":"5792","gas_limit":"11603","storage_limit":"323","managerPubkey":"tz1XErrAm8vFBzu69UU74JUSbvsmvXiQBy6e","balance":"5","spendable":true,"delegatable":false,"script":{"code":[{"prim":"parameter","args":[{"prim":"contract","args":[{"prim":"unit"}],"annots":[":X"]}]},{"prim":"storage","args":[{"prim":"unit"}]},{"prim":"code","args":[[{"prim":"CDR","annots":["@storage_slash_1"]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],"storage":{"prim":"Unit"}}}]
    const branch = 'BKzNLgzWbHxYaDoWw9ZmYvfpD8Hv13jP78WWTBo1qsQ5Kvv7mmZ'
    const result = TBC.localop.forgeOperation(contents, branch)

    assert(result === '2486a054c6fd81db84d8e5c0f09cdf04311e88369a54f86923ad17499b59fb2a0800007f3fb9969c45a907a20e487e14fc2347d15c0289ef499e2df44e000a0001806d2628efefae710659f622a5d667b12d379024000800007f3fb9969c45a907a20e487e14fc2347d15c0289009f2db392040000011954991caa46dee50c6c501cf962514ba43f71a800ff000000350508050507070100000024747a3162665148545a76316f4d37386641314d587265424875613777764b7653357543650707000103060900007f3fb9969c45a907a20e487e14fc2347d15c028900a02dd35ac302007f3fb9969c45a907a20e487e14fc2347d15c028905ff0000ff0000003802000000330500065a036c000000023a580501036c0502020000001c0417000000104073746f726167655f736c6173685f31053d036d034200000002030b', 'FN: local forgeOperation')
  }
}

const main = async () => {
  await fn_tests()
}

main()