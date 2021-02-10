/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AddressCbssBaseType } from "./AddressCbssBaseType"
import { AnomaliesType } from "./AnomaliesType"
import { BirthInfoBaseType } from "./BirthInfoBaseType"
import { CivilStatesBaseType } from "./CivilStatesBaseType"
import { ContactAddressBaseType } from "./ContactAddressBaseType"
import { DeceaseInfoBaseType } from "./DeceaseInfoBaseType"
import { GenderInfoBaseType } from "./GenderInfoBaseType"
import { NameInfoBaseType } from "./NameInfoBaseType"
import { NationalitiesBaseType } from "./NationalitiesBaseType"

import { decodeBase64 } from "./ModelHelper"

export class CbssPersonResponseType {
  constructor(json: JSON | any) {
    Object.assign(this as CbssPersonResponseType, json)
  }

  address?: AddressCbssBaseType
  anomalies?: AnomaliesType
  birth?: BirthInfoBaseType
  civilStates?: CivilStatesBaseType
  contactAddress?: ContactAddressBaseType
  decease?: DeceaseInfoBaseType
  gender?: GenderInfoBaseType
  name?: NameInfoBaseType
  nationalities?: NationalitiesBaseType
  register?: string
  registerInceptionDate?: Date
  ssin?: string
}
