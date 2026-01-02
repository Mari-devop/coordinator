export interface CoWorker {
    id: string;
    name: string;
    position: string;
    email: string;
    status: 'online' | 'away' | 'offline' | 'busy';
    lastActive: string;
    department: string;
    phone: string;
    joinDate: string;
    avatar?: string;
}