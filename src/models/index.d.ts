import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type HaveMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NeedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VaultMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerHave = {
  readonly id: string;
  readonly description?: string | null;
  readonly vaultID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHave = {
  readonly id: string;
  readonly description?: string | null;
  readonly vaultID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Have = LazyLoading extends LazyLoadingDisabled ? EagerHave : LazyHave

export declare const Have: (new (init: ModelInit<Have, HaveMetaData>) => Have) & {
  copyOf(source: Have, mutator: (draft: MutableModel<Have, HaveMetaData>) => MutableModel<Have, HaveMetaData> | void): Have;
}

type EagerNeed = {
  readonly id: string;
  readonly description?: string | null;
  readonly vaultID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNeed = {
  readonly id: string;
  readonly description?: string | null;
  readonly vaultID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Need = LazyLoading extends LazyLoadingDisabled ? EagerNeed : LazyNeed

export declare const Need: (new (init: ModelInit<Need, NeedMetaData>) => Need) & {
  copyOf(source: Need, mutator: (draft: MutableModel<Need, NeedMetaData>) => MutableModel<Need, NeedMetaData> | void): Need;
}

type EagerVault = {
  readonly id: string;
  readonly Code?: string | null;
  readonly Key?: string | null;
  readonly Have?: (Have | null)[] | null;
  readonly Needs?: (Need | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVault = {
  readonly id: string;
  readonly Code?: string | null;
  readonly Key?: string | null;
  readonly Have: AsyncCollection<Have>;
  readonly Needs: AsyncCollection<Need>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vault = LazyLoading extends LazyLoadingDisabled ? EagerVault : LazyVault

export declare const Vault: (new (init: ModelInit<Vault, VaultMetaData>) => Vault) & {
  copyOf(source: Vault, mutator: (draft: MutableModel<Vault, VaultMetaData>) => MutableModel<Vault, VaultMetaData> | void): Vault;
}