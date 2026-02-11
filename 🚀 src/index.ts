import { ClaudeFarm } from "./core/farm";
import config from "../config/default";

const farm = new ClaudeFarm(config);

farm.start();
