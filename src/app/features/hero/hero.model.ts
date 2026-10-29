
import { HeroMementoCreateDto, HeroMementoDto, HeroMementoVerbalDto } from "../hero-memento/hero-memento.model";

// --- Response DTOs ---

export interface HeroDto
{
    id: number;
    floorId: number;
    mementos: HeroMementoDto[];
}

export interface HeroVerbalDto
{
    floorName: string;
    mementos: HeroMementoVerbalDto[];
}

// --- Create DTOs ---

export interface HeroCreateDto
{
    floorId: number;
    mementos: HeroMementoCreateDto[];
}
