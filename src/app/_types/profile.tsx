export interface CoWorker {
    id: string;
    name: string;
    position: string;
    email: string;
    avatar?: string;
    status: 'online' | 'offline' | 'away';
    lastActive?: string;
    department?: string;
    phone?: string;
    joinDate?: string;
}