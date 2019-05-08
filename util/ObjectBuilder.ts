class ObjectBuilder {
  private obj = {};

  public prop(key: string, val: any): ObjectBuilder {
    this.obj[key] = val;
    return this;
  }

  public b() {
    return this.obj;
  }
}

export const objectBuilder = () => new ObjectBuilder();
