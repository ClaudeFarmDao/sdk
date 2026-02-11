import { observe } from "../agents/observer";
import { plan } from "../agents/planner";
import { act } from "../agents/actuator";

export function runLoop(state: any, config: any) {
  setInterval(async () => {
    const signals = await observe(state);
    const decision = await plan(signals);
    await act(decision, state);
  }, config.tickInterval);
}
