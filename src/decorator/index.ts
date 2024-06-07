export function ResourceChange(newResource: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      static RESOURCE = newResource;
    };
  };
}
