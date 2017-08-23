import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "kpilistFilter"
})
export class KPIListFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.description.indexOf(query) > -1 || row.computationbasics.indexOf(query) > -1);
        }
        return array;
    }
}