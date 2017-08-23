"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PMSParametersMockWebApiervice = (function () {
    function PMSParametersMockWebApiervice() {
    }
    PMSParametersMockWebApiervice.prototype.createDb = function () {
        var appraisalperiods = [
            { id: "11", description: '2015 Period', startdate: "01-01-2015", enddate: "12-12-2015", allowgoalsetting: "true", allowappraisal: "true" },
            { id: "12", description: '2016 Period', startdate: "01-01-2016", enddate: "12-12-2016", allowgoalsetting: "true", allowappraisal: "false" },
            { id: "13", description: '2017 Period', startdate: "01-01-2017", enddate: "12-12-2017", allowgoalsetting: "true", allowappraisal: "false" },
        ];
        return { appraisalperiods: appraisalperiods };
    };
    return PMSParametersMockWebApiervice;
}());
exports.PMSParametersMockWebApiervice = PMSParametersMockWebApiervice;
//# sourceMappingURL=pmsparametersmockwebapi.service.js.map