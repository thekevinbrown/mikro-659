import {
  PrimaryKey,
  BigIntType,
  Entity,
  Property,
  BaseEntity,
  DateType,
} from "@mikro-orm/core";

@Entity({ tableName: "test" })
export class Test extends BaseEntity<Test, "id"> {
  @PrimaryKey({ type: BigIntType })
  id!: string;

  @Property()
  name!: string;

  @Property({ type: DateType, nullable: true })
  timestamp?: Date;
}
