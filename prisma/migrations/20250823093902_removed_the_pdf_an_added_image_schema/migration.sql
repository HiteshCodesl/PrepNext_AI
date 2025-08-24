/*
  Warnings:

  - You are about to drop the column `ResumePdfFile` on the `Resume` table. All the data in the column will be lost.
  - Added the required column `image` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Resume" DROP COLUMN "ResumePdfFile",
ADD COLUMN     "image" TEXT NOT NULL;
