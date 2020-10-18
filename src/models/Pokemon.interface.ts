import { Ability } from "./Ability.interface";
import { Stats } from "./Stats.interface";
import { Type } from "./Type.interface";

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    location_area_encounters: string;
    abilities: Ability[];
    stats: Stats[];
    types: Type[];
}
