/*
 * Copyright 2019 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import ContractLineCreate from "../../../src/Functions/ContractsRevMgmt/ContractLineCreate";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("ContractLineCreate", () => {
    before((done) => {
        return done();
    });
    beforeEach((done) => {
        return done();
    });
    afterEach((done) => {
        return done();
    });
    after((done) => {
        return done();
    });
    it("should build ContractLineCreate object", () => {
        const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <create>
            <CONTRACTDETAIL>
                <CONTRACTID>CT1234</CONTRACTID>
                <ITEMID>DWNL</ITEMID>
                <BILLINGMETHOD>Fixed price</BILLINGMETHOD>
                <LOCATIONID>US</LOCATIONID>
            </CONTRACTDETAIL>
        </create>
    </function>
</test>`;

        const record = new ContractLineCreate();
        record.controlId = "unittest";
        record.contractId = "CT1234";
        record.itemId = "DWNL";
        record.billingMethod = "Fixed price";
        record.locationId = "US";

        XmlObjectTestHelper.CompareXml(expected, record);
    });
});