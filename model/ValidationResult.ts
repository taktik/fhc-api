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
import { Id } from "./Id"
import { ValidationInfoType } from "./ValidationInfoType"

import { decodeBase64 } from "./ModelHelper"

export class ValidationResult {
  constructor(json: JSON | any) {
    Object.assign(this as ValidationResult, json)
  }

  card?: string
  ids?: Array<Id>
  infos?: Array<ValidationInfoType>
  isValidCombination?: string
}
