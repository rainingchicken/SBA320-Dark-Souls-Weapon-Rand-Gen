interface IRequirements {
  faith: number;
  strength: number;
  intelligence: number;
  dexterity: number;
}
interface IBonus {
  faith: string | null;
  strength: string | null;
  intelligence: string | null;
  dexterity: string | null;
}
interface IDamage {
  physical: number;
  magic: number;
  lightning: number;
  fire: number;
}

interface IWeaponData {
  name: string;
  requirements: IRequirements;
  weapon_type: string;
  attack_type: string;
  damage_reduction: IDamage;
  weight: number;
  damage: IDamage;
  durability: number;
  bonus: IBonus;
}

export type { IRequirements, IWeaponData };
