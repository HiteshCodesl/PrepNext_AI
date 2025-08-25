/*
  Warnings:

  - The `feedback` column on the `Interview` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "public"."Resume" DROP CONSTRAINT "Resume_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Interview" DROP COLUMN "feedback",
ADD COLUMN     "feedback" JSONB;

-- AddForeignKey
ALTER TABLE "public"."Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
