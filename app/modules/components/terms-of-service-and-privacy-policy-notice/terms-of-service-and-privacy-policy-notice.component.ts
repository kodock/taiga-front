/*
 * Copyright (C) 2014-2017 Andrey Antukh <niwi@niwi.nz>
 * Copyright (C) 2014-2017 Jesús Espino Garcia <jespinog@gmail.com>
 * Copyright (C) 2014-2017 David Barragán Merino <bameda@dbarragan.com>
 * Copyright (C) 2014-2017 Alejandro Alonso <alejandro.alonso@kaleidos.net>
 * Copyright (C) 2014-2017 Juan Francisco Alcántara <juanfran.alcantara@kaleidos.net>
 * Copyright (C) 2014-2017 Xavi Julian <xavier.julian@kaleidos.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: modules/components/terms-of-service-and-privacy-policy-notice/terms-of-service-and-privacy-policy-notice.directive.coffee
 */

import {Component} from "@angular/core";
import {ConfigurationService} from "../../../ts/modules/base/conf";

@Component({
    selector: "tg-terms-of-service-and-privacy-policy-notice",
    template: `
        <p class="register-text" *ngIf="privacyPolicyUrl && termsOfServiceUrl"
           [innerHTML]="'LEGAL.TERMS_OF_SERVICE_AND_PRIVACY_POLICY_AD'|translate:{termsOfServiceUrl: termsOfServiceUrl, privacyPolicyUrl: privacyPolicyUrl}">
        </p>`,
})
export class TermsOfServiceAndPrivacyPolicyNotice {
    privacyPolicyUrl: string;
    termsOfServiceUrl: string;

    constructor(config: ConfigurationService) {
        this.privacyPolicyUrl = config.get("privacyPolicyUrl");
        this.termsOfServiceUrl = config.get("termsOfServiceUrl");
    }
}