var template_multiple_rates = '{{#rates}} {{#fy1}} <label for="perdiem-fiscal-year-1">Destination County</label> <select id="perdiem-fiscal-year-1" class="usa-select"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/fy1}} {{#fy2}}{{#multiple}} <br> <label for="perdiem-fiscal-year-2">Fiscal Year {{year}}, Destination County</label> <select id="perdiem-fiscal-year-2" class="usa-select"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/multiple}}{{/fy2}}  {{/rates}}';

var template_calculator_results = '{{#perDiemSearch}} {{#query}} <h2>Your search for <span>{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span> <span class="text-light">({{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}})</span>{{/query}}</h2> {{#results}} \
<div class="usa-alert usa-alert--info usa-alert--no-icon margin-bottom-2"><div class="usa-alert__body">\
    <p class="usa-alert__text"> \
        <span class="text-bold perdiem_total font-sans-lg">Estimated per diem total: ${{total}}</span> \
        <span class="text-regular text-no-wrap">(Max lodging total + M&IE total)</span> \
    </p> \
</div></div> \
 <div class="grid-row grid-gap-6"> \
    <div class="desktop:grid-col-6"> \
    <h3>Lodging breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
        <table class="perdiem_results lodging_table"> \
            <thead> <th>Date</th> <th>Daily Rate</th> <th># of Nights</th> <th>Total</th> </thead> \
            <tbody> \
            {{#breakdown}} <tr> \
                <td>{{date}}{{#isRate}}{{/isRate}}</td> \
                <td>{{#lodging}}${{lodging}}{{/lodging}}</td> \
                <td>{{nightCount}} </td> \
                <td>${{monthTotal}} </td>\
                </tr>\
            {{/breakdown}} \
            </tbody>\
        </table> \
        <p class="font-sans-lg">Max lodging total: <strong>${{lodgingTotal}}</strong></p>\
    </div> \
    <div class="desktop:grid-col-6 desktop:border-left-1px"> \
    <h3>Meals & incidental expenses breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
    <table class="perdiem_results mie_table"> \
            <thead><tr><th>Days, Month</th><th>Daily Rate</th><th># of Days</th><th>Total</th></tr><thead> \
            <tbody> \
                 {{#rateInfo}} \
                    <tr> \
                        <td>{{fullDate}}</td> \
                        <td>${{mie}}</td> \
                        <td>{{numberOfDays}}</td> \
                        <td>${{mieRowTotal}}</td> \
                    </tr> \
                {{/rateInfo}} \
                </tbody> \
        </table> \
        <p>*The first and last calendar dates of M&IE are calculated at 75%.</p>\
        <p class="font-sans-lg">M&IE total: <strong>${{mieTotal}}</strong></p>\
    </div> \
    </div>{{/results}} {{/perDiemSearch}}';

var template_calculator_results_print = '{{#perDiemSearch}} {{#query}} <h2>Your search for <span>{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span> <span class="text-light">({{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}})</span>{{/query}}</h2> {{#results}} \
<div class="usa-alert usa-alert--info usa-alert--no-icon margin-bottom-2"><div class="usa-alert__body">\
    <p class="usa-alert__text"> \
        <span class="text-bold perdiem_total font-sans-lg">Estimated per diem total: ${{total}}</span> \
        <span class="text-regular text-no-wrap">(Max lodging total + M&IE total)</span> \
    </p> \
</div></div> \
 <div class="grid-row grid-gap-6"> \
    <div class="desktop:grid-col-6"> \
    <h3>Lodging breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
        <table class="perdiem_results lodging_table"> \
            <thead> <th>Date</th> <th>Daily Rate</th> <th># of Nights</th> <th>Total</th> </thead> \
            <tbody> \
            {{#breakdown}} <tr> \
                <td>{{date}}{{#isRate}}{{/isRate}}</td> \
                <td>{{#lodging}}${{lodging}}{{/lodging}}</td> \
                <td>{{nightCount}} </td> \
                <td>${{monthTotal}} </td>\
                </tr>\
            {{/breakdown}} \
            </tbody>\
        </table> \
        <p class="font-sans-lg">Max lodging total: <strong>${{lodgingTotal}}</strong></p>\
    </div> \
    <div class="desktop:grid-col-6 desktop:border-left-1px"> \
    <h3>Meals & incidental expenses breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
    <table class="perdiem_results mie_table"> \
            <thead><tr><th>Days, Month</th><th>Daily Rate</th><th># of Days</th><th>Total</th></tr><thead> \
            <tbody> \
                 {{#rateInfo}} \
                    <tr> \
                        <td>{{fullDate}}</td> \
                        <td>${{mie}}</td> \
                        <td>{{numberOfDays}}</td> \
                        <td>${{mieRowTotal}}</td> \
                    </tr> \
                {{/rateInfo}} \
                </tbody> \
        </table> \
        <p>*The first and last calendar dates of M&IE are calculated at 75%.</p>\
        <p class="font-sans-lg">M&IE total: <strong>${{mieTotal}}</strong></p>\
    </div> \
    </div>{{/results}} {{/perDiemSearch}}';
