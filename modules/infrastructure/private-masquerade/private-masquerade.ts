import { Construct } from "constructs";
import { Masquerade } from "../masquerade";

export class PrivateMasquerade extends Masquerade {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}
