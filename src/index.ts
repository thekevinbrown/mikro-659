import { MetadataStorage, MetadataDiscovery, MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { SerializableCacheAdapter } from "./serializable-cache-adapter";

const go = async () => {
  const orm = await MikroORM.init({
    type: "postgresql",
    dbName: "cash2web",
    entitiesTs: ["./src/entities"],
    entities: ["./lib/src/entities"],
    metadataProvider: TsMorphMetadataProvider,
    tsNode: true,
    cache: {
      enabled: true,
      adapter: SerializableCacheAdapter,
    },
  });

  const discovery = new MetadataDiscovery(
    MetadataStorage.init(),
    orm.em.getDriver().getPlatform(),
    orm.config
  );
  await discovery.discover(true);

  const adapter = orm.config.getCacheAdapter() as SerializableCacheAdapter;
  adapter.serialize();

  await orm.close();
};

go()
  .catch((err) => {
    throw err;
  })
  .then(() => process.exit(0));
