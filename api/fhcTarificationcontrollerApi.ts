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
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcTarificationcontrollerApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  consultTarificationUsingPOST(
    ssin: string,
    xFHCTokenId: string,
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpNihii: string,
    hcpSsin: string,
    codes: Array<string>,
    date?: number,
    gmdNihii?: string,
    justification?: string,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string
  ): Promise<models.TarificationConsultationResult | any> {
    let _body = null
    _body = codes

    const _url =
      this.host +
      "/tarif/{ssin}".replace("{ssin}", ssin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (date ? "&date=" + date : "") +
      (gmdNihii ? "&gmdNihii=" + gmdNihii : "") +
      (justification ? "&justification=" + justification : "") +
      (traineeSupervisorSsin ? "&traineeSupervisorSsin=" + traineeSupervisorSsin : "") +
      (traineeSupervisorNihii ? "&traineeSupervisorNihii=" + traineeSupervisorNihii : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + traineeSupervisorFirstName
        : "") +
      (traineeSupervisorLastName ? "&traineeSupervisorLastName=" + traineeSupervisorLastName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.TarificationConsultationResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
