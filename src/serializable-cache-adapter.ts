export class SerializableCacheAdapter {
  private cache: { [key: string]: any } = {};

  public async get(name: string) {
    return this.cache[name];
  }

  public async set(name: string, data: any, origin: string) {
    // This breaks
    this.cache[name] = data;

    // This works
    // this.cache[name] = JSON.parse(JSON.stringify(data));
  }

  public async clear() {
    this.cache = {};
  }

  public async serialize() {
    console.log("Cache: ", JSON.stringify(this.cache));
  }
}
