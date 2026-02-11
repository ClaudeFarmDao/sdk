import { runLoop } from "./loop";
import { createInitialState } from "./state";

export class ClaudeFarm {
  config: any;
  state: any;

  constructor(config: any) {
    this.config = config;
    this.state = createInitialState();
  }

  start() {
    console.log("🌱 Claude Farm starting...");
    runLoop(this.state, this.config);
  }
}
