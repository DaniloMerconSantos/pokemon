import IResource from "./resource";

export default interface IPokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: [
    {
      slot: number;
      type: IResource;
    }
  ];
}
