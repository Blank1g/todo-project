import { MigrationInterface, QueryRunner } from "typeorm";

export class Todos1720457543610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            ` 
                CREATE TABLE "todos"  (
                    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                    "title" character varying NOT NULL,
                    "description" character varying NOT NULL,   
                    "fileUrl" character varying,   
                    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                    "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                    CONSTRAINT "PK_811c966b6d6f3d1cf8b9b2b2f2d" PRIMARY KEY ("id")
                )
            `
        ), undefined;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`, undefined);
    }

}
