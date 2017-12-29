export class CoreObject {

  alias: string;
  id: number;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {

      if (f === "alias") {
        this.alias = fields[f];
      }else if(f === "id"){
        this.id = fields[f];
      }
      else {
        this[f] = fields[f];
      }
    }
  }
}
