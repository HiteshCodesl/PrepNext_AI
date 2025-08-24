/*
  Warnings:

  - The `feedback` column on the `Interview` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `finalized` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Interview" ADD COLUMN     "finalized" BOOLEAN NOT NULL,
DROP COLUMN "feedback",
ADD COLUMN     "feedback" JSONB[];

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Resume" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "ResumePdfFile" JSONB[],

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "public"."User"("clerkId");
