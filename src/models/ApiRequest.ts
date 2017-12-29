import { Session } from "./Session";
import { Target } from "./Target";

export class ApiRequest {

  constructor(public session: Session, public target: Target) {
    if (!target.parameters) {
      target.parameters = [];
    }
  }
}
