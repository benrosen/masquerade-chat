import { Construct } from "constructs";
import { Masquerade } from "../masquerade";

export class PublicMasquerade extends Masquerade {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}
