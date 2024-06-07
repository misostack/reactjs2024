import { ResourceChange } from "../decorator";
import { BaseService } from "./base.service";

@ResourceChange("tasks")
export class TaskService extends BaseService {
  static checkResource() {
    console.log(TaskService.RESOURCE); // Should log "tasks"
  }
}

// Somewhere in your application, you can call this to test:
TaskService.checkResource();
