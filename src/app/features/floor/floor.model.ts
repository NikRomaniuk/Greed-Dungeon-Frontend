
// --- Response DTOs ---

export interface FloorDto
{
    id: number;
    name: string;
    depth: number;
}

// --- Create DTOs ---

export interface FloorCreateDto
{
    name: string;
    depth: number;
}
