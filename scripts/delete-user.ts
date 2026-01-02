import { prisma } from "../src/app/_lib/db";

async function deleteUser(email: string) {
    try {
        await prisma.user.delete({
            where: { email },
        });

    } catch {
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteUserById(id: string) {
    try {
        const deletedUser = await prisma.user.delete({
            where: { id },
        });

        console.log("User deleted:", deletedUser);
    } catch (error) {
        console.error("Error deleting user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteAllUsers() {
    try {
        const result = await prisma.user.deleteMany({});
        console.log(`Deleted ${result.count} users`);
    } catch (error) {
        console.error("Error deleting users:", error);
    } finally {
        await prisma.$disconnect();
    }
}

async function deleteTeamMember(managerId: string, coWorkerId: string) {
    try {
        await prisma.teamMember.delete({
            where: {
                managerId_coWorkerId: {
                    managerId,
                    coWorkerId,
                },
            },
        });

    } catch {
    } finally {
        await prisma.$disconnect();
    }
}

export { deleteUser, deleteUserById, deleteAllUsers, deleteTeamMember };

