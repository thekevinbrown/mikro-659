import {
  PrimaryKey,
  BigIntType,
  Entity,
  Property,
  BaseEntity,
} from "@mikro-orm/core";

@Entity({ tableName: "test" })
export class Test extends BaseEntity<Test, "id"> {
  @PrimaryKey({ type: BigIntType })
  id!: string;

  @Property({ type: "string" })
  name!: string;
}
