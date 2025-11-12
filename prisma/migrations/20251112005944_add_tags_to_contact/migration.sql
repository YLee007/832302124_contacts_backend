-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
