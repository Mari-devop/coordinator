-- CreateTable
CREATE TABLE "team_members" (
    "id" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "coWorkerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "team_members_managerId_idx" ON "team_members"("managerId");

-- CreateIndex
CREATE INDEX "team_members_coWorkerId_idx" ON "team_members"("coWorkerId");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_managerId_coWorkerId_key" ON "team_members"("managerId", "coWorkerId");

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_coWorkerId_fkey" FOREIGN KEY ("coWorkerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
