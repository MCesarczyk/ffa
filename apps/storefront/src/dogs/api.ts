import { DogGetByIdDocument, DogsGetListDocument, executeGraphql } from "@ffa/graphql-client";
import { DogDto } from "./types";

export const getDogs = async (page?: number, perPage?: number): Promise<DogDto[]> => {
  const first = perPage || 100;
  const skip = first && page ? first * page - 1 : 0;
  const { dogs } = await executeGraphql(DogsGetListDocument, { first, skip });

  return dogs as DogDto[];
};

export const getDogById = async (dogId: string): Promise<DogDto> => {
  const { dog } = await executeGraphql(DogGetByIdDocument, { id: dogId });

  return dog as DogDto;
};
