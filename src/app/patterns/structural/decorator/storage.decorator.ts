export const enum StorageType  { Local , Session }

const isNull = (item : any) => item === null || item === undefined;

export function Storage<Type>(key: string, storageType: StorageType = StorageType.Local, defaultValue: Type ): Function {
  return (target: any, propName: string) => {
    let _val: Type = target[propName];

    Object.defineProperty(
      target,
      propName, {
        get(): Type | unknown {
          if (!isNull(_val)) {
            return _val;
          }
          let item = JSON.parse(localStorage.getItem(key) as string);
          if (isNull(item)) {
            item = defaultValue;
            _val = defaultValue;
            localStorage.setItem(key, JSON.stringify(item));
          }

          return item;
        },
        set(item: Type): void {
          _val = item;
          localStorage.setItem(key, JSON.stringify(item));
        }
      }
    );
  };
}
